
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { useEffect, useRef, useState } from "react";

const Work = () => {
  const workScrollRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const projectContent = [
    {
      title: "React.js Web Application",
      description: "(Frontend project) please click below to check project!",
      image: "/images/pge-smart.png",
      link: "https://pgesmarttech.com/",
      tools: "Javascript, TypeScript, React, Threejs",
    },
    {
      title: "Python Flask Backend APIs",
      description: "Testing on postman",
      image: "/images/postman.png",
      link: "",
      tools: "Python, Flask, REST APIs, Postman",
    },
    {
      title: "AI/ML Model Training Projects",
      description:
        "AI widget chatbot works on real time data (frontend + backend + chatbot + admin dashboard). please click below on display to check project!",
      image: "/images/chatbott.png",
      video: "/images/chatbot.mp4",
      link: "",
      tools: "Python, AI/ML, React, NLP",
    },
    {
      title: "Consultant AI",
      description:
        "AI consultant project with intelligent guidance, smart recommendations, and real-time assistance. please click below on display to check project!",
      video: "/images/consultant.mp4",
      link: "",
      tools: "Python, AI/ML, React, OpenAI API",
    },
    {
      title: "Full Stack Portfolio Projects",
      description: "Frontend project, click the image to view project!",
      image: "/images/pang.png",
      link: "https://pangeapay1.vercel.app/",
      tools: "Javascript, TypeScript, React, Threejs",
    },
    {
      title: "Cybersecurity Learning Projects",
      description: "metasploit attack",
      image: "/images/meta.jpg",
      link: "",
      tools: "Kali Linux, Metasploit, Security Testing",
    },
    {
      title: "Anti-Gravity VR Glow Effect",
      description:
        "Interactive VR-inspired antigravity glow effect with real-time motion, shaders, and immersive visuals, click the image to view project!",
      image: "/images/ar-project.png",
      video: "/images/ar-projects.mp4",
      link: "",
      tools: "Javascript, TypeScript, React, Threejs",
    },
  ];

  const handleHorizontalScroll = (direction: "left" | "right") => {
    const container = workScrollRef.current;
    if (!container) return;

    const scrollAmount = Math.max(
      320,
      Math.floor(container.clientWidth * 0.7)
    );

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const container = workScrollRef.current;
    if (!container) return;

    const updateArrowState = () => {
      const maxScrollLeft = container.scrollWidth - container.clientWidth;
      setCanScrollLeft(container.scrollLeft > 2);
      setCanScrollRight(container.scrollLeft < maxScrollLeft - 2);
    };

    updateArrowState();
    container.addEventListener("scroll", updateArrowState, {
      passive: true,
    });
    window.addEventListener("resize", updateArrowState);

    return () => {
      container.removeEventListener("scroll", updateArrowState);
      window.removeEventListener("resize", updateArrowState);
    };
  }, []);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <button
          className="work-arrow work-arrow-left"
          aria-label="Scroll work items left"
          onClick={() => handleHorizontalScroll("left")}
          type="button"
          disabled={!canScrollLeft}
        >
          ←
        </button>

        <button
          className="work-arrow work-arrow-right"
          aria-label="Scroll work items right"
          onClick={() => handleHorizontalScroll("right")}
          type="button"
          disabled={!canScrollRight}
        >
          →
        </button>

        <div className="work-scroll" ref={workScrollRef}>
          <div className="work-flex">
            {projectContent.map((project, index) => (
              <div className="work-box" key={index}>
                <div className="work-info">
                  <div className="work-title">
                    <h3>0{index + 1}</h3>

                    <div>
                      <h4>{project.title}</h4>
                      <p>{project.description}</p>
                    </div>
                  </div>

                  <h4>Tools and features</h4>
                  <p>{project.tools}</p>
                </div>

                <a
                  href={project.video || project.link || undefined}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    cursor:
                      project.video || project.link ? "pointer" : "default",
                    display: "block",
                  }}
                >
                  <WorkImage
                    image={project.image}
                    alt={project.title}
                    video={project.video}
                    link={project.link}
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;