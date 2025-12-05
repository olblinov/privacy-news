---
title: France CNIL Fines SOLOCAL MARKETING SERVICES €900000 for Unlawful Prospecting and Data Transfers
tags:
  - fine
  - consent
  - direct_marketing
links:
  - https://www.cnil.fr/en/data-brokers-solocal-marketing-services-fined-eu900000
  - https://www.legifrance.gouv.fr/cnil/id/CNILTEXT000051630617
date: 2025-05-21
---
# Summary

The French Data Protection Authority (CNIL) imposed an administrative fine of nine hundred thousand euros (€900,000) and issued an injunction against SOLOCAL MARKETING SERVICES (SOMS) for multiple failures concerning commercial prospecting. The CNIL found SOMS, which acts as a data broker providing direct marketing services, violated Article L. 34-5 of the French Post and Electronic Communications Code (CPCE) by engaging in electronic prospecting (SMS and email) without possessing valid consent from the individuals concerned. Furthermore, SOMS violated Article 7(1) of the GDPR by failing to demonstrate proof of consent for data received from one of its major suppliers. Finally, the company violated Article 6 of the GDPR by transmitting prospect data (mobile phone numbers) to its clients for non-electronic prospecting (telephone/postal mail) without a sufficient legal basis, as the data subjects could not reasonably have expected this secondary transfer.

# Details

## Background

SOLOCAL MARKETING SERVICES (SOMS), a subsidiary of SOLOCAL GROUPE, provides direct marketing services alongside its primary activity of website design. The company relies on an extensive database, built from data supplied by approximately fifteen external primary collectors (data brokers/publishers of game contests), which contains information on nearly 35 million distinct French residents.

SOMS utilizes this data in two key ways:

1. **Electronic Prospecting:** It conducts commercial prospecting campaigns via SMS and email on behalf of its advertiser clients, having prospected over 5.2 million unique individuals by electronic means in 2022.
2. **Data Transmission (ListConnect):** It transfers segments of its prospect data to clients, enabling them to conduct their own commercial prospecting via postal mail and telephone.

The CNIL initiated a control on-site in October 2022 as part of its focus on the data broker ecosystem. The CNIL determined that SOMS is the data controller for the construction and administration of its database, the electronic prospecting operations based on that database, and the transmission of data to its clients.

## Legal Analysis

The CNIL’s restricted committee identified three distinct violations against SOLOCAL MARKETING SERVICES:

### 1. Failure to Obtain Valid Consent for Electronic Commercial Prospecting (Article L. 34-5 CPCE)

The core violation related to the consent mechanisms used by SOMS's primary data suppliers, typically linked to online sweepstakes entry forms. The CNIL found that the design of these forms employed misleading interfaces, making it impossible to obtain free and unambiguous consent as required by the CPCE and GDPR.

- **Deceptive Design:** The forms prominently displayed large, colored buttons labeled ambiguously (e.g., "I PARTICIPATE" or "I VALIDATE") which users were led to believe were necessary to complete their participation in the game. Clicking these buttons simultaneously registered consent for commercial prospecting. #consent #dark_pattern 
- **Concealment of Refusal:** Conversely, the option to participate in the contest without consenting to data use for commercial prospecting was buried within small hypertext links, often blending into the text and requiring careful attention to locate and use.
- **Responsibility of SOMS:** The CNIL asserted that SOMS, as the party responsible for the prospecting operations, was obliged to ensure the validity of the consent it relied upon, even if the data was collected by partners. The contractual requirements placed on suppliers and the verification procedures SOMS claimed to have implemented were judged "manifestly insufficient" given that all forms examined still failed to gather valid consent. The pervasive nature of these non-compliant forms across multiple major suppliers indicated a "systemic and non-isolated" failure.

### 2. Failure to Demonstrate Proof of Consent (Article 7(1) GDPR)

SOMS failed to meet its burden of proof under the GDPR regarding consent for data obtained from one of its primary suppliers ([X3]).

- **Inability to Provide Evidence:** For over 1.2 million individuals contacted via data supplied by [X3] in 2022, SOMS was unable to provide the delegation with the necessary information (such as collection scripts or copies of the forms) to demonstrate that valid consent had been obtained. #consent #privacy_engineering 
- **Irresponsible Reliance on Partner:** Although SOMS cited its partner’s failure to cooperate, the CNIL stressed that as the data controller, SOMS chose the method of compliance (relying on the partner’s initial collection) and could not use the partner’s non-cooperation to escape its own responsibility. The company delayed taking necessary action, continuing to use the data for nearly 17 months after realizing its partner could not provide the required evidence.

### 3. Lack of Legal Basis for Data Transmission (Article 6 GDPR)

The CNIL determined that SOMS lacked a legal basis for transmitting certain data segments to its clients for them to conduct their own subsequent non-electronic prospecting (telephone/postal mail).

- **Scope of the Violation:** This violation specifically concerned 78,172 mobile phone numbers collected by partners through sweepstakes forms.
- **Legitimate Interest Rejected:** SOMS tried to rely on the legal basis of legitimate interest. However, the CNIL found this illegitimate because while the individuals were informed that their data would be sent to SOMS (a first-rank recipient), they were given no information about a subsequent retransmission by SOMS to its own clients ("second-rank" recipients). Since the data subjects could not "reasonably expect" this onward processing, their fundamental rights outweighed the commercial interests of SOMS. #change #transfers 

(Note: The CNIL rejected the same charge for data sourced from public telephone directories, as the use of non-opposing subscriber data for postal/telephone prospecting falls within reasonable expectations).

## Sanction

The CNIL imposed the following corrective measures:

### 1. Administrative Fine

A public administrative fine of **€900,000** was levied against SOLOCAL MARKETING SERVICES.

In determining the amount, the CNIL considered several aggravating factors under Article 83 of the GDPR:

- **Gravity and Scope:** The breaches concerned fundamental principles of processing (licensing) and were systemic, affecting a very large number of people (several million, with SOMS's database covering about half the French population).
- **Negligence:** SOMS was strongly negligent, as the rules on commercial prospecting had been clear for years, and even after implementing compliance checks, the company continued to exploit non-compliant data.
- **Financial Advantage:** The company gained a financial advantage by being remunerated for providing the non-compliant data to its clients.
- **Financial Capacity:** The fine was based on the company's total revenue of €76.3 million in 2023, ensuring the sanction was both dissuasive and proportionate.

### 2. Injunction and Penalty Payment

The CNIL issued an injunction requiring SOMS to immediately **cease all electronic commercial prospecting operations** conducted without valid consent.

- **Astrente:** To enforce this measure, the injunction is coupled with a periodic penalty payment (astreinte) of **€10,000 per day of delay**, payable if the company fails to comply within nine months of the decision’s notification.
- **Justification:** The CNIL considered injunctions unnecessary for the Article 7 and Article 6 violations, as the company had either ceased utilizing the data from the non-cooperative partner or terminated the specific "ListConnect" activity involved.

### 3. Publicity

The deliberation was made public on the CNIL's website and on Légifrance, with the company’s identity set to be anonymized after a period of two years. This measure was deemed necessary due to the severity and scope of the violations.