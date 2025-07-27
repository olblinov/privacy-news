---
title: FTC Bans General Motors from Sharing Driver Data Without Consent
tags:
  - ftc
  - consent
  - dark_pattern
  - purpose_limitation
links:
  - https://www.ftc.gov/news-events/news/press-releases/2025/01/ftc-takes-action-against-general-motors-sharing-drivers-precise-location-driving-behavior-data
  - https://www.ftc.gov/system/files/ftc_gov/pdf/242_3052_-_general_motors_decisionandorder.pdf
  - https://www.ftc.gov/system/files/ftc_gov/pdf/242_3052_-_general_motors_complaint.pdf
---
# Summary

The Federal Trade Commission (FTC) has taken action against General Motors (GM) and its OnStar subsidiary for allegedly collecting, using, and selling drivers’ precise geolocation and driving behavior data without adequately notifying consumers and obtaining their affirmative consent. The FTC's complaint asserts that GM used a misleading enrollment process for its OnStar and OnStar Smart Driver features, failing to clearly disclose that data, including precise geolocation data (collected as often as every three seconds) and driving habits (like hard braking and speeding), would be sold to third parties, including consumer reporting agencies.  These agencies then used this sensitive information to compile consumer reports that were utilized by insurance companies to deny coverage or set rates, often without the consumers' knowledge. Under a proposed order, GM and OnStar will be **banned for five years from disclosing consumers’ sensitive geolocation and driver behavior data to consumer reporting agencies**. #enforcement_pattern   They are also required to implement greater transparency and consumer choice mechanisms, including obtaining affirmative express consent before data collection (with limited exceptions), allowing consumers to access and delete their data, and providing ways for consumers to disable precise geolocation data collection from their vehicles.

# Details

## Background

General Motors (GM) and its subsidiary OnStar, LLC, have been the subject of an FTC action concerning their collection and sharing of drivers' data. GM manufactures and distributes vehicles under brands such as Chevrolet, GMC, Cadillac, and Buick, and offers connected car services through OnStar. OnStar, initially launched in 1996, provided emergency aid, hands-free voice assistance, and real-time traffic and navigation. Over time, GM expanded the data it collected through OnStar to include **precise geolocation data, sometimes collected as frequently as every three seconds** for some users. This detailed location tracking can reveal intimate details about a person's life, such as hospital visits or daily routines.

The FTC alleged that GM's enrollment process for OnStar and its "Smart Driver" feature was confusing and misleading. Consumers were encouraged to sign up for OnStar services when purchasing a GM vehicle at dealerships. The enrollment involved a series of screens where consumers had to accept terms and conditions. The "Smart Driver" feature was often presented as a tool for consumers to assess their own driving habits and recognize improvement opportunities, offering "achievements" and "valuable feedback". However, GM **failed to clearly disclose that it collected precise geolocation and driving behavior data (such as hard braking, late-night driving, and speeding) and sold it to third parties**, including consumer reporting agencies. Some consumers were unaware they had been signed up for Smart Driver at all. #dark_pattern 

The collected data was sold to various entities. Since at least 2018, GM collected precise geolocation data every three seconds (referred to as "Task A") from millions of vehicles and transmitted it to third parties like Wejo Ltd. and later Jacobs Engineering Group, Inc.. These companies were authorized to license the data to "egress licensees" for purposes like transportation planning, infrastructure, outdoor advertising analytics, and retail/real estate location planning. GM also disclosed what radio station a consumer was listening to. Crucially, **consumers were not informed that their precise geolocation data would be sold to third parties for these specific purposes**. #sensitive #dark_pattern 

Additionally, GM shared personally identifiable information and driving behavior data (referred to as "Task B") from OnStar Smart Driver enrollees with consumer reporting agencies like Verisk Analytics and LexisNexis Risk Solutions. This data included trip IDs, mileage, hard braking, acceleration, speed events over 80 mph, and seat belt usage. These agencies used this data to compile consumer reports, typically containing six months of driving events, which insurance companies then used to deny policies or increase premiums. #automated_decisions #dark_pattern #purpose_limitation Many consumers only discovered these practices after receiving adverse action notices from their insurance providers. Consumers complained to GM, stating they would not have enrolled in OnStar Smart Driver had they known their data would be shared for insurance purposes. GM terminated agreements with Verisk and LexisNexis in March 2024 but continued sharing Task B data with Jacobs until April 2024.

## Legal Analysis

The Federal Trade Commission (FTC) initiated action against General Motors LLC, General Motors Holdings LLC, and OnStar, LLC, alleging violations of Section 5(a) of the Federal Trade Commission Act. This section prohibits "unfair or deceptive acts or practices in or affecting commerce".

The FTC's complaint outlines two main counts:

1. **Count I: Unfair Use and Sale of Sensitive Data Without Obtaining Affirmative Express Consent Prior to Collection** 
    
    - The FTC alleged that GM collected consumers’ precise geolocation data and Driver Behavior Data without taking reasonable steps to obtain their **affirmative express consent**. #consent 
    - GM sold this data to third parties for various purposes, including licensing to other entities for transportation planning, infrastructure, advertising analytics, and retail/real estate planning.
    - GM also sold this data to consumer reporting agencies, which compiled consumer reports used to deny auto insurance coverage or raise premiums.
    - These practices caused or were likely to cause substantial injury to consumers, including loss of privacy, increased risk of disclosure of sensitive information about their private lives, and financial losses. The FTC determined that this injury was not reasonably avoidable by consumers and not outweighed by countervailing benefits.
    - These acts constitute unfair practices under Section 5 of the FTC Act.
2. **Count II: Deceptive Failure to Disclose Respondents’ Use and Disclosure of Consumer Location Data and Driver Behavior Data**
    
    - The FTC alleged that GM represented that Driver Behavior Data from the OnStar Smart Driver feature would be used for the consumer to assess their own driving habits.
    - However, GM sold this data to consumer reporting agencies for insurance purposes, leading to consumers being denied coverage or facing increased premiums. #automated_decisions 
    - The FTC argued that **GM's failure to disclose this material information, especially given its representations, constituted a deceptive act or practice**. Such material facts would have been crucial for consumers in deciding whether to grant permissions for the use and disclosure of their data. #transparency #dark_pattern #purpose_limitation 

The Commissioners voted 3-0-2 to accept the proposed consent agreement for public comment, with Commissioners Melissa Holyoak and Andrew N. Ferguson recorded as absent.

## Sanction

Under the proposed order settling the FTC’s allegations, General Motors LLC, General Motors Holdings LLC, and OnStar LLC will be subject to several provisions aimed at protecting consumer privacy. The Commission issues such an administrative complaint when it has "reason to believe" a law has been violated and it is in the public interest. A final consent order carries the force of law, and each violation can result in a civil penalty of up to $51,744.

Key provisions of the proposed order include:

- **Five-Year Ban on Disclosure to Consumer Reporting Agencies**: GM and OnStar are **banned for five years** from disclosing consumers’ geolocation and driver behavior data (defined as "Covered Driver Data") to any person acting as a Consumer Reporting Agency.
- **Obtain Affirmative Express Consent**: Within 180 days of the order's effective date, GM and OnStar must obtain **affirmative express consent** from U.S. consumers before collecting, using, or disclosing their Covered Driver Data to a third party. This consent must be "freely given, specific, informed, and unambiguous," based on a clear and conspicuous disclosure of:
    - Categories of information collected.
    - Specific purposes for collection, use, or disclosure.
    - Names or categories of third parties collecting or receiving the data (with a hyperlink to a regularly updated list if categories are used).
    - A simple, easily located means to withdraw consent and any limitations thereof.
    - This disclosure must be separate from general privacy policies or terms of service.
    - Exceptions to requiring affirmative consent include disclosures to emergency responders, responses to consumer- or vehicle-initiated communications for safe operation, compliance with lawful governmental requests, research/improvement using deidentified data, investigations of product quality/safety issues, and vehicle diagnostics/prognostics.
- **Consumer Access and Deletion Rights**: The companies must create a simple, easily-located means for all U.S. consumers to request a copy of their Covered Driver Data and seek its deletion.
- **Limit Data Collection**: Consumers must be given the ability to disable the collection of precise geolocation data from their vehicles if the necessary technology is present, such as a toggle in the vehicle.
- **Declining OnStar Enrollment**: Consumers must be allowed to disable GM's remote collection of all data from their vehicles if they decline to enroll or unenroll in OnStar, with limited exceptions for safety-related communications and updates using deidentified data.
- **Data Minimization and Retention**: GM must refrain from collecting more Covered Driver Data than reasonably necessary for a specific purpose and use/disclose/retain it only for that purpose. They must document and adhere to a retention schedule for Covered Driver Data, detailing purposes, business needs, and specific deletion timeframes, which must be publicly available.
- **Deletion of Prior-Retained Data**: Within 180 days, GM must delete or destroy all prior-retained Covered Driver Data, with certain exceptions (e.g., litigation holds, compliance with legal requests, deidentified data for research/improvement, diagnostics, safety investigations). GM has the option to request affirmative express consent from consumers for data collected prior to the order, and if consent is not given, the data must be deleted.
- **Prohibition Against Misrepresentations**: GM is banned from misrepresenting the extent to which they collect, use, disclose, or delete vehicle-related consumer data, the purposes for which it is used, or the extent to which consumers can control their data.

The agreement will be open for public comment for 30 days after publication in the Federal Register, after which the Commission will decide whether to make the proposed consent order final.