---
title: ICO Guidance on Anonymisation and Pseudonymisation
tags:
  - anonymization
  - methodology
links:
  - https://ico.org.uk/for-organisations/uk-gdpr-guidance-and-resources/data-sharing/anonymisation/
date: 2025-03-28
---
# About This Guidance

This guidance was published on March 28, 2025. It aims to help organizations understand and effectively apply anonymisation techniques to personal data. The primary purpose is to offer a **privacy-friendly way to use and share data** by ensuring that individuals are not identifiable.

## Why This Guidance Was Produced

The guidance acknowledges the benefits of sharing personal data but also the associated risks. Effective anonymisation techniques provide an alternative to sharing personal data while protecting privacy. It complements the data sharing code of practice by making sure people are not identifiable when data is used or shared.

## What This Guidance Is About

It details anonymisation and pseudonymisation techniques, their strengths and weaknesses, and their suitability in various situations. The guidance explains how these techniques affect data protection obligations, provides good practice advice, and discusses technical and organizational measures to mitigate risks. It covers processing under Part 2, 3, and 4 of the Data Protection Act 2018 (DPA 2018) and the UK General Data Protection Regulation (UK GDPR), highlighting differences where relevant. The guidance is not prescriptive but encourages a proportionate and risk-based approach.

## Who This Guidance Is For

This guidance is for any organization considering turning personal data into anonymous information. This includes organizations that:

- Are legally required to publish anonymous information (e.g., some health service bodies).
- Seek to use data innovatively (e.g., to improve services, design new products, train AI models).
- Need to comply with information requests under FOIA, EIR, or RPSI that involve personal data.
- Want to increase transparency and accountability.
- Aim to provide anonymous information for research or wider societal benefits.

## How This Guidance Is Structured

The guidance is divided into five main sections:

1. **Key Concepts:** Introduces anonymisation and pseudonymisation within the UK legal framework.
2. **Identifiability:** Covers concepts like the 'spectrum of identifiability,' managing identification risk, and tests like 'reasonably likely' and 'motivated intruder'.
3. **Pseudonymisation Technology:** Explores how pseudonymisation aids data protection compliance and effective technologies.
4. **Accountability and Governance:** Addresses requirements like data protection by design, DPIAs, and the use of trusted third parties.
5. **Case Studies:** Provides practical examples of effective anonymisation.

# Introduction to Anonymisation

## What Is Personal Data?

Personal data is defined in the UK GDPR and Section 3(2) of the DPA 2018 as **any information relating to an identified or identifiable living natural person**. Identification can be direct or indirect, through identifiers like names, identification numbers, location data, online identifiers, or factors specific to a person's physical, physiological, genetic, mental, economic, cultural, or social identity. Data protection law does not apply to information about deceased people.

## What Is Anonymous Information?

Anonymous information is data that **does not relate to an identified or identifiable natural person**, or personal data that has been rendered anonymous so that the data subject is no longer identifiable. Data protection law does not apply to anonymous information. If information is not effectively anonymised, it must be treated as personal data, and organizations must comply with data protection principles.

## What Is Anonymisation?

Anonymisation is the **process of turning personal data into anonymous information** so it falls outside data protection law's scope. **Effective anonymisation** involves technical and organizational measures to ensure the data meets the legal threshold for anonymisation under UK GDPR, meaning people are no longer identifiable. This can be complex for large datasets and may require specialist expertise.

## Is Anonymisation Always Necessary?

No. Data protection law provides a framework for fair, lawful, and transparent use of personal data. However, if anonymous information can achieve objectives, it should be considered instead of personal data.

## Is Anonymisation Always Possible?

No. Effective anonymisation may not always be possible due to the nature of the data, the purposes for which it is collected, used, or retained, or the context of processing. For example, medical records, even with names and addresses removed, might still allow re-identification based on treatment dates, locations, types of treatment, and approximate ages or other distinguishing characteristics.

## Benefits of Anonymisation

Anonymisation limits risks to individuals and facilitates information sharing with other organizations or the public, as fewer legal restrictions apply. Benefits include:

- Improved **risk reduction and management processes**.
- Adopting a **data protection by design** approach.
- **Protecting people’s identities** and reducing reputational risks.
- Providing **alternatives to deletion** for retained data.
- Assisting public authorities in complying with FOI or EIR requests.

Wider societal benefits include:

- Developing **public trust and confidence** in data use.
- Greater **transparency**.
- Incentivizing researchers by increasing **data availability**.
- **Economic and societal benefits** from disclosing otherwise non-disclosable information.
- Improved public authority **accountability**.

## Does Anonymising Personal Data Count as Processing?

Yes. **Applying anonymisation techniques to turn personal data into anonymous information is considered processing personal data** under data protection law. The resulting anonymous information is not subject to the law, but the anonymisation procedure itself is. This means organizations must comply with data protection requirements, including having a lawful basis and clearly defining purposes.

## Difference Between Anonymisation and Pseudonymisation

**Pseudonymisation** replaces direct identifiers with a reference number, de-coupling identifying information from the dataset. This is similar to 'de-identified' data in other contexts. **Pseudonymised data is still personal data** because individuals can be identified from additional information held separately. It reduces links between people and data but does not remove them entirely.

**Anonymisation**, in contrast, prevents any link between the information and the person concerned, making them not (or no longer) identifiable. If additional information still allows identification, the data is pseudonymised, not anonymised, and remains subject to data protection law. Anonymisation reduces the amount of personal data held, while pseudonymisation reduces the risks associated with personal data.

## What About ‘De-identified’ Personal Data?

The term 'de-identified' is not encouraged as a synonym for anonymous or pseudonymous data in UK data protection law due to a lack of formal definition and potential confusion. It is primarily used in connection with Section 171 of the DPA 2018, which criminalizes the re-identification of "de-identified personal data". In this context, 'de-identified' personal data refers to pseudonymised data or data that was thought to be anonymous but can be re-identified by reasonably likely means.

# How to Ensure Anonymisation Is Effective

Effective anonymisation ensures the **risk of identification is sufficiently remote** to minimize risks to individuals. Identifiability is a broad concept, encompassing many factors beyond just a name that can distinguish individuals.

## What Is Identifiability?

Identifiability concerns whether one person can be **distinguished from others with a degree of certainty**. This applies even if their name or 'real world' identity is unknown. Identifiers can be **direct** (e.g., name) or **indirect** (e.g., a unique assigned number). Data protection law provides a non-exhaustive list, including name, identification number, location data, and online identifiers.

## Key Indicators of Identifiability

Two key indicators for determining if information is personal data are:

- **Singling out:** The ability to single out the same person across records or isolate records related to a person from a dataset. This means that even if there's no intent to take action, the ability to isolate a person makes them identifiable. The risk of singling out depends on contextual factors (e.g., year of birth in a family vs. school context).
- **Linkability:** The ability to combine multiple records about the same person or group, from a single system or across different systems. This is also known as the mosaic or jigsaw effect, where seemingly insufficient individual data sources can lead to identification when combined. Simply removing direct identifiers is not enough for effective anonymisation if linkage is possible (e.g., with publicly available information like social media). Pseudonymous data is personal data because it retains linkability via additional information. An example includes the Netflix Prize dataset, where researchers re-identified users by linking with IMDB data.

## Inferences

An inference refers to the potential to **deduce new details about an already identified or identifiable person** from various sources. This can come from incomplete datasets, pieces of information in the same dataset not obviously linked, or other reasonably obtainable information (e.g., census data). The specific knowledge of others (e.g., doctors, family) can also enable inferences linked to identifiable persons.

## Spectrum of Identifiability

Identifiability exists on a spectrum, with **directly identified/identifiable people (personal data)** at one end and **impossible to identify (anonymous information)** at the other. The status of data can shift along this spectrum based on:

- The **specifics of the data** (e.g., sensitivity, anonymisation techniques).
- The **context of processing** (e.g., who the dataset is shared with).
- The **availability of other public information**.
- The **data environments involved** (technical and organizational controls).
- The **risk management process**. Organizations should keep their identifiability risk assessments under review as circumstances change.

## Assessing Identifiability Risk: The ‘Reasonably Likely’ Test

Data protection law requires considering "all the means reasonably likely to be used" to identify a natural person, either by the controller or another person. This includes objective factors such as the **costs and time required for identification, considering available and future technology**. If means are "reasonably likely" to be used to identify someone, the information is personal data. If no means are "reasonably likely," the information is anonymised. The more feasible and cost-effective a method becomes, the more it should be considered "reasonably likely". The assessment should consider:

- Whether the information is **easily identifiable with readily available means**.
- Whether techniques exist to **enable identification by anyone accessing it**.
- Whether **additional information** (public or otherwise) may enable identification.
- The extent to which **additional information or techniques are reasonably likely to be used** by a specific person to identify individuals. It's important to note that data can be personal data in one organization's hands but anonymous in another's, depending on access to additional information. Data protection law does not require reducing identifiability risk to zero, but rather to a **'reasonably likely' level**.

## The “Motivated Intruder” Test

This test is used to assess the identifiability risk of apparently anonymous information. It requires considering **all practical steps and means reasonably likely to be used by someone motivated to identify individuals** from anonymous information. A **motivated intruder** is assumed to be:

- Reasonably competent.
- Having access to appropriate resources (e.g., internet, libraries, public documents).
- Using investigative techniques (e.g., making inquiries). Intruders could include investigative journalists, estranged partners, stalkers, industrial spies, or researchers demonstrating anonymisation weaknesses. The assessment should consider their relationship to the data subject, background knowledge, and the perceived value of the data. **Obvious sources of information** for a motivated intruder include public records, genealogy websites, online services, press archives, AI tools, and releases of anonymous information by other organizations. Motivations for re-identification vary, from malicious reasons or financial gain to curiosity or demonstration attacks. Even seemingly innocuous data can carry high potential harm if re-identified (e.g., sensitive health conditions). The motivated intruder test can be performed internally or by an external organization with expertise in intruder testing or ethical hacking. **The type of data release impacts the test:**
- **Public release** requires a very robust anonymisation approach due to loss of control over the data.
- **Release to defined groups** (limited access) allows for more control and potentially richer data, with contractual arrangements and technical controls playing a key role. However, the possibility of external intrusion or inappropriate sharing must still be addressed.

## Approaches to Anonymisation Techniques

There are two main approaches:

1. **Generalisation:** Reduces the specificity of data by grouping or rounding, making it relate to multiple people. This reduces singling out risk. **K-anonymity** is a property ensuring each record is indistinguishable from at least k-1 others, preventing singling out. While simple to implement, it can be susceptible to homogeneity and background knowledge attacks and is less effective for data with many variables.
2. **Randomisation:** Reduces the certainty that a record relates to a particular person by altering individual records while maintaining overall statistical properties.
    - **Noise addition:** Adds random values to records or variables, preserving statistical properties. The amount of noise is crucial; insufficient noise means data isn't anonymous, while too much makes it unusable.
    - **Differential privacy:** A mathematical framework to quantify privacy loss, allowing determination of how much noise to add to achieve a specific privacy guarantee. It makes values harder to reveal, such as identifiers.
    - **Permutation:** Swapping or shuffling values across records to introduce uncertainty and increase difficulty in identifying people. It retains precise variable distribution but may be unsuitable where correlation between variables is important or if easily reversible.

## Masking

Masking involves **identifying and removing direct identifiers** or suppressing certain values/records. While effective alongside generalisation and suppression, **masking alone is not considered an effective anonymisation technique**. It can be combined with other techniques for more robust anonymisation.

## Anonymisation of Qualitative Data

Anonymising qualitative or unstructured data (e.g., meeting minutes, video footage) requires different techniques than quantitative data. Methods include:

- Removing direct and indirect identifiers from documents.
- Applying blurring or masking to video footage.
- Electronically disguising or re-recording audio material.
- Changing details in reports (e.g., place names, dates). This process can be time-consuming, not suited for bulk processing, and requires careful human judgment.

# Pseudonymisation

## What Is Pseudonymisation?

Pseudonymisation, as defined in Article 4(5) of the UK GDPR, is the **processing of personal data in a manner that it can no longer be attributed to a specific data subject without the use of additional information**, provided that such additional information is kept separately and is subject to technical and organizational measures to ensure non-attribution. It starts with original personal data and produces two outputs: the pseudonymised dataset and the separate, secure additional information, which together can reconstruct the original data.

## Is Pseudonymised Data Still Personal Data?

**Yes, pseudonymised data is still personal data**. The UK GDPR clearly states that pseudonymised data, which can be attributed to a natural person using additional information, is considered information on an identifiable natural person. This is because it does not change the status of the data as personal data, even if shared with another organization that does not have the additional information (in which case it might be anonymous in their hands).

#change 

> **Do we need to consider who else may be able to identify people from the data?** 
> 
> Yes. You should consider whether it is reasonably likely that someone else, or someone you are deliberately sharing the information with, can identify people. For example, either from that information, or from that and other information they may possess or obtain. 
> 
> This can sometimes be known as the ‘whose hands?’ question. This is about the status of the information in the different ‘hands’ of those who process it. 
> 
> You should note that the ‘whose hands’ approach only applies when disclosing information to an organisation who is not acting with you as a joint controller or as your processor. For example, if the information is personal data in your hands, it will also be personal data in the hands of the other parties, regardless of their technical or contractual ability to identify the people it relates to.

## Benefits of Pseudonymisation

Pseudonymisation helps reduce risks to individuals and aids in meeting data protection obligations, including data protection by design and security. Benefits include:

- Reducing risks to people's rights.
- Enhancing data security.
- Supporting re-use of personal data for new purposes (e.g., research, general analysis).
- Supporting overall compliance with data protection principles.
- Providing safeguards for international data transfers.
- Building trust and confidence in data processing.
- Demonstrating appropriate safeguards for research purposes. Pseudonymisation generally allows for greater data utility than anonymisation, but anonymous information should be considered first if it meets objectives.

## How Pseudonymisation Helps Reduce Risk

Pseudonymisation reduces risks to data subjects' rights and freedoms, which can result from data processing leading to physical, material, or non-material damage. It is relevant for Data Protection Impact Assessments (DPIAs) and Legitimate Interests Assessments (LIAs). It is specifically mentioned in requirements for **data protection by design** and the **security principle**, helping to implement principles effectively and ensure appropriate security levels. It is particularly relevant for the **data minimisation principle** by limiting identifiability to what is necessary. Pseudonymisation techniques can also reduce the risk of harm from **personal data breaches**, potentially affecting the need to notify individuals under Article 34 of the UK GDPR if the data is rendered unintelligible.

## Can Pseudonymisation Help Process Data for Other Purposes?

Yes. Data protection law may allow repurposing personal data for compatible purposes like research or further analysis if appropriate safeguards such as pseudonymisation are in place. This can be a factor when assessing compatibility of new purposes, particularly for archiving, scientific or historical research, and statistical purposes which are automatically considered compatible. Pseudonymisation also facilitates **general analysis** within an organization on pseudonymised data, provided technical and organizational measures ensure compliance and additional identification information is kept separate. General analysis typically involves deriving insights and trends from data without intending to take action about specific individuals.

## Offences Related to Pseudonymisation

Section 171 of the DPA 2018 defines two criminal offences related to re-identification:

1. **Re-identification:** Knowingly or recklessly re-identifying "de-identified personal data" without the controller's consent.
2. **Processing re-identified data:** Knowingly or recklessly processing personal data that has been re-identified where the re-identification itself was an offence. "De-identified" data in this context includes pseudonymised data or data that was believed to be anonymised but can be re-identified by reasonably likely means. Reversing pseudonymisation or ineffective anonymisation to attribute data to a specific person is a crime.

## Defences Against Re-identification Offences

Defences include situations where re-identification was necessary for preventing/detecting crime, required by law/court order, or justified in the public interest. It's also permitted if the person reasonably believed they were the data subject or had the controller's consent, or for "special purposes" (journalistic, academic, artistic, literary) if justified in public interest. **Security testing** of anonymisation/pseudonymisation techniques is allowed if justified in the public interest and does not cause/threaten damage or distress, provided the ICO or the de-identifying organization is notified.

## How to Approach Pseudonymisation

Organizations are responsible for implementing pseudonymisation and should clearly establish their goals and appropriate techniques. Key steps include:

- **Define goals:** What pseudonymisation aims to achieve (e.g., prevent third-party identification, ensure data accuracy, achieve data minimisation).
- **Detail risks:** Identify possible attacks (e.g., insider, external threats) and their goals (e.g., identification attacks).
- **Decide on technique:** Choose appropriate techniques based on nature, scope, context, purpose, risk factors, privacy protection, utility, and scalability goals. Regularly test and evaluate effectiveness.
- **Decide who performs pseudonymisation:** Can be the organization, a processor, or a joint controller. Separate functions (e.g., those who pseudonymise, those who access additional info, those who process pseudonymised data).
- **Document outcomes:** Clearly document decision-making processes, including technical and organizational security measures, in DPIAs, LIAs, or records of processing activities.

## Pseudonymisation Techniques

The most common techniques are:

- **Hashing:** Transforms input data into fixed-length "hash values" or "message digests". Intended to be one-way (irreversible). Robust hash functions are crucial to prevent calculating original input, educated guesses, or finding two inputs mapping to the same output. Using **salts or peppers** (random data added before hashing) enhances security. Algorithms like bcrypt are recommended for their resistance to brute-force attacks.
- **Encryption:** Can be symmetric (same key for encryption/decryption) or asymmetric (different keys). Robust encryption relies on key security and appropriate algorithms. Can generate consistent or randomised pseudonyms. Format-preserving encryption can encrypt identifiers while preserving their format.
- **Tokenisation:** Replaces identifiers with randomly generated tokens. Tokens have no mathematical relationship to original identifiers, making re-identification difficult. Efficient for large-scale processing and can link people across databases if the same token is used for the same person.

## Assessing Risk of Reversing Pseudonymisation

When implementing pseudonymisation, consider the risk of reversal attacks, including:

- **Brute-force attacks:** Systematically trying all possible input combinations.
- **Dictionary searches:** Pre-computing possible pseudonyms.
- **'Guesswork':** Based on frequency of characteristics. Effectiveness of attacks depends on the technique, configuration, attacker's background knowledge, data category, protection of additional information, and availability of other relevant information. Measures to mitigate risks include using appropriate key sizes, long salts/peppers, fully randomised techniques, techniques with no mathematical relation to identifiers (e.g., tokenisation), and testing computational feasibility of guessing secrets. Removing outlier values and applying robust technical/organizational measures for additional information are also crucial.

## Organizational Measures for Pseudonymisation

The UK GDPR requires keeping additional information separate from pseudonymised data using appropriate technical and organizational measures. Measures include:

- **Secure destruction** if not needed.
- **Secure storage** (e.g., encryption, robust key management).
- **Deletion from insecure media**.
- **Storing additional information in distinct physical locations** (e.g., separate databases).
- **Strict access control policies** for physical and logical access.
- **Encryption of additional information**.
- **Robust logging system** for access requests.
- **Appropriate key handling and storage**.
- **Secure backups** and testing recovery processes.

# Accountability and Governance Measures

A comprehensive governance approach is essential when producing and disclosing anonymous information. Clear processes, responsibilities, and oversight facilitate compliance.

## Governance Approach

Key areas to cover in a governance structure include:

- Planning for anonymisation and identifying/mitigating risks.
- Identifying who is responsible.
- Completing DPIAs.
- Defining the purpose of anonymisation.
- Working with other organizations (e.g., using Trusted Third Parties).
- Considering the type of data disclosure (open vs. limited access).
- Identifying and managing difficult cases.
- Ensuring transparency.
- Ensuring anonymisation remains effective and staff are trained.
- Staying updated with legal and technological developments.
- Considering other relevant legislation. All key decisions and their rationale must be documented.

## Responsibility for Anonymisation Process

Someone of sufficient seniority should oversee the anonymisation process and decision-making, possibly a Senior Information Risk Owner (SIRO). They should understand the circumstances, technical, and legal considerations, and work with the DPO.

## Purpose for Anonymising Personal Data

Anonymising personal data is a processing activity, so the purpose must be clearly defined along with technical and organizational measures.

- **As part of overall processing activities:** Anonymisation can be a way to comply with principles like data minimisation and storage limitation. This is generally compatible with original purposes unless there's an expectation of identifiable data retention.
- **As the overall purpose:** Generating aggregate statistical information can be the primary purpose, requiring clear communication with individuals about data collection.

## Working with Other Organizations

If disclosing anonymous information, collaborate with other organizations that might process or disclose other identifying information. A joined-up approach allows collective risk assessment and agreed mitigations.

## Type of Disclosure

Different disclosure types pose different risks:

- **Open release:** Data is available to anyone, with inherent loss of control. Requires very robust anonymisation.
- **Limited access:** Data is restricted to a defined group (e.g., closed research community). Allows for 'richer' data and better control over further disclosure or use. Particularly appropriate for sensitive source material.

## Limited Access Safeguards

When disclosing data to a restricted group, steps to prevent further disclosure include:

- **Contractual controls** and **robust technical/organizational measures**.
- **Purpose limitation** for recipients.
- **Training** recipients' staff on security and data minimisation.
- **Security checks** for data access.
- Controls over introducing other data to manage linkability risks.
- Restricting disclosure outside the environment.
- Prohibiting re-identification attempts.
- Measures for destroying accidentally re-identified personal data.
- Implementing security measures (e.g., encryption, access controls, confidentiality agreements).
- Limiting data copies and ensuring destruction/return after project completion.
- Imposing penalties for breaches.

## Identifying Potentially Difficult Cases

Anonymisation can be ineffective due to unknown data sources for matching or technological developments. Organizations should consider alternative state-of-the-art techniques and mitigate risks related to using anonymous information for decisions affecting identifiable individuals (e.g., discrimination, financial loss, bias). Sensitive data (special category data) carries additional risks if re-identified. A DPIA should be used for such assessments.

## Ensuring Transparency

Organizations must **explain their anonymisation approach in privacy notices** clearly and accessibly, including consequences. This builds trust and mitigates negative public opinion. Details should include:

- Why personal data is anonymised.
- How it is done (without undermining effectiveness).
- Safeguards in place.
- Risks and consequences, offering opportunities for queries.
- Public justification for publishing anonymous information. Public authorities should include FOIA, EIR, and RPSI obligations. Publishing DPIAs or summaries can also enhance transparency. Ongoing review of anonymisation outcomes is important due to technological changes.

## Ensuring Appropriate Staff Training

Staff involved in anonymisation decisions need a clear understanding of:

- The legal definition of anonymisation.
- Anonymisation techniques used.
- Associated risks and mitigation. Training plans should map appropriate levels of training and professional development, covering data protection, information governance, information security, and state-of-the-art tools.

## Mitigating Identification Risk Due to Security Incident

If a security incident leads to re-identification from data previously treated as anonymous, it may constitute a personal data breach if the anonymisation was ineffective. Governance procedures should address responses to increased identification risk due to technological developments or increased availability of additional information. Measures include using more rigorous techniques, adjusting parameters, implementing stronger technical/organizational controls (e.g., limited access safeguards), and ensuring identification testing considers state-of-the-art attacks. Encryption of anonymous information can make it unintelligible in a security incident.

## Other Legal Considerations

- **Freedom of Information (FOIA) and Environmental Information Regulations (EIR):** Public authorities must not disclose personal data if it breaches data protection principles. The motivated intruder test applies to assess re-identification risk in FOI/EIR disclosures. If data is personal and disclosure would breach principles, it must be withheld. Anonymisation can be an option to provide information.
- **Re-use of Public Sector Information Regulations (RPSI):** RPSI generally requires allowing re-use of information held by certain public bodies, but it does not apply to information exempt under FOIA, including personal data.
- **Human Rights Act (HRA):** Article 8 (right to respect for private and family life) may apply even to information not considered personal data (e.g., about deceased individuals), though this is outside the scope of the guidance.
- **Statutory prohibitions:** Other specific laws may prohibit disclosing even anonymised data.
- **Common Law Duty of Confidentiality (CLDC):** Applies when information is obtained with an expectation of confidence. It applies independently of data protection law.

# Case Studies

The guidance includes practical examples of anonymisation and pseudonymisation techniques.

- **Pseudonymising employee data for recruitment analytics (Rangreen):** Rangreen uses pseudonymisation for ATS data to understand employee characteristics and retention without identifying individuals for analytics teams. Direct identifiers are omitted, precise ages are generalized, and indirect identifiers are hashed using HMAC with k-anonymity scoring. Organizational controls include separated responsibilities, segregated duties, and log files. This approach allows building predictive models while significantly reducing re-identification risk to employees.
- **Trusted third parties for market insights (PriceSavvy and Market Lens with Truata):** Two separate controllers, PriceSavvy (retail chain) and Market Lens (market insights), use an independent Trusted Third Party (TTP) to anonymise their datasets independently. This enables PriceSavvy to gain market insights (e.g., customer spending headroom) by overlaying aggregated group-level information without direct linking of personal data. Technical measures include double-tokenisation, removal of residual identifiers, applying various techniques (hashing, FPE, redaction, generalisation, noise addition), and motivated intruder testing by the TTP. This ensures the resulting dataset is effectively anonymised, allowing valuable insights without using personal data during analysis.

# Glossary

The document includes a comprehensive glossary defining key terms related to anonymisation and pseudonymisation, such as: anonymisation, anonymous information, aggregated data, asymmetric encryption, brute-force attack, background knowledge attack, data release, dataset, data utility, de-identification, differential privacy, direct identifier, disclosure control methods, disclosure risk, disclosure, encryption, generalisation, hashing, homogeneity attack, identifiability, identifiable person, identified person, inferences, indirect identifiers, K-anonymity, key variable, limited access, linkability, masking, motivated intruder, motivated intruder test, noise addition, open data, plaintext, pepper, permutation, pseudonymisation, pseudonymisation secret, pseudonymous data, publishing, qualitative data, randomisation, reasonably likely, record linkage, re-identification, salting, Secure Multi-Party Computation (SMPC), singling out, statistical data, suppression, symmetric encryption, synthetic data, tabular data, tokenisation, Trusted Research Environment (TRE), Trusted Third Party (TTP), and 'Whose hands?'.