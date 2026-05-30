import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          The Journey <span>So Far</span>
        </h2>
        <p className="career-subtitle">From curiosity to creating intelligent systems. ✨</p>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Started My AI Journey</h4>
                <h5>Foundational Learning</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Began exploring Python, Machine Learning, and Data Science while building a strong foundation in Artificial Intelligence.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Building Real-World Projects</h4>
                <h5>Applied AI</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Developed AI-powered applications including chatbots, sentiment analysis systems, intelligent web solutions, and automation tools while expanding my technical expertise.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Professional Certifications</h4>
                <h5>Industry Validation</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Earned industry-recognized certifications in Artificial Intelligence and Machine Learning, strengthening my knowledge of modern AI technologies and real-world applications.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Integrated M.Tech</h4>
                <h5>AI Specialization</h5>
              </div>
              <h3>Present</h3>
            </div>
            <p>
              Pursuing Computer Science and Engineering with a specialization in Artificial Intelligence while focusing on Generative AI, AI Agents, Automation Systems, and Cloud Technologies.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
