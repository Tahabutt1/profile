import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { smoother } from "../Navbar";
import { isMobileViewport } from "../../utils/device";

gsap.registerPlugin(ScrollTrigger);

/**
 * Split text into spans (replacement for SplitText)
 */
function splitText(
  selector: string,
  type: "chars" | "words" = "chars"
) {
  const elements = document.querySelectorAll(selector);
  const results: HTMLElement[] = [];

  elements.forEach((el) => {
    const element = el as HTMLElement;
    const text = element.textContent || "";

    const parts =
      type === "chars" ? text.split("") : text.split(" ");

    element.textContent = "";

    parts.forEach((part) => {
      const span = document.createElement("span");
      span.textContent = type === "words" ? part + " " : part;
      span.style.display = "inline-block";
      element.appendChild(span);
      results.push(span);
    });
  });

  return results;
}

export function initialFX() {
  document.body.style.overflowY = "auto";
  const mobile = isMobileViewport();

  // safe smoother fallback (no crash)
  if (smoother?.paused) smoother.paused(false);

  const main = document.getElementsByTagName("main")[0];
  if (main) main.classList.add("main-active");

  gsap.to("body", {
    backgroundColor: "#0b080c",
    duration: 0.5,
    delay: 1,
  });

  const landingText = splitText(
    ".landing-info h3, .landing-intro h2, .landing-intro h1",
    "chars"
  );

  gsap.fromTo(
    landingText,
    { opacity: 0, y: 80, filter: "blur(5px)" },
    {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      duration: 1.2,
      ease: "power3.inOut",
      stagger: 0.025,
      delay: 0.3,
    }
  );

  if (mobile) {
    gsap.fromTo(
      ".landing-role-mobile",
      { opacity: 0, y: 24 },
      {
        opacity: 1,
        y: 0,
        duration: 0.9,
        ease: "power2.out",
        delay: 0.6,
      }
    );
  } else {
    const landingText2 = splitText(".landing-h2-info", "chars");

    gsap.fromTo(
      landingText2,
      { opacity: 0, y: 80, filter: "blur(5px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.025,
        delay: 0.3,
      }
    );

    gsap.fromTo(
      ".landing-info-h2",
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power1.inOut",
        delay: 0.8,
      }
    );

    const landingText3 = splitText(".landing-h2-info-1", "chars");
    const landingText4 = splitText(".landing-h2-1", "chars");
    const landingText5 = splitText(".landing-h2-2", "chars");

    LoopText(landingText2, landingText3);
    LoopText(landingText4, landingText5);
  }

  gsap.fromTo(
    [".header", ".icons-section", ".nav-fade"],
    { opacity: 0 },
    {
      opacity: 1,
      duration: 1.2,
      ease: "power1.inOut",
      delay: 0.1,
    }
  );
}

/**
 * Loop animation (fixed version)
 */
function LoopText(text1: HTMLElement[], text2: HTMLElement[]) {
  const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });

  const delay = 4;
  const delay2 = delay * 2 + 1;

  tl.fromTo(
    text2,
    { opacity: 0, y: 80 },
    {
      opacity: 1,
      y: 0,
      duration: 1.2,
      ease: "power3.inOut",
      stagger: 0.1,
      delay: delay,
    },
    0
  )
    .fromTo(
      text1,
      { y: 80 },
      {
        y: 0,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    )
    .fromTo(
      text1,
      { y: 0 },
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay,
      },
      0
    )
    .to(
      text2,
      {
        y: -80,
        duration: 1.2,
        ease: "power3.inOut",
        stagger: 0.1,
        delay: delay2,
      },
      1
    );
}