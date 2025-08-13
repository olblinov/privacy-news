---
title: CNIL's recommendations for Multi-Factor Authentication (MFA)
tags:
  - security
links:
  - https://www.cnil.fr/fr/recommandation-mfa
  - https://www.cnil.fr/sites/cnil/files/2025-03/recommandation_relative_a_l_authentification_multifacteur.pdf
date: 2025-04-01
---
Published on April 1, 2025, the recommendation aims to support both users and providers of MFA solutions in navigating cybersecurity and data protection requirements. It was developed through a sectoral consultation, including auditions with public and private stakeholders, and a public consultation that led to improvements based on real-world feedback.

## Purpose and Scope of the Recommendation

The CNIL's recommendation arises from the **increased complexity and effectiveness of cyber threats** accompanying the digitalization of economic activity. Its primary goal is to **promote cybersecurity solutions that are compliant with the GDPR**, both in their use and from their design stage.

It specifically aims to **provide clarity to data controllers** on several key aspects:

- When MFA is appropriate based on security needs.
- How to comply with GDPR principles when using MFA, including determining a legal basis, data minimization, retention periods, and respecting data subjects' rights.
- Defining the roles of different actors involved in an MFA solution.
- Choosing authentication factors (knowledge, possession, inherence) and their GDPR compliance conditions.
- Specific considerations for using inherence factors, one-time passwords (OTP) via SMS, and employees' personal equipment as a possession factor.

The recommendation focuses strictly on **authentication** and does not delve into processes related to **identity and access management**, such as account management or rights management. It includes explanatory boxes on specific topics and practical examples of privacy-by-design MFA implementation. This document also covers the use of MFA where specific legal texts impose requirements, such as eIDAS, PGSSI-S, or DSP2.

This recommendation is addressed to:

- **Data controllers and processors**, including their Data Protection Officers (DPOs) and Information System Security Managers (ISSMS), and their teams.
- **Providers of multi-factor authentication solutions**.

## Understanding Multi-Factor Authentication (MFA)

Authentication verifies a user's identity before granting access to information system resources. **Multi-Factor Authentication (MFA)** relies on **multiple proofs (factors)** belonging to at least two of three distinct categories:

- **Knowledge factor ("what the person knows")**: A memorized secret like a **passphrase, password, or PIN**.
- **Possession factor ("what the person has")**: A non-memorizable secret, such as a cryptographic key, contained in a unique physical object. Examples include **hardware tokens** (e.g., smart cards, USB authentication keys, OTP authenticators) or **device-bounded soft tokens** (applications tied to a specific enrolled device).
- **Inherence factor ("what the person is or does")**: A physical characteristic, sometimes mistakenly called a biometric factor. This can be **morphological** (e.g., fingerprint, facial structure), **behavioral** (e.g., keyboard typing, voice), or **biological** (e.g., DNA).
    - **Contextual information** (like geographical location or IP address) is generally **not considered sufficient** to constitute an authentication factor.
    - **Two-factor authentication (2FA)** is a type of MFA using exactly two distinct factors.

**Important Distinctions:**

- **Two-Step Verification (2SV)**, where two factors of the _same category_ are used (e.g., password then a code by email), is **not MFA** and is outside this recommendation's scope. An OTP (One-Time Password) received via email is not a possession factor because email access isn't necessarily tied to a unique physical object with a sufficiently high level of confidence.
- **OTP via SMS** is considered a possession factor, but its **confidence level must be evaluated case-by-case** due to security limitations of the SMS channel and the possibility of accessing SMS on multiple devices. However, MFA using SMS OTP with another distinct factor still offers **higher security than simple authentication**.
- **MFA is not necessarily cryptographically robust authentication**. For instance, password + SMS OTP is MFA but not cryptographically robust. Cryptographically robust authentication involves strong cryptographic mechanisms.

## GDPR Compliance for Multi-Factor Authentication

MFA is considered a **personal data processing activity** under Article 4.2 of the GDPR, involving the collection, transmission, and comparison of personal data like user identifiers and authentication factors. Its purpose is to **secure user authentication** and significantly reduce the risk of unauthorized access to information systems and personal data.

To comply with GDPR, several actions must be undertaken before implementing MFA:

### Evaluating the Opportunity for MFA

MFA should provide a **level of protection appropriate to the context and risks** of the processing it secures. Data controllers should conduct a **risk analysis** considering security objectives (availability, integrity, confidentiality) and the impact on individuals (security, privacy, rights, freedoms).

The CNIL **recommends MFA** for: #change 

- **Sensitive data processing** (e.g., health data).
- **High-risk operations** for data subjects.
- **System and network administration**.
- **External access to employer information systems**.
- **Professional email access**.

However, the use of MFA must **balance security with potential negative consequences for users**, such as dissuasion from access, collection of additional data, or temporary/permanent inability to use a factor. For **low-risk treatments, MFA should be offered as an option but not imposed**, to positively impact user rights. **Accessibility for specific populations** should also be considered.

It's crucial to understand that GDPR Articles 5.1.f and 32 **do not systematically impose MFA**. Overusing MFA in contexts where it's not strictly necessary (e.g., a tennis court booking platform) can lead to **user fatigue**, reducing its effectiveness in critical situations. #change 

### Justifying a Legal Basis for MFA Processing

MFA, as a data processing activity, must have a **legal basis** under Article 6 of the GDPR.

- If MFA is a **security measure attached to the principal processing**, it **inherits the legal basis of the principal processing**.
- If MFA is a **transversal security component** for an organization's information system, the CNIL recommends considering it a **separate processing activity** with the purpose of securing information systems.

Possible legal bases include:

- **Legal obligation**: Only applicable if a specific legal provision _explicitly_ imposes MFA (e.g., Articles 5.1.f and 32 of GDPR alone do not create such an obligation).
- **Legitimate interest**: This is the **most common basis** for IT security operations involving personal data, requiring a balancing act between the controller's interest and the data subjects' fundamental rights and freedoms.
- **Consent**: Can be used for online services, but requires providing an **alternative** and is **less adapted for security operations**. It generally **cannot be used in an employment context** due to the power imbalance.

Regarding the **register of processing activities (Art. 30 GDPR)**, MFA can be listed within the entry of the main processing it supports, or as a specific entry if it's a transversal solution.

### Identifying an Exception for Using the Inherence Factor

Biometric data used for unique identification is considered **sensitive data** under GDPR Article 9, and its processing is generally **prohibited unless an exception applies**.

- The CNIL believes that biometrics are primarily permissible with **data subject consent (Art. 9.2.a)**, or if explicitly mandated or authorized by a legal norm (e.g., specific regulations for workplace biometric access).
- It's important to distinguish between the **legal basis (Art. 6.1) and the exception for sensitive data (Art. 9.2)**; a biometric MFA device can be based on legitimate interest for Art. 6.1 while relying on consent for Art. 9.2.

The CNIL generally **recommends prioritizing knowledge and possession factors** over inherence factors, especially in professional settings. **Alternatives to inherence factors should be offered** to users. Using personal equipment for inherence or possession factors in a professional context can raise **privacy concerns** and lead to less control over the device's security for the data controller.

A specific case is the **domestic exemption (Art. 2.2.c GDPR)**, which applies when biometric processing is performed by an individual for strictly personal or domestic activities. For example, if a service provider offers biometric MFA but the **biometric template is stored locally on the user's personal device** under their sole control, the service provider is generally **not considered the controller of that biometric data**. The CNIL recommends that **biometric reference templates should only be stored on devices exclusively controlled by the individuals concerned**.

### Data Minimization

Data controllers must ensure that data collected, stored, and processed for authentication is **strictly necessary** for the service.

- When using an employee's personal mobile phone for a possession factor, using a **TOTP application is preferable to SMS OTP**, as the TOTP app typically requires less personal data (e.g., no need for the employee's phone number).
- The chosen TOTP application should prioritize solutions that **do not collect personal data** for other purposes, such as advertising.

### Defining Data Retention Modalities

Only data related to authentication itself is covered.

- Authentication data should be kept securely for a period appropriate to the risks, **not exceeding the user account's lifespan**.
- For knowledge factors, refer to CNIL's "password" recommendation.
- For biometrics in professional settings, refer to the specific regulation on workplace biometric access. For personal use, specific attention to retention of biometric templates is needed.
- **OTP is not retained after use**, while certificates are retained until expiration or revocation.
- **Logging traces of authentication success/failure** should be retained for a **limited duration**, generally **6 to 12 months**. #retention #change  Importantly, **biometric data and secret information (e.g., password cryptographic hashes, OTPs) must NOT be part of the logs**; only the "success" or "failure" verdict should be recorded without association with secret information.

### Documenting and Framing Potential Data Transfers

Implementing MFA solutions can involve **transfers to third countries**, especially with **SaaS solutions**, even if the main service is hosted within the EU. Data controllers should pay close attention to the data flows generated by MFA and ensure compliance with existing regulations, blocking any unnecessary data flows.

### Providing for the Exercise of Data Subject Rights

The specific rights available depend on the chosen legal basis.

- **Information to data subjects (Art. 13 & 14 GDPR)** must be provided. The CNIL shows flexibility for security treatments under Art. 32, allowing a general purpose like "securing the processing" without detailing all security measures, unless Art. 9 (sensitive data) or 35 (DPIA required) applies.
- Information can be provided at various stages: **account registration, delivery/activation of authentication factors, during authentication, account suspension/revocation, or account reactivation/renewal/factor replacement**.

### Securing Multi-Factor Authentication

Security measures for MFA depend heavily on the chosen solution and factors.

- **Knowledge factor solutions** should adhere to the CNIL's "password" recommendation.
- **Possession factor solutions** should use **cryptographically robust verification protocols** and involve **dynamic proofs of possession**.
- **Inherence factor solutions** should consider performance (false acceptance/rejection rates) and **robustness against presentation attacks**.
- The CNIL also recommends referring to the ANSSI guide for MFA and passwords for additional security measures.
- Any **administration or management operation** of an MFA solution should itself be **conditioned on MFA of at least the same robustness**.
- The **impact on data subjects** must be considered when choosing and implementing security measures.

### MFA Fatigue Mitigation

A common risk is **MFA fatigue**, where repeated push notifications (e.g., from an attacker) lead users to mistakenly accept an authentication request out of annoyance or lack of attention. Measures to reduce MFA fatigue include:

- Displaying **additional contextual information** to the user (e.g., geographical location, terminal type, time of last login attempt) to help identify fraudulent attempts.
- **Limiting the frequency of push notifications**.
- Implementing **number matching or symbol matching**, where the user confirms a code displayed on the authentication app.

## Roles of Actors

- An organization deploying an MFA solution is generally the **sole data controller**.
- A third-party MFA service provider operating in **SaaS mode** is typically qualified as a **data processor**. The data controller must ensure **sufficient guarantees** from the processor, as per Article 28.1 GDPR, including a contract with mandatory clauses. Vigilance is required regarding the provider's security, logging practices, potential **data transfers outside the EU**, and the use of **sub-processors**.
- A vendor selling an MFA product without associated services (e.g., deployment) is generally considered a **third-party**, not a processor, as they don't access personal data.

**Examples of Actor Qualification and Practices:**

- **Mobile TOTP application (Example #1)**: The verifier (data controller) does not need to retrieve data related to the knowledge factor; only the success/failure verdict is logged. This minimizes data transit.
- **Domestic Exemption with Inherence Factor (Example #2)**: A personal online messaging service can offer biometric MFA where the biometric data is processed and stored locally on the user's personal smartphone. In this case, the service provider is **not considered a controller of biometric data** because they don't access the biometric templates. This approach is preferred as it reduces privacy intrusion.
- **Hardware Token (Example #3)**: The hardware token provider is **not considered a data processor** as no personal data exchange is necessary.
- **TOTP Application on Professional Terminal (Example #4)**: If the employer provides and manages the terminal, and the TOTP app does not exchange data with a third party, the TOTP solution provider is **neither a data controller nor a data processor**.

**Using Employee Private Equipment:**

- This practice raises **labor law questions** (employer generally provides tools, alternatives for employees without compatible devices or who prefer not to use them for work).
- Under GDPR, the employer must adhere to **data minimization**. For example, a **TOTP app on a personal mobile is preferred over SMS OTP** because it doesn't require the employer to collect the employee's phone number.
- **Privacy by design and security measures** are critical. The employer must ensure **data compartmentalization** on the personal device and consider the **risks of not having physical or legal control** over it. Secure methods for transmitting the "seed" for OTP generation (e.g., QR code) are also recommended.