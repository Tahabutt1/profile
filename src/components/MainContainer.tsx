import { lazy, PropsWithChildren, Suspense, useEffect, useState } from "react";
import About from "./About";
import Career from "./Career";
import Contact from "./Contact";
import Cursor from "./Cursor";
import Landing from "./Landing";
import Navbar from "./Navbar";
import SocialIcons from "./SocialIcons";
import WhatIDo from "./WhatIDo";
import Work from "./Work";
import setSplitText from "./utils/splitText";
import { isMobileViewport } from "../utils/device";

const TechStack = lazy(() => import("./TechStack"));

const DeferredTechStack = () => {
  const [shouldLoad, setShouldLoad] = useState(() => !isMobileViewport());

  useEffect(() => {
    if (!isMobileViewport()) return;

    let loaded = false;
    const load = () => {
      if (loaded) return;
      loaded = true;
      setShouldLoad(true);
    };

    const timer = window.setTimeout(load, 2500);

    const workSection = document.getElementById("work");
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          load();
          observer.disconnect();
        }
      },
      { rootMargin: "120px" }
    );

    if (workSection) {
      observer.observe(workSection);
    }

    return () => {
      window.clearTimeout(timer);
      observer.disconnect();
    };
  }, []);

  if (!shouldLoad) {
    return <div className="techstack techstack-placeholder" aria-hidden="true" />;
  }

  return (
    <Suspense fallback={<div className="techstack techstack-placeholder" />}>
      <TechStack />
    </Suspense>
  );
};

const MainContainer = ({ children }: PropsWithChildren) => {
  useEffect(() => {
    const resizeHandler = () => {
      setSplitText();
    };
    resizeHandler();
    window.addEventListener("resize", resizeHandler);
    return () => {
      window.removeEventListener("resize", resizeHandler);
    };
  }, []);

  return (
    <div className="container-main">
      <Cursor />
      <Navbar />
      <SocialIcons />
      {children}
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <div className="container-main">
            <Landing />
            <About />
            <WhatIDo />
            <Career />
            <Work />
            <DeferredTechStack />
            <Contact />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
