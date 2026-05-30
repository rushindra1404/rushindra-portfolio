export interface ArchiveCertificate {
  title: string;
  issuer: string;
  description: string;
  tags: string[];
  image: string;
  link: string;
}

export const ARCHIVE_CERTIFICATES: ArchiveCertificate[] = [
  {
    title: "Google AI Essentials",
    issuer: "Google",
    description: "Explored practical AI concepts, generative AI workflows, and modern applications of artificial intelligence in everyday tasks.",
    tags: ["Artificial Intelligence", "Generative AI", "AI Productivity"],
    image: "/certificates/Coursera Google AI Professional Certificate_page-0001.jpg",
    link: "/certificates/Coursera Google AI Professional Certificate.pdf"
  },
  {
    title: "Machine Learning with Python",
    issuer: "IBM",
    description: "Developed supervised and unsupervised machine learning models, covering regression, classification, clustering, and recommender systems.",
    tags: ["Machine Learning", "Python", "Scikit-Learn", "Data Science"],
    image: "/certificates/Coursera Machine Learning with python_pages-to-jpg-0001.jpg",
    link: "/certificates/Coursera Machine Learning with python.pdf"
  },
  {
    title: "Build Real World AI Applications with Gemini and Imagen",
    issuer: "Google Cloud",
    description: "Engineered scalable AI applications leveraging the Gemini multimodal API, Imagen, and Vertex AI suite.",
    tags: ["Gemini API", "Imagen", "Vertex AI", "Generative AI"],
    image: "/certificates/build-real-world-ai-applications-with-gemini-and-im.png",
    link: "/certificates/build-real-world-ai-applications-with-gemini-and-im.png"
  },
  {
    title: "Develop GenAI Apps with Gemini and Streamlit",
    issuer: "Google Cloud",
    description: "Designed interactive web interfaces integrated with Gemini models utilizing Streamlit dashboard and deployment workflows.",
    tags: ["Generative AI", "Streamlit", "Python", "Cloud Run"],
    image: "/certificates/develop-genai-apps-with-gemini-and-streamlit-skill- (2).png",
    link: "/certificates/develop-genai-apps-with-gemini-and-streamlit-skill- (2).png"
  },
  {
    title: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
    issuer: "Google Cloud",
    description: "Implemented RAG solutions for parsing rich documents, leveraging multimodal LLMs for intelligent question answering.",
    tags: ["Multimodal AI", "RAG", "Gemini", "Vertex AI"],
    image: "/certificates/inspect-rich-documents-with-gemini-multimodality-an.png",
    link: "/certificates/inspect-rich-documents-with-gemini-multimodality-an.png"
  },
  {
    title: "Manage Kubernetes in Google Cloud",
    issuer: "Google Cloud",
    description: "Orchestrated containerized microservices using Google Kubernetes Engine (GKE), configuring automatic scaling, load balancers, and network secure policies.",
    tags: ["Kubernetes", "GKE", "Docker", "DevOps"],
    image: "/certificates/manage-kubernetes-in-google-cloud-skill-badge.png",
    link: "/certificates/manage-kubernetes-in-google-cloud-skill-badge.png"
  },
  {
    title: "Prompt Design in Vertex AI",
    issuer: "Google Cloud",
    description: "Mastered few-shot, zero-shot, and system prompting instructions inside Vertex AI to improve LLM accuracy and task execution.",
    tags: ["Vertex AI", "Prompt Engineering", "LLMs", "Google Cloud"],
    image: "/certificates/prompt-design-in-vertex-ai-skill-badge.png",
    link: "/certificates/prompt-design-in-vertex-ai-skill-badge.png"
  },
  {
    title: "Alteryx Designer Core Certification",
    issuer: "Alteryx",
    description: "Certified proficiency in preparing, parsing, transforming, and parsing complex datasets using Alteryx Designer analytics workflows.",
    tags: ["Data Analytics", "ETL", "Workflow Automation", "Business Intelligence"],
    image: "/certificates/Alteryx_Designer_Core_Certification_Badge20260429-31-kcdnlb_page-0001.jpg",
    link: "/certificates/Alteryx_Designer_Core_Certification_Badge20260429-31-kcdnlb.pdf"
  },
  {
    title: "Generative AI for Brainstorming & Planning",
    issuer: "Vanderbilt University",
    description: "Mastered model prompting strategies to generate creative ideas, outline strategies, and structure project plans.",
    tags: ["Generative AI", "Vanderbilt University", "Prompt Design"],
    image: "/certificates/Coursera AI for Brainstorming and planning_page-0001.jpg",
    link: "/certificates/Coursera AI for Brainstorming and planning.pdf"
  },
  {
    title: "Generative AI for Content Creation",
    issuer: "Vanderbilt University",
    description: "Applied generative AI workflows to compose articles, create media layouts, and draft technical guides.",
    tags: ["Generative AI", "Content Creation", "Copywriting"],
    image: "/certificates/Coursera AI for Content Creation.pdf", // will be handled with fallback PDF/icon overlay in React UI
    link: "/certificates/Coursera AI for Content Creation.pdf"
  },
  {
    title: "Generative AI for Data Analytics",
    issuer: "Vanderbilt University",
    description: "Leveraged large language models and analytical scripts to parse data tables, extract trends, and compile automated insight reports.",
    tags: ["AI Analytics", "Data Analysis", "Prompt Engineering"],
    image: "/certificates/Coursera AI for Data Analytics.pdf",
    link: "/certificates/Coursera AI for Data Analytics.pdf"
  },
  {
    title: "Generative AI for Research & Insights",
    issuer: "Vanderbilt University",
    description: "Constructed deep research queries and prompt scripts to review papers, outline complex themes, and extract strategic insights.",
    tags: ["AI Research", "Data Synthesis", "Information Retrieval"],
    image: "/certificates/Coursera AI for Research and Insights.pdf",
    link: "/certificates/Coursera AI for Research and Insights.pdf"
  },
  {
    title: "Generative AI for Writing & Communication",
    issuer: "Vanderbilt University",
    description: "Utilized prompt styling and context tuning to write professional emails, edit technical summaries, and refine communication tone.",
    tags: ["Prompt Engineering", "Communication", "Technical Writing"],
    image: "/certificates/Coursera AI for writing and communication.pdf",
    link: "/certificates/Coursera AI for writing and communication.pdf"
  },
  {
    title: "Deep Learning & Neural Networks with Keras",
    issuer: "IBM",
    description: "Built, trained, and optimized multi-layer neural networks using Keras and TensorFlow backends for classification and predictive workloads.",
    tags: ["Deep Learning", "Keras", "TensorFlow", "Neural Networks"],
    image: "/certificates/Coursera introduction to deep learning and neural network with keras.pdf",
    link: "/certificates/Coursera introduction to deep learning and neural network with keras.pdf"
  },
  {
    title: "Software Engineering Virtual Experience",
    issuer: "JPMorgan Chase & Co.",
    description: "Configured local server scripts, modified financial data dashboards using React, and added real-time visualization modules with Python Perspective.",
    tags: ["React", "TypeScript", "Python", "Perspective Dashboard"],
    image: "/certificates/JP Morgan Software Engineering Job Simulation.pdf",
    link: "/certificates/JP Morgan Software Engineering Job Simulation.pdf"
  },
  {
    title: "Data Analytics Virtual Experience",
    issuer: "Deloitte",
    description: "Conducted forensic data cleaning, formulated dashboard visualizations, and presented predictive insights to address client growth problems.",
    tags: ["Data Analytics", "SQL", "Tableau", "Consulting Simulation"],
    image: "/certificates/deloitte data analytics.pdf",
    link: "/certificates/deloitte data analytics.pdf"
  },
  {
    title: "GenAI-Powered Data Analytics Job Simulation",
    issuer: "Tata Group",
    description: "Created executive data analytics dashboards and compiled strategic presentation outlines using advanced prompt automation.",
    tags: ["Generative AI", "Data Analytics", "Business Intelligence"],
    image: "/certificates/tata gen ai powered data_page-0001.jpg",
    link: "/certificates/tata gen ai powered data.pdf"
  },
  {
    title: "Solutions Architect Virtual Experience",
    issuer: "Amazon Web Services",
    description: "Designed secure, resilient cloud solutions using Amazon EC2, RDS, VPCs, IAM policies, and S3 buckets according to architectural standards.",
    tags: ["AWS", "Cloud Architecture", "Systems Security", "IAM Policies"],
    image: "/certificates/aws solution architecture job simulation_page-0001.jpg",
    link: "/certificates/aws solution architecture job simulation.pdf"
  },
  {
    title: "AI and Data Science Certificate",
    issuer: "HP",
    description: "Explored advanced machine learning and deep learning applications, statistical methodologies, and core data workflows.",
    tags: ["Machine Learning", "Data Science", "AI Applications"],
    image: "/certificates/hp ai certificate_page-0001.png.jpg",
    link: "/certificates/hp ai certificate_page-0001.png.jpg"
  },
  {
    title: "Data Science Certificate",
    issuer: "HP",
    description: "Built statistical pipelines and evaluated predictive analytics models across datasets using standard data science toolkits.",
    tags: ["Data Science", "Statistics", "Data Pipelines"],
    image: "/certificates/hp data science certificate_page-0001.jpg",
    link: "/certificates/hp data science certificate_page-0001.jpg"
  },
  {
    title: "Cybersecurity Awareness Certificate",
    issuer: "HP",
    description: "Comprehensive training on mitigating digital security threats, securing databases, network protection, and modern data encryption standards.",
    tags: ["Cybersecurity", "Network Security", "Threat Prevention"],
    image: "/certificates/hp cyber security awareness_page-0001.jpg",
    link: "/certificates/hp cyber security awareness_page-0001.jpg"
  },
  {
    title: "Fundamentals in AI Certificate",
    issuer: "Microsoft",
    description: "Explored the baseline concepts of artificial intelligence, Azure cognitive services, machine learning workloads, and natural language processing.",
    tags: ["Azure AI", "Machine Learning", "Microsoft Fundamentals"],
    image: "/certificates/microsoft fundamentals in AI certificate_page-0001.jpg",
    link: "/certificates/microsoft fundamentals in AI certificate_page-0001.jpg"
  },
  {
    title: "Introduction to Machine Learning Certificate",
    issuer: "Microsoft",
    description: "Formulated regression and clustering models, evaluating model accuracy and configuring training pipelines.",
    tags: ["Machine Learning", "Azure ML", "Python", "Data Mining"],
    image: "/certificates/microsoft introduction to machine learning certificate_page-0001.jpg",
    link: "/certificates/microsoft introduction to machine learning certificate_page-0001.jpg"
  }
];
