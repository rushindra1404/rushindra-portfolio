import { useState, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { MdArrowOutward } from "react-icons/md";
import { FaGithub, FaLinkedin, FaDownload, FaBriefcase } from "react-icons/fa";
import { motion } from "framer-motion";
import { useLoading } from "../context/LoadingProvider";
import "./styles/Projects.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

interface ProjectStory {
  problem: string;
  idea: string;
  process: string;
  result: string;
}

interface Project {
  id: string;
  badge: string;
  title: string;
  tagline: string;
  story: ProjectStory;
  tech: string[];
  image: string;
  accent: string;
}

const PROJECTS_DATA: Project[] = [
  {
    id: "01",
    badge: "Chapter 01: Beginning",
    title: "Sign2Speak",
    tagline: "Breaking communication barriers between sign language users and the world.",
    story: {
      problem: "Traditional communication methods exclude sign language users, creating severe barriers in everyday educational and professional environments.",
      idea: "Use modern vision models to become a bridge, translating gestures into spoken and written words instantly.",
      process: "Engineered a high-performance computer vision algorithm mapping gesture keypoints using TensorFlow and React.",
      result: "Enabled real-time, fluid gesture-to-speech translation with an accessibility-focused responsive dashboard."
    },
    tech: ["Computer Vision", "Gesture Recognition", "Real-time Translation", "Accessibility Focus"],
    image: "/images/chapter1_sign2speak.png",
    accent: "#c2a4ff"
  },
  {
    id: "02",
    badge: "Chapter 02: Learning Through Building",
    title: "VisionMorph",
    tagline: "Teaching machines to understand, segment, and transform visual information.",
    story: {
      problem: "Raw visual data lacks semantic understanding, making real-time image manipulations blocky and rules-rigid.",
      idea: "Explore how AI perceives and morphs shapes through deep visual representation and structural transforms.",
      process: "Wired convolutional deep learning networks using Python, PyTorch, and OpenCV image processing pipelines.",
      result: "Delivered real-time portrait morphology, highlighting neural layers and dynamic object classification."
    },
    tech: ["Computer Vision", "Image Processing", "Deep Learning", "Object Understanding"],
    image: "/images/chapter2_visionmorph.png",
    accent: "#4b7bec"
  },
  {
    id: "03",
    badge: "Chapter 03: Solving Real Problems",
    title: "AI Resume Builder",
    tagline: "Architecting ATS-optimized professional career profiles instantly.",
    story: {
      problem: "Creating professional profiles requires design expertise and hours of manual, ATS-hostile structuring.",
      idea: "Automate profile layout curation by dynamically tailoring high-impact highlights to job descriptions.",
      process: "Integrated Google Gemini context engines inside a React editor, enabling real-time structural suggestions.",
      result: "Boosted candidate matching and ATS passing rates while reducing resume creation timelines by 75%."
    },
    tech: ["Generative AI", "Resume Generation", "ATS Optimization", "PDF Export"],
    image: "/images/chapter3_resumebuilder.png",
    accent: "#26de81"
  },
  {
    id: "04",
    badge: "Chapter 04: Building Confidence",
    title: "AI Interview Coach",
    tagline: "Elevating mock preparation using personalized verbal evaluation metrics.",
    story: {
      problem: "Candidates suffer from severe interview anxiety and lack objective, structured behavioral feedback.",
      idea: "Establish an interactive mock evaluation portal that scores speech patterns and content delivery.",
      process: "Engineered NLP semantic processors and speech analysis modules inside a streamlined responsive panel.",
      result: "Provided speech pace metrics, filler-word counts, and detailed feedback to boost confidence."
    },
    tech: ["NLP", "Speech Analysis", "Mock Interviews", "Feedback Generation"],
    image: "/images/chapter4_interviewcoach.png",
    accent: "#fa8231"
  },
  {
    id: "05",
    badge: "Chapter 05: Future Vision",
    title: "Future Vision",
    tagline: "The best ideas are still loading...",
    story: {
      problem: "",
      idea: "",
      process: "",
      result: ""
    },
    tech: ["Multi-Agent Systems", "AI Startups", "3D AI Experiences", "Advanced Computer Vision", "Research Projects"],
    image: "/images/chapter5_futurevision.png",
    accent: "#fb8dff"
  }
];

interface ProjectCardProps {
  project: Project;
  index: number;
  cardRef: (el: HTMLDivElement | null) => void;
}

const ProjectCard = ({ project, index, cardRef }: ProjectCardProps) => {
  const isReverse = index % 2 === 1;

  // CHAPTER 05 (FUTURE VISION) UNIQUE IMMERSIVE TEMPLATE
  if (project.id === "05") {
    return (
      <div 
        className={`project-chapter-card future-vision-card ${isReverse ? "layout-reverse" : ""}`}
        ref={cardRef}
        style={{
          zIndex: index + 1,
          "--accentColor": project.accent
        } as React.CSSProperties}
      >
        <div 
          className="project-card-glow" 
          style={{ background: `radial-gradient(circle, ${project.accent} 0%, transparent 70%)` }}
        />

        {/* FLOATING GLASSMORPHIC INFO PANEL */}
        <div className="project-glass-info-panel">
          <div>
            <div className="project-chapter-badge">{project.badge}</div>
            <h3 className="project-title future-vision-title">“The best ideas are still loading...”</h3>
            <p className="project-tagline" style={{ marginTop: "8px" }}>
              Constantly researching, building, and exploring new frontiers in Artificial Intelligence and Machine Learning.
            </p>
            
            {/* Future concepts detailed list */}
            <div className="future-concepts-grid">
              <div className="future-concept-item">
                <div className="concept-bullet" />
                <div className="concept-info">
                  <h4>Multi-Agent Systems</h4>
                  <p>Orchestrating autonomous networks of specialized AI agents to solve compound, multi-stage engineering sprints.</p>
                </div>
              </div>
              <div className="future-concept-item">
                <div className="concept-bullet" />
                <div className="concept-info">
                  <h4>AI Startups & Ventures</h4>
                  <p>Transforming complex research prototypes into high-utility, secure commercial software platforms.</p>
                </div>
              </div>
              <div className="future-concept-item">
                <div className="concept-bullet" />
                <div className="concept-info">
                  <h4>3D Web & Immersive AI</h4>
                  <p>Merging computer vision deep networks with WebGL to engineer responsive 3D spatial intelligence.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="project-tech-grid">
            {project.tech.map((t) => (
              <motion.div 
                className="tech-node-chip" 
                key={t}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 450, damping: 15 }}
              >
                {t}
              </motion.div>
            ))}
          </div>
        </div>

        {/* FLOATING 3D INTERACTIVE SHOWCASE */}
        <div className="project-card-interactive-showcase">
          <div className="visual-image-container">
            <img 
              src={project.image.startsWith("/") ? import.meta.env.BASE_URL + project.image.slice(1) : project.image} 
              alt={project.title} 
              className="visual-showcase-img"
              loading="lazy"
            />
            <div className="visual-image-overlay" />
          </div>

          <div className="visual-glowing-orb" />
          <div className="wibify-orbiting-ring">
            <div className="wibify-node-dot" />
            <div className="wibify-node-dot" />
            <div className="wibify-node-dot" />
            <div className="wibify-node-dot" />
          </div>
        </div>
      </div>
    );
  }

  // STANDARD CHAPTERS TEMPLATE
  return (
    <div 
      className={`project-chapter-card ${isReverse ? "layout-reverse" : ""}`}
      ref={cardRef}
      style={{
        zIndex: index + 1,
        "--accentColor": project.accent
      } as React.CSSProperties}
    >
      <div 
        className="project-card-glow" 
        style={{ background: `radial-gradient(circle, ${project.accent} 0%, transparent 70%)` }}
      />

      {/* FLOATING GLASSMORPHIC INFO PANEL */}
      <div className="project-glass-info-panel">
        <div>
          <div className="project-chapter-badge">{project.badge}</div>
          <h3 className="project-title">{project.title}</h3>
          <p className="project-tagline">“{project.tagline}”</p>

          {/* Linear Story process timeline */}
          <div className="project-story-timeline">
            <div className="wibify-timeline-node">
              <div className="wibify-node-header">The Challenge</div>
              <p className="wibify-node-body">{project.story.problem}</p>
            </div>
            <div className="wibify-timeline-node">
              <div className="wibify-node-header">The Solution</div>
              <p className="wibify-node-body">{project.story.idea}</p>
            </div>
            <div className="wibify-timeline-node">
              <div className="wibify-node-header">The Development</div>
              <p className="wibify-node-body">{project.story.process}</p>
            </div>
            <div className="wibify-timeline-node">
              <div className="wibify-node-header">The Impact</div>
              <p className="wibify-node-body">{project.story.result}</p>
            </div>
          </div>
        </div>

        {/* Micro-spring technologies badges */}
        <div>
          <div className="project-tech-grid">
            {project.tech.map((t) => (
              <motion.div 
                className="tech-node-chip" 
                key={t}
                whileHover={{ scale: 1.04 }}
                transition={{ type: "spring", stiffness: 450, damping: 15 }}
              >
                {t}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FLOATING 3D INTERACTIVE SHOWCASE */}
      <div className="project-card-interactive-showcase">
        <div className="visual-image-container">
          <img 
            src={project.image.startsWith("/") ? import.meta.env.BASE_URL + project.image.slice(1) : project.image} 
            alt={project.title} 
            className="visual-showcase-img"
            loading="lazy"
          />
          <div className="visual-image-overlay" />
        </div>

        <div className="visual-glowing-orb" />
        
        {/* 3D Orbit coordinates */}
        <div className="wibify-orbiting-ring">
          <div className="wibify-node-dot" />
          <div className="wibify-node-dot" />
          <div className="wibify-node-dot" />
          <div className="wibify-node-dot" />
        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const [isDesktop, setIsDesktop] = useState<boolean>(true);
  const containerRef = useRef<HTMLDivElement>(null);
  const stickyContentRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const contactCardRef = useRef<HTMLDivElement>(null);
  const { isLoading } = useLoading();

  // Monitor desktop state
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth > 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Set card references
  const setCardRef = (index: number) => (el: HTMLDivElement | null) => {
    cardRefs.current[index] = el;
  };

  useGSAP(() => {
    if (isLoading) return;
    if (!isDesktop) return;

    const cards = cardRefs.current.filter((c): c is HTMLDivElement => c !== null);
    const contactCard = contactCardRef.current;
    if (cards.length === 0 || !contactCard) return;

    // 1. Initial State: Stack all cards absolutely
    // Card 0 starts active in viewport (y: 0)
    gsap.set(cards[0], { y: 0, scale: 1, opacity: 1, z: 0 });
    
    // Cards 1-4 & Contact card start off-screen below the viewport (y: "100vh")
    gsap.set(cards.slice(1), { y: "100vh", scale: 0.95, opacity: 0.85, z: 0 });
    gsap.set(contactCard, { y: "100vh", scale: 0.95, opacity: 0.85, z: 0 });

    // 2. Setup the pinned ScrollTrigger Timeline
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5,
        pin: stickyContentRef.current,
        pinSpacing: true,
        pinType: "transform",
        invalidateOnRefresh: true,
      }
    });

    const segment = 1;

    // 3. Chain Stacking & Climbing Kinematics over Scroll timeline
    for (let i = 0; i < 4; i++) {
      const startTime = i * segment;

      // Animate Card i (outgoing exits): slightly scale down, fade to 70%, translate backward
      tl.to(cards[i], {
        scale: 0.95,
        opacity: 0.7,
        y: -20,
        z: -40,
        filter: "blur(0.5px)",
        duration: segment,
        ease: "none"
      }, startTime)

      // Animate Card i+1 (climbing entries): rise from bottom (overlapping), scale to 1.0, fade 100%
      .to(cards[i + 1], {
        y: 0,
        scale: 1.0,
        opacity: 1.0,
        duration: segment,
        ease: "none"
      }, startTime);
    }

    // 4. Cinematic Contact Card Reveal (Chapter 5 Climax Segment)
    const finalStart = 4 * segment; // scroll time at Chapter 5

    // Card 4 (Chapter 05 Future Vision Card) glides up and dissolves
    tl.to(cards[4], {
      yPercent: -105,
      opacity: 0,
      filter: "blur(10px)",
      duration: segment,
      ease: "none"
    }, finalStart)

    // Preceding cards (0 to 3) fan out in the background fanned deck
    cards.slice(0, 4).forEach((card, idx) => {
      const scaleOffset = 0.84 + idx * 0.03; // fanned scales: 0.84, 0.87, 0.90, 0.93
      const yOffset = -60 + idx * 20;       // fanned y-offsets
      
      tl.to(card, {
        scale: scaleOffset,
        y: yOffset,
        opacity: 0.3,
        filter: "blur(6px)",
        duration: segment,
        ease: "none"
      }, finalStart);
    });

    // Contact Card climbs smoothly to the top layers spotlight
    tl.to(contactCard, {
      y: 0,
      scale: 1.0,
      opacity: 1.0,
      duration: segment,
      ease: "none"
    }, finalStart);

  }, { scope: containerRef, dependencies: [isDesktop, isLoading] });

  // --------------------------------------------------------------------------
  // DESKTOP INTERACTION: WIBIFY PINNED STICKY DECK
  // --------------------------------------------------------------------------
  if (isDesktop) {
    return (
      <div 
        className="wibify-projects-container" 
        id="projects" 
        ref={containerRef}
        style={{ height: `${(PROJECTS_DATA.length + 1) * 100}vh` }} // 600vh scroll wrapper
      >
        <div className="wibify-sticky-content" ref={stickyContentRef}>
          {/* Sticky Stacking Grid */}
          <div className="projects-stack-container">
            {PROJECTS_DATA.map((project, idx) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={idx}
                cardRef={setCardRef(idx)}
              />
            ))}

            {/* Cinematic Contact Card */}
            <div className="contact-chapter-card" ref={contactCardRef} id="contact">
              <div className="contact-space-grid" />
              <div className="contact-epic-glow" />

              <div className="contact-chapter-content">
                <div className="contact-chapter-badge">The Timeline Continues</div>
                <h2 className="contact-chapter-title">Let’s Build The Next Chapter Together</h2>
                <p className="contact-chapter-tagline">
                  Whether you want to engineer high-capacity microservice clusters, deploy automated cognitive agent workflows, or push the boundaries of Neuro-Symbolic AI—let's make it real.
                </p>

                <div className="contact-action-center">
                  {/* Primary Action Box */}
                  <div className="action-card-primary">
                    <h4>Initiate Collaborative Project</h4>
                    <p>Have an ambitious idea? Connect directly via secure email node.</p>
                    <a 
                      href="mailto:rushindrabandaru07@gmail.com" 
                      className="epic-launch-btn"
                      data-cursor="disable"
                    >
                      Connect Now <MdArrowOutward />
                    </a>
                  </div>

                  {/* Secondary Action Box */}
                  <div className="action-card-secondary">
                    <div className="social-nodes-container">
                      <a 
                        href="https://www.linkedin.com/in/rushindra-bandaru/" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-node-link"
                        data-cursor="disable"
                      >
                        LinkedIn <FaLinkedin />
                      </a>
                      <a 
                        href="https://github.com/rushindra1404" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-node-link"
                        data-cursor="disable"
                      >
                        GitHub <FaGithub />
                      </a>
                      <a 
                        href="https://www.credly.com/users/rushindra" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="social-node-link"
                        data-cursor="disable"
                      >
                        Credly Credentials <FaBriefcase />
                      </a>
                    </div>

                    <a 
                      href="/certificates/AWS_Solutions_Architect_Resume.pdf" 
                      download
                      className="download-resume-node"
                      data-cursor="disable"
                    >
                      <FaDownload /> Download Complete Resume
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // --------------------------------------------------------------------------
  // MOBILE Fallback INTERACTION: SEQUENTIAL MOBILE SCROLLING LIST
  // --------------------------------------------------------------------------
  return (
    <div className="wibify-projects-container" id="projects" ref={containerRef}>
      {/* Narrative Section Header */}
      <div className="projects-header-container">
        <h2>
          Project <span>Chapters</span>
        </h2>
        <p className="projects-subtitle">
          An epic chronological record documenting my software engineering growth, artificial intelligence milestones, cloud infrastructure deployments, and future cognitive research.
        </p>
      </div>

      <div className="wibify-mobile-list">
        {PROJECTS_DATA.map((project) => (
          <div 
            className="wibify-mobile-chapter" 
            key={project.id}
            style={{ "--accentColor": project.accent } as React.CSSProperties}
          >
            {project.id === "05" ? (
              // Future Vision mobile template
              <div className="wibify-mobile-story">
                <div className="wibify-chapter-badge">{project.badge}</div>
                <h3 className="wibify-project-title future-vision-title">“The best ideas are still loading...”</h3>
                <p className="wibify-project-tagline" style={{ marginTop: "8px" }}>
                  Constantly researching, building, and exploring new frontiers in Artificial Intelligence and Machine Learning.
                </p>
                <div className="future-concepts-grid">
                  <div className="future-concept-item">
                    <div className="concept-bullet" />
                    <div className="concept-info">
                      <h4>Multi-Agent Systems</h4>
                      <p>Orchestrating autonomous networks of specialized AI agents to solve compound, multi-stage engineering sprints.</p>
                    </div>
                  </div>
                  <div className="future-concept-item">
                    <div className="concept-bullet" />
                    <div className="concept-info">
                      <h4>AI Startups & Ventures</h4>
                      <p>Transforming complex research prototypes into high-utility, secure commercial software platforms.</p>
                    </div>
                  </div>
                  <div className="future-concept-item">
                    <div className="concept-bullet" />
                    <div className="concept-info">
                      <h4>3D Web & Immersive AI</h4>
                      <p>Merging computer vision deep networks with WebGL to engineer responsive 3D spatial intelligence.</p>
                    </div>
                  </div>
                </div>
                <div className="wibify-tech-nodes">
                  {project.tech.map((t) => (
                    <span className="wibify-tech-badge" key={t}>{t}</span>
                  ))}
                </div>
              </div>
            ) : (
              // Standard chapters mobile template
              <>
                <div className="wibify-mobile-visual">
                  <img src={project.image.startsWith("/") ? import.meta.env.BASE_URL + project.image.slice(1) : project.image} alt={project.title} loading="lazy" />
                </div>
                <div className="wibify-mobile-story">
                  <div className="wibify-chapter-badge">{project.badge}</div>
                  <h3 className="wibify-project-title">{project.title}</h3>
                  <p className="wibify-project-tagline">“{project.tagline}”</p>
                  
                  <div className="project-story-timeline">
                    <div className="wibify-timeline-node">
                      <div className="wibify-node-header">The Challenge</div>
                      <p className="wibify-node-body">{project.story.problem}</p>
                    </div>
                    <div className="wibify-timeline-node">
                      <div className="wibify-node-header">The Solution</div>
                      <p className="wibify-node-body">{project.story.idea}</p>
                    </div>
                    <div className="wibify-timeline-node">
                      <div className="wibify-node-header">The Development</div>
                      <p className="wibify-node-body">{project.story.process}</p>
                    </div>
                    <div className="wibify-timeline-node">
                      <div className="wibify-node-header">The Impact</div>
                      <p className="wibify-node-body">{project.story.result}</p>
                    </div>
                  </div>
                  
                  <div className="wibify-tech-nodes">
                    {project.tech.map((t) => (
                      <span className="wibify-tech-badge" key={t}>{t}</span>
                    ))}
                  </div>
                </div>
              </>
            )}
          </div>
        ))}
      </div>

      {/* MOBILE CINEMATIC CONTACT CHAPTER REVEAL */}
      <div className="wibify-mobile-contact" id="contact">
        <div className="wibify-contact-badge">The Journey Continues</div>
        <h2 className="wibify-contact-title">Let’s Build The Next Chapter Together</h2>
        <p className="wibify-contact-tagline">
          Whether you want to engineer high-capacity microservice clusters, deploy automated cognitive agent workflows, or push the boundaries of Neuro-Symbolic AI—let's make it real.
        </p>

        <div className="wibify-contact-action-center">
          {/* Primary Action Box */}
          <div className="wibify-card-primary">
            <h4>Initiate Collaborative Project</h4>
            <p>Have an ambitious idea? Connect directly via secure email node.</p>
            <a 
              href="mailto:rushindrabandaru07@gmail.com" 
              className="wibify-epic-btn"
              data-cursor="disable"
            >
              Connect Now <MdArrowOutward />
            </a>
          </div>

          {/* Secondary Action Box */}
          <div className="wibify-card-secondary">
            <div className="wibify-social-nodes" style={{ width: "100%" }}>
              <a 
                href="https://www.linkedin.com/in/rushindra-bandaru/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="wibify-social-link"
                data-cursor="disable"
              >
                LinkedIn <FaLinkedin />
              </a>
              <a 
                href="https://github.com/rushindra1404" 
                target="_blank" 
                rel="noopener noreferrer"
                className="wibify-social-link"
                data-cursor="disable"
              >
                GitHub <FaGithub />
              </a>
              <a 
                href="https://www.credly.com/users/rushindra" 
                target="_blank" 
                rel="noopener noreferrer"
                className="wibify-social-link"
                data-cursor="disable"
              >
                Credly Credentials <FaBriefcase />
              </a>
            </div>

            <a 
              href="/certificates/AWS_Solutions_Architect_Resume.pdf" 
              download
              className="wibify-resume-link"
              data-cursor="disable"
              style={{ width: "100%" }}
            >
              <FaDownload /> Download Complete Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
