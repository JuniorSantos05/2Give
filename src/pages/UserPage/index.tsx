import { HeaderUserPage } from "../../components/HeaderUserPage";
import { DivCampaign, SectionEvents, UserSection } from "./styled";
import "./style.css";
import { CardUserPage } from "../../components/CardUserPage";
import logo from "../../../src/logo.svg";

export const UserPage = () => {
  return (
    <div>
      <HeaderUserPage />
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
          <button>Criar Campanha</button>
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
