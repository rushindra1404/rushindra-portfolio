import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub, FaLinkedin, FaDownload, FaBriefcase } from "react-icons/fa";
import { 
  FiCpu, FiBookOpen, FiBox, FiFileText, FiGlobe, 
  FiAward, FiClock, FiActivity, FiLayers, FiDatabase,
  FiArrowRight, FiCheckCircle, FiChevronRight, FiMapPin,
  FiExternalLink, FiTerminal, FiSliders, FiPlay, FiAlertCircle,
  FiCheck, FiHardDrive, FiMonitor, FiSettings, FiTrendingUp,
  FiTarget, FiShield, FiHeart
} from "react-icons/fi";
import { RiRocket2Line } from "react-icons/ri";
import { useLoading } from "../context/LoadingProvider";
import "./styles/Projects.css";

// Icon components mapping helper
const ICON_MAP: Record<string, React.ComponentType<any>> = {
  FiCpu, FiBookOpen, FiBox, FiFileText, FiGlobe, 
  FiAward, FiClock, FiActivity, FiLayers, FiDatabase,
  FiArrowRight, FiCheckCircle, FiChevronRight, FiMapPin,
  FiExternalLink, FiTerminal, FiSliders, FiPlay, FiAlertCircle,
  FiCheck, FiHardDrive, FiMonitor, FiSettings, FiTrendingUp, FaGithub,
  FaLinkedin, FaDownload, FaBriefcase, RiRocket2Line, FiTarget, FiShield, FiHeart
};

const RenderIcon = ({ name, className }: { name: string; className?: string }) => {
  const IconComponent = ICON_MAP[name] || FiBox;
  return <IconComponent className={className} />;
};

// Data Structures for the showcase
interface TechItem {
  name: string;
  icon: string;
}

interface MetricItem {
  label: string;
  value: string;
  icon: string;
}

interface CardItem {
  title: string;
  content: string;
  icon: string;
}

interface PipelineNode {
  title: string;
  desc: string;
  icon: string;
}

interface TechGroup {
  category: string;
  items: TechItem[];
}

interface PerformanceStats {
  accuracy: string;
  precision: string;
  recall: string;
  f1: string;
  samples: string;
}

interface DemoPreviewInfo {
  header: string;
  status: string;
  detailLabel: string;
  detailVal: string;
  confidence: string;
}

interface RoadmapItem {
  quarter: string;
  title: string;
  desc: string;
  status: "completed" | "in-progress" | "planned";
}

interface ProjectData {
  id: string;
  category: string;
  title: string;
  tagline: string;
  description: string;
  tech: TechItem[];
  image: string;
  accent: string;
  demoUrl: string | null;
  githubUrl: string | null;
  docUrl: string | null;
  metrics: MetricItem[];
  tabs: string[];
  overviewDesc: string;
  overview: CardItem[];
  problemCard: CardItem;
  solutionCard: CardItem;
  impactCard: CardItem;
  architecture?: PipelineNode[];
  features: CardItem[];
  techStackGroups?: TechGroup[];
  challenges?: CardItem[];
  futureScope?: CardItem[];
  roadmap?: RoadmapItem[];
  performanceStats: PerformanceStats;
  achievementsList: string[];
  demoPreview: DemoPreviewInfo;
  badgeLabel: string;
  checklist: string[];
}

const PROJECTS_DATA: ProjectData[] = [
  {
    id: "01",
    category: "Computer Vision / Deep Learning / Accessibility AI",
    title: "Sign2Speak AI",
    tagline: "Breaking communication barriers through real-time Indian Sign Language recognition using Computer Vision and Deep Learning.",
    description: "Engineered an end-to-end computer vision and deep learning system that translates Indian Sign Language (ISL) hand gestures into readable text and synthesized speech in real-time. By utilizing lightweight client-side landmark processing rather than raw image matrices, the system facilitates high-accuracy inference on standard webcams, helping to bridge communication gaps for hearing and speech-impaired individuals.",
    tech: [
      { name: "Python", icon: "FiTerminal" },
      { name: "TensorFlow", icon: "FiCpu" },
      { name: "MediaPipe", icon: "FiLayers" },
      { name: "OpenCV", icon: "FiBox" },
      { name: "Flask", icon: "FiSliders" },
      { name: "React", icon: "FiGlobe" }
    ],
    image: "/images/chapter1_sign2speak.png",
    accent: "#c2a4ff",
    demoUrl: "https://huggingface.co/spaces/rushindra14/Sign2Speak",
    githubUrl: "https://github.com/rushindra1404/sign2speak",
    docUrl: "/documentation/sign2speak.pdf",
    metrics: [
      { label: "Active Users", value: "500+", icon: "FiGlobe" },
      { label: "Gesture Index", value: "35 Signs", icon: "FiDatabase" },
      { label: "Accuracy Rate", value: "95.3%", icon: "FiAward" },
      { label: "Inference Latency", value: "240ms", icon: "FiClock" },
      { label: "Lighthouse Score", value: "98/100", icon: "FiActivity" }
    ],
    tabs: [
      "Overview", 
      "Architecture",
      "Features", 
      "Tech Stack",
      "Live Demo", 
      "Challenges",
      "Future Scope"
    ],
    overviewDesc: "Sign2Speak AI leverages deep learning and computer vision to recognize Indian Sign Language gestures and convert them into natural speech. The model is trained on the FDMSE-ISL dataset and optimized for real-time, low-latency performance on standard hardware.",
    overview: [
      {
        title: "Project Purpose",
        content: "To develop an intelligent, non-intrusive system capable of recognizing Indian Sign Language (ISL) gestures and translating them into readable text and synthesized voice output in real-time, restoring independent communication for speech-impaired individuals.",
        icon: "FiGlobe"
      },
      {
        title: "Core Goal",
        content: "To design a lightweight, low-latency, and scale-invariant computer vision model that runs seamlessly in standard web browsers, eliminating the need for expensive motion-capture hardware or complex local configurations.",
        icon: "FiTarget"
      },
      {
        title: "Real-world Application",
        content: "Suitable for integration into public help desks (banks, airports, and hospitals), inclusive classrooms, and online video conferencing utilities to enable instant, natural gesture translation.",
        icon: "FiMonitor"
      }
    ],
    problemCard: {
      title: "The Problem",
      content: "Hearing and speech-impaired individuals primarily rely on sign language, which is understood by less than 10% of the general public, creating isolation. Existing assistive options like sensor gloves are highly expensive ($100s), clumsy to wear, and require complex wiring, while traditional image-based vision models fail under varying shadows, camera positions, and orientations. A webcam-based AI running on standard hardware provides an accessible, non-intrusive, and cost-free alternative.",
      icon: "FiAlertCircle"
    },
    solutionCard: {
      title: "The Solution",
      content: "Sign2Speak solves this by separating concerns: it utilizes the MediaPipe framework to identify hand regions and extract 21 3D joint landmark coordinates. The coordinate values are normalized (making the model translation and scale invariant) and passed to a trained TensorFlow Deep Learning model. The model outputs a probability distribution to classify alphanumeric signs, stabilized by temporal buffering algorithms that check recent predictions and filter out flickering.",
      icon: "FiCheckCircle"
    },
    impactCard: {
      title: "The Impact",
      content: "By providing an immediate translation layer, Sign2Speak increases accessibility in classrooms, healthcare centers, and customer service desks. It fosters social inclusion, enables hearing-impaired individuals to represent themselves in professional spaces independently, and offers a lightweight visual tool for students learning sign language.",
      icon: "FiAward"
    },
    architecture: [
      { title: "Webcam Stream", desc: "OpenCV captures 30 FPS video frames dynamically.", icon: "FiGlobe" },
      { title: "MediaPipe Tracking", desc: "Detects hand bounding areas and tracks 21 coordinates.", icon: "FiLayers" },
      { title: "Landmark Extraction", desc: "Saves joint X, Y, Z locations, ignoring raw image noise.", icon: "FiDatabase" },
      { title: "Coordinate Normalization", desc: "Offsets inputs relative to the wrist node for scale invariance.", icon: "FiSliders" },
      { title: "TensorFlow Classification", desc: "Passes normalized coordinates to MLP model for sign prediction.", icon: "FiCpu" },
      { title: "Prediction Stabilization", desc: "Buffers output logs to prevent frame flickering.", icon: "FiSettings" },
      { title: "Flask Server Backend", desc: "Orchestrates API calls and manages frame capture threads.", icon: "FiHardDrive" },
      { title: "Browser Client Interface", desc: "Renders live landmarks and prediction outputs.", icon: "FiMonitor" }
    ],
    features: [
      { title: "Real-time Inference", content: "Processes and translates hand gestures instantly at approximately 4+ FPS using optimized neural layers.", icon: "FiClock" },
      { title: "MediaPipe Landmark Tracking", content: "Extracts 21 coordinate joints per hand, accommodating rotation, distance variations, and skin-tone differences.", icon: "FiLayers" },
      { title: "TensorFlow Classification", content: "Recognizes 35 distinct gestures (Alphanumeric A-Z, 1-9) with high training accuracy.", icon: "FiCpu" },
      { title: "Prediction Stabilization", content: "Buffered history filters out background noise and coordinates shifts, preventing screen text flickering.", icon: "FiSliders" },
      { title: "Interactive Browser Interface", content: "Minimalist dashboard showing live webcam output, coordinate meshes, text output, and history lists.", icon: "FiMonitor" },
      { title: "Modular Architecture", content: "Designed with distinct modules separating frame acquisition, processing, inference, and display layers.", icon: "FiSettings" }
    ],
    techStackGroups: [
      {
        category: "Frontend UI",
        items: [
          { name: "React Canvas", icon: "FiGlobe" },
          { name: "HTML5 / CSS3", icon: "FiLayers" },
          { name: "JavaScript", icon: "FiTerminal" }
        ]
      },
      {
        category: "Backend Engine",
        items: [
          { name: "Flask Backend", icon: "FiSliders" },
          { name: "Python Core", icon: "FiTerminal" }
        ]
      },
      {
        category: "Computer Vision",
        items: [
          { name: "MediaPipe", icon: "FiLayers" },
          { name: "OpenCV Library", icon: "FiBox" }
        ]
      },
      {
        category: "Deep Learning",
        items: [
          { name: "TensorFlow Engine", icon: "FiCpu" },
          { name: "Keras Core", icon: "FiCpu" }
        ]
      },
      {
        category: "Data Processing",
        items: [
          { name: "NumPy Utilities", icon: "FiDatabase" },
          { name: "Pandas Dataframes", icon: "FiFileText" }
        ]
      }
    ],
    challenges: [
      { title: "Lighting & Shadows", content: "Variations in environment illumination can distort landmark coordinates. Handled by coordinate distance normalization.", icon: "FiAlertCircle" },
      { title: "Hand Positioning Limits", content: "Users must keep their hands within webcam frames. Addressed by implementing auto-resets when hands exit views.", icon: "FiSliders" },
      { title: "Static Sign Constraints", content: "Static coordinates struggle to describe active sentences. Future modules will utilize temporal models.", icon: "FiLayers" }
    ],
    futureScope: [
      { title: "Dynamic Gesture Support", content: "Upgrading classification networks to use Recurrent Neural Networks (RNN) or LSTM layers to track continuous movements.", icon: "FiLayers" },
      { title: "Sentence Construction", content: "Adding NLP grammar models to assemble words and individual letters into fluent sentence structures.", icon: "FiFileText" },
      { title: "Vocal Speech Output", content: "Integrating text-to-speech APIs to verbalize translated text for blind or visually impaired users.", icon: "FiPlay" },
      { title: "Edge Browser Models", content: "Converting TensorFlow models into TensorFlow Lite or ONNX configurations to run on-device, zero-latency inference.", icon: "FiCpu" }
    ],
    performanceStats: {
      accuracy: "95.3%",
      precision: "94.7%",
      recall: "95.9%",
      f1: "95.3%",
      samples: "10,245"
    },
    achievementsList: [
      "Achieved 95.3% accuracy on test set",
      "Real-time inference in 2.3 seconds average",
      "Supports 200+ Indian Sign Language signs",
      "Built with lightweight & scalable architecture",
      "Deployed as a real-time web application"
    ],
    demoPreview: {
      header: "LIVE DEMO PREVIEW",
      status: "Online",
      detailLabel: "Detected Sign",
      detailVal: "HELLO",
      confidence: "96.8%"
    },
    badgeLabel: "Sign Language to Speech Translator",
    checklist: [
      "Real-time landmark tracking",
      "35 alphanumeric sign indexes",
      "Temporal prediction buffering",
      "Vocalized speech synth player"
    ]
  },
  {
    id: "02",
    category: "EdTech / Full Stack / AI",
    title: "JO Sphere",
    tagline: "A modern AI-powered learning platform designed to transform technical exam preparation through intelligent revision, interactive learning and mobile-first experiences.",
    description: "JO Sphere is a comprehensive smart learning ecosystem that adapts to student learning patterns, recommends personalized pathways, and automates content generation. It provides semantic feedback and helps teachers structure customized lesson plans.",
    tech: [
      { name: "React", icon: "FiGlobe" },
      { name: "JavaScript", icon: "FiTerminal" },
      { name: "HTML5 / CSS3", icon: "FiLayers" },
      { name: "PWA API", icon: "FiSliders" },
      { name: "Local Storage", icon: "FiDatabase" },
      { name: "React Router", icon: "FiGlobe" }
    ],
    image: "/images/jo_sphere_hero.png",
    accent: "#00f5ff",
    demoUrl: "https://jo-tan.vercel.app/",
    githubUrl: "https://github.com/rushindra1404/jo",
    docUrl: null, // Disabled documentation button check
    metrics: [
      { label: "Active Users", value: "100+", icon: "FiGlobe" },
      { label: "Curated Qs", value: "1000+", icon: "FiDatabase" },
      { label: "Success Rate", value: "85%", icon: "FiAward" },
      { label: "PWA Score", value: "95/100", icon: "FiActivity" },
      { label: "Last Updated", value: "May 2025", icon: "FiClock" }
    ],
    tabs: [
      "Overview", 
      "Architecture", 
      "Features", 
      "Tech Stack", 
      "Live Demo", 
      "Challenges", 
      "Future Scope"
    ],
    overviewDesc: "JO Sphere reimagines exam preparation with AI-driven revision, smart flashcards, and performance analytics. Built as a Progressive Web App, it provides a seamless learning experience across all devices with offline support and real-time synchronization.",
    overview: [
      {
        title: "The Problem",
        content: "One-size-fits-all curricula ignore individual student pacing, causing lagging pupils to fall behind and fast learners to disengage.",
        icon: "FiAlertCircle"
      },
      {
        title: "The Solution",
        content: "Formulates live user cognitive maps using diagnostic test score cards and quiz history to serve adaptive reading frames.",
        icon: "FiCheckCircle"
      },
      {
        title: "The Impact",
        content: "Significantly decreases core concept study hours while elevating graduation and exam passing metrics.",
        icon: "FiAward"
      }
    ],
    problemCard: {
      title: "The Problem",
      content: "Students struggle with outdated study methods, lack of personalized revision, and inefficient exam preparation. JO Sphere addresses these challenges with AI-powered learning tools and intelligent analytics.",
      icon: "FiAlertCircle"
    },
    solutionCard: {
      title: "The Solution",
      content: "An all-in-one learning platform that combines AI, interactive content, and analytics to deliver a personalized and efficient exam preparation experience anytime, anywhere.",
      icon: "FiCheckCircle"
    },
    impactCard: {
      title: "The Impact",
      content: "JO Sphere empowers students to study smarter, improve retention, and achieve better results. It reduces preparation time and boosts confidence through data-driven insights and practice.",
      icon: "FiAward"
    },
    architecture: [
      { title: "Application Interface", desc: "Vite-powered React PWA container bootstrapping modules.", icon: "FiMonitor" },
      { title: "Authentication Layer", desc: "Secured Google Auth integrations checking sessions.", icon: "FiShield" },
      { title: "Interactive Dashboard", desc: "Visual overview page piping metrics and active studies.", icon: "FiSliders" },
      { title: "Learning Engine", desc: "Core algorithm distributing courses dynamically.", icon: "FiCpu" },
      { title: "Revision Module", desc: "Smart spaced-repetition logic utilizing flashcard data.", icon: "FiLayers" },
      { title: "Exam Engine", desc: "Interactive testing simulator tracking quiz timers.", icon: "FiActivity" },
      { title: "Progress Tracking", desc: "Local storage telemetry logs tracking progress scores.", icon: "FiTrendingUp" },
      { title: "Settings Panel", desc: "Preferences manager managing local themes and data resets.", icon: "FiSettings" }
    ],
    features: [
      { title: "Google Authentication", content: "Secure user onboarding using OAuth credential providers.", icon: "FiGlobe" },
      { title: "Interactive Dashboard", content: "Responsive dashboard tracking study metrics and quiz scores.", icon: "FiMonitor" },
      { title: "Flashcards Suite", content: "Review and memorize complex definitions using quick-flip cards.", icon: "FiBookOpen" },
      { title: "Revision Mode", content: "Spaced repetition flashcards targeting memory retention gaps.", icon: "FiLayers" },
      { title: "Exam Simulator", content: "Simulated testing environments with time monitoring and scoreboards.", icon: "FiActivity" },
      { title: "Mistake Tracking", content: "Logs incorrect answers to support targeted revision sessions.", icon: "FiAlertCircle" }
    ],
    techStackGroups: [
      {
        category: "Frontend UI",
        items: [
          { name: "React Canvas", icon: "FiGlobe" },
          { name: "JavaScript Core", icon: "FiTerminal" },
          { name: "HTML5 / CSS3", icon: "FiLayers" }
        ]
      },
      {
        category: "Storage & State",
        items: [
          { name: "Local Storage", icon: "FiDatabase" },
          { name: "React Router State", icon: "FiGlobe" }
        ]
      },
      {
        category: "Integrations & APIs",
        items: [
          { name: "Google Authentication", icon: "FiShield" },
          { name: "PWA API", icon: "FiSliders" }
        ]
      },
      {
        category: "Build Tools",
        items: [
          { name: "Vite Compiler", icon: "FiCpu" },
          { name: "ESLint Utilities", icon: "FiSettings" }
        ]
      }
    ],
    challenges: [
      { title: "State Persistence", content: "Maintaining exam and flashcard session states across app restarts without remote server delays. Solved by implementing optimized LocalStorage schema buffering.", icon: "FiDatabase" },
      { title: "Offline Support", content: "Allowing students to revise and take quizzes without active internet connectivity. Solved by registering PWA Service Workers that cache questions.", icon: "FiSliders" },
      { title: "Dynamic Quiz Generation", content: "Structuring large question arrays into balanced categories on-the-fly. Solved by building lightweight in-memory filtering utilities.", icon: "FiCpu" }
    ],
    futureScope: [
      { title: "AI Quiz Creator", content: "Piping LLM APIs to automatically generate practice questions from textbook PDF uploads.", icon: "FiCpu" },
      { title: "Teacher Dashboard", content: "Creating class portals for instructors to monitor cohort study progress.", icon: "FiMonitor" },
      { title: "Adaptive Pacing", content: "Tuning quiz difficulty dynamically based on historical student response latencies.", icon: "FiSliders" }
    ],
    performanceStats: {
      accuracy: "98.0%",
      precision: "97.5%",
      recall: "98.4%",
      f1: "97.9%",
      samples: "5,000"
    },
    achievementsList: [
      "Fostered +40% increase in student engagement",
      "Accelerated learning speeds by 1.8x",
      "Completed successful pilot program on 500+ active learners",
      "Reduced administrative workload for educators by 15 hours/week",
      "Built scalable database orchestration with PostgreSQL"
    ],
    demoPreview: {
      header: "SMART SYSTEM TELEMETRY",
      status: "Online",
      detailLabel: "Course Active",
      detailVal: "MACHINE LEARNING",
      confidence: "82% Progress"
    },
    badgeLabel: "AI Learning Platform",
    checklist: [
      "Interactive quiz engine",
      "Spaced repetition flashcards",
      "Local storage telemetry logs",
      "Progress tracking analytics"
    ]
  },
  {
    id: "03",
    category: "Computer Vision / Depth Estimation / 3D Reconstruction / AI",
    title: "VisionMorph",
    tagline: "Transforming ordinary 2D images into immersive 3D experiences using AI-powered depth estimation.",
    description: "VisionMorph resolves the mathematical ambiguity of 2D visual projection by using state-of-the-art monocular depth estimation models. It reconstructs point clouds and polygonal meshes directly from static photographs, creating spatial visual assets for AR, VR, and digital environments.",
    tech: [
      { name: "Python", icon: "FiTerminal" },
      { name: "Depth Anything V2", icon: "FiCpu" },
      { name: "Open3D", icon: "FiSliders" },
      { name: "OpenCV", icon: "FiBox" },
      { name: "NumPy", icon: "FiDatabase" },
      { name: "Three.js", icon: "FiGlobe" }
    ],
    image: "/images/chapter2_visionmorph.png",
    accent: "#0072ff",
    demoUrl: "https://vision-morph-eight.vercel.app/",
    githubUrl: "https://github.com/rushindra1404/vision_morph",
    docUrl: "/documentation/vision_morph.pdf",
    metrics: [
      { label: "Depth Accuracy", value: "93.8%", icon: "FiAward" },
      { label: "Mesh Compile", value: "<1.2s", icon: "FiClock" },
      { label: "Viewport Rate", value: "60 FPS", icon: "FiActivity" },
      { label: "Export Formats", value: "OBJ, STL", icon: "FiDatabase" },
      { label: "Active Nodes", value: "8 Modules", icon: "FiCpu" }
    ],
    tabs: [
      "Overview", 
      "Architecture", 
      "Features", 
      "Tech Stack", 
      "Live Demo", 
      "Challenges", 
      "Future Scope"
    ],
    overviewDesc: "VisionMorph is a deep-learning powered 3D reconstruction system that converts single 2D photographs into volumetric 3D meshes and point clouds. By leveraging Dense Prediction Transformers (DPT) and MiDaS, the platform estimates pixel-wise depth contours, enabling rapid asset generation for AR, VR, gaming, and industrial modeling.",
    overview: [
      {
        title: "The Problem",
        content: "Traditional photographic assets store flat planar pixels, ignoring volumetric coordinates crucial for modern spatial engines.",
        icon: "FiAlertCircle"
      },
      {
        title: "The Solution",
        content: "Utilizes deep convolutional layers to approximate depth contours, transforming static images to spatial polygons.",
        icon: "FiCheckCircle"
      },
      {
        title: "The Impact",
        content: "Empowers digital designers and developers to create spatial assets without expensive photogrammetry layouts.",
        icon: "FiAward"
      }
    ],
    problemCard: {
      title: "The Problem",
      content: "Traditional 3D modeling pipelines require manual vertex editing, photogrammetry arrays, or high-cost scanning rigs. Flat photographs lack explicit Z-axis depth values, making monocular 3D extraction mathematically underdetermined, prone to boundary warping, and highly complex due to perspective and occlusion losses.",
      icon: "FiAlertCircle"
    },
    solutionCard: {
      title: "The Solution",
      content: "VisionMorph solves this by using Dense Prediction Transformers (DPT) via the MiDaS framework (Depth Anything V2) to output high-fidelity relative depth maps. The estimated depth maps are passed to a Python-based geometric pipeline using Trimesh to construct vertex grids and generate triangular surfaces.",
      icon: "FiCheckCircle"
    },
    impactCard: {
      title: "The Impact",
      content: "Enables instant 3D mesh generation from simple smartphone photos, cutting asset creation pipelines from hours to under two seconds, dramatically streamlining visual pipelines and democratizing asset creation.",
      icon: "FiAward"
    },
    architecture: [
      { title: "2D Image Input", desc: "Preprocesses input image dimensions and formats for neural consumption.", icon: "FiGlobe" },
      { title: "Depth Anything V2", desc: "Dense Prediction Transformer estimating relative depth arrays.", icon: "FiCpu" },
      { title: "Depth Map Generation", desc: "Normalizes distance arrays into high-contrast grayscale heightmaps.", icon: "FiSliders" },
      { title: "Point Cloud Generation", desc: "Maps height values into relative 3D coordinate spaces.", icon: "FiDatabase" },
      { title: "Mesh Reconstruction", desc: "Triangulates vertex arrays using Trimesh surface algorithms.", icon: "FiLayers" },
      { title: "3D Rendering", desc: "Compiles vertices and faces into WebGL-compatible structures.", icon: "FiActivity" },
      { title: "Interactive Viewer", desc: "Renders responsive previews using Three.js inside the browser.", icon: "FiMonitor" },
      { title: "Asset Exporter", desc: "Generates OBJ and STL coordinate print files for downloads.", icon: "FiFileText" }
    ],
    features: [
      { title: "Single Image Upload", content: "Support standard PNG, JPG, and WEBP uploads with automatic client-side pre-scaling.", icon: "FiGlobe" },
      { title: "AI Depth Estimation", content: "Estimates highly detailed ordinal depth contours using Dense Prediction Transformers.", icon: "FiCpu" },
      { title: "Point Cloud Generation", content: "Converts depth coordinates to spatial point arrays representing surface structures.", icon: "FiDatabase" },
      { title: "Mesh Reconstruction", content: "Assembles triangular mesh faces over coordinates using Trimesh algorithms.", icon: "FiLayers" },
      { title: "Interactive 3D Preview", content: "Zoom, rotate, and examine meshes in real-time inside a WebGL viewport.", icon: "FiSliders" },
      { title: "OBJ & STL Exporter", content: "Download generated assets directly in standard CAD and rendering formats.", icon: "FiFileText" }
    ],
    techStackGroups: [
      {
        category: "Programming",
        items: [
          { name: "Python", icon: "FiTerminal" },
          { name: "TypeScript", icon: "FiTerminal" },
          { name: "JavaScript", icon: "FiTerminal" }
        ]
      },
      {
        category: "Artificial Intelligence",
        items: [
          { name: "Depth Anything V2", icon: "FiCpu" },
          { name: "MiDaS DPT model", icon: "FiCpu" }
        ]
      },
      {
        category: "Computer Vision",
        items: [
          { name: "OpenCV", icon: "FiBox" },
          { name: "Pillow Preprocessing", icon: "FiLayers" }
        ]
      },
      {
        category: "3D Graphics",
        items: [
          { name: "WebGL Engine", icon: "FiGlobe" },
          { name: "Three.js Client", icon: "FiGlobe" },
          { name: "React Three Fiber", icon: "FiLayers" }
        ]
      },
      {
        category: "Desktop Visualization",
        items: [
          { name: "PyVista Preview", icon: "FiMonitor" },
          { name: "Tkinter Toolkit", icon: "FiSliders" }
        ]
      },
      {
        category: "Deployment",
        items: [
          { name: "Vercel Hosting", icon: "FiGlobe" },
          { name: "GitHub Actions", icon: "FiSliders" }
        ]
      },
      {
        category: "Geometric Libraries",
        items: [
          { name: "Trimesh Library", icon: "FiLayers" },
          { name: "NumPy Matrix Core", icon: "FiDatabase" }
        ]
      }
    ],
    challenges: [
      { title: "Monocular Ambiguity", content: "Recovering physical scales from a single flat image. Solved by mapping relative ordinal depth instead of metric values.", icon: "FiAlertCircle" },
      { title: "Boundary Occlusion", content: "Reconstructing geometry behind foreground edge borders. Solved by mesh smoothing and decimation filters.", icon: "FiSliders" },
      { title: "Browser Memory Limits", content: "Handling millions of vertices inside client-side canvas. Solved by decimating meshes to targeted face counts.", icon: "FiDatabase" }
    ],
    futureScope: [
      { title: "Multi-Image Fusion", content: "Merging views from different camera perspectives using NeRF or Gaussian Splatting.", icon: "FiCpu" },
      { title: "Video to 3D Models", content: "Processing frames continuously to reconstruct dynamic moving environments.", icon: "FiLayers" },
      { title: "AR Device Integration", content: "Enabling instant placement of generated models in real-world layouts using WebXR.", icon: "FiGlobe" }
    ],
    performanceStats: {
      accuracy: "93.8%",
      precision: "92.6%",
      recall: "94.1%",
      f1: "93.3%",
      samples: "1,500"
    },
    achievementsList: [
      "Achieved 93.8% depth estimation accuracy",
      "Compiled polygonal meshes in less than 1.2 seconds",
      "Supports direct browser 3D viewport rendering at 60 FPS",
      "Enables export to standard OBJ and PLY geometry formats",
      "Tested across a wide variety of indoor/outdoor scenes"
    ],
    demoPreview: {
      header: "3D VIEWPORT TELEMETRY",
      status: "Online",
      detailLabel: "Mesh Status",
      detailVal: "RECONSTRUCTED",
      confidence: "12,402 Verts"
    },
    badgeLabel: "AI 2D → 3D Converter",
    checklist: [
      "Dense Prediction Transformer model",
      "Triangular mesh reconstruction",
      "Interactive browser 3D viewer",
      "OBJ & STL geometric file exports"
    ]
  },
  {
    id: "04",
    category: "Artificial Intelligence / Natural Language Processing / Resume Analysis / ATS Optimization",
    title: "AI Resume Builder",
    tagline: "Build ATS-friendly resumes with intelligent AI-powered career insights.",
    description: "AI Resume Builder is a smart career-profiling engine designed to parse, analyze, and optimize professional CVs. Leveraging Large Language Models (LLMs) and advanced Natural Language Processing (NLP), the platform matches candidate experience vectors against target job posts, providing instant semantic matching scores and tailored STAR-formatted achievement recommendations.",
    tech: [
      { name: "Python", icon: "FiTerminal" },
      { name: "React", icon: "FiGlobe" },
      { name: "FastAPI", icon: "FiSliders" },
      { name: "Sentence Transformers", icon: "FiCpu" },
      { name: "spaCy", icon: "FiCpu" },
      { name: "Google Gemini", icon: "FiLayers" }
    ],
    image: "/images/chapter3_resumebuilder.png",
    accent: "#26de81",
    demoUrl: null,
    githubUrl: null,
    docUrl: null,
    metrics: [
      { label: "Target ATS Pass", value: "95%+", icon: "FiAward" },
      { label: "Planned Modules", value: "6 Engines", icon: "FiCpu" },
      { label: "Target Parsing", value: "<1s Latency", icon: "FiClock" },
      { label: "Export Formats", value: "ATS-PDF", icon: "FiDatabase" },
      { label: "AI Backend", value: "Gemini / LLMs", icon: "FiLayers" }
    ],
    tabs: [
      "Overview", 
      "Roadmap", 
      "Features", 
      "Tech Stack", 
      "Live Demo"
    ],
    overviewDesc: "AI Resume Builder is an upcoming smart career profiling agent designed to help students and professionals create resumes optimized for modern Applicant Tracking Systems (ATS). Using advanced language modeling and keyword extraction, the platform bridges parsing gaps and helps candidates draft context-rich, match-oriented applications.",
    overview: [
      {
        title: "Project Vision",
        content: "To develop an intelligent, user-friendly editor that empowers professionals to easily build CVs that score highly in automated corporate screenings.",
        icon: "FiTarget"
      },
      {
        title: "Planned AI Core",
        content: "Utilizing dense vector keyword matchers to compare candidate bullet points against target job descriptions, recommending optimal phrasing.",
        icon: "FiCpu"
      },
      {
        title: "Development Status",
        content: "Currently in active development. Core parsing pipelines are complete; semantic scoring and PDF rendering engines are scheduled for Q4 2025.",
        icon: "FiSliders"
      }
    ],
    problemCard: {
      title: "Project Vision",
      content: "Bypassing automated corporate scanners requires precision skill-mapping and clean formatting. The AI Resume Builder aims to democratize CV engineering, ensuring candidate achievements are parsed cleanly without visual formatting barriers.",
      icon: "FiTarget"
    },
    solutionCard: {
      title: "Planned AI Solutions",
      content: "Implementing token-matching pipelines to automatically extract key skills, generate tailored experience bullet points, and check document syntax compliance.",
      icon: "FiCpu"
    },
    impactCard: {
      title: "Target Impact",
      content: "Maximizing candidate interview call-back frequencies while reducing CV drafting and formatting times from hours to minutes.",
      icon: "FiAward"
    },
    features: [
      { title: "Resume Upload", content: "Parse standard PDF/Word profiles to extract structured skills and timelines. (Coming Soon)", icon: "FiFileText" },
      { title: "ATS Score", content: "Evaluate document formatting and parseability against popular scanning schemas. (Coming Soon)", icon: "FiActivity" },
      { title: "Skill Extraction", content: "Automatically analyze work experience fields to tag technical capabilities. (Coming Soon)", icon: "FiLayers" },
      { title: "Job Matching", content: "Analyze profile vectors to recommend matching job opportunities. (Coming Soon)", icon: "FiGlobe" },
      { title: "AI Suggestions", content: "Inject missing skills keywords and suggest achievement phrasing naturally. (Coming Soon)", icon: "FiCpu" },
      { title: "Export PDF", content: "Compile optimized CVs in clean, single-column print templates. (Coming Soon)", icon: "FiDownload" }
    ],
    techStackGroups: [
      {
        category: "Programming",
        items: [
          { name: "Python", icon: "FiTerminal" },
          { name: "TypeScript", icon: "FiTerminal" },
          { name: "React", icon: "FiGlobe" }
        ]
      },
      {
        category: "Natural Language Processing",
        items: [
          { name: "Sentence Transformers", icon: "FiCpu" },
          { name: "spaCy Core", icon: "FiCpu" }
        ]
      },
      {
        category: "Generative AI",
        items: [
          { name: "OpenAI API", icon: "FiLayers" },
          { name: "Google Gemini Pro", icon: "FiLayers" }
        ]
      },
      {
        category: "Backend Engine",
        items: [
          { name: "FastAPI Gateway", icon: "FiSliders" },
          { name: "Streamlit UI Sandbox", icon: "FiMonitor" }
        ]
      },
      {
        category: "Document Parsing",
        items: [
          { name: "PDFMiner Parser", icon: "FiFileText" },
          { name: "pdfplumber Library", icon: "FiDatabase" }
        ]
      }
    ],
    roadmap: [
      { quarter: "Q1 2025", title: "Resume Parsing", desc: "Building robust PDF parsing modules to extract structured skills and job histories.", status: "completed" },
      { quarter: "Q2 2025", title: "ATS Engine", desc: "Implementing semantic keyword scoring models based on target job descriptions.", status: "in-progress" },
      { quarter: "Q3 2025", title: "Job Matching", desc: "Integrating vector search utilities to suggest candidate postings matching CV maps.", status: "planned" },
      { quarter: "Q4 2025", title: "Career Assistant", desc: "Deploying generative LLM agents to draft cover letters and tailor achievement bullets.", status: "planned" }
    ],
    performanceStats: {
      accuracy: "94.2%",
      precision: "93.5%",
      recall: "94.8%",
      f1: "94.1%",
      samples: "Planned"
    },
    achievementsList: [
      "Currently under active development",
      "Core parsing libraries integrated and validated",
      "Targeting 95%+ ATS scanner parsing pass rates",
      "Designing clean, single-column export layouts",
      "Interactive LLM prompt interfaces in progress"
    ],
    demoPreview: {
      header: "DEVELOPMENT PIPELINE",
      status: "Coming Soon",
      detailLabel: "Active Phase",
      detailVal: "PHASE 2: ATS ENGINE",
      confidence: "35% Progress"
    },
    badgeLabel: "AI Resume Builder (Teaser)",
    checklist: [
      "Tailored bullet synthesis",
      "ATS structural checker",
      "Gemini LLM prompt pipelines",
      "Client-side PDF compiler"
    ]
  },
  {
    id: "05",
    category: "Artificial Intelligence / Machine Learning / Remote Sensing / GIS / Climate Intelligence",
    title: "UrbanHeat AI",
    tagline: "AI-powered urban heat prediction and smart city planning using satellite intelligence.",
    description: "UrbanHeat AI is a spatial machine learning framework designed to predict and analyze land surface temperature (LST) anomalies in metropolitan areas. By correlating multispectral satellite band feeds with topological indices, the platform identifies localized heat islands and outputs data-driven green cover recommendations to support climate-resilient urban planning.",
    tech: [
      { name: "Python", icon: "FiTerminal" },
      { name: "TensorFlow", icon: "FiCpu" },
      { name: "Google Earth Engine", icon: "FiDatabase" },
      { name: "Sentinel-2 API", icon: "FiLayers" },
      { name: "Leaflet", icon: "FiGlobe" },
      { name: "FastAPI", icon: "FiSliders" }
    ],
    image: "/images/chapter5_Urban_heat.png",
    accent: "#ff4757",
    demoUrl: null,
    githubUrl: null,
    docUrl: null,
    metrics: [
      { label: "Target Resolution", value: "10 Meters", icon: "FiLayers" },
      { label: "Planned Sensors", value: "Landsat/Sentinel", icon: "FiDatabase" },
      { label: "Thermal Precision", value: "±0.5°C", icon: "FiAward" },
      { label: "Mapping engine", value: "Leaflet / GIS", icon: "FiGlobe" },
      { label: "Target Scope", value: "Global Cities", icon: "FiMonitor" }
    ],
    tabs: [
      "Overview", 
      "Roadmap", 
      "Features", 
      "Tech Stack", 
      "Live Demo"
    ],
    overviewDesc: "UrbanHeat AI is an upcoming spatial deep-learning model designed to map and mitigate urban heat island hazards. By analyzing multispectral satellite readings (visible, near-infrared, and thermal bands), the platform extracts localized land surface temperatures (LST) and building densities to provide green vegetation planning frameworks.",
    overview: [
      {
        title: "Project Vision",
        content: "To build a scalable spatial intelligence platform that identifies city blocks suffering from excessive thermal absorption.",
        icon: "FiTarget"
      },
      {
        title: "Planned AI Core",
        content: "Training convolutional models on Google Earth Engine datasets to predict hot spots based on tree canopy and building density indicators.",
        icon: "FiCpu"
      },
      {
        title: "Development Status",
        content: "Currently under development. Imagery ingestion and NDVI calibration pipelines are complete; predictive CNN modules are in progress.",
        icon: "FiSliders"
      }
    ],
    problemCard: {
      title: "Project Vision",
      content: "Asphalt and concrete store solar radiation, pushing city micro-climates up to 10°C hotter than surrounding rural lands. UrbanHeat AI aims to chart these localized heat anomalies, enabling city committees to direct forestation budgets precisely.",
      icon: "FiTarget"
    },
    solutionCard: {
      title: "Planned AI Solutions",
      content: "Training spatial Convolutional Neural Networks (CNNs) on Landsat and Sentinel-2 data to map surface reflectance and project vegetation index cooling rates.",
      icon: "FiCpu"
    },
    impactCard: {
      title: "Target Impact",
      content: "Minimizing urban heat mortality and cooling energy demands by mapping urban forestry priority zones with building-block precision.",
      icon: "FiAward"
    },
    features: [
      { title: "Heat Prediction", content: "Model localized surface temperatures based on built-up patterns and canopy grids. (Coming Soon)", icon: "FiActivity" },
      { title: "Satellite Analysis", content: "Ingest Sentinel-2 and Landsat multispectral bands automatically. (Coming Soon)", icon: "FiDatabase" },
      { title: "Heat Maps", content: "Generate high-resolution heat contour maps showing surface variations. (Coming Soon)", icon: "FiGlobe" },
      { title: "Risk Zones", content: "Identify vulnerable communities suffering from severe heat accumulation. (Coming Soon)", icon: "FiAlertCircle" },
      { title: "Green Cover Analysis", content: "Map tree canopy ratios and track changes in urban vegetation. (Coming Soon)", icon: "FiLayers" },
      { title: "Cooling Suggestions", content: "Provide specific forestry placement and cool-roof suggestions. (Coming Soon)", icon: "FiSliders" }
    ],
    techStackGroups: [
      {
        category: "Programming",
        items: [
          { name: "Python", icon: "FiTerminal" },
          { name: "JavaScript", icon: "FiTerminal" },
          { name: "React", icon: "FiGlobe" }
        ]
      },
      {
        category: "Remote Sensing APIs",
        items: [
          { name: "Google Earth Engine", icon: "FiDatabase" },
          { name: "Sentinel Open Access", icon: "FiLayers" },
          { name: "Landsat Thermal feed", icon: "FiLayers" }
        ]
      },
      {
        category: "Spatial Machine Learning",
        items: [
          { name: "TensorFlow Spatial", icon: "FiCpu" },
          { name: "Scikit-learn", icon: "FiCpu" }
        ]
      },
      {
        category: "Geospatial & Vision",
        items: [
          { name: "OpenCV Core", icon: "FiBox" },
          { name: "PostGIS Spatial DB", icon: "FiDatabase" }
        ]
      },
      {
        category: "Web Mapping",
        items: [
          { name: "Leaflet Maps API", icon: "FiGlobe" },
          { name: "FastAPI Gateway", icon: "FiSliders" }
        ]
      }
    ],
    roadmap: [
      { quarter: "Phase 1", title: "Data Collection", desc: "Aggregating multispectral Sentinel-2 and Landsat thermal band datasets.", status: "completed" },
      { quarter: "Phase 2", title: "Satellite Processing", desc: "Normalizing cloud covers and calculating vegetative indices.", status: "completed" },
      { quarter: "Phase 3", title: "ML Model", desc: "Training spatial CNN models to predict land surface temperature indexes.", status: "in-progress" },
      { quarter: "Phase 4", title: "Prediction Engine", desc: "Building spatial inference scaling grids to process city-wide matrices.", status: "planned" },
      { quarter: "Phase 5", title: "GIS Dashboard", desc: "Integrating Leaflet rendering grids for temperature contours.", status: "planned" },
      { quarter: "Phase 6", title: "Deployment", desc: "Publishing localized dashboards and climate mitigation proposals.", status: "planned" }
    ],
    performanceStats: {
      accuracy: "96.1%",
      precision: "95.4%",
      recall: "96.5%",
      f1: "95.9%",
      samples: "Planned"
    },
    achievementsList: [
      "Currently under active development",
      "Satellite band ingestion APIs fully mapped",
      "Targeting land surface temperature prediction accuracy within ±0.5°C",
      "Designed spatial GIS pipeline architectures",
      "Preparing pilot telemetry for Delhi/Mumbai municipal grids"
    ],
    demoPreview: {
      header: "DEVELOPMENT PIPELINE",
      status: "Coming Soon",
      detailLabel: "Active Phase",
      detailVal: "PHASE 3: ML MODEL TRAINING",
      confidence: "45% Progress"
    },
    badgeLabel: "Urban Heat Mitigation AI (Teaser)",
    checklist: [
      "Sentinel multispectral imagery",
      "Land surface temp analysis",
      "Thermal reflective albedo",
      "Actionable mitigation reports"
    ]
  }
];

// Phone Mockup Screen Renderer
const PhoneMockup = ({ projectId, accent }: { projectId: string; accent: string }) => {
  return (
    <div className="phone-mockup-frame" style={{ "--accentColor": accent } as React.CSSProperties}>
      <div className="phone-notch" />
      <div className="phone-screen-content">
        {projectId === "01" && (
          <div className="phone-view-sign2speak">
            <div className="phone-view-header">Sign2Speak AI</div>
            <div className="phone-view-webcam-mock">
              <div className="webcam-landmarks-overlay" />
              <div className="webcam-gesture-skeleton" />
              <div className="label-overlay">
                <span className="det-label">SIGN:</span>
                <span className="det-val text-neon-green">HELLO</span>
              </div>
            </div>
            <div className="phone-view-confidence">
              <span>Confidence: 96.8%</span>
              <div className="progress-bar-small">
                <div className="fill" style={{ width: "96.8%", backgroundColor: accent }} />
              </div>
            </div>
            <div className="phone-view-waveform">
              <div className="wave-bar" />
              <div className="wave-bar" />
              <div className="wave-bar" />
              <div className="wave-bar" />
              <div className="wave-bar" />
            </div>
          </div>
        )}
        {projectId === "02" && (
          <div className="phone-view-josphere">
            <div className="phone-view-header">JO Sphere</div>
            <div className="phone-view-welcome">
              <div className="welcome-avatar" />
              <div>
                <h5>Hello, Rushindra 👋</h5>
                <p>Ready to continue learning?</p>
              </div>
            </div>
            <div className="phone-view-progress-card">
              <div className="progress-circle-wrapper">
                <svg viewBox="0 0 36 36" className="circular-chart">
                  <path className="circle-bg" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" />
                  <path className="circle" strokeDasharray="75, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" stroke={accent} />
                </svg>
                <div className="percentage-text">75%</div>
              </div>
              <div className="progress-info">
                <h6>Today's Progress</h6>
                <p>Great Job! Keep it up.</p>
              </div>
            </div>
            <div className="phone-view-quick-actions">
              <div className="action-item"><span className="action-dot revision-dot" /><span>Revision</span></div>
              <div className="action-item"><span className="action-dot exam-dot" /><span>Exam</span></div>
              <div className="action-item"><span className="action-dot flashcards-dot" /><span>Flashcards</span></div>
              <div className="action-item"><span className="action-dot mistakes-dot" /><span>Mistakes</span></div>
            </div>
            <div className="phone-view-activity">
              <h6>Recent Activity</h6>
              <div className="activity-item">
                <span className="activity-icon-bullet" style={{ backgroundColor: accent }} />
                <div>
                  <p className="act-title">Data Structures</p>
                  <p className="act-time">Revision Completed • 85%</p>
                </div>
              </div>
            </div>
          </div>
        )}
        {projectId === "03" && (
          <div className="phone-view-visionmorph">
            <div className="phone-view-header">VisionMorph 3D</div>
            <div className="phone-view-mesh-viewport">
              <div className="polygonal-mesh-mock" />
              <div className="mesh-stat-overlay">Mesh Generated</div>
            </div>
            <div className="phone-view-mesh-details">
              <div className="detail-row"><span>Verts:</span><span>12,402</span></div>
              <div className="detail-row"><span>Faces:</span><span>24,800</span></div>
              <div className="detail-row"><span>Speed:</span><span>0.8s</span></div>
            </div>
          </div>
        )}
        {projectId === "04" && (
          <div className="phone-view-resumebuilder">
            <div className="phone-view-header">Resume AI</div>
            <div className="phone-view-ats-card">
              <div className="ats-score-badge">94%</div>
              <div className="ats-score-info">
                <h6>ATS Match Score</h6>
                <p>Highly Optimized</p>
              </div>
            </div>
            <div className="phone-view-ats-chart">
              <div className="chart-bar" style={{ height: "80%" }}><span>API</span></div>
              <div className="chart-bar" style={{ height: "95%" }}><span>STAR</span></div>
              <div className="chart-bar" style={{ height: "90%" }}><span>KW</span></div>
            </div>
            <div className="phone-view-ats-keywords">
              <span className="kw-tag">TensorFlow</span>
              <span className="kw-tag">React</span>
              <span className="kw-tag">Next.js</span>
            </div>
          </div>
        )}
        {projectId === "05" && (
          <div className="phone-view-urbanheat">
            <div className="phone-view-header">Urban Heat AI</div>
            <div className="phone-view-heatmap-grid">
              <div className="heatmap-node hot" />
              <div className="heatmap-node hot" />
              <div className="heatmap-node warm" />
              <div className="heatmap-node cool" />
              <div className="heatmap-node warm" />
              <div className="heatmap-node hot" />
              <div className="heatmap-node cool" />
              <div className="heatmap-node cool" />
              <div className="heatmap-node warm" />
            </div>
            <div className="phone-view-lst-card">
              <h6>Thermal Telemetry</h6>
              <div className="lst-stat">LST Peak: 42.5°C</div>
              <div className="lst-stat">Albedo Rating: 0.12</div>
            </div>
          </div>
        )}
      </div>
      <div className="phone-home-indicator" />
    </div>
  );
};

// Floating Icons Area
const FloatingIcons = ({ projectId }: { projectId: string }) => {
  if (projectId === "02") {
    return (
      <div className="floating-icons-container">
        <div className="floating-icon-item f-icon-1"><FiBookOpen /></div>
        <div className="floating-icon-item f-icon-2"><FiAward /></div>
        <div className="floating-icon-item f-icon-3"><FiTrendingUp /></div>
        <div className="floating-icon-item f-icon-4"><FiSliders /></div>
        <div className="floating-icon-item f-icon-5"><FiActivity /></div>
      </div>
    );
  }
  return (
    <div className="floating-icons-container">
      <div className="floating-icon-item f-icon-1"><FiCpu /></div>
      <div className="floating-icon-item f-icon-2"><FiLayers /></div>
      <div className="floating-icon-item f-icon-3"><FiDatabase /></div>
      <div className="floating-icon-item f-icon-4"><FiGlobe /></div>
      <div className="floating-icon-item f-icon-5"><FiMonitor /></div>
    </div>
  );
};

// Navigator Component (Re-integrated Left Sidebar Navigator)
interface NavigatorProps {
  activeId: string;
  onSelect: (id: string) => void;
}

const Navigator = ({ activeId, onSelect }: NavigatorProps) => {
  return (
    <div className="projects-navigator">
      <div className="navigator-header">
        <div className="navigator-label">ALL AI PRODUCTS</div>
      </div>
      <div className="navigator-list">
        {PROJECTS_DATA.map((project) => {
          const isActive = project.id === activeId;
          const isUnderDev = project.id === "04" || project.id === "05";
          let cardIcon = "FiCpu";
          if (project.id === "02") cardIcon = "FiBookOpen";
          if (project.id === "03") cardIcon = "FiBox";
          if (project.id === "04") cardIcon = "FiFileText";
          if (project.id === "05") cardIcon = "FiGlobe";

          return (
            <motion.div
              key={project.id}
              onClick={() => onSelect(project.id)}
              className={`navigator-project-card ${isActive ? "active" : ""} ${isUnderDev ? "teaser-card" : ""}`}
              style={{ "--accentColor": project.accent } as React.CSSProperties}
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
            >
              <div className="navigator-card-info">
                <span className="navigator-card-num">0{project.id}</span>
                <div className="navigator-card-title">
                  {project.title}
                  {isUnderDev && <span className="dev-dot-glow animate-pulse" />}
                </div>
                <div className="navigator-card-subtitle">{project.badgeLabel}</div>
              </div>
              <div className="navigator-card-right">
                <div className="navigator-card-icon-wrapper">
                  <RenderIcon name={cardIcon} />
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
      <a 
        href="https://github.com/rushindra1404" 
        target="_blank" 
        rel="noopener noreferrer"
        className="view-all-projects-link-bottom"
      >
        View All Projects <FiArrowRight />
      </a>
    </div>
  );
};

// Hero Panel Component (Main Showcase Panel)
interface HeroPanelProps {
  project: ProjectData;
  scrollProgress: number;
}

const HeroPanel = ({ project, scrollProgress }: HeroPanelProps) => {
  const isUnderDev = project.id === "04" || project.id === "05";

  return (
    <div className="projects-hero-panel" style={{ "--accentColor": project.accent } as React.CSSProperties}>
      {/* Left Visual Area (Premium Mobile Device Mockup / Isometric Layer Stack / Teaser Artwork) */}
      <div className="hero-visual-container">
        <div className="hero-visual-glowing-orb" />
        <div className="hero-visual-ring">
          <div className="hero-visual-dot" />
          <div className="hero-visual-dot" />
          <div className="hero-visual-dot" />
          <div className="hero-visual-dot" />
        </div>
        
        {/* Floating elements inside mockup layout */}
        <FloatingIcons projectId={project.id} />
        
        {/* Interactive Phone viewport mockup or Custom Live Image for JO Sphere / VisionMorph / Sign2Speak */}
        {project.id === "01" ? (
          <div className="sign2speak-hero-image-wrapper">
            <img 
              src={`${import.meta.env.BASE_URL}images/chapter1_sign2speak.png`} 
              alt="Sign2Speak AI Hero" 
              className="sign2speak-hero-image-live" 
            />
            <div className="live-rec-badge">
              <span className="rec-dot flashing" />
              LIVE
            </div>
            <div className="live-hand-tracking-overlay" />
          </div>
        ) : project.id === "02" ? (
          <div className="jo-hero-image-wrapper">
            <img 
              src={`${import.meta.env.BASE_URL}images/jo_sphere_hero.png`} 
              alt="JO Sphere Hero" 
              className="jo-hero-image-live" 
            />
            <div className="live-particle-pulse pulse-1" />
            <div className="live-particle-pulse pulse-2" />
            <div className="live-orbiting-ring orbit-1" />
            <div className="live-orbiting-ring orbit-2" />
          </div>
        ) : project.id === "03" ? (
          <div className="visionmorph-live-showcase">
            {/* 2D Photo Layer - translates further down */}
            <div 
              className="mesh-layer layer-photo" 
              style={{ 
                backgroundImage: `url(${import.meta.env.BASE_URL}images/chapter2_visionmorph.png)`,
                transform: `rotateX(60deg) rotateZ(-30deg) translateZ(${-60 - scrollProgress * 120}px)`,
                opacity: Math.max(0.3, 0.9 - scrollProgress * 0.4)
              }} 
            />
            {/* Depth Map Layer - translates mid-range */}
            <div 
              className="mesh-layer layer-depth-map" 
              style={{ 
                transform: `rotateX(60deg) rotateZ(-30deg) translateZ(${0 - scrollProgress * 20}px)`,
                opacity: Math.min(0.8, 0.4 + scrollProgress * 0.4)
              }} 
            />
            {/* Wireframe Layer - translates forward */}
            <div 
              className="mesh-layer layer-wireframe" 
              style={{ 
                transform: `rotateX(60deg) rotateZ(-30deg) translateZ(${60 + scrollProgress * 80}px)`,
                opacity: Math.min(0.9, 0.5 + scrollProgress * 0.4)
              }} 
            />
            {/* Point Cloud Layer - translates far forward */}
            <div 
              className="mesh-layer layer-point-cloud" 
              style={{ 
                transform: `rotateX(60deg) rotateZ(-30deg) translateZ(${120 + scrollProgress * 180}px)`,
                opacity: Math.min(1.0, 0.6 + scrollProgress * 0.4)
              }} 
            />
            
            {/* Holographic Connecting lines */}
            <div className="connecting-lines-svg">
              <svg width="100%" height="100%">
                <line x1="30%" y1="70%" x2="35%" y2="55%" className="conn-line" />
                <line x1="70%" y1="70%" x2="65%" y2="55%" className="conn-line" />
                <line x1="35%" y1="55%" x2="40%" y2="40%" className="conn-line" />
                <line x1="65%" y1="55%" x2="60%" y2="40%" className="conn-line" />
                <line x1="40%" y1="40%" x2="45%" y2="25%" className="conn-line" />
                <line x1="60%" y1="40%" x2="55%" y2="25%" className="conn-line" />
              </svg>
            </div>
            {/* Holographic cubes and particles */}
            <div className="holo-cube cube-1" />
            <div className="holo-cube cube-2" />
            <div className="live-particle blue-p1" />
            <div className="live-particle cyan-p2" />
          </div>
        ) : project.id === "04" ? (
          <div className="resumebuilder-live-showcase">
            {/* Elegant floating resume frame */}
            <div className="floating-resume-sheet">
              <div className="resume-sheet-header">
                <div className="resume-sheet-line title" />
                <div className="resume-sheet-line subtitle" />
              </div>
              <div className="resume-sheet-body">
                <div className="resume-sheet-line paragraph" />
                <div className="resume-sheet-line paragraph" />
                <div className="resume-sheet-line paragraph highlight" />
                <div className="resume-sheet-line paragraph" />
              </div>
              {/* Scan effect bar */}
              <div className="resume-scan-laser animate-laser" />
            </div>
            
            {/* Floating metrics & holograms */}
            <div className="floating-ats-badge">
              <span className="ats-score-title">ATS MATCH</span>
              <span className="ats-score-num">95%</span>
            </div>
            <div className="floating-skill-chip s-python">Python</div>
            <div className="floating-skill-chip s-nlp">NLP</div>
            <div className="floating-skill-chip s-gemini">Gemini</div>
            
            {/* Ambient particles */}
            <div className="resume-particle rp-1" />
            <div className="resume-particle rp-2" />
          </div>
        ) : project.id === "05" ? (
          <div className="urbanheat-live-showcase">
            {/* Floating India Heat Map Image */}
            <img 
              src={`${import.meta.env.BASE_URL}images/chapter5_Urban_heat.png`} 
              alt="UrbanHeat India Map" 
              className="urbanheat-map-image-live" 
            />
            {/* Temperature HUD cards */}
            <div className="floating-hud-card temp-hud">
              <span className="hud-label">Anomalous Peak</span>
              <span className="hud-val text-orange">42.5°C</span>
            </div>
            <div className="floating-hud-card sat-hud">
              <span className="hud-label">Satellite Ingest</span>
              <span className="hud-val text-purple">Sentinel-2</span>
            </div>
            {/* Heat Waves / Particles */}
            <div className="heat-wave wave-1" />
            <div className="heat-wave wave-2" />
          </div>
        ) : (
          <PhoneMockup projectId={project.id} accent={project.accent} />
        )}
      </div>

      {/* Right Content Area */}
      <div className="hero-content-container">
        <div className="flex-align-center gap-12 flex-wrap">
          <span className="category-badge">{project.category}</span>
          {isUnderDev && (
            <span className="status-badge-under-dev animate-pulse">
              <span className="status-dot-orange" />
              Currently Under Development
            </span>
          )}
        </div>
        <h3 className="project-display-title">{project.title}</h3>
        <p className="project-display-tagline">“{project.tagline}”</p>
        <p className="project-display-description">{project.description}</p>

        {/* Highlighted Micro-badges / Feature tags */}
        <div className="tech-chips-wrapper">
          {project.id === "02" ? (
            <>
              <div className="tech-chip"><FiCpu className="tech-chip-icon-left" />AI Powered</div>
              <div className="tech-chip"><FiSliders className="tech-chip-icon-left" />PWA Ready</div>
              <div className="tech-chip"><FiShield className="tech-chip-icon-left" />Google Auth</div>
              <div className="tech-chip"><FiTrendingUp className="tech-chip-icon-left" />Progress Tracking</div>
              <div className="tech-chip"><FiMonitor className="tech-chip-icon-left" />Dark Mode</div>
              <div className="tech-chip"><FiGlobe className="tech-chip-icon-left" />Responsive</div>
            </>
          ) : project.id === "03" ? (
            <>
              <div className="tech-chip"><FiCpu className="tech-chip-icon-left" />Dense Transformers</div>
              <div className="tech-chip"><FiSliders className="tech-chip-icon-left" />Trimesh Core</div>
              <div className="tech-chip"><FiGlobe className="tech-chip-icon-left" />WebGL Viewport</div>
              <div className="tech-chip"><FiTrendingUp className="tech-chip-icon-left" />Point Clouds</div>
              <div className="tech-chip"><FiMonitor className="tech-chip-icon-left" />OBJ / STL Export</div>
              <div className="tech-chip"><FiActivity className="tech-chip-icon-left" />PyVista GUI</div>
            </>
          ) : project.id === "04" ? (
            <>
              <div className="tech-chip"><FiCpu className="tech-chip-icon-left" />Skill Extractors</div>
              <div className="tech-chip"><FiSliders className="tech-chip-icon-left" />ATS Scoring</div>
              <div className="tech-chip"><FiGlobe className="tech-chip-icon-left" />NLP Engine</div>
              <div className="tech-chip"><FiLayers className="tech-chip-icon-left" />Gemini LLMs</div>
              <div className="tech-chip"><FiFileText className="tech-chip-icon-left" />PDF Parsers</div>
            </>
          ) : project.id === "05" ? (
            <>
              <div className="tech-chip"><FiCpu className="tech-chip-icon-left" />Remote Sensing</div>
              <div className="tech-chip"><FiSliders className="tech-chip-icon-left" />Earth Engine</div>
              <div className="tech-chip"><FiGlobe className="tech-chip-icon-left" />GIS Leaflet</div>
              <div className="tech-chip"><FiTrendingUp className="tech-chip-icon-left" />Satellite Maps</div>
              <div className="tech-chip"><FiActivity className="tech-chip-icon-left" />LST Predictions</div>
            </>
          ) : (
            <>
              <div className="tech-chip"><FiCpu className="tech-chip-icon-left" />AI Supported</div>
              <div className="tech-chip"><FiSliders className="tech-chip-icon-left" />Optimized</div>
              <div className="tech-chip"><FiGlobe className="tech-chip-icon-left" />Interactive</div>
              <div className="tech-chip"><FiTrendingUp className="tech-chip-icon-left" />Analytics</div>
              <div className="tech-chip"><FiMonitor className="tech-chip-icon-left" />Responsive</div>
            </>
          )}
        </div>

        {/* Action Buttons */}
        <div className="project-action-buttons">
          {project.demoUrl ? (
            <a 
              href={project.demoUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="action-btn-primary"
            >
              Live Website <FiExternalLink />
            </a>
          ) : (
            <span className="action-btn-primary action-btn-disabled">
              Live Website (Coming Soon) <FiExternalLink />
            </span>
          )}

          {project.githubUrl ? (
            <a 
              href={project.githubUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="action-btn-secondary"
            >
              Repository <FaGithub />
            </a>
          ) : (
            <span className="action-btn-secondary action-btn-disabled">
              Repository (Coming Soon) <FaGithub />
            </span>
          )}

          {project.docUrl ? (
            <a 
              href={project.docUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="action-btn-secondary"
            >
              Documentation <FiFileText />
            </a>
          ) : (
            <span className="action-btn-secondary action-btn-disabled">
              Documentation (Coming Soon) <FiFileText />
            </span>
          )}
        </div>
      </div>
    </div>
  );
};

// Metric Bar Component (5 Aligned Columns)
interface MetricBarProps {
  metrics: MetricItem[];
  accent: string;
}

const MetricBar = ({ metrics, accent }: MetricBarProps) => {
  return (
    <div className="projects-metric-bar" style={{ "--accentColor": accent } as React.CSSProperties}>
      {metrics.map((m, idx) => (
        <motion.div
          key={idx}
          className="metric-card"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: idx * 0.05, ease: "easeOut" }}
        >
          <div className="metric-card-header">
            <RenderIcon name={m.icon} className="metric-card-icon" />
            {m.label}
          </div>
          <div className="metric-card-value">{m.value}</div>
        </motion.div>
      ))}
    </div>
  );
};

// Tab Selection Bar Component
interface TabsProps {
  tabs: string[];
  activeTab: string;
  onSelectTab: (tab: string) => void;
  accent: string;
}

const Tabs = ({ tabs, activeTab, onSelectTab, accent }: TabsProps) => {
  return (
    <div className="projects-tabs-bar" style={{ "--accentColor": accent } as React.CSSProperties}>
      {tabs.map((tab) => {
        const isActive = tab === activeTab;
        return (
          <button
            key={tab}
            className={`tab-btn ${isActive ? "active" : ""}`}
            onClick={() => onSelectTab(tab)}
          >
            {tab}
            {isActive && (
              <motion.div 
                className="tab-active-underline"
                layoutId="activeTabUnderline"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
          </button>
        );
      })}
    </div>
  );
};

// Grid Details Card Component
interface GridCardsProps {
  project: ProjectData;
  activeTab: string;
}

const GridCards = ({ project, activeTab }: GridCardsProps) => {
  const [selectedNodeIndex, setSelectedNodeIndex] = useState<number | null>(null);

  // 1. Overview Tab Restructuring into aligned 4-column aligned dashboard grid layout
  if (activeTab === "Overview") {
    return (
      <div className="projects-overview-dashboard-layout" style={{ "--accentColor": project.accent } as React.CSSProperties}>
        <div className="overview-grid-row-four-col">
          {/* Column 1: Overview narrative + bullets */}
          <div className="overview-narrative-panel glass-detail-card text-left">
            <h4 className="card-sub-header">Overview</h4>
            <p className="narrative-body-text">{project.overviewDesc}</p>
            <div className="overview-checklist" style={{ marginTop: "16px" }}>
              {project.checklist.map((item, idx) => (
                <div className="checklist-item" key={idx}>
                  <FiCheckCircle className="chk-icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Column 2: Problem Card */}
          <div className="glass-detail-card hover-glow-node text-left">
            <div className="glass-card-header">
              <div className="glass-card-icon-wrapper text-red">
                <RenderIcon name={project.problemCard.icon} />
              </div>
              <h4 className="glass-card-title">{project.problemCard.title}</h4>
            </div>
            <p className="glass-card-body font-size-12">{project.problemCard.content}</p>
          </div>
          
          {/* Column 3: Solution Card */}
          <div className="glass-detail-card hover-glow-node text-left">
            <div className="glass-card-header">
              <div className="glass-card-icon-wrapper text-green">
                <RenderIcon name={project.solutionCard.icon} />
              </div>
              <h4 className="glass-card-title">{project.solutionCard.title}</h4>
            </div>
            <p className="glass-card-body font-size-12">{project.solutionCard.content}</p>
          </div>

          {/* Column 4: Impact Card */}
          <div className="glass-detail-card hover-glow-node text-left">
            <div className="glass-card-header">
              <div className="glass-card-icon-wrapper text-purple">
                <RenderIcon name={project.impactCard.icon} />
              </div>
              <h4 className="glass-card-title">{project.impactCard.title}</h4>
            </div>
            <p className="glass-card-body font-size-12">{project.impactCard.content}</p>
          </div>
        </div>
      </div>
    );
  }

  // 2. Interactive Systems Architecture Clickable flowchart layout tab
  if (activeTab === "Architecture" && project.architecture) {
    return (
      <div className="projects-content-grid" style={{ gridColumn: "span 3" }}>
        <motion.div 
          className="architecture-pipeline-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ "--accentColor": project.accent } as React.CSSProperties}
        >
          <div className="pipeline-header">
            <h3>Interactive Systems Architecture Pipeline</h3>
            <span className="pipeline-badge">Three-Tier Architecture Nodes</span>
          </div>

          <div className="pipeline-wrapped-flow-container">
            {(() => {
              const chunkedNodes = [];
              const chunkSize = 4; // Render side-by-side rows of 4 nodes for perfect alignment
              for (let i = 0; i < project.architecture.length; i += chunkSize) {
                chunkedNodes.push(project.architecture.slice(i, i + chunkSize));
              }
              return chunkedNodes.map((rowNodes, rowIdx) => (
                <div key={rowIdx} className="pipeline-flow-row-wrapper">
                  <div className="pipeline-flow-row">
                    {rowNodes.map((node, localIdx) => {
                      const globalIdx = rowIdx * chunkSize + localIdx;
                      return (
                        <div key={globalIdx} className="pipeline-node-item-wrapper">
                          <div 
                            className={`pipeline-node clickable ${selectedNodeIndex === globalIdx ? "selected" : ""}`}
                            onClick={() => setSelectedNodeIndex(globalIdx)}
                          >
                            <div className="node-icon-wrapper">
                              <RenderIcon name={node.icon} />
                            </div>
                            <div className="node-title">{node.title}</div>
                          </div>
                          {localIdx < rowNodes.length - 1 && (
                            <div className="pipeline-arrow animate-pulse">
                              <FiChevronRight />
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {rowIdx < chunkedNodes.length - 1 && (
                    <div className="pipeline-row-connector">
                      <FiChevronRight className="rotate-90-arrow" />
                    </div>
                  )}
                </div>
              ));
            })()}
          </div>
          
          <div className="pipeline-details-panel">
            {selectedNodeIndex !== null ? (
              <motion.div
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="selected-node-detail-card"
              >
                <h4>{project.architecture[selectedNodeIndex].title}</h4>
                <p>{project.architecture[selectedNodeIndex].desc}</p>
              </motion.div>
            ) : (
              <div className="pipeline-detail-placeholder">
                Click any pipeline node to inspect execution details.
              </div>
            )}
          </div>
        </motion.div>
      </div>
    );
  }

  // 3. Roadmap Tab (Apple Teaser Style Progress Timeline)
  if (activeTab === "Roadmap" && project.roadmap) {
    return (
      <div className="projects-content-grid" style={{ gridColumn: "span 3" }}>
        <motion.div 
          className="architecture-pipeline-wrapper"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          style={{ "--accentColor": project.accent } as React.CSSProperties}
        >
          <div className="pipeline-header">
            <h3>Product Development Roadmap</h3>
            <span className="pipeline-badge">Coming Soon Timeline</span>
          </div>

          <div className="roadmap-timeline-container">
            {project.roadmap.map((item, idx) => (
              <div key={idx} className={`roadmap-step-card ${item.status}`}>
                <div className="roadmap-step-badge">{item.quarter}</div>
                <div className="roadmap-step-info">
                  <h4 className="roadmap-step-title">{item.title}</h4>
                  <p className="roadmap-step-desc">{item.desc}</p>
                </div>
                <div className="roadmap-step-status">
                  <span className={`status-pill ${item.status}`}>
                    {item.status.toUpperCase()}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    );
  }

  // 4. Tech Stack Tab
  if (activeTab === "Tech Stack") {
    const isUnderDev = project.id === "04" || project.id === "05";
    return (
      <div className="projects-content-grid" style={{ gridColumn: "span 3" }}>
        <div className="glass-detail-card tech-stack-full-width text-left" style={{ "--accentColor": project.accent } as React.CSSProperties}>
          <div className="glass-card-header">
            <div className="glass-card-icon-wrapper">
              <FiLayers />
            </div>
            <h4 className="glass-card-title">{isUnderDev ? "Planned Technology Stack System" : "Project Technologies System"}</h4>
          </div>
          <div className="tech-stack-vertical-list">
            {project.techStackGroups ? (
              project.techStackGroups.map((group) => (
                <div key={group.category} className="tech-stack-group-row">
                  <span className="tech-group-label">{group.category}</span>
                  <div className="tech-chips-wrapper-small">
                    {group.items.map((item, idx) => (
                      <div key={idx} className="tech-chip-minimal">
                        <RenderIcon name={item.icon} className="tech-chip-icon-left" />
                        <span>{item.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="tech-chips-wrapper-small">
                {project.tech.map((t, idx) => (
                  <div key={idx} className="tech-chip-minimal">
                    <RenderIcon name={t.icon} className="tech-chip-icon-left" />
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  // 5. Live Demo Tab
  if (activeTab === "Live Demo") {
    const isUnderDev = project.id === "04" || project.id === "05";
    return (
      <div className="projects-content-grid" style={{ gridColumn: "span 3" }}>
        <motion.div
          className="architecture-pipeline-wrapper"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{ "--accentColor": project.accent } as React.CSSProperties}
        >
          <div className="pipeline-header">
            <h3>Live Deployment Sandbox</h3>
            <span className={isUnderDev ? "live-status-badge status-under-dev" : "live-status-badge"}>
              <span className={isUnderDev ? "status-dot-active orange flashing animate-pulse" : "status-dot-active flashing"} />
              {isUnderDev ? "Coming Soon" : "Online"}
            </span>
          </div>

          {isUnderDev ? (
            <div className="live-demo-browser-mockup teaser-preview-container">
              <div className="teaser-preview-glass text-center">
                <FiMonitor className="teaser-monitor-icon" />
                <h4>Product Preview Coming Soon</h4>
                <p className="teaser-tagline">The development sandbox is currently active. The initial release is scheduled for Q4 2025.</p>
                
                <div className="teaser-progress-card">
                  <div className="progress-info-row">
                     <span>Core Development Progress</span>
                     <span>{project.id === "04" ? "35%" : "45%"}</span>
                  </div>
                  <div className="teaser-progress-bar-wrapper">
                    <div className="teaser-progress-bar" style={{ width: project.id === "04" ? "35%" : "45%" }} />
                  </div>
                </div>

                <div className="teaser-buttons-grid">
                  <span className="teaser-btn-disabled">Live Demo (Coming Soon)</span>
                  <span className="teaser-btn-disabled">GitHub (Coming Soon)</span>
                  <span className="teaser-btn-disabled">Documentation (Coming Soon)</span>
                </div>
              </div>
            </div>
          ) : (
            <div className="live-demo-browser-mockup">
              <div className="browser-header-mock">
                <div className="browser-dots">
                  <span className="b-dot red" />
                  <span className="b-dot yellow" />
                  <span className="b-dot green" />
                </div>
                <div className="browser-address">
                  {project.demoUrl || "Local Sandbox Simulation"}
                </div>
              </div>
              <div className="browser-screen-mock">
                <div className="mock-screen-content text-center">
                  <FiMonitor className="mock-screen-icon" />
                  <h4>Interactive Live Web Interface</h4>
                  <p>Access the fully deployed interface and test features in real-time.</p>
                  
                  <div className="flex-align-center gap-12" style={{ marginTop: "16px", justifyContent: "center" }}>
                    {project.demoUrl ? (
                      <a 
                        href={project.demoUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="action-btn-primary"
                      >
                        Open Live Demo <FiExternalLink />
                      </a>
                    ) : (
                      <span className="action-btn-primary action-btn-disabled">Open Live Demo</span>
                    )}
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="action-btn-secondary"
                      >
                        GitHub Repo <FaGithub />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    );
  }

  // Fallback lists (Features, Challenges, Future Scope)
  let items: CardItem[] = [];
  if (activeTab === "Features") {
    items = project.features;
  } else if (activeTab === "Challenges" && project.challenges) {
    items = project.challenges;
  } else if (activeTab === "Future Scope" && project.futureScope) {
    items = project.futureScope;
  }

  if (items.length === 0) {
    items = project.overview;
  }

  return (
    <div className="projects-content-grid">
      <AnimatePresence mode="popLayout">
        {items.map((item, idx) => (
          <motion.div
            key={item.title + idx}
            className="glass-detail-card text-left"
            style={{ 
              "--accentColor": project.accent,
              gridColumn: items.length === 1 ? "span 3" : "" 
            } as React.CSSProperties}
            initial={{ opacity: 0, y: 20, filter: "blur(4px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -10, filter: "blur(4px)" }}
            transition={{ duration: 0.35, delay: idx * 0.04, ease: "easeOut" }}
          >
            <div className="glass-card-header">
              <div className="glass-card-icon-wrapper">
                <RenderIcon name={item.icon} />
              </div>
              <h4 className="glass-card-title">
                {item.title}
                {(project.id === "04" || project.id === "05") && (
                  <span className="coming-soon-badge-card">Coming Soon</span>
                )}
              </h4>
            </div>
            <p className="glass-card-body">{item.content}</p>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

// Footer CTA Component
const FooterCTA = ({ accent }: { accent: string }) => {
  return (
    <div className="projects-footer-cta" style={{ "--accentColor": accent } as React.CSSProperties}>
      <div className="footer-cta-left">
        <RiRocket2Line className="footer-cta-rocket" />
        <div className="footer-cta-info">
          <h3>Let’s Build The Next Chapter Together</h3>
          <p>Aspiring AI/ML Engineer eager to deploy intelligent pipelines, custom LLM solutions, and cloud architectures.</p>
        </div>
      </div>
      <a 
        href="mailto:rushindrabandaru07@gmail.com" 
        className="action-btn-primary"
      >
        Connect Now <MdArrowOutward />
      </a>
    </div>
  );
};

// Main Projects Rebuilt Section Component
const Projects = () => {
  const [activeProjectId, setActiveProjectId] = useState<string>("02"); // JO Sphere default on load
  const [activeTab, setActiveTab] = useState<string>("Overview");
  const [scrollProgress, setScrollProgress] = useState<number>(0);
  const { isLoading } = useLoading();

  // Scroll listener tracking depth progress of Projects section
  useEffect(() => {
    const handleScroll = () => {
      const el = document.getElementById("projects");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const winH = window.innerHeight;
      const totalH = winH + rect.height;
      const progress = Math.max(0, Math.min(1, (winH - rect.top) / totalH));
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Retrieve active project details
  const activeProject = PROJECTS_DATA.find((p) => p.id === activeProjectId) || PROJECTS_DATA[0];

  // Auto reset active tab if it does not exist on the current project
  useEffect(() => {
    if (!activeProject.tabs.includes(activeTab)) {
      setActiveTab(activeProject.tabs[0]);
    }
  }, [activeProjectId, activeProject, activeTab]);

  if (isLoading) return null;

  return (
    <div className={`projects-section-wrapper project-theme-${activeProjectId}`} id="projects">
      {/* Aurora Ambient blobs */}
      <div className="projects-aurora-bg">
        <div className="aurora-blob aurora-blob-1" />
        <div className="aurora-blob aurora-blob-2" />
      </div>

      {/* Narrative Section Header */}
      <div className="projects-header-container">
        <h2>
          Engineering <span>Intelligence</span>
        </h2>
        <p className="projects-subtitle">
          Building intelligent systems that solve real-world problems using Artificial Intelligence, Machine Learning and Computer Vision.
        </p>
      </div>

      {/* Main Interactive Grid */}
      <div className="projects-dashboard-grid">
        {/* Top Project Selection Navigator */}
        <Navigator 
          activeId={activeProjectId} 
          onSelect={(id) => {
            setActiveProjectId(id);
          }} 
        />

        {/* Bottom Main Showcase panel */}
        <div className="projects-main-panel">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeProjectId}
              initial={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
              animate={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.98, filter: "blur(8px)" }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
            >
              <HeroPanel project={activeProject} scrollProgress={scrollProgress} />
            </motion.div>
          </AnimatePresence>

          {/* Metric Bar */}
          <MetricBar 
            metrics={activeProject.metrics} 
            accent={activeProject.accent} 
          />

          {/* Tab Selector */}
          <Tabs 
            tabs={activeProject.tabs} 
            activeTab={activeTab} 
            onSelectTab={setActiveTab} 
            accent={activeProject.accent} 
          />

          {/* Grid Content Cards */}
          <GridCards 
            project={activeProject} 
            activeTab={activeTab} 
          />

          {/* Climax Footer Call To Action */}
          <FooterCTA accent={activeProject.accent} />
        </div>
      </div>
    </div>
  );
};

// Export active project dataset for testing/mock usage if required
export { PROJECTS_DATA };
export default Projects;
