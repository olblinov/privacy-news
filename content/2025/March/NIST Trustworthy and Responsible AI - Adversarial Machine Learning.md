---
title: NIST Trustworthy and Responsible AI - Adversarial Machine Learning
tags:
  - nist
  - ai
  - methodology
links:
  - https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.100-2e2025.pdf
date: 2025-03-06
---
**Adversarial Machine Learning (AML)** AML is concerned with studying **attacks against ML systems that exploit their statistical, data-based nature**. These challenges affect various phases of ML operations, such as **adversarial manipulation of training data, adversarial inputs affecting system performance, and malicious manipulations or interactions with models to exfiltrate sensitive information**. Such attacks have been demonstrated in real-world conditions with increasing sophistication and impact. The field also involves designing **ML algorithms and systems capable of withstanding these security and privacy challenges**, a property often referred to as **robustness**.

The report **differentiates between predictive and generative AI systems** and their respective attacks. It considers AI system components like data, the model, and processes for training, testing, and deployment, as well as broader software and system contexts. The attacks are classified based on:

- **AI system type**.
- **Stage of the ML life cycle process** where the attack occurs.
- **Attacker's goals and objectives** (system properties to violate).
- **Attacker's capabilities and access**.
- **Attacker's knowledge** of the learning process.

The report adopts concepts of **security, resilience, and robustness** from the NIST AI Risk Management Framework, gauging them by **risk**, which measures how threatened an entity is by an event and the severity of its outcome. However, it does not recommend risk tolerance levels due to their contextual nature. The spectrum of effective attacks is broad and rapidly evolving, covering all ML lifecycle phases, from design to deployment. It acknowledges that AI system components can also be affected by design flaws causing failures outside adversarial use, like inaccuracy, but these are **outside the scope of AML literature**.

In addition to defining a taxonomy, the report provides **methods for mitigating and managing attack consequences** and highlights **limitations of widely used mitigation techniques**. It aims to **inform other standards and future practice guides** by establishing a common language for the rapidly developing AML landscape. The taxonomy and terminology are a starting point, not exhaustive.

**Predictive AI (PredAI) Taxonomy** PredAI systems are primarily used for industrial applications. The taxonomy of attacks on PredAI systems is based on attacker goals, objectives, capabilities, and knowledge.

### Stages of Learning for PredAI

Predictive machine learning involves two main stages:

- **Training Stage**: A model is learned. Attackers might **control training data, their labels, model parameters, or ML algorithm code**, leading to poisoning attacks.
- **Deployment Stage**: The trained model is used on new, unlabeled data for predictions. Here, adversaries can mount **evasion attacks** to create integrity violations or **privacy attacks** to infer sensitive information.

Other learning paradigms include **unsupervised learning, semi-supervised learning, reinforcement learning, federated learning, and ensemble learning**. Most PredAI models are **discriminative** (e.g., logistic regression, SVMs, CNNs), though generative AI models can also be used for predictive tasks like sentiment analysis.

- **Training-time attacks**: **Poisoning attacks** occur during ML training. **Data poisoning** involves adversaries controlling a subset of training data, while **model poisoning** involves controlling the model and its parameters.
- **Deployment-time attacks**: Attacks mounted against deployed models. **Evasion attacks** modify testing samples to create **adversarial examples** that alter model predictions. **Availability attacks** and **privacy attacks** (e.g., membership inference, data reconstruction) can also be mounted with query access to a deployed model.

### Attacker Goals and Objectives for PredAI

Attacker objectives are classified into three security violation types:

- **Availability breakdown** [NISTAML.01]: A deliberate interference to **disrupt timely and reliable access to PredAI system services**. This can occur via data poisoning, model poisoning, or **energy-latency attacks**. Energy-latency attacks, which only need black-box access, have been developed for neural networks in computer vision and NLP.
- **Integrity violation** [NISTAML.02]: Deliberate interference to **force a PredAI system to misperform** and produce predictions aligning with the adversary's objective. This can be caused by deployment-time **evasion attacks** (modifying testing samples) or training-time **poisoning attacks**. Poisoning attacks for integrity include **targeted poisoning, backdoor poisoning, and model poisoning**. Backdoor attacks are unique in requiring both training and testing data control.
- **Privacy compromise** [NISTAML.03]: Causes the **unintended leakage of restricted or proprietary information** from a PredAI system, including training data details, weights, or architecture. This differs from general "confidentiality" by focusing on model-related privacy violations. Attackers may seek information about training data (**data privacy attacks**, e.g., **data reconstruction, membership-inference attacks, training data extraction, attribute inference attacks, property inference**) or the ML model (**model privacy attacks**, e.g., **model extraction**). These attacks typically occur at deployment time.

### Attacker Capabilities for PredAI

Adversaries can leverage six types of capabilities:

- **Training Data Control**: Inserting or modifying training samples, used in data poisoning attacks.
- **Model Control**: Controlling model parameters, such as by injecting Trojan triggers or sending malicious local model updates in federated learning.
- **Testing Data Control**: Adding perturbations to testing samples at deployment time (e.g., evasion attacks, backdoor poisoning).
- **Label Limit**: Restricting adversarial control over training sample labels; clean-label poisoning attacks assume no label control.
- **Source Code Control**: Modifying the ML algorithm's source code (e.g., random number generator, third-party libraries).
- **Query Access**: Submitting queries to the model and receiving predictions (e.g., black-box evasion, energy-latency attacks, privacy attacks).

Access to data, source code, or model parameters can also enable stronger white-box attacks.

### Attacker Knowledge

Attacks are classified by attacker knowledge about the ML system:

- **White-box attacks**: Assumes **full knowledge** (training data, model architecture, hyperparameters). Used to test worst-case vulnerabilities.
- **Black-box attacks**: Assumes **minimal or no knowledge**, often only query access to the model. These are the most practical.
- **Gray-box attacks**: Adversarial knowledge falls between black-box and white-box, such as knowing model architecture but not parameters, or having access to identically distributed data.

### Data Modality

The attack taxonomy is independent of data modality. Common modalities in AML include:

- **Image**: Continuous domain, allowing gradient-based optimization.
- **Text**: Discrete domain, requiring preservation of text semantics.
- **Audio**: Speech-to-text systems and audio signals.
- **Video**: Video comprehension models.
- **Cybersecurity**: Network-level, host-level, or program-level data (e.g., malware classification, spam detection). This modality faces challenges with low false negative/positive rates, making models susceptible to adversarial attacks.
- **Tabular data**: Attacks against ML models on tabular data (e.g., healthcare, finance).

The use of **multimodal models** is increasing, but their resilience to attacks (especially single-modality perturbations) is an open challenge.

### Evasion Attacks and Mitigations [NISTAML.022]

Evasion attacks aim to **generate adversarial examples**, which are minimally perturbed samples that cause misclassification. Early instances date back to 1988 for linear classifiers, with significant advances shown in 2013 for deep neural networks.

- **White-Box Evasion Attacks**: Attacker has full knowledge of model architecture and parameters. Challenges include finding optimal perturbations. Techniques include **optimization-based methods** (e.g., L-BFGS, FGSM, DeepFool, Carlini-Wagner, PGD), **universal evasion attacks** (input-agnostic perturbations), and **physically realizable attacks** (e.g., modifying eyeglasses or road signs). These attacks have been extended to audio, video, NLP (e.g., **ASCII-art attack**), and cybersecurity (e.g., FENCE framework, respecting application semantics).
- **Black-Box Evasion Attacks [NISTAML.025]**: Attacker has minimal or no knowledge, typically only query access. Techniques include **score-based attacks** (using confidence scores/logits, e.g., zeroth-order optimization) and **decision-based attacks** (using only final predicted labels, e.g., Boundary Attack, HopSkipJumpAttack, OPT, Sign-OPT). The main challenge is reducing query count.
- **Transferability of Attacks**: Attacks crafted on one ML model can be transferred to another. This occurs because different models learn intersecting decision boundaries, and factors like intrinsic adversarial vulnerability and surrogate model complexity contribute to transferability.
- **Evasion attacks in the real world**: Documented cases include attacks on face recognition systems (e.g., ID.me fraud, using masks, deepfakes, wigs), commercial phishing webpage detectors (using simple methods like image cropping, masking, blurring), and malware classification services (e.g., against Cylance's AI malware detection model, ProofPoint's email protection).
- **Mitigations**: Mitigating evasion attacks is challenging, as many proposed defenses have been bypassed. Rigorous evaluation against strong adaptive attacks is crucial. Promising directions include:
    1. **Adversarial training**: Augmenting training data with adversarial examples iteratively. It improves semantic meaning but often reduces accuracy on clean data and is computationally expensive.
    2. **Randomized smoothing**: Transforms classifiers into certifiable robust smooth classifiers by introducing Gaussian noise. Provides provable robustness but may decrease accuracy and only certifies a subset of samples.
    3. **Formal verification**: Uses formal methods (e.g., Reluplex, AI2) to certify neural network robustness. Offers security guarantees but is limited by scalability, computational cost, and algebraic operations supported. All these mitigations involve **trade-offs between robustness and accuracy** and incur additional computational costs.

### Poisoning Attacks and Mitigations

Poisoning attacks are **adversarial attacks during the training stage** of ML algorithms. They can cause **availability or integrity violations**. They utilize various adversarial capabilities (data poisoning, model poisoning, label control, source code control, test data control).

- **Availability Poisoning [NISTAML.013]**: Indiscriminately degrades ML model performance to prevent its use. Examples include attacks against worm signature generation and spam classifiers. **Label flipping** (incorrect labels) is a simple black-box strategy. Clean-label poisoning, where adversaries control only training examples, has also been developed for neural networks and unsupervised learning.
    - **Mitigations**: Often detectable by monitoring performance metrics (e.g., precision, accuracy). Proactive prevention during training is preferred:
        - **Training data sanitization**: Removing poisoned samples by detecting them as outliers or using clustering methods.
        - **Robust training**: Modifying ML training algorithms for robustness, such as ensemble models or trimmed loss functions.
- **Targeted Poisoning [NISTAML.024]**: Induces a change in the ML model's prediction on a small number of specific samples. Most studied in **clean-label settings** (no control over labels). Techniques involve leveraging influence functions, modifying samples in feature space, and optimization procedures like gradient alignment (e.g., Witches' Brew). Subpopulation poisoning attacks target an entire subpopulation.
    - **Mitigations**: Notoriously challenging. Protection of training data via access controls, data sanitization, and dataset provenance is recommended. Differential privacy (DP) can be a defense but may lower accuracy.
- **Backdoor Poisoning [NISTAML.021, NISTAML.023]**: Causes the model to misclassify samples containing a specific **backdoor pattern** or trigger. First introduced by BadNets in 2017 for image classifiers. **Clean-label backdoor attacks** (no label change) are more realistic but require more poisoned samples. More sophisticated attacks include latent backdoors, dynamic triggers (BaN), functional triggers, steganography, natural reflection, and architectural backdoors. Effective in audio, NLP (semantic-preserving backdoors, hidden backdoors), and cybersecurity (e.g., against malware classifiers).
    - **Mitigations**: A vast area of research:
        - **Training data sanitization**: Outlier detection in latent feature space or activation clustering. Less effective against stealthy attacks.
        - **Trigger reconstruction**: Reconstructing the backdoor trigger (e.g., NeuralCleanse).
        - **Model inspection and sanitization**: Analyzing trained models before deployment (e.g., NeuronInspect, DeepInspect, MNTD). Sanitization can involve pruning, retraining, or fine-tuning.
        - **Certified defenses**: Provide provable robustness (e.g., BagFlip, Deep Partition Aggregation).
    - **Limitations**: Many mitigations are designed for computer vision with fixed triggers and are ineffective against clean-label or semantic/functional backdoors. High computational complexity for meta classifiers is also a limitation. Other approaches include PCA-based mitigation for anomaly detection and poison forensics for root cause analysis.
- **Model Poisoning [NISTAML.011, NISTAML.026]**: Directly modifies the trained ML model to inject malicious functionality. In centralized learning, TrojNN can reverse engineer and re-embed triggers. Most prevalent in **federated learning** where compromised clients send malicious updates to the global model, causing availability or integrity violations. Backdoor model poisoning introduces triggers via client updates.
    - **Supply chain model poisoning [NISTAML.05, NISTAML.051]**: Occurs when models or components provided by suppliers are poisoned. Dropout Attack is an example manipulating randomness in neural network training.
    - **Mitigations**: Byzantine-resilient aggregation rules in federated learning aim to exclude malicious updates. Gradient clipping and differential privacy can mitigate to some extent but may decrease accuracy. Mitigating supply-chain attacks, especially those controlling source code, remains challenging, and program verification is difficult due to ML's intrinsic randomness.
- **Poisoning Attacks in the Real World**: Difficult to mount due to requiring adversarial control over training. Examples include **Tay.AI chatbot poisoning** (real-time updates from user interactions), **Gmail spam filter compromise**, and **VirusTotal malware classification incidents** (continuous updates based on new samples).

### Privacy Attacks and Mitigations

Privacy attacks cause **unintended leakage of restricted or proprietary information** from a PredAI system.

- **Data Reconstruction [NISTAML.032]**: Aims to reverse-engineer private information about an individual user record or sensitive input data from access to a trained model. Early attacks required exponential queries, now polynomial. In ML classifiers, **model inversion attacks** reconstruct class representatives or training data from model parameters. Attribute inference is related, extracting sensitive attributes. This ability is linked to neural networks' tendency to **memorize training data**.
- **Membership Inference [NISTAML.033]**: Determines whether a particular record was included in the training dataset. Has privacy implications, especially for sensitive data. Can be performed in white-box or black-box settings (query access). Techniques include **loss-based attacks** (e.g., Yeom et al.) and **shadow models** (training a meta-classifier, e.g., Shokri et al.). LiRA attack provides good performance by training fewer shadow models. Public libraries like TensorFlow Privacy and ML Privacy Meter offer implementations.
- **Property Inference [NISTAML.034]**: Extracts **global information about a training dataset** (e.g., fraction of sensitive attributes). Demonstrated for various models like Hidden Markov Models, SVMs, neural networks, and GANs. Poisoning the property of interest can enhance attack effectiveness.
- **Model Extraction [NISTAML.031]**: Extracts information about a model's architecture and parameters in MLaaS scenarios. Exact extraction is impossible, but **functionally equivalent models can be reconstructed**. Techniques include **direct extraction** (algebraic computation of weights), **learning methods** (active learning, reinforcement learning), and **side channel information** (e.g., electromagnetic, Rowhammer attacks). Preventing model extraction mitigates downstream white-box or gray-box attacks.
- **Mitigations**:
    - **Differential Privacy (DP)**: A rigorous privacy definition bounding what an attacker can learn about individual records from algorithm output. Provides mitigation against data reconstruction and membership inference attacks. However, DP does not guarantee against model extraction, and its effectiveness against property inference is limited.
    - **Challenges with DP**: Setting privacy parameters involves a trade-off between privacy and utility (accuracy). **Empirical privacy auditing** (e.g., using canaries) is recommended to complement theoretical analysis and estimate actual privacy guarantees.
    - **Other techniques for model extraction**: Limiting user queries, detecting suspicious queries, or robust architectures. These can be circumvented by motivated attackers.
    - **Machine Unlearning**: Allows users to request data removal from trained ML models, either exactly (retraining) or approximately (updating parameters). Offers trade-offs between computation and privacy.

**Generative AI (GenAI) Taxonomy** GenAI develops models that can generate content similar to their training data. This includes GANs, GPT, and Diffusion Models, often with multimodal capabilities. While many PredAI attacks apply, novel AML attacks are specific to GenAI.

### GenAI Stages of Learning

The GenAI development pipeline involves multiple organizations and actors.

- **Foundation models**: Pre-trained on large-scale data (often scraped from internet, making them vulnerable to **data poisoning**) using self-supervised learning, then fine-tuned for specific applications.
- **Alignment techniques**: Supervised fine-tuning (SFT) and reinforcement learning from human feedback (RLHF) align base models with human preferences and curb undesirable outputs. Attackers can target these interventions to re-enable harmful capabilities.
- **Model availability**: Developers can release model weights or offer API access, impacting attacker capabilities like **Model Control**.
- **Application context**: Integration into applications like Retrieval-Augmented Generation (**RAG**) or agents creates new attack vectors and risks (e.g., exposing application-specific data).
- **Training-time attacks**: Target foundation model pre-training and fine-tuning. **Data poisoning** is a risk due to vast, diverse data sources. **Model poisoning** can occur from maliciously constructed models trained or fine-tuned by third parties.
- **Inference-time attacks**: Occur during deployment. Vulnerabilities arise from:
    1. **In-context instructions and system prompts [NISTAML.035]**: **Prompt injection** overrides system instructions by concatenating untrusted user input, causing unintended behavior (e.g., **jailbreaks**). **Prompt extraction** attacks steal system instructions.
    2. **Runtime data ingestion from third-party sources**: In RAG and chatbot applications, context is populated from external data, enabling **indirect prompt injection** attacks by manipulating these sources.
    3. **Output handling**: Model output used dynamically can lead to availability, integrity, or privacy violations if attackers induce unaccounted-for behavior.
    4. **Agents**: LLM-based agents iteratively process LLM output and use tools, making them vulnerable to hijacking for adversary-specified actions.

### Attacker Goals and Objectives for GenAI

Similar to PredAI, but with an additional category:

- **Availability breakdown [NISTAML.01]**: Disrupting timely access to GenAI outputs or functionality.
- **Integrity violation [NISTAML.02]**: Forcing GenAI systems to misperform and produce output aligning with the attacker's objective.
- **Privacy compromise [NISTAML.03]**: Gaining unauthorized access to restricted or proprietary information (training data, weights, architecture, RAG knowledge bases).
- **Misuse enablement [NISTAML.04]**: Deliberately circumventing technical restrictions imposed by the GenAI system owner (e.g., safety alignment via system prompts or RLHF).

### Attacker Capabilities for GenAI

- **Training Data Control**: Inserting or modifying training samples for **data poisoning**.
- **Query Access**: Submitting adversarially crafted queries to elicit desired behavior or extract information (e.g., **prompt injection, prompt extraction, model extraction**).
- **Resource Control**: Modifying external resources ingested by the model at runtime for **indirect prompt injection**.
- **Model Control**: Modifying model parameters via fine-tuning APIs or open weights, used in **model poisoning** and **fine-tuning circumvention** (removing safety interventions).
- **Attacker Knowledge**: White-box, black-box, and gray-box attacks also apply to GenAI.

### Supply Chain Attacks and Mitigations [NISTAML.05]

AI inherits software supply chain vulnerabilities and introduces new dependencies (data collection, third-party models, plugins).

- **Data Poisoning Attacks**: GenAI models are trained on vast datasets, often from diverse public sources, creating large attack surfaces. Attackers can inject malicious content into data sources, even affecting instruction tuning and RLHF. This can lead to **backdoor poisoning** (e.g., universal jailbreaks) or **targeted poisoning** (e.g., suggesting insecure code).
- **Model Poisoning Attacks [NISTAML.051]**: Occur when developers use third-party foundation models that are maliciously designed. Backdoors in pre-trained models can persist even after fine-tuning or safety training.
- **Mitigations**: Overlap with PredAI poisoning mitigations. Includes verifying web downloads with cryptographic hashes for integrity, and data filtering (though challenging for large corpuses). For model vulnerabilities, methods from **mechanistic interpretability** can identify backdoor features, and applications can be designed to treat models as untrusted components.

### Direct Prompting Attacks and Mitigations [NISTAML.018]

These attacks occur when the **attacker is the primary user** and interacts with the model via query access. **Direct prompt injection** specifically exploits concatenation of untrusted user input with higher-trust instructions.

- **Goals**: Enable misuse (e.g., **jailbreaks** to circumvent output restrictions), invade privacy (e.g., extract system prompts or sensitive in-context information), or violate integrity (e.g., manipulate tool usage, API calls for agents).
- **Attack Techniques**:
    - **Optimization-based attacks**: Design objective functions to learn adversarial inputs for desired behavior (e.g., force affirmative starts). **Universal adversarial triggers** find input-agnostic prefixes/suffixes.
    - **Manual methods for jailbreaking**: Competing objectives (e.g., prefix injection, refusal suppression, style injection, role-play like "DAN") and mismatched generalization (e.g., special encoding, character/word transformations, prompt-level transformations).
    - **Automated model-based red teaming**: Uses an attacker model, target model, and judge to generate jailbreaks (e.g., Crescendo attack).
- **Information Extraction [NISTAML.038]**: Attackers aim to extract PII from training data, sensitive information from RAG databases, or system prompts.
    - **Leaking sensitive training data**: **Training data extraction** demonstrated by inserting canaries. LLMs can verbatim memorize sensitive information. Larger models are more susceptible.
    - **Prompt and context stealing**: Prompts are commercial secrets; attacks like PromptStealer reconstruct prompts from text-to-image models. Fixed attack queries can extract system prompts. In RAG, sensitive info from databases or documents can be extracted.
    - **Model extraction**: Extracting information about model architecture and parameters from black-box LLMs.
- **Mitigations**: Employed throughout the deployment lifecycle:
    - **During pre-training and post-training**: Safety training, adversarial training, methods to make jailbreaks harder.
    - **During evaluation**: Automated vulnerability assessments (e.g., JailbreakBench), targeted expert red teaming, bug bounties. Continuous evaluation is needed.
    - **During deployment**:
        - **Prompt instruction and formatting**: Separating system instructions from user prompts (e.g., XML tags).
        - **Detecting and terminating harmful interactions**: LLM-based detection systems. Vulnerable to attacks themselves.
        - **Prompt stealing detection**: Comparing model utterance to known prompt.
        - **Input modification**: Paraphrasing or retokenizing user input.
        - **Aggregating output from multiple prompts**: SmoothLLM uses randomized smoothing concept.
        - **Monitoring and response**: Logging user activity to identify and respond to attacks (e.g., banning users).
        - **Usage restrictions**: Limiting inference parameters or model query numbers.
    - **Indirect mitigations**: Designing systems assuming malicious output is possible. Includes:
        - **Training data sanitization**: Removing sensitive or toxic content.
        - **Unlearning**: Removing harmful knowledge post-training. Vulnerable to inversion attacks.
        - **Watermarking**: Tracing provenance and distinguishing AI-generated content. No universally effective watermarking technique exists.

### Indirect Prompt Injection Attacks and Mitigations [NISTAML.015]

Attackers leverage the data channel to affect system operations by manipulating resources with which the system interacts. Mounted by a third party, often harming the primary user.

- **Availability Attacks [NISTAML.016]**: Disrupting model availability for legitimate users.
    - **Attacker techniques**: Instructing time-consuming background tasks [NISTAML.017], inhibiting capabilities (e.g., blocking APIs), or disruptive output formatting (e.g., homoglyphs, empty output).
- **Integrity Attacks [NISTAML.027]**: Using malicious resources to prompt GenAI systems to generate content deviating from benign behavior. Attackers can cause incorrect summaries, attacker-specified information, or suppression of sources. Can hijack GenAI agents.
    - **Attacker techniques**: Similar to direct prompt injection jailbreaks, execution triggers (Neural Exec), knowledge base poisoning (PoisonedRAG, Phantom), injection hiding (non-visible portions, multi-stage, encoding), and self-propagating injections (worms).
- **Privacy Compromise**: Attackers compel models to leak information from restricted resources or user interactions.
    - **Attacker techniques**: **Compromising connected resources [NISTAML.039]** (e.g., forwarding emails, exfiltrating user-uploaded data) or **leaking information from user interactions [NISTAML.036]** (e.g., persuading users to reveal info and then leaking it).
- **Mitigations**: Include training techniques (fine-tuning task-specific models, hierarchical trust), detection schemes, input processing (filtering instructions, spotlighting, disregarding untrusted instructions). Many direct prompt injection defenses can be adapted. System designers may assume prompt injection is possible, using multiple LLMs with different permissions or well-defined interfaces.

### Security of Agents

LLM-based agents, which iteratively prompt models and use tools, are vulnerable to direct and indirect prompt injection. Because agents can take real-world actions, these attacks pose additional risks like arbitrary code execution or data exfiltration.

### Benchmarks for AML Vulnerabilities

Several public benchmarks exist: JailbreakBench, AdvBench, HarmBench, StrongREJECT, AgentHarm, Do-Not-Answer for jailbreaks; TrustLLM for trust dimensions; AgentDojo for agent vulnerabilities; and unlearning benchmarks. Open-source tools like Garak and PyRIT aid in identifying vulnerabilities.

**Key Challenges and Discussion**

### Key Challenges in AML

- **Trade-Offs Between the Attributes of Trustworthy AI**: Increasing accuracy often comes at the cost of adversarial robustness and fairness. It may not be possible to simultaneously maximize performance across all attributes. **Pareto optimality** can help in multi-objective optimization.
- **Theoretical Limitations on Adversarial Robustness**: Lack of theoretically secure ML algorithms means mitigation design is ad hoc. Detecting when a model is under attack is as difficult as robust classification. Impossibility results exist when in-distribution and out-of-distribution (OOD) data overlap. Formal methods offer security assurances but at high computational cost and lack scalability for large, rapidly changing AI models.
- **Evaluation**: Lack of reliable benchmarks makes results incomparable. New mitigations should be tested adversarially. Evaluations should simultaneously consider trade-offs between different attributes, using Pareto plots for comparison.

### Discussion

- **The Scale Challenge**: Large GenAI models require massive, diverse datasets, often from numerous uncontrolled sources. This creates a large attack surface for data poisoning. Mitigations include data/model sanitization, cryptographic techniques for provenance, and robust training. Applying these to very large models is a challenge.
- **Supply Chain Challenges**: AI inherits traditional software supply chain vulnerabilities but adds new ones (e.g., un-auditable model weights). Model poisoning can persist through safety training, leading to concerns about intentional exploits that are hard to detect. Relying on AI coding assistants can increase insecure code. Information-theoretically undetectable Trojans pose significant challenges for AI supply-chain risk management.
- **Multimodal Models**: While promising for performance, redundancy of information does not necessarily improve robustness against single-modality adversarial perturbations. Adversarial training becomes prohibitively expensive, and single-modality attacks can still be effective. Simultaneous attacks on multiple modalities suggest mitigations relying only on single-modality perturbations may not be robust.
- **Quantized Models**: Used for efficient deployment, but they inherit original vulnerabilities and introduce new weaknesses due to reduced computational precision, adversely affecting adversarial robustness. Monitoring their behavior is crucial, as quantization methods can produce harmful LLMs from benign full-precision counterparts.
- **Risk Management in Light of AML**: Organizations must make decisions about AI development and use, considering the diversity of attacks and limitations of mitigations. Red teaming is a structured testing process for adversarial risks. Theoretical limits on AML mitigations exist, implying that fully robust systems may be impossible without additional assumptions. However, pre-deployment testing can still foreclose many attack vectors.
- **AML and Other AI System Characteristics**: Managing AI system security requires combining AML mitigations with cybersecurity best practices. AML robustness is not a complete solution or a subset of other trustworthy AI characteristics (e.g., AI safety).