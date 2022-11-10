import { useContext } from "react";
import { CardEvents } from "../../components/CardUserPage/styled";
import { GiveContextAuthorization } from "../../contexts/GiveContextAuthorization";
import { GiveContextUserPage } from "../../contexts/GiveContextUserPage";


export const ProjectsUser = () => {
  const { projects, showProject } = useContext(GiveContextUserPage);
  const { user } = useContext(GiveContextAuthorization);
  const projectfilter = projects.filter((project)=> project.userId === Number(user?.id))

  return (
    <>
      {projectfilter.map((project) => (
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