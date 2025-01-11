---
title: Spain's AEPD publishes proof of concept documentation for right to be forgotten in blockchain solutions
tags:
  - deletion
links:
  - https://www.aepd.es/prensa-y-comunicacion/notas-de-prensa/la-aepd-publica-una-nota-tecnica-en-relacion-con-blockchain-y
  - https://www.aepd.es/guias/nota-tecnica-blockchain.pdf
date: 2024-11-30
---
# Summary

The Spanish Agency for Data Protection (AEPD) has published a technical note and a **Proof of Concept (PoC)** demonstrating the feasibility of implementing the **right to erasure** in Blockchain infrastructures, in compliance with the GDPR. The PoC addresses the conflict between the immutability of Blockchain and the GDPR by employing a **hard fork** to modify the blockchain database and **overwrite** personal data in transactions, smart contracts, and transaction receipts. This approach involves detecting affected records, generating a new software version, achieving consensus among validating nodes, and updating node databases. The PoC highlights the importance of **data protection by design** in Blockchain systems, emphasizing the need for **governance policies** and technical measures to ensure GDPR compliance, while also addressing common misconceptions about Blockchain’s immutability and decentralization. The PoC is not a commercial solution but serves as a demonstration, showing that **data deletion is possible** but requires a thoughtful and comprehensive approach.

# Detail

The sources consist of a technical note and related material from the Spanish Agency for Data Protection (AEPD) concerning the challenges of applying the General Data Protection Regulation (GDPR) to Blockchain technology, particularly regarding the right to erasure of personal data. The AEPD presents a Proof of Concept (PoC) to demonstrate the feasibility of building Blockchain infrastructures that comply with the GDPR. Here’s a summary of the key points from the sources:

- **Blockchain and GDPR Conflicts:** The sources highlight a fundamental conflict between the immutability of Blockchain and the GDPR's requirement for data deletion. Many Blockchain infrastructures were not initially designed with data protection in mind, making compliance challenging.
    
- **AEPD's Proof of Concept (PoC):** The AEPD's PoC demonstrates the viability of implementing the right to erasure in a Blockchain infrastructure. It is a functional demonstration, not a commercial product, aimed at promoting data protection by design. The PoC manages all personal data stored across the Blockchain, not just transaction data, but also information in transaction receipts and smart contracts.
    
- **Key Aspects of the PoC:**
    
    - **Focus on the right of erasure:** The PoC specifically targets the implementation of the right to erasure (also known as the right to be forgotten).
    - **Comprehensive Data Management:** The PoC addresses personal data in transactions, smart contracts, and transaction receipts.
    - **Use of Hard Fork:** The PoC employs the mechanism of a hard fork to implement changes necessary for data deletion. A hard fork is a software update that is not backwards compatible.
    - **Governance and Policies:** The PoC introduces governance measures and technical policies needed to implement the right to erasure.
    - **Practical Application:** The PoC provides a practical use case by demonstrating how a user's activity and identifying information can be removed from a Blockchain.
- **Technical Details of the PoC:**
    
    - **Detection of Affected Records:** The PoC includes a process to identify all records that need to be modified or deleted, including transactions, Smart Contracts, and receipts.
    - **Data Overwriting:** The PoC uses data overwriting by replacing the user's account address in transactions and related records with a constant value.
    - **Hard Fork Implementation:** The PoC uses a hard fork to modify the databases of the nodes. The PoC is based on a simplified version of the Bitcoin Improvement Proposal (BIP)-0009 to reach consensus among nodes to adopt the new version of the blockchain.
    - **Database Modifications:** The PoC modifies the local databases of the validating nodes, removing the user's data and updating the blockchain.
    - **Synchronization:** The new nodes that sync to the network after the hard fork will also update their databases to remove the user’s data.
- **Governance in Blockchain:** The sources stress the importance of governance in the management of Blockchain infrastructures. Governance includes defining roles, policies, and procedures for data management. The PoC uses a mixed approach where a single entity manages the procedures and the nodes execute the software changes.
    
- **Addressing Misconceptions:** The document addresses common misconceptions about Blockchain technology, such as the idea that it is completely immutable, fully decentralized, or incompatible with the GDPR.
    
- **Data Locations:** The sources explain that personal data in Blockchain systems is not limited to transaction data in blocks. It can also exist in Smart Contracts, transaction receipts, off-chain storage, and temporary storage locations.
    
- **Importance of Data Protection by Design**: The sources advocate for incorporating data protection principles into the design of Blockchain infrastructures from the beginning, rather than adding them as an afterthought.
    
- **Limitations of the PoC:** The PoC is a demonstration, not a ready-to-use commercial solution. It focuses on technical feasibility and does not address all the practical challenges of implementing data deletion in real-world systems.
    
- **Future Development:** The document suggests the PoC could be expanded to include mechanisms for data restoration or to consider the impact on the user whose data is deleted.
    
- **Need for Clarity:** The sources emphasize the importance of precise terminology and understanding the real-world implications of blockchain technologies.
    

In conclusion, the sources describe the challenges of data deletion in blockchain and introduce the AEPD’s Proof of Concept as a feasible approach to comply with GDPR's "right to be forgotten". The PoC is a step toward responsible and compliant use of Blockchain technologies, underlining the necessity of data protection by design.