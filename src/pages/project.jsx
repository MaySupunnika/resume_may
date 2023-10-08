import "./project.css";
import CourseFlow from "../assets/courseFlowHome.svg";

function Project() {
  return (
    <>
      <div className="project-container" id="Project">
        <p className="project-header">My Projects</p>
        <div className="project-detail">
          <div className="project-card">
            <div className="project-img">
              <img id="course-flow-img" src={CourseFlow} />
              <a
                href="https://github.com/MaySupunnika/CourseFlowProject"
                target="_blank"
              >
                CODE
              </a>
            </div>
            <div className="project-inner-detail">
              <p className="project-topic">Course Flow</p>
              <p className="project-description">
                The one-stop online class management system that caters to all
                your educational needs Our system facilitates classroom
                management for both admins and users. Users can see all
                available class contents and materials. For administrators, they
                can organize curriculum management.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Project;
