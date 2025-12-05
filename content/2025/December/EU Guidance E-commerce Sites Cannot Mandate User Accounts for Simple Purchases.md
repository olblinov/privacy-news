---
title: EU Guidance E-commerce Sites Cannot Mandate User Accounts for Simple Purchases
tags:
  - edpb
  - minimization
links:
  - https://www.edpb.europa.eu/system/files/2025-12/edpb-recommendations-202502-mandatory-user-accounts_en.pdf
  - https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2025/recommendations-22025-legal-basis-requiring_en
date: 2025-12-03
---
# Introduction and Context

The EDPB Recommendations 2/2025 address a common practice in the e-commerce sector where users must create an online account before they can access offers or purchase goods and services. While e-commerce controllers often justify mandatory account creation for commercial interests like performing a sale or managing orders, the EDPB emphasizes that this practice exposes data subjects to heightened risks regarding their rights and freedoms. These recommendations clarify the specific, limited conditions under Articles 5(1)(a) and 6 of the GDPR under which controllers may lawfully mandate account creation.

The scope of these recommendations applies to e-commerce websites, web applications, and mobile applications, including platforms acting as intermediaries (online marketplaces). The guidance generally finds that mandatory imposition of an online user account can be justified only for a very limited set of purposes, such as providing a subscription service or offering access to exclusive offers. In most other use cases, requiring an account fails to comply with the lawful processing conditions, suggesting that providing a "guest mode" option is the most efficient and privacy-protective approach, aligning with the data protection by design and by default obligation under Article 25 GDPR.

# Risks Associated with Mandatory User Accounts

Requiring the creation of online user accounts carries inherent risks that are magnified when users have no alternative means of purchase.

## Risks to Data Minimisation and Storage Limitation

Mandatory accounts often result in systematically logged-in environments, leading to the collection and processing of a greater volume of personal data, including data inferred by the controller. Furthermore, accounts necessitate retaining personal data on an active database for a longer period than what is strictly required for the immediate purchase and delivery. This extended storage violates the principle of storage limitation (Article 5(1)(e) GDPR) if accounts become inactive or "orphaned," and increases the vulnerability of the personal data to unauthorized access, security risks, and potential misuse.

## Security and Authentication Concerns

The mandatory requirement to open an account increases the risk of fraudulent activity attributed to the original user, particularly because users frequently reuse passwords previously used for other services. Using single sign-on methods through third-party platforms for account creation also increases security risks, as an attacker gaining access to the primary platform can access all connected services. The EDPB also notes that mandatory accounts are not necessary for fraud prevention; protective measures like CAPTCHA tests are more effective against bots and can be implemented without an account requirement.

## Deceptive Designs and Transparency

Mandatory accounts facilitate easier logging and tracking of browsing habits by the controller to improve commercial targeting, which, without a proper legal basis, constitutes a breach of the GDPR. E-merchants may also use "deceptive designs" (dark patterns) during the account creation process, often positioned just before payment confirmation, to prompt data subjects to disclose more personal information than necessary. This scenario can be used to elicit "last-minute consent" for secondary purposes, potentially violating GDPR requirements related to lawfulness and consent (Article 5(1)(a) and Article 6(1)(a) GDPR).

# Detailed Analysis of Legal Bases

The EDPB scrutinizes the use of Article 6 legal bases for imposing mandatory accounts, stressing that the processing must be strictly necessary for the purpose invoked.

## Contract Performance (Article 6(1)(b) GDPR)

Controllers must demonstrate that the processing is genuinely necessary and that the main subject-matter of the contract cannot be performed without the mandatory account creation.

- **One-time Sale:** Mandatory account creation is unnecessary because the data required for executing the sales contract and managing the order can be collected in guest mode.
- **Subscriptions and Exclusive Offers:** Mandatory accounts may be necessary when the contract involves a long-term relationship requiring recurrent authenticated interactions, such as receiving subscribed services or accessing features. This basis may also apply if access to offers is reserved to a genuine "selected community of members with specific proven characteristics," where registration itself forms the contract's main subject-matter. However, merely offering general membership discounts open to all who create an account does not meet this necessity test.
- **Conditional Purchasing (e.g., verifying status):** This is not justification for a mandatory account, as less intrusive solutions exist, such as secure online forms allowing one-time verification of a user’s status or characteristics during the purchase process.
- **After-sales services and Rights Exercise:** Providing after-sales support (exchanges, returns, complaints) or fulfilling GDPR and consumer rights (e.g., access, withdrawal) does not require a mandatory account, as users can be identified and served through alternative, less intrusive means, like secure online forms or dedicated hyperlinks.

## Legal Obligation (Article 6(1)(c) GDPR)

Processing based on compliance with a legal obligation must be proportionate, clear, precise, and foreseeable.

- **Tax, Accounting, and GDPR Compliance:** Mandatory account creation is not necessary to comply with legal obligations. Processing for tax and accounting is typically restricted to specific documents like invoices and does not require storing personal data in an active customer account. Similarly, controllers can fulfill GDPR subject rights requests without requiring an account.

## Legitimate Interest (Article 6(1)(f) GDPR)

Controllers relying on legitimate interest must successfully meet the legitimate interest, necessity, and balancing tests. The necessity test requires that the interest cannot be achieved equally effectively by less intrusive means, demanding "strict necessity".

- **Facilitating Operational Management (Tracking/Changes):** While potentially a legitimate interest, it fails the necessity and balancing tests because order tracking or modification requests can be managed using alternative means like email hyperlinks or customer service contact, avoiding prolonged data processing.
- **Building Customer Loyalty and Subsequent Orders:** Although legitimate interests, they typically fail the necessity and balancing tests. Loyalty programs often require tracking activities necessitating consent (Article 6(1)(a) GDPR and ePrivacy Directive). Facilitating future purchases is questionable regarding necessity, as the subsequent purchase depends solely on the consumer, and customers do not reasonably expect data retention longer than necessary for the current contract fulfillment.
- **Fraud Prevention:** Although fraud prevention is a legitimate interest, processing personal data for this purpose must be "strictly necessary". The processing involved in mandatory account creation is deemed unnecessary, as many websites operate without accounts, and the associated anti-fraud relevance is questionable; mandatory accounts can even increase security risks.

# Alternatives and Data Protection by Design

Given that mandatory accounts are rarely justifiable, the EDPB strongly recommends offering users the option to proceed with a purchase as a "guest".

## Benefits of the Guest Mode Option

The guest mode allows users to complete orders by filling out a form without creating a permanent account or authenticating via identifier and password. Offering this choice is highly compatible with the data protection by default and by design obligations under Article 25 GDPR.

- **Lawfulness and Purpose Limitation:** Both guest mode and voluntary accounts require the controller to determine the processing purposes and corresponding legal bases (e.g., Article 6(1)(b) for contract execution or Article 6(1)(a) for marketing).
- **Transparency:** Offering a choice encourages the controller to clearly distinguish the purposes of the guest option (contract fulfillment only) from the purposes of creating an account (improved service, loyalty programs), allowing users to fully assess the implications of processing.
- **Data Minimisation:** Guest mode is more compatible with the data minimization principle (Article 5(1)(c) GDPR) and avoids processing unnecessary user credentials or collecting excessive data beyond the immediate purchase agreement. Controllers are required to ensure data stored for legal reasons (like tax/accounting) is separate and restricted, meaning no duplication of data should occur between guest purchases and those made with a voluntary account.

If users opt for a voluntary account, controllers must ensure that any consent-based services, such as personalized offers, are clearly separated from the core purchase process, and that users can withdraw consent easily via the same interface it was obtained.