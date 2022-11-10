import { DivCampaign, SectionEvents, UserSection } from "./style";
import "./style.css";

import { GiveContextUserPage } from "../../contexts/GiveContextUserPage";
import { useContext, useEffect } from "react";
import { ModalCampaign } from "../../components/CreateModalCampaign";
import { InfoModalCampaign } from "../../components/InfoModalCampaign";
import Header from "../../components/Header";
import { GiveContextAuthorization } from "../../contexts/GiveContextAuthorization";
import { ProjectsUser } from "./proctsUser";


export const UserPage = () => {
  const {  closeModal, setCloseModal, showModalInfo, setThisPage } =
    useContext(GiveContextUserPage);
  const { user } = useContext(GiveContextAuthorization);

  console.log(user)
  useEffect(() => {
    setThisPage("Dashboard");
  }, []);

  console.log(user)

  return (
    <div>
      {showModalInfo ? <InfoModalCampaign /> : null}

      {closeModal ? <ModalCampaign /> : null}
      <Header headerType="type2" />
      <main>
        <UserSection>
          <figure>
            
            <img src={user?.imagem} alt="foto de perfil" />
          </figure>
          <div>
            <h2>{user?.username}</h2>
          </div>
        </UserSection>
        <DivCampaign>
          <h2>Crie sua campanha agora mesmo!</h2>
          <button onClick={() => setCloseModal(true)}>Criar Campanha</button>
        </DivCampaign>
        <SectionEvents>
          <h2>Meus Eventos</h2>
          <ul>
            <ProjectsUser />
          </ul>
        </SectionEvents>
      </main>
    </div>
  );
};
