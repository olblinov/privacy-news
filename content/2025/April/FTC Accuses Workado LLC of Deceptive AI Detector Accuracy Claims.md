---
title: FTC Accuses Workado LLC of Deceptive AI Detector Accuracy Claims
tags:
  - ftc
  - ai
links:
  - https://www.ftc.gov/legal-library/browse/cases-proceedings/2323092-content-scale-ai
  - https://www.ftc.gov/system/files/ftc_gov/pdf/complaint.pages_from_232_3092_-_content_at_scale_ai_consent_package_without_signatures.pdf
date: 2025-04-28
---
# Summary

The Federal Trade Commission (FTC) has filed a complaint against Workado, LLC, formerly known as Content At Scale AI, alleging that the company made **false or unsubstantiated performance claims** about its "AI Content Detector". Workado advertised its detector as being able to predict with **98% or 98.3% accuracy** whether text was human or AI-generated, including content from ChatGPT, GPT4, Claude, and Bard, and claimed it was trained on various materials like blog posts and Wikipedia entries. However, the FTC asserts that the AI model Workado used was actually trained **only on academic text** (research abstracts) by independent developers and was not fine-tuned for non-academic content or other AI programs. The developers' own tests showed the model's accuracy for mixed human/AI non-academic content was 74.5%, and only 53.2% for detecting AI-generated non-academic text, making its performance for Workado's advertised use cases **barely better than a coin toss**. The FTC deems these representations to be deceptive, violating Section 5(a) of the Federal Trade Commission Act.

# Details

## Background

Workado, LLC, also known as Content At Scale AI, is an Arizona limited liability company that advertises, offers, and sells products and services for creating marketing content. Among its offerings is the **"AI Content Detector"** (also called the "AI Content Checker"), which uses artificial intelligence to determine if written content is AI-generated. Since 2024, Workado has also offered an AI image detector.

The company primarily targets **advertisers, marketers, students, and other written content creators**. The AI Content Detector was available for free on a limited basis since at least November 2022, with a **$49 per month paid subscription** option introduced from September 2023 to August 2024 for unlimited use and premium features like suggested rewrites. When users submit text, the detector highlights portions in **red** (very robotic, high chance of AI), **orange** (needs less robotic sound, change sentence structure/word choices), or **green** (does not read as AI-generated).

Workado disseminated advertisements for the AI Content Detector on its website, GoogleAds, and YouTube videos. These advertisements claimed the detector would predict with **98% or 98.3% accuracy** whether text was human or AI-generated, including content from ChatGPT, GPT4, Claude, and Bard. Workado also stated that its AI Content Detector was **"one of the most trusted"** and "goes deeper than a generic AI detector". Additionally, advertisements claimed the detector was **"Trained on blog posts, Wikipedia, essays, and more"** and could "transform AI text into undetectable AI content". The FTC notes that the rise of generative AI has led to a demand for such detection tools by businesses and institutions that require authentic human works, and inaccurate assessments from these tools can have **severe consequences**, such as a student being wrongly accused of cheating.

## Legal Analysis

The Federal Trade Commission alleges that Workado's representations regarding the AI Content Detector's accuracy and training were **false or unsubstantiated**.

- **Training Data Discrepancy**: Workado claimed its detector was "Trained on blog posts, Wikipedia, essays, and more". However, the FTC found that Workado did not create, train, or fine-tune the AI model behind its AI Content Detector. The underlying AI model, named **RoBERTa-academic-detector**, is publicly available and was developed by students in Norway for an undergraduate thesis to detect **machine-generated academic text**. This model was trained using a large dataset consisting solely of human-written and ChatGPT-generated **research abstracts**; its developers **did not fine-tune it with non-academic content** like Wikipedia entries or blog posts, nor with content from Bard, Claude, or GPT-4.
- **Accuracy Claims vs. Reality**: Workado promoted its AI Content Detector with claims of 98% or 98.3% accuracy. The company relied **solely on the publicly available testing results** for the AI model's evaluation of _academic content_ to make this claim. However, Workado did not test the AI Content Detector under the different conditions of use it promoted, specifically for marketing and other plain-language text. The developers' own testing data for **non-academic content** showed significantly lower accuracy:
    - When evaluating a **mix of human-created and AI-generated non-academic content**, the best accuracy was **74.5%**.
    - When specifically attempting to identify **AI-generated non-academic content**, the model correctly detected it only **53.2% of the time**.
- **Deceptive Practices**: The FTC concludes that the AI Content Detector is **"far less accurate than 98.3%"** and is likely accurate around **half the time** in identifying non-academic, AI-generated content. This means that for its intended use by marketers and copywriters, the AI Content Detector performs "barely better than a coin toss". The FTC alleges that these acts and practices constitute **unfair or deceptive acts or practices** in commerce, violating Section 5(a) of the Federal Trade Commission Act.

## Sanction

The document provided is a **complaint** issued by the Federal Trade Commission, indicating that the Commission has reason to believe Workado, LLC has violated the provisions of the Federal Trade Commission Act and that this proceeding is in the public interest. As a complaint, it **alleges violations** and initiates a legal proceeding, but it **does not specify any sanction or fine amount**, as such details would typically be determined through a subsequent settlement or final order.