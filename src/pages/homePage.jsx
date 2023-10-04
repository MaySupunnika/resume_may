import "./homePage.css";
import Navbar from "../components/navbar";

function HomePage() {
  return (
    <>
      <Navbar />
      <div className="home-bg" id="Home">
        <div className="home-container">
          <div className="name">
            <p className="first-text">
              HELLO, <span className="second-text">I'M MAY</span>
            </p>
            <p className="full-stack">Full-Stack Developer</p>
            <p className="detail">
              My name is Supunnika Poklin. I graduated with a bachelor's degree
              from Thammasat University with a major in materials science, but I
              have a passion for coding. And then I started to learn about
              Full-Stack Developers.
            </p>
          </div>
          <img src="/src/assets/image-home.svg" />
        </div>
      </div>
    </>
  );
}
export default HomePage;
