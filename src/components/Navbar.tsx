// import { useEffect } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";
// import HoverLinks from "./HoverLinks";
// import "./styles/Navbar.css";

// gsap.registerPlugin(ScrollTrigger);

// // export dummy smoother so other files don't break
// export let smoother: any = {
//   scrollTo: (target: any) => {
//     document.querySelector(target)?.scrollIntoView({
//       behavior: "smooth",
//       block: "start",
//     });
//   },
//   scrollTop: () => {},
//   paused: () => {},
// };

// const Navbar = () => {
//   useEffect(() => {
//     // reset scroll position
//     window.scrollTo(0, 0);

//     let links = document.querySelectorAll(".header ul a");

//     links.forEach((elem) => {
//       const element = elem as HTMLAnchorElement;

//       element.addEventListener("click", (e) => {
//         if (window.innerWidth > 1024) {
//           e.preventDefault();

//           const section = element.getAttribute("data-href");

//           if (section) {
//             document.querySelector(section)?.scrollIntoView({
//               behavior: "smooth",
//               block: "start",
//             });
//           }
//         }
//       });
//     });

//     const handleResize = () => {
//       ScrollTrigger.refresh();
//     };

//     window.addEventListener("resize", handleResize);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//     };
//   }, []);

//   return (
//     <>
//       <div className="header">
//         <a href="/#" className="navbar-title" data-cursor="disable">
//           <img
//             src="/images/logo1.png"
//             alt="Logo"
//             className="navbar-logo"
//             loading="eager"
//             decoding="async"
//           />
//         </a>

//         <a
//           href="mailto:tahanaveedbutt12345@gmail.com"
//           className="navbar-connect"
//           data-cursor="disable"
//         >
//           tahanaveedbutt12345@gmail.com
//         </a>

//         <ul>
//           <li>
//             <a data-href="#about" href="#about">
//               <HoverLinks text="ABOUT" />
//             </a>
//           </li>

//           <li>
//             <a data-href="#work" href="#work">
//               <HoverLinks text="WORK" />
//             </a>
//           </li>

//           <li>
//             <a data-href="#contact" href="#contact">
//               <HoverLinks text="CONTACT" />
//             </a>
//           </li>
//         </ul>
//       </div>

//       <div className="landing-circle1"></div>
//       <div className="landing-circle2"></div>
//       <div className="nav-fade"></div>
//     </>
//   );
// };

// export default Navbar;
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import HoverLinks from "./HoverLinks";
import "./styles/Navbar.css";

gsap.registerPlugin(ScrollTrigger);

// export dummy smoother so other files don't break
export let smoother: any = {
  scrollTo: (target: any) => {
    document.querySelector(target)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  },
  scrollTop: () => {},
  paused: () => {},
};

const Navbar = () => {
  useEffect(() => {
    window.scrollTo(0, 0);

    let links = document.querySelectorAll(".header ul a");

    links.forEach((elem) => {
      const element = elem as HTMLAnchorElement;

      element.addEventListener("click", (e) => {
        if (window.innerWidth > 1024) {
          e.preventDefault();

          const section = element.getAttribute("data-href");

          if (section) {
            document.querySelector(section)?.scrollIntoView({
              behavior: "smooth",
              block: "start",
            });
          }
        }
      });
    });

    const handleResize = () => {
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <div className="header">
        <a href="/#" className="navbar-title" data-cursor="disable">
          <img
            src="/images/logo1.png"
            alt="Logo"
            className="navbar-logo"
            loading="eager"
            decoding="async"
          />
        </a>

        <a
          href="mailto:tahanaveedbutt12345@gmail.com"
          className="navbar-connect"
          data-cursor="disable"
        >
          tahanaveedbutt12345@gmail.com
        </a>

        <ul>
          <li>
            <a data-href="#about" href="#about">
              <HoverLinks text="ABOUT" />
            </a>
          </li>

          <li>
            <a data-href="#work" href="#work">
              <HoverLinks text="WORK" />
            </a>
          </li>

          <li>
            <a data-href="#contact" href="#contact">
              <HoverLinks text="CONTACT" />
            </a>
          </li>
        </ul>
      </div>

      <div className="landing-circle1"></div>
      <div className="landing-circle2"></div>
      <div className="nav-fade"></div>
    </>
  );
};

export default Navbar;