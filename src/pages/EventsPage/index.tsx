import { HeaderUserPage } from "../../components/HeaderUserPage";
import { SectionEvents } from "../UserPage/style";
import "./style.css";
import { CardUserPage } from "../../components/CardUserPage";
import { MenuMobile } from "../../components/MenuMobileUser";
import { GiveContextUserPage } from "../../contexts/GiveContextUserPage";
import { useContext } from "react";
import { MenuStyled } from "./style";
import { InfoModalCampaign } from "../../components/InfoModalCampaign";

export const EventsPage = () => {
  const { showMenu, setFilterProjects, showModalInfo } =
    useContext(GiveContextUserPage);

  return (
    <div>
      {showModalInfo ? <InfoModalCampaign /> : null}
      <HeaderUserPage />
      {showMenu ? <MenuMobile /> : null}
      <main>
        <SectionEvents>
          <nav>
            <MenuStyled>
              <li onClick={() => setFilterProjects("")}>Todos</li>
              <li onClick={() => setFilterProjects("Crianças")}>Crianças</li>
              <li onClick={() => setFilterProjects("Animais")}>Animais</li>
              <li onClick={() => setFilterProjects("Idosos")}>Idosos</li>
            </MenuStyled>
          </nav>
          <ul>
            <CardUserPage />
          </ul>
        </SectionEvents>
      </main>
    </div>
  );
};
