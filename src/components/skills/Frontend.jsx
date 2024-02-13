import React from "react";

import { TiCss3 } from "react-icons/ti";
import { RiBootstrapLine, RiJavascriptFill } from "react-icons/ri";
import { BiLogoTypescript, BiLogoReact, BiLogoHtml5 } from "react-icons/bi";

const Frontend = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frontend Developer</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <BiLogoHtml5 />
            <div>
              <h3 className="skills__name">HTML</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <TiCss3 />
            <div>
              <h3 className="skills__name">CSS</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <RiBootstrapLine />
            <div>
              <h3 className="skills__name">Bootstrap</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
        </div>
        <div className="skills__group">
          <div className="skills__data">
            <RiJavascriptFill />
            <div>
              <h3 className="skills__name">JavaScript</h3>
              <span className="skills__level">Intermediate</span>
            </div>
          </div>
          <div className="skills__data">
            <BiLogoTypescript />
            <div>
              <h3 className="skills__name">Typescript</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
          <div className="skills__data">
            <BiLogoReact />
            <div>
              <h3 className="skills__name">React</h3>
              <span className="skills__level">Basic</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frontend;
