import "./contact.css";

function Contact() {
  return (
    <>
      <div className="contact-container" id="Contact">
        <p className="contact-header">Contact Me</p>
        <div className="contact-detail">
          <div className="email">
            <p>Email</p>
            <p>Supunnika-789@hotmail.com</p>
          </div>
          <div className="phone">
            <p>Phone Number</p>
            <p>0928479885</p>
          </div>
          <div className="github">
            <p>GitHub</p>
            <p>https://github.com/MaySupunnika</p>
          </div>
          <div className="linkedin">
            <p>LinkedIn</p>
            <p>https://www.linkedin.com/in/supunnika-poklin-088b40287/</p>
          </div>
        </div>
      </div>
    </>
  );
}
export default Contact;
