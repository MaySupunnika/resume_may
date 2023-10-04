import skills from "../data/skill";
import "./skillsPage.css";

function Skill() {
  const rows = [];
  for (let i = 0; i < skills.length; i += 2) {
    rows.push(skills.slice(i, i + 2));
  }

  return (
    <>
      <div className="skill-bg" id="Skill">
        <div className="all-skill-wrapper">
          <div className="skill-header-container">
            <p className="skill-header">SKILLS</p>
            <p className="skill-header">SKILLS</p>
          </div>
          <div className="skill-wrapper">
            {rows.map((row, rowIndex) => (
              <div className="skill-row" key={rowIndex}>
                {row.map((skill) => (
                  <div className="skill-content" key={skill.id}>
                    <img className="icon-skill" src={skill.icon} />
                    <p className="skill-name">{skill.name}</p>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default Skill;
