---
title: CJEU AG's opinion on pseudonymous and anonymous data
tags:
  - anonymization
  - cjeu
  - personal_data
  - access
links:
  - https://curia.europa.eu/juris/document/document.jsf?text=&docid=295078&pageIndex=0&doclang=EN
date: 2025-02-06
---
**Opinion of Advocate General Spielmann** was delivered on February 6, 2025, concerning an appeal by the **European Data Protection Supervisor (EDPS) against the Single Resolution Board (SRB)**. The case, C-413/23 P, centers on the processing of personal data following the resolution of Banco Popular Español SA and specifically addresses the SRB's obligation to inform creditors and shareholders about the recipients of their personal data. The appeal seeks to clarify the concept of 'personal data' in the context of pseudonymised data and the obligations related to fair and transparent data processing.

### I. Legal Framework

The core of the legal dispute relies on Regulation (EU) 2018/1725, which governs the processing of personal data by EU institutions, bodies, offices, and agencies, aiming for a data protection regime equivalent to the GDPR.

**Key Definitions and Principles**:

- **Personal Data**: Defined as any information relating to an identified or identifiable natural person (data subject). An identifiable natural person can be identified, directly or indirectly, by identifiers like a name, identification number, location data, or factors specific to their identity.
- **Pseudonymisation**: This is a process of handling personal data so that it can no longer be attributed to a specific data subject without additional information, provided this additional information is kept separately and protected by technical and organisational measures. Recital 16 states that **personal data that have undergone pseudonymisation, which could be attributed to a natural person using additional information, should be considered information on an identifiable natural person**. The principles of data protection apply to information concerning an identified or identifiable natural person, but not to anonymous information. Pseudonymisation is meant to reduce risks to data subjects and help controllers meet their data protection obligations.
- **Principles of Processing**: Personal data must be processed **lawfully, fairly, and in a transparent manner** in relation to the data subject.
- **Accountability**: The controller is responsible for and must be able to demonstrate compliance with these processing principles.
- **Information Obligation**: When personal data is collected from the data subject, the controller **must provide the data subject with information on the recipients or categories of recipients of the personal data, if any, at the time the data is obtained**. This obligation is crucial for ensuring fair and transparent processing and for obtaining informed consent.

### II. Background to the Dispute

In June 2017, the SRB adopted a **resolution scheme for Banco Popular**, which involved writing down or converting capital instruments and transferring shares. To determine if affected shareholders and creditors were entitled to compensation, the SRB tasked Deloitte, an 'independent person,' with carrying out a **valuation of difference in treatment** (Valuation 3).

The SRB then initiated a "right to be heard" process, comprising two phases:

1. **Registration Phase**: Participants provided proof of identity and ownership of Banco Popular capital instruments to verify eligibility. This data was accessible to a limited number of SRB staff.
2. **Consultation Phase**: Affected shareholders and creditors submitted comments on the SRB's preliminary decision, to which Valuation 3 was annexed. These comments were identified by an **alphanumeric code** (a 33-digit globally unique identifier) and were not directly linked to identifying data for the SRB staff processing them. **Only the SRB could link these alphanumeric codes to the data collected in the registration phase**. #anonymization 

The **SRB sent filtered, categorised, and aggregated comments from the consultation phase, bearing the alphanumeric codes, to Deloitte**. Deloitte had no access to the database containing the identifying data from the registration phase.

**Five complainants submitted complaints to the EDPS**, alleging that the SRB's privacy statement did not mention the transmission of their data to Deloitte, thereby infringing Article 15(1)(d) of Regulation 2018/1725.

### III. The EDPS Decision (at issue)

The EDPS adopted a revised decision on November 24, 2020, finding that:

- The data shared with Deloitte were **pseudonymous data**, because the comments were personal data and the alphanumeric code allowed linking replies from the consultation phase to the registration phase, even though identifying data were not disclosed to Deloitte.
- **Deloitte was a recipient of the complainants' personal data**.
- The **SRB infringed its information obligations under Article 15(1)(d)** by not mentioning Deloitte as a potential recipient in its privacy statement.
- Despite the infringement, the EDPS decided **not to exercise corrective powers**, acknowledging the SRB's technical and organisational measures to mitigate risks.
- The EDPS recommended the SRB ensure future data protection notices cover processing in both phases and **include all potential recipients**.

### IV. The General Court's Judgment (under appeal)

The SRB brought an action to annul the EDPS decision, relying on two pleas:

1. Infringement of Article 3(1) of Regulation 2018/1725, arguing that the information transmitted to Deloitte **did not constitute personal data**. #personal_data 
2. Infringement of the right to good administration.

The General Court upheld the first plea and annulled the EDPS decision, without examining the second plea.

- The General Court held that the EDPS had **presumed** the information related to a natural person without examining its content, purpose, or effect, contrary to the _Nowak_ judgment.
- Crucially, the General Court found that the EDPS failed to examine whether the comments constituted personal data **for Deloitte**. #personal_data  It concluded that the EDPS did not investigate if Deloitte had **legal means available to re-identify** the authors, and thus could not conclude the information was "identifiable personal data" from Deloitte's perspective.

### V. Appeal to the Court of Justice

The EDPS appealed the General Court's judgment, supported by the European Data Protection Board, while the SRB and the European Commission contended for the dismissal of the appeal.

The EDPS put forward two grounds of appeal:

1. Challenging the General Court's interpretation of **'personal data'** under Article 3(1) and (6) of Regulation 2018/1725. #personal_data 
2. Alleging breach of the **principle of accountability** under Article 4(2) of the regulation.

### VI. Advocate General's Assessment

#### A. First Ground of Appeal: Interpretation of 'Personal Data'

The first ground of appeal is divided into two parts.

##### 1. First Part: Whether the information 'relates' to a natural person

- The Advocate General (AG) recalls that **'personal data' has a wide scope**, encompassing all kinds of information, objective and subjective, provided it 'relates' to the data subject. Information relates to a person if, by its content, purpose, or effect, it is **'linked' to a particular person**.
- For opinions or assessments (like the complainants' comments), the AG suggests a **presumption that they necessarily relate to their author**. The comments in this case, emanating from the complainants and reflecting their subjective opinions, necessarily 'related' to them.
- Even without presumption, the comments 'relate' to the complainants due to their **content, purpose, and effect**. The purpose of the "right to be heard" process was to allow shareholders/creditors to contribute to the SRB's decision on compensation, and their comments could affect their financial interests.
- The AG concludes that the **General Court erred in finding the EDPS had not complied with the necessary examination** regarding whether the comments 'related' to natural persons.

##### 2. Second Part: Identifiability of Data Subjects (Pseudonymisation)

This part discusses whether pseudonymised data are still considered personal data, particularly from the recipient's perspective.

- **Complaint 1: Error concerning the effects of pseudonymisation**
    
    - The EDPS argued that pseudonymised data are _always_ personal data if the data subjects remain identifiable, irrespective of the recipient's ability to identify them.
    - The SRB and Commission argued that pseudonymised data remain personal data for the controller who pseudonymised them, but for recipients, it's necessary to examine **whether the data subjects are identifiable from the recipient's point of view**.
    - The AG clarifies that **pseudonymisation is a processing method applied to personal data**, not part of the definition of personal data itself. Recital 16 of Regulation 2018/1725 states that pseudonymised data "should be considered to be information on an identifiable natural person" if they _could_ be attributed using additional information. However, it also implies that such data _may_ fall outside the scope of 'personal data' if the data subjects are not identifiable.
    - The concept of 'identifiability' is broad and protective, considering means 'reasonably likely to be used' by the controller **'or by another person'**. Only where the **risk of identification is non-existent or insignificant** can data escape classification as 'personal data'.
    - The AG opines that it _was_ necessary to determine if the pseudonymisation was robust enough for Deloitte to be unable to reasonably identify the complainants. Thus, **the EDPS's first complaint should be rejected**. #personal_data #change 
- **Complaint 2: Error in the comparison with the _Breyer_ judgment**
    
    - The EDPS argued the General Court misinterpreted _Breyer_, stating that the obligation to provide information lay with the SRB as the controller, regardless of the data's status for Deloitte.
    - The AG agrees with the EDPS on this point, stating that the **obligation to provide information under Article 15(1)(d) applies to the SRB as the controller, based on its relationship with the data subjects (complainants)**. 
    - This obligation arises **at the time data are collected** by the SRB, and at that point, the data are personal data in the SRB's possession, as it holds the additional identification data. 
    - Therefore, the **identifiability of the data by Deloitte is not material** for the SRB's obligation to inform the data subjects about the recipients of their data. The information must be provided by the controller immediately when data are collected, and before transfer, to enable informed consent. #rights #change 
    - The AG concludes that the **General Court's judgment must be set aside on the ground of an error of law** because the SRB failed to fulfill its information obligation.
    - Arguments concerning Deloitte's ability to re-identify data subjects are deemed **ineffective** given this interpretation. Any new factual allegations regarding Deloitte's contractual relationship and access to identification data were inadmissible at the appeal stage. #rights #change 

#### B. Second Ground of Appeal: Breach of Accountability (Examined in the Alternative)

- This ground of appeal concerns whether the General Court erred in requiring the EDPS to demonstrate that the information transmitted to Deloitte was personal data.
- The AG states that, due to his conclusion on the first ground, there is **no need to examine this second ground of appeal**.
- However, if examined in the alternative, the AG notes that the principle of **accountability requires the controller (SRB) to demonstrate compliance** with data processing principles. The SRB did rely on factual elements (filtering, categorisation, aggregation) to prove Deloitte could not identify data subjects.
- If Deloitte's perspective _were_ relevant, the AG would agree with the General Court that it was for the EDPS to demonstrate why the pseudonymisation was insufficient to prevent Deloitte from processing personal data.

### VII. Action Before the General Court

Given the AG's opinion that the SRB failed to fulfill its information obligation under Article 15(1)(d), the **EDPS's decision finding an infringement should be confirmed**.

However, the General Court did not examine the SRB's second plea concerning **infringement of the right to good administration** (e.g., right of access to file, right to be heard) during the administrative procedure. As this involves factual assessments, the AG proposes **referring the case back to the General Court** for judgment on this specific plea.

### VIII. Conclusion

The Advocate General proposes that the Court should:

- **Set aside the judgment of the General Court**.
- **Refer the case back to the General Court** for judgment on the second plea in law raised before it.
- Reserve the costs.