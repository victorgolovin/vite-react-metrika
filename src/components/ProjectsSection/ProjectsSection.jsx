import React from "react";
import ProjectCart from "../ProjectCart/ProjectCart";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import project1img from "../../assets/project1img.jpg";
import project2img from "../../assets/project2img.jpg";
import project3img from "../../assets/project3img.jpg";

const projects = [
  {
    title: "ЖК ПРАВОБЕРЕЖНЫЙ",
    square: 112,
    year: 2023,
    link: "/project1",
    image: project1img,
    isNew: true,
  },
  {
    title: "ЖК НОРВЕЖСКИЙ ПАРК",
    square: 75,
    year: 2023,
    link: "/project2",
    image: project2img,
    isNew: false,
  },
  {
    title: "ЖК СОСНОВСКИЕ ОЗЕРА",
    square: 94,
    year: 2022,
    link: "/project3",
    image: project3img,
    isNew: false,
  },
];

const ProjectsSection = () => {
  return (
    <div>
      <Heading level="h2" text="ПРОЕКТЫ" />

      {projects.map((project) => (
        <ProjectCart
          title={project.title}
          square={project.square}
          year={project.year}
          link={project.link}
          image={project.image}
          isNew={project.isNew}
        />
      ))}

      {projects.map((project) => {
        return (
          <ProjectCart
            title={project.title}
            square={project.square}
            year={project.year}
            link={project.link}
            image={project.image}
            isNew={project.isNew}
          />
        );
      })}
      <Button text="Смотреть все проекты" />
    </div>
  );
};

export default ProjectsSection;
