---
title: CNIL Guidance on Database Reuse
tags:
  - methodology
  - pbd
links:
  - https://www.cnil.fr/fr/reutilisation-de-bases-de-donnees-les-verifications-necessaires-pour-respecter-la-loi
---
# Summary

The CNIL (Commission Nationale de l'Informatique et des Libertés) advises data controllers who intend to reuse databases, whether freely available online or provided by third parties, that they **must verify that the database's constitution or sharing is not manifestly illicit**. Reusing data from a data leak is forbidden, and reusers of manifestly illegal databases risk being charged with receiving stolen goods (`recel`). While not requiring an exhaustive audit of the original creator's full compliance, the CNIL recommends specific checks to identify clearly illicit origins. These preliminary checks do not remove the reuser's responsibility to ensure their _own_ data processing complies with the GDPR, including establishing a legal basis and, where applicable, obtaining explicit consent for sensitive data. It is also strongly recommended to establish agreements with initial data holders to ensure lawful data reuse.

# Details

## Core Requirement and Definition of Illicit Database

Anyone reusing a database must **ensure that its constitution or sharing is not manifestly illicit**. A database is considered **manifestly illicit** if it **clearly violates the General Data Protection Regulation (GDPR), specifically Article 5.1.a**, which pertains to principles relating to processing of personal data, or other regulations such as those safeguarding information system security or intellectual property rights. For example, reusing data that originates from a data leak is explicitly forbidden. Furthermore, downloading or reusing a database that is manifestly illegal could lead to charges of receiving stolen goods (`recel`) under Article 321-1 of the French Penal Code.

## CNIL's Recommended Verification Points

To assist data reusers, the CNIL recommends checking specific points, though these do not necessitate an in-depth investigation into every aspect of the original creator's GDPR or other legal compliance (e.g., copyright, trade secrets).

The key verification points include:

- **Source Description**: The description of the database **should clearly mention its source**. For instance, a database derived from publications on a named professional social network is acceptable. Conversely, a database containing surveillance images without source details should not be reused without further clarification to alleviate doubts about its compliance.
- **Absence of Criminal Origin or Prior Sanction**: Ensure that the database's creation or distribution **does not manifestly stem from a crime or offense**. An example of a manifestly illicit database is one purchased on the dark web, clearly originating from a data leak or theft, where its criminal origin cannot be ignored. Additionally, there should be no public condemnation or sanction by a competent authority leading to the deletion or prohibition of data exploitation. This also applies if a court decision has found an infringement of an intellectual property right, such as that specific to database producers.
- **Sufficiently Documented Data Origin**: The origin of the data must be **well-documented, leaving no obvious doubt about its legality**. This primarily involves verifying that the source processing has a **legal basis**, especially if the data is highly intrusive and would typically require consent. For example, a database of precise, non-anonymized geolocation data for thousands of people, shared without their consent, would likely be illicit. In contrast, a database of pseudonymized data, initially made public by the individuals on an identified website and not containing sensitive data, might be permissible.
- **Handling Sensitive or Infraction Data**: If the database contains **sensitive data** (e.g., health data, political opinions, as per GDPR Article 9) or **data related to infractions** (GDPR Article 10), **additional checks are highly recommended** to ensure lawful constitution or availability. For sensitive data, this primarily means verifying **explicit consent** from the individuals or evidence that the data was **manifestly made public** by them (e.g., a post deliberately made visible to all on social media). For infraction data, its use must be authorized by specific laws, such as the French "Loi Informatique et Libertés".

## Reuser's Own Compliance Responsibilities and DPIA

These preliminary checks **do not exempt the organization reusing the database from conducting a complete analysis of its _own_ data processing compliance** with the GDPR and other applicable laws. This includes:

- Identifying a legal basis for processing.
- Obtaining explicit consent for processing sensitive data, where applicable, or identifying another exception to the prohibition principle under GDPR Article 9. Integrating these verification steps into a **Data Protection Impact Assessment (DPIA)** is considered good practice. The CNIL provides resources and tools to aid organizations in achieving their own GDPR compliance, such as defining purpose and legal basis, informing individuals, and data minimization.

## Structuring Relationships with Data Holders

The CNIL **strongly recommends concluding an agreement with the initial data holder** to help ensure the legality of data reuse. This contract should specify a number of details, including:

- The source and context of data collection, the legal basis for processing, and details of any Data Protection Impact Assessment (DPIA) performed, to mitigate risks of an illicit database.
- Information provided to individuals, particularly regarding the purpose and recipients of their data.
- Guarantees that the data sharing by the original holder is lawful, ensuring compatibility between the initial and reuse purposes (e.g., the purpose for reuse must be compatible with the initial purpose).

## Scope of Verification: Focus on "Manifestly Illicit"

It's important to understand that the initial data controller might have committed other GDPR breaches, such as incomplete information notices or a lack of proper documentation. However, such breaches **do not necessarily render the reuse illicit, provided that your own reuse is fully compliant with the GDPR**. The required checks are focused on identifying databases that are _manifestly_ illicit, rather than performing an exhaustive audit of the original data provider's entire compliance framework.