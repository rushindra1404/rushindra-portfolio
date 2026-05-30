import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./styles/LandingRoles.css";

const roles = [
  "AI/ML Engineer",
  "AI Generalist",
  "Generative AI Developer",
  "AI Agent Builder",
];

const LandingRoles = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 3500); // cycle text every 3.5 seconds
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="landing-roles-container">
      <h3 className="landing-roles-subtitle">SPECIALIZING IN</h3>
      <div className="landing-roles-wrapper">
        <AnimatePresence mode="wait">
          <motion.h2
            key={index}
            className="landing-roles-title"
            initial={{ y: -20, opacity: 0, filter: "blur(8px)" }}
            animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
            exit={{ y: 20, opacity: 0, filter: "blur(8px)" }}
            transition={{
              duration: 0.6,
              ease: [0.16, 1, 0.3, 1], // premium custom easeOutExpo curve
            }}
          >
            {roles[index]}
          </motion.h2>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default LandingRoles;
