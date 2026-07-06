import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  MdEmail, 
  MdPhone, 
  MdLocationOn, 
  MdSchool, 
  MdWork, 
  MdAccessTime, 
  MdContentCopy, 
  MdCheck, 
  MdArrowUpward,
  MdOutlineSend
} from "react-icons/md";
import { 
  FaGithub, 
  FaLinkedinIn, 
  FaXTwitter, 
  FaFilePdf
} from "react-icons/fa6";
import { TbGlobe } from "react-icons/tb";
import "./styles/Contact.css";
import { smoother } from "./Navbar";

// Custom SVG Icons for Niche Platforms to avoid dependency version breaks
const HuggingFaceIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M12 2A10 10 0 0 0 2 12a10 10 0 0 0 10 10 10 10 0 0 0 10-10A10 10 0 0 0 12 2zm1 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm-6 5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm4.5 5.5c-2.33 0-4.31-1.46-5.11-3.5h10.22c-.8 2.04-2.78 3.5-5.11 3.5zm4.5-5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm2-3.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
  </svg>
);

const LeetCodeIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M13.483 0a1.374 1.374 0 0 0-.961.414l-9.777 9.778a1.38 1.38 0 0 0-.038 1.99l1.03 1.03a1.378 1.378 0 0 0 1.951-.018l9.747-9.747a1.378 1.378 0 0 0-.022-1.951l-1.03-1.03a1.37 1.37 0 0 0-.9-.466zM12 4.685a1.378 1.378 0 0 0-1.007.414L1.246 14.847A1.378 1.378 0 0 0 1.21 16.84l1.03 1.03a1.378 1.378 0 0 0 1.951-.017l9.748-9.748a1.378 1.378 0 0 0-.022-1.951l-1.03-1.03a1.37 1.37 0 0 0-.887-.439zm4.278 4.278a1.378 1.378 0 0 0-1.007.414L5.524 19.124a1.378 1.378 0 0 0-.037 1.99l1.03 1.03a1.378 1.378 0 0 0 1.951-.017l9.748-9.748a1.378 1.378 0 0 0-.022-1.951l-1.03-1.03a1.37 1.37 0 0 0-.886-.434zM22.03 12.03a1.378 1.378 0 0 0-1.007.414l-9.747 9.747a1.378 1.378 0 0 0-.022 1.951l1.03 1.03a1.378 1.378 0 0 0 1.951-.017l9.747-9.747a1.378 1.378 0 0 0-.022-1.951l-1.03-1.03a1.37 1.37 0 0 0-.9-.43zm-2.03 2.03a1.378 1.378 0 0 0-1.007.414l-7.717 7.717a1.378 1.378 0 0 0-.022 1.951l1.03 1.03a1.378 1.378 0 0 0 1.951-.017l7.717-7.717a1.378 1.378 0 0 0-.022-1.951l-1.03-1.03a1.37 1.37 0 0 0-.9-.43z" />
  </svg>
);

const KaggleIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M18.825 2.25c-.218 0-.435.08-.601.24L10.3 10.428l-2.48-2.48V2.85c0-.33-.27-.6-.6-.6H5.4c-.33 0-.6.27-.6.6v18.3c0 .33.27.6.6.6h1.82c.33 0 .6-.27.6-.6v-6.938l1.966-1.966 4.793 8.583c.129.232.368.321.611.321h2.247c.504 0 .807-.563.524-.98L12.59 12.35l5.632-5.632c.162-.162.24-.378.24-.597V2.85c0-.504-.563-.807-.98-.524l-.657.657V2.25z" />
  </svg>
);

const GoogleScholarIcon = () => (
  <svg viewBox="0 0 24 24" width="1em" height="1em" fill="currentColor">
    <path d="M12 2L1 7.27l11 5.27 9-4.31v7.62c0 .88-.39 1.63-1 2.15l-3-2.45v-1.63L12 18.25l-5-4.36v1.63l3 2.45c-.61.52-1 1.27-1 2.15v2.88H8.88l-1.88-1.55v-1.63L2 22l5 4.36v-1.63l-1.88-1.55H2v-2.88c0-.88.39-1.63 1-2.15l3 2.45v1.63L12 18.25l5 4.36v-1.63l-3-2.45c.61-.52 1-1.27 1-2.15v-2.88h3.12l1.88 1.55v1.63L22 22l-5-4.36v1.63l1.88 1.55H22v2.88zM5.2 11.23v4.61L12 19.38l6.8-3.54v-4.61L12 14.77l-6.8-3.54z" />
  </svg>
);

interface Toast {
  id: string;
  message: string;
  type: "success" | "error" | "info";
}

const Contact = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  
  // Toast notifications state
  const [toasts, setToasts] = useState<Toast[]>([]);

  // Email copy state
  const [copied, setCopied] = useState(false);

  // Spotlights coordinate handlers for card hovers
  const handleCardMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  const showToast = (message: string, type: "success" | "error" | "info" = "success") => {
    const id = Date.now().toString();
    setToasts((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  };

  const handleCopyEmail = async () => {
    try {
      await navigator.clipboard.writeText("rushindrabandaru07@gmail.com");
      setCopied(true);
      showToast("Email copied to clipboard!", "success");
      setTimeout(() => setCopied(false), 3000);
    } catch (err) {
      showToast("Failed to copy email.", "error");
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = "Full name is required";
    
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast("Please fix the validation errors.", "error");
      return;
    }

    setIsSubmitting(true);
    // Mocking API Submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      showToast("Message sent successfully!", "success");
      setFormData({ name: "", email: "", subject: "", message: "" });
      
      // Reset success state after a delay
      setTimeout(() => {
        setIsSuccess(false);
      }, 5000);
    }, 2000);
  };

  const handleScrollToTop = () => {
    if (smoother) {
      smoother.scrollTo(0, true);
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  return (
    <section className="contact-section relative overflow-hidden" id="contact">
      {/* Dynamic Futuristic Background Particles & Mesh Orbs */}
      <div className="contact-bg-glow">
        <div className="bg-orb orb-purple"></div>
        <div className="bg-orb orb-blue"></div>
        <div className="bg-grid-overlay"></div>
      </div>

      <div className="contact-container max-width-container">
        
        {/* Animated Gradient Title Grid Header */}
        <div className="section-header-wrap">
          <motion.h2 
            className="contact-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            Let's Create AI <br className="mobile-break" /> That Matters
          </motion.h2>
          
          <motion.p 
            className="contact-subtitle"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Open for AI Internships • Research Collaborations • Freelance AI Projects • Startup Opportunities
          </motion.p>
        </div>

        {/* Outer Split Columns Container */}
        <div className="contact-split-grid">
          
          {/* LEFT COLUMN: CONTACT DETAILS & FEATURE CARDS */}
          <div className="contact-left">
            
            {/* Wave Introduction Card */}
            <motion.div 
              className="intro-glass-card hover-glow-spotlight"
              onMouseMove={handleCardMouseMove}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card-border-glow"></div>
              <h3>👋 Hello World</h3>
              <p>
                I'm always excited to discuss AI, Machine Learning, Generative AI, Computer Vision, Research, and innovative software projects.
              </p>
            </motion.div>

            {/* Info Cards Grid */}
            <div className="info-cards-grid">
              {[
                { 
                  label: "Email Address", 
                  value: "rushindrabandaru07@gmail.com", 
                  icon: <MdEmail />, 
                  action: handleCopyEmail,
                  copyable: true 
                },
                { 
                  label: "Location", 
                  value: "Hyderabad, India", 
                  icon: <MdLocationOn /> 
                },
                { 
                  label: "University", 
                  value: "Vellore Institute of Tech (VIT)", 
                  icon: <MdSchool /> 
                },
                { 
                  label: "Open To", 
                  value: "AI Internships & Research", 
                  icon: <MdWork /> 
                },
                { 
                  label: "Availability", 
                  value: "Immediate (Full-Time)", 
                  icon: <MdAccessTime /> 
                },
                { 
                  label: "Phone Contact", 
                  value: "+91 99999 99999", 
                  icon: <MdPhone /> 
                }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  className="info-glass-card hover-glow-spotlight"
                  onMouseMove={handleCardMouseMove}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.05 }}
                  onClick={item.action}
                  style={{ cursor: item.copyable ? "pointer" : "default" }}
                >
                  <div className="card-border-glow"></div>
                  <div className="info-card-header">
                    <span className="info-icon-wrapper">{item.icon}</span>
                    <span className="info-label">{item.label}</span>
                    {item.copyable && (
                      <span className="copy-action-btn">
                        {copied ? <MdCheck className="text-green" /> : <MdContentCopy />}
                      </span>
                    )}
                  </div>
                  <p className="info-value">{item.value}</p>
                </motion.div>
              ))}
            </div>

            {/* Current Status Glass Card */}
            <motion.div 
              className="status-glass-card hover-glow-spotlight"
              onMouseMove={handleCardMouseMove}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card-border-glow"></div>
              <h4>Current Status</h4>
              <div className="status-badge-list">
                {[
                  "Available for AI Internships",
                  "Open to Research Collaboration",
                  "Building AI Products",
                  "Learning GenAI & AI Agents",
                  "Microsoft Learn Student Ambassador"
                ].map((badge, idx) => (
                  <div key={idx} className="status-badge-item">
                    <span className="pulse-dot"></span>
                    <span className="badge-text">{badge}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Why Work With Me Section */}
            <div className="why-work-me-container">
              <h4 className="why-title">Why Work With Me</h4>
              <div className="why-cards-grid">
                {[
                  {
                    icon: "🚀",
                    title: "AI Engineer",
                    desc: "Building intelligent AI-powered applications."
                  },
                  {
                    icon: "🧠",
                    title: "Machine Learning",
                    desc: "End-to-end ML model development."
                  },
                  {
                    icon: "👁",
                    title: "Computer Vision",
                    desc: "Image recognition and deep learning systems."
                  },
                  {
                    icon: "⚡",
                    title: "Full Stack AI",
                    desc: "Deploying production-ready AI applications."
                  }
                ].map((feature, idx) => (
                  <motion.div
                    key={idx}
                    className="why-glass-card hover-glow-spotlight"
                    onMouseMove={handleCardMouseMove}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                  >
                    <div className="card-border-glow"></div>
                    <span className="why-emoji">{feature.icon}</span>
                    <h5>{feature.title}</h5>
                    <p>{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT COLUMN: CONTACT FORM & SOCIAL GRID */}
          <div className="contact-right">
            
            {/* Elegant Glass Form Card */}
            <motion.div 
              className="form-glass-card hover-glow-spotlight"
              onMouseMove={handleCardMouseMove}
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="card-border-glow"></div>
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="form"
                    onSubmit={handleFormSubmit} 
                    className="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0, y: -20 }}
                  >
                    <div className="form-title-block">
                      <h3>Send A Message</h3>
                      <p>I will get back to you within 24 hours.</p>
                    </div>

                    <div className="form-group-grid">
                      <div className="form-control">
                        <label htmlFor="name">Full Name</label>
                        <input
                          type="text"
                          id="name"
                          className={errors.name ? "error-input" : ""}
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Jane Doe"
                          disabled={isSubmitting}
                        />
                        {errors.name && <span className="error-message">{errors.name}</span>}
                      </div>

                      <div className="form-control">
                        <label htmlFor="email">Email Address</label>
                        <input
                          type="email"
                          id="email"
                          className={errors.email ? "error-input" : ""}
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="jane@example.com"
                          disabled={isSubmitting}
                        />
                        {errors.email && <span className="error-message">{errors.email}</span>}
                      </div>
                    </div>

                    <div className="form-control">
                      <label htmlFor="subject">Subject</label>
                      <input
                        type="text"
                        id="subject"
                        className={errors.subject ? "error-input" : ""}
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="Project Collaboration Opportunity"
                        disabled={isSubmitting}
                      />
                      {errors.subject && <span className="error-message">{errors.subject}</span>}
                    </div>

                    <div className="form-control">
                      <label htmlFor="message">Message</label>
                      <textarea
                        id="message"
                        rows={6}
                        className={errors.message ? "error-input" : ""}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Describe your goals or project ideas..."
                        disabled={isSubmitting}
                      ></textarea>
                      {errors.message && <span className="error-message">{errors.message}</span>}
                    </div>

                    <button
                      type="submit"
                      className={`submit-glow-btn ${isSubmitting ? "loading" : ""}`}
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>
                          <span className="spinner"></span>
                          Sending...
                        </>
                      ) : (
                        <>
                          Send Message
                          <span className="submit-icon-wrapper">
                            <MdOutlineSend />
                          </span>
                        </>
                      )}
                    </button>
                  </motion.form>
                ) : (
                  <motion.div 
                    key="success"
                    className="form-success-container"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    <div className="success-lottie-wrap">
                      <div className="checkmark-circle">
                        <motion.div 
                          className="checkmark-draw"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1 }}
                          transition={{ duration: 0.6, delay: 0.2 }}
                        >
                          <svg viewBox="0 0 52 52" className="checkmark-svg">
                            <circle cx="26" cy="26" r="25" fill="none" className="checkmark-circle-stroke" />
                            <path fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8" className="checkmark-check-stroke" />
                          </svg>
                        </motion.div>
                      </div>
                    </div>
                    <h3>Message Sent!</h3>
                    <p>Thank you for reaching out. I'll get back to you shortly!</p>
                  </motion.div>
                )}
              </AnimatePresence>

            </motion.div>

            {/* Social Grid Section */}
            <div className="social-grid-wrapper">
              <h4 className="social-title">Connect Across the AI Web</h4>
              <div className="floating-social-grid">
                {[
                  { name: "GitHub", href: "https://github.com/rushindra1404", icon: <FaGithub />, color: "#2ea44f" },
                  { name: "LinkedIn", href: "https://www.linkedin.com/in/rushindra-bandaru/", icon: <FaLinkedinIn />, color: "#0077b5" },
                  { name: "Email", href: "mailto:rushindrabandaru07@gmail.com", icon: <MdEmail />, color: "#c2a4ff" },
                  { name: "Resume", href: "#", icon: <FaFilePdf />, color: "#e056fd" },
                  { name: "Portfolio", href: "https://rushindra.dev", icon: <TbGlobe />, color: "#0575e6" },
                  { name: "HuggingFace", href: "https://huggingface.co/rushindra", icon: <HuggingFaceIcon />, color: "#ffb000" },
                  { name: "X (Twitter)", href: "https://x.com/rushindra", icon: <FaXTwitter />, color: "#ffffff" },
                  { name: "LeetCode", href: "https://leetcode.com/rushindra", icon: <LeetCodeIcon />, color: "#ffa116" },
                  { name: "Kaggle", href: "https://kaggle.com/rushindra", icon: <KaggleIcon />, color: "#20beff" },
                  { name: "Scholar", href: "#", icon: <GoogleScholarIcon />, color: "#4285f4" }
                ].map((social, idx) => (
                  <motion.a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="magnetic-social-button"
                    style={{ "--social-glow": social.color } as React.CSSProperties}
                    whileHover={{ scale: 1.15, y: -6 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 300, damping: 15, delay: idx * 0.03 }}
                  >
                    <span className="social-btn-inner">{social.icon}</span>
                    <span className="social-tooltip">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Toast Notification Stack */}
      <div className="toast-container-stack">
        <AnimatePresence>
          {toasts.map((toast) => (
            <motion.div
              key={toast.id}
              className={`custom-toast toast-${toast.type}`}
              initial={{ opacity: 0, y: 50, scale: 0.3 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              transition={{ type: "spring", stiffness: 200, damping: 18 }}
            >
              <div className="toast-icon-wrap">
                {toast.type === "success" ? <MdCheck /> : <MdEmail />}
              </div>
              <p className="toast-message-text">{toast.message}</p>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Floating Back to Top Button */}
      <motion.button 
        className="floating-back-to-top"
        onClick={handleScrollToTop}
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ margin: "100px" }}
        whileHover={{ scale: 1.1, y: -4 }}
        whileTap={{ scale: 0.9 }}
        aria-label="Back to top"
      >
        <MdArrowUpward />
      </motion.button>

      {/* PREMIUM FOOTER */}
      <footer className="premium-footer relative">
        <div className="footer-glow-separator"></div>
        <div className="footer-container max-width-container">
          
          <div className="footer-grid">
            
            {/* Branding Block */}
            <div className="footer-brand">
              <span className="footer-logo">BR</span>
              <p className="footer-tagline">Building intelligent systems that learn, automate, and evolve.</p>
            </div>

            {/* Quick Links */}
            <div className="footer-links-col">
              <h5>Navigation</h5>
              <div className="footer-link-list">
                <a href="#about">About</a>
                <a href="#projects">Projects</a>
                <a href="#work">Certifications</a>
                <a href="#contact">Contact</a>
              </div>
            </div>

            {/* Resources Links */}
            <div className="footer-links-col">
              <h5>Quick Contacts</h5>
              <div className="footer-link-list">
                <a href="mailto:rushindrabandaru07@gmail.com" onClick={(e) => { e.preventDefault(); handleCopyEmail(); }}>Copy Email</a>
                <a href="mailto:rushindrabandaru07@gmail.com">Send Email Direct</a>
                <a href="#">Download Resume</a>
                <a href="https://github.com/rushindra1404" target="_blank" rel="noopener noreferrer">GitHub Profile</a>
              </div>
            </div>

          </div>

          {/* Footer Bottom Block */}
          <div className="footer-bottom-flex">
            <div className="footer-copyright-wrap">
              <p>&copy; {new Date().getFullYear()} Rushindra. All rights reserved.</p>
              <p className="designer-credit">Designed & Developed by Rushindra</p>
            </div>
            
            <div className="tech-stack-badge">
              <p>Made with ❤️ using React + TypeScript + Tailwind CSS + Framer Motion</p>
            </div>
          </div>

        </div>
      </footer>

    </section>
  );
};

export default Contact;
