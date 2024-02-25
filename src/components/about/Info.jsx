import React from "react";
import { PiStudentFill } from "react-icons/pi";
import { GoGoal } from "react-icons/go";
import { TbDeviceDesktopCode } from "react-icons/tb";

import {AboutText} from "../../components/data/Text"// Import the data


const Info = () => {
  const about = AboutText[0];
  return (
<div className="about__info grid">
      <div className="about__box">
        <TbDeviceDesktopCode className="about__icon" />
        <h3 className="about__title">{about.title1}</h3>
        <span className="about__subtitle">{about.subtitle1}</span>
      </div>
      <div className="about__box">
        <GoGoal className="about__icon" />
        <h3 className="about__title">{about.title2}</h3>
        <span className="about__subtitle">{about.subtitle2}</span>
      </div>
      <div className="about__box">
        <PiStudentFill className="about__icon" />
        <h3 className="about__title">{about.title3}</h3>
        <span className="about__subtitle">{about.subtitle3}</span>
      </div>
    </div>
  );
};
export default Info;
