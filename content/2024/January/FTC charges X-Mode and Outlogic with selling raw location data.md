---
title: FTC charges X-Mode and Outlogic with selling raw location data
tags:
  - personal_data
  - ftc
  - sensitive
  - vendor_management
  - adtech
  - consent
  - dark_pattern
links:
  - https://www.ftc.gov/system/files/ftc_gov/pdf/X-Mode-Complaint.pdf
  - https://www.ftc.gov/news-events/news/press-releases/2024/01/ftc-order-prohibits-data-broker-x-mode-social-outlogic-selling-sensitive-location-data
date: 2024-01-31
---
# Background
- X-Mode licenses to third parties raw location data tied to unique persistent identifiers. These third parties can then analyze and use the data for their own purposes, such as advertising or brand analytics, or provide access to the information for their own customers. 
- Such raw location data includes a unique persistent identifier for the mobile device called a Mobile Advertiser ID (“MAID”), the latitude, longitude, and a timestamp of the observation. #personal_data 
- X-Mode incentivizes app developers to incorporate the X-Mode SDK into their apps by promising the app developers passive revenue for each consumer’s mobile device that allows the SDK to collect their location data.

# Analysis
## Sensitive nature of data
X-Mode’s location data associated with MAIDs could be used to track consumers to sensitive locations, including medical facilities, places of religious worship, places that may be used to infer an LGBTQ+ identification, domestic abuse shelters, and welfare and homeless shelters. X-Mode has created **custom audience segments** that were based on sensitive characteristics of consumers. X-Mode licensed these custom audience segments to a third party for advertising or marketing purposes. #sensitive Specifically, X-Mode entered into an agreement with a privately held clinical research company to license custom audience segments of consumers who had visited Cardiology, Endocrinology, or Gastroenterology offices and visited a pharmacy or drugstore in the Columbus, Ohio area and consumers that had visited a specialty infusion center.
## Identification of people
By plotting each of these signals on a map, much can be inferred about the mobile device owners. For example, the location of a mobile device at night likely corresponds to the consumer’s home address. #personal_data 

## Ignoring Privacy Choices
Android mobile phone operating system has included a privacy control that permitted users to “Opt out of Ads Personalization.” X-Mode ingested the MAIDs, mobile location data, and flags of consumers who had enabled the “Opt out of Ads Personalization” control on their Android mobile phones, and, in many instances and contrary to these consumers’ privacy choices, provided access to this data to marketers and other customers. #consent 

## Failure to inform consumers of practices
Because X-Mode obtains most of its location data from third party apps, the company relies on these third parties to obtain informed consumer consent to collect, use, or sell location data. X-Mode has provided third party app publishers incorporating its SDK with recommended language for consumer disclosures in both apps and privacy policies. Notices provided by X-Mode to third-party app publishers fail to fully inform consumers how their data would be used and that their geolocation data would be provided to government contractors for national security purposes. #dark_pattern 

## Failure to verify third party compliance
Although X-Mode has tracked the language used by third party apps in consumer notices, X-Mode, in many cases, has not taken corrective actions based on any review of this language. X-Mode could audit the process by which its suppliers obtain consent and cease using location data that was not obtained with appropriate consent. Instead, X-Mode relies primarily on contractual language in supplier agreements requiring its suppliers to obtain appropriate consent from consumers and in data licensing agreements prohibiting misuse of its location data, but such language is insufficient to protect consumers from substantial injury. #vendor_management 