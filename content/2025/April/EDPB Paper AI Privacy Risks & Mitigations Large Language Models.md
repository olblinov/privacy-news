---
title: EDPB Paper AI Privacy Risks & Mitigations Large Language Models
tags:
  - ai
  - edpb
  - methodology
links:
  - https://www.edpb.europa.eu/our-work-tools/our-documents/support-pool-experts-projects/ai-privacy-risks-mitigations-large_en
  - https://www.edpb.europa.eu/system/files/2025-04/ai-privacy-risks-and-mitigations-in-llms.pdf
date: 2025-04-10
---
# Introduction to Large Language Models (LLMs)

## Definition and Evolution

Large Language Models (LLMs) are a **transformative advancement in artificial intelligence**. These general-purpose models are **trained on extensive datasets**, which can include publicly available content, proprietary datasets, and specialized domain-specific data. Their applications are diverse, encompassing **text generation, summarization, coding assistance, and sentiment analysis**. Some LLMs, known as **multimodal LLMs**, are capable of processing and generating multiple data modalities like **image, audio, or video**. Key milestones in LLM development include rule-based systems from the 1960s and 1970s, and the **revolutionary introduction of transformer architectures in 2017**. Subsequent developments, such as OpenAI's GPT series, Google's BERT, and models like GPT-4, LaMDA, and DeepSeek-V3, have set benchmarks in natural language processing (NLP).

## How LLMs Work

LLMs are advanced **deep learning models** primarily based on the **transformer architecture**, which uses **attention mechanisms** to understand context and relationships between words. The development of LLMs involves several key stages.

### Training Phase: Building the Model

In this phase, LLMs learn language patterns, context, and structure by analyzing vast datasets.

- **Dataset Collection**: This involves curating extensive, relevant, diverse, and high-quality datasets, often from sources like Common Crawl and Wikipedia, with filtering to remove low-quality content.
- **Data Pre-processing**: Text is cleaned, normalized, and broken into **tokens** (words, subwords, or characters). These tokens are converted into numerical IDs and then into **word embeddings**, which are dense vector representations capturing semantic similarities.
- **Transformer Architecture**: Most state-of-the-art LLMs use **decoder-only architectures**, while encoder-decoder models are still used for tasks like translation.
    - **Encoder**: Converts input text into a contextualized representation by analyzing word relationships, using token embeddings, positional encodings to preserve word order, and attention mechanisms to capture dependencies.
    - **Decoder**: Generates text by predicting one token at a time, building upon the encoder's output and previously generated tokens, using attention mechanisms and a Feed-Forward Network. Masked attention during training ensures the model predicts outputs step-by-step.
    - **Mixture of Experts (MoE)**: A technique to improve transformer-based LLMs by activating only a few "experts" (smaller parts of the model) based on input needs, improving efficiency and scalability without losing performance.
- **Training/Feedback loop & Optimization**: This iterative process enhances the model's ability to generate accurate outputs.
    - **Loss calculation**: Quantifies the error between generated and target sequences.
    - **Backward pass**: Computes gradients indicating how much each model parameter contributed to the error.
    - **Parameter update**: Adjusts model parameters using optimization algorithms (e.g., Adam or SGD) to reduce future prediction errors.
    - **Repetition**: This process repeats for many iterations, incrementally improving performance until a balance between training accuracy and generalization is achieved.

### Continuous Improvement – Model Alignment (Post-Training)

Pre-trained models require tuning to align their behavior with ethical considerations and user preferences. Common alignment methods include:

- **Supervised Fine-Tuning (SFT)**: Training on a labeled dataset for a specific task.
- **Instruction Tuning**: Optimizing the LLM for following user instructions and conversational tasks.
- **Reinforcement Learning with Human Feedback (RLHF)**: Uses human feedback to train a reward model, guiding the AI's learning process. Techniques like Proximal Policy Optimization (PPO) and Direct Preference Optimization (DPO) are employed. DeepSeek researchers introduced Group Relative Policy Optimization (GRPO), which uses computer-generated scores instead of human annotations.
- **Parameter-Efficient Fine-Tuning (PEFT)**: Adapts models by training only a subset of parameters.
- **Retrieval-Augmented Generation (RAG)**: Enhances LLMs by integrating information retrieval capabilities, allowing them to reference specific documents for domain-specific or updated information.
- **Transfer Learning**: Re-using knowledge from one task in another model.
- **Feedback loops**: Real-world user feedback (e.g., engagement, ratings, comments) refines model behavior.

### Inference Phase: Generating Outputs

Once trained, the model generates outputs based on new inputs.

- **Input**: User queries are tokenized and embedded into a format the model understands.
- **Processing**: The input passes through the transformer architecture, where attention mechanisms and decoder layers predict subsequent tokens, selecting the most probable ones to generate coherent text.
- **Output**: The model produces probabilities for potential next words, combining predictions for coherent and relevant responses.
- **Multimodal LLMs**: Handle multiple data modalities by incorporating specialized components like modality-specific encoders, connectors, and cross-modal fusion mechanisms.
- LLMs are components within broader **AI systems** (referred to as LLM-based systems or LLM systems), which require additional components like user interfaces to function completely. Each development stage of an LLM can introduce **privacy risks**, especially during data collection, inference, RAG processes, and feedback loops.

## Emerging LLM Technologies: The Rise of Agentic AI

By 2027, 50% of companies using generative AI are expected to pilot **agentic AI systems**, which function as intelligent assistants autonomously managing complex tasks.

### Definition and Capabilities

**AI Agents** are autonomous systems built on LLMs that perform complex tasks by combining LLM capabilities with **reasoning, decision-making, and interaction**. They are proactive, goal-oriented (planning, executing, iterating), and can incorporate feedback. Advanced agents may integrate other AI systems like computer vision. Workflows operate in predefined manners, while agents function dynamically, allowing LLMs to autonomously direct processes.

### Architecture Components

The architecture of an AI agent is modular, focusing on components that enable sophisticated behavior and adaptability.

- **Perception module**: Processes inputs (text, voice, data streams) from the environment and formats them for the LLM.
- **Reasoning module**: Interprets input data, analyzes context, and decomposes complex tasks into subtasks, leveraging the LLM's natural language understanding to make decisions.
- **Planning module**: Determines how the agent will execute subtasks, organizing and sequencing actions to achieve a goal.
- **Memory and state management**: Maintains context and continuity by tracking past interactions.
    - **Short-Term Memory**: For current interaction coherence.
    - **Long-Term Memory**: Stores user preferences and learned insights for personalization.
- **Action module**: Executes the plan and interacts with the external environment, accessing tools like APIs, databases, or external systems.
- **Feedback and iteration loop**: Evaluates action success and adjusts behavior dynamically, incorporating user corrections, system logs, and performance metrics. The agent continuously interacts with its memory and the external environment.

### Small Language Models (SLMs) and Model Orchestration

**Small Language Models (SLMs)** are lightweight, task-specific models optimized for simpler, focused tasks (e.g., text classification). They can complement LLMs in agentic AI, enhancing efficiency and privacy by processing data locally and reducing reliance on centralized LLMs. SLMs can be domain-focused by fine-tuning LLMs with organization-specific data. **Model orchestration** dynamically manages which model (LLM or SLM) handles a task, routes inputs, and combines outputs for efficient and secure collaboration.

### Privacy Concerns of AI Agents

The growing adoption of AI agents introduces significant privacy risks.

- **Access to Wide Range of User Data**: Agents often need access to internet activity, personal applications (emails, calendars), and third-party systems (financial accounts), increasing the risk of unauthorized data exposure if compromised.
- **Autonomous Decisions**: Agents' autonomous decision-making can lead to errors or choices users disagree with.
- **Biases**: Agents are susceptible to biases from training data, algorithms, and usage context.
- **Privacy Trade-offs for User Convenience**: Users must weigh data sharing for convenience against risks, requiring clear communication about data usage and robust consent mechanisms.
- **Accountability for Agent Decisions**: Determining accountability for errors or harm caused by agents can be difficult, necessitating transparency in decision-making and user intervention mechanisms.

## Common Uses of LLM Systems

LLMs are central to various industries, offering advanced NLP capabilities through diverse solutions.

### Types of LLM Solutions

- **Proprietary LLM Models**: Offered by leading tech companies (e.g., OpenAI's GPT series, Google's Gemini, Claude’s Anthropic Models) for integration via APIs, with some customizable on specific datasets. European companies like Mistral AI, Aleph Alpha, Silo AI's Poro, TrustLLM, and OpenEuroLLM also contribute.
- **Open Source LLM Frameworks and Models**: Community contributions like Hugging Face's Transformers, Deepseek, Deepset's Haystack, OLMo 32B, Meta's LLaMA, BLOOM, BERT, Falcon, and Qwen. LangChain is an open-source framework for building LLM applications.
- **Cloud-Based LLM Services**: Major cloud providers (e.g., Microsoft Azure OpenAI, AWS Bedrock, Google Cloud Vertex AI, IBM Watson, Cohere) offer integrated LLM services, providing API access to proprietary and open-source models.

### Applications of LLMs

LLMs enhance user experience and operational efficiency across many applications.

- **Chatbots and AI Assistants**: Power virtual assistants like Siri and Google Assistant.
- **Content generation**: Assist in creating articles, reports, and marketing materials.
- **Language translation**: Facilitate real-time translation.
- **Sentiment analysis**: Used by businesses to analyze customer feedback.
- **Code generation and debugging**: Enhance software development efficiency.
- **Educational support tools**: Play a key role in personalized learning.
- **Legal document processing**: Help professionals review and summarize legal texts.
- **Customer support**: Automate responses and escalate complex cases.
- **Autonomous vehicles**: For real-time decision-making.

## Performance Measures for LLMs

Evaluating LLM performance is crucial for ensuring accuracy, reliability, and ethical use. Evaluation approaches should be tailored to the LLM lifecycle stage and intended applications.

### Evaluation Metrics

- **Accuracy**: Measures how often an output aligns with correct results, using metrics like BLEU and ROUGE for generative tasks.
- **Precision**: Ratio of correctly predicted positive outcomes to total positive predictions. High precision indicates accuracy in predictions but doesn't account for false negatives.
- **Recall (Sensitivity/True Positive Rate)**: Proportion of actual positive instances successfully identified. High recall indicates effectiveness in capturing relevant information but doesn't address false positives.
- **F1 Score**: Combines precision and recall into their harmonic mean, balancing both.
- **Specificity**: Measures the proportion of true negatives correctly identified.
- **AUC (Area Under the Curve) and AUROC**: Quantify a model's ability to distinguish between classes, evaluating trade-off between sensitivity and 1-specificity.
- **AUPRC (Area Under the Precision-Recall Curve)**: Measures performance in imbalanced datasets, focusing on precision and recall trade-off.
- **Cross Entropy**: Measures uncertainty or randomness in predictions, quantifying difference between true labels and predicted probabilities. Lower entropy means higher confidence.
- **Perplexity**: Derived from cross entropy, evaluates how well a language model predicts a sample. Lower scores indicate better performance, though its reliability for LLMs with long-context capabilities is debated.
- **Calibration**: Alignment between predicted probabilities and actual correctness. A well-calibrated model provides confidence scores reflecting true probabilities.
- **MoverScore**: Assesses semantic similarity between two texts.
- **Usability Metrics**:
    - **Completed requests per minute**: System efficiency in handling multiple queries.
    - **Time to first token (TTFT)**: Time to generate the first token of a response.
    - **Inter-token Latency (ITL)**: Delay between generating consecutive tokens.
    - **End to end Latency (ETEL)**: Total time from request to complete response.

### Benchmarks

Benchmarks are standardized datasets, tasks, and evaluation protocols for comparing AI models.

- **General Language Understanding Evaluation (GLUE)**: A collection of tasks for natural language understanding. SuperGLUE is a more challenging version.
- **Massive Multitask Language Understanding (MMLU)**: Evaluates general knowledge and reasoning across subjects.
- **ChatbotArena**: Open-source platform for human-preference-based AI evaluation.
- **AlpacaEval**: LLM-based automatic evaluation for instruction following.
- **HellaSwag**: Challenge dataset for commonsense NLI.
- **Big-Bench (Beyond the Imitation Game Benchmark)**: Tasks to evaluate LLM capabilities beyond standard benchmarks, assessing abstract reasoning and complex prompts.
- **AI Agent Benchmarks**: Most current metrics focus on efficiency, effectiveness, and reliability. Examples include SWE-bench, AgentBench, MLAgentBench, BFCL, τ-bench, and Planbench.

### Issues Affecting Output Accuracy

Several factors can impact LLM output accuracy.

- **Quality of training data**: Data bias (societal, cultural, linguistic) and data relevance (outdated, irrelevant, noisy) can lead to inaccuracies.
- **Model limitations**: Struggles with nuanced contexts or multi-turn conversations and handling ambiguities.
- **Tokenization and preprocessing**: Errors can distort model understanding, and aggressive cleaning can remove important context.
- **Overfitting and underfitting**: Over-specialization on limited data (overfitting) or inadequate training (underfitting).
- **Prompt design and input quality**: LLMs are sensitive to phrasing, and poor input leads to inaccurate responses.
- **Limitations in knowledge**: Knowledge cutoff (trained up to a specific time) and factual errors ("hallucinations").
- **Lack of robustness**: Failure with adversarial inputs or noise/variability (spelling errors, slang).
- **Inadequate calibration**: Overconfidence from poorly calibrated models.

## Safeguards/Guardrails in LLMs

Safeguards or guardrails ensure models operate safely, ethically, and reliably, addressing risks like harmful content generation or privacy preservation. Examples include:

- **Content filters**: Blocking harmful or toxic output.
- **Prompt refusals**: Preventing responses to dangerous prompts.
- **Bias mitigation**: Reducing stereotypical or unfair outputs.
- **Human-in-the-Loop approaches**: Human oversight for high-risk applications.
- **Post-processing detoxification**: Filtering or rewriting outputs to remove harmful content.
- **Adversarial testing (red teaming)**: Stress-testing the model against harmful prompts.

# Data Flow and Associated Privacy Risks in LLM Systems

Understanding data flow in LLM-powered AI systems is crucial for assessing privacy risks, as it varies by operational phase, system integration, and service model.

## The AI Lifecycle in Privacy Risk Management

The **AI system lifecycle** (based on ISO/IEC 22989 and ISO/IEC 5338) provides a structured framework for data flow and privacy risk management. Implementing **Privacy by Design** is key to addressing risks proactively.

### Phases and their Impact on Privacy

Each phase introduces unique privacy risks:

- **Inception and Design**: Decisions on data requirements, collection methods, and processing strategies, where source selection can introduce risks if sensitive data is included without safeguards.
- **Data Preparation and Preprocessing**: Raw data collection, cleaning, and sometimes anonymization for training or fine-tuning. Risks include **inadvertent inclusion of personal/sensitive data**, **inadequate anonymization**, **biases in datasets**, and **legal violations** (e.g., lack of consent, copyright infringement).
- **Development, Model Training**: Large-scale processing where the model may **memorize sensitive data**, leading to exposure in outputs.
- **Verification & Validation**: Evaluation using test datasets, potentially exposing sensitive user information if not anonymized.
- **Deployment**: Interaction with live user inputs, often highly sensitive, requiring strict controls on collection, transmission, and storage.
- **Operation and Monitoring**: Continuous data flow for monitoring and feedback, with logs potentially retaining personal data and creating misuse risks.
- **Re-evaluation, Maintenance and Updates**: Additional data collection for retraining, risking privacy violations if live user data is used without consent/safeguards.
- **Retirement**: Data archiving or deletion, where failure to properly erase personal data can lead to long-term vulnerabilities.

## LLM Service Models and Data Flow

LLMs are predominantly accessible through different service models.

### Closed vs. Open Models/Weights

- **Closed models**: Proprietary, no public access to weights or source code; interaction typically via API or subscription.
- **Open models**: Publicly available (fully or partly, e.g., weights, code, but not always training data); may be under open-source licenses.
- **Closed weights**: Proprietary models with undisclosed trained parameters.
- **Open weights**: Publicly available parameters, allowing inspection, fine-tuning, or integration.
- **Open source model**: Requires release under an open source license for free use, study, modification, and distribution.

Privacy risks vary: **Closed models offer minimal transparency**, relying on provider safeguards. **Open models/weights risk personal data exposure** and security breaches if training data is sensitive, and partial access may prevent full scrutiny. Open source models share risks with open models, and modifications can introduce vulnerabilities or remove safety measures.

### LLM as a Service Model

- **Description**: Access to LLMs via APIs hosted on a cloud platform, where users send input and receive output without direct access to the underlying architecture.
    - **Variations**: Closed models with closed weights (provider controls data, e.g., OpenAI GPT-4 API), customizable closed weights (deployers fine-tune in controlled environment, e.g., Azure OpenAI Service), and open weights (deployers have full/partial access via platform/API, e.g., Hugging Face models in AWS Bedrock).
- **Data Flow Phases (user interaction)**:
    1. **User input**: User submits query via interface.
    2. **Provider interface & API**: Input formatted and securely transmitted to LLM infrastructure.
    3. **LLM processing at providers’ infrastructure**: LLM processes input; providers may log input/output for debugging or model improvement (with anonymization/filtering).
    4. **Processed output**: Generated output returned to user.
- **Privacy Considerations (Risks & Mitigations)**:
    - **User input**: Risks include sensitive data disclosure, unauthorized access, lack of transparency, adversarial attacks (prompt injection, jailbreaking). Mitigations: User guidance, input restrictions, automated detection/anonymization, **encryption (in transit & at rest)**, data segregation, secure password practices, **clear privacy policies**.
    - **Provider interface & API**: Risks include data interception (insufficient encryption), API misuse (unrestricted access, DoS attacks), interface vulnerabilities (technical flaws, phishing). Mitigations: **End-to-end encryption**, strong authentication, rate limits, monitoring suspicious activity, regular security testing, input validation, robust session management.
    - **LLM processing at Providers’ infrastructure**: Risks include model inference risks (inadvertent sensitive outputs), (un)intended data logging (storing sensitive data without consent), anonymization failures, unauthorized access to logs, data aggregation risks, third-party exposure, lack of data retention policies. Mitigations: Content filtering, human review, **minimize data logging**, proper legal basis, trusted training data, **robust anonymization**, strong access controls, **third-party risk management (vendor assessments, encryption, audits)**, clear retention policies.
    - **Processed output**: Risks include inaccurate/sensitive responses (hallucinations), re-identification risks, output misuse. Mitigations: Post-processing filters, model retraining, disclaimers, **privacy-preserving techniques for redaction**, clear usage policies, user education on ethical use.

### LLM ‘Off-the-Shelf’ Service Model

- **Description**: Organizations use a pre-trained model from a platform to develop and deploy their own AI system. The data flow during user interaction resembles LLM as a Service.
- **Key Differences & Limitations**:
    - **Roles and responsibilities**: The organization developing the system may become a provider (especially if modifying a high-risk system).
    - **Hosting and processing**: The new provider hosts the model on their infrastructure or chosen cloud, becoming responsible for integration, maintenance, and security.
    - **Customization and training**: Original provider handles initial training; new provider may lack oversight of dataset content (biases, inaccuracies, privacy risks) and depends on original for updates. Fine-tuning may be limited.
    - **Retrieval-Augmented Generation (RAG)**: A common alternative; connects LLM to external knowledge base to retrieve relevant documents at runtime, providing dynamic and accurate answers without modifying the base model. **Cache-augmented generation (CAG)** is similar but less practical for large, updated datasets.
- **Common Privacy Risks of RAG**: Insecure logging/caching of queries/documents, third-party data handling (queries sent to external APIs without consent), exposure of sensitive data from knowledge base.

### Self-developed LLM System

- **Description**: Organization takes full responsibility for designing, training, and deploying the model on its own infrastructure, offering maximum control but requiring significant resources and expertise.
- **General Data Flow Phases**: Dataset collection and preparation, Model training, Fine-Tuning, Deployment, User input, Provider interface & API, Model processing, Processed output delivery.
- **Privacy Considerations (Risks & Mitigations)**:
    - **Dataset collection and preparation**: Risks include sensitive data inclusion, legal non-compliance, bias/discrimination, data poisoning. Mitigations: Anonymization/pseudonymization, synthetic data (with careful evaluation), **compliance with regulations**, regular dataset audits for bias, robust data validation to prevent data poisoning.
    - **Model training**: Risks include unprotected training environment (unauthorized access), data overfitting (memorization of sensitive data). Mitigations: **Layered cybersecurity (MFA, PAM, RBAC)**, network segmentation, monitoring/logging access, **encryption (at rest & in transit)**, **differential privacy techniques** (if suitable).
    - **Fine-Tuning**: Risks include exposure of proprietary/sensitive data, third-party risks (if external platforms used). Mitigations: **Encrypt fine-tuning datasets**, restrict access, use trusted platforms with robust privacy assurances, only include necessary data.
    - **Deployment**: Risks include unauthorized access (weak controls), unsecure hosting. Mitigations: Strong authentication, RBAC for model/system access, use secure cloud environments, periodically review configurations.
    - _User input, Provider interface & API, LLM processing, Processed Output_: Risks and mitigations for these phases are generally **similar to the LLM as a Service model**.

### LLM-based Agentic Systems

- **Description**: AI agents introduce additional complexity due to extensive interactions with other systems and applications, often through function calls and potentially a Context Management Protocol (CMP).
- **Simplified Data Flow**: User input → Agent processing → Interaction with application 1 (e.g., flight booking) → Interaction with application 2 (e.g., hotel booking) → Aggregation of responses → Output generation → Logging and continuous improvement.
- **Privacy Considerations (Risks & Mitigations)**:
    - **Perception (user input)**: Risks include sensitive data exposure, lack of preprocessing (identifiable info retention), vulnerable interfaces (interception), lack of transparency (data sharing with apps). Mitigations: Limit data collection, anonymize/preprocess, user consent tools, secure interfaces, clear privacy policies.
    - **Reasoning (agent processing)**: Risks include misuse/exposure of sensitive data, improper handling during task decomposition, unintended personal insights, limited explainability (reducing trust). Mitigations: Anonymize/preprocess, robust access control, secure logging/auditing, **integrate reasoning chains (e.g., Chain of Thought)**.
    - **Planning (task organization, external interactions)**: Risks include sensitive data transmission to external apps without safeguards, excessive data transmission (function calls), third-party system non-compliance. Mitigations: Anonymization/encryption for transmission, **monitor third-party adherence to privacy/security standards (vendor assessments, certifications, contracts)**, **implement Identity and Access Management (Zero Trust, dynamic access, JIT access, credential rotation)**, obtain user consent, filter parameters in function calls.
    - **Memory (data storage and retention)**: Risks include long-term storage (unauthorized access/misuse), retention of sensitive data violating regulations (especially with CMPs). Mitigations: User data management (delete, edit), secure storage with access controls/encryption, **limit retention periods, automate deletion**.
    - **Action (Output generation and delivery)**: Risks include inadvertent sensitive info in outputs, interception/misuse of outputs with external systems, increased hallucinations with multiple agents. Mitigations: Validate/filter outputs, **secure delivery channels (encryption, authentication)**, monitor external interactions, **fine-tune with high-quality data to reduce hallucinations**.
    - **Feedback and Iteration Loop (learning and improvement)**: Risks include user feedback storage/use without consent, sensitive feedback persisting in logs/datasets. Mitigations: User opt-in/opt-out for feedback, automated anonymization/pseudonymization, limit log retention.

## Filters as Safeguards

Most LLM systems use **input and output filters** as safeguards, acting as control mechanisms to preprocess incoming data or refine generated outputs for privacy, safety, and content standards. They can block personal data or harmful prompts (input filters) or remove sensitive content or rephrase responses (output filters). Filters add complexity, latency, and require security, monitoring, and regular updates.

## Roles in LLM Service Models (AI Act and GDPR)

The roles of **provider** and **deployer** (AI Act) and **controller** and **processor** (GDPR) vary by service model. Qualification is based on circumstances, and the provided explanations are for reference.

### LLM as a Service

- **AI Act Roles**:
    - **Provider**: Organization developing and offering the LLM as a service, responsible for AI Act compliance (risk management, transparency, technical robustness).
    - **Deployer**: Organization using the LLM (e.g., a business using the provided interface).
    - **New provider**: An organization integrating the LLM API into a high-risk AI system may also be considered a provider under AI Act Article 25.
- **GDPR Roles**:
    - **Deployer as controller**: Typically determines purposes and means of data processing (e.g., collecting customer queries).
    - **Provider as controller**: When providers collect/retain data for their own purposes (e.g., model fine-tuning), they are also controllers. Joint controllership may be suitable.
    - **Processor**: Provider acts as processor when handling data strictly per deployer instructions (e.g., generating responses), though this is often difficult due to provider's model ownership.
- **Shared Responsibility**: Provider handles infrastructure, model training, maintenance; deployer handles secure usage, integration, and compliance in their context.

### LLM ‘Off-the-Shelf’ Service Model

- **Description**: Original provider's involvement is limited; deployer operates independently.
- **AI Act Roles**:
    - **Provider**: Organization developing and putting the off-the-shelf LLM model on the market or into service, responsible for AI Act requirements. Exceptions apply for free and open-source models with publicly available parameters, unless systemic risk is present. Platform providers may also be considered providers or distributors.
    - **Deployer**: Organization using the off-the-shelf model. Can assume the role of provider for high-risk AI systems if they significantly modify or fine-tune the model (AI Act Article 25).
- **GDPR Roles**:
    - **Deployer as Controller**: Typically determines purpose and means of personal data processing during use.
    - **Provider as Controller**: Original model provider may act as controller if they log, analyze, or retain user/deployer data for their own purposes (e.g., platform improvement).
    - **Processor**: A platform providing a model can act as a processor for cloud-based tasks explicitly instructed by the deployer.
- **Dual-layered responsibility**: Provider accountable for foundational model; deployer responsible for implementation, customization, and operation in their context.

### Self-developed LLMs

- **Description**: Organization has full responsibility for development, infrastructure, and processing.
- **AI Act Roles**:
    - **Provider**: The entity developing the LLM.
    - **Deployer**: The organization deploying the solution, holding most operational responsibilities. If the same organization develops and deploys, it's both provider and deployer.
- **GDPR Roles**:
    - **Provider as Controller**: The LLM system developer controls and executes all data processing activities.
    - **Deployer as Controller**: The deployer determines the purpose and means of processing personal data during use.
    - **Processor**: Any third party processing data on behalf of the controller.
- **Full Control**: Controller has full control over infrastructure and data, responsible for GDPR/AI Act compliance.

### Agentic AI Systems

- **Description**: Autonomous and dynamic behavior introduces unique dynamics for data flows and role allocation.
- **AI Act Roles**:
    - **Provider**: Entity developing and supplying the LLM or core agentic architecture.
    - **Deployer**: Organization implementing the system. May also become a provider for high-risk systems if fine-tuning or significantly modifying the agent (AI Act Article 25).
- **GDPR Roles**:
    - **Deployer as Controller**: Typically determines purposes and means of processing personal data (inputs, outputs, memory, external interactions).
    - **Processor**: Third-party tools, external APIs, or cloud services used by the deployer may act as processors. Some third parties could be joint-controllers.
- **Responsibility Sharing**: Deployer bears significant responsibility, but foundational LLM/module providers may also share pre-deployment compliance responsibility.

# Data Protection and Privacy Risk Assessment

Risk assessment is the first phase of risk management, encompassing risk analysis (identification, estimation, evaluation).

## Risk Identification

Careful identification of risks is required.

### Criteria to Consider: Risk Factors

**Risk factors** are conditions increasing the probability of undesirable outcomes and help identify, assess, and prioritize risks. They are derived from legal instruments like GDPR, EUDPR, and EU Charter.

- **Sensitive & impactful purpose of the processing**: Using LLMs for automated decisions impacting fundamental rights, access to services, contracts, or financial services (e.g., creditworthiness, hiring).
- **Processing sensitive data**: Involves special categories of data (health, biometric, criminal, financial, behavioral, unique identifiers, location data), raising concerns if handled inappropriately.
- **Large scale processing**: High volumes of personal data, especially sensitive data, increase impact in case of breach (e.g., large e-commerce platforms, social media).
- **Processing data of vulnerable individuals**: Individuals requiring special protection (children, elderly, mentally ill, disabled, patients, employees).
- **Low data quality**: Inaccuracies, biases, or incompleteness in input or training data can lead to inaccurate outputs, with higher risk in critical use cases (healthcare, finance).
- **Insufficient security measures**: Lack of safeguards can cause data breaches or unlawful data transfers to countries without adequate protection.

### Other Components of AI Risk

The AI Act introduces essential safety concepts for risk management.

- **Hazard**: A potential source of harm.
- **Hazard exposure**: Conditions or extent of exposure to harm in a hazardous situation.
- **Safety**: Measures to minimize or mitigate harm.
- **Threats**: External factors exploiting vulnerabilities.
- **Vulnerabilities**: Weaknesses that can be exploited.
- **Fundamental rights**: AI Act emphasizes protection of fundamental rights, including privacy.
- Privacy risks often stem from hazards or vulnerabilities exploited by threats. Hazard exposure refers to how personal data is exposed to these risks (e.g., during input querying).

### Importance of Intended Purpose and Context

GDPR Recital 90 emphasizes **establishing the context** of processing, aligning with the AI Act's concept of **'intended purpose'**. Defining these is crucial because risks arise when systems are used in unintended ways or in unforeseen contexts. Clearly defining purpose helps assess design alignment and identify potential misuse. Understanding context (user demographics, language, culture, business models) helps anticipate environmental interactions and issues.

### The Role of Threat Modeling

Methodologies like **threat modeling** systematically identify privacy risks, often leveraging libraries of AI threats, hazards, and vulnerabilities. They provide a structured evaluation throughout the AI system lifecycle, covering both intended and unintended uses. Threat modeling can reveal attack surfaces, misuse cases, and vulnerabilities proactively. Identified threats can be integrated into LLM evaluations through **adversarial testing, red teaming, or scenario-based assessments**.

### Importance of Monitoring and Collecting Evidence

Effective risk management requires robust evidence from multiple sources.

- **Monitoring data**: Logs and usage patterns provide insights into real-world use.
- **Evaluation results**: From metrics, testing, red teaming, and external audits, highlight gaps.
- **User feedback**: Complaints, reports, or behavior patterns offer valuable perspectives.
- Incorporating both **core evidence** (existing data) and **enhanced evidence** (expert consultation, targeted research, content moderation outputs) ensures comprehensive understanding and a documented basis for decisions.

### Examples of Privacy Risks in LLM Systems

LLMs present a wide range of privacy and data protection risks, influenced by use case, context, and risk factors. Both **providers and deployers are responsible for these risks**, with degree of responsibility depending on control over the system. Procurement teams play a vital role in bridging responsibilities. The document provides a consolidated summary of 11 common privacy risks:

1. **Insufficient protection of personal data** leading to data breaches.
2. **Misclassifying training data as anonymous** when it contains identifiable information.
3. **Unlawful processing of personal data in training sets** (without legal basis/consent).
4. **Unlawful processing of special categories of personal data** and criminal convictions data in training data.
5. **Possible adverse impact on data subjects** that could negatively impact fundamental rights (e.g., inaccurate/biased output).
6. **Not providing human intervention** for processing with legal or important effects on data subjects.
7. **Not granting data subjects their rights** (e.g., objection, rectification, erasure).
8. **Unlawful repurpose of personal data** (used for a different purpose than collected).
9. **Unlawful unlimited storage of personal data** (stored longer than necessary).
10. **Unlawful transfer of personal data** (processed in countries without adequate protection).
11. **Breach of the data minimization principle** (excessive data collection/processing).

### Broader Issues

Beyond direct privacy concerns, LLMs raise broader issues linked to GDPR principles.

- **Lawfulness, Transparency and Fairness**: LLMs' opacity challenges transparency and fairness, making it hard for users to understand/challenge outputs. Compliance requires clear, accessible info about processing, especially automated decision-making. Developers must monitor outputs, address biases, and provide understandable information.
- **Copyright**: LLMs trained on web-scraped data may include copyrighted materials, raising IP concerns if outputs replicate protected content.
- **Overreliance & Manipulation**: Overreliance can reduce user autonomy (tailored recommendations, financial/healthcare advice without oversight). LLMs can also create fake content (deepfakes) for misinformation/manipulation. Mitigations include human oversight, digital literacy promotion, and labeling AI-generated content.

## Risk Estimation & Evaluation

### From Identification to Evaluation

After identifying risks, the next steps are **estimation and evaluation**. This involves **classifying and prioritizing risks based on their probability and severity**. The actual risk level depends on the use case, operational context, monitoring, and affected stakeholders. **Stakeholder collaboration** is vital given the multidisciplinary nature of AI. An **ethical matrix** can identify impacted stakeholders.

Risk is generally expressed as: **Risk = Probability x Severity**. This highlights that risk is determined by the **probability of an event occurring** combined with the **potential impact or severity** of the resulting harm. The GDPR (Recital 75) defines risk as potential harm to rights and freedoms of natural persons, of varying probability and severity. The AI Act (Article 3) defines risk as "the combination of the probability of an occurrence of harm and the severity of that harm".

### Criteria to Establish the Probability of Risks

Probability is assessed using a **four-level risk classification matrix**: **Very High, High, Low, Unlikely**. Probability determination must be tailored to specific risks and use cases.

- **Criteria for Probability Levels**:
    1. **Frequency of Use**: How often the system is used (rarely, occasionally, frequently, continuously).
    2. **Exposure to High-Risk Scenarios**: Extent of operation in sensitive or high-stakes environments (not sensitive, moderately, high-stakes, highly sensitive/critical).
    3. **Historical Precedents**: Past instances of similar risks or failures (no similar, few similar, frequently occurred, frequent and significant).
    4. **Environmental Factors**: External, uncontrollable conditions (stable, occasionally affect, often impact, severely affect).
    5. **System Robustness**: Resistance to failure or unintended behavior (highly robust, moderately robust, some robustness, lacks robustness).
    6. **Data Quality and Integrity**: Reliance on accurate, unbiased, complete data (highly accurate, mostly accurate, partially accurate, significantly inaccurate).
    7. **Human Oversight and Expertise**: Human operators' skills and decision-making (highly trained/effective, moderately trained/effective, undertrained/inconsistent, untrained/ineffective).
- **Calculation**: Assign a score (1-4) per criterion. Calculate **Aggregate Probability Score** by simple or weighted average. Map the aggregate score to the probability level: 1.0-1.5 (Unlikely), 1.6-2.5 (Low), 2.6-3.5 (High), 3.6-4.0 (Very High).

### Criteria to Establish the Severity of Risks

Severity is also assessed using a **four-level risk classification matrix**: **Very Significant (Catastrophic Harm), Significant (Critical Harm), Limited (Serious Harm), Very Limited (Moderate or Minor Harm)**.

- **Criteria for Severity Levels**:
    1. **Nature of the fundamental right and Legal limitation alignment**: Evaluates the nature of the affected right (absolute or limited) and alignment with lawful restrictions. **This criterion is a "stopper"**; if assessed at Level 4, overall severity is Level 4.
    2. **Nature of personal data**: Sensitivity of data processed (non-sensitive, moderately sensitive, highly sensitive, most sensitive/special category). **This criterion is a "stopper"**.
    3. **Category of Data Subject**: Vulnerability of individuals (not vulnerable, potentially vulnerable, sensitive roles, highly vulnerable). **This criterion is a "stopper"**.
    4. **Purpose of Processing**: Legitimacy, necessity, and proportionality of the purpose (legitimate/proportionate, moderate risks, questionable proportionality, unlawful/disproportional). **This criterion is a "stopper"**.
    5. **Scale of Impact (Societal, Group, Individual) & Number of Data Subjects Affected**: Breadth of infringement and number of affected individuals (small localized, specific groups, multiple groups, widespread). **This criterion is a "stopper"**.
    6. **Contextual and Domain Sensitivity**: How context/domain intensifies severity (does not amplify, moderately amplifies, significantly amplifies, profoundly amplifies).
    7. **Reversibility, recovery, degree of remediability**: Difficulty/feasibility of reversing harm and time for recovery (fully reversible, reversible with moderate effort, difficult to reverse, irreversible). **This criterion is a "stopper"**.
    8. **Duration and Persistence of Harm**: Length of time and persistence of adverse effects (minimal, brief, considerable, permanent/indefinite). **This criterion is a "stopper"**.
    9. **Velocity to materialise**: Speed at which risk materializes (gradually, moderate pace, suddenly, rapidly).
    10. **Transparency and mechanisms for Accountability**: Degree of system transparency and accountability mechanisms (highly transparent, lacks some, lacks transparency/weak, entirely opaque/no mechanisms).
    11. **Ripple and Cascading Effects**: Extent of additional harms triggered across systems/domains (no cascading, minimal, notable, severe).
- **Calculation**: Similar to probability, but with "stoppers" for criteria 1-5, 7, and 8. Map aggregate score to severity level: 1.0-1.5 (Very Limited), 1.6-2.5 (Limited), 2.6-3.5 (Significant), 3.6-4.0 (Very Significant).

### Risk Evaluation: Classification of Risks

Assessing probability and severity determines the overall risk level. A **matrix (Probability vs. Severity)** is used to classify risks into **Very High, High, Medium, or Low**. Best practices suggest prioritizing **mitigation of very high and high-level risks**.

### Risk Acceptance Criteria

These criteria determine whether a risk is acceptable or needs treatment, reflecting an organization's willingness and capacity to bear risks within legal and operational limits. They must align with GDPR and AI Act requirements. Justifying these decisions is critical for accountability.

# Data Protection and Privacy Risk Control

## Risk Treatment Criteria

Risk treatment involves strategies to mitigate identified risks. The choice of treatment (mitigate, transfer, avoid, accept) is context-specific, guided by a **feasibility analysis** considering type of risk, available measures, benefits vs. costs, impact on intended purpose, user expectations, and trade-off analysis. Decisions must be justified and documented.

- **Mitigate**: Implement measures to reduce probability or severity.
- **Transfer**: Shift responsibility (e.g., insurance, outsourcing).
- **Avoid**: Eliminate the risk entirely by addressing its root cause.
- **Accept**: Take no action, as risk falls within acceptable limits. A **dynamic risk register** containing durable, accessible, and updated risk records is important.

## Example of Mitigation Measures Related to Risks of LLM Systems

The document provides detailed examples of mitigation measures for the 11 identified privacy risks, applicable to both providers and deployers. Common themes include:

- **Robust security**: **Secure APIs**, encryption (in transit and at rest), strong access control, anonymization/pseudonymization, regular security audits/penetration testing, incident response plans, and **Defense in Depth** (layering multiple mitigations). This also includes measures against memorization, insider threats, supply chain attacks, and specific LLM security threats like membership inference, model inversion, and poisoning attacks.
- **Data quality and lawful processing**: Verifying that training data is **lawfully collected and processed**, excluding unauthorized content (hate speech, fake news) and unnecessary personal data. Implementing robust testing to ensure data is truly anonymous and cannot be re-identified through attacks. For web scraping, adhering to legitimate interest criteria, necessity, and balancing interests (GDPR Article 6(1)(f)).
- **Transparency and user rights**: Implementing clear user guidance, privacy policies, disclaimers on AI-generated content, and mechanisms for users to exercise GDPR rights (objection, rectification, erasure). This includes exploring **machine unlearning techniques** to remove data influence from trained models upon request.
- **Human oversight and accountability**: Requiring human review for critical decisions, especially those with legal or significant consequences for individuals. Defining clear escalation procedures and training staff. Ensuring data usage aligns with original, specific purposes, avoiding overly broad purposes.
- **Data minimization and retention**: Regularly reviewing and eliminating unnecessary data collection, automating deletion, applying Privacy by Design principles, and educating users on providing only essential data. Establishing clear retention rules for stored input/output data.
- **Third-party management**: Establishing robust data-sharing agreements, anonymizing/minimizing shared data, and regularly auditing third-party data protection practices and compliance with cross-border transfer rules.

# Continuous Risk Management

## Residual Risk Evaluation

**Residual risks** are those that persist after mitigation measures have been implemented. Evaluating them assesses the effectiveness of safeguards and potential impact. Residual risk analysis reevaluates probability and severity, considering prior evaluations, mitigation effectiveness, post-deployment risks, and new risks from threat modeling. Organizations must decide if residual risks fall within **acceptable levels (risk tolerance)**. If unacceptable, further mitigation is required. Residual risk evaluation also informs the decision to release a system into production.

## Review & Monitor

An effective risk management strategy involves continuous review and monitoring.

### Risk Management Process Review

Reviewing the risk management process ensures planned activities are executed and controls are effective. This determines if planned controls were implemented, emerging risks addressed, and the plan aligns with goals/regulations.

### Document Risk Register

A **risk register** is a central repository for identified risks, details, ownership, evaluation results, thresholds, and mitigation measures. It supports regulatory compliance (GDPR, AI Act), facilitates audits, and enables informed decision-making.

### Continuous Monitoring

**Ongoing monitoring** is essential after mitigation to assess effectiveness and identify emerging risks. **Post-market monitoring** identifies new risks or changes in the operational environment, involving systematic data collection and analysis compliant with GDPR. Monitoring relies on **model testing and evaluation, red teaming, field testing, and long-term impact assessment**. Quantitative metrics serve as early warning signals, but qualitative human review is crucial for broader sociotechnical implications.

### Incident Response Mechanism

Effective risk management includes **incident response mechanisms** for timely and appropriate responses to alerts and warnings from monitoring/evaluations.

## Iterative Risk Management

Effective LLM risk management must adopt an **iterative approach** throughout the system lifecycle (design, development, deployment, monitoring, decommissioning). Risks evolve, requiring regular evaluation and adjustment. **Human oversight combined with automated measures** is critical due to complexity and scale. Tools like **LLMOps (LLM Operations)** and **LLMSecOps (LLM Security Operations)** automate and integrate risk management aspects, enhancing tracking, mitigation, and overall governance. The risk management process is cyclical, with outputs from AI lifecycle phases feeding into risk assessment, control, and monitoring, ensuring continuous improvement and adaptation.

**Conclusion** Privacy and data protection are ongoing commitments. While the provided framework guides risk management, **every organization must customize its approach** to address the specific nuances of their LLM-based use cases.