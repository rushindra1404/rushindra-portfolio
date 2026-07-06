export interface Course {
  name: string;
  link: string;
}

export interface CertificationItem {
  title: string;
  link: string;
  courses?: Course[];
}

export interface OrganizationData {
  id: string;
  name: string;
  logo: string;
  brandColor: string;
  summary: string;
  skills: string[];
  certCount: number;
  progress: number;
  lastUpdated: string;
  certificates: CertificationItem[];
}

export const CREDENTIALS_DATA: OrganizationData[] = [
  {
    id: "ibm",
    name: "IBM",
    logo: "/images/logo/ibm.svg",
    brandColor: "#052FAD",
    summary: "Specialized training in Artificial Intelligence, Deep Learning, Generative AI, LLMs and Cloud Technologies.",
    skills: [
      "Python", "TensorFlow", "PyTorch", "Keras", "Neural Networks", 
      "Deep Learning", "Transformers", "LLMs", "LangChain", "RAG", 
      "Prompt Engineering", "Computer Vision", "NLP", "Fine Tuning", "AI Agents"
    ],
    certCount: 11,
    progress: 100,
    lastUpdated: "June 2026",
    certificates: [
      {
        title: "IBM AI Engineering Professional Certificate",
        link: "/certificates/ibm/IBM AI Engineering Professional Certificate(IBM).pdf",
        courses: [
          { name: "Machine Learning with Python", link: "/certificates/ibm/Machine Learning with python (IBM).pdf" },
          { name: "Deep Learning with PyTorch", link: "/certificates/ibm/Deep Learning wih PyTorch (IBM).pdf" },
          { name: "Deep Learning with Keras and TensorFlow", link: "/certificates/ibm/Deep learning with Keras and Tensorflow.pdf" },
          { name: "Introduction to Deep Learning & Neural Networks with Keras", link: "/certificates/ibm/Introduction to Deep Learning & Neural Networks with Keras (IBM).pdf" },
          { name: "Introduction to Neural Networks and PyTorch", link: "/certificates/ibm/Introduction to Neural Networks and Pytorch (IBM).pdf" },
          { name: "AI Capstone Project with Deep Learning", link: "/certificates/ibm/AI Capstone Project with Deep Learning (IBM).pdf" },
          { name: "Fundamentals of AI Agents Using RAG and LangChain", link: "/certificates/ibm/Fundamentals of AI Agents Using RAG and LangChain (IBM).pdf" },
          { name: "Generative AI Advanced Fine-Tuning for LLMs", link: "/certificates/ibm/Generative AI Advanced Fine-Tuning for LLMs (IBM).pdf" },
          { name: "Generative AI Engineering and Fine-Tuning Transformers", link: "/certificates/ibm/Generative AI Engineering and Fine-Tuning Transformers (IBM).pdf" },
          { name: "Generative AI Language Modeling with Transformers", link: "/certificates/ibm/Generative AI Language Modeling with Transformers (IBM).pdf" },
          { name: "Generative AI and LLMs: Architecture and Data Preparation", link: "/certificates/ibm/Generative AI and LLMs Architecture and Data Preparation (IBM).pdf" },
          { name: "Project: Generative AI Applications with RAG and LangChain", link: "/certificates/ibm/Project Generative AI Applications with RAG and LangChain (IBM).pdf" }
        ]
      }
    ]
  },
  {
    id: "google",
    name: "Google",
    logo: "/images/logo/google.svg",
    brandColor: "#EA4335",
    summary: "Professional certifications validating core principles of Generative AI, prompt engineering, productivity tools, and AI safety practices.",
    skills: ["Generative AI", "Prompt Design", "AI Productivity Tools", "Responsible AI", "AI Strategy", "Content Creation", "Data Analytics"],
    certCount: 7,
    progress: 100,
    lastUpdated: "June 2026",
    certificates: [
      {
        title: "Google AI Essentials Career Certificate",
        link: "/certificates/google/google ai essential/Google AI Essentials Carrer Certificate.pdf",
        courses: [
          { name: "Introduction to AI", link: "/certificates/google/google ai essential/Introduction to AI (Google).pdf" },
          { name: "Maximize Productivity With AI Tools", link: "/certificates/google/google ai essential/Maximize Productivity With AI Tools (Google).pdf" },
          { name: "Discover the art of Prompting", link: "/certificates/google/google ai essential/Discover the art of Prompting (Google).pdf" },
          { name: "Use AI Responsibly", link: "/certificates/google/google ai essential/Use AI Responsibly (Google).pdf" },
          { name: "Stay Ahead in AI Curve", link: "/certificates/google/google ai essential/Stay Ahead in AI Curve (Google).pdf" }
        ]
      },
      {
        title: "Google AI Professional Certificate",
        link: "/certificates/google/Google AI Professional Certificate/Google AI Professional Certificate.pdf",
        courses: [
          { name: "AI Fundamentals", link: "/certificates/google/Google AI Professional Certificate/AI Fundamentals (Google).pdf" },
          { name: "AI for Brainstorming and Planning", link: "/certificates/google/Google AI Professional Certificate/AI for Brainstorming and Planning (Google).pdf" },
          { name: "AI for Content Creation", link: "/certificates/google/Google AI Professional Certificate/AI for Content Creation (Google).pdf" },
          { name: "AI for Writing and Communicating", link: "/certificates/google/Google AI Professional Certificate/AI for Writing and Communicating (Google).pdf" },
          { name: "AI for Research and Insights", link: "/certificates/google/Google AI Professional Certificate/AI for Research and Insights (Google.pdf" },
          { name: "AI For Data Analysis", link: "/certificates/google/Google AI Professional Certificate/AI For Data Analysis.pdf" },
          { name: "AI for App Building", link: "/certificates/google/Google AI Professional Certificate/AI for App Building.pdf" }
        ]
      }
    ]
  },
  {
    id: "google_cloud",
    name: "Google Cloud",
    logo: "/images/logo/google_cloud.svg.svg",
    brandColor: "#4285F4",
    summary: "Advanced hands-on badges validating implementation of Gemini models, Vertex AI pipeline, Streamlit user interfaces, and Kubernetes scaling.",
    skills: ["Vertex AI", "Gemini API", "Imagen", "Streamlit", "Kubernetes (GKE)", "Docker", "Prompt Design", "Data Modeling", "BigQuery", "Multimodal RAG"],
    certCount: 6,
    progress: 100,
    lastUpdated: "June 2026",
    certificates: [
      {
        title: "Build Real World AI Applications with Gemini and Imagen",
        link: "/certificates/google cloud/build-real-world-ai-applications-with-gemini-and-im.png"
      },
      {
        title: "Develop GenAI Apps with Gemini and Streamlit",
        link: "/certificates/google cloud/develop-genai-apps-with-gemini-and-streamlit-skill-.png"
      },
      {
        title: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
        link: "/certificates/google cloud/inspect-rich-documents-with-gemini-multimodality-an.png"
      },
      {
        title: "Manage Kubernetes in Google Cloud",
        link: "/certificates/google cloud/manage-kubernetes-in-google-cloud-skill-badge.png"
      },
      {
        title: "Prompt Design in Vertex AI",
        link: "/certificates/google cloud/prompt-design-in-vertex-ai-skill-badge.png"
      },
      {
        title: "Engineer Data for Predictive Modeling with BigQuery",
        link: "/certificates/google cloud/engineer-data-for-predictive-modeling-with-bigquery.png"
      }
    ]
  },
  {
    id: "microsoft",
    name: "Microsoft",
    logo: "/images/logo/microsoft.svg",
    brandColor: "#F25022",
    summary: "Certifications validating core machine learning algorithms, model training pipelines, and Azure cognitive services.",
    skills: ["Azure AI", "Azure ML", "Machine Learning", "Python", "Predictive Analytics", "Cognitive Services"],
    certCount: 2,
    progress: 100,
    lastUpdated: "June 2026",
    certificates: [
      {
        title: "Fundamentals in AI Certificate",
        link: "/certificates/microsoft/microsoft fundamentals in AI certificate_page-0001.jpg"
      },
      {
        title: "Introduction to Machine Learning Certificate",
        link: "/certificates/microsoft/microsoft introduction to machine learning certificate_page-0001.jpg"
      }
    ]
  },
  {
    id: "aws",
    name: "AWS",
    logo: "/images/logo/aws.svg",
    brandColor: "#FF9900",
    summary: "Cloud systems architect validation focusing on IAM security policies, virtual networks (VPC), EC2 servers, database scaling, and AWS infrastructure.",
    skills: ["AWS", "Cloud Architecture", "VPC Networking", "IAM Security", "S3 Storage", "EC2", "RDS Databases"],
    certCount: 1,
    progress: 100,
    lastUpdated: "June 2026",
    certificates: [
      {
        title: "Solutions Architect Virtual Experience",
        link: "/certificates/aws/aws solution architecture job simulation.pdf"
      }
    ]
  },
  {
    id: "alteryx",
    name: "Alteryx",
    logo: "/images/logo/alteryx.png",
    brandColor: "#00AEEF",
    summary: "Core analytics engineering certificate validating proficiency in dataset extraction, ETL pipelines, parsing, and automated workflows.",
    skills: ["Alteryx Designer", "Data Prep & ETL", "Workflow Automation", "Business Intelligence", "Analytics Engineering"],
    certCount: 1,
    progress: 100,
    lastUpdated: "June 2026",
    certificates: [
      {
        title: "Alteryx Designer Core Certification",
        link: "/certificates/alteryx/Alteryx_Designer_Core_Certification_Badge20260429-31-kcdnlb.pdf"
      }
    ]
  },
  {
    id: "deloitte",
    name: "Deloitte",
    logo: "/images/logo/deloitte.png",
    brandColor: "#86BC25",
    summary: "Forensic data cleaning, visual analytics dashboards, predictive client analysis, and consulting workflows.",
    skills: ["Data Analytics", "SQL", "Tableau", "Visual Dashboards", "Consulting"],
    certCount: 1,
    progress: 100,
    lastUpdated: "June 2026",
    certificates: [
      {
        title: "Data Analytics Virtual Experience",
        link: "/certificates/deloitte/deloitte data analytics.pdf"
      }
    ]
  },
  {
    id: "jpmorgan",
    name: "JP Morgan",
    logo: "/images/logo/J.P.-Morgan-Chase.svg",
    brandColor: "#C2A4FF",
    summary: "Software engineering job simulation validating server script configurations, React modules, and financial dashboard charts using Perspective.",
    skills: ["React", "TypeScript", "Python", "Perspective Dashboard", "Financial Analytics"],
    certCount: 1,
    progress: 100,
    lastUpdated: "June 2026",
    certificates: [
      {
        title: "Software Engineering Virtual Experience",
        link: "/certificates/J P Morgan/JP Morgan Software Engineering Job Simulation.pdf"
      }
    ]
  },
  {
    id: "tata",
    name: "Tata",
    logo: "/images/logo/Tata.png",
    brandColor: "#004F9F",
    summary: "Executive business intelligence dashboard design and automated data analytics reports using advanced prompting techniques.",
    skills: ["Generative AI", "Business Intelligence", "Data Analytics", "Dashboard Design", "Corporate Presentations"],
    certCount: 1,
    progress: 100,
    lastUpdated: "June 2026",
    certificates: [
      {
        title: "GenAI-Powered Data Analytics Job Simulation",
        link: "/certificates/tata/tata gen ai powered data.pdf"
      }
    ]
  },
  {
    id: "vityarthi",
    name: "Vityarthi",
    logo: "/images/logo/vityarthi.png",
    brandColor: "#FF5722",
    summary: "Academic credentials validating core machine learning concepts, open source project contributions, Java programming paradigms, and Python scripting.",
    skills: ["Python", "Java Programming", "Open Source Software", "AI & ML Basics"],
    certCount: 4,
    progress: 100,
    lastUpdated: "June 2026",
    certificates: [
      {
        title: "Fundamentals in AI & ML",
        link: "/certificates/vityarthi/Fundamentals in AI & ML.png"
      },
      {
        title: "Open Source Software",
        link: "/certificates/vityarthi/Open Source Software.png"
      },
      {
        title: "Python Essentials",
        link: "/certificates/vityarthi/Python Essentials.png"
      },
      {
        title: "Programming in Java",
        link: "/certificates/vityarthi/programming in java.png"
      }
    ]
  },
  {
    id: "hp",
    name: "HP",
    logo: "/images/logo/hp.svg",
    brandColor: "#0096D6",
    summary: "Validation of advanced statistical methodologies, machine learning workflows, cybersecurity awareness, threat landscape management, and database protection.",
    skills: ["Data Science", "Machine Learning", "Cybersecurity", "Database Security", "Threat Prevention"],
    certCount: 3,
    progress: 100,
    lastUpdated: "June 2026",
    certificates: [
      {
        title: "AI and Data Science Certificate",
        link: "/certificates/hp/hp ai certificate_page-0001.png.jpg"
      },
      {
        title: "Data Science Certificate",
        link: "/certificates/hp/hp data science certificate_page-0001.jpg"
      },
      {
        title: "Cybersecurity Awareness Certificate",
        link: "/certificates/hp/hp cyber security awareness_page-0001.jpg"
      }
    ]
  }
];
