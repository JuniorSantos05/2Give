import { iProjects } from "../../pages/homePage/HomePage";
import { Project } from "./styles";

interface iProject {
  project: iProjects;
}

const CardProject = ({ project }: iProject) => {
  return (
    <Project>
      <img src={project.image} alt={project.name} />
      <span>{project.name}</span>
      <span>Doações: {project.donation}</span>
    </Project>
  );
};

export default CardProject;
