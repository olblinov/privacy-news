---
title: Germany Berlin DPA Annual Report 2024 Enforcement Trends AI and Digitalization Priorities
tags:
  - enforcement_pattern
  - fine
links:
  - https://www.datenschutz-berlin.de/jahresbericht-2024/
date: 2025-05-15
---
# Executive Summary of the 2024 Annual Report

The Berlin Commissioner for Data Protection and Freedom of Information (BlnBDI) 2024 Annual Report highlights the supervisory authority’s concentrated efforts across enforcement, technological challenges like Artificial Intelligence (AI), and ongoing public administration digitalization. Key activities included resolving complex court cases involving address trading and corporate liability (Deutsche Wohnen SE), issuing fines totaling €80,190 for data security breaches and unauthorized police data access (POLIKS), and proactive regulatory guidance on AI governance and public sector digital projects. The report underscores the DPA’s focus on ensuring data processing aligns with fundamental rights amid rapid technological integration, while dealing with a record high number of citizen complaints and data breach notifications.

# Enforcement and Judicial Highlights

## Corporate Accountability and Fines

### Data Security Failures in Practice Management Software

The BlnBDI imposed a fine of €60,000 against a provider of a platform for managing medical practices, health centers, and clinics due to lacking or defectively implemented measures for ensuring an adequate level of data protection and security. The mechanisms and processes used during the platform's development were found to be insufficient to systematically review potential privacy and security risks. **Specific Security Flaws** The software contained several critical vulnerabilities:

- Logged-in patients could potentially view the email access data of several associated medical practices, potentially compromising the email access of five medical facilities.
- Due to missing authorization checks, logged-in patients could view the registration data of 29,495 other patients (including IDs, practice IDs, email addresses, and sometimes full names and dates of birth).
- Extensive datasets were accessible due to lacking authorization checks, containing documents from the treatment context, blood values, diagnoses, practice configurations (like client certificates for telematics infrastructure), invoices, lab results, and sick leave certificates.
- An end-to-end encryption measure used for transferring documents from providers to patients had a programming error, making it vulnerable to a Downgrade Attack that could expose data in plaintext. This affected 198 facilities and 1,623,732 patients. **Mitigating Factors** The authority considered that although sensitive health data were compromised, no actual data outflow was proven. Cooperation, immediate system shutdown, identifying comprehensive corrective measures, and prompt notification of affected parties were mitigating factors in calculating the penalty.

### Unauthorized Access to Police Data (POLIKS)

The DPA dealt with numerous cases involving police officers misusing the internal police database (POLIKS) for non-official purposes, resulting in 23 fine notices out of 50 initiated procedures. POLIKS stores extensive personal data, including case data, names, birth dates, addresses, marital status, criminal records, and witness statements. Examples included an officer searching data related to an ex-girlfriend 170 times, an officer trying to expedite a theft investigation they were involved in, and an officer asking a colleague to perform a private query. The DPA advocates for enhanced technical measures to prevent abuse, such as implementing automated plausibility checks to detect unusual access patterns, enforcing shorter log-off times, and using continuous two-factor authentication.

### Corporate Liability Clarified (Deutsche Wohnen SE)

Following a ruling by the European Court of Justice (EuGH), the Kammergericht (KG Berlin) confirmed the DPA's enforcement practice, ruling that GDPR fines can be issued directly against a company (juristische Person) for violations committed by individuals acting within the scope of the company’s business, regardless of specific action by management. This decision overturned the previous dismissal of the DPA's €14.5 million fine against Deutsche Wohnen SE due to technical procedural issues under German law, sending the case back to the Berlin Regional Court for continued proceedings. The KG Berlin specifically noted that the fine notice provided "exceptionally concrete and detailed" allegations, exceeding necessary requirements for legal compliance.

## Judicial Review of Data Processing Legality

### Address Trading and Joint Controllership

The DPA is involved in two ongoing legal cases regarding the permissibility of commercial address trading for postal direct marketing. In both cases, the DPA classified the advertisers and the address traders as joint controllers, arguing that they jointly determined the purpose and means of processing personal data for direct marketing. The DPA asserted that processing personal data for these advertising purposes lacked a legal basis, as the legitimate interests asserted by the advertisers were overridden by the reasonable expectations of the data subjects that their data would not be monetized or used for targeted advertising without prior contact. In one case involving a political party, the warning issued by the DPA became legally binding after the party withdrew its complaint.

### GDPR vs. ePrivacy in Email Advertising

The Administrative Court of Berlin (VG Berlin) ruled on the relationship between the GDPR and the ePrivacy Directive (implemented in Germany via the Unfair Competition Act - UWG), clarifying that while the UWG addresses the admissibility of direct advertising, it does not govern the lawfulness of data processing under the GDPR. The court determined that a boilerplate consent within General Terms and Conditions (AGB) is insufficient for GDPR-compliant consent for processing email addresses for advertising purposes, as GDPR consent must be clearly distinguishable from other matters. Failing to meet the strict consent requirements of the UWG (Section 7(2) No. 2) or the exception conditions (Section 7(3)) also leads to the unlawfulness of processing under GDPR Article 6(1).

# Artificial Intelligence Governance and Technology Standards

## Public Sector AI Strategy

The DPA is actively involved in the newly founded AI Taskforce of the Berlin administration (led by the Senate Chancellery and ITDZ). The Taskforce aims to monitor AI developments and provide recommendations for the use of AI applications within the state administration. Key outputs include a guidance document for administrative staff on using LLM-based chatbots, focusing on responsible use and legal constraints. The DPA emphasized that using personal data for AI training requires a legal basis, noting that legitimate interest (Art. 6(1)(f) GDPR) is generally excluded in the public sector.

## Insights from Private Sector AI Audits

Initial audit procedures concerning AI utilization in the non-public sector revealed several recurring data protection violations. A critical focus was placed on the legal basis for processing personal data during AI development and deployment, and ensuring transparency for data subjects. **Key Challenges Identified:**

- **Legal Basis and Purpose Limitation:** AI often relies on probabilistic approaches and broad, non-specific usage goals, challenging the deterministic processing model assumed by the GDPR. Using data collected for one purpose for subsequent AI training (purpose change) requires satisfying the legal basis and compatibility requirements (Art. 6(4) GDPR).
- **Transparency Failures:** Many companies fail to inform data subjects sufficiently, or at all, about the data processing involved with their AI systems. Failure to disclose the legitimate interest relied upon can render the processing unlawful (citing recent EuGH jurisprudence).
- **Data Quality and Bias:** Audits revealed significant inconsistencies in data sets used for profiling (e.g., attributing virtually every age and income bracket to the same individual), raising concerns about the accuracy principle (Art. 5(1)(d) GDPR).
- **Automated Decision-Making:** One audit focused on an AI-based debt collection service using profiling (Reinforcement Learning) and potential impermissible automated individual decision-making (Art. 22 GDPR) regarding initiating legal action.

## International Cooperation on AI and Anonymization

The DPA contributed significantly to European discussions, particularly within the EDPB:

- **EDPB Opinion on AI Models:** The EDPB’s opinion on AI models confirmed that a link to personal data can persist if no effective measures are taken to prevent it during training. It clarified that relying on legitimate interest (Art. 6(1)(f) GDPR) requires careful, scenario-specific assessment, particularly when training data is obtained through third parties or web scraping.
- **Pseudonymization & Anonymization Guidance:** The DPA led the EDSA Technology Expert Subgroup in drafting guidelines on pseudonymization and anonymization. Pseudonymization is seen as a flexible technical and organizational measure that significantly mitigates risks, contributes to privacy by design, and supports the security of processing. Anonymization, which places data outside GDPR scope, requires demonstrating that all means likely to be used for re-identification are rendered ineffective.

# Protection of Individual Rights and Liberties

## Betroffenenrechte (Data Subject Rights)

### Burdensome Exercise of Rights

The DPA intervened successfully against the operator of a cycle tracking app that deliberately complicated the exercise of the right to erasure (deletion). Users were initially instructed to save their data and then confirm the deletion request later, violating the requirement for "unmittelbare" (immediate) deletion and easy exercise of rights (Art. 12(2) GDPR).

### Log Files and Access Rights

In a complaint concerning a former employee, the DPA clarified that the right of access (Art. 15 GDPR) extends beyond primary data (HR files, communication) to secondary data, including technical logs (e.g., collaborative development system logs, server logs, time tracking system data). The DPA questioned the consistency of national exceptions (like Section 34(1) No. 2 lit. b BDSG) with EU law, following a EuGH ruling confirming that access obligations apply to data documenting an employee's access to the data subject's information.

### Proving Compliance while Minimizing Data

The DPA provided detailed guidance on how controllers can prove they have provided access (Art. 15 GDPR) accurately and on time, without retaining the full copy of the response indefinitely (which would violate data minimization principles). Methods recommended include digital signatures, clear logging of the access request process, and storing only pseudonymized protocol data linked to the event, with destruction timelines aligned to civil statutes of limitation (e.g., three years).

## Video Surveillance and Biometrics

### Unlawful Facial Recognition by Prosecution

The DPA scrutinized the Berlin Public Prosecutor’s use of facial recognition systems (mobile and fixed cameras) for biographical matching and remote identification. The DPA found that the legal grounds cited (StPO §§ 100h, 163f, 98a) were insufficient for using such powerful remote identification technology, as they failed to meet the constitutional requirements for clarity and specificity, particularly concerning the intensive intrusion into informational self-determination. The DPA issued a warning to the Public Prosecutor’s office regarding future corresponding requests.

### Unjustified Video Monitoring by Police

The DPA issued a finding of inadequacy regarding the video surveillance at the police station near Kottbusser Tor, concluding that it lacked sufficient legal basis and was disproportionate. The police relied on Section 24a ASOG, which the DPA noted applies to protecting "endangered objects" (like places of worship or monuments), but not general police stations. The surveillance was also deemed disproportionate due to its extensive coverage of a major traffic hub, limiting the ability of thousands of passersby to avoid monitoring, especially affecting access to nearby counseling services for marginalized groups.

# Digitalization in Public Administration

The DPA introduced the "Standard Process Data Protection for Public Digitalization Projects" (Standardprozess Datenschutz) to assist the administration in systematically embedding privacy by design. Developed in collaboration with the ITDZ, this framework aligns with the administration's mandatory project management handbook and includes 13 specific steps, helping authorities assess if personal data is involved, determine controllership, establish legal bases early, and integrate privacy risk analysis. This standard process is being piloted using the Digital File project rollout.

# Data Protection Statistics (2024)

In 2024, the DPA received a record 6,036 submissions from citizens, including 4,171 written consultations (up 14% from 2023) and 1,865 complaints. The total number of data breach notifications also increased to 1,262 (from 1,129 in 2023). Enforcement actions resulted in 104 warnings and 25 fine notices imposing fines totaling €80,190. The DPA also acted as the lead authority in 11 European cooperation procedures and was designated as an affected supervisory authority in 448 cases.