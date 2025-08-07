---
title: Wind Tre fined €347,520 for Consent and Data Security Violations
tags:
  - consent
  - direct_marketing
links:
  - https://www.garanteprivacy.it/web/guest/home/docweb/-/docweb-display/docweb/10105764
date: 2025-02-28
---
# Summary

The Italian Data Protection Authority (Garante per la protezione dei dati personali) has issued a **fine of €347,520.00 against Wind Tre S.p.A.** for multiple violations of the GDPR and national privacy code. These violations primarily stem from **unlawful promotional telemarketing activities** conducted through third-party partners, where Wind Tre failed to adequately prove valid consent for data processing and exerted insufficient control over these partners. Additionally, the company was sanctioned for **inadequate technical security measures** that led to an unauthorized data access incident in its personal area for users, and for **failing to notify the Garante of this data breach**. While some initial contestations were archived due to Wind Tre's clarifications and implemented corrective measures, core violations related to consent validity and security failures were confirmed.

# Details

## Background

The "Provvedimento del 12 dicembre 2024 " document details a decision by the Garante per la Protezione dei Dati Personali, Italy's data protection authority. The proceedings were initiated against **Wind Tre S.p.A.**.

The case originated from three separate proceedings that were subsequently merged for a joint review due to their similar nature, focusing on data processing for promotional purposes and the adequacy of technical and organizational measures.

- One proceeding (fasc. 178557) arose from an **ex officio verification** conducted by the Authority as part of its efforts to combat illicit telemarketing practices, specifically examining Wind Tre's promotional activities. This included an **on-site inspection at Wind Tre on October 10-11, 2022**, where the company described its telemarketing campaign measures and plans for more stringent procedures. The inspection verified procedures, examined contracts, and reviewed user complaints.
- The other two proceedings originated from **complaints**: one concerning the **sending of promotional communications without consent** (fasc. 173400) and the other related to a **personal data breach** (fasc. 262138).

## Legal Analysis

The investigation led to the confirmation of several violations by Wind Tre:

**1. Unlawful Telemarketing Practices (Proceeding 178557):**

- **Inability to Prove Valid Consent and Inadequate Control over Partners:** Wind Tre was found in violation for its **incapacity to prove compliance with data protection norms (accountability)** and for **inadequate control over data processors** involved in promotional campaigns.
    - **Partner XX (Moldavia):** Wind Tre failed to adequately prove consent validity from lists acquired from this partner. Key issues included the partner's initial lack of an **EU representative (Art. 27 GDPR)** at the time of accreditation, which was a critical deficiency that Wind Tre could have easily verified. Furthermore, data was used for promotional purposes beyond the stated 24-month retention period, even with claimed "renewed" consents, without adequate proof. #retention 
    - **Partner XX S.r.l.:** Similar to the above, data was used beyond the stated retention period, and Wind Tre's verifications before acquiring lists from this partner were deemed inadequate. The company also struggled to immediately provide necessary documentation proving consent validity.
    - **Partner XX (vincosubito.it):** The privacy policy of the website used by this partner for data collection was found to have a vague and inadequate formulation regarding data retention periods for promotional purposes, rendering the collected consents invalid.
    - **Undocumented Consent:** For one specific user, Wind Tre failed to document the existence of prior consent for promotional calls, only providing a late, unclear timestamp without a legend.
    - **Invalidity of IP Timestamps:** The IP timestamps provided as proof of consent were deemed insufficient to reliably demonstrate the date of individual consents. They primarily attested to the date of registration to a site, not necessarily the specific consent for marketing, which could have been revoked or modified later. This was particularly relevant as many contacts originated from "cold lists" (lists prospect), despite Wind Tre's claims that they were "hot leads". #change #consent 
- **Promotional Communications Without Consent:** In a specific case, Wind Tre contacted a user (signaling party XX) who had previously and explicitly denied consent for promotional activities to Wind Tre, even though a third-party partner might have acquired consent from the user. The Garante emphasized that **a specific denial of consent to the data controller prevails over any general consent given to a third party**. This constituted processing for promotional purposes in the absence of valid consent.

**2. Data Security and Notification Failures (Proceeding 262138):**

- **Inadequate Technical Measures:** Wind Tre was found to have adopted **inadequate technical measures (Art. 5(1)(f) and 32 GDPR)**. A customer was able to view another customer's data when accessing their personal area due to an error in entering the client code. This was attributed to a **recent change in the login function that removed the tax code as a necessary credential**, consequently eliminating a crucial control that verified the client code against the CRM. This oversight led to an incorrect data association.
- **Failure to Notify the Garante of Data Breach:** Wind Tre failed to notify the Garante about the data breach (Art. 33 GDPR). The company argued that notification was not necessary because it had promptly remedied the anomaly and did not identify a serious prejudice for the data subject. However, the Garante clarified that notification to the supervisory authority is required unless it is _improbable_ that the breach poses a risk to individuals' rights and freedoms, regardless of the severity of prejudice for communication to the data subject.

**Archived Contestations:** Several initial contestations were archived based on Wind Tre's clarifications and corrective actions:

- **Use of non-ROC registered numbers:** Wind Tre successfully demonstrated that partners' numbers were registered with the ROC, clarifying that earlier registration dates were not immediately visible in the public register.
- **Calls to unauthorized numbers:** Wind Tre clarified that the seemingly "unauthorized" calls were made to its own customer base, which did not require external authorization or checks against the Register of Oppositions (RPO).
- **Unsolicited SMS (Proceeding 173400):** While two instances of unsolicited SMS were initially contested, the Garante archived this point. The first instance was due to a technical anomaly (reassigned number), and the second was a human error in campaign segmentation. Wind Tre demonstrated that it had implemented measures to prevent similar occurrences, including replacing the campaign platform with a new system that automatically excludes users without consent.

**Mitigating Factors & Corrective Actions by Wind Tre:** The Garante acknowledged Wind Tre's significant efforts and cooperation, which served as mitigating factors in determining the sanction. These included:

- **Suspension of "cold list" acquisition** for consumer clients since December 1, 2022, shifting to customer base and "hot leads" obtained through double opt-in.
- **Centralization of telemarketing activities** through a Campaign Management (CM) system to track calls and outcomes, with **API integration of partner CRM systems** to eliminate manual data entry and list transfers.
- Implementation of **training activities** for employees and partners on data processing.
- Dedicated **web page** for users to report unwanted calls, with subsequent controls by Wind Tre.
- Participation in the AGCOM working group to combat **CLI (Calling Line Identification) spoofing**.
- Providing the **"Please don't call" app** to customers and proactively **blocking international calls with non-compliant CLIs** (blocking approximately half a billion calls per month since March 2023), measures that were later mandated by law.
- Significant investment in a **"from contact to contract" system** for automated checks across the consent-contact-contract chain, including 100% quality checks on activated contracts and the use of "decoy numbers" in partner lists.
- Enhanced **partner accreditation procedures**, including detailed questionnaires, declarations of commitment, and remote/on-site audits.
- Timely intervention to implement **corrective measures** for the data breach incident to prevent recurrence.

## Sanction

The Garante determined that Wind Tre's conduct was unlawful, but given that all identified violations had already been remedied during the investigation, no further corrective measures were deemed necessary. However, a **pecuniary administrative sanction** was imposed.

- **Legal Basis:** The sanction is applied pursuant to Articles 58(2)(i) and 83 of the GDPR, as well as Articles 166(7) and 154-bis(3) of the Italian Privacy Code.
- **Consolidation of Fines:** As the violations were related to the same or linked processing, the total fine amount does not exceed the maximum for the most serious violation, aligning with **Article 83(3) GDPR**.
- **Maximum Edital Amount:** For businesses, the maximum penalty is **€20 million or 4% of the annual global turnover** of the preceding financial year, whichever is higher. Based on Wind Tre's 2023 balance sheet, the 4% threshold applied, setting the maximum edital fine at **€173,760,000**.
- **Aggravating Circumstance:** The **negligent nature of the violations**, particularly concerning the lack of diligence in selecting list providers and the inadequate assessment of risks when removing security controls, was considered an aggravating factor.
- **Mitigating Circumstances:** Several factors led to a significant reduction in the fine:
    - **Low level of damage** suffered by the data subjects.
    - The **extensive corrective measures** adopted by Wind Tre, leading to a radical change in operational methods, especially regarding cold lists.
    - The **high degree of cooperation** with the Authority, including timely remediation of the data breach and continuous dialogue for defining best practices in telemarketing.
    - The **categories of data involved were common data**, not special categories.
- **Final Sanction Amount:** Considering the balance between the rights of data subjects and business freedom, and prudently evaluating the criteria, the Garante decided on a fine of **€347,520.00**, which represents **0.2% of the maximum edital sanction**.
- **Payment & Publication:** Wind Tre has the option to **settle the dispute by paying half the comminated sanction (€173,760.00) within 30 days**. The full decision, including the sanction order, will be **published on the Garante's website**. The violations will also be recorded in the Authority's internal register.
- **Right to Appeal:** Wind Tre has the right to appeal the decision to the ordinary judicial authority within 30 days (or 60 days if the appellant resides abroad).