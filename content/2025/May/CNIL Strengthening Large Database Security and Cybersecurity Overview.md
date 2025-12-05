---
title: CNIL Strengthening Large Database Security and Cybersecurity Overview
tags:
  - security
links:
  - https://www.cnil.fr/fr/consignes-pour-renforcer-la-securite-des-grandes-bases-de-donnees
date: 2025-04-30
---
## Definition of "Large Databases" and Associated Risks

The recent breaches demonstrate that even elementary security measures need to be strengthened to prevent risks concerning large databases. In the CNIL's communication, "databases" are broadly understood as all information systems, including components, networks, and applications, that enable the processing of a single set of personal data. **"Large databases" are defined as those containing the data of several million people**, encompassing "customer" databases and CRM (customer relationship management) software often used by businesses serving the general public. These large-scale data processing operations present **particularly significant risks** because a data breach affecting them can impact a substantial portion of the population and expose individuals to numerous dangers, such as **phishing and identity theft**. Such breaches can also indirectly weaken other information systems through the use of compromised data.

# Key Security Measures Highlighted by CNIL

## Securing External Access via Multi-Factor Authentication

### Importance and Impact

**Multi-factor authentication (MFA) is deemed essential** when access to the information system is possible from outside an organization, especially when users (employees, service providers, partners) can access data concerning millions of people. In 2024, nearly **80% of the large-scale breaches** observed by the CNIL were enabled by the usurpation of an employee's or subcontractor's account that was protected solely by a password. Adding a second authentication factor significantly **reduces the risk of unauthorized access** following identity theft, particularly in light of the widespread circulation of "identifiers & passwords" from previous data leaks and the frequency of "credential stuffing" attacks.

### CNIL Recommendations and Challenges

For large databases, the CNIL recommends:

- Conducting a **risk analysis** that considers potential threats related to various means of accessing data.
- Prioritizing **possession-based authentication**, at least meeting the "R39--" level identified in ANSSI recommendations. This measure should be part of a broader, continuously maintained identity and access management policy, adapted to different user profiles (employees, service providers, developers, administrators). The goal is to ensure that only authorized users can access relevant information based on their role and professional needs. While implementing MFA for remote access may entail significant human and financial effort and deployment time, the CNIL considers this effort **proportionate** for large databases given the risks to individuals and the security benefits.

### Future CNIL Enforcement

The CNIL notes that MFA was already generally considered necessary under the GDPR for databases containing sensitive data or data whose breach would expose individuals to high risks (e.g., banking data, social security numbers). From **2026**, the CNIL will strengthen its control policy to ensure the implementation of MFA for these large databases. The **absence of this measure may justify initiating a sanction procedure**. The CNIL will also consider the existence of previous violations that should have prompted the organization to implement enhanced authentication.

## Logging, Analysis, and Data Flow Limits

### Purpose and Requirements

Both data controllers and processors must implement **adapted logging** to facilitate early detection of personal data incidents and provide exploitable elements for retrospective analysis. To achieve this, organizations need adequate human resources and an organizational structure to analyze alerts and react as promptly as possible. When mass extraction functionalities are available, it is crucial to **limit the volume of extractions** an attacker could perform. Preventive measures can include limiting the volume of queries allowed per user and globally for a given application, as well as limiting the quantity of data flowing out.

### Specific Recommendations

The CNIL and ANSSI recommend specific logging measures:

- Implement a **logging architecture that ensures traceability of access and actions** by authorized users for a duration of **six months to one year**. A good practice is to log access (to applications, APIs, systems, networks) separately from the main system ("log well"). #retention 
- Implement this logging system in a **targeted manner** to detect potentially suspicious activity as soon as possible. Prioritize supervision of logs on the most sensitive perimeters or components based on risks, rather than accumulating large volumes of unexploited or unexploitable logs.
- Determine the **events to log** based on context and media (workstations, firewalls, network equipment, servers) to:
    - Detect or delay an "abnormal" flow or one exceeding a data volume limit.
    - Allow only explicitly authorized flows.
    - Retain successful authorized connections and all rejected connection attempts.
    - Control the flow of data, including by time.
    - Identify configuration defects, SQL injection attempts, etc..

## Considering the Human Factor

### Importance of Training and Awareness

Technical solutions alone are **insufficient** to ensure the protection of personal data. The GDPR requires appropriate technical and organizational measures, and periodic training and awareness programs on privacy and security are necessary. These programs should remind users of common errors leading to data breaches, how to avoid them, and how to react.

### Common User-Related Breaches

Based on incidents notified to the CNIL, many situations could be avoided through increased user awareness, such as:

- **Shared login accounts** among users.
- Users clicking on **phishing links** in messages, leading them to enter credentials on fake websites.
- Malicious software (malware, infostealer) installed on a user's device, enabling the theft of login data. Data controllers can utilize awareness content from cybermalveillance.gouv.fr, including their sensitization kit, SensCyber, and MOOC SecNumAcadémie.

### CNIL's Organizational Measure Checks

Organizational measures, like technical ones, are subject to CNIL verification during controls. The absence or insufficiency of such measures (e.g., lack of staff awareness messages or a contact point for reporting incidents) can constitute a **breach of GDPR security obligations**.

## Framing Data Security with Subcontractors

### Contractual Obligations

A **subcontracting contract must be concluded with each subcontractor**, detailing all elements required by GDPR Article 28, including the duration, scope, and purpose of subcontracting, documented processing instructions, framework for subsequent subcontractors, and immediate notification of any data breach. Notably, 15% of data breach notifications received by the CNIL in 2024 were consecutive to incidents at just eight subcontractors.

### Ensuring Security Throughout the Chain

Processing very large volumes of data by a subcontractor demands the **same level of enhanced security adapted to the risks**. The entire subcontracting chain, including direct and subsequent subcontractors (especially those offering cloud services), must be taken into consideration. The data controller must require the subcontractor to provide their **Information System Security Policy (PSSI)** and proofs of their information security certifications, and these documents should be appended to the contract. The controller must ensure, both before and throughout the processing period, that the subcontractor's measures comply with the state of the art and CNIL recommendations.

### Audit Requirements

For large-scale databases, the data controller must **conduct, have conducted, or possess periodic audits or inspections of the subcontractor** throughout the contractual relationship.

# Data Breach Landscape and CNIL's Broader Role

## 2024 Breach Statistics and Trends

### Number and Causes of Notifications

In 2024, the CNIL received **5,629 notifications of data breaches**. On average, nearly 15 notifications were received per day. **Computer hacking was the cause of 62%** of all notifications submitted to the CNIL. Ransomware attacks accounted for 596 notifications, representing 10% of the total volume. Sector-wise, public administration, commerce/automotive repair, financial/insurance activities, and human health/social work were among the most affected.

### Nature of Violations

**93% of the data breach notifications** received by the CNIL in 2024 concerned a **loss of confidentiality**, meaning an intrusion by a third party who could access or copy data. While the GDPR also considers breaches involving a loss of integrity (illegitimately modified data) and availability (data inaccessible), these types of violations remain less recognized by data controllers. However, the CNIL notes a significant increase in notifications related to integrity and availability losses, largely due to the rise in **ransomware attacks**. Most notified violations stemmed from malicious external acts, such as hacking, physical theft of media, or fake technical support scams.

### Most Frequent Breaches in CNIL Controls

Through its controls, the CNIL frequently identifies the following security shortcomings:

- **Data freely accessible by URL modification** (e.g., lack of authentication, predictable URLs).
- **Non-compliant password policies** (not meeting CNIL recommendations).
- **Transmission of passwords in cleartext** (e.g., during account creation).
- **Data transmission via unencrypted connections (HTTP)**, such as web forms.
- **Absence of automatic workstation session locking**, allowing unauthorized access to information systems.
- **Lack of a test protocol** to ensure no vulnerabilities before deploying new developments (e.g., applications, websites, forms).