import "./contact.css";
import LinkedInIcon from "../assets/linkedin-icon-white.png";
import GithubIcon from "../assets/github-icon-white.svg";
function Contact() {
  return (
    <>
      <div className="contact-container" id="Contact">
        {/* <p className="contact-header">Contact Me</p> */}
        <div className="contact-detail">
          <div className="email-phone-box">
            <a
              className="contact-email"
              href="mailto:supunnika.PKN@gmail.com"
              target="_blank"
            >
              Supunnika.PKN@gmail.com
            </a>
            <a
              className="contact-phone"
              href="tel:+66928479885"
              target="_blank"
            >
              (+66) 928479885
            </a>
          </div>
          <div className="linkedin-github-box">
            <a href="https://github.com/MaySupunnika" target="_blank">
              <img className="contact-github" src={GithubIcon} />
            </a>
            <a
              href="https://www.linkedin.com/in/supunnika-poklin-088b40287/"
              target="_blank"
            >
              <img className="contact-linkedin" src={LinkedInIcon} />
            </a>
          </div>
          <hr />
          <p className="copyright">
            Copyright © 2023. All rights are reserved.
          </p>
        </div>
      </div>
    </>
  );
}
export default Contact;
