---
title: AEPD publishes blog post on probabilistic methods and GDPR compliance
tags:
  - minors
  - accuracy
  - methodology
links:
  - https://www.aepd.es/en/press-and-communication/blog/probabilistic-methods-and-gdpr-compliance
date: 2024-09-30
---
# Summary

This document from the Spanish Agency for Data Protection (AEPD) discusses the use of probabilistic methods in processing personal data and their compliance with the General Data Protection Regulation (GDPR). While these methods are powerful tools for various digital services, they present challenges related to the accuracy principle, potentially leading to false positives, false negatives, or prediction errors. The document explains that the use of probabilistic methods is not prohibited under the GDPR, as long as data processing includes measures to detect and manage inaccuracies, and the overall data processing meets the required accuracy for its specified purpose. The document also uses age assurance as a case study, and discusses how solutions can partially rely on age estimation and probabilistic methods as long as the other GDPR principles and obligations are met.

# Details

## Background

- Probabilistic methods are increasingly used in statistics, Machine Learning (ML), and Artificial Intelligence (AI).
- These methods enable ML and AI models to learn from data, adapt to patterns, handle uncertainties, and make predictions, leading to their widespread use in digital services and applications, such as recommendation and targeting systems.
- The GDPR requires personal data to be accurate and kept up to date, with measures to correct inaccuracies without delay.
- Data processing should be effective and less intrusive than other options to achieve the same goal.
- Probabilistic methods can present limitations in terms of accuracy and effectiveness, as they can produce false negatives, false positives, and prediction errors.
- Age assurance, which includes age verification and age estimation, is used to control access to content, services, or goods. Age verification confirms a person's age from a trusted source, while age estimation predicts age from inherent features.
- Age estimation methods, while avoiding the need for identity documents, can suffer from a lack of accuracy and effectiveness, potentially violating the GDPR.
- The NIST FATE Age Estimation and Verification (AEV) track has shown that accuracy and effectiveness are influenced by factors such as algorithm, gender, image quality, region of birth, age, and interactions between those factors.

## Legal Analysis

- The GDPR's accuracy principle requires that personal data be accurate at all processing stages, and that sources of personal data be reliable.
- The use of probabilistic methods in personal data processing should not be confused with the accuracy of the overall data processing.
- A probabilistic operation can be included as one part of data processing that fulfills the requirements of accuracy and effectiveness.
- A case-by-case evaluation is needed when considering whether to use solutions based on facial age estimation, given limitations in accuracy and effectiveness.
- Solutions can partially rely on age estimation if other GDPR principles are met, and if it is a part of an overall process that achieves accurate and effective age assurance.
- An example shows that an age estimation method may have a statistically negligible error for those classified as over 40, but have an unacceptable error rate for younger people.
- Controllers must be aware of error thresholds, as even a small percentage of error could impact a significant number of individuals.
	- *Controllers should also be careful when considering error thresholds for probabilistic methods. An estimation operation with a percentage of 0.01% error in a processing used by 1000 adults could be acceptable for some purposes. However, in a solution used by all kinds of users in the EU (450 million population), an error rate of 0.01% means errors in 45.000 people. A significant number of them under 18 will probably have erroneous estimates that may classify them as adults.*
- The document suggests that probabilistic methods should not be the sole basis of processing, but rather one component in a process that offers alternatives or complementary solutions to guarantee the accuracy and effectiveness of the whole.
- It is important to avoid an additive approach, which could involve excessive data collection and processes.
- The use of probabilistic methods should be done thoughtfully and must be integrated into a larger data processing context that prioritizes inclusion, usability, and accessibility.