import React, { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FiAward, FiBriefcase, FiClock, FiTrendingUp, 
  FiExternalLink, FiCheckCircle, FiChevronDown, 
  FiChevronUp, FiChevronLeft, FiChevronRight, 
  FiDownload, FiActivity, FiCpu, FiMapPin
} from "react-icons/fi";
import { RiRocket2Line } from "react-icons/ri";
import "./styles/Work.css";
import { CREDENTIALS_DATA, CertificationItem } from "../data/credentialsData";
import { TIMELINE_DATA } from "../data/timelineData";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// Helper for intersection observer to trigger animations when scrolled into view
function useInView(options?: IntersectionObserverInit) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setInView(true);
        observer.unobserve(el);
      }
    }, options);

    observer.observe(el);
    return () => observer.disconnect();
  }, [options]);

  return [ref, inView] as const;
}

// Animated Counter component
const AnimatedCounter = ({ value, suffix = "", delay = 0 }: { value: number; suffix?: string; delay?: number }) => {
  const [count, setCount] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.1 });

  useEffect(() => {
    if (!inView) return;

    let start = 0;
    const end = value;
    const duration = 1.5; // seconds
    const totalMiliseconds = duration * 1000;
    const incrementTime = Math.max(Math.floor(totalMiliseconds / end), 20);

    const timeout = setTimeout(() => {
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) {
          clearInterval(timer);
          setCount(end);
        }
      }, incrementTime);

      return () => clearInterval(timer);
    }, delay);

    return () => clearTimeout(timeout);
  }, [value, inView, delay]);

  return <span ref={ref}>{count}{suffix}</span>;
};

// Particles component for stats cards
const FloatingParticles = () => {
  return (
    <div className="card-particles">
      {[...Array(6)].map((_, i) => (
        <span key={i} className={`particle particle-${i}`} />
      ))}
    </div>
  );
};

// Skill Graph SVG Modal Component
const SkillGraphModal = ({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) => {
  if (!isOpen) return null;

  return createPortal(
    <div className="graph-modal-overlay active" onClick={onClose}>
      <div className="graph-modal-content" onClick={(e) => e.stopPropagation()}>
        <div className="graph-modal-header">
          <h3>Interactive Skill Architecture</h3>
          <button className="graph-close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="graph-modal-body">
          <div className="graph-info-badge">Hover nodes to reveal connection pathways</div>
          <div className="svg-container">
            <svg viewBox="0 0 800 500" width="100%" height="100%" className="skills-svg">
              <defs>
                <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#c2a4ff" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#7f40ff" stopOpacity="0" />
                </radialGradient>
                <linearGradient id="edgeGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#7f40ff" stopOpacity="0.8" />
                  <stop offset="100%" stopColor="#00bcd4" stopOpacity="0.2" />
                </linearGradient>
              </defs>

              {/* Connections (Lines) */}
              <g className="connections">
                <line x1="400" y1="250" x2="250" y2="130" stroke="url(#edgeGrad)" strokeWidth="2" className="pulse-line" />
                <line x1="400" y1="250" x2="550" y2="130" stroke="url(#edgeGrad)" strokeWidth="2" className="pulse-line" />
                <line x1="400" y1="250" x2="200" y2="250" stroke="url(#edgeGrad)" strokeWidth="2" className="pulse-line" />
                <line x1="400" y1="250" x2="600" y2="250" stroke="url(#edgeGrad)" strokeWidth="2" className="pulse-line" />
                <line x1="400" y1="250" x2="280" y2="380" stroke="url(#edgeGrad)" strokeWidth="2" className="pulse-line" />
                <line x1="400" y1="250" x2="520" y2="380" stroke="url(#edgeGrad)" strokeWidth="2" className="pulse-line" />
                
                {/* Secondary pathways */}
                <line x1="250" y1="130" x2="200" y2="250" stroke="#7f40ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                <line x1="550" y1="130" x2="600" y2="250" stroke="#7f40ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                <line x1="280" y1="380" x2="200" y2="250" stroke="#7f40ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
                <line x1="520" y1="380" x2="600" y2="250" stroke="#7f40ff" strokeWidth="1" strokeDasharray="3 3" opacity="0.5" />
              </g>

              {/* Glowing gradients behind nodes */}
              <g className="glows">
                <circle cx="400" cy="250" r="80" fill="url(#nodeGlow)" />
                <circle cx="250" cy="130" r="50" fill="url(#nodeGlow)" />
                <circle cx="550" cy="130" r="50" fill="url(#nodeGlow)" />
                <circle cx="200" cy="250" r="50" fill="url(#nodeGlow)" />
                <circle cx="600" cy="250" r="50" fill="url(#nodeGlow)" />
                <circle cx="280" cy="380" r="50" fill="url(#nodeGlow)" />
                <circle cx="520" cy="380" r="50" fill="url(#nodeGlow)" />
              </g>

              {/* Nodes (Circles + Labels) */}
              <g className="nodes">
                {/* Center Node */}
                <g className="node-group center-node">
                  <circle cx="400" cy="250" r="45" fill="#140f23" stroke="#7f40ff" strokeWidth="3" />
                  <text x="400" y="246" fill="#ffffff" fontSize="14" fontWeight="bold" textAnchor="middle">AI & ML</text>
                  <text x="400" y="262" fill="#c2a4ff" fontSize="11" textAnchor="middle">ARCHITECTURE</text>
                </g>

                {/* Node 1: Deep Learning */}
                <g className="node-group">
                  <circle cx="250" cy="130" r="35" fill="#0d0a14" stroke="#c2a4ff" strokeWidth="1.5" />
                  <text x="250" y="126" fill="#ffffff" fontSize="11" fontWeight="500" textAnchor="middle">Deep</text>
                  <text x="250" y="139" fill="#ffffff" fontSize="11" fontWeight="500" textAnchor="middle">Learning</text>
                </g>

                {/* Node 2: Generative AI */}
                <g className="node-group">
                  <circle cx="550" cy="130" r="35" fill="#0d0a14" stroke="#c2a4ff" strokeWidth="1.5" />
                  <text x="550" y="126" fill="#ffffff" fontSize="11" fontWeight="500" textAnchor="middle">Generative</text>
                  <text x="550" y="139" fill="#ffffff" fontSize="11" fontWeight="500" textAnchor="middle">AI / LLMs</text>
                </g>

                {/* Node 3: Software Dev */}
                <g className="node-group">
                  <circle cx="200" cy="250" r="35" fill="#0d0a14" stroke="#c2a4ff" strokeWidth="1.5" />
                  <text x="200" y="246" fill="#ffffff" fontSize="11" fontWeight="500" textAnchor="middle">Software</text>
                  <text x="200" y="259" fill="#ffffff" fontSize="11" fontWeight="500" textAnchor="middle">Engineering</text>
                </g>

                {/* Node 4: Cloud Native */}
                <g className="node-group">
                  <circle cx="600" cy="250" r="35" fill="#0d0a14" stroke="#c2a4ff" strokeWidth="1.5" />
                  <text x="600" y="246" fill="#ffffff" fontSize="11" fontWeight="500" textAnchor="middle">Cloud</text>
                  <text x="600" y="259" fill="#ffffff" fontSize="11" fontWeight="500" textAnchor="middle">Computing</text>
                </g>

                {/* Node 5: Data Analytics */}
                <g className="node-group">
                  <circle cx="280" cy="380" r="35" fill="#0d0a14" stroke="#c2a4ff" strokeWidth="1.5" />
                  <text x="280" y="376" fill="#ffffff" fontSize="11" fontWeight="500" textAnchor="middle">Data</text>
                  <text x="280" y="389" fill="#ffffff" fontSize="11" fontWeight="500" textAnchor="middle">Analytics</text>
                </g>

                {/* Node 6: AI Agents */}
                <g className="node-group">
                  <circle cx="520" cy="380" r="35" fill="#0d0a14" stroke="#c2a4ff" strokeWidth="1.5" />
                  <text x="520" y="376" fill="#ffffff" fontSize="11" fontWeight="500" textAnchor="middle">AI Agents</text>
                  <text x="520" y="389" fill="#ffffff" fontSize="11" fontWeight="500" textAnchor="middle">& RAG</text>
                </g>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

// Accordion Certificate Row Component
const AccordionCertificateRow = ({ cert }: { cert: CertificationItem }) => {
  const [isOpen, setIsOpen] = useState(false);
  const hasCourses = cert.courses && cert.courses.length > 0;

  return (
    <div className={`cred-accordion-card ${isOpen ? "expanded" : ""}`}>
      <div 
        className="cred-accordion-header"
        onClick={() => hasCourses && setIsOpen(!isOpen)}
        style={{ cursor: hasCourses ? "pointer" : "default" }}
      >
        <div className="cred-accordion-title-wrapper">
          <span className="cred-verified-check"><FiCheckCircle /></span>
          <span className="cred-cert-title">{cert.title}</span>
        </div>
        
        <div className="cred-accordion-actions">
          {hasCourses && (
            <button className="accordion-toggle-arrow" aria-label="Toggle details">
              {isOpen ? <FiChevronUp /> : <FiChevronDown />}
            </button>
          )}
          {cert.link !== "#" && (
            <a 
              href={cert.link.startsWith("/") ? import.meta.env.BASE_URL + cert.link.slice(1) : cert.link} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="cred-external-link"
              onClick={(e) => e.stopPropagation()}
              data-cursor="disable"
              title="View full certificate"
            >
              <FiExternalLink />
            </a>
          )}
        </div>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && hasCourses && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="cred-accordion-body"
          >
            <div className="accordion-courses-grid">
              {cert.courses?.map((course, idx) => (
                <div className="accordion-course-item" key={idx}>
                  <span className="course-bullet"></span>
                  <span className="course-name">{course.name}</span>
                  {course.link !== "#" && (
                    <a 
                      href={course.link.startsWith("/") ? import.meta.env.BASE_URL + course.link.slice(1) : course.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="course-link-icon"
                      title="View course PDF"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const MilestoneCard = ({ 
  milestone, 
  isExpanded, 
  onToggle 
}: { 
  milestone: any; 
  isExpanded: boolean; 
  onToggle: () => void; 
}) => {
  return (
    <div 
      className={`milestone-info-card glass-panel ${isExpanded ? "expanded" : ""}`}
      onClick={onToggle}
      data-cursor="disable"
    >
      <div className="card-top-header">
        <span className="milestone-year">{milestone.year}</span>
        <span className="milestone-icon-badge">{milestone.icon}</span>
      </div>
      
      <h4 className="milestone-title">{milestone.title}</h4>
      <p className="milestone-desc">{milestone.description}</p>
      
      <div className="card-click-hint">
        {isExpanded ? "Click to collapse" : "Click to expand details"}
      </div>

      <AnimatePresence initial={false}>
        {isExpanded && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="milestone-expanded-details"
            onClick={(e) => e.stopPropagation()}
          >
            {milestone.projects ? (
              <div className="milestone-projects-grid">
                {milestone.projects.map((proj: any, pIdx: number) => (
                  <a 
                    href={proj.link} 
                    className="timeline-project-item glass-panel" 
                    key={pIdx}
                    data-cursor="disable"
                  >
                    {proj.image && (
                      <div className="timeline-proj-img-wrapper">
                        <img src={import.meta.env.BASE_URL + proj.image.replace(/^\//, "")} alt={proj.name} />
                      </div>
                    )}
                    <div className="timeline-proj-info">
                      <h5>{proj.name}</h5>
                      <p>{proj.desc}</p>
                      <div className="timeline-proj-tech">
                        {proj.tech.map((t: string, tIdx: number) => (
                          <span key={tIdx}>{t}</span>
                        ))}
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            ) : (
              <div className="milestone-skills-grid">
                {milestone.skills.map((skill: string, sIdx: number) => (
                  <span className="timeline-skill-chip" key={sIdx}>
                    <span className="chip-bullet">✨</span>
                    {skill}
                  </span>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const Work = () => {
  const [activeOrgId, setActiveOrgId] = useState<string>("ibm");
  const [isSkillGraphOpen, setIsSkillGraphOpen] = useState<boolean>(false);
  const [downloadStatus, setDownloadStatus] = useState<string>("idle");
  const [expandedMilestones, setExpandedMilestones] = useState<Record<string, boolean>>({});
  const scrollSelectorRef = useRef<HTMLDivElement>(null);
  
  const activeOrg = CREDENTIALS_DATA.find((o) => o.id === activeOrgId) || CREDENTIALS_DATA[0];

  const toggleMilestone = (id: string) => {
    setExpandedMilestones(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  useGSAP(() => {
    const trigger = ScrollTrigger.create({
      trigger: ".timeline-outer-wrapper",
      start: "top 75%",
      end: "bottom 35%",
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const wrapper = document.querySelector(".timeline-outer-wrapper") as HTMLElement;
        if (wrapper) {
          wrapper.style.setProperty("--scroll-progress", `${progress}`);
        }
        
        const columns = document.querySelectorAll(".timeline-milestone-column");
        columns.forEach((col, idx) => {
          const threshold = idx / (columns.length - 1);
          if (progress >= threshold - 0.05) {
            col.classList.add("node-active");
          } else {
            col.classList.remove("node-active");
          }
        });
      }
    });

    return () => {
      trigger.kill();
    };
  }, []);

  // For slide navigation in Explore by Organization
  const slideExplorer = (direction: "left" | "right") => {
    if (!scrollSelectorRef.current) return;
    const scrollAmount = 240;
    scrollSelectorRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth"
    });
  };

  const handleDownload = () => {
    setDownloadStatus("archiving");
    setTimeout(() => {
      setDownloadStatus("downloading");
      setTimeout(() => {
        // Build mock links file or link to real certificates list
        const textContent = `
BANDARU RUSHINDRA - CERTIFICATIONS ARCHIVE DIRECTORY
==================================================

Please find the PDF/badge files under their respective paths:

IBM AI ENGINEERING:
- IBM AI Engineering Professional: /certificates/ibm/IBM%20AI%20Engineering%20Professional%20Certificate(IBM).pdf
- Machine Learning with Python: /certificates/ibm/Machine%20Learning%20with%20python%20(IBM).pdf
- Deep Learning with PyTorch: /certificates/ibm/Deep%20Learning%20wih%20PyTorch%20(IBM).pdf

GOOGLE & GOOGLE CLOUD:
- Google AI Essentials: /certificates/google/google%20ai%20essential/Google%20AI%20Essentials%20Carrer%20Certificate.pdf
- Build Real World AI: /certificates/google%20cloud/build-real-world-ai-applications-with-gemini-and-im.png

MICROSOFT:
- Azure AI Fundamentals: /certificates/microsoft%20fundamentals%20in%20AI%20certificate_page-0001.jpg

AWS:
- Solutions Architect Simulation: /certificates/aws%20solution%20architecture%20job%20simulation.pdf

ALTERYX:
- Core Designer Certified: /certificates/alteryx/Alteryx_Designer_Core_Certification_Badge20260429-31-kcdnlb.pdf

OTHER CREDENTIALS:
- JP Morgan Software Engineering: /certificates/JP%20Morgan%20Software%20Engineering%20Job%20Simulation.pdf
- Deloitte Data Analytics: /certificates/deloitte%20data%20analytics.pdf
- Tata GenAI Simulation: /certificates/tata%20gen%20ai%20powered%20data.pdf
        `;
        const blob = new Blob([textContent], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = "Rushindra_Certifications_Manifest.txt";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        setDownloadStatus("completed");
        setTimeout(() => setDownloadStatus("idle"), 3000);
      }, 1000);
    }, 1500);
  };

  // Render Custom SVGs for companies missing asset logos
  const renderLogo = (logoPath: string, name: string) => {
    if (logoPath === "others") {
      return (
        <div className="custom-logo-svg others-logo">
          <FiAward className="logo-vector-icon" />
        </div>
      );
    }
    
    // Fallback or missing logos (Vityarthi, Teachnook could fall here, though we grouped them under "Others")
    return <img src={import.meta.env.BASE_URL + logoPath.replace(/^\//, "")} alt={name} className="org-logo-img" onError={(e) => {
      // In case image fails to load, render a gorgeous typographic fallback
      const target = e.target as HTMLElement;
      target.style.display = "none";
      const fallback = target.nextSibling as HTMLElement;
      if (fallback) fallback.style.display = "flex";
    }}/>;
  };

  return (
    <div className="work-section" id="work">
      <div className="credentials-dashboard-container">
        
        {/* SECTION HEADER */}
        <div className="dashboard-header text-center">
          <div className="achievements-badge">
            <span className="badge-icon">⭐</span>
            <span className="badge-text">MY ACHIEVEMENTS</span>
          </div>
          <h2>Professional Credentials</h2>
          <p className="dashboard-subtitle">
            Industry-recognized credentials from leading technology companies validating my expertise in Artificial Intelligence, Machine Learning, Cloud Computing, Data Analytics and Software Engineering.
          </p>
        </div>

        {/* TOP STATISTICS CARDS */}
        <div className="dashboard-stats-grid">
          
          <div className="stat-card glass-panel" data-cursor="disable">
            <FloatingParticles />
            <div className="stat-glow" />
            <div className="stat-icon-wrapper">
              <FiAward className="stat-icon" />
            </div>
            <div className="stat-number">
              <AnimatedCounter value={35} suffix="+" />
            </div>
            <div className="stat-label">Certifications</div>
          </div>

          <div className="stat-card glass-panel" data-cursor="disable">
            <FloatingParticles />
            <div className="stat-glow" />
            <div className="stat-icon-wrapper">
              <FiBriefcase className="stat-icon" />
            </div>
            <div className="stat-number">
              <AnimatedCounter value={11} suffix="+" delay={200} />
            </div>
            <div className="stat-label">Organizations</div>
          </div>

          <div className="stat-card glass-panel" data-cursor="disable">
            <FloatingParticles />
            <div className="stat-glow" />
            <div className="stat-icon-wrapper">
              <FiClock className="stat-icon" />
            </div>
            <div className="stat-number">
              <AnimatedCounter value={400} suffix="+" delay={400} />
            </div>
            <div className="stat-label">Learning Hours</div>
          </div>

          <div className="stat-card glass-panel" data-cursor="disable">
            <FloatingParticles />
            <div className="stat-glow" />
            <div className="stat-icon-wrapper">
              <FiTrendingUp className="stat-icon" />
            </div>
            <div className="stat-number text-lg">2024–Present</div>
            <div className="stat-label text-sm-label">Continuous Learning</div>
          </div>

        </div>

        {/* TRUSTED ORGANIZATIONS LOGO STRIP */}
        <div className="trusted-strip-container glass-panel">
          <div className="trusted-strip-title">
            <FiActivity className="trusted-glow-icon" /> CERTIFIED BY INDUSTRY LEADERS
          </div>
          <div className="trusted-logo-flow">
            {[
              { name: "IBM", logo: "/images/logo/ibm.svg" },
              { name: "Google", logo: "/images/logo/google.svg" },
              { name: "Google Cloud", logo: "/images/logo/google_cloud.svg.svg" },
              { name: "Microsoft", logo: "/images/logo/microsoft.svg" },
              { name: "AWS", logo: "/images/logo/aws.svg" },
              { name: "Alteryx", logo: "/images/logo/alteryx.png" },
              { name: "Tata", logo: "/images/logo/Tata.png" },
              { name: "J.P. Morgan", logo: "/images/logo/J.P.-Morgan-Chase.svg" },
              { name: "Deloitte", logo: "/images/logo/deloitte.png" },
              { name: "Vityarthi", logo: "/images/logo/vityarthi.png" },
              { name: "HP", logo: "/images/logo/hp.svg" }
            ].map((company, index) => (
              <div className="logo-strip-item" key={index} title={company.name}>
                <img 
                  src={import.meta.env.BASE_URL + company.logo.replace(/^\//, "")} 
                  alt={company.name} 
                  className="strip-logo-img" 
                />
                <span className="logo-hover-name">{company.name}</span>
              </div>
            ))}
          </div>
        </div>

        {/* EXPLORE BY ORGANIZATION */}
        <div className="explore-section-title">
          <FiCpu className="section-title-icon" /> EXPLORE BY ORGANIZATION
        </div>

        <div className="organization-explorer-wrapper">
          <button className="slider-arrow arrow-left" onClick={() => slideExplorer("left")} aria-label="Slide Left">
            <FiChevronLeft />
          </button>
          
          <div className="organization-cards-scroller" ref={scrollSelectorRef}>
            {CREDENTIALS_DATA.map((org) => {
              const isActive = org.id === activeOrgId;
              return (
                <div 
                  key={org.id}
                  className={`org-select-card ${isActive ? "active-card" : ""}`}
                  onClick={() => setActiveOrgId(org.id)}
                  style={{ "--org-brand": org.brandColor } as React.CSSProperties}
                  data-cursor="disable"
                >
                  <div className="org-card-inner">
                    <div className="org-logo-bubble">
                      {renderLogo(org.logo, org.name)}
                      <div className="logo-fallback-typo" style={{ display: "none" }}>{org.name.slice(0,2)}</div>
                    </div>
                    <h4 className="org-card-name">{org.name}</h4>
                    <span className="org-card-certs-count">{org.certCount} Certifications</span>
                  </div>
                  {isActive && <div className="active-glow-overlay" />}
                </div>
              );
            })}
          </div>

          <button className="slider-arrow arrow-right" onClick={() => slideExplorer("right")} aria-label="Slide Right">
            <FiChevronRight />
          </button>
        </div>

        {/* DYNAMIC DETAILS PANEL */}
        <div className="details-panel-container glass-panel" style={{ "--org-brand": activeOrg.brandColor } as React.CSSProperties}>
          
          {/* Panel Top Info Header */}
          <div className="details-panel-header">
            <div className="details-header-left">
              <div className="details-large-logo">
                {renderLogo(activeOrg.logo, activeOrg.name)}
                <div className="logo-fallback-typo" style={{ display: "none" }}>{activeOrg.name.slice(0,2)}</div>
              </div>
              <div className="details-header-title-box">
                <div className="name-and-badge">
                  <h3>{activeOrg.name}</h3>
                  <span className="certs-count-pill">{activeOrg.certCount} Certifications</span>
                </div>
                <p className="org-desc-summary">{activeOrg.summary}</p>
              </div>
            </div>
            
            <div className="details-header-right">
              <div className="progress-container">
                <div className="progress-text-row">
                  <span className="progress-label">Completion Progress</span>
                  <span className="progress-pct">{activeOrg.progress}%</span>
                </div>
                <div className="progress-bar-track">
                  <div className="progress-bar-fill" style={{ width: `${activeOrg.progress}%`, background: `linear-gradient(90deg, ${activeOrg.brandColor}, var(--accentColor))` }} />
                </div>
                <span className="last-updated-lbl">Last Updated: {activeOrg.lastUpdated}</span>
              </div>
            </div>
          </div>

          <div className="panel-columns-split">
            {/* Left Column: Skills & Graphs */}
            <div className="panel-left-col">
              <h4>Skills Gained</h4>
              <div className="skills-chips-flex">
                {activeOrg.skills.map((skill, idx) => (
                  <div className="skill-chip" key={idx}>
                    <span className="skill-chip-icon">✨</span>
                    <span className="skill-chip-text">{skill}</span>
                  </div>
                ))}
              </div>
              
              <button 
                className="view-graph-btn" 
                onClick={() => setIsSkillGraphOpen(true)}
                data-cursor="disable"
              >
                <span>View Skill Graph</span>
                <FiActivity className="graph-btn-icon" />
              </button>
            </div>

            {/* Right Column: Certificates Accordions */}
            <div className="panel-right-col">
              <div className="certificates-accordion-header-row">
                <h4>Certificates ({activeOrg.certificates.length})</h4>
              </div>

              <div className="certificates-accordion-list">
                {activeOrg.certificates.map((cert, idx) => (
                  <AccordionCertificateRow key={idx} cert={cert} />
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* LEARNING JOURNEY TIMELINE */}
        <div className="timeline-section-title text-center">
          <div className="timeline-badge-title">
            <FiMapPin className="timeline-marker-icon" /> LEARNING JOURNEY TIMELINE
          </div>
          <h2>My AI Evolution</h2>
          <p className="timeline-section-subtitle">
            From learning Python fundamentals to building intelligent AI applications that solve real-world problems.
          </p>
        </div>

        <div className={`timeline-outer-wrapper ${
          Object.keys(expandedMilestones).some(id => expandedMilestones[id] && TIMELINE_DATA.find(m => m.id === id)?.projects)
            ? "has-expanded-projects"
            : Object.values(expandedMilestones).some(Boolean)
              ? "has-expanded-skills"
              : ""
        }`}>
          <div className="timeline-connecting-bar">
            <div className="timeline-active-line" />
            <div className="timeline-traveling-orb" />
          </div>
          
          <div className="timeline-scroll-container">
            {TIMELINE_DATA.map((milestone, idx) => {
              const isTop = idx % 2 === 0;
              const isExpanded = !!expandedMilestones[milestone.id];
              return (
                <div 
                  key={milestone.id} 
                  className={`timeline-milestone-column ${isTop ? "card-top" : "card-bottom"} ${isExpanded ? "column-expanded" : ""}`}
                  style={{ "--milestone-accent": milestone.accentGlow } as React.CSSProperties}
                >
                  {/* Card on Top (for even indices: Python, Gen AI, Real-World Apps) */}
                  {isTop && (
                    <div className="timeline-card-wrapper wrapper-top">
                      <MilestoneCard 
                        milestone={milestone} 
                        isExpanded={isExpanded} 
                        onToggle={() => toggleMilestone(milestone.id)} 
                      />
                      <div className="timeline-connector-line" />
                    </div>
                  )}
                  
                  {/* Timeline central node wrapper */}
                  <div className="timeline-node-wrapper">
                    <div className="timeline-milestone-node" data-cursor="disable" onClick={() => toggleMilestone(milestone.id)}>
                      <span className="node-icon-glow">{milestone.icon}</span>
                      <div className="node-glow-ring" />
                    </div>
                    <span className="timeline-node-year">{milestone.year}</span>
                  </div>

                  {/* Card on Bottom (for odd indices: AI Foundations, Credentials & Cloud) */}
                  {!isTop && (
                    <div className="timeline-card-wrapper wrapper-bottom">
                      <div className="timeline-connector-line" />
                      <MilestoneCard 
                        milestone={milestone} 
                        isExpanded={isExpanded} 
                        onToggle={() => toggleMilestone(milestone.id)} 
                      />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM CTA GLASS CARD */}
        <div className="bottom-cta-container">
          <div className="cta-glass-card glass-panel">
            <div className="cta-left-content">
              <div className="cta-rocket-container">
                <RiRocket2Line className="cta-rocket-icon" />
              </div>
              <div className="cta-text-details">
                <h3>Always Learning. Always Building. Always Evolving.</h3>
                <p>Every certification, project and challenge has contributed to my journey of becoming an AI Engineer capable of building intelligent systems for real-world impact.</p>
              </div>
            </div>
            
            <div className="cta-right-content">
              <button 
                className={`download-certs-btn ${downloadStatus}`} 
                onClick={handleDownload}
                disabled={downloadStatus !== "idle"}
                data-cursor="disable"
              >
                <span className="btn-glow" />
                <FiDownload className="download-btn-icon" />
                <span>
                  {downloadStatus === "idle" && "Download All Certificates"}
                  {downloadStatus === "archiving" && "Archiving Credentials..."}
                  {downloadStatus === "downloading" && "Downloading Archive..."}
                  {downloadStatus === "completed" && "Download Complete! ✨"}
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* Skills Interactive Modal */}
      <SkillGraphModal isOpen={isSkillGraphOpen} onClose={() => setIsSkillGraphOpen(false)} />
    </div>
  );
};

export default Work;
