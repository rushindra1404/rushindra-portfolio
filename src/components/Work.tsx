import { useState } from "react";
import { createPortal } from "react-dom";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLoading } from "../context/LoadingProvider";
import { ARCHIVE_CERTIFICATES } from "../data/archiveCertificates";

gsap.registerPlugin(useGSAP);

interface Certification {
  id: string;
  title: string;
  issuer: string;
  description: string;
  skills: string;
  image: string;
  link?: string;
  accent: string;
  isArchiveLink?: boolean;
}

const CERTIFICATIONS: Certification[] = [
  {
    id: "01",
    title: "Machine Learning with Python",
    issuer: "IBM",
    description: "Built a strong foundation in machine learning concepts, model development, data preprocessing, and Python-based AI solutions.",
    skills: "Machine Learning • Python • Data Analysis • Model Development",
    image: "/certificates/Coursera Machine Learning with python_pages-to-jpg-0001.jpg",
    link: "/certificates/Coursera Machine Learning with python_pages-to-jpg-0001.jpg",
    accent: "#4b7bec"
  },
  {
    id: "02",
    title: "Google AI",
    issuer: "Google",
    description: "Explored practical AI concepts, Generative AI workflows, and modern applications of artificial intelligence.",
    skills: "Artificial Intelligence • Generative AI • AI Applications",
    image: "/certificates/Coursera Google AI Professional Certificate_page-0001.jpg",
    link: "/certificates/Coursera Google AI Professional Certificate_page-0001.jpg",
    accent: "#fc5c65"
  },
  {
    id: "03",
    title: "Build Real World AI Applications with Gemini and Imagen",
    issuer: "Google Cloud",
    description: "Developed hands-on experience building scalable AI applications using Gemini, Imagen, and modern prompt engineering techniques.",
    skills: "Gemini • Imagen • Generative AI • Prompt Engineering",
    image: "/certificates/build-real-world-ai-applications-with-gemini-and-im.png",
    link: "/certificates/build-real-world-ai-applications-with-gemini-and-im.png",
    accent: "#26de81"
  },
  {
    id: "04",
    title: "Develop GenAI Apps with Gemini and Streamlit",
    issuer: "Google Cloud",
    description: "Created interactive AI-powered applications using Gemini models and Streamlit deployment workflows.",
    skills: "Generative AI • Streamlit • Gemini • Application Development",
    image: "/certificates/develop-genai-apps-with-gemini-and-streamlit-skill- (2).png",
    link: "/certificates/develop-genai-apps-with-gemini-and-streamlit-skill- (2).png",
    accent: "#26de81"
  },
  {
    id: "05",
    title: "Inspect Rich Documents with Gemini Multimodality and Multimodal RAG",
    issuer: "Google Cloud",
    description: "Applied multimodal AI and Retrieval-Augmented Generation techniques for intelligent document analysis.",
    skills: "Multimodal AI • RAG • Gemini • Document Intelligence",
    image: "/certificates/inspect-rich-documents-with-gemini-multimodality-an.png",
    link: "/certificates/inspect-rich-documents-with-gemini-multimodality-an.png",
    accent: "#26de81"
  },
  {
    id: "06",
    title: "Alteryx Designer Core Certification",
    issuer: "Alteryx",
    description: "Demonstrated proficiency in data preparation, transformation, analytics workflows, and business intelligence solutions.",
    skills: "Data Analytics • Data Preparation • Workflow Automation",
    image: "/certificates/Alteryx_Designer_Core_Certification_Badge20260429-31-kcdnlb_page-0001.jpg",
    link: "/certificates/Alteryx_Designer_Core_Certification_Badge20260429-31-kcdnlb.pdf",
    accent: "#fa8231"
  },
  {
    id: "07",
    title: "View All Certifications",
    issuer: "Certifications Archive",
    description: "Explore my complete collection of certifications covering Artificial Intelligence, Machine Learning, Cloud Computing, Data Analytics, Prompt Engineering, Programming, Open Source Technologies, and Professional Job Simulations.",
    skills: "",
    image: "",
    accent: "#7f40ff",
    isArchiveLink: true
  }
];

const createSvgBadge = (title: string, issuer: string, accentColor: string) => {
  const cleanAccent = accentColor.replace("#", "");
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 250" width="100%" height="100%">
      <defs>
        <linearGradient id="grad-${cleanAccent}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#191624" />
          <stop offset="100%" stop-color="#0a080d" />
        </linearGradient>
        <linearGradient id="accent-${cleanAccent}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="${accentColor}" />
          <stop offset="100%" stop-color="#7f40ff" />
        </linearGradient>
        <filter id="glow-${cleanAccent}" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="10" stdDeviation="15" flood-color="${accentColor}" flood-opacity="0.25"/>
        </filter>
      </defs>
      <rect width="400" height="250" rx="15" fill="url(#grad-${cleanAccent})" stroke="#363636" stroke-width="1.5" />
      <rect x="20" y="20" width="360" height="210" rx="10" fill="none" stroke="url(#accent-${cleanAccent})" stroke-width="1.5" opacity="0.4" />
      
      <!-- Tech lines deco -->
      <path d="M 20 60 L 380 60" stroke="#363636" stroke-width="1" />
      <path d="M 100 20 L 100 230" stroke="#363636" stroke-width="1" opacity="0.3" />
      
      <!-- Badge circle -->
      <circle cx="310" cy="135" r="42" fill="#14111d" stroke="url(#accent-${cleanAccent})" stroke-width="2.5" filter="url(#glow-${cleanAccent})" />
      <circle cx="310" cy="135" r="35" fill="none" stroke="#363636" stroke-width="1" stroke-dasharray="4 3" />
      <text x="310" y="139" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="800" text-anchor="middle" letter-spacing="1.5">VERIFIED</text>
      
      <!-- Issuer info -->
      <text x="120" y="90" fill="${accentColor}" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700" letter-spacing="2" text-transform="uppercase">${issuer || 'ARCHIVE'}</text>
      
      <!-- Title -->
      <text x="120" y="125" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700">
        ${title.split(' ').slice(0, 3).join(' ')}
      </text>
      <text x="120" y="148" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700">
        ${title.split(' ').slice(3, 6).join(' ')}
      </text>
      <text x="120" y="171" fill="#ffffff" font-family="system-ui, -apple-system, sans-serif" font-size="14" font-weight="700">
        ${title.split(' ').slice(6).join(' ')}
      </text>
      
      <!-- Decorative code nodes -->
      <circle cx="125" cy="205" r="3" fill="${accentColor}" />
      <line x1="125" y1="205" x2="180" y2="205" stroke="${accentColor}" stroke-width="1" opacity="0.5" />
      <circle cx="180" cy="205" r="3" fill="#ffffff" />
      <text x="190" y="208" fill="#adacac" font-family="monospace" font-size="9">status: complete</text>
    </svg>
  `;
  return `data:image/svg+xml;utf8,${encodeURIComponent(svg.trim())}`;
};

const Work = () => {
  const [isArchiveOpen, setIsArchiveOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { isLoading } = useLoading();

  const filteredCerts = ARCHIVE_CERTIFICATES.filter(
    (cert) =>
      cert.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()) ||
      cert.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  useGSAP(() => {
    if (isLoading) return;

    let timeline: gsap.core.Timeline | null = null;

    function initGSAP() {
      // Kill old timeline if it exists
      if (timeline) {
        timeline.kill();
        ScrollTrigger.getById("work")?.kill();
      }

      const box = document.getElementsByClassName("work-box");
      if (box.length === 0) return;
      
      const container = document.querySelector(".work-container");
      if (!container) return;

      const rectLeft = container.getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parent = box[0].parentElement;
      if (!parent) return;
      
      const parentWidth = parent.getBoundingClientRect().width;
      let padding: number = 0;
      const paddingStr = window.getComputedStyle(box[0]).padding;
      if (paddingStr) {
        padding = parseInt(paddingStr) / 2;
      }

      const translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;

      timeline = gsap.timeline({
        scrollTrigger: {
          trigger: ".work-section",
          start: "top top",
          end: `+=${translateX}`, // Use actual scroll width
          scrub: true,
          pin: true,
          pinType: "transform",
          id: "work",
        },
      });

      timeline.to(".work-flex", {
        x: -translateX,
        ease: "none",
      });

      ScrollTrigger.refresh();
    }

    // Initialize ScrollTrigger only when loading has fully finished
    initGSAP();

    // Re-trigger layout measurement after short delay to safeguard layout transitions
    const timer = setTimeout(() => {
      initGSAP();
    }, 500);

    return () => {
      clearTimeout(timer);
      if (timeline) {
        timeline.kill();
        ScrollTrigger.getById("work")?.kill();
      }
    };
  }, [isLoading]);

  return (
    <>
      <div className="work-section" id="work">
        <div className="work-container section-container">
          <h2>
            Featured <span>Certifications</span>
          </h2>
          <p className="work-subtitle">
            A collection of certifications showcasing my journey in Artificial Intelligence, Machine Learning, Generative AI, Cloud Technologies, and Data Analytics.
          </p>
          <div className="work-flex">
            {CERTIFICATIONS.map((cert) => (
              <div className="work-box" key={cert.id}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>{cert.id}</h3>
                    <div>
                      <h4 style={{ fontSize: '18px', fontWeight: '500', lineHeight: '1.3' }}>{cert.title}</h4>
                      <p style={{ color: 'var(--accentColor)', fontWeight: '400', fontSize: '14px', textTransform: 'uppercase', marginTop: '4px' }}>{cert.issuer}</p>
                    </div>
                  </div>
                  <p style={{ marginBottom: '15px', fontSize: '14px', lineHeight: '1.5', minHeight: '65px' }}>{cert.description}</p>
                  
                  {cert.isArchiveLink ? (
                    <button 
                      onClick={() => setIsArchiveOpen(true)}
                      className="archive-trigger-btn"
                      data-cursor="disable"
                    >
                      View Certificate Archive →
                    </button>
                  ) : (
                    <>
                      {cert.skills && <h4 style={{ fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px', opacity: 0.7 }}>Skills</h4>}
                      {cert.skills && <p style={{ fontSize: '13px', color: 'var(--accentColor)' }}>{cert.skills}</p>}
                    </>
                  )}
                </div>
                <WorkImage 
                  image={cert.image || createSvgBadge(cert.title, cert.issuer, cert.accent)} 
                  alt={cert.title} 
                  link={cert.link}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {isArchiveOpen && createPortal(
        <div className="archive-modal-overlay active" onClick={() => { setIsArchiveOpen(false); setSearchQuery(""); }}>
          <div className="archive-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="archive-modal-header">
              <h2>Certifications Archive</h2>
              <button 
                className="archive-close-btn" 
                onClick={() => {
                  setIsArchiveOpen(false);
                  setSearchQuery("");
                }} 
                data-cursor="disable"
              >
                &times;
              </button>
            </div>

            <div className="archive-search-container">
              <span className="search-icon">🔍</span>
              <input 
                type="text" 
                placeholder="Search certificates by title, organization, or skills..." 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="archive-search-input"
              />
              {searchQuery && (
                <button 
                  className="search-clear-btn" 
                  onClick={() => setSearchQuery("")}
                >
                  Clear
                </button>
              )}
            </div>

            <div className="archive-modal-body">
              <div className="archive-list-vertical">
                {filteredCerts.length > 0 ? (
                  filteredCerts.map((cert, idx) => {
                    const isPdf = cert.image.endsWith(".pdf");
                    return (
                      <div className="archive-item-card" key={idx}>
                        <div className="archive-item-image-wrapper">
                          {isPdf ? (
                            <div className="archive-item-pdf-fallback">
                              <div className="pdf-fallback-glow"></div>
                              <div className="pdf-fallback-content">
                                <span className="pdf-badge-icon">📄</span>
                                <span className="pdf-badge-text">PDF PREVIEW</span>
                                <span className="pdf-badge-org">{cert.issuer}</span>
                              </div>
                            </div>
                          ) : (
                            <img src={cert.image} alt={cert.title} className="archive-item-img" />
                          )}
                          <a href={cert.link} target="_blank" rel="noopener noreferrer" className="archive-item-view-btn">
                            View Full ↗
                          </a>
                        </div>
                        
                        <div className="archive-item-info">
                          <div className="archive-item-header">
                            <span className="archive-item-issuer">{cert.issuer}</span>
                            <h4 className="archive-item-title">{cert.title}</h4>
                          </div>
                          <p className="archive-item-desc">{cert.description}</p>
                          <div className="archive-item-tags">
                            {cert.tags.map((tag, tIdx) => (
                              <span className="archive-tag" key={tIdx}>
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })
                ) : (
                  <div className="archive-no-results">
                    <p>No certificates found matching "{searchQuery}"</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
};

export default Work;
