---
title: IAB Europe's Response to EDPB Guidelines on Pseudonymisation
tags:
  - edpb
  - adtech
links:
  - https://iabspain.es/iab-europe-junto-a-iab-spain-y-otros-iabs-nacionales-remiten-al-edpb-cepd-comentarios-sobre-las-directrices-de-seudonimizacion/
  - https://iabspain.es/wp-content/uploads/dlm_uploads/2025/04/iab-europe-response-to-the-edpb.pdf
date: 2025-03-14
---
Context:
- [[EDPB Guidelines 01-2025 on Pseudonymisation]]
- [[CJEU AG's opinion on pseudonymous and anonymous data]]
# Overview of IAB Europe's Stance

IAB Europe has submitted comments on the European Data Protection Board’s (EDPB) draft “Guidelines 1/2025 on Pseudonymisation”. While IAB Europe welcomes the recognition of pseudonymisation as a **privacy-enhancing technology (PET)** that supports General Data Protection Regulation (GDPR) compliance, they express significant concerns that the Guidelines adopt an **overly restrictive approach**. This approach sets a bar for pseudonymised personal data that **confuses it with the conditions for anonymised data**, contradicting GDPR requirements and existing case law from the Court of Justice of the European Union (CJEU).

## Main Concerns

- The Guidelines propose an **absolute approach to "personal data"**, suggesting that the "mere possibility" of re-identification by anyone, even without a reasonable link to a controller, is sufficient to categorize data as personal data. This directly misaligns with Recital 26 GDPR and CJEU judgments like _Breyer_ and the General Court's _SRB vs EDPS_.
- They impose **absolute criteria for pseudonymisation effectiveness** that are more akin to anonymisation, conflicting with GDPR's principles of proportionality and reasonableness (Art. 32 GDPR).
- The Guidelines suggest considering means of re-identification that might not be reasonably accessible, such as **illegal means or those available to cybercrime actors or foreign authorities**, which is an unrealistic burden on controllers.
- There's a concern that the Guidelines **misinterpret Article 11 GDPR**, broadly applying it even when a controller lacks means to identify data subjects, which paradoxically increases obligations instead of reducing them.
- The Guidelines are seen as disincentivizing innovation and investment in privacy-preserving practices and AI technologies due to their **restrictive nature**.
- The timing of the Guidelines' issuance is problematic, as it precedes the final judgment in the _EDPS v SRB_ case, where the Advocate General's opinion **rejects the EDPS's view** on the fundamental issue of whether information is personal data from a recipient's perspective. IAB Europe argues that this creates an appearance of partiality and **legal uncertainty**.

## Key Recommendations

IAB Europe offers several recommendations to the EDPB:

- **Withdraw the current Guidelines** or at least **refrain from issuing the final version** until the CJEU delivers its ruling in the _EDPS v SRB_ case. A new public consultation would be needed if the CJEU follows the Advocate General's Opinion.
- Issue **consolidated guidance** encompassing both pseudonymisation and anonymisation, given their overlap and shared goal of reducing identifiability risks.
- Ensure the understanding of pseudonymisation **aligns with current CJEU case law** and GDPR provisions, without conflating it with anonymisation.
- Avoid introducing **unjustified additional requirements** for data controllers beyond what the law prescribes.
- Encourage innovation and provide directions on developing new technologies like PETs in accordance with the law, rather than **overly limiting possibilities**.
- Refrain from suggesting that pseudonymisation may be insufficient for certain use cases or industries, like personalised advertising, as this goes beyond the scope of Article 6(4) GDPR.
- Provide **more actionable examples** beyond the health sector, especially for Small and Medium-sized Enterprises (SMEs), and address how pseudonymisation applies to unstructured data and AI developments.

# Detailed Analysis of Specific Issues

## Confusion with Anonymisation and the Concept of Personal Data

The Guidelines are criticised for **confusing pseudonymisation with anonymisation**, despite the GDPR purposely separating these concepts and setting a higher bar for anonymisation. GDPR Art. 4(5) defines pseudonymisation by stating that "additional information is kept separately and is subject to technical and organisational measures to ensure that the personal data are not attributed to an identified or identifiable natural person". This implies that if the additional data enabling identification is unavailable to a given person or entity (i.e., not among their lawful and reasonable means), that data should be viewed as **anonymised data from that entity's perspective**. Recital 26 of the GDPR supports this by indicating that all objective factors, including costs and time, must be considered to determine if a natural person is identifiable.

### The "Pseudonymisation Domain" and "Additional Information"

The Guidelines' proposed **"pseudonymisation domain" approach** is seen as problematic, potentially undermining the incentive for pseudonymisation within a single controller by requiring systematic consideration of all third parties globally. The introduction of new terms like "pseudonymisation domain" is not seen as clearly adding value. Furthermore, the Guidelines contradict themselves regarding the "pseudonymisation domain": while initially stating it "does not have to be all-encompassing", they later suggest controllers should consider actors with criminal intent and foreign national security agencies, and means those bad actors might deploy. This includes considering what information they might obtain through legally questionable means, which is deemed **unrealistic for private companies**.

### Conflict with CJEU Case Law

The Guidelines support an **absolute approach to "personal data"**, assuming re-identification by anyone, which misaligns with CJEU case law. The _Breyer_ judgment clarified that account must **not be taken of all means reasonably likely to be used for identification, but rather of legal means**. The CJEU's _Breyer_ (para 46), _Scania_ (para 45-49), and _IAB Europe_ (para 49-51) judgments support a **relative approach to the notion of personal data**, where the perspective of a specific actor, analyzed with reasonable means, determines whether data constitutes "identifiable persons" for that actor. The Guidelines, however, take an overly restrictive approach, suggesting pseudonymised data remains personal even if no party in the processing chain can reasonably combine it with additional information. This effectively applies anonymisation standards to pseudonymisation without excluding the data from GDPR scope. The General Court's ruling in _SRB vs EDPS_ further supports the relative approach, stating that the **recipient's perspective** must be considered when assessing identifiability. The Advocate General's Opinion in the appeal of this case also confirms this understanding, noting it would be disproportionate to impose GDPR obligations on an entity that could not reasonably identify data subjects. The AG even suggested that under certain circumstances, pseudonymous data can fall outside the scope of "personal data".

## Misinterpretation of Article 11 GDPR

IAB Europe argues that the Guidelines **misinterpret Article 11 GDPR**. Article 11(1) states that controllers are not obligated to maintain or acquire additional information for identification if the processing purposes do not require it. This assumes initial identifiability by the controller. However, the Guidelines suggest that Article 11 applies even if the data subject was not originally identifiable by the controller, creating practical hurdles regarding how a data subject could obtain pseudonyms to facilitate re-identification. The Guidelines' approach is seen as reversing the intended logic of Article 11. Moreover, they suggest that controllers should inform data subjects on how to obtain their pseudonyms and use them for identification, potentially even providing contact details of the source. This goes beyond Article 11(2), which merely requires controllers to inform data subjects that they cannot be identified.

## Role of Pseudonymisation in Risk Mitigation and Innovation

The Guidelines are criticised for limiting innovation and for their impractical focus in examples.

### Need for Diverse Examples and PETs

While the Guidelines provide examples, **half of them relate to the healthcare sector** and special categories of data, offering very few relevant examples for most organisations, especially SMEs. There's a notable **omission of significant discussion on Privacy Enhancing Technologies (PETs)**, despite their potential to achieve high standards of pseudonymisation and their increasing adoption. The Guidelines also fail to address the crucial role of pseudonymisation in **Artificial Intelligence (AI) development and model training**. Furthermore, the Guidelines use undefined terms like "other contexts" regarding singling out data subjects, requiring clarification and examples.

### Pseudonymisation as a Mitigating Factor

IAB Europe highlights that pseudonymisation **lowers the risk of personal data processing** and should be explicitly recognised as a **mitigating factor in enforcement actions** by supervisory authorities. Pseudonymised data provides greater protection to data subjects. The GDPR already acknowledges pseudonymisation as a measure to reduce risks (e.g., Recitals 28, 78, 156, and Art. 83(2)(d)), and it supports data protection by design and default (Art. 25) and security obligations (Art. 32). Explicitly recognising it under Art. 83(2)(g) or (k) would incentivise its adoption. Failure to acknowledge the efforts and investments in pseudonymisation would disincentivize such techniques, potentially weakening personal data protection.

# Participating Organizations

The response to the EDPB Guidelines is signed by various organisations representing the digital marketing and advertising ecosystem across Europe:

- **IAB Europe**: The European-level association for digital marketing and advertising.
- **Alliance Digitale**: Represents data, print, and digital marketing professions in France, and is the French representative for IAB, FEDMA, and GDMA networks.
- **IAB Italia**: The Italian chapter of the Interactive Advertising Bureau, focused on digital culture and market growth in Italy.
- **IAB Polska**: A Polish advertising industry organisation with over 230 member companies.
- **IAB Spain**: Represents the digital advertising industry in Spain, contributing to regulation and standards.
- **IAB Sweden**: The leading association for interactive advertising and digital marketing in Sweden.
- **SPIR (Association for Internet Progress)**: Represents key players in the Czech Internet economy, including media publishers, agencies, and technology companies.
- **VIA Nederland**: An industry association in the Netherlands focused on connection, knowledge sharing, and influencing market standards and regulations.