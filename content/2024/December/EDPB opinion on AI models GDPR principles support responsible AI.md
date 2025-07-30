---
title: EDPB opinion on AI models GDPR principles support responsible AI
tags:
  - ai
  - methodology
  - pbd
  - anonymization
  - legitimate_interest
links:
  - https://www.edpb.europa.eu/news/news/2024/edpb-opinion-ai-models-gdpr-principles-support-responsible-ai_en
  - https://www.edpb.europa.eu/system/files/2024-12/edpb_opinion_202428_ai-models_en.pdf
date: 2024-12-18
---
The European Data Protection Board (EDPB) has adopted an [opinion* on the use of personal data for the development and deployment of AI models](https://www.edpb.europa.eu/our-work-tools/our-documents/opinion-board-art-64/opinion-282024-certain-data-protection-aspects_en). This opinion looks at 1) when and how AI models can be considered anonymous, 2) whether and how legitimate interest can be used as a legal basis for developing or using AI models, and 3) what happens if an AI model is developed using personal data that was processed unlawfully. It also considers the use of first and third party data.  
  
The opinion was requested by the Irish Data Protection Authority (DPA) with a view to seeking Europe-wide regulatory harmonisation. To gather input for this opinion, which deals with fast-moving technologies that have an important impact on society, the EDPB organised a stakeholders’ event and had an exchange with the EU AI Office.

Regarding **anonymity**, the opinion says that whether an AI model is anonymous should be assessed  on a case by case basis by the DPAs. For a model to be anonymous, it should be very unlikely (1) to directly or indirectly identify individuals whose data was used to create the model, and (2) to extract such personal data from the model through queries. The opinion provides a non-prescriptive and non-exhaustive list of methods to demonstrate anonymity.

With respect to **legitimate interest**, the opinion provides general considerations that DPAs should take into account when they assess if legitimate interest is an appropriate legal basis for processing personal data for the development and the deployment of AI models.

A [three-step test](https://www.edpb.europa.eu/our-work-tools/documents/public-consultations/2024/guidelines-12024-processing-personal-data-based_en) helps assess the use of legitimate interest as a legal basis. The EDPB gives the examples of a conversational agent to assist users, and the use of AI to improve cybersecurity. These services can be beneficial for individuals and can rely on legitimate interest as a legal basis, but only if the processing is shown to be strictly necessary and the balancing of rights is respected.

The opinion also includes a number of criteria to help DPAs assess if individuals may reasonably expect certain uses of their personal data. These criteria include: whether or not the personal data was publicly available, the nature of the relationship between the individual and the controller, the nature of the service, the context in which the personal data was collected, the source from which the data was collected, the potential further uses of the model, and whether individuals are actually aware that their personal data is online.

If the balancing test shows that the processing should not take place because of the negative impact on individuals, mitigating measures may limit this negative impact. The opinion includes a non-exhaustive list of examples of such mitigating measures, which can be technical in nature, or make it easier for individuals to exercise their rights or increase transparency.

Finally, when an AI model was developed with **unlawfully processed personal data,** this could have an impact on the lawfulness of its deployment, unless the model has been duly anonymised.

# EDPB Opinions

##  On the matter of anonymity:

1. AI models trained on personal data cannot, in all cases, be considered anonymous. Instead, the determination of whether an AI model is anonymous should be assessed, based on specific criteria, on a case-by-case basis.
2. AI models are very likely to require such a thorough evaluation of the risks of identification (whenever a proposal does not meet one of the criteria -- possible to single out, link and infer information -- a thorough evaluation of the identification risks should be performed).
3. for an AI model to be considered anonymous, using reasonable means, both (i) the likelihood of direct (including probabilistic) extraction of personal data regarding individuals whose personal data were used to train the model; as well as (ii) the likelihood of obtaining, intentionally or not, such personal data from queries, should be insignificant for any data subject. By default, SAs should consider that AI models are likely to require a thorough evaluation of the likelihood of identification to reach a conclusion on their possible anonymous nature. This likelihood should be assessed taking into account ‘all the means reasonably likely to be used’ by the controller or another person, and should also consider unintended (re)use or disclosure of the model.
4. SAs should take into account the documentation whenever a claim of anonymity regarding a given AI model needsto be evaluated. The EDPB notes that, if a SA is not able to confirm, after assessing the claim of anonymity, including in light of the documentation, that effective measures were taken to anonymise the AI model, the SA would be in a position to consider that the controller has failed to meet its accountability obligations under Article 5(2) GDPR. Therefore, compliance with other GDPR provisions should also be considered.

## On the matter of legitimate interest

### Balancing test

- This step weighs the legitimate interest against the interests, fundamental rights, and freedoms of data subjects, considering specific circumstances.
- **Specific risks to fundamental rights highlighted for AI models** include:
	- **Development Phase:** Risks related to personal data scraped against data subjects' wishes or without their knowledge, potential for large-scale, indiscriminate data collection leading to a sense of surveillance, and undermining freedom of expression due to self-censorship.
	- **Deployment Phase:** Risks of personal data processing contravening data subjects' rights, the possibility of inferring or extracting training data (e.g., through membership inference, extraction, or model inversion attacks), leading to reputational risk, identity theft, fraud, or security risks. Other risks include impacts on freedom of expression (content blocking), mental health (inappropriate content), right to work (job application pre-selection), and non-discrimination (based on personal characteristics). There are also potential risks to the security, safety, and physical/mental integrity of individuals.
- **Positive impacts** of AI models (e.g., identifying harmful content, facilitating access to essential services or education) can also be considered in the balancing test.
- The **impact of processing on data subjects** is influenced by the _nature of the data_ (e.g., highly private financial or location data has a serious impact), the _context of the processing_ (how the model was developed/deployed, security measures, scale of processing, number of affected data subjects, status/relationship of data subject), and _further consequences_ (e.g., discrimination, physical/material/non-material damage). The **large volume and indiscriminate collection of data via web scraping** in the development phase is noted as having significant impacts.
- **Reasonable expectations of data subjects play a crucial role, especially due to the complexity of AI technologies** and the difficulty for data subjects to understand their potential uses and the involved data processing.
	- Simply fulfilling transparency requirements is not enough; SAs must assess whether data subjects could _reasonably expect_ the processing.
	- Contextual elements are vital, such as whether data was publicly available, the relationship between the data subject and controller, the service's nature, the collection context, the source of data (e.g., website privacy settings), potential further uses, and the data subject's awareness of their data being online.
	- Expectations differ based on whether data was directly provided by the data subject or obtained by the controller (e.g., via scraping).
	- In deployment, awareness of AI model adaptation to inputs for tailored services versus general model improvement is relevant.

### Technical and Organizational Measures to Mitigate Risk

When data subjects' interests and rights might override a legitimate interest, controllers can introduce mitigating measures. These measures are distinct from standard GDPR compliance requirements and should be tailored to the specific circumstances and characteristics of the AI model.

Here is a non-exhaustive list of examples:

**Technical Measures (General, potentially stemming from AI model design/testing):**

- **Measures from AI model design and analysis** (e.g., from Section 3.2.2 of the Opinion) that aim to mitigate risks without resulting in full anonymisation or being legally required for other GDPR obligations. These include:
    - **Selection of Sources:** Steps to avoid or limit the collection of personal data, evaluating selection criteria, relevance, and adequacy of sources, and excluding inappropriate sources.
    - **Data Preparation and Minimisation:** Considering the use of anonymous or pseudonymised data, employing data minimisation strategies to restrict the volume of personal data, and implementing data filtering processes.
    - **Methodological Choices:** Using regularisation methods to improve model generalisation and reduce overfitting, and implementing privacy-preserving techniques (e.g., differential privacy).
    - **Measures Regarding Outputs:** Methods or measures added to the AI model itself that might lower the likelihood of obtaining personal data related to training data from queries.
    - **AI Model Analysis:** Conducting document-based audits (internal or external) to evaluate chosen measures and their impact on limiting identification likelihood.
    - **AI Model Testing and Resistance to Attacks:** Structured testing against state-of-the-art attacks, such as attribute and membership inference, exfiltration, regurgitation of training data, model inversion, and reconstruction attacks.
- **Pseudonymisation measures:** For instance, measures to prevent any combination of data based on individual identifiers. These may not be suitable if there's a reasonable need to combine different data about an individual for the AI system/model development.
- **Masking or substituting personal data:** Replacing actual personal data (e.g., names, email addresses) with fake data in the training set, especially useful when the substantive content of the data is not critical for the processing (e.g., in Large Language Model training).

**Measures that Facilitate the Exercise of Individuals’ Rights:**

- **Observing a reasonable period of time** between data collection for a training dataset and its use, allowing data subjects to exercise their rights during this period.
- **Proposing an unconditional 'opt-out'** from the outset, going beyond the conditions of Article 21 GDPR to strengthen individual control over data.
- **Allowing the right to erasure** even when the specific grounds listed in Article 17(1) GDPR do not apply.
- **Allowing data subjects to submit claims of personal data regurgitation or memorisation**, and providing means for controllers to reproduce and assess relevant unlearning techniques to address these claims.

**Transparency Measures:**

- **Releasing public and easily accessible communications** that go beyond the information required under Article 13 or 14 GDPR, providing additional details about collection criteria and all datasets used, with special consideration for children and vulnerable persons.
- **Alternative forms of informing data subjects,** such as media campaigns, email information campaigns, graphic visualisations, Frequently Asked Questions (FAQs), transparency labels, model cards, and voluntary annual transparency reports.

**Specific Mitigating Measures in the Context of Web Scraping:**

- **Technical Measures:**
    - **Excluding data content** from publications that might include personal data posing risks to particular persons or groups (e.g., individuals subject to abuse, prejudice, or harm).
    - **Excluding certain data categories or sources** from collection, particularly intrusive websites due to their sensitive subject matter.
    - **Excluding collection from websites that explicitly object to web scraping** and reuse of their content for AI training databases (e.g., by respecting `robots.txt` or `ai.txt` files or other recognised exclusion mechanisms).
    - **Imposing other relevant limits on collection**, possibly based on time periods.
- **Facilitating Rights and Transparency:**
    - **Creating an opt-out list** managed by the controller, allowing data subjects to object to data collection on certain websites/online platforms before data collection occurs.

**Specific Mitigating Measures in the Deployment Phase:**

- **Technical Measures:**
    - Implementing measures to **prevent the storage, regurgitation, or generation of personal data**, especially in generative AI models (e.g., output filters).
    - **Mitigating the risk of unlawful reuse** by general purpose AI models (e.g., digital watermarking of AI-generated outputs).
- **Facilitating Rights:**
    - **Facilitating or accelerating the exercise of individuals' rights** beyond legal requirements, particularly concerning the right to erasure of personal data from model output data or deduplication, and post-training techniques to remove or suppress personal data.
- **Organizational Measures:**
    - **Publishing the balancing test** conducted by the controller to increase transparency and fairness.
    - **Involving the Data Protection Officer (DPO)**, where applicable, in the legitimate interest assessment.

## On the matter of legality of model if earlier phases were unlawful

When the controllers subsequently process personal data collected during the deployment phase, after the model has been anonymised, the GDPR would apply in relation to these processing activities. In these cases, as regards the GDPR, the lawfulness of the processing carried out in the deployment phase should not be impacted by the unlawfulness of the initial processing.