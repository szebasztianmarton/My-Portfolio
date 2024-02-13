import React from "react";
import { BiLogoPython } from "react-icons/bi";
import { SiNpm, SiNodedotjs, SiGithub, SiDocker } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
const Other = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Other</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <BiLogoPython />
            <div>
              <h3 className="skills__name">Python</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <SiNpm />
            <div>
              <h3 className="skills__name">npm</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <SiGithub />
            <div>
              <h3 className="skills__name">Github</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <SiDocker />
            <div>
              <h3 className="skills__name">Docker</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <SiNodedotjs />
            <div>
              <h3 className="skills__name">Node.js</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <FaGitAlt />
            <div>
              <h3 className="skills__name">Git</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Other;
