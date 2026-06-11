import { PropsWithChildren } from "react";
import "./styles/Landing.css";

const Landing = ({ children }: PropsWithChildren) => {
  return (
    <>
      <div className="landing-section" id="landingDiv">
        <div className="landing-container">
          <div className="landing-intro">
            <h2>Hello! I'm</h2>
            <h1>
              Muhammad
              <br />
              <span>Taha</span>
            </h1>
          </div>
          <div className="landing-info">
            <h3>A</h3>
            <div className="landing-role-desktop">
              <h2 className="landing-info-h2">
                <div className="landing-h2-1">Software</div>
                <div className="landing-h2-2">Developer</div>
              </h2>
              <h2>
                <div className="landing-h2-info">Software</div>
                <div className="landing-h2-info-1">Developer</div>
              </h2>
            </div>
            <h2 className="landing-role-mobile">
              <span>Software</span>
              <span>Developer</span>
            </h2>
          </div>
        </div>
        {children}
      </div>
    </>
  );
};

export default Landing;
