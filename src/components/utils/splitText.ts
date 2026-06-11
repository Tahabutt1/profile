import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface ParaElement extends HTMLElement {
  anim?: gsap.core.Animation;
  split?: HTMLElement[];
}

// register only free plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Utility: manually split text into spans (replacement for SplitText)
 */
function splitToSpans(element: HTMLElement, type: "words" | "chars") {
  const text = element.textContent || "";
  let parts: string[] = [];

  if (type === "words") {
    parts = text.split(" ");
  } else {
    parts = text.split("");
  }

  element.textContent = "";

  const spans: HTMLElement[] = parts.map((part) => {
    const span = document.createElement("span");
    span.textContent = type === "words" ? part + " " : part;
    span.style.display = "inline-block";
    element.appendChild(span);
    return span;
  });

  return spans;
}

export default function setSplitText() {
  ScrollTrigger.config({ ignoreMobileResize: true });

  if (window.innerWidth < 900) return;

  const paras: NodeListOf<ParaElement> = document.querySelectorAll(".para");
  const titles: NodeListOf<ParaElement> = document.querySelectorAll(".title");

  const TriggerStart =
    window.innerWidth <= 1024 ? "top 60%" : "20% 60%";

  const ToggleAction = "play pause resume reverse";

  // =========================
  // PARAGRAPHS ANIMATION
  // =========================
  paras.forEach((para) => {
    para.classList.add("visible");

    if (para.anim) {
      para.anim.progress(1).kill();
    }

    const words = splitToSpans(para, "words");
    para.split = words;

    para.anim = gsap.fromTo(
      words,
      { autoAlpha: 0, y: 80 },
      {
        autoAlpha: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
        stagger: 0.02,
        scrollTrigger: {
          trigger: para.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  // =========================
  // TITLES ANIMATION
  // =========================
  titles.forEach((title) => {
    if (title.anim) {
      title.anim.progress(1).kill();
    }

    const chars = splitToSpans(title, "chars");
    title.split = chars;

    title.anim = gsap.fromTo(
      chars,
      { autoAlpha: 0, y: 80, rotate: 10 },
      {
        autoAlpha: 1,
        y: 0,
        rotate: 0,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: 0.03,
        scrollTrigger: {
          trigger: title.parentElement?.parentElement,
          toggleActions: ToggleAction,
          start: TriggerStart,
        },
      }
    );
  });

  // refresh fix (avoid infinite recursion)
  ScrollTrigger.addEventListener("refreshInit", () => {
    paras.forEach((p) => (p.innerHTML = p.textContent || ""));
    titles.forEach((t) => (t.innerHTML = t.textContent || ""));
  });

  ScrollTrigger.refresh();
}