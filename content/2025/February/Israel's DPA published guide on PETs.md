---
title: Israel's DPA published guide on PETs
tags:
  - privacy_engineering
  - methodology
links:
  - https://www.gov.il/he/pages/guide_enhancing_technologies?utm_source=go.gov.il&utm_medium=referral
  - https://www.gov.il/BlobFolder/reports/guide_enhancing_technologies/he/PETs-Mongash.pdf
date: 2025-02-23
---
# Introduction to PETs

## Definition and Purpose

**Privacy-Enhancing Technologies (PETs)** are defined as a collection of digital approaches and solutions designed to **protect personal information**. They aim to enable the extraction of necessary value from data while simultaneously maintaining privacy. This is achieved through three main mechanisms:

- **Obfuscating personal information** required for use and reducing its level of detail.
- **Reducing the risk of exposure** of personal information during processing.
- **Increasing control** over the use of personal information.

## Importance and Contribution

The use of PETs contributes to **compliance with digital information protection and security laws** across various countries. They are crucial for **fostering trust** with users and are an integral part of **designing robust information systems**. PETs are considered part of an optimal set of tools for privacy protection, complementing existing legal and organizational mechanisms like the Data Protection Officer (DPO) and Privacy Impact Assessment (PIA).

## Document Objectives and Scope

The "PETs-Mongash.pdf" document aims to:

1. Present a **review of common and developing PETs**.
2. Provide **examples and considerations for integrating PETs** as part of privacy protection in processes, systems, and projects.

The document focuses on prominent and representative PETs, describing their basic operating principles, implementation considerations, existing applications, challenges, limitations, and special attention areas. It simplifies complex details for illustrative purposes and emphasizes that the examples are not exhaustive. The document does not delve deeply into general information security technologies, organizational processes (like PIAs), or specific legal frameworks beyond their impact on PET integration. Further details and specific information on each technology can be found in referenced external sources.

## Target Audience

The "PETs-Mongash.pdf" guide is intended for:

- Individuals responsible for **assessing privacy risks** and implementing appropriate responses in digital system and service development projects.
- Those involved in **implementing PETs** throughout a project's lifecycle, from initiation.
- Specifically, this includes **Data Protection Officers (DPOs)** and legal advisors specializing in privacy protection.
- **Product managers and project managers** involved in the development, implementation, and operation of information systems, services, and digital products. The document is designed to be accessible, **not requiring prior technical knowledge or technological background**.

# Key Principles and Concepts

## Privacy by Design (PbD)

**Privacy by Design (PbD)** is a fundamental principle that involves integrating privacy protection and information security aspects into the **design of systems and processes from their initial stages** (requirements and architectural concept) and throughout their entire lifecycle. This principle was adopted by the 32nd International Conference of Data Protection and Privacy Commissioners in Jerusalem in 2010 and has since been incorporated into significant regulations like the **European Union's GDPR** (General Data Protection Regulation). PETs are considered a vital component in implementing PbD, particularly in data collection, storage, and access protection. The decision to deploy PETs, especially for large volumes of sensitive data, can be part of a **Privacy Impact Assessment (PIA)** or ongoing risk management.

## Definition of "Personal Information" and PETs' Impact

The document refers to the definition of **"personal information"** in the Israeli Privacy Protection Law (1981, Amendment No. 13). This law defines an "identifiable person" as someone identifiable with reasonable effort, directly or indirectly, through identifiers such as name, ID number, biometric identifier, location data, or online identifier.

A significant implication of PETs is that when a technology makes information **impossible to reasonably link to an identifiable person** (even indirectly or through re-identification efforts), that information **will no longer be considered "personal information"** under the Privacy Protection Law. Consequently, the law's restrictions would not apply, and its use would not constitute a privacy violation. However, it is explicitly noted that even anonymized data can still be **vulnerable to various re-identification risks**.

# Categories of Privacy-Enhancing Technologies (PETs)

PETs are diverse in their form and function, adapting to different stages of the data lifecycle. They are broadly categorized into three main areas based on their operating principle:

## 1. Obfuscating Personal Information

This category focuses on methods to **reduce or eliminate the identifiability of personal data** for its intended use, typically during data collection and preparation. This involves modifying identifiers, removing details, blurring precise values, or adding "noise" to the data.

### Anonymization

**Principle:** Involves **removing or changing identifiers** to minimize or prevent the identification of the data subject. The goal is to make data unidentifiable, which, as discussed, can remove it from "personal information" classification. **Common Methods:**

- **Attribute Suppression:** Deleting irrelevant columns (e.g., student name when only teacher and grade are needed).
- **Record Suppression:** Deleting unique or easily re-identifiable rows (e.g., a single individual in an age group).
- **Character Masking:** Partially masking identifying data (e.g., changing part of a postal code).
- **Pseudonymization:** Replacing direct identifiers with fictitious ones (pseudonyms), which can be reversible or irreversible. While it reduces direct identification, the use of lookup tables for pseudonyms can increase re-identification risk if compromised.
- **Generalization:** Reducing the precision of data (e.g., replacing exact income with an income range).
- **Shuffling:** Randomly swapping values across different records for specific columns.
- **Noise Addition:** Deliberately introducing random noise or rounding values to obscure original data and prevent re-identification through cross-referencing.
- **Data Aggregation:** Replacing individual data with summary statistics (e.g., averages, sums, standard deviations). **Risks and Limitations:**
- **Identity Disclosure:** Full re-identification of an individual record, especially those with unique characteristics.
- **Attribute Disclosure:** Linking a specific attribute from the database to an individual, even if their identity is not explicitly revealed.
- Anonymization techniques, including suppression and generalization, are **not immune to re-identification**, especially when cross-referenced with other databases.
- The rise of **Big Data and AI significantly increases re-identification risks**. **Examples of Re-identification:**
- **Netflix Prize (2006):** Researchers successfully re-identified users' movie ratings by matching anonymous Netflix data with public ratings from IMDB, highlighting the privacy risk even in anonymized datasets.
- **Massachusetts Governor (1990s):** A researcher identified the medical records of the Massachusetts Governor by cross-referencing anonymous hospital data with public voter registration records, demonstrating the vulnerability of anonymized data to external information. **Anonymity Models:** **k-Anonymity** is a model to assess re-identification risk, ensuring that each record is indistinguishable from at least (k-1) other records within the dataset based on quasi-identifiers. The higher the 'k' value, the lower the re-identification probability, but also the lower the data's utility. The appropriate 'k' value depends on the specific data and context, requiring continuous evaluation.

### Synthetic Data

**Principle:** **Data generated based on the statistical patterns and characteristics of real (authentic) data**, without containing actual personal information. It aims to produce similar analytical results as real data, but with enhanced privacy protection. **Purpose:** Besides privacy protection, synthetic data can be used to **create large datasets for training AI models** or to simulate rare and edge-case events. It can be combined with or replace authentic data. **Generation Methods:**

- **Parametric Generation:** Building a statistical model of the source data's characteristics (e.g., mean, standard deviation, correlation) and generating synthetic data from this model.
- **Machine Learning and AI:** Generating synthetic data from patterns and characteristics learned from training data. **Risks and Limitations:**
- While not containing actual personal data, synthetic data can still be vulnerable to attacks that infer personal information:
    - **Database Reconstruction Attack:** Attempting to recreate the original personal data used to generate the synthetic data.
    - **Attribute Inference Attack:** Deducing personal attributes from the synthetic data.
    - **Membership Inference Attack:** Determining if a specific individual's data was part of the dataset used to create the synthetic data.
- Using synthetic data requires privacy risk analysis and potentially additional protection measures like k-Anonymity or Differential Privacy.

### Differential Privacy

**Principle:** A robust approach for datasets containing personal information, especially for statistical processing. It ensures that **adding, removing, or modifying a single record in the database only negligibly affects the results of a statistical function**. This is achieved by **adding random noise** to the actual data. The goal is to add enough noise so that true data cannot be identified from it, while still allowing accurate aggregate data analysis. **Mechanism Example (Randomized Response):** A technique for collecting answers to sensitive questions in a way that preserves individual privacy. A respondent's answer is randomized (e.g., by a coin toss), so the questioner cannot know if the specific answer is true or random. However, statistical analysis of a large enough sample can still reveal accurate population distributions. **Epsilon (ε):** A crucial parameter ("privacy budget") that determines the **level of noise added** to the dataset. A smaller ε value indicates a higher level of privacy for users, requiring stronger noise, but it makes the data less useful. **Limitations:**

- Outputs of differential privacy are typically **anonymous (aggregate) data**. They are effective for statistical analysis of general trends but less suited for identifying anomalies or specific patterns.
- The added noise means the results are not necessarily "perfectly" anonymous, and there's a risk of information leakage if not implemented properly, particularly through **repeated and persistent queries**.

## 2. Reducing Personal Information Exposure During Use

This category focuses on protecting data not just when it's stored or in transit, but crucially, **while it is being actively processed or computed** (in use). These technologies minimize data exposure and associated risks during processing.

### Homomorphic Encryption (HE)

**Principle:** An encryption method that allows **computations to be performed directly on encrypted data** without the need for decryption. This means data remains encrypted throughout the processing, significantly **reducing the risk of exposure** to unauthorized parties. **Process:** Data is encrypted, computations are performed on its encrypted form, and the result is then decrypted. **Types:**

- **Partially Homomorphic Encryption (PHE) & Somewhat Homomorphic Encryption (SHE):** Allow specific types or limited numbers of operations on encrypted data.
- **Fully Homomorphic Encryption (FHE):** Enables an unlimited number and types of computations on encrypted data. **Challenges:**
- HE introduces a **significant computational load** compared to processing unencrypted data. This limits its efficiency for large data volumes, making it more suitable for sensitive, smaller datasets.
- Requires precise implementation, appropriate encryption levels (key sizes), and secure key management.

### Zero Knowledge Proof (ZKP)

**Principle:** A technique that allows one party (the "prover") to **prove the truth or possession of a piece of information to another party (the "verifier") without revealing the information itself**. **Applications:**

- Verifying attributes like age or financial status without disclosing birth date or financial details.
- Proving ownership of an asset without revealing transaction details.
- Supporting authentication methods (e.g., facial recognition, fingerprints) where the biometric data itself is not shared. **Mechanism:** The prover performs a series of operations based on the secret information, and if the verifier consistently receives correct results, it confirms the prover's knowledge without revealing the secret. **Limitations:** ZKP provides a high level of certainty, but not absolute knowledge, regarding the truth of the information. Its effectiveness relies on proper protocol design tailored to specific queries and applications.

### Multi-Party Computation (MPC)

**Principle:** An encryption protocol that allows **multiple parties to jointly compute a function or perform operations on their private data without revealing their individual data to each other**. Each participant can receive the combined result without seeing others' inputs. **Classic Problem:** The "Millionaires' Problem" – two millionaires want to know who is richer without revealing their actual wealth to each other. **Mechanism (Secret Sharing):** A common method where data is split into multiple "shares" and distributed among participants. No single participant has enough shares to reconstruct the original data, requiring collaboration to access the full information. **Example:** Three employees calculating their average salary by splitting their individual salaries into random shares and distributing them among themselves, then summing the received shares to find the average without revealing anyone's actual salary. **Challenges:** MPC typically requires **significant computational effort and network communication** due to the complex processes involved in secret sharing and distributed computation. It can be resource-intensive for large-scale or complex tasks.

### Private Set Intersection (PSI)

**Principle:** A specific application of MPC that allows two parties to **find the common elements between their datasets without revealing any information about the elements not shared**. It can also be used to determine the size of the intersection or perform statistical calculations on the shared set. **Modes of Operation:**

- **Traditional PSI:** Parties directly communicate and each holds a copy of their dataset.
- **Delegated PSI:** Computation or data storage is delegated to a trusted third party. **Applications:**
- Finding shared contacts in messaging apps or social networks without revealing non-shared contacts.
- Contact tracing.
- Matching records in various databases, such as human genome data or contact lists. **Challenges:** Requires the precise implementation of cryptographic protocols and careful consideration of the level of trust between participating parties.

### Federated Learning (FL)

**Principle:** A machine learning approach that allows **multiple entities to collaboratively train an AI model on their respective local datasets without directly sharing the raw data**. Instead of sharing data, local models are trained on the distributed data, and only the _updates_ or _patterns_ from these local models are aggregated into a global model. **Modes of Operation:**

- **Centralized Federated Learning:** A central server coordinates the training process by distributing an initial model to edge devices/data sources, collecting updated models, and aggregating them into a new global model.
- **Decentralized Federated Learning:** Parties communicate directly with each other to update the model based on their local data, without a central server. **Challenges:**
- FL can create **significant computational load**, especially for large-scale data processing.
- Requires addressing **re-identification risks** that might arise from the models themselves, despite not sharing raw data.
- Often necessitates the integration of other PETs to enhance privacy protection.

### Trusted Execution Environment (TEE)

**Principle:** A **secure, isolated area within a computer, server, or mobile device** designed for processing sensitive information. The TEE provides a logically or physically separated environment from the rest of the system, ensuring that **unauthorized entities cannot access, modify, or observe the data or code while it is in use** within this environment. **Examples:** TEE capabilities are embedded in processors from companies like Intel (SGX), AMD (SEV), and NVIDIA, as well as in mobile operating systems like iOS and Android. **Applications:**

- **Biometric Authentication:** Securely verifying identity using facial recognition, fingerprints, or voice without exposing the raw biometric data.
- **Secure Code Execution:** Running sensitive algorithms (e.g., encryption) in an isolated environment to prevent exposure or tampering by other software or attackers.
- **Secure Payments:** Storing and protecting encryption keys for mobile payment services like Apple Pay and Google Pay.
- **Privacy-Preserving Data Analysis:** Supporting secure computations for technologies like Multi-Party Computation and Federated Learning. **Challenges:**
- Can incur **computational load**.
- Requires specialized knowledge in both hardware and software for implementation.
- Involves a degree of **trust in the manufacturer or developer** of the TEE.

## 3. Controlling Access to Personal Information

This category focuses on enhancing privacy by giving data subjects greater **control over who accesses their personal information** and providing mechanisms for convenient **monitoring of actual data access events**.

### Personal Data Stores (PDS)

**Principle:** Technological solutions that enable users to **manage, store, and utilize their personal data in an organized and secure manner**. They incorporate mechanisms to track access to the information. **Functionality:** PDS platforms can consolidate personal information from various sources (e.g., contact details, medical history, financial data) and are often hosted on cloud platforms or local devices. They are designed to ensure that only authorized users can access their data. **User Control:** PDS empower users to **control access permissions** to their data, selectively share data with others securely, and easily delete or update their information. **Example:** A user storing their financial information in a PDS and granting a mortgage bank temporary, controlled access to salary or transaction data for loan eligibility assessment, rather than the bank storing the data itself. This simplifies data transfer and gives the individual control over access permissions. **Challenges:** Requires significant **responsibility and diligence from the user** in managing permissions and ensuring data security.

### Documentation and Transparency Tools

**Principle:** Mechanisms that ensure **accurate, complete, and immutable documentation of access to personal information**, providing data subjects with effective means to **monitor how their data is used**. These tools foster trust and a culture of privacy protection by making data access activities transparent. **Examples:**

- **Estonia's Data Tracker Portal:** A governmental portal that displays detailed information about access to personal data held in government databases. This includes the date and time of access, the requesting organization, the accessed database, and the type of query or process for which the data was needed. This transparency has exposed cases of inappropriate data access, such as a police officer checking an ex-wife's address.
- **Australia's Medical Information Registry:** This system notifies citizens when their medical records are accessed or changed, ensuring transparency and preventing organizations from denying access later.

# Conclusion

The use of **Privacy-Enhancing Technologies (PETs)** significantly aids in protecting privacy through a diverse range of methods and tools. Their effective integration into products and systems requires a **holistic and systemic approach**, considering the sensitivity of the information, organizational processes, and legal frameworks involved. Expanding the application of PETs will contribute to **improving overall data protection in the digital age**, complementing and strengthening conventional legal enforcement mechanisms for privacy protection.