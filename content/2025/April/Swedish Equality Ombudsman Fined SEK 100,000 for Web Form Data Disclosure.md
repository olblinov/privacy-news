---
title: Swedish Equality Ombudsman Fined SEK 100,000 for Web Form Data Disclosure
tags:
  - security
  - pbd
links:
  - https://www.edpb.europa.eu/news/national-news/2025/swedish-sa-administrative-fine-against-equality-ombudsman-when-personal_en
  - https://www.imy.se/globalassets/dokument/beslut/2025/tillsynsbeslut-do.pdf
date: 2025-04-23
---
# Summary

The Swedish Supervisory Authority (SA) has issued an **administrative fine of SEK 100,000 (approximately 9,000 EUR)** against the **Equality Ombudsman (DO)** for violating the General Data Protection Regulation (GDPR). The violation stemmed from the DO's failure to implement sufficiently effective security measures for a web form used to collect tips and complaints about discrimination. This inadequacy led to personal data, potentially including sensitive information, being inadvertently disclosed to a third-party data processor used for website usage analysis, despite an intended security measure. The incident lasted for about a year and affected approximately 500 submissions.

# Details

## Background

The Equality Ombudsman (DO) is a Swedish agency tasked with promoting equal rights and opportunities and combating discrimination. The case originated from a personal data breach reported by the DO to the Swedish Supervisory Authority (SA), also known as Integritetsskyddsmyndigheten (IMY), in the fall of 2021. The breach involved personal data collected via the DO's web form for tips and complaints about discrimination, which was inadvertently included in usage analyses of the DO's website.

A security measure intended to protect this personal data from being included in usage analyses failed to work as intended on the web form's summary page. This led to some data, potentially sensitive personal data, being inadvertently disclosed to a personal data processor hired by the DO to conduct the analyses. The incident lasted for approximately one year, from September 1, 2020, to September 17, 2021. Upon discovering the incorrect handling of data, the DO closed the web form. It is estimated that about 500 tips and complaints were affected. The collected data could include sensitive information related to discrimination grounds like ethnic origin, functional impairment, gender identity, religion, or sexual orientation, and could also contain personal data of children or names of employees. While the data was transferred to the DO's journaling system encrypted, and communication with the processor's storage was also encrypted, the issue was the unintended transfer of unmasked data to the processor's analytics tool. The data processor confirmed they did not actually access the personal data.

## Legal Analysis

The Swedish SA's supervision concluded that the DO violated the **General Data Protection Regulation (GDPR)** by not taking sufficiently effective security measures to ensure an appropriate level of security for the web form. The primary legal references for this decision were **Article 32 (Security of processing)** and **Article 83 (General conditions for imposing administrative fines)** of the GDPR.

As the **data controller**, the DO was obligated under GDPR Article 32.1 to implement appropriate technical and organizational measures to ensure a security level suitable for the processing risk. IMY determined that the nature, scope, and context of the data processing, which involved **sensitive personal data** (e.g., related to ethnic affiliation, disability, gender identity, religion, sexual orientation), children's data, and data potentially subject to **statutory confidentiality**, required a **high level of security**. The SA found that the DO's security setting in the analysis tool, intended to mask free-text fields, did not function on the web form's summary page, leading to the unauthorized disclosure of personal data to the processor. IMY also concluded that the DO lacked an effective systematic security process to detect and rectify this security flaw during the entire duration of the incident. Despite the DO having routines for information security and conducting a risk analysis before launching the form, these measures were deemed insufficient to prevent the unauthorized disclosure. IMY emphasized that continuous and systematic security work, including regular testing and evaluation, is crucial [3, 16d, 41, 42]. #security #pbd 

## Sanction

The Swedish SA imposed an **administrative fine of SEK 100,000**. This decision was made under the authority granted by Article 58.2 and Article 83 of the GDPR, along with 6 kap. 2 § of the Swedish Data Protection Act. For an administrative fine to be imposed, the violation must have occurred intentionally or negligently. IMY determined that the DO could not be considered ignorant of the fact that its actions constituted a violation of the GDPR.

In determining the fine, IMY considered various factors as per GDPR Article 83.2, including the nature, severity, and duration of the violation. The violation lasted for approximately one year and involved the unauthorized disclosure of personal data, including potentially sensitive categories, that could be subject to confidentiality. Affected individuals would have had a high expectation of confidentiality. However, mitigating circumstances were also considered: the data transfer to the processor was encrypted, the data was not openly accessible via the internet, and the processor confirmed they did not actually access the personal data. The DO had also taken some appropriate technical and organizational measures before the incident and acted quickly upon discovery. Given these circumstances, IMY ultimately assessed the violation as being of **low severity**. The actions taken by the DO after the incident, such as closing the web form, investigating, securing data deletion, and publishing information, were considered expected responses and therefore not mitigating factors. The fine of SEK 100,000 was deemed effective, proportionate, and dissuasive.