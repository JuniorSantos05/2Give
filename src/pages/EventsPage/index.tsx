import { SectionEvents } from "../UserPage/style";
import "./style.css";
import { CardUserPage } from "../../components/CardUserPage";

import { GiveContextUserPage } from "../../contexts/GiveContextUserPage";
import { useContext, useEffect } from "react";
import { MenuStyled } from "./style";
import { InfoModalCampaign } from "../../components/InfoModalCampaign";
import Header from "../../components/Header";

export const EventsPage = () => {
  const { showMenu, setFilterProjects, showModalInfo } =
    useContext(GiveContextUserPage);

  const {
    // showMenu,
    // showModalInfo,
    setThisPage,
  } = useContext(GiveContextUserPage);

  useEffect(() => {
    setThisPage("Eventos");
  }, []);

  return (
    <div>
      {showModalInfo ? <InfoModalCampaign /> : null}
      <Header headerType="type2" />
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
