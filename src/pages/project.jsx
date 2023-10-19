import "./project.css";
import MerryImg from "../assets/merry-home.png";
import CourseFlowImg from "../assets/courseflow-home.png";

const data = [
  {
    id: 1,
    name: "Merry Match",
    image: MerryImg,
    description:
      "Merry Match is a new generation of online dating website for everyone, whether you’re committed to dating, meeting new people, expanding your social network, meeting locals while traveling, or even just making a small chat with strangers.",
    githubCode: "IN PROCESS",
    status: "IN PROCESS",
  },
  {
    id: 2,
    name: "Course Flow",
    image: CourseFlowImg,
    description:
      "The one-stop online class management system that caters to all your educational needs Our system facilitates classroom management for both admins and users. Users can see all available class contents and materials.",
    githubCode: "https://github.com/MaySupunnika/CourseFlowProject",
    status: "GITHUB CODE",
  },
];

function Project() {
  return (
    <>
      <div className="project-container" id="Project">
        <p className="project-header">My Projects</p>
        <div className="card-box">
          {data.map((item) => (
            <div className="project-card" key={item.id}>
              <a href={item.githubCode} target="_blank">
                <img className="project-image" src={item.image} />
              </a>
              <div className="project-detail">
                <p className="name">{item.name}</p>
                <p className="description">{item.description}</p>
                <a
                  href={item.githubCode}
                  target="_blank"
                  className="github-code"
                >
                  {item.status}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Project;
