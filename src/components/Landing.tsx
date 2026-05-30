import { PropsWithChildren } from "react";
import "./styles/Landing.css";
import LandingRoles from "./LandingRoles";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              BANDARU
              <br />
              <span>RUSHINDRA</span>
            </h1>
            <p className="landing-tagline">
              Building intelligent systems that learn,
              <br />
              automate, and evolve.
            </p>
          </div>
          <LandingRoles />
          
          {/* CTA Action Buttons - Hidden on desktop, visible on mobile */}
          <div className="landing-actions">
            <a href="#projects" className="cta-btn primary-btn" data-cursor="disable">
              View Work
            </a>
            <a href="#contact" className="cta-btn secondary-btn" data-cursor="disable">
              Let's Connect
            </a>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
