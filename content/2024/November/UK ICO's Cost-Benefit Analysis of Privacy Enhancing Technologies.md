---
title: UK ICO's Cost-Benefit Analysis of Privacy Enhancing Technologies
tags:
  - privacy_engineering
  - section
  - anonymization
links:
  - https://www.gov.uk/government/publications/privacy-enhancing-technologies-cost-benefit-awareness-tool/cost-benefit-awareness-tool#section-three
  - https://www.gov.uk/government/publications/privacy-enhancing-technologies-cost-benefit-awareness-tool/cost-benefit-awareness-checklist
---
# Summary

This document provides a checklist and tool to support organizations in understanding the costs and benefits of deploying **Privacy Enhancing Technologies (PETs)**. PETs are technical methods that protect the privacy and confidentiality of sensitive information. The materials emphasize a **privacy-preserving federated learning (PPFL)** approach, which combines federated learning with other PETs to enhance both input and output privacy. The resources consider various PETs, such as homomorphic encryption (HE), trusted execution environments (TEEs), secure multi-party computation (SMPC), differential privacy (DP), and synthetic data, offering a detailed analysis of how these technologies can be applied to improve data privacy while maintaining utility.

# Detail

## Factual Background

The materials are published by the UK government’s Department for Science, Innovation and Technology (DSIT) and the Information Commissioner’s Office (ICO). They are designed to assist organizations in making informed decisions about adopting emerging PETs. The documents focus on a high-level use case: using PPFL to train machine learning models without direct data sharing. They also emphasize the importance of considering costs and benefits in various contexts, acknowledging that these are highly use-case specific. The resources include a checklist for organizations to use when considering deploying PETs, covering key areas such as data storage, compute requirements, privacy tradeoffs, testing pathways, technical skills, compliance, long-term costs, and risks.

## Findings

- **Types of PETs**: The resources cover a range of PETs, categorized into those that enhance input privacy and those that enhance output privacy.
    
    - **Input Privacy**:
        - **Homomorphic Encryption (HE)**: Allows computation on encrypted data without decryption. HE provides strong privacy but can introduce latency and high computational overhead.
        - **Trusted Execution Environments (TEEs)**: Secure areas within a processor that isolate sensitive data and code. TEEs offer lower latency than HE but rely on trust in the TEE provider and can be difficult to patch.
        - **Secure Multi-party Computation (SMPC)**: Enables multiple parties to collaborate on data without revealing their inputs. SMPC can have higher computational overheads but is trivial compared to federated learning.
    - **Output Privacy**:
        - **Differential Privacy (DP)**: Adds noise to data to protect privacy, often involving a trade-off between privacy and utility. DP can be implemented interactively or non-interactively.
        - **Synthetic Data**: Artificial data that preserves the patterns of original data and can be used to protect sensitive data while allowing for further analysis. Synthetic data can be fully, partially, or hybrid, and may require additional PETs for full protection.
- **Cost and Benefit Considerations**: The checklist outlines key areas to consider before deploying PETs.
    
    - **Data Storage**: Federated learning minimizes the need for large central databases, reducing risks of data breaches.
    - **Compute Requirements**: While federated learning distributes computational costs, it may increase the overall compute load. HE has higher latency, while TEEs are more efficient but have greater trust requirements.
    - **Privacy-Utility Trade-offs**: PETs like DP and synthetic data offer greater privacy but may reduce data utility.
    - **Testing and Troubleshooting**: PETs can make testing and troubleshooting more complex due to reduced visibility of data. TEEs, being hardware-based, are more difficult to patch.
    - **Technical Skills**: Deploying PETs requires niche skills.
    - **Regulatory Compliance**: PETs can enhance compliance with data protection laws by anonymizing data and protecting against breaches.
    - **Long-term Costs and Benefits**: PETs can standardize data integration, enable the use of previously inaccessible data, and provide greater opportunities for network effects.
    - **Barriers and Risks**: A risk register should be developed to mitigate identified risks.
- **Baseline Comparison:** The resources frequently compare PET implementations with a **baseline** approach of training a model using centrally collated data. This baseline requires strong security protections and can lead to inflexibility, whereas federated learning maintains local data control and minimizes risks of data breaches. PETs can improve upon this baseline but may have higher costs and more complex implementation requirements.
    
- **Legal Considerations:** Using PETs can enhance legal compliance, and use of PPFL techniques may streamline Data Protection Impact Assessments (DPIA) and reduce legal costs. Effective anonymization through PETs removes the burden of data protection laws.
    
- **Federated Learning and PPFL**: Federated learning involves training models on decentralized data, and adding additional PETs such as HE, TEE, SMPC, DP or synthetic data creates a PPFL system. In a PPFL system, additional privacy measures are put in place to protect the raw data during processing, as well as the output data or models.
    
- **Use Cases**: The toolkit highlights various examples of using PETs, including monitoring password leaks, matching users on messaging platforms, calculating average salaries, and publishing research data with privacy protections.