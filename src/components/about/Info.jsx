import React from "react";
import { PiStudentFill } from "react-icons/pi";
import { GoGoal } from "react-icons/go";
import { TbDeviceDesktopCode } from "react-icons/tb";

const Info = () => {
  return (
    <div className="about__info grid">
      <div className="about__box">
        <TbDeviceDesktopCode Computer className="about__icon" />
        <h3 className="about__title">Experience</h3>
        <span className="about__subtitle">2+ Years</span>
      </div>
      <div className="about__box">
        <GoGoal className="about__icon" />
        <h3 className="about__title">Completed</h3>
        <span className="about__subtitle">8 Projects</span>
      </div>
      <div className="about__box">
        <PiStudentFill className="about__icon" />
        <h3 className="about__title">Student</h3>
        <span className="about__subtitle">Még tanulok</span>
      </div>
    </div>
  );
};
export default Info;
