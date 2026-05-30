import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          <div>
            W<span className="hat-h2">HAT</span> I
          </div>
          <div>
            <span className="do-h2">CAN DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          
          {/* Card 1 */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>AI/ML DEVELOPMENT</h3>
              <h4>Description</h4>
              <p>
                Building intelligent systems using Machine Learning, Deep
                Learning, NLP, and data-driven technologies to solve real-world
                problems.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Python</div>
                <div className="what-tags">PyTorch</div>
                <div className="what-tags">TensorFlow</div>
                <div className="what-tags">Scikit-Learn</div>
                <div className="what-tags">Pandas</div>
                <div className="what-tags">NumPy</div>
                <div className="what-tags">NLP</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* Card 2 */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 1)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>GENERATIVE AI & AI AGENTS</h3>
              <h4>Description</h4>
              <p>
                Creating AI-powered assistants, automation systems, and
                LLM-based applications focused on productivity, interaction,
                and intelligent workflows.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">OpenAI API</div>
                <div className="what-tags">LangChain</div>
                <div className="what-tags">LlamaIndex</div>
                <div className="what-tags">AI Agents</div>
                <div className="what-tags">HuggingFace</div>
                <div className="what-tags">CrewAI</div>
                <div className="what-tags">VectorDBs</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* Card 3 */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 2)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FULL STACK AI APPLICATIONS</h3>
              <h4>Description</h4>
              <p>
                Developing modern AI-integrated web applications using React,
                APIs, cloud technologies, and scalable backend systems.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">React</div>
                <div className="what-tags">Node.js</div>
                <div className="what-tags">FastAPI</div>
                <div className="what-tags">Flask</div>
                <div className="what-tags">APIs</div>
                <div className="what-tags">Docker</div>
                <div className="what-tags">AWS</div>
                <div className="what-tags">PostgreSQL</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

          {/* Card 4 */}
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 3)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-corner"></div>

            <div className="what-content-in">
              <h3>FUTURISTIC UI EXPERIENCES</h3>
              <h4>Description</h4>
              <p>
                Designing immersive digital experiences with cinematic 3D
                visuals, smooth interactions, and modern futuristic interfaces.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">Three.js</div>
                <div className="what-tags">WebGL</div>
                <div className="what-tags">GLSL</div>
                <div className="what-tags">React Three Fiber</div>
                <div className="what-tags">GSAP</div>
                <div className="what-tags">Blender</div>
                <div className="what-tags">UI/UX Design</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
