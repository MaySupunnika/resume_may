import "./contact.css";

function Contact() {
  return (
    <>
      <div className="contact-container" id="Contact">
        <p className="contact-header">Contact Me</p>
        <div className="contact-detail">
          <img id="contact-img" src="/src/assets/image-home.svg" />
          <div className="email-phone">
            <div className="email">
              <div id="topic-icon">
                <img id="email-icon" src="src/assets/email-icon.svg" />
                <p>Email</p>
              </div>
              <a href="mailto:Supunnika.PKN@gmail.com">
                Supunnika.PKN@gmail.com
              </a>
            </div>
            <div className="phone">
              <div id="topic-icon">
                <img id="phone-icon" src="src/assets/phone-icon.svg" />
                <p>Phone Number</p>
              </div>
              <p id="number">0928479885</p>
            </div>
          </div>
          <div className="github-linkedin">
            <div className="github">
              <div id="topic-icon">
                <img id="github-icon" src="src/assets/github-icon.svg" />
                <p>GitHub</p>
              </div>
              <a href="https://github.com/MaySupunnika">
                https://github.com/MaySupunnika
              </a>
            </div>
            <div className="linkedin">
              <div id="topic-icon">
                <img id="linkedin-icon" src="src/assets/linkedin-icon.svg" />
                <p>LinkedIn</p>
              </div>
              <a href="https://www.linkedin.com/in/supunnika-poklin-088b40287/">
                https://www.linkedin.com/in/supunnika-poklin-088b40287/
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
