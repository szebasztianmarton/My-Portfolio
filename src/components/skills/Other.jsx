import React from "react";
import { SiNpm, SiNodedotjs, SiGithub, SiDocker } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { SiFlutter,SiAndroidstudio  } from "react-icons/si";

const Other = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Other</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <SiFlutter />
            <div>
              <h3 className="skills__name">Flutter</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <SiAndroidstudio />
            <div>
              <h3 className="skills__name">Android Studio</h3>
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
