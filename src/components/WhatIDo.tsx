import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    const isMobileLayout = window.matchMedia("(max-width: 1024px)").matches;
    if (ScrollTrigger.isTouch && !isMobileLayout) {
      const handlers = new Map<HTMLDivElement, () => void>();

      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          const onClick = () => handleClick(container);
          handlers.set(container, onClick);
          container.addEventListener("click", onClick);
        }
      });

      return () => {
        handlers.forEach((onClick, container) => {
          container.removeEventListener("click", onClick);
        });
      };
    }
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
        
          <div>
          
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
              <h3>Skillset</h3>
              
              <div className="what-content-flex">
                <div className="what-tags">PYTHON</div>
                <div className="what-tags">REACTJS</div>
                <div className="what-tags">C++</div>
                <div className="what-tags">C</div>
                <div className="what-tags">FLASK</div>
                <div className="what-tags">DJANGO</div>
                <div className="what-tags">NLP</div>
                <div className="what-tags">Css</div>
                <div className="what-tags">NODE.JS</div>
                <div className="what-tags">DART</div>
                <div className="what-tags">HTML</div>
                <div className="what-tags">PHP</div>
                <div className="what-tags">MySql</div>
                 <div className="what-tags">DART</div>
                <div className="what-tags">TAILWIND</div>
                <div className="what-tags">FLUTTER</div>
                <div className="what-tags">WEB DEVELOPMENT</div>
                <div className="what-tags">FULL STACK ENGINEER</div>
                <div className="what-tags">ML/AI ENGINEER</div>
                <div className="what-tags">CYBERSECURITY BEGINNER</div>
              </div>
              <div className="what-arrow"></div>
            </div>
          </div>
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
              <h3>Tools</h3>
            
              <div className="what-content-flex">

                <div className="what-tags">UI Design</div>
                <div className="what-tags">3D Animation</div>
                <div className="what-tags">KALI LINUX</div>
                <div className="what-tags">SPLUNK</div>
                 <div className="what-tags">VERCEL</div>
                <div className="what-tags">DOCKER</div>
                <div className="what-tags">MONGODB</div>
                <div className="what-tags">POSTGRESQL</div>
                 <div className="what-tags">POSTMAN</div>
                  <div className="what-tags">GITHUB</div>
                <div className="what-tags">VS CODE</div>
                <div className="what-tags">POSTGRESQL</div>
                 <div className="what-tags">FIGMA</div>
                  <div className="what-tags">TENSORFLOW</div>
                <div className="what-tags">PYTORCH</div>
                <div className="what-tags">SCIKIT-LEARN</div>
                 <div className="what-tags">WIRESHARK</div>
                  <div className="what-tags">DOCKER</div>
                <div className="what-tags">MONGODB</div>
                <div className="what-tags">POSTGRESQL</div>
                 <div className="what-tags">PENETRATION TESTING</div>
                 <div className="what-tags">CURSOR AI</div>
                 <div className="what-tags">GOOGLE COLAB</div>
                 <div className="what-tags">FIREBASE</div>
                 <div className="what-tags">AWS</div>
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
