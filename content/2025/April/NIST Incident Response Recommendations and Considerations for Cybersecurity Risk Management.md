---
title: NIST Incident Response Recommendations and Considerations for Cybersecurity Risk Management
tags:
  - nist
  - methodology
  - security
  - breach
links:
  - https://nvlpubs.nist.gov/nistpubs/SpecialPublications/NIST.SP.800-61r3.pdf
date: 2025-04-01
---
# Introduction to NIST SP 800-61r3

## Publication Overview

NIST Special Publication 800-61r3, titled "Incident Response Recommendations and Considerations for Cybersecurity Risk Management: A CSF 2.0 Community Profile," was published in April 2025. Authored by Alex Nelson, Sanjay Rekhi, Murugiah Souppaya, and Karen Scarfone, it is available free of charge. This publication supersedes NIST SP 800-61r2, which was released in August 2012.

## Purpose and Scope

The primary purpose of this publication is to assist organizations in **incorporating cybersecurity incident response recommendations and considerations throughout their cybersecurity risk management activities**, as described by the NIST Cybersecurity Framework (CSF) 2.0. By doing so, organizations can better prepare for incidents, reduce their number and impact, and enhance the efficiency and effectiveness of their detection, response, and recovery efforts. The document also provides a **common language for internal and external communication** regarding incident response plans and activities.

The scope of this version significantly differs from previous ones. Instead of detailing how to perform incident response activities, which change frequently and vary widely across technologies, environments, and organizations, this publication **focuses on improving cybersecurity risk management for all six NIST CSF 2.0 Functions** to better support an organization's incident response capabilities. Readers are encouraged to use this document in conjunction with other NIST resources, such as the CSF 2.0 publication, the Incident Response project page, and the NIST Cybersecurity and Privacy Reference Tool (CPRT).

## Authority and Audience

This publication was developed by NIST in accordance with its statutory responsibilities under the Federal Information Security Modernization Act (FISMA) of 2014. NIST is responsible for developing information security standards and guidelines, including minimum requirements for federal information systems. The guidelines are consistent with the Office of Management and Budget (OMB) Circular A-130 and can be **used voluntarily by non-governmental organizations**.

The target audience for this publication includes **cybersecurity program leadership, cybersecurity personnel, and other individuals responsible for preparing for, detecting, responding to, or recovering from cybersecurity incidents**. It is designed for use by most organizations, regardless of sector, size, or other factors.

# Evolution of Incident Response

## The Former Incident Response Life Cycle

The previous version of this publication, SP 800-61r2, depicted an incident response life cycle with phases such as Preparation, Detection & Analysis, Containment Eradication & Recovery, and Post-Incident Activity. In the past, incidents were relatively rare, their scope was narrow and well-defined, and incident response and recovery usually concluded within a day or two. Under these conditions, incident response was often treated as a separate set of activities performed by a separate team, with activities typically intermittent. Formal post-incident activities would identify improvements and feed them into the preparation stage, initiating a new cycle.

## The Current State of Incident Response

The current landscape of incident response has significantly changed. Today, **incidents occur frequently and cause far more damage**, often requiring weeks or months for recovery due to their breadth, complexity, and dynamic nature. Incident response is now considered a **critical part of cybersecurity risk management** and should be integrated across organizational operations. Lessons learned from incidents should be shared as soon as they are identified, rather than waiting until recovery concludes, emphasizing the need for **continuous improvement** in all aspects of cybersecurity risk management to keep pace with modern threats.

# The New Incident Response Life Cycle Model Based on CSF 2.0 Functions

## Overview of CSF 2.0 Functions in Incident Response

The new high-level incident response life cycle model is based on the **six NIST Cybersecurity Framework (CSF) 2.0 Functions**, which organize cybersecurity outcomes at their highest level. All six Functions play vital roles in incident response:

- **Govern (GV)**: Establishes, communicates, and monitors the organization’s cybersecurity risk management strategy, expectations, and policy.
- **Identify (ID)**: Ensures the organization’s current cybersecurity risks are understood.
- **Protect (PR)**: Involves using safeguards to manage the organization’s cybersecurity risks.
- **Detect (DE)**: Focuses on finding and analyzing possible cybersecurity attacks and compromises.
- **Respond (RS)**: Involves taking actions regarding a detected cybersecurity incident.
- **Recover (RC)**: Aims to restore assets and operations affected by a cybersecurity incident.

## Interplay of Functions and Continuous Improvement

The Govern, Identify, and Protect Functions help organizations to **prevent incidents, prepare for those that occur, reduce their impact, and improve incident response and cybersecurity risk management practices** based on lessons learned. The Detect, Respond, and Recover Functions assist organizations in **discovering, managing, prioritizing, containing, eradicating, and recovering from cybersecurity incidents**, as well as performing incident reporting and other communications.

In the new model, the preparation activities of Govern, Identify, and Protect are considered broader cybersecurity risk management activities that _support_ incident response, rather than being part of incident response itself. The core incident response is represented by Detect, Respond, and Recover. The model emphasizes **continuous improvement** through the Improvement Category (ID.IM) within the Identify Function. Lessons learned from all activities across all Functions are fed into Improvement, analyzed, prioritized, and used to inform all Functions. This allows organizations to adapt policies, processes, and practices as new threats and behaviors are identified.

## Mapping to Previous Model

Table 1 in the publication provides a mapping between the phases of the previous SP 800-61 incident response life cycle model and the corresponding CSF 2.0 Functions. For instance, the "Preparation" phase maps to Govern, all Categories of Identify, and Protect. "Detection & Analysis" maps to Detect and the Improvement Category of Identify. "Containment, Eradication & Recovery" maps to Respond, Recover, and the Improvement Category of Identify. Finally, "Post-Incident Activity" maps specifically to the Improvement Category of Identify. Organizations are encouraged to choose the incident response life cycle framework or model that best suits them, but the CSF 2.0-based model leverages a wealth of available resources.

# Key Aspects of Incident Response Management

## Incident Response Roles and Responsibilities

Successful incident response efforts depend on the participation of many **internal and external parties** with a wide variety of roles and responsibilities. These roles and responsibilities will differ for each organization and may also vary based on the nature of a specific incident. Examples include:

- **Leadership**: Oversees incident response, allocates funding, and may make high-impact decisions like shutting down critical services.
- **Incident Handlers**: Verify incidents, collect and analyze data, prioritize activities, limit damage, find root causes, and restore operations. They can be on staff (e.g., an incident response team), on contract (e.g., outsourced SOC or cloud service provider's team), or available when needed (e.g., from a parent organization, cybersecurity services provider, business partner, or law enforcement). Larger organizations may have multiple, coordinated teams.
- **Technology Professionals**: Cybersecurity, privacy, system, network, cloud architects, engineers, administrators, and software developers may be involved in response and recovery.
- **Legal**: Reviews plans for compliance, contracts, and provides guidance on legal ramifications (e.g., prosecution, lawsuits, MOUs).
- **Public Affairs and Media Relations**: Manages communication with the media and public, potentially requiring a media engagement strategy.
- **Human Resources**: Involved in pre-employment screening, onboarding, offboarding, position changes, and cases where an employee is suspected of causing an incident.
- **Physical Security and Facilities Management**: Addresses incidents originating from physical breaches or coordinated physical/logical attacks, and provides access to facilities during handling.
- **Asset Owners**: Provide insights on response and recovery priorities for their assets and need status updates.

**Third parties**, such as Managed Security Services Providers (MSSPs) and Cloud Service Providers (CSPs), often play a role under a **shared responsibility model**. Their responsibilities, including information flows, coordination, and authority, should be clearly defined in contracts. Service providers can detect malicious activity sooner by correlating events across customers and may proactively prevent similar incidents. However, the risk of malicious insiders or service provider compromise must be considered and addressed, potentially using Non-Disclosure Agreements (NDAs).

## Incident Response Policies, Processes, and Procedures

Organizations **should have policies governing their cybersecurity incident response**. While individualized, most incident response policies include key elements such as:

- A statement of **management commitment**.
- The **purpose and objectives** of the policy.
- The **scope** of the policy, including to whom and what it applies.
- **Definitions** of events, cybersecurity incidents, investigations, and related terms.
- Clearly defined **roles, responsibilities, and authorities**, specifying who has the authority to confiscate, disconnect, or shut down technology assets.
- **Guidelines for prioritizing incidents**, estimating severity, initiating recovery, and maintaining/restoring operations.
- **Performance measures**.

**Processes and procedures** should be based on the incident response policy and plan. Documented procedures explain how technical and operational processes are performed, can be tested periodically for accuracy, and aid in training new personnel. Organizations should document procedures for common incident types and critical processes needed during emergencies. Many organizations use **playbooks** to document procedures, providing actionable steps for various scenarios to improve usability.

# CSF 2.0 Community Profile for Cyber Incident Risk Management

## Profile Structure and Prioritization

A CSF Community Profile is a baseline of CSF outcomes developed to address shared interests and goals in reducing cybersecurity risk for specific sectors, technologies, or use cases. This publication defines NIST’s CSF 2.0 Community Profile for cyber incident risk management, using the CSF Core to highlight and prioritize cybersecurity outcomes important for incident response. The profile is presented in two tables: **Table 2 covers Preparation and Lessons Learned**, encompassing the Govern, Identify, and Protect Functions, as well as the Identify-Improvement Category; **Table 3 covers Incident Response**, focusing on the Detect, Respond, and Recover Functions.

Each CSF 2.0 Function, Category, and Subcategory is assigned a **priority** within the context of incident response:

- **High**: Functions as a **core incident response activity** for most organizations.
- **Medium**: **Directly supports** incident response activities for most organizations.
- **Low**: **Indirectly supports** incident response activities for most organizations.

These priorities serve as a starting point, and organizations are encouraged to customize the profile to reflect their specific needs. The last column of the tables provides recommendations ("R"), considerations ("C"), or notes ("N") for certain CSF outcomes.

## Preparation and Lessons Learned (Govern, Identify, Protect)

This part of the profile focuses on activities that support, rather than directly execute, incident response.

### Govern (GV)

The Govern Function, which addresses an organization's cybersecurity risk management strategy, expectations, and policy, generally has a **Low** priority for direct incident execution. However, several subcategories are prioritized as **Medium** because they are foundational for effective incident response:

- **GV.OC-03 (Legal, regulatory, and contractual requirements)**: Organizations **should ensure cybersecurity requirements include all aspects related to incident notifications and data breach reporting**.
- **GV.OC-04 (Critical objectives external stakeholders depend on)** and **GV.OC-05 (Outcomes organization depends on)**: Understanding critical internal and external dependencies can **aid in prioritizing response and recovery efforts**.
- **GV.RM-03 (Cybersecurity risk management activities in enterprise risk management)**: **Processes should be in place to ensure incident-related decision-making is informed by other types of risks** (e.g., privacy, operational, safety, reputational, AI), not just cybersecurity risks in isolation.
- **GV.RM-06 (Standardized method for calculating, documenting, categorizing, and prioritizing cybersecurity risks)**: A standardized method can **aid in prioritizing response and recovery efforts**, comparing estimated and actual incident impacts, and establishing criteria for escalating incident response activities.
- **GV.RR (Roles, Responsibilities, and Authorities)**: Cybersecurity roles, responsibilities, and authorities **should specifically include incident response**. All roles and responsibilities involving incident response, including those of third parties, **should be documented** and individuals or parties given the necessary authority.
- **GV.PO (Organizational cybersecurity policy)**: This has a **High** priority, and **cybersecurity policies should include an incident response policy**.
- **GV.OV-01 (Cybersecurity risk management strategy outcomes reviewed)** and **GV.OV-02 (Cybersecurity risk management strategy reviewed and adjusted)**: Past cybersecurity incidents and their risks should be taken into account when adjusting the organization’s cybersecurity risk management strategy and direction.
- **GV.SC-08 (Relevant suppliers and other third parties are included in incident planning, response, and recovery activities)**: This subcategory is specific to incident planning, response, and recovery, emphasizing the importance of third-party involvement.

### Identify (ID)

The Identify Function, focused on understanding current cybersecurity risks, is generally rated as **Medium**. All Identify Categories are beneficial for preventing, responding to, and recovering from incidents.

- **ID.AM (Asset Management)**: All asset management information is helpful for incident responders, aiding in understanding impact, identifying targeted assets, and prioritizing efforts. Key recommendations include maintaining **current and automatically updated inventories** of internal and external hardware, software, services, and systems, which can be used for vulnerability identification, monitoring, and detecting "shadow IT". **Prioritizing assets based on criticality and dependencies** helps focus resources for protection, detection, response, and recovery. Maintaining **data inventories** with classifications, owners, and locations provides valuable information on data involved in incidents.
- **ID.RA (Risk Assessment)**: This is critical for reducing incidents and their impacts.
    - **ID.RA-02 (Cyber Threat Intelligence (CTI))**: This is a **High** priority. CTI, which is enriched threat information, is **invaluable for incident response and recovery** by providing information on new threats, improving detection accuracy, and understanding attacker tactics, techniques, and procedures (TTPs).
    - **ID.RA-05 (Threats, vulnerabilities, likelihoods, and impacts are used to understand inherent risk and inform risk response prioritization)**: This is a **High** priority. Organizations with cybersecurity risk estimation mechanisms **should use them for incident response purposes**, and consider **threat modeling** to understand attack vectors and lateral paths.
    - **ID.RA-06 (Risk responses are chosen, prioritized, planned, tracked, and communicated)**: This is also a **High** priority. Risk responses are needed to prevent future and recurring incidents. Policies, processes, and procedures **should provide guidance for making decisions on appropriate risk responses**, considering the four types: Accept, Mitigate, Transfer, and Avoid.
- **ID.IM (Improvement)**: This category, which involves identifying improvements to cybersecurity risk management processes across all CSF Functions, is generally **Medium**.
    - **ID.IM-02 (Improvements are identified from security tests and exercises)**: This is a **High** priority. Incident response exercises and tests provide helpful information for program evaluation and **prepare staff and involved third parties for future incident response activities**.
    - **ID.IM-03 (Improvements are identified from the execution of operational processes, procedures, and activities)**: This is a **High** priority. This includes all incident response and recovery efforts. Improvements are often identified through **follow-up reports and "lessons learned" meetings** after an incident, especially a major one, to review what happened, actions taken, effectiveness, and gather input from all parties.
    - **ID.IM-04 (Incident response plans and other cybersecurity plans that affect operations are established, communicated, maintained, and improved)**: This is a **High** priority. **Business continuity plans should be synchronized with incident response plans**, as incidents can undermine business resilience. All cybersecurity plans should be reviewed and updated periodically, based on the organization's unique requirements, and identify necessary resources and management support.

### Protect (PR)

The Protect Function, which involves using safeguards to manage cybersecurity risks, is generally rated as **Medium**. While it's outside the direct scope of this profile to detail all protection mechanisms, understanding them helps personnel detect protection failures. A key **High** priority subcategory is:

- **PR.DS-11 (Backups of data are created, protected, maintained, and tested)**: Backups are **particularly important for recovery purposes** when data integrity or availability is affected. Another important subcategory is **PR.PS-04 (Log records are generated and made available for continuous monitoring)**, which is **Medium**. Logs are **vital for recording and preserving information essential to incident detection, response, and recovery activities**. Role-based training **should include incident-related responsibilities**.

## Incident Response (Detect, Respond, Recover)

All CSF elements in this part of the profile are considered **High** priority as they are specific to responding to incidents.

### Detect (DE)

The Detect Function encompasses all monitoring and analysis activities aimed at finding and characterizing potentially adverse events and, subsequently, identifying cybersecurity incidents.

- **DE.CM (Continuous Monitoring)**: This involves monitoring assets for anomalies, indicators of compromise, and other potentially adverse events. Organizations **should continuously monitor all types of assets** (networks, computing hardware/software, physical environment, personnel activity, external service provider activities) for unauthorized activity, deviations, and security posture changes. **Cyber threat information should be used with continuous monitoring** to help identify malicious activities. Tuning monitoring technologies to reduce false positives and negatives is also crucial.
- **DE.AE (Adverse Event Analysis)**: This category focuses on analyzing potentially adverse events to characterize them and declare cybersecurity incidents. The volume of events is often high, so organizations **should rely on technical solutions (e.g., SIEM, SOAR) to filter datasets for human review**. **Cyber Threat Intelligence (CTI) is invaluable for early detection** of malicious activity. Organizations **should strive to find incidents earlier** in the attack life cycle. It's recommended to **continuously monitor log events for malicious activity using tools like SIEM/SOAR**, integrate up-to-date CTI into analysis, and rapidly acquire vulnerability disclosures. Incident criteria should be applied to declare incidents.

### Respond (RS)

The Respond Function is at the core of incident response activities.

- **RS.MA (Incident Management)**: This involves overseeing responses to all incidents, including shifting priorities and resources. Incident triage, prioritization, escalation, elevation, and decisions about initiating recovery **should be based on a set of risk evaluation factors** (e.g., asset criticality, functional impact, data impact, threat actor, recoverability), rather than a first-come, first-served basis. The **incident response plan should be executed in coordination with relevant third parties** once an incident is declared, and other cybersecurity plans (e.g., business continuity, disaster recovery) should be initiated as needed. Incidents should be **categorized by type** (e.g., data breach, ransomware) and **prioritized** based on scope, impact, time-criticality, and resource availability. Tracking and validating the status of ongoing incidents is vital for rapid changes in response resources or strategy.
- **RS.AN (Incident Analysis)**: This category focuses on investigating, determining, and documenting what, how, and why an incident occurred. Analysis should aim to **determine the sequence of events, involved assets, vulnerabilities, threats, threat actors, and underlying root causes**. Organizations should **safeguard the confidentiality and integrity of incident response records** and collect and retain incident data and metadata according to evidence preservation procedures and data retention policies. Estimating and validating the incident's magnitude is crucial, requiring a search for indicators of compromise and persistence on all potential targets to avoid underestimation.
- **RS.CO (Incident Response Reporting and Communication)**: This involves coordinating response activities with internal and external stakeholders as required by laws, regulations, or policies. Organizations **should have mechanisms in place in advance to coordinate with affected parties**. Notifications to internal and external stakeholders **must comply with current incident notification laws and regulations**. **Securely sharing information with stakeholders** consistent with response plans and agreements is important, and senior leadership should be regularly updated. Established media communications procedures should be followed.
- **RS.MI (Incident Mitigation)**: This category encompasses activities to prevent the expansion of an event and mitigate its effects. **Containment** refers to preventing the incident's expansion, and organizations can configure cybersecurity technologies for automatic containment actions or allow manual selection of actions. **Eradication** involves mitigating an incident's effects, such as eliminating persistence mechanisms and exploited vulnerabilities; all affected hosts and services should be identified for remediation.

### Recover (RC)

The Recover Function focuses on restoring assets and operations affected by a cybersecurity incident. Personnel work to return systems to normal operations, confirm functionality, and remediate vulnerabilities to prevent similar incidents. Recovery operations may include restoring from clean backups, rebuilding systems, installing patches, changing passwords, and tightening security controls.

- **RC.RP (Incident Recovery Plan Execution)**: This involves selecting, prioritizing, and performing recovery actions securely, verifying asset integrity, declaring the end of recovery, and completing documentation. Recovery procedures **should begin during or after incident response processes**, and all individuals with recovery responsibilities should be informed. Recovery actions should consider timeliness, precision, and reliability, and their selection should be based on criteria in the incident response plan. The **integrity of backups and other restoration assets must be verified before use**. Organizations should validate that essential services are restored in the appropriate order, confirm successful system restoration with owners, and monitor performance. Before restored assets are put back into production, their integrity should be verified, and root causes of the incident remediated. An **after-action report documenting the incident, response/recovery actions, and lessons learned should be prepared**.
- **RC.CO (Incident Recovery Communication)**: This is a continuation of communication activities from the Respond Function. Recovery information, including restoration progress, should be **securely shared with designated internal and external stakeholders** consistent with response plans and agreements. Senior leadership should receive regular updates, and crisis communication with critical suppliers should be coordinated. Organizations should **follow breach notification procedures** for data breach recovery and explain the steps taken to recover and prevent recurrence.