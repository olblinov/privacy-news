---
title: United States FTC Bans Gravy Analytics Venntel from Selling Sensitive Location Data No Monetary Fine
tags:
  - "#adtech"
  - sensitive
  - ftc
  - fine
links:
  - https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-finalizes-order-prohibiting-gravy-analytics-venntel-selling-sensitive-location-data
  - https://www.ftc.gov/system/files/ftc_gov/pdf/2123035gravyanalyticscomplaint.pdf
  - https://www.ftc.gov/system/files/ftc_gov/pdf/212_3035_-_gravy_analytics_final_consent_package_without_signatures.pdf
date: 2025-01-14
---
# Summary

The Federal Trade Commission (FTC) has finalized an order prohibiting Gravy Analytics and its subsidiary Venntel from unlawfully tracking and selling sensitive consumer location data. The FTC's complaint alleged that these companies violated the FTC Act by unfairly selling sensitive location data, including information about visits to health-related locations and places of worship, and by collecting and using consumer location data without obtaining verifiable user consent for commercial and government purposes. The final order mandates that Gravy Analytics and Venntel cease the sale, disclosure, or use of sensitive location data, except in specific national security or law enforcement scenarios, and requires them to implement programs for identifying sensitive locations, verifying consumer consent, and deleting historical and inferred sensitive data.

# Details

## Background

Gravy Analytics, Inc. and its wholly-owned subsidiary Venntel, Inc., both Delaware corporations, engage in the business of obtaining, collecting, and selling precise consumer location data. Their core business model is to amass and sell raw location data that tracks consumers' movements to provide insights into their private lives, operating under the assertion, "Where we go is who we are". Gravy Analytics primarily serves commercial customers, while Venntel focuses on public sector clients, such as government contractors.

The companies do not collect mobile location data directly from consumers, who are generally unaware that their data has been obtained by these entities. Instead, they acquire consumer location data from various data suppliers, who may source it from other suppliers, the mobile advertising marketplace, or mobile applications. Gravy Analytics and Venntel claim to process over **17 billion location signals daily** from approximately one billion mobile devices. These signals provide precise geolocation (latitude and longitude coordinates to at least 5 decimal places, indicating location within approximately one meter), associated with Mobile Advertising IDs (MAIDs). The companies assert the accuracy of their data, stating they filter unreliable signals and use hand-drawn polygons to precisely map venues.

Gravy Analytics offers various data products, including raw precise mobile location data delivered in batches and tools for "geo-fencing" to identify MAIDs present at specific locations or events. They have used geo-fencing to create lists of MAIDs that visited specific churches and health-related events. Venntel provides enhanced tools to public sector customers for analyzing location data, such as continuous device tracking and searching location signals by IP address, marketing these tools for government purposes.

The precise geolocation data, often combined with MAIDs or other persistent identifiers, is not anonymized and can be used to identify individuals and reveal sensitive information, such as medical conditions, sexual orientation, political activities, and religious beliefs. Venntel explicitly markets its ability to identify "patterns-of-life" including "bed down location" and "work location". Gravy Analytics further uses this data to create over **1100 "audience segments,"** #adtech which categorize consumers based on sensitive interests or characteristics derived from visited locations and events. Examples of these segments include "New Parents/Expecting," "Women’s Health," "Political Activist," "Likely Republican Voter," and custom segments like churchgoers or attendees of breast cancer-related events. Gravy Analytics also offers a "persona" data product, linking specific MAIDs to a list of audience segments, claiming to have associated over **250 million MAIDs** with at least one segment.

A significant issue highlighted by the FTC is the lack of verifiable consumer consent. Despite Gravy Analytics' own internal documents recognizing that precise geolocation data is sensitive and requires affirmative express consent, the companies failed to take reasonable steps to confirm such consent from consumers. Gravy Analytics continued to use data even when suppliers refused to provide consent samples or gave ambiguous responses. #vendor_management Often, the consent screens presented to consumers did not disclose that their location data would be sold to third-party data brokers or used for purposes like categorizing consumer behavior or selling to the government. #consent 

## Legal Analysis

The Federal Trade Commission alleged that Gravy Analytics and Venntel engaged in **unfair acts or practices** in violation of Section 5 of the FTC Act, 15 U.S.C. § 45(a), (n). The complaint outlined three primary counts:

1. **Unfair Sale of Sensitive Data (Count I)**: The FTC alleged that the Respondents sold or transferred precise geolocation data associated with unique persistent identifiers that reveal consumers’ visits to **sensitive locations**. This practice caused, or was likely to cause, substantial injury to consumers that they could not reasonably avoid and that was not outweighed by countervailing benefits. #sensitive 
2. **Unfair Collection and Use of Consumer Location Data Without Consent Verification (Count II)**: The Respondents collected consumer location data without taking reasonable steps to verify that consumers provided **informed consent** for the data's collection, use, or sale for commercial and government purposes. This conduct also inflicted, or was likely to inflict, substantial injury that consumers could not reasonably avoid, without overriding benefits. #consent 
3. **Unfair Sale of Sensitive Inferences Derived from Consumers’ Location Data (Count III)**: Gravy Analytics specifically categorized consumers into audience segments based on sensitive characteristics (e.g., medical conditions, political activities, religious beliefs) derived from location data, and sold these segments to third parties. This practice resulted in, or was likely to result in, substantial injury to consumers that was unavoidable by them and not outweighed by benefits. #adtech 

The FTC emphasized that the collection, use, and sale of precise location data constitutes an **invasion of privacy**, revealing comprehensive details of consumers' private lives, such as where they live, eat, and work. This unauthorized activity affects millions of consumers, given the vast amount of data processed daily. Beyond privacy invasion, the practices were found to cause or be likely to cause other injuries, including **stigma, discrimination, physical violence, and emotional distress**. The FTC cited examples such as a Catholic priest being outed based on location data and targeted advertisements sent to "abortion-minded women" based on their visits to reproductive health clinics. The data is considered individually identifiable because MAIDs and other persistent identifiers allow companies to track, contact, and build profiles of individual consumers. Consumers are unable to avoid these harms because the data collection and use are opaque, and they are typically unaware of who has collected their data or how it is being used.

The FTC has a long-standing position that location data is sensitive and that consumers are harmed when it is collected or shared without informed consent. The definitions of "Sensitive Location Data" and "Sensitive Locations" used in the order are consistent with prior Commission actions and industry practices.

## Sanction

The finalized order imposes several obligations on Gravy Analytics and Venntel:

- **Prohibition on Sensitive Location Data Sales**: The companies are permanently prohibited from selling, licensing, transferring, sharing, disclosing, or otherwise using Sensitive Location Data in any products or services, with limited exceptions for national security or law enforcement purposes, or if there is a direct consumer relationship and affirmative express consent for a directly requested service.
- **Prohibition on Misrepresentations**: They must not misrepresent the extent of their review of data supplier compliance, their handling of Covered Information, or whether their Location Data is Deidentified.
- **Prohibited Uses of Location Data**: Within 90 days, they must establish policies and technical measures to prevent associating location data with locations predominantly providing services to LGBTQ+ individuals or public political/social gatherings, or using data to determine an individual's home location. This includes contractual prohibitions for data recipients, marking techniques to detect non-compliance, annual compliance assessments of recipients, and termination of relationships for non-compliance.
- **Consent Requirements for Collection and Use**: Within 90 days, they are prohibited from collecting, using, maintaining, or disclosing an individual's Location Data without documented **Affirmative Express Consent** obtained prior to collection or use. This also applies to data from devices where consumers have enabled privacy settings to opt out of targeted advertising or tracking.
- **Sensitive Location Data Program**: Within 90 days, they must establish and maintain a program to identify Sensitive Locations and prevent the use of Sensitive Location Data. This program requires:
    - Documentation and designation of a senior officer responsible for the program.
    - Procedures to identify Sensitive Locations and quarterly assessments of their list's accuracy and completeness.
    - Implementation and quarterly testing of policies and technical measures to prevent Sensitive Location Data use.
    - Initiating deletion or rendering non-sensitive Sensitive Location Data within 2 days of adding a location to their list, completing the process within 30 days (up to 90 days with documented extensions).
    - Annual evaluation and adjustment of the program.
- **Supplier Assessment Program**: Within 90 days, they must implement a program to ensure that consumers have provided consent for all precise location data obtained by Respondents. This involves:
    - Initial and annual assessments to confirm affirmative express consent from suppliers.
    - Maintaining records of supplier responses.
    - Ceasing the use, sale, or sharing of data for which consumers have not provided consent.
- **Consumer Rights and Data Deletion**:
    - Provide a clear means for consumers to request the identity of entities to whom their Location Data was disclosed, or, alternatively, a method to request deletion of their Location Data from all recipients' commercial databases.
    - Provide a simple means for consumers to **withdraw consent** for their device’s Location Data use or disclosure.
    - Cease using and disclosing all Location Data associated with a specific device within 15 days of receiving a consent withdrawal notice.
    - Implement a clear means for consumers to request deletion of previously collected Location Data, and delete such data within 30 days of the request.
- **Data Deletion Mandates**:
    - Within 60 days, delete or destroy all **Historic Location Data** (data collected without Affirmative Express Consent) and confirm this to the FTC.
    - Within 90 days, inform customers who received Historic Location Data in the past three years about the FTC's deletion requirement.
    - Within 90 days, delete or destroy all **Data Products** (models, algorithms, or derived data from Historic Location Data).
    - **Option to retain**: Historic Location Data and Data Products can be retained if consumer consent is obtained within 90 days of the order, or if the data is Deidentified or rendered non-sensitive, provided it adheres to the other obligations regarding prohibited uses.
- **Data Retention Limits**: Within 60 days, they must document and make publicly available a retention schedule for all Covered Information, specifying the purpose, business needs, and a timeframe for deletion that prevents indefinite retention.
- **Comprehensive Privacy Program**: Within 60 days, establish and maintain a comprehensive privacy program to protect Covered Information, including annual risk assessments, safeguard implementation, employee training, and effectiveness testing.
- **Compliance and Monitoring**: The order requires various compliance reports to the FTC, acknowledgments of the order by personnel, detailed recordkeeping for five years, and grants the FTC broad authority for monitoring compliance, including interviews and undercover operations. They must also report any Third-Party Incidents within 30 days. The order became effective upon its publication on the FTC's website (January 13, 2025) and will terminate 20 years from its issuance date or from the most recent date a federal court complaint alleging a violation is filed, whichever is later.