import { DivCampaign, SectionEvents, UserSection } from "./style";
import "./style.css";
import { CardUserPage } from "../../components/CardUserPage";
import Logo from "../../assets/Logo.svg";
import { MenuMobile } from "../../components/MenuMobileUser";
import { GiveContextUserPage } from "../../contexts/GiveContextUserPage";
import { useContext, useEffect } from "react";
import { ModalCampaign } from "../../components/CreateModalCampaign";
import { InfoModalCampaign } from "../../components/InfoModalCampaign";
import Header from "../../components/Header";
import { HeaderUserPage } from "../../components/HeaderUserPage";

export const UserPage = () => {
  const { showMenu, closeModal, setCloseModal, showModalInfo, setThisPage } =
    useContext(GiveContextUserPage);

  useEffect(()=>{
    setThisPage("Dashboard")
  },[])

  return (
    <div>
      {showModalInfo ? <InfoModalCampaign /> : null}

      {closeModal ? <ModalCampaign /> : null}
      <HeaderUserPage />
      {showMenu ? <MenuMobile /> : null}
      <main>
        <UserSection>
          <figure>
            <img src={Logo} alt="foto de perfil" />
          </figure>
          <div>
            <h2>Nome do Usuário</h2>
            <span>bio do usuário</span>
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
