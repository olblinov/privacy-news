---
title: CNIL publishes its recommendations for better privacy protection
tags:
  - pbd
  - methodology
links:
  - https://www.cnil.fr/en/mobile-applications-cnil-publishes-its-recommendations-better-privacy-protection
  - https://www.cnil.fr/sites/cnil/files/2025-05/recommendation-mobiles-app.pdf
---
The provided sources outline the **recommendations by the CNIL (Commission Nationale de l'Informatique et des Libertés)**, the French data protection authority, regarding the **protection of user data and privacy in mobile applications**. These recommendations aim to **clarify legal obligations** and provide practical advice to all stakeholders involved in the mobile application ecosystem.

# **I. Context and Risks of the Mobile Environment**

French citizens extensively use mobile applications daily, with an average of 30 applications downloaded and 3 hours 30 minutes spent on cell phones per day in 2023. However, the mobile environment presents **greater risks to data confidentiality and security than the web**. This is due to several factors:

- Mobile applications can access a **wider variety of sensitive data**, such as real-time location, photographs, and health data.
- The **permissions required from users** for device functions and data (e.g., microphone, contact list) are often extensive.
- **Numerous stakeholders** are involved in an application's operation, increasing the likelihood of personal data collection and sharing.
- The **data processing within applications can be opaque**, making it difficult for users to understand data collection and its objectives, or the nature of requested permissions. Smartphones include many sensors (camera, GPS, contact database, accelerometers) that can allow apps intrusive data access.

# **II. Objectives of the CNIL Recommendations**

The CNIL's recommendations are designed to ensure **enhanced protection of personal data at every stage** of mobile application development and availability. Their key objectives include:

- **Clarifying and framing the role of each stakeholder**: The recommendations specify the division of responsibilities and respective obligations within the mobile ecosystem to provide legal certainty and practical advice on managing collaboration.
- **Improving user information on data use**: Information provided to users should be **clear, accessible, and presented at the right time** within the application. Advice and best practices are offered to ensure users understand if requested permissions are truly necessary.
- **Ensuring informed and unforced consent**: Applications must **obtain consent for data processing not essential for their operation** (e.g., targeted advertising). Consent conditions are specified, emphasizing that users must be able to **refuse or withdraw consent as easily as they give it**. The recommendations also articulate how consent collection interacts with technical permission systems.

# **III. Stakeholders in the Mobile Application Sector**

The CNIL recommendations are addressed to all professionals working in the mobile applications sector, recognizing their interdependence and varied involvement in personal data processing. The main stakeholders include:

## **A. Mobile Application Publishers**

- **Role**: Publishers make applications available to users, often through application stores, to offer products or services, and they define the application's economic model.
- **Data Processing Involved**: Publishers typically process personal data from application use, including technical connection data, user-provided data, device data, and inferred navigation data. This can include data necessary for service provision (e.g., payment, location) and data for application operation. Publishers may also transmit collected data to third parties for monetization, using mobile-specific tracking devices or mobile identifiers.

## **B. Mobile Application Developers**

- **Role**: Developers write the computer codes that constitute a mobile application. They help define the architecture and make choices regarding SDKs and hosting. Publishers may develop internally or use external developers.
- **Data Processing Involved**: Developers configure future personal data processing by participating in development. Through maintenance (tests, data analysis, error reports), they can be involved in all data processing by the application and may incur GDPR liability.

## **C. Software Development Kit (SDK) Providers**

- **Role**: SDK providers develop "ready-to-use" functionalities (e.g., audience measurement, advertising targeting) that developers can integrate into applications. SDKs facilitate or accelerate software feature development by avoiding extensive custom coding.
- **Data Processing Involved**: SDK providers design software components that configure future personal data processing and may be involved in various processing operations depending on the SDK's characteristics and purposes. This can include image analysis, user tracking for data analysis on behalf of the publisher, or acting as an advertising intermediary for profiling and monetization. SDKs can also access OS functionalities like unique advertising identifiers or location.

## **D. Operating System (OS) Providers**

- **Role**: OS providers supply the operating systems (e.g., iOS, Android) on which mobile applications run. The OS defines interactions between the user, the terminal, and third-party applications. Various entities can be involved in OS construction, including manufacturers integrating third-party components or their own apps.
- **Data Processing Involved**: The OS generates identifiers specific to each terminal or user account, which can identify the user for purposes like technical operation or advertising tracking. These can be used by the OS provider or passed to third parties. The OS also provides software possibilities for applications to access device sensors (camera, microphone, location) and stored data (contact book, photo gallery).

## **E. Application Store Providers**

- **Role**: Application store providers offer platforms for downloading new applications, accessible from compatible operating systems. They can set rules for app publication.
- **Data Processing Involved**: While setting app verification rules doesn't inherently involve personal data processing, the application store itself may process data for its own purposes, often linked to a user account for app updates.

# **IV. Application of Data Protection Rules**

The CNIL recommendations apply to operations in mobile applications that involve **reading and writing on the mobile terminal** (governed by the ePrivacy Directive and French Data Protection Act) and **processing of personal data** (governed by GDPR).

## **A. Application of the ePrivacy Directive (Article 82 of the French Data Protection Act)**

- **Applicability**: This directive applies if a **reading or writing operation is performed on the user's terminal via an electronic communication network**. This includes:
    - Use of **mobile-specific identifiers** (unique terminal ID, MAC address, advertising identifiers like IDFA/AAID) or tracking techniques like **fingerprinting**.
    - **Access to information in the terminal** (photo gallery, contacts).
    - **Access to terminal sensors** (camera, microphone, location).
- **Consequences**: Users **must be informed and give prior consent** for these operations, unless they are strictly necessary to provide an explicitly requested information society service or solely for transmitting a communication over an electronic network. Subsequent data processing must be based on a legal basis provided by the GDPR.

## **B. Application of the GDPR**

- **Material Scope**: The GDPR applies to **all processing of personal data** carried out by the application.
- **Territorial Scope**: The GDPR applies to processing by stakeholders established in the EU, or to processing of personal data of individuals in the EU, even if the actors are outside the EU, if the activities relate to offering goods/services to EU persons or monitoring their behavior within the EU.

## **C. Household Exemption**

- The GDPR does **not apply to personal data processing by a natural person for purely personal or household activities** (e.g., correspondence, social networking within a family context).
- For **means of processing provided by third parties** (like an application), the GDPR generally does not apply if:
    - The processing is **initiated and controlled solely by the user**.
    - The processing is carried out in a **compartmentalized environment**, without third-party involvement in the data.
    - **Examples** where GDPR might not apply to the application publisher (as a mere software provider) include biometric authentication with local, encrypted storage, or health apps recording data locally without external connection for personal use, or peer-to-peer data sharing without centralized servers, or applications operating solely locally (e.g., photo retouching without sharing to remote servers).
- If these conditions are **not met**, the third party providing the means of processing may assume responsibility under GDPR (e.g., a photo gallery app allowing shared family albums on its servers).
- **Good Practice**: The CNIL encourages designing applications based on user-initiated and controlled processing as it ensures data protection by design.

# **V. Roles and Responsibilities under GDPR**

Determining the specific role of each stakeholder (Controller, Joint Controller, or Processor) is **crucial for understanding their obligations** under GDPR. Stakeholders must determine their qualification based on their **actual role for each processing operation** and be able to justify it.

## **A. Publisher Qualification**

- **Controller**: The application publisher is generally the **controller for user personal data processing** carried out in the application because they determine the **purposes and means** (e.g., nature of data collected, storage period, security). This includes:
    - Processing personal data for application use (account data, service data).
    - Operations involving **reading mobile identifiers** (for third-party advertising, app store personalization, OS improvement).
    - **Accessing mobile terminal sensors** or **stored data** (camera, location, contacts, photo gallery) when data is transmitted over a network.
    - **Storing and/or accessing operations carried out by third parties** (e.g., SDKs) either **jointly** (if purposes/means are jointly defined) or **on the publisher's behalf** (where the publisher remains responsible).
- **Not Responsible**: The publisher is generally **not responsible for processing carried out by third parties on their own account** from data collected through the application, though this collection must be contractually provided for (e.g., a third party reading an advertising ID for its _own_ cross-referencing purposes).

## **B. Developer Qualification**

- **No GDPR Liability**: If a developer only provides application code and has no further role in its operation or control over data, they are **neither a controller nor a processor**. However, their role is crucial for privacy-by-design, and contracts should ensure GDPR compliance.
- **Processor**: A developer is a **processor if they process personal data on behalf of the publisher** (e.g., implementing data processing/storage infrastructure, performing maintenance on hosted data).
- **Controller**: Exceptionally, a developer can be a **separate controller if they process data for their own defined purposes** (e.g., improving security of other apps, producing statistics for their own services, cross-referencing data for new services). If re-using data, they need publisher consent and must ensure compatibility with original purposes.

## **C. SDK Provider Qualification**

- **Processor**: An SDK provider is a **processor when processing personal data on behalf of the publisher** (e.g., performing storage/access solely for the publisher, enabling payment services, profiling for advertising on publisher's behalf).
- **Controller**: An SDK provider is a **controller if it determines the purposes and means of personal data processing**. This includes:
    - Accessing/storing operations and retrieving data for its **own purposes** (e.g., advertising profiling improvement, SDK improvement statistics).
    - Processing personal data resulting from these operations for its own benefit, requiring proper publisher information.

## **D. Operating System (OS) Provider Qualification**

- **Controller**: The OS provider is generally a **controller for personal data processing related to OS operation or security** (e.g., updates, telemetry, fraud detection). These operations may provide information and identifiers to applications. The qualification depends on the specific OS configuration (e.g., iOS vs. Android fragmentation) and data reuse.
- **Publisher/SDK Provider**: If the OS provider also acts as an application publisher (e.g., pre-installed system apps) or an SDK provider, they are subject to the same qualifications and obligations as those respective stakeholders.

## **E. Application Store Provider Qualification**

- **No GDPR Liability (for rule-setting)**: Setting rules for app verification and validation **does not inherently imply personal data processing**.
- **Controller (as app publisher)**: If the application store itself processes personal data for its own purposes (e.g., developer data for review, unique identifiers, list of installed apps), it is qualified as a **controller**.

# **VI. Stakeholder-Specific Recommendations**

The recommendations provide **obligations, advice, and best practices** for each stakeholder group.

## **A. Publisher-Specific Recommendations**

1. **Design its application**:
    - **Identify personal data processing**: Publishers must identify all personal data processing, including that by third parties.
    - **Ensure legal compliance**: Define purposes, identify **legal bases** (consent, contract, legitimate interest), and ensure consent is correctly collected. For **read/write operations on terminals (Article 82)**, consent is required unless strictly necessary for communication or explicitly requested service.
    - **Data minimization**: Limit data collected to what is necessary, prefer manual user input over automatic collection if possible, and offer choice.
    - **Data retention**: Limit retention time to what is strictly necessary.
    - **Sensitive data**: Processing sensitive data (political, religious, health) is generally prohibited unless based on exceptions like explicit consent. Categorization for advertising profiling is prohibited by DSA. Explicit information and separate consent are recommended.
    - **Minors' data**: Implement additional protections for minors' data; advertising profiling for minors is prohibited by DSA.
    - **Data protection by design and by default (Article 25 GDPR)**: Ensure default settings are least intrusive, allow independent use of services, explore privacy-enhancing technologies (PETs), and minimize data transmission to partners (e.g., use end-to-end encryption).
    - **Document analysis**: Maintain a record of processing activities, justify retention periods, conduct DPIAs when necessary, and appoint a DPO.
2. **Mapping partners**:
    - **Supervise relations with developers**: Clearly define developer qualification (processor/controller) and regulate subcontracting via a Data Processing Agreement (DPA). Provide clear instructions and contact points for security and compliance.
    - **Identify other third parties**: Have a complete view of all actors processing data, including third-party SDKs, and ensure compliance of processors.
3. **Managing consent and people's rights**:
    - **Inform users correctly (Articles 12-14 GDPR)**: Provide a comprehensive, clear, and accessible "privacy policy" (e.g., in-app, on download page). List permissions, their necessity, and purposes. Highlight transmission to business partners for monetization.
    - **Obtaining valid consent (Articles 4 and 7 GDPR)**: Apply CNIL guidelines on cookies and tracking devices to mobile apps, adapting for mobile interface limitations.
    - **Facilitating exercise of rights (Articles 15-22 GDPR)**: Respect rights (access, erasure, objection, portability, etc.). Provide a **rights management center in the application**. Ensure responses to requests are complete, including for processors.
4. **Maintain compliance throughout the lifecycle of the application**:
    - **Security (Articles 32-34 GDPR)**: Ensure processors implement security measures, send security alerts, and update the app for vulnerabilities.
    - **Auditing compliance**: Allow and conduct audits on processors (e.g., using OWASP MASTG, static analysis tools, testbeds).
    - **Robust processes**: Update processing records and DPIAs for developments. Regulate access to personal data, implement logged access controls, and verify data deletion.
5. **Permissions and data protection by design**:
    - **Use permissions**: OS permission systems are a good practice for user control. Ensure users understand why permissions are requested (necessary for app function, ancillary function, or publisher/third-party benefit). Allow separate consent for different purposes.
    - **Permission selection process**: Identify purpose, choose minimum additional collection, consider alternatives to permissions (e.g., manual input), process data locally, and make access optional.
    - **Practical use cases**:
        - **Location**: Use approximate over precise location, single-time over permanent, foreground only, and prefer GPS-only over network analysis. Offer manual input alternative. Process locally if possible. Obtain consent for remote collection. Minimize precision before sending to servers. Don't store remotely unless justified.
        - **Contact data**: Determine necessity, choose read-only if sufficient. Make selection on terminal. For cross-user contact discovery, obtain consent and inform all concerned. Obtain consent for own contact details to be used by others. Limit intrusiveness (e.g., Private Set Intersection). Delete contact data after analysis.
        - **Microphone**: Determine necessity, minimize concurrent audio streams. Process audio locally. Obtain consent for remote collection and inform user of server transmission. Do not store remotely unless justified, make backups optional with consent.
        - **Camera**: Distinguish access to camera vs. stored photos. Avoid broad permissions. Prefer delegation to system apps for live recording. Process on terminal. Obtain consent for remote image collection. Minimize image sent, offer selection/blurring tools. Do not store remotely unless justified.

## **B. Developer-Specific Recommendations**

1. **Formalise your relationship with the publisher**:
    - **Responsibilities**: Confirm developer's qualification (processor) with the publisher. Request clear instructions and a DPO contact point from publisher.
    - **Obligations**: As processor, be transparent (e.g., source code to publisher), assist publisher with rights exercise, guarantee data security, and alert publisher if instructions infringe GDPR. Maintain processing record. Validate sub-processors and their qualifications.
    - **Project management**: Involve publisher in decisions affecting user privacy. Inform publisher proactively about external evolutions (e.g., SDK updates). Ensure proper information for users if publishing app to stores. Secure upload accounts.
    - **Identify all processing**: Analyze if OS functionalities (e.g., backups, APIs) or SDK integrations involve data processing and inform/assist publisher. Alert publisher if SDK processing infringes GDPR.
2. **Assume its advisory role towards the publisher**:
    - **User rights**: Implement technical and organizational measures to enable rights exercise (e.g., database structuring for deletion). Propose in-app rights management center. Ensure all relevant data is transmitted for access/portability requests.
    - **Data protection by design**: Ensure data minimization. Propose solutions to limit risks of third-party access (e.g., encrypt notifications/backups, hash identifiers). Advise on necessary permissions and alternatives. Prefer runtime permissions over install-time. Propose privacy protection techniques and local processing.
    - **Sensitive data**: Process sensitive data only with explicit publisher instructions. Alert publisher to irrelevant or unlawful use. Ensure SDKs have no access to sensitive data.
    - **Consent collection**: Alert publisher if specifications require consent (Article 82/GDPR) and participate in proper implementation. Adapt interfaces for mobile legibility. Agree on consent arrangements upstream. Articulate consent collection with OS permissions, avoiding unnecessary solicitation. CMP may be needed for purposes not covered by permissions.
3. **Making good use of SDKs**:
    - **Select SDKs**: Assess SDKs for data protection compliance before integration. Obtain documentation on data processing, unauthorized transfers. Ensure SDKs allow rights exercise and block processing until consent. Prefer privacy-respecting SDKs.
    - **Manage user consent**: SDK configuration must allow prior consent for any consent-based processing or read/write operations. SDKs must allow consent withdrawal. Support granularity of consent if SDK serves multiple purposes.
    - **Auditing SDKs**: Conduct audits (e.g., network interception) to verify SDK compliance with commitments (no unconsented operations, respect for choices, data minimization, consent withdrawal).
4. **Ensure the security of the application**:
    - **Minimum security measures**: Secure communications with TLS, store secrets using hardware protections (Keystore, Secure Enclave), deactivate default server backups or encrypt them, use appropriate authentication, and comply with OWASP L1 levels.
    - **Security model**: Avoid basing security on terminal integrity; design for corrupt terminals. Protect personal data from internal or processor misuse.
    - **Maintain security over time**: Implement CI/CD, secure code deployment, monitor external elements (SDKs/libraries) for malicious evolutions, keep app versions updated in stores, and alert publisher of data breaches.

## **C. SDK Provider-Specific Recommendations**

1. **Designing your service**:
    - **Identify obligations**: Determine qualification (controller/joint controller/processor) for each processing operation. Ensure data collection is known to data subjects. Identify sensitive data. Inform controller of GDPR Chapter V transfers.
    - **Data protection by design and by default**: Minimize data collected and transmitted. Propose default configurations respecting minimization. Partition services and functionalities to allow independent selection by publishers, especially if purposes or responsibilities differ. Choose least intrusive system permissions.
2. **Documenting the right information**:
    - **Information to provide**: Provide partners with analysis of processing operations, qualification under GDPR, and identification of sub-processors. Document read/write operations on user terminals and purposes. Indicate permissions required, their optional/mandatory nature, and link to Article 82.
    - **Accessible format**: Ensure documentation is up-to-date, easily accessible, and formalized in contracts. Expressly indicate updates impacting privacy. Use clear, manipulable formats (e.g., spreadsheets) for processing records, indicating legal bases and data collected. Propose wording examples for consent collection.
3. **Managing consent and people's rights**:
    - **User information**: If controller/joint controller, ensure individuals are informed. Highlight data transmission to business partners for monetization. Contractually oblige publishers/developers to provide information on its processing. Offer CMP interface.
    - **Exercise of rights**: Assist controller or directly respond to rights requests. Design databases to enable rights (e.g., deletion). Automate rights exercise via APIs.
    - **Tracking devices and consent**: Providing permissions does not equate to valid consent. Offer technical means to block processing until valid consent is obtained. Support granularity and withdrawal of consent. Avoid "install-time permissions" for user experience.
4. **Participate in maintaining compliance over time**:
    - **Secure SDKs**: Implement security measures as per developer recommendations.
    - **Audits**: Allow and facilitate audits (Article 28(3)(h) GDPR) by providing necessary information. Conduct regular internal audits. Offer remote deactivation feature for publishers.
    - **Robust processes**: Establish vulnerability reporting tools and data breach notification protocols (Articles 33/34 GDPR). Monitor OS API developments to update SDKs for better privacy protection.

## **D. Operating System (OS) Provider-Specific Recommendations**

1. **Ensure compliance of processing**:
    - **Determine responsibility**: Analyze responsibilities for functional components and processing (e.g., OS base, added bricks, third-party code reuse).
    - **Data protection by design and by default**: Ensure no processing requiring consent or non-exempt read/write operations occur before valid consent. Avoid "dark patterns" for account creation.
    - **Minimize data**: Allow third-party notification servers and offer encryption tools for notifications. Design bug/crash reporting to minimize new data processing. Ensure remote backups are not default and are encrypted with inaccessible keys. Allow limiting location data use to GPS only, prefer local precise location calculation. Offer suspension of constant location collection.
2. **Ensuring partners are properly informed**:
    - **Comprehensive documentation**: Provide detailed technical and legal documentation (especially for EU market) to publishers/developers, including specific guides for DPOs. Specify technical and legal characteristics of different functionalities (e.g., location APIs).
    - **OS-specific processing**: Inform third parties about processing carried out by the OS provider, including data processed, legal qualification, and Chapter V transfers.
    - **Encourage privacy-protective features**: Inform about more privacy-protective functionalities (e.g., rough location) and encourage their adoption through updates and dialogue.
3. **Provide tools to enable respect for users' rights and consent**:
    - **Permission systems**: Apply access permissions to all terminal resources (sensors, functions, storage). Offer fine-grained control over permission scope (accuracy, material scope, temporal scope). Require permission only when needed, offer contextual requests, and allow users to limit transmitted information (e.g., partial contact list). Periodically revoke permanent permissions for unused apps. Isolate SDK execution from application permissions.
    - **Information and consent**: Allow publishers to provide relevant information with permission requests. Implement transparency measures like visual indicators for sensor access and history of usage. Repeat permission requests for intrusive permissions. Permission windows can grant valid consent if specific and clear. Ensure publisher latitude in presenting info. Provide information on impact of choices.
    - **Data portability**: Enable data portability in an open, machine-readable format to facilitate migration between OSs.
    - **Minor users**: Provide parental control tools that can signal minor status to apps via API, and allow for different permissions based on authenticated user (minor vs. legal representative).
4. **Provide a secure platform**:
    - **Security and sandboxing**: Implement strict sandboxing between applications and OS, and between applications themselves. Offer sandboxing for personal/professional use. Implement secure storage (Secure Element), encrypt network connections, force TLS, offer state-of-the-art encryption, provide local sharing tools, and encrypt default backups.
    - **Audit tools**: Provide tools for detailed analysis of network traffic and processes. Offer simplified privacy reports.
    - **Maintain security**: Offer long-term OS version support (at least 7 years of security updates). Inform users of risks for unsupported versions.

## **E. Application Store Provider-Specific Recommendations**

1. **Analyze applications submitted by publishers**:
    - **Centralize compliance data**: Request categories of data collected, purposes, third parties accessing data (including SDKs), system permissions, and update history from publishers. Request privacy policy and contact point. Request if app targets minors. This information is not confidential and should not be used in competition by gatekeepers.
    - **Encourage best practices**: Advise publishers against blocking install-time permissions, encouraging runtime management. Incentivize not using broad or outdated OS APIs. Invite informative update notes.
    - **Analyze security vulnerabilities**: Implement static and dynamic analysis tools to detect vulnerabilities.
2. **Implement transparent application review processes**:
    - **Integrate GDPR checks**: For apps targeting the EU market, check for controller identity, purposes, legal basis, retention period, rights mechanisms, and right to complain to authority in user information. Refuse apps unable to provide these.
    - **Clear expectations**: Provide complete documentation, concrete examples of problematic behaviors, and solutions. Publish clear validation processes, steps, and timescales. Proactively communicate rule updates.
    - **Facilitate tools**: Allow fine-grained management of publisher accounts. Establish clear communication channels. Provide transparent reasons for rejection and appeal processes.
3. **Inform users and provide reporting tools**:
    - **Standardize compliance data**: Display all privacy-related information (collected data, purposes, third parties, permissions) on app pages, accessible before download. Use graphic representations for clarity. Inform of commercial use of data. Offer privacy criteria filters in search.
    - **Reporting arrangements**: Implement mechanisms for users to report practices contrary to GDPR (e.g., failure to exercise rights, unconsented SDK execution, dark patterns). Use reports to guide checks.
    - **Notify vulnerabilities**: Establish protocols for detected vulnerabilities in deployed apps/SDKs. Analyze affected apps, suspend auto-updates, temporarily remove vulnerable apps. Inform users of security risks via system notifications.

# **VII. Follow-up and Clarifications**

The CNIL conducted extensive consultations with various stakeholders and the public, also incorporating an opinion from the French Competition Authority (ADLC) given the growing interaction between data protection and competition law. This led to **clarifications distinguishing mandatory obligations from recommendations or best practices** for greater legal certainty. The CNIL emphasizes that its recommendations must be applied in compliance with **competition law and the Digital Market Act (DMA)**. The recommendations also refocus on **technical permission systems** (contact book, geolocation, microphone, camera) that enable user control over device information, regardless of purpose.

The CNIL plans to **support the industry through webinars** in the coming months to help implement the recommendations. From **early spring 2025**, the CNIL will launch a **specific investigation campaign on mobile applications** to ensure compliance, while continuing to handle complaints and conduct necessary investigations.

# **VIII. Glossary**

- **Mobile application**: Application software for smartphones and tablets, isolated by the OS via a permissions system.
- **Software Development Kit (SDK)**: A set of tools for app development, integrated into apps to provide ready-to-use functionalities (e.g., analytics, advertising).
- **Sandboxing mode**: A security mechanism by an OS to isolate applications from each other and the OS core, limiting access to functionalities via permissions.
- **Application Programming Interface (API)**: A software interface allowing exchange of data and functionalities between software/services. In mobile apps, OS APIs expose functionalities to applications.
- **Operating System (OS)**: The software layer closest to hardware, managing resources and interactions between user, terminal, and applications. It implements sandboxing and permission systems.
- **Access Permission**: OS-implemented devices allowing users to choose which terminal features (sensors, functionalities, storage) mobile apps can access, with default limited access for security/privacy. Permissions can be "technical" (access to resources) or "purpose-specific" (authorize actions for a specific purpose).
- **Audience measurement ('analytics')**: Services collecting attendance or performance statistics for websites or mobile applications.
- **Advertising ID**: Digital identifiers generated by the OS and associated with a terminal (e.g., IDFA, AAID), allowing different applications to identify a single user for advertising targeting.
- **Geolocation**: Technology determining object/person location via geographical coordinates, often using GPS or phone communication interfaces.