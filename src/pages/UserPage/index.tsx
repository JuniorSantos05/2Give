import { DivCampaign, SectionEvents, UserSection } from "./style";
import "./style.css";
import { CardUserPage } from "../../components/CardUserPage";
import { MenuMobile } from "../../components/MenuMobileUser";
import { GiveContextUserPage } from "../../contexts/GiveContextUserPage";
import { useContext, useEffect } from "react";
import { ModalCampaign } from "../../components/CreateModalCampaign";
import { InfoModalCampaign } from "../../components/InfoModalCampaign";
import Header from "../../components/Header";
import { GiveContextAuthorization } from "../../contexts/GiveContextAuthorization";

export const UserPage = () => {
  const { showMenu, closeModal, setCloseModal, showModalInfo, setThisPage } =
    useContext(GiveContextUserPage);
  const { user } = useContext(GiveContextAuthorization);

  useEffect(() => {
    setThisPage("Dashboard");
  }, []);

  return (
    <div>
      {showModalInfo ? <InfoModalCampaign /> : null}

      {closeModal ? <ModalCampaign /> : null}
      <Header headerType="type2" />
      {showMenu ? <MenuMobile /> : null}
      <main>
        <UserSection>
          <figure>
            <img src={user.image} alt="foto de perfil" />
          </figure>
          <div>
            <h2>{user.name}</h2>
          </div>
        </UserSection>
        <DivCampaign>
          <h2>Crie sua campanha agora mesmo!</h2>
          <button onClick={() => setCloseModal(true)}>Criar Campanha</button>
        </DivCampaign>
        <SectionEvents>
          <h2>Meus Eventos</h2>
          <ul>
            <CardUserPage />
          </ul>
        </SectionEvents>
      </main>
    </div>
  );
};
