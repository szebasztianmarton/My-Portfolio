import React from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt="" />
      <h3 className="project__title">{item.title}</h3>

      <p className="project__description">{item.description}</p>
      <a href="https://vanenet.hu" className="project__button">
        Demo <HiOutlineArrowSmRight className="project__button-icon" />
      </a>
      <FiGithub
        href="http://github.com/szebasztianmarton"
        className="project__github__icon"
      >
        Github
      </FiGithub>
    </div>
  );
};

export default ProjectItems;
