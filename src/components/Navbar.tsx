import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import { gsap } from "gsap";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { AnimatePresence, motion } from "framer-motion";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollSmoother, ScrollTrigger);
export let smoother: ScrollSmoother;

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    smoother = ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1.7,
      speed: 1.7,
      effects: true,
      autoResize: true,
      ignoreMobileResize: true,
    });

    smoother.scrollTop(0);
    smoother.paused(true);

    let links = document.querySelectorAll(".header ul a");
    links.forEach((elem) => {
      let element = elem as HTMLAnchorElement;
      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();
          let elem = e.currentTarget as HTMLAnchorElement;
          let section = elem.getAttribute("data-href");
          smoother.scrollTo(section, true, "top top");
        }
      });
    });
    window.addEventListener("resize", () => {
      ScrollSmoother.refresh(true);
    });
  }, []);

  const toggleMobileMenu = () => {
    const nextState = !isMenuOpen;
    setIsMenuOpen(nextState);
    if (nextState) {
      document.body.style.overflow = "hidden";
      if (smoother) {
        smoother.paused(true);
      }
    } else {
      document.body.style.overflow = "";
      // Only unpause if main loader isn't showing (default timeline state)
      if (smoother) {
        smoother.paused(false);
      }
    }
  };

  const handleMobileLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMenuOpen(false);
    document.body.style.overflow = "";
    if (smoother) {
      smoother.paused(false);
    }

    const targetSection = document.querySelector(href);
    if (targetSection) {
      if (window.innerWidth > 1024 && smoother) {
        smoother.scrollTo(href, true, "top top");
      } else {
        // Safe timeout to ensure overlay closing animation completes or starts
        setTimeout(() => {
          targetSection.scrollIntoView({ behavior: "smooth" });
        }, 150);
      }
    }
  };

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          BR
        </a>
        <a
          href="mailto:rushindrabandaru07@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          rushindrabandaru07@gmail.com
        </a>
        
        {/* Desktop Navbar list */}
        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>
          <li>
            <a data-href="#projects" href="#projects">
              <HoverLinks text="PROJECTS" />
            </a>
          </li>
          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="CERTIFICATIONS" />
            </a>
          </li>
          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>

        {/* Mobile Hamburger Toggle Button */}
        <button 
          className={`mobile-menu-toggle ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMobileMenu}
          aria-label="Toggle Menu"
          data-cursor="disable"
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>

      {/* Fullscreen Mobile Menu Overlay */}
      {isMenuOpen && createPortal(
        <AnimatePresence>
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(15px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.3 }}
          >
            <motion.ul 
              className="mobile-menu-links"
              initial="closed"
              animate="open"
              exit="closed"
              variants={{
                open: { transition: { staggerChildren: 0.08 } },
                closed: { transition: { staggerChildren: 0.04, staggerDirection: -1 } }
              }}
            >
              {[
                { label: "ABOUT", href: "#about" },
                { label: "PROJECTS", href: "#projects" },
                { label: "CERTIFICATIONS", href: "#work" },
                { label: "CONTACT", href: "#contact" }
              ].map((link) => (
                <motion.li 
                  key={link.label}
                  variants={{
                    open: { y: 0, opacity: 1, filter: "blur(0px)" },
                    closed: { y: 25, opacity: 0, filter: "blur(4px)" }
                  }}
                  transition={{ duration: 0.4 }}
                >
                  <a 
                    href={link.href} 
                    onClick={(e) => handleMobileLinkClick(e, link.href)}
                    className="mobile-nav-link"
                    data-cursor="disable"
                  >
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
            <div className="mobile-menu-footer">
              <a href="mailto:rushindrabandaru07@gmail.com">rushindrabandaru07@gmail.com</a>
            </div>
          </motion.div>
        </AnimatePresence>,
        document.body
      )}
    </>
  );
};

export default Navbar;
