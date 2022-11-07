import { useContext } from "react";
import { GiveContext } from "../../contexts/GiveContext";
import { CardEvents } from "./styled";

export const CardUserPage = () => {
  const { projects } = useContext(GiveContext);

  console.log(projects);

  return (
    <>
      {projects.map((project) => (
        <CardEvents key={project.id}>
          <figure>
            <img src={project.image} alt="imagem da campanha" />
          </figure>
          <h3>{project.name}</h3>
          <span>{project.address}</span>
        </CardEvents>
      ))}
    </>
  );
};
