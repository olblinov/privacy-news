---
title: Spanish DPA Fines Generali España €4 Million for Security, PbD and DPIA Breaches
tags:
  - security
  - dpia
  - pbd
links:
  - https://www.aepd.es/documento/ps-00453-2023.pdf
date: 2025-02-05
---
# Summary

The Spanish Data Protection Agency (AEPD) initiated a sanctioning procedure against Generali España, S.A. de Seguros y Reaseguros (Generali) following a cyber incident in October 2022 that exposed personal data of over **1.6 million ex-clients**. The AEPD found Generali to be in breach of four articles of the General Data Protection Regulation (RGPD): Article 5.1.f (Confidentiality), Article 25 (Data Protection by Design and by Default), Article 32 (Security of Processing), and Article 35 (Data Protection Impact Assessment - DPIA). Generali initially argued against these imputations, citing inaccuracies, lack of real harm, and the _non bis in idem_ principle, and defending its existing measures and the legal necessity for mediators to access ex-client data. However, the AEPD rebutted these arguments, confirming the breaches were distinct and resulted from a lack of appropriate technical and organizational measures. While Generali opted for voluntary payment without admitting responsibility, leading to a 20% reduction, the AEPD confirmed the original sanctions, totaling **€5,000,000**, which was reduced to **€4,000,000** upon payment, and ordered Generali to complete a DPIA.

# Details

## Background

On November 18, 2022, a complaint was filed with the Spanish Data Protection Agency (AEPD) against Generali España, S.A. de Seguros y Reaseguros (Generali). The complainants reported receiving communications from Generali about a **cybersecurity incident** that had occurred in their systems, resulting in the potential exposure of personal information of former clients.

The incident, detected on **October 5, 2022**, was a **brute-force attack** against Generali's client maintenance application (SMC). Attackers compromised the credentials of a insurance broker and used them to execute an automated brute-force attack by attempting multiple random DNI numbers. It was later confirmed that the attack had been ongoing since **September 19, 2022**, without being detected by Generali's systems. Initially, Generali believed only 37 individuals might be affected and decided not to notify the AEPD or the affected parties, as they lacked logs to determine the real impact.

However, on **November 11, 2022**, Generali became aware of the full extent of the data filtration when the cybersecurity company Lazarus informed them of the **sale of an ex-client database via a Telegram group**, providing a sample of 24,315 records. This revealed a software flaw in the SMC application that had allowed the compromised broker's credentials to access data of all Generali's ex-clients, not just their own clients. The exposed data included **names, surnames, DNI, phone numbers, date and country of birth, marital status, full address, and IBAN (bank account details)**. This new information led Generali to reassess the risk and conclude that notification to both the AEPD and affected individuals was necessary.

Generali subsequently communicated the breach to a large number of potentially affected ex-clients:

- **24,352 individuals** whose data was in the sample obtained from attackers were informed via email or postal mail on November 15, 2022.
- **1,092,543 ex-policyholders** not in the sample file were informed via email or postal mail between November 16 and 28, 2022.
- **399,153 ex-insured individuals** from individual policies, for whom contact data was unavailable, had the information included in the communication sent to the ex-policyholder.
- **166,621 ex-insured individuals** from collective policies, for whom contact data was unavailable, were informed via a public web communication visible from November 30, 2022, to March 31, 2023. The total number of potentially affected individuals exceeded 1.6 million.

The AEPD's investigation also found that:

- Generali lacked **risk analyses for the rights and freedoms of individuals** in the affected processing activity, only having a general description concluding a low impact and no need for a Data Protection Impact Assessment (DPIA). #dpia 
- **No second factor authentication** was implemented for insurance mediators in Generali's applications at the time of the attack. #security 
- There was an **absence of logs or traces** for transactions in the SMC system, which prevented immediate knowledge of the actual impact and affected personal data. #security 
- Despite the contractual link ending, **insurance mediators (both agents and brokers) could still access ex-clients' personal data** through the SMC application, although without editing capabilities, due to a technical flaw. #minimization #purpose_limitation 

Generali's financial information indicated significant business volume, with **premium volume reaching [...] in 2022**.

Generali submitted allegations against the AEPD's initial sanctioning agreement. They argued that the AEPD's assertions contained **inexactitudes**, specifically:

- They questioned the claim that data of 800,000 ex-clients, including IBAN, were publicly accessible in a Telegram forum, stating only that a user _claimed_ to possess the data and no public accessibility was proven. The AEPD countered that evidence showed the sale of a database of ex-clients on Telegram, confirming public exposure, and that mere exposure to an unauthorized third party breaches confidentiality.
- Generali contended that **no real harm** was proven for the affected individuals, as only one claimant sought unproven moral damages. The AEPD responded that the RGPD does not require "real" or tangible harm for an infringement to occur, emphasizing that loss of control over personal data and the materialization of risk constitute a violation of rights, as per RGPD Recital 85.
- Generali refuted that sensitive data, including **health data**, was involved, stating the affected system contained only identificative, contact, and payment data. The AEPD noted that Generali, as an insurer, necessarily processes health data (a special category under Article 9 RGPD), which implies broader obligations for DPIAs, security measures, and system design, even if the specific breach didn't involve these data directly.
- Generali defended the **legal and necessary access of mediators to ex-client information** for fulfilling various obligations (e.g., prescription periods, tax, and accounting). The AEPD differentiated between the obligation to retain data for legal purposes and the unrestricted access by mediators, asserting that retention does not justify open access and that Generali's post-breach measure to restrict access to active policyholders proved prior insufficiency.

## Legal Analysis

The AEPD initiated a sanctioning procedure for alleged infringements of **Articles 5.1.f, 25, 32, and 35 of the RGPD**, which are typified in Articles 83.4 and 83.5 of the RGPD. Generali argued that these imputations violate the **"non bis in idem" principle**, claiming multiple sanctions for essentially the same facts related to the SMC application breach.

The AEPD extensively clarified the _non bis in idem_ principle as applied in EU law, drawing on Article 50 of the Charter of Fundamental Rights of the EU (CDFUE) and European Court of Justice (TJUE) jurisprudence. For the principle to apply, there must be identity of the infringer, identity of the facts ("idem factum"), and identity of the protected legal norm. The AEPD countered that while the infringer is the same, the **facts and the legal goods protected by each infringed article are distinct**, leading to separate and differentiated infringements.

The AEPD provided a detailed analysis of each alleged infringement:

- **Vulnerability of Confidentiality (Article 5.1.f RGPD)**: The AEPD states that this is an **obligation of result**, meaning the infringement occurs when confidentiality is broken. The breach, exposing personal data of over 1.6 million individuals (including DNI, contact, financial details like IBAN) and making some data available on a public Telegram forum, constitutes a clear violation. Furthermore, the fact that insurance mediators could access ex-client data also violated this principle, as it constituted unauthorized access. The AEPD asserts that Generali acted with **gross negligence** by not adhering to the required diligence given its constant and extensive management of personal data. #security 
    
- **Data Protection by Design and by Default (Article 25.1 RGPD)**: This article requires **proactive integration of appropriate technical and organizational measures from the design phase**. The infringement stems from Generali's **failings in the design and configuration of its systems and processes**, specifically the SMC application. #pbd  The system allowed mediators to access ex-client data even after their contractual relationship ended, violating the **principles of data minimization and purpose limitation**. #minimization #purpose_limitation  The AEPD emphasized that the breach merely _revealed_ this pre-existing deficiency, and that reactive measures implemented post-breach (like segmentation of profiles and restriction of access to active clients) highlight the prior lack of protection by design. The fact that the application predated the full applicability of the RGPD does not excuse continuous compliance. Generali's activity as an insurer handling a large volume of sensitive data (including health data for certain products) further amplifies the need for robust protection by design.
    
- **Insufficiency of Security Measures (Article 32 RGPD)**: This article imposes an **obligation of means**, requiring data controllers to implement **appropriate technical and organizational security measures** adequate to the risk. The AEPD found that Generali's existing measures were insufficient, as evidenced by the breach itself and the subsequent verification. Specific deficiencies included the **lack of logs for transactions**, which hindered the immediate assessment of the breach's impact, and the **absence of multi-factor authentication** for mediators. The numerous reactive measures adopted by Generali post-incident (e.g., adding comprehensive traces, implementing multi-factor authentication) implicitly confirm the prior inadequacy of their security framework. Generali's activity involving the management of a considerable volume of personal data increases the inherent risk, requiring a higher level of security measures. The AEPD concluded there was **grave negligence** due to the failure to exercise the special duty of care required for an entity managing such data volumes. #security 
    
- **Lack of Data Protection Impact Assessment (Article 35 RGPD)**: This article mandates a DPIA when processing operations are likely to entail a **high risk** to individuals' rights and freedoms. Generali had determined that a DPIA was not necessary, concluding a low impact. However, the AEPD disagreed, citing the **considerable volume of clients and data processed**, the **combination of financial data (IBAN) with identificative and contact data** (increasing identity theft and financial fraud risk), and the **treatment of special categories of data (health data)** as an insurer. The AEPD emphasized that a DPIA is a fundamental tool for proactive risk identification and mitigation, crucial for entities handling large-scale, sensitive data. The non-performance of a required DPIA constitutes a direct infringement of this article. The AEPD found **grave negligence** in not conducting the DPIA despite the clear necessity based on the nature and volume of data. #dpia 
    

Regarding Generali's argument on **proportionality**, the AEPD dismissed it, stating that reactive measures, lack of prior sanctions, voluntary notification (which is an obligation), and adherence to codes of conduct are not considered attenuating circumstances in this context. The AEPD affirmed that the seriousness of the infringement, the large number of affected individuals, the nature of the data, and Generali's grave negligence justified the proposed sanctions and the application of aggravating factors.

## Sanction

The AEPD confirmed the commission of the infringements and the sanctions initially proposed in the preliminary agreement. The proposed sanctions were:

- For the infringement of Article 5.1.f (Confidentiality): **€1,000,000**. This is classified as a very serious infraction under Article 83.5 RGPD.
- For the infringement of Article 32 (Security of Processing): **€1,000,000**. This is classified as a serious infraction under Article 83.4 RGPD.
- For the infringement of Article 25 (Data Protection by Design and by Default): **€2,000,000**. This is classified as a serious infraction under Article 83.4 RGPD.
- For the infringement of Article 35 (Data Protection Impact Assessment): **€1,000,000**. This is classified as a serious infraction under Article 83.4 RGPD.

The sum of these proposed sanctions was **€5,000,000**.

Generali proceeded with a **voluntary payment** on April 12, 2024, without acknowledging responsibility, availing themselves of a **20% reduction** as per Article 85 of the LPACAP. This voluntary payment led to the termination of the administrative procedure. Consequently, the total definitive fine amount was reduced to **€4,000,000**. By making this payment, Generali waived any administrative appeals but reserved the right to challenge the resolution in the contentious-administrative jurisdiction.

In addition to the fine, Generali was **required to implement corrective measures**. Specifically, they must conduct and successfully complete a **Data Protection Impact Assessment (DPIA)** for their processing operations, with the minimum content required by Article 35 of the RGPD, and notify the AEPD of its adoption and results within three months. Failure to comply with this order could result in a new administrative sanctioning procedure. The resolution is fully executive upon notification due to Generali's renunciation of administrative appeals. However, Generali can request a precautionary suspension of the resolution if they intend to file a contentious-administrative appeal.