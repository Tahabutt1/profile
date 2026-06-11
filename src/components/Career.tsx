import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>FULL STACK DEVELOPER</h4>
                <h5>PANGEA GLOBAL ENTERPRISES</h5>
              </div>
              <h3>1+ year</h3>
            </div>
         <p>
  I have 1+ year of experience as a Full Stack Developer at Pangea Global Enterprises, building responsive and dynamic web applications. 
  I have worked with React.js on the front end and Python frameworks like Flask and Django on the back end. 
  I also specialize in developing AI/ML-based chatbots, focusing on clean code, APIs, and seamless system integration.
</p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>FULL STACK DEVELOPER</h4>
                <h5>TNC IT SOLUTIONS, DUBAI</h5>
              </div>
              <h3>1.5+ years</h3>
            </div>
          <p>
  I have 1.5+ years of experience as a Full Stack Developer at TNC IT Solutions, Dubai, developing scalable and user-friendly web applications. 
  I have worked on both front-end and back-end technologies, including React.js, Python, Flask, and Django. 
  I focus on building efficient systems, creating APIs, and ensuring smooth performance across applications.
</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
