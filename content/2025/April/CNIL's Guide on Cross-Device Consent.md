---
title: CNIL's Guide on Cross-Device Consent
tags:
  - cookies
  - consent
  - privacy_engineering
links:
  - https://www.cnil.fr/fr/consentement-multiterminaux-consultation-sur-le-projet-de-recommandation
  - https://www.cnil.fr/sites/cnil/files/2025-04/projet_de_recommandation_multiterminaux.pdf
date: 2025-04-24
---
# Overview of the Consultation

## Purpose and Context

The French data protection authority, CNIL (Commission Nationale de l'Informatique et des Libertés), launched a public consultation on its **draft recommendation concerning cross-device consent** (also known as multi-terminal consent). The primary goal of this initiative is to assist digital service providers in gathering consent that complies with the General Data Protection Regulation (GDPR) when employing this practice.

This consultation arises from the increasing use of various devices by users—such as computers, smartphones, tablets, and connected televisions—to interact with websites and mobile applications. Often, users are logged into a single account across these devices. The proliferation of connected objects has led to more frequent requests for consent regarding the use of cookies and other trackers. In response, some digital actors are seeking to implement solutions that allow for a **single consent valid across all of a user's terminals**.

## Scope and Objectives

The draft recommendation specifically targets actors who intend to collect cross-device consent **only when users are authenticated to an account**, a scenario referred to as "logged-in environments" ("univers logués"). In practice, this means that when a user accesses a website or mobile application and expresses their choices regarding cookies or other trackers on one device connected to their account, **these choices would be automatically applied to all other devices connected to that same account**. This includes smartphones, tablets, computers, connected televisions, as well as the specific browser or application used.

This project recommendation was developed based on discussions with professionals and civil society associations, aiming to address their questions about how regulation applies to this practice. The document proposes **concrete recommendations on how to validly collect cross-device consent**. These recommendations are designed to modify and complement the CNIL's existing recommendation on the use of cookies and other trackers, which was published on September 17, 2020.

## Consultation Process

The public consultation period is open until **June 5, 2025**. Following this period, the CNIL will review all submitted contributions and then adopt a definitive version of the recommendation. **Any public or private entity concerned by these practices is invited to participate**. The CNIL particularly aims to engage digital actors affected by the recommendation, such as publishers and the advertising ecosystem, but also encourages participation from citizens and civil society. To streamline the process, the CNIL suggests that actors within the same organization or sector, if possible, group their comments into a single contribution, potentially by coordinating with their representatives, networks, federations, or associations.

# Detailed Recommendations for Cross-Device Consent

## Scope of the Recommendation Document

The recommendation primarily considers configurations specific to **web environments and mobile applications**. However, it also serves as a source of inspiration for developing interfaces in other contexts where consent is required under Article 82 of the "Informatique et Libertés" law, such as **connected televisions, video game consoles, voice assistants, communicating objects, and connected vehicles**.

While the recommendation generally covers both environments where users are authenticated to an account ("univers logués") and those where they are not ("univers non logués"), **Article 7, specifically related to cross-device consent, applies _only_ to logged-in environments**. This article applies to all environments (terminal, browser, or application) from which the account user authenticates. It is important to note that the implementation of a cross-device consent mechanism is **optional and not an obligation** for data controllers.

## Definition and Conditions for Legality (Article 7.1)

Cross-device consent is defined as a mechanism that enables the application of a user's choices regarding the reading or writing of information to **all environments (terminals like computers, tablets, smartphones, connected TVs, and the browsers/applications used) from which they access a given website or mobile application**, without requiring them to formulate those choices on each individual terminal. In logged-in environments, these choices are no longer linked to a specific terminal but rather to the **user's account** associated with the website or mobile application. This means that choices made on one device while connected to an account are **automatically applied** to other devices through which the user can also connect. Users are also able to **manage the choices associated with their account from any terminal**. #consent 

For cross-device consent in a logged-in environment to be implemented legally, it must adhere to the juridical conditions outlined in the guidelines related to Article 82 of the "Informatique et Libertés" law and other articles of the recommendation (specifically Article 2, paragraphs 2-1 and 2-3). Key conditions include:

- **Identical Scope:** The choices expressed by users must have an **identical scope**. If consent can be given once for multiple terminals, then **refusal or withdrawal of consent must similarly apply across all of them**. #consent 
- **Informed Consent:** Users must be **informed of the scope of their consent before they exercise their choices**, ensuring the consent is truly informed. This information must explicitly state that the choices made will be **applied to all terminals where the user is authenticated to their account**. #consent 

## Information to Users (Article 7.2)

Information provided to users can be delivered, for example, through the **consent collection window** (also known as a Consent Management Platform or CMP). The CNIL recommends that information regarding the scope of choices and the possibility to modify them be **recalled immediately after authentication** to an account, especially when the terminal has not yet been linked to the account. This reminder should use an information banner that indicates, if applicable, whether the choices associated with the account have been saved or modified.

## Managing Contradictory Choices (Article 7.3)

A potential issue arises when a user interacts with a logged-out environment where no choices are recorded on a terminal (e.g., first visit or cleared trackers). Before authenticating, the user might express choices that differ from those already stored on their account. Data controllers are responsible for managing this contradiction in a **clear and fair manner** for the user.

The CNIL identifies two main modalities to resolve this contradiction:

- **Modality 1: New Choices Overwrite Account Choices**
    - Choices made on the new terminal _before_ authentication (i.e., from the last displayed consent window) **overwrite those previously recorded within the account**.
    - The newly recorded choices will then apply to all other terminals connected to the account.
    - This modality has the advantage of ensuring that the **latest choice expressed by the user is taken into account**, regardless of the terminal used.
- **Modality 2: Account Choices Prevail**
    - Choices recorded within the account **prevail over choices made on the new terminal before authentication**.
    - To be effective, this modality requires distinguishing the user's browsing tracking based on whether they are logged in or not (e.g., using two different cookies or identifiers).

The CNIL encourages actors to move towards a **single, unique modality** to simplify user understanding of the system across different mobile applications or websites. #change 

Regarding specific information related to managing these contradictions, the information provided must be adapted to its context (e.g., authenticated or not, in case of contradiction) to minimize user confusion. Once authenticated, the user must be **clearly informed of any contradiction** between the choices just made and those already associated with the account. This information should specify:

- For Modality 1: If the choices associated with the account have been saved or modified.
- For Modality 2: The existence of a contradiction between the latest choices expressed and those already associated with the account, and that the latter will continue to apply within the account.

Regardless of the chosen modality, the information must specify the **means available to the user to modify the choices associated with their account**. This can take the form of an ephemeral banner, potentially the same one mentioned in paragraph 7-1, but with adapted and specific information regarding contradiction management.

## Interaction with Logged-Out Environments (Article 7.4)

Within a cross-device consent system, user choices made in a logged-in environment **must not impact choices previously recorded in a logged-out environment** (e.g., via a cookie deposited within a browser). For shared terminals (like a family computer or a connected television within a household), individual choices associated with a given account (even if expressed on another individual terminal) **should not affect other users of the shared terminal** when they are not authenticated with that same account (i.e., when browsing in a logged-out environment). #change 

## Data Minimization with Subprocessors (Article 7.5)

When implementing a cross-device consent mechanism, particular attention should be paid to the personal data exchanged with any third-party service provider involved in data processing. In line with the principles of data minimization, data protection by design, and data protection by default (Article 25 of the GDPR), the CNIL recommends **not transmitting the user's clear account identifier** (e.g., a pseudonym containing a first or last name, or an email address) to the consent management platform provider. Instead, a **technical identifier should be systematically substituted** to allow the provider to reconcile the user's different terminals. This recommendation does not apply to non-significant account identifiers, such as random character strings or hashed values.

## Transitioning to Cross-Device Consent (Article 7.6)

When a website or mobile application evolves its consent collection mechanism to a cross-device system, data controllers are required to obtain a **new consent that is free, specific, informed, and unambiguous**. This is because consent previously expressed on a single terminal, prior to the transition to cross-device consent management, **cannot be considered valid for other terminals**, as the user was not informed of the multi-terminal scope of their initial consent.

## Good Practice: Terminal-Specific Choices (Article 7.7)

As a good practice, the CNIL encourages data controllers to **allow users the possibility to revert their choices, terminal by terminal**. #change This enables users to differentiate their usage and the management of their personal data based on the contexts in which they access the service and, consequently, the terminals they use. This option could practically be made accessible, for instance, within the configuration panel that allows for the management and withdrawal of consent associated with the account.