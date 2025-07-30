---
title: Spain Linea Directa Fined €300,000 for Unlawful Data Processing and Deficient Processor Contract
tags:
  - vendor_management
links:
  - https://www.aepd.es/documento/ps-00221-2022.pdf
date: 2025-02-04
---
# Summary

The Spanish Data Protection Agency (AEPD) has sanctioned LÍNEA DIRECTA ASEGURADORA, S.A. (LÍNEA DIRECTA) with a total fine of **€300,000**. This penalty is for **unlawful processing of personal data** without proper consent #consent, specifically consulting a client's driving license points from the Directorate-General for Traffic (DGT) website, and for **failing to establish a compliant data processing agreement** with its agent, MAJOREL S.P. SOLUTIONS, S.A. (MAJOREL) #vendor_management . The AEPD determined that LÍNEA DIRECTA, as the data controller, bypassed DGT's security measures to access sensitive personal data and that their contract with MAJOREL lacked the mandatory details required by the General Data Protection Regulation (RGPD).

# Details

## Background

The case originated from a complaint filed on **January 14, 2022**, by an individual (A.A.A.) against LÍNEA DIRECTA ASEGURADORA, S.A.. The complainant alleged that on **January 13, 2022**, after requesting a car insurance quote, MAJOREL S.P. SOLUTIONS, S.A. (MAJOREL), an exclusive agent of LÍNEA DIRECTA, **consulted their driving license points balance via the DGT website without obtaining their consent**. To do this, MAJOREL used the complainant's NIF and driving license expedition date, and an email address (***EMAIL.1) that did not belong to the complainant, to receive an access key from the DGT. The complainant provided a screenshot showing the DGT's "Request access key" page with their personal data and the unrecognized email address.

LÍNEA DIRECTA responded by requesting the complaint's dismissal, citing two legal bases for the processing: **Article 6.1(a) RGPD (consent) and Article 6.1(b) RGPD (contractual necessity)**. They argued that the consultation of driving points was integral to the insurance policy's pricing, which depended on whether the client had 15 points, and that the complainant had given **tacit consent** during the phone call. LÍNEA DIRECTA provided audio recordings of the conversation where the operator asked for the license date, stated they would "do the consultation," and the client responded with "yes" or "of course". #consent  They also presented a template for an informative email sent to clients _after_ the consultation, which they claimed remedied any omitted explicit information. LÍNEA DIRECTA later stated that they had **ceased this processing method** due to changes in the DGT's access system, rather than a voluntary decision to comply with data protection regulations.

MAJOREL, as LÍNEA DIRECTA's exclusive agent and data processor, also responded. They admitted that their operator **did not strictly request express consent**, thereby breaching internal norms and instructions provided by LÍNEA DIRECTA. However, MAJOREL maintained that the complainant was informed and implicitly authorized the consultation through their conduct, especially since the policy was subsequently contracted. MAJOREL also confirmed that **disciplinary measures**, including a 4-day suspension and removal from LÍNEA DIRECTA service, were taken against the operator for not following established protocols.

## Legal Analysis

The AEPD's analysis focused on two main violations: the **lawfulness of the data processing** (Article 6.1 RGPD) and the **adequacy of the data processing agreement** between LÍNEA DIRECTA and MAJOREL (Article 28 RGPD).

**Responsibility for Processing:** The AEPD determined that **LÍNEA DIRECTA is the data controller** because it designed and defined the purposes and means of the "15 points campaign" operation. MAJOREL acted as the data processor, treating personal data on behalf of LÍNEA DIRECTA. The AEPD rejected LÍNEA DIRECTA's argument that MAJOREL became the data controller under Article 28.10 RGPD due to the employee's non-compliance. The AEPD clarified that Article 28.10 RGPD applies only if the processor determines the _fines and means_ of the processing, which was not the case here, as MAJOREL's employee did not treat the data for a different purpose or with different means than those set by LÍNEA DIRECTA.

**Violation of Article 6.1 RGPD (Lawfulness of Processing):** The AEPD found that LÍNEA DIRECTA unlawfully processed the complainant's NIF, driving license expedition date, and points balance without a proper legal basis.

- **Lack of Informed Consent (Article 6.1.a RGPD):**
    - The complainant explicitly denied providing consent.
    - Consent must be **free, specific, informed, and unequivocal**, and must be obtained _before_ the data processing begins. The operator failed to inform the complainant about the specific purpose of collecting their license expedition date and re-using their NIF for the DGT consultation _prior_ to carrying it out.
    - The AEPD stated that the complainant's "yes" or "of course" in response to "one second while I do the consultation" was **not informed consent**, as it did not specify _where_ the consultation would be performed or _what information_ would be accessed. #consent #dark_pattern #change 
    - The post-consultation email informing the client of the process did not remedy the initial lack of information, as consent must precede processing. #consent 
    - LÍNEA DIRECTA's reliance on civil law concepts like "tacit mandate" or "ratification" from the Civil Code (Arts. 1710, 1892) was deemed **irrelevant**, as the RGPD explicitly defines the conditions for lawful data processing.
- **Not Necessary for Contractual Execution (Article 6.1.b RGPD):**
    - The AEPD concluded that the DGT points consultation was **not necessary** for either the pre-contractual measures or the execution of the insurance contract. The initial insurance price was already quoted, and the discount was part of a specific campaign, not a prerequisite for the contract itself. The AEPD distinguishes between the lawful processing for contract formation and the separate, unnecessary processing of DGT points. 
- **Nature of Data and DGT Access:**
    - The data involved (NIF, license expedition date, and points balance) are personal data. The points balance, particularly if it indicates a loss of points due to traffic infractions, is considered **sensitive information**. #sensitive 
    - The DGT's website, as documented by the AEPD, explicitly states that online consultation of points is **reserved for the interested person themselves** or a formally authorized representative through a specific DGT authorization process. LÍNEA DIRECTA designed a process that bypassed DGT's intended security and access controls by generating its own temporary email for the access key.

**Violation of Article 28 RGPD (Processor Agreement):** The AEPD found that the contract between LÍNEA DIRECTA and MAJOREL, along with its annexes, **failed to include the mandatory content** required by Article 28.3 RGPD. #vendor_management 

- Article 28.3 RGPD requires the contract to specify the **object, duration, nature, and purpose of the processing, the type of personal data, and categories of data subjects**. This is also mandated by sectoral insurance law (RDL 3/2020, Article 203.2).
- Despite LÍNEA DIRECTA providing "documented instructions" (e.g., through an internal manual and emails) to MAJOREL on how to conduct the "15 points campaign", the AEPD clarified that these instructions **do not substitute the mandatory contractual content**. The EDPB's guidelines confirm that while instructions can be separate, the core contract must detail the processing object, nature, and data type. The supplied contract and its annexes did not mention the DGT points consultation, the expedition date of the driving license, or the points balance as part of the data to be processed. #vendor_management #change 

## Sanction

The AEPD resolved to impose the following sanctions on LÍNEA DIRECTA ASEGURADORA, S.A.:

1. **€100,000 for an infringement of Article 6.1 RGPD** (lawfulness of processing), classified as a **very serious infraction** under Article 83.5.a) RGPD.
2. **€200,000 for an infringement of Article 28 RGPD** (processor agreement), classified as a **serious infraction** under Article 83.4.a) RGPD.

The **total fine amounts to €300,000**.

In addition to the financial penalties, LÍNEA DIRECTA is **ordered to adopt the necessary measures to adjust its operations** to the requirements of Articles 6 and 28 of the RGPD within **three months** from the resolution becoming enforceable. This specifically includes adapting its data processing agreements with insurance agents to meet Article 28 RGPD standards.

The AEPD considered several **aggravating factors** when determining the fine amount, pursuant to Article 83.2 RGPD and Article 76.2 LOPDGDD:

- **Nature, gravity, and duration of the infraction:** The processing involved circumventing the DGT's authentication system to access personal data (driving points), which is indicative of past traffic infractions and is considered sensitive. This operation was part of LÍNEA DIRECTA's core business and had been ongoing for at least 12 months, affecting numerous individuals.
- **Intentionality or negligence:** LÍNEA DIRECTA acted with a **"very grave lack of diligence,"** knowingly bypassing the DGT's access controls for personal data. The AEPD noted LÍNEA DIRECTA's own internal manual instructed employees to override existing email addresses on the DGT system to facilitate the query, demonstrating awareness of circumventing the normal process.
- **Connection to the infringer's business activity:** LÍNEA DIRECTA's core business as an insurer inherently involves extensive personal data processing, demanding a high level of diligence.
- **Categories of personal data affected:** The data included NIF, driving license expedition date, and the driving points balance. The AEPD underscored that knowing the points balance reveals information about traffic infractions, which is highly sensitive.

No attenuating circumstances were identified. LÍNEA DIRECTA's estimated sales volume for 2022 exceeded **€AMOUNT.3**, a factor that can influence the fine's proportionality. The resolution will become enforceable one month after its notification if no appeal is filed.