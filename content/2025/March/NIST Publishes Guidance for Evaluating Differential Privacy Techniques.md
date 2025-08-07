---
title: NIST Publishes Guidance for Evaluating Differential Privacy Techniques
tags:
  - privacy_engineering
  - methodology
  - nist
links:
  - https://www.nist.gov/news-events/news/2025/03/nist-finalizes-guidelines-evaluating-differential-privacy-guarantees-de
  - https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-226.pdf
date: 2025-03-06
---
The National Institute of Standards and Technology (NIST) has finalized guidelines for evaluating "Differential Privacy" (DP) guarantees, aiming to help organizations gain useful insights from databases while protecting individual privacy. These updated guidelines, published as **NIST Special Publication 800-226, "Guidelines for Evaluating Differential Privacy Guarantees,"** were released on March 6, 2025, expanding upon a draft from the previous year. The publication's goal is to assist a wide range of professionals, including business owners, product managers, privacy and security personnel, software engineers, data scientists, and academics, in understanding, evaluating, and comparing DP guarantees.

# Introduction to Differential Privacy (DP)

## What is Differential Privacy?

Differential privacy is a **mathematically rigorous framework for defining privacy** in data analytics. It works by **adding random "noise" to data** in a way that obscures individuals' identities while keeping the overall database useful for statistical information. The core promise of DP is that the chance of any outcome from a data analysis will be about the same whether or not a particular individual's data is included in the dataset. This effectively makes it appear as if an individual never contributed their data, protecting against inferences that directly rely on their specific contribution. However, it does not prevent inferences that can be made from general population-level information.

## Why Differential Privacy?

Traditional methods like **de-identification are often insufficient** because sophisticated attacks, such as linking attacks (matching de-identified data with auxiliary datasets) and reconstruction attacks (reconstructing original data from aggregate statistics), can compromise privacy. Differential privacy provides robust protection against _all_ potential privacy attacks, including those not yet conceived, and its privacy protection **composes across multiple data releases**. DP is distinguished by its rigorous mathematical definition, offering quantifiable bounds on privacy loss, unlike non-differentially private methods that cannot bound privacy risks.

## NIST's Role and the New Guidelines

NIST's guidelines aim to bridge the gap between the theoretical framework of differential privacy and its practical deployment, which is still in its early stages. The guidelines help organizations understand and consistently interpret DP claims and the trade-offs involved. They include interactive tools, flowcharts, and sample computer code to aid decision-making and illustrate how varying noise levels affect privacy and data usability. The publication is a **first step towards building standards for differential privacy guarantees**, which could lead to evaluation tools and certification processes, providing a clear signal of robust privacy protection for non-experts.

## The Differential Privacy Pyramid

A differential privacy guarantee relies on multiple interconnected factors, visualized in a "differential privacy pyramid" [15, 47, Fig. 1]. Each component's ability to protect privacy depends on the components below it, and all are vital for a meaningful privacy guarantee:

- **Top (Section 2):** **Privacy Parameters** (e.g., **ε** (epsilon) and **δ** (delta)) and the **Unit of Privacy** [48, Fig. 1]. These directly measure the strength of the guarantee.
- **Middle (Section 3):** **Algorithms & Correctness**, **Utility**, and **Bias** [48, Fig. 1]. This section describes techniques for achieving differential privacy and its properties.
- **Bottom (Section 4):** **Access Control**, **Trust Models**, **Side Channels**, and **Data Collection Exposure** [48, Fig. 1]. These contextualize the DP guarantee and describe practical deployment concerns.

# Key Components of a Differential Privacy Guarantee

## The Promise of Differential Privacy

Differential privacy quantifies privacy risk to individuals by ensuring that the likelihood of any outcome from a data analysis is roughly the same whether or not a specific individual's data is included. This means that **anything learned from a differentially private analysis could have been learned even if that individual's data was not present**. While it prevents improving inferences about individuals based on their specific data, it does not prevent general inferences based on population-level information.

## The Privacy Parameter ε (Epsilon)

The **privacy parameter ε (epsilon)** dictates how similar the results are in the two hypothetical worlds (with and without an individual's data).

- **Smaller ε** means the two worlds are nearly identical, indicating a **stronger privacy guarantee but lower accuracy**.
- **Larger ε** allows for greater differences, implying a **weaker privacy guarantee but higher accuracy**. This inverse relationship is known as the **privacy-utility tradeoff**. While no specific guidelines exist for setting ε, values less than 1 are generally considered reasonable for strong privacy, with 0.1 providing very strong protection. However, deployments have used values up to 20, and research suggests larger ε values (10 or greater) may not provide meaningful real-world privacy, potentially leaving outliers vulnerable. Differential privacy is **compositional**, meaning that the **individual ε values for multiple analyses of the same dataset can be added together to calculate an upper bound on the cumulative privacy loss, known as the "privacy budget"**.

## Variants of Differential Privacy

The original definition is **pure ε-differential privacy**. Several variants have been developed to model privacy loss more accurately and improve utility, particularly by enabling the use of Gaussian noise and tighter composition bounds.

- **(ε,δ)-differential privacy (approximate differential privacy)** includes an additional parameter, **δ (delta)**, which permits the mechanism to provide no privacy guarantee for rare events. To ensure meaningful real-world privacy and avoid "catastrophic failure," **δ should be set to a very small value, typically no more than 1/n^2 (where n is the dataset size)**. Values exceeding 10^-5 are generally suspicious.
- Other variants like **Rényi DP, Zero-Concentrated DP (zCDP), and Gaussian DP (GDP)** are preferred for iterative algorithms as they offer better utility without the possibility of catastrophic failure. **Comparing guarantees** from different variants is complex. Precise methods involve hypothesis testing, but a simpler, though less precise, approach is to **convert all variants to (ε,δ)-differential privacy**. However, this conversion can be "loose and lossy," potentially communicating a more pessimistic view of privacy loss or a misleadingly optimistic ε if δ is set too large. Therefore, it is always recommended to **report all original privacy parameters**.

## The Unit of Privacy

The "unit of privacy" defines what constitutes "one person's data" for purposes of the differential privacy guarantee, significantly impacting its real-world meaning.

- **Bounded Differential Privacy** vs. **Unbounded Differential Privacy**:
    - **Unbounded DP** defines neighboring datasets as differing by the **addition or removal** of one person's data, which protects the size of the dataset. This is generally considered a safer choice.
    - **Bounded DP** defines neighbors as differing by the **changing** of one person's data, where datasets maintain the same size. This can mean the dataset size itself is not protected.
- **Defining "One Person's Data":**
    - **Event-level privacy** defines neighboring datasets as differing by a single event (e.g., a single transaction or row). This can lead to **surprisingly weak privacy guarantees** for individuals who contribute multiple events, as the full strength of DP only applies to individual events, not their accumulated actions.
    - **User-level privacy** defines neighboring datasets as differing by **one user's entire data**. This provides a **much stronger real-world guarantee** and is recommended as the default setting.
    - Other units like attribute-level or user-day-level privacy are more complex and can also weaken the guarantee unexpectedly (e.g., user-day privacy can accumulate significant privacy loss over time).
- **Bounding Contributions:** To achieve user-level privacy when a user contributes multiple events, an **upper bound (k)** can be enforced on the number of events per user (e.g., keeping only the first k events). This transforms the unit of privacy to the user level but requires more noise due to increased sensitivity.

## Comparing Differential Privacy Guarantees

Direct comparisons between DP guarantees can be complex:

- A **smaller ε value** indicates a **strictly stronger** privacy guarantee.
- Guarantees with **different δ values are generally not directly comparable** [126, Fig. 6].
- Guarantees with **different units of privacy are not directly comparable**, with user-level privacy being strictly stronger than event-level privacy [127, Fig. 7].
- When converting between different DP variants to (ε,δ)-DP for comparison, the **choice of δ significantly impacts the resulting ε value**, making direct interpretation tricky [129, Fig. 8]. It is always best to report the original privacy parameters.

## Mixing Differential Privacy with Other Data Releases

Applying differential privacy to one data release does **not mitigate privacy risks associated with other (non-differentially private) releases** based on the same underlying data. It's crucial to consider the total impact of all releases. Post-processing a differentially private release to make it consistent with a non-differentially private one (by leveraging original sensitive data) also **does not fall under DP's post-processing invariance guarantee** and does not satisfy differential privacy.

## Auditing and Empirical Measures of Privacy

**Privacy auditing** involves experimentally testing the privacy level of a DP implementation. While auditing can be useful for **finding implementation bugs** (if a counterexample is found, DP is definitely violated), it **cannot _prove_** that a system correctly provides the desired DP guarantee. Auditing results can also be difficult to interpret and may underestimate risk to outliers. It should **supplement, rather than replace, privacy proofs**.

# Differentially Private Algorithms
## General Considerations for Algorithms

Implementing differentially private algorithms can be **tricky**. NIST strongly recommends using **well-tested, reputable, existing libraries** rather than developing custom implementations, as custom code significantly increases the risk of privacy vulnerabilities. Subject matter experts and third-party auditors are also recommended for design and implementation.

## Basic Mechanisms: Laplace and Gaussian

The two fundamental randomized functions (mechanisms) for achieving differential privacy are the Laplace mechanism and the Gaussian mechanism, both of which work by **adding noise to query outputs**. The amount of noise is scaled according to the **sensitivity** of the query, which measures how much the output could change when its input (a single unit of privacy) changes.

- **Laplace Mechanism:** Adds noise from the **Laplace distribution** and uses **L1 sensitivity** (Manhattan distance). It guarantees **pure (ε,0)-differential privacy**. It often provides better accuracy for low-dimensional outputs.
- **Gaussian Mechanism:** Adds noise from the **Gaussian (Normal) distribution** and uses **L2 sensitivity** (Euclidean distance). It guarantees **(ε,δ)-differential privacy**. It often provides better accuracy for high-dimensional outputs, where L2 sensitivity is typically much smaller than L1 sensitivity. The Gaussian mechanism cannot satisfy pure ε-DP.

## Utility and Accuracy

**Utility** refers to how useful data or a statistic is for a specific purpose, while **accuracy** is the difference between a mechanism's output and the true value. They are distinct: data can be accurate but not useful, or inaccurate but still useful.

- **Measuring Utility:** There's no single general solution for measuring utility for all questions. Outcome-specific metrics are possible if questions are known.
- **Measuring Accuracy:** Accuracy metrics like **absolute error** and **relative error** are often used as proxies for utility. Since random noise in DP mechanisms is theoretically unbounded, **confidence intervals** (e.g., 95% confidence interval) are used to indicate the likely range of error. Smaller ε values lead to larger expected errors [148, Fig. 10].
- **Comparison with Subsampling:** The Laplace mechanism with commonly used privacy parameters (e.g., ε=1) can often provide **better accuracy than simply subsampling** a fraction of the data [153, Fig. 12].
- **Monitoring Utility:** It's good practice to privately monitor the utility of differentially private statistics before release, but the monitoring process itself is not differentially private and results should not be made public.

## Bias in Differential Privacy

Differential privacy mechanisms can **introduce or magnify various types of bias**:

- **Systemic Bias:** Noise introduced by DP algorithms disproportionately impacts **smaller groups** more than larger ones. This can magnify or create biases in results, especially for marginalized groups, potentially leading to lower-quality outputs for minorities in machine learning models. This is an inherent property of robust anonymization.
- **Human Bias:** Data recipients may distrust differentially private results if they contain unexpected values like fractional or negative counts. Interventions to address this (e.g., rounding) can inadvertently introduce statistical bias.
- **Statistical Bias:** Occurs when the expected value of a released statistic does not match the true value. While the Laplace mechanism is unbiased, some DP mechanisms or post-processing (like forcing negative counts to zero) can introduce statistical bias, which increases as ε decreases [166, 167, 168, Fig. 16].

## Analytics Queries (Counting, Summation, Average, Min/Max)

- **Counting Queries:** Count rows with a specific property. They generally have a **low sensitivity (1)**, allowing for high utility with differential privacy, especially when each user contributes only one row. For **binned data (histograms)**, bins must be specified in advance or determined by DP algorithms to prevent privacy leakage from the bins themselves. To minimize relative error, minimize the number of data groups.
- **Summation Queries:** Calculate the sum of specific values. DP requires **bounding (clipping/clamping)** the maximum value of individual contributions to limit sensitivity. Clipping parameters should be set carefully, ideally without inspecting the sensitive data directly, to balance noise and bias.
- **Average Queries:** Determine the mean of a set of values. They can be achieved by decomposing into a differentially private summation query and a differentially private counting query, and then dividing the results. This can yield high utility for large datasets.
- **Min/Max Queries:** These aggregation functions are **not commonly used with differential privacy** due to their unbounded sensitivity. Differentially private quantile estimation is used instead to estimate dataset scale.

## Machine Learning with Differential Privacy

Machine learning models, especially deep neural networks, are susceptible to **privacy attacks** that can reveal information about their training data (e.g., membership inference attacks, direct data extraction).

- **Achieving DP:** The most common technique is **Differentially-Private Stochastic Gradient Descent (DP-SGD)**, which adds noise to the gradients during training. DP implementations also exist for other ML techniques like boosted decision trees and k-means clustering.
- **Utility:** Adding differential privacy to machine learning training generally **lowers accuracy**, sometimes significantly. Simpler models and larger training datasets typically lead to better accuracy with DP. **Pre-training models on publicly available data and then fine-tuning them on sensitive data with DP** can significantly improve accuracy by reducing the amount of information the model needs to learn privately.

## Differentially Private Synthetic Data

A **differentially private synthetic dataset** is algorithmically generated data that mimics the original dataset's properties (e.g., schema, correlations) but contains "fake" individuals.

- **Privacy:** Unlike non-differentially private synthetic data, which is vulnerable to privacy attacks, **DP synthetic data provides robust privacy protection** against current and future attacks.
- **Utility:** Synthetic data can introduce utility challenges, such as reducing accuracy for sub-populations (systemic bias) and adding extra sources of uncertainty, regardless of whether DP is used.
- **Generation Methods:**
    - **Via Private Marginals:** Involves calculating differentially private marginal distributions (e.g., noisy counts for different attributes) and then sampling from them to generate synthetic data. Preserving correlations between attributes is a major challenge.
    - **Via Deep Learning:** Generative models (e.g., GANs) can be trained with DP algorithms (like DP-SGD) to produce synthetic data. However, current deep learning-based DP synthetic data often produces **significantly lower quality data** than marginal-based approaches for low-dimensional tabular data, as generative models tend to be complex and highly affected by noise.

## Unstructured Data Challenges

Applying differential privacy to unstructured data (e.g., text, pictures, audio, video) is challenging due to the **difficulty in defining a meaningful "unit of privacy"**. It's often unclear who, in addition to the owner, appears in such data. If a suitable unit can be determined, DP statistics and machine learning models can be applied (e.g., for image recognition or natural language processing).

# Deploying Differential Privacy

## Query Models

Differential privacy deployments typically follow one of two query models:

- **Data Release Model:** Queries are **known and specified in advance** (e.g., U.S. decennial census). This model is simpler and more trustworthy because the original data can be discarded or highly secured after the DP results are calculated and released. The entire privacy budget can be allocated upfront.
- **Interactive Query Answering Model:** Queries are **not known in advance**, and analysts interact with the system on an ongoing basis. This offers greater flexibility but poses significant challenges for **privacy budgeting** (each query incurs additional privacy loss, potentially exhausting the budget) and **security** (sensitive raw data must remain available for querying, increasing breach risk). Malicious analysts might exploit system bugs or side channels.

## Trust Models

A **trust model** describes assumptions about the trustworthiness of different parties in a system: **data subjects**, **data curator** (who aggregates data), and **data consumer(s)** (who receive DP results). All models assume data subjects are trusted. The choice of trust model must align with real-world assumptions, as a failure in trust assumptions renders the DP guarantee meaningless.

- **Central Model:** Assumes a **trusted data curator** who stores all sensitive data centrally [226, 292, Fig. 21]. This model allows for the **smallest amount of noise** and thus maximum accuracy. Its main disadvantage is the requirement of a trusted curator, which may not always be realistic.
- **Local Model:** **Eliminates the need for a trusted data curator** by having each individual add noise to their own data _before_ sending it [228, 292, Fig. 22]. This provides stronger security, as the curator only sees noisy data. However, it results in **much less accurate answers** due to the aggregated noise from each individual, limiting its usefulness to queries with a strong "signal".
- **Future Directions (Shuffle and Secure Computation Models):** Ongoing research explores ways to achieve central model accuracy with stronger trust assumptions.
    - **Shuffling Model:** Uses partially trusted "shufflers" to add noise to batches of data from individuals, balancing accuracy and trust requirements.
    - **Secure Multi-Party Computation (MPC) and Fully Homomorphic Encryption (FHE):** Cryptographic techniques that allow computation on encrypted or distributed inputs without revealing the underlying data, potentially eliminating the need for a trusted curator. These are promising but currently very slow.
    - **Trusted Execution Environments (TEEs):** Secure hardware enclaves that decrypt data only within the CPU itself, offering enhanced performance but are still under development and have known vulnerabilities. These technologies alone cannot replace DP but can be combined with it for new applications.

## Mechanism Implementation Challenges (Side Channels)

Implementing DP mechanisms correctly is complex, and subtle differences between the mathematical definitions and their computer implementations can lead to unexpected privacy failures.

- **Floating-Point Arithmetic:** Finite precision of floating-point numbers can allow adversaries to infer sensitive values from noisy outputs. Most well-maintained libraries address this.
- **Timing Channels:** The time it takes for a query to run can inadvertently reveal information about the underlying data, particularly if untrusted analysts can craft and time their queries.
- **Backend Issues:** Underlying database systems not designed for DP can introduce side channels, such as error messages that leak private information (e.g., a divide-by-zero error indicating a specific data point's presence).
- **Tuning Hyperparameters:** Optimizing data-dependent hyperparameters (like clipping parameters) should ideally be done using non-sensitive data or differentially private algorithms to prevent privacy leakage from the tuning process itself.

## Data Security and Access Control

**Data security and access control policies** are critical because DP mechanisms often require direct access to the original, noise-free data. A data breach of the raw sensitive data can **nullify any differential privacy guarantee** for the leaked records. Strong security measures, including encryption and strict access controls, are necessary both when data is at rest and during computation.

## Data Collection Exposure

The **strongest approach to privacy is to minimize data collection**. While differential privacy offers robust protection, it **does not eliminate all risks associated with collecting sensitive data**. DP should not be an excuse to collect more data than necessary, as privacy hazards still exist. Paradoxically, collecting more information, such as user identifiers, can sometimes enable stronger DP guarantees like user-level privacy.

# Conclusion and Future Outlook

Differential privacy algorithms are considered the **best-known method for robust privacy protection** against both current and future attacks, even with multiple data releases. However, effective deployment requires careful consideration of several factors, most notably the **privacy parameter ε and the unit of privacy**, as inappropriate settings can render the protection minimal, leading to "privacy theater". The entire system implementing DP, including its security measures, must be rigorously considered.

NIST's publication is intended to be a foundational step towards establishing standards for DP guarantees, addressing privacy hazards, and ensuring robust deployments. While the path to standardization may be more challenging than for cryptography due to inherent privacy-utility tradeoffs, incompletely understood parameters (like ε's real-world impact), and conflicting stakeholder interests, sharing lessons learned from deployments will be crucial for advancing the field.