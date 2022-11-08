import { useContext } from "react";
import { GiveContextUserPage } from "../../contexts/GiveContextUserPage";
import { StyleInfoCampaign } from "./style";

export const InfoModalCampaign = () => {
  const { setShowModalInfo, modalProject } = useContext(GiveContextUserPage);

  return (
    <StyleInfoCampaign>
      <div>
        <section>
          {modalProject.map((project) => (
            <>
              <div className="box-container">
                <h3>{project.name}</h3>
                <p onClick={() => setShowModalInfo(false)}>X</p>
              </div>
              <figure>
                <img src={project.image} alt="" />
              </figure>
              <p>{project.description}</p>

              <div className="container">
                <span>
                  <strong>Local de Entrega: </strong>
                  {project.address}
                </span>
                <span>
                  <strong>Contato: </strong>
                  {project.account}
                </span>
              </div>
            </>
          ))}
        </section>
      </div>
    </StyleInfoCampaign>
  );
};
