import React from 'react';
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";

const ProjectItems = ({ item }) => {
  return (
    <div className="project__card" key={item.id}>
      <img className="project__img" src={item.image} alt="" />
      <h3 className="project__title">{item.title}</h3>
      <p className="project__description">{item.description}</p>
      {item.badge && item.badge.map((badge, img) => (
            <img key={img} src={badge.name}title={badge.name} alt={badge.name} className="project__badge" />
          )
        )
      }
      <div>
        <a href={item.demo} className="project__button">
          Demo <HiOutlineArrowSmRight className="project__button-icon" />
        </a>
        <a href={item.github} className="project__github">
          Github<FiGithub className="project__button-icon_github" />
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;