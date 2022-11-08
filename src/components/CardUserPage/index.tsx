import { useContext } from "react";
import { GiveContextUserPage } from "../../contexts/GiveContextUserPage";
import { CardEvents } from "./styled";

export const CardUserPage = () => {
  const { projectsFiltered, showProject } = useContext(GiveContextUserPage);

  return (
    <>
      {projectsFiltered.map((project) => (
        <CardEvents key={project.id}>
          <figure>
            <img src={project.image} alt="imagem da campanha" />
          </figure>
          <div>
            <h3>{project.name}</h3>
            <span>{project.address}</span>
            <button onClick={() => showProject(project.id)}>
              Mais Informações
            </button>
          </div>
        </CardEvents>
      ))}
    </>
  );
};
