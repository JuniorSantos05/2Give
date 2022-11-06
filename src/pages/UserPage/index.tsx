import { HeaderUserPage } from "../../components/HeaderUserPage";
import { DivCampaign, SectionEvents, UserSection } from "./style";
import "./style.css";
import { CardUserPage } from "../../components/CardUserPage";
import logo from "../../../src/logo.svg";
import { MenuMobile } from "../../components/MenuMobileUser";
import { GiveContext } from "../../contexts/GiveContext";
import { useContext } from "react";
import { ModalCampaign } from "../../components/ModalCampaign";

export const UserPage = () => {
  const { showMenu, closeModal, setCloseModal } = useContext(GiveContext);

  return (
    <div>
      {closeModal ? <ModalCampaign /> : null}

      <HeaderUserPage />
      {showMenu ? <MenuMobile /> : null}
      <main>
        <UserSection>
          <figure>
            <img src={logo} alt="foto de perfil" />
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
            <CardUserPage />
            <CardUserPage />
            <CardUserPage />
            <CardUserPage />
          </ul>
        </SectionEvents>
      </main>
    </div>
  );
};
