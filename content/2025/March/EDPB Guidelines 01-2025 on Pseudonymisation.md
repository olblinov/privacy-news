---
title: EDPB Guidelines 01-2025 on Pseudonymisation
tags:
  - methodology
  - anonymization
  - personal_data
links:
  - https://www.edpb.europa.eu/system/files/2025-01/edpb_guidelines_202501_pseudonymisation_en.pdf
---
# Introduction to Pseudonymisation

The General Data Protection Regulation (GDPR) introduces and defines 'pseudonymisation' as a **safeguard** that can be appropriate and effective for fulfilling certain data protection obligations. Pseudonymisation aims to **reduce risks to data subjects** by preventing the attribution of personal data to natural persons during processing, and in the event of unauthorised access or use.

While applying pseudonymisation, controllers retain the ability to **analyse data** and, optionally, to **merge different records** relating to the same person. Pseudonymisation can also be configured to allow **reversion to the original data**. It is important to note that **pseudonymised data, which can be attributed to a natural person using additional information, is still considered personal data**. This holds true even if the pseudonymised data and additional information are not held by the same person. Data is considered anonymous only if the conditions for anonymity are met, even if all additional information is erased.

The GDPR does not impose a general obligation to use pseudonymisation, nor does it preclude other data protection measures. It is the **controller's responsibility** to choose means to meet its obligations, considering the accountability principle. Depending on the nature, scope, context, purposes of processing, and risks, controllers may need to apply pseudonymisation to meet EU data protection law requirements, such as **data minimisation, data protection by design and by default, or ensuring an appropriate level of security**. In specific situations, Union or Member State law may even mandate pseudonymisation.

Pseudonymisation's **risk reduction** can enable controllers to rely on **legitimate interests** (Art. 6(1)(f) GDPR) as a legal basis, contribute to establishing **compatibility of further processing** (Art. 6(4) GDPR), or help guarantee an essentially **equivalent level of protection for data intended for export**. While powerful, pseudonymisation alone is usually not a sufficient measure for data protection by design and default or ensuring a level of security appropriate to risk. Controllers **must establish and precisely define the risks** they intend to address and shape pseudonymisation to effectively achieve this objective.

These guidelines aim to help controllers choose **effective techniques** for data modification, protect pseudonymised data from unauthorised attribution, and manage user rights when processing pseudonymised data.

# Legal Definition and Analysis of Pseudonymisation

## Legal Definition and Objectives of Pseudonymisation

Pseudonymisation is defined as "the processing of personal data in such a manner that the personal data can no longer be attributed to a specific data subject without the use of **additional information**, provided that such additional information is kept separately and is subject to technical and organisational measures to ensure that the personal data are not attributed to an identified or identifiable natural person".

**Attribution** means establishing that data relates to an identified person or linking data to other information for identification. A **pseudonymising transformation** modifies original data so that the result (pseudonymised data) cannot be attributed without additional information, often by replacing original data with pseudonyms. **Additional information** is what enables this attribution and is an inherent part of the pseudonymisation process. This includes information retained for consistent pseudonymisation or later reversal, such as lookup tables or cryptographic keys. This additional information itself may be personal data and must be kept separately and protected by technical and organisational measures, particularly by not disclosing it to those processing the pseudonymised data. Controllers should also consider additional information available _beyond their immediate control_, such as publicly accessible sources, in their assessment of effectiveness.

Pseudonymisation reduces **confidentiality risks** by preventing the disclosure of direct identifiers and lessening the severity of unauthorised access. It can also reduce the risk of **"function creep"**, where data is processed incompatibly with its original purpose, by preventing processors or other persons from using pseudonymised data for purposes requiring attribution. Moreover, assigning widely differing pseudonyms can enhance confidentiality and reduce **accuracy risks** by lessening incorrect attribution.

Pseudonymised data can often be **usefully analysed**, as much of the original information content is retained, and pseudonyms allow for the **linking of various records** relating to the same person without needing additional information. Pseudonymisation can be **partially or completely reversed** for planned attribution (e.g., identifying the data subject or reconstituting original data) using additional information, which should be done by specifically authorised persons. All processing operations, including planned linkage, must comply with the GDPR, notably Art. 5 (principles) and Art. 6 (legal basis).

## Pseudonymisation Domain and Available Means for Attribution

Controllers define the **pseudonymisation domain** as the context in which pseudonymisation is intended to preclude attribution of data to specific data subjects. This involves subjecting additional information to technical and organisational measures to ensure those within the domain cannot attribute the data. The domain may coincide with legitimate recipients, or it may be chosen to include unauthorised persons to mitigate adverse effects of their potential access. A controller may define the domain to encompass a single organisational unit, an external recipient, all authorised recipients, or even all external entities that might attempt unauthorised access.

**For effective pseudonymisation, all involved controllers and processors should ensure pseudonymised data does not leave the pseudonymisation domain**, possibly through **legal safeguards like contracts**. Within the domain, measures must ensure actors cannot reverse pseudonymisation, for instance, by limiting resources or preventing additional information from entering. If the domain is a defined set of recipients and measures are enforced, only means available within that planned context need to be considered for attribution. If pseudonymisation is applied internally, the domain is restricted to persons processing pseudonymised data, excluding those authorised to use additional information. When aiming to reduce risks from unauthorised third parties (including cyber-crime, employees acting without instruction), these parties should be included in the pseudonymisation domain, and their likely means for attribution assessed.

## Meeting Data Protection Requirements Using Pseudonymisation

Pseudonymisation is a valuable tool for meeting data protection requirements, but it is **often most effective when complemented by additional measures**.

## Pseudonymisation as an Effective Measure for Data Protection by Design and by Default

Pseudonymisation contributes to implementing data protection principles under Art. 25(1) GDPR, particularly **data minimisation and confidentiality**, and also **lawfulness, fairness, purpose limitation, and accuracy**.

For a controller's **internal processing**, pseudonymisation is appropriate when attribution is not needed for a given purpose, yet allows linking for exceptions or subsequent processing. This requires that persons handling pseudonymised data: cannot reconstitute original values, cannot link unconsistently pseudonymised data, and cannot single out data subjects based on their knowledge from handling the data.

For data **transmitted to and processed by an external recipient** (processor or controller), pseudonymisation is an appropriate measure for data minimisation, confidentiality, and purpose limitation. The objective is to prevent recipients from learning unnecessary identifying information or processing data for incompatible purposes. This also aids recipient controllers in meeting their obligations. If **safeguards (including contracts or legal acts) limit disclosure**, pseudonymisation can effectively implement these principles, provided the conditions in paragraph 65 hold for all recipients. More extensive measures and risk assessment are needed for external processing, with recipients demonstrably assuring data is not disclosed beyond the defined domain. For processors, **audits under Art. 28 GDPR** can support this assurance.

In a **group of collaborating controllers**, the pseudonymisation domain might consist of specific organisational units rather than the entire controllers. In such a setup, participating controllers must **demonstrably ensure that any relevant additional information is not disclosed to unauthorised recipients beyond the defined domain, and the capability to reverse pseudonymisation is reserved to authorised persons**. This may require **technical and organisational measures and legal safeguards**.

Pseudonymisation also constitutes an appropriate measure for **archiving, scientific, historical research, or statistical purposes** (Art. 89(1) GDPR) to ensure data minimisation.

Regarding **lawfulness, fairness, and accuracy**:

- Some EU or Member State laws may **mandate pseudonymisation** as a condition for lawful processing.
- For **legitimate interests** (Art. 6(1)(f) GDPR), controllers may consider the risk reduction achieved by pseudonymisation when balancing their interests against data subjects' rights and freedoms.
- Pseudonymisation can be an appropriate safeguard when considering **"compatible purposes" for further processing** (Art. 6(4)(d) and (e) GDPR), as it may limit consequences for data subjects.
- It contributes to the **fairness principle** and **accuracy principle** by reducing incorrect attribution.

## Ensuring a Level of Security Appropriate to the Risk

Pseudonymisation can contribute to a level of security appropriate to the risk of processing (Art. 32(1) GDPR) by **lowering the severity of consequences of unauthorised data access**. If additional information needed for attribution is not legitimately accessible, unauthorised actors in the pseudonymisation domain cannot easily use the data to the data subject's disadvantage. Controllers must still ensure an appropriate security level for the remaining risks. For pseudonymisation to be effective as a security measure, **additional information must only be available outside the pseudonymisation domain**. The controller must design the procedure so that attribution requires information beyond what selected actors possess or could reasonably obtain. Technical and organisational measures are needed to prevent domain actors from using that additional information. The overall security level depends on the security of both the pseudonymised data and the additional information; if additional information is easily obtainable, the security benefit is negligible.

Effective pseudonymisation can **mitigate adverse effects of data breaches**, potentially impacting obligations under Art. 33 and 34 GDPR. It may limit the impact of a breach, but careful analysis is needed to determine if risks are sufficiently reduced to render communication to data subjects unnecessary.

## Pseudonymisation as a Supplementary Measure for Third Country Data Transfers

Pseudonymisation can serve as a **"supplementary measure"** for transfers to third countries or international organisations (Art. 44, 46(1) GDPR) when standard safeguards (e.g., binding corporate rules, standard contractual clauses) might be ineffective due to the third country's legislation or practice. It can effectively protect transferred personal data from **disproportionate government access** if specific conditions are met.

These conditions include:

- Attribution of pseudonymised data requires additional information that public authorities of the recipient country **neither possess nor can obtain with reasonable effort**.
- Additional information is **held exclusively by the data exporter** and kept separately in an EEA Member State or a jurisdiction offering an essentially equivalent protection level.
- Authorities cannot single out a data subject based on the pseudonymised data and reasonably obtainable information. This implies that public authorities of the recipient country are considered part of the pseudonymisation domain.

Any pseudonymisation procedure design for transfers must assess what information the recipient country's public authorities can be expected to possess or obtain, even if it infringes their own legal norms. As an additional supplementary measure, **all entities holding additional information should provide sufficient guarantees to the exporter and be bound by contract or legal act (e.g., professional secrecy obligations) not to disclose the additional information**. If the importer accesses the exporter's technical infrastructure for storing additional information, the **exporter must retain exclusive legal and administrative control** and ensure access to additional information is limited to its own employees. Finally, the exporter or other holder of additional information must prevent its disclosure or unauthorised use through appropriate technical and organisational safeguards. These measures collectively ensure the **data exporter retains control over any attribution**.

Risk reduction through pseudonymisation may also justify transfers under Art. 49(1) second sentence GDPR if risks no longer override the controller's legitimate interests.

## Transmission of Pseudonymised Data to Third Parties

When transmitting pseudonymised data to a third party, controllers must assess if the risk reduction achieved for internal processing still holds, considering the recipient's means for attribution. Controllers should also apply the **data minimisation principle** and assess whether transmitting the full pseudonymised data, including pseudonyms, is required for lawful purposes (e.g., collating records, establishing a back channel). If not, **pseudonyms should not be transmitted**.

Controllers should consider **modifying or replacing pseudonyms before transmission** to minimise risks, such as those from data breaches, if the transmitted data is unlawfully combined with data they retain. This should be treated as a new pseudonymisation process, defining a suitable pseudonymisation domain and safeguards for the newly transformed data. The receiving controller should inform the sending controller about its processing risks and aid in determining the transformation.

If the recipient intends to rely on the risk reduction from pseudonymisation, or if law mandates processing in pseudonymised form, they should ensure the sender (or other holder of additional information) applies technical and organisational measures to prevent its use for attribution. The pseudonymisation domain should include the recipient and their processors. The **recipient should enter into a legally binding agreement** with parties holding additional information to ensure its appropriate treatment.

When several controllers combine different sets of pseudonymised data, they must have a legal basis, and their pseudonymisation objectives must be maintained. The pseudonymisation domain may need re-assessment.

Finally, if controllers transmit the additional information they hold, all GDPR obligations for personal data apply. Any such transmission must **prevent the additional information from becoming available within the pseudonymisation domain**. A **binding agreement with the receiver** may be needed to ensure proper treatment of the received information.

## Implications for the Rights of the Data Subjects

Since pseudonymised data (if attributable) is personal data, the **rights of the data subject under Chapter 3 GDPR apply**. However, Art. 11 GDPR recognises that a controller might not be able to identify the data subject, such as when they lack access to additional information and cannot lawfully obtain it or reverse pseudonymisation. In such cases, if the data subject does not provide additional information enabling identification, the rights enumerated in Art. 11(2) or 12(2) GDPR **may not apply**. The controller must inform the data subject accordingly.

If a data subject can provide the pseudonym(s) relating to them and proof of pertainment, the controller should be able to identify them, and data subject rights should apply. To facilitate this, controllers should indicate in their Art. 11(2) GDPR information **how data subjects can obtain their pseudonyms and use them to demonstrate identity**, and may need to provide contact details of the source or pseudonymising controller.

## Unauthorised Reversal of Pseudonymisation

Any breach of security leading to the **unauthorised reversal of pseudonymisation constitutes a personal data breach**. This may require notification to the supervisory authority unless unlikely to result in a risk to rights and freedoms of natural persons. If high risks are likely, the controller must communicate the breach to the data subjects. If direct communication is disproportionate, a public communication may suffice. A processor or person acting under authority acts unlawfully if they reverse pseudonymisation contrary to the controller's instruction, especially for an uninstructed purpose.

# Technical Measures and Safeguards for Pseudonymisation

## Pseudonymising Transformation

For effective pseudonymisation, pseudonymised data **must not contain direct identifiers** that could easily attribute data to subjects within the pseudonymisation domain. These identifiers are removed or replaced by pseudonyms, which can only be attributed using additional information. The transformation may also modify other attributes (e.g., removal, generalisation, noise addition).

The transformation often involves **secret data**, called "**pseudonymisation secrets**" (e.g., cryptographic keys, lookup tables). These secrets allow attribution and are part of the additional information, so they must be kept separately and protected by T&O measures against unauthorised use.

Two common classes of transformations are **cryptographic algorithms** (e.g., Message Authentication Codes (MACs), encryption) and **lookup tables**. The transformation needs to involve information that the pseudonymising controller keeps secret and an unauthorised person cannot use. **Preference should generally be given to one-way functions** due to their reversal difficulty, but encryption may be used if easy reversal is needed. Secrets should have **sufficient entropy** to limit brute-force attacks. Procedures and parameters might become vulnerable to advances, so controllers need a **plan for replacing weak algorithms** and existing pseudonyms without reconstituting original data if possible. Lookup tables involve generating unique pseudonyms and storing them with replaced identifiers. If unauthorised prediction is possible, a more secure generation method (e.g., hardware random number generator) is needed. Lookup tables require storing records for each data subject and are personal data, requiring protection from unauthorised access.

Controllers determine which attributes to modify based on objectives, the pseudonymisation domain, and potential attribution means within that domain. They should consider that **linked records (within or across datasets) may allow attribution** even if individual records do not, as linkage provides more attributes for matching. A smaller pseudonymisation domain and more restricted access generally mean less need to modify original data. Directly identifying attributes must be replaced or discarded, chosen based on purpose and objectives. **Quasi-identifiers** (e.g., demographic data) are combinations of attributes that can, alone or in combination, allow attribution. They can be prevented by removal, generalisation, randomisation, or by minimising information available in the pseudonymisation domain (e.g., limiting employees' access). These latter methods are not effective against unauthorised external third parties.

Pseudonymisation can be introduced during data collection via a "pseudonymisation proxy" (dedicated team processes incoming data and reverses pseudonymisation as needed) or "pseudonymisation at the source" (source controller performs pseudonymisation prior to transmission). Cryptographic methods can be used to verify attributes if the source is not fully trustworthy.

## Technical and Organisational Measures Preventing Unauthorised Attribution

To prevent unauthorised attribution, measures should focus on: protecting the pseudonymising transformation and its secrets; appropriately handling quasi-identifiers; and ensuring assumptions about the pseudonymisation domain (its scope, use of data, accessibility of information) are met.

For effectiveness, reversal of the pseudonymising transformation should not be possible with reasonable effort based on output alone. This involves randomly generated pseudonyms for lookup tables or pre-image resistant/indistinguishable cryptographic functions. **Pseudonymisation secrets must be kept confidential** and protected against unauthorised use. Access to systems performing transformations must be strictly controlled, and their integrity and confidentiality ensured. Appropriate technical measures include network segmentation, secret key storage in hardware security modules (HSMs), secure API access, rate limiting, and logging. Organisational measures include vetted, authorised personnel and proper training, especially for employees interacting with data subjects and accessing pseudonymised data. For data on data subjects' devices, controllers should use technical measures (e.g., cryptographic techniques, secure elements) to maintain assumptions about data accessibility and flow, given they usually don't control the devices.

## Securing the Pseudonymisation Domain

The **pseudonymisation domain must be properly secured and separated from additional information** for pseudonymisation to be effective. Measures should prevent additional information from entering the domain and, where possible, pseudonymised data from leaving it. The flow of pseudonymised data should be tightly controlled, with access control systems, secure APIs, timely deletion of copies, and authorised transmissions ensuring data remains within the domain. Ongoing confidentiality, integrity, and resilience of processing systems are crucial.

When the pseudonymisation domain consists of a defined set of recipients, the **responsibilities of all involved parties should be defined by an arrangement, preferably in contractual form**. These arrangements must reflect the need to keep pseudonymised data within the domain and limit the inflow of, or access to, attribution-enabling information among recipients. They should also regulate adapting assumptions about the domain. However, **such arrangements alone are not sufficient without corresponding effective enforcement**.

## Linking Pseudonymised Data

To allow linking multiple pieces of pseudonymised data for the same data subject with the same pseudonym, the pseudonymising transformation is regularly performed deterministically. Controllers define which data sets are consistently pseudonymised based on objectives. Three widely used types of pseudonyms are:

- **Person pseudonyms**: Consistent for all data relating to the same data subject, requiring long-term storage of secrets. This type carries a comparatively high risk of unauthorised attribution and may not significantly reduce risks from unlawful disclosure. Admissible only if linking is necessary and lawful.
- **Relationship pseudonyms**: Consistent for data processed for specific purposes defining a type of relationship with the controller (e.g., employee or customer). Secrets are maintained only for the duration of the relationship. Admissible if linking data within the same relationship is necessary and lawful, often when there is a common or compatible purpose. Generated by cryptographic algorithms with relationship-dependent secrets or stored in separate lookup tables.
- **Transaction pseudonyms**: Each individual transaction is pseudonymised differently. This contributes most effectively to data minimisation and data protection by default, preventing unlawful or unauthorised linkage across transactions. It is well-suited to mitigate risks from unlawful disclosure. Generated based on transaction-unique identifiers or randomly for each transaction in lookup tables.

Controllers should prefer **transaction pseudonyms** to comply with data minimisation and data protection by default, keeping consistently pseudonymised data sets as small as possible.

## Linking Data Pseudonymised by Different Controllers

Two or more controllers may lawfully link different sets of pseudonymised data they hold, aiming to process the linked data in a newly defined pseudonymisation domain. Approaches for controlled linking include:

- **Sharing pseudonymisation secrets**: Using cryptographic algorithms and sharing secrets among involved controllers. **This approach is generally not recommended** due to increased risk from multiple storage locations, enabling all controllers to attribute others' data, and increased complexity of secret renewal.
- **Jointly using a trusted service provider (TSP)**: Controllers **jointly contract among themselves and individually with the TSP**. The TSP, acting as a processor or controller, only needs to know the identifiers to compute uniform pseudonyms and returns them to the controllers. This allows each controller, if given access to the linked data set, to reattribute only the records they contributed.
- **Combination**: Some secrets are split between controllers and a TSP, and the TSP does not learn data subjects' identities.
- **Private set intersection**: Cryptography allows computing common pseudonyms without revealing direct identifiers or long-term pseudonyms of individuals not shared between parties.

In all these cases, the resulting pseudonymising transformation must be the same for all controllers, and pseudonyms must be based on common original identifiers. It is preferable to compute common pseudonyms from already pseudonymised data without reconstituting identifying attributes, if possible.

# Summary of Procedures for Pseudonymisation

Controllers intending to implement pseudonymisation should:

1. **Determine Objectives and Domain**: Define objectives, pseudonymisation domain, and which data sets will be processed consistently.
2. **Analyse Data**:
    - Identify direct identifiers and attributes for pseudonyms, applying criteria for consistent pseudonymisation.
    - Choose the pseudonymising transformation method and parameters (e.g., key length for crypto algorithms).
    - Determine what information to retain as additional information for attribution.
    - Identify quasi-identifiers within the pseudonymisation domain (considering reasonably accessible information).
    - Choose methods (omission, generalisation, randomisation) to modify or remove quasi-identifiers to prevent attribution without additional information, while retaining analysis ability.
    - Decide which parties (controllers, processors, specialised third parties) will execute the transformation, store pseudonymisation secrets, and apply T&O measures to ensure secrets are not used from within the domain and are protected.
    - **Assess the risk of attribution in the pseudonymisation domain** to ensure it is insignificant.
3. **Apply Transformation**:
    - Optionally, assign unique identifiers to data records pertaining to the same data subjects.
    - Replace chosen identifying attributes with pseudonyms, remove other identifiers, and store pseudonymisation secrets separately.
    - Modify or remove quasi-identifiers.
4. **Implement Measures for Additional Information**: All involved controllers apply planned T&O measures to additional information they keep for legitimate attribution, restricting access and use of secrets.
5. **Secure Pseudonymisation Domain**: All recipients apply appropriate T&O measures to safeguard the domain, preventing pseudonymised data from leaving it and attribution-enabling information from entering.
6. **Restrict Handling**: Controllers restrict handling of pseudonymised data as necessary to mitigate any remaining risk of reversal.

# Important Bits

- **Paragraph 51**: This paragraph emphasizes that for **external processing** (when data is transmitted to a processor or an independent controller), more extensive measures and risk assessment are required to prevent attribution of pseudonymised data to data subjects. Crucially, **all intended recipients must demonstrably assure that the pseudonymised data are not disclosed to unauthorised recipients beyond the defined domain**. For processors, tools like **audits under Art. 28 GDPR** are available to provide this assurance. This highlights the need for robust controls and verification when sharing pseudonymised data with third parties.
    
- **Paragraph 71**: This paragraph directly addresses the **data minimisation principle** in the context of transmitting pseudonymised data. It states that controllers should assess whether it is truly **required for lawful purposes to transmit the full pseudonymised data, including the pseudonyms themselves**. Examples of such purposes include collating data records transmitted at different times that relate to the same data subjects, or establishing a "back channel" where processed data needs to be returned to the sender. **In the absence of such specific reasons, pseudonyms should not be transmitted.** This underscores that even within pseudonymised data, unnecessary elements should be withheld to further minimise risk.
    
- **Paragraph 79**: This paragraph details a critical aspect of using pseudonymisation as an effective **security measure**. It states that **additional information sufficient to attribute the pseudonymised data to identifiable natural persons should _only_ be available outside the pseudonymisation domain.** The controller must carefully determine which actors (e.g., unauthorised third parties) the pseudonymised data needs to be protected from and assess what additional information these actors are reasonably likely to possess or obtain. The pseudonymisation procedure must then be designed to require additional information for attribution that goes beyond what these selected actors possess or could obtain with reasonable effort. This ensures that even if pseudonymised data is accessed without authorisation, it cannot be easily linked back to individuals.
    
- **Paragraph 101**: This paragraph defines **quasi-identifiers**. These are combinations of several attributes within the data (e.g., demographic data like age, gender, profession, income, or employment data like structural role, working hours) that, even without direct identifiers, can be **sufficient to attribute at least part of the pseudonymised data to data subjects.** The risk arises because persons handling pseudonymised data may know these quasi-identifiers for some individuals, allowing them to attribute the data without needing the pseudonymisation secrets or reversing the transformation. This points to the need for careful consideration of indirect identifiers in pseudonymisation design.
    
- **Paragraph 117**: This paragraph describes **relationship pseudonyms**. These are pseudonyms assigned to a data subject that are **consistent only for data processed for one or several particular purposes defining a specific type of relationship** with the controller (e.g., as an employee versus as a customer). Different pseudonyms would be used for different relationships. The pseudonymisation secrets for these pseudonyms are maintained only for the duration of that specific relationship. The use of relationship pseudonyms is **only admissible if linking different pieces of pseudonymised data relating to the same person _within that same relationship_ is necessary and lawful.** This condition is often met when there is a common or compatible purpose for processing within that relationship. This highlights a more granular approach to pseudonymisation for specific processing contexts.
    
- **Example 8: Risk reduction justifying further processing**: This example illustrates how pseudonymisation can enable further processing (Art. 6(4) GDPR) that might otherwise be incompatible with the initial purpose of data collection. A company operating a web-shop wants to analyze customer purchase data for product correlations. The **problem** is that raw purchase records can reveal sensitive conclusions about customers (economic situation, health, preferences), potentially leading to profiling and incompatibility with the initial collection purpose. The **solution** involves the company extracting the purchase history, **omitting all individualised entries and directly identifying attributes**. This pseudonymised data is then assigned to an **Organisational Unit of Analysts who have no access to any further customer data**. These analysts perform the analysis and summarise results in aggregated form before erasing all personal data they hold. The **effect** of this pseudonymisation is that the processing is unlikely to affect data subjects, allowing the controller to use this risk reduction when assessing the **compatibility of purposes** under Art. 6(4) GDPR. Depending on the specific case, this approach can lead to the conclusion that the analysis purpose is compatible with the initial data collection purpose.