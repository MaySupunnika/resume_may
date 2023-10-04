import "./App.css";
import HomePage from "./pages/homePage";
import Skill from "./pages/skillsPage";
import Contact from "./components/contact";
import Project from "./pages/project";

function App() {
  return (
    <>
      <HomePage />
      <Skill />
      <Project />
      <Contact />
    </>
  );
}

export default App;
