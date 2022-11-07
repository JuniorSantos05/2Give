import { HeaderUserPage } from "../../components/HeaderUserPage";
import { SectionEvents } from "../UserPage/style";
import "./style.css";
import { CardUserPage } from "../../components/CardUserPage";
import { MenuMobile } from "../../components/MenuMobileUser";
import { GiveContext } from "../../contexts/GiveContext";
import { useContext } from "react";
import { MenuStyled } from "./style";

export const EventsPage = () => {
  const { showMenu } = useContext(GiveContext);

  return (
    <div>
      <HeaderUserPage />
      {showMenu ? <MenuMobile /> : null}
      <main>
        <SectionEvents>
          <nav>
            <MenuStyled>
              <li>Destaques</li>
              <li>Alimentação</li>
              <li>Agasalho</li>
              <li>Animais</li>
              <li>Todos</li>
            </MenuStyled>
          </nav>
          <ul>
            <CardUserPage />
            <CardUserPage />
            <CardUserPage />
            <CardUserPage />
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
