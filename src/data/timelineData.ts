export interface MilestoneProject {
  name: string;
  desc: string;
  tech: string[];
  image?: string;
  link?: string;
}

export interface Milestone {
  id: string;
  year: string;
  icon: string;
  title: string;
  description: string;
  skills: string[];
  color: string;
  accentGlow: string;
  projects?: MilestoneProject[];
}

export const TIMELINE_DATA: Milestone[] = [
  {
    id: "python_foundations",
    year: "2024",
    icon: "🐍",
    title: "Python Foundations",
    description: "Started my programming journey by learning Python fundamentals, problem solving, programming logic and software development basics.",
    skills: ["Python", "Programming Logic", "Problem Solving", "Git", "GitHub", "Basic Data Structures"],
    color: "blue",
    accentGlow: "#2b6cb0"
  },
  {
    id: "ai_foundations",
    year: "2025",
    icon: "🤖",
    title: "Artificial Intelligence Foundations",
    description: "Transitioned from programming into Artificial Intelligence and Machine Learning while building strong theoretical foundations.",
    skills: ["Artificial Intelligence", "Machine Learning", "Deep Learning", "Neural Networks", "Microsoft AI", "Google AI Essentials"],
    color: "purple",
    accentGlow: "#7f40ff"
  },
  {
    id: "gen_ai_evolution",
    year: "2025",
    icon: "✨",
    title: "Generative AI Evolution",
    description: "Expanded into modern AI technologies including Large Language Models, Transformers, Prompt Engineering, Retrieval-Augmented Generation and AI Agents.",
    skills: ["LLMs", "Transformers", "Prompt Engineering", "LangChain", "RAG", "AI Agents", "Fine Tuning", "IBM AI Engineering"],
    color: "pink",
    accentGlow: "#ec4899"
  },
  {
    id: "credentials_cloud",
    year: "2026",
    icon: "🏆",
    title: "Professional Credentials & Cloud",
    description: "Built industry-level expertise through globally recognized certifications and practical cloud technologies.",
    skills: ["IBM AI Engineering", "Google AI", "Google Cloud", "AWS", "Kubernetes", "Vertex AI", "BigQuery ML", "Industry Job Simulations", "Microsoft AI"],
    color: "gold",
    accentGlow: "#eab308"
  },
  {
    id: "real_world_apps",
    year: "Present",
    icon: "🚀",
    title: "Building Real-World AI Applications",
    description: "Applying everything learned to build production-ready AI applications and solve real-world problems.",
    skills: ["Production Systems", "AI Agents", "Computer Vision", "NLP Architecture", "Cloud Orchestration", "Edge Deployment"],
    color: "purple-neon",
    accentGlow: "#c2a4ff",
    projects: [
      {
        name: "Sign2Speak",
        desc: "Breaking communication barriers between sign language users and the world.",
        tech: ["Computer Vision", "Gesture Translation", "TensorFlow", "React"],
        image: "/images/chapter1_sign2speak.png",
        link: "#projects"
      },
      {
        name: "VisionMorph",
        desc: "Teaching machines to understand, segment, and transform visual information.",
        tech: ["Computer Vision", "Image Processing", "Deep Learning", "PyTorch"],
        image: "/images/chapter2_visionmorph.png",
        link: "#projects"
      },
      {
        name: "AI Resume Builder",
        desc: "Architecting ATS-optimized professional career profiles instantly using Gemini API.",
        tech: ["Generative AI", "Resume Curation", "ATS Optimization", "React"],
        image: "/images/chapter3_resumebuilder.png",
        link: "#projects"
      },
      {
        name: "JO Sphere",
        desc: "Full-stack AI-driven job analysis and recruiter recommendation dashboard.",
        tech: ["Full Stack React", "Node.js", "AI Classification", "MongoDB"],
        image: "/images/chapter4_interviewcoach.png",
        link: "#projects"
      },
      {
        name: "Urban Heat Mitigation AI",
        desc: "Simulating ecological heat indexes and dynamic material cooling impact curves.",
        tech: ["Python", "Ecology Analytics", "Material Modeling", "Pandas"],
        image: "/images/chapter5_futurevision.png",
        link: "#projects"
      },
      {
        name: "Future AI Products",
        desc: "The next generation of intelligent agent models and autonomous workspace software.",
        tech: ["Autonomous Agents", "RAG Systems", "Orchestration Models"],
        image: "/images/chapter5_futurevision.png",
        link: "#projects"
      }
    ]
  }
];
