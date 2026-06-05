import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        
        <div className="footer-about">
          <h3>About</h3>
          <p> 
            We are a team of passionate developers dedicated to creating innovative solutions for growth and success in the digital age. 
            We are collaborating to build responsive, user-friendly web applications while honing our front-end development skills.
          </p> 

          <ul className="members-list">
            <li>Malachy</li>
            <li>Zikoranibuchi</li>
            <li>Victor</li>
            <li>Nwaeze</li>
            <li>Godswill</li>
            <li>Gabriel</li>
            <li>Alex</li>
            <li>Samuel</li>
          </ul>
        </div>

        
        <hr className="footer-divider"/>

        
        <div className="footer-bottom">

          <div className="footer-left">
            <p>
              ©2026 Design by{" "}
              <a href="https://amakandukwu.com/"
                target="_blank"
                rel="noopener noreferrer">
                  Amaka.
              </a>   {" "}
                and {" "}

              <a href="https://www.linkedin.com/in/ifeomaokocha"
                target="_blank"
                rel="noopener noreferrer">
                  Ifeoma A.
              </a>

            </p>

            <p>
              Built by {" "}
              <a href="https://github.com/TheHunter-Modd/phoenix-group-6"
                target="_blank"
                rel="noopener noreferrer">
                Phoenix Group 6
              </a>
              . All rights reserved.
            </p>
          </div>

          <div className="footer-right">
            <a
              href="https://tsacademyonline.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              TSAcademy
            </a>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;