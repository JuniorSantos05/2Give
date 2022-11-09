import { HeaderUserPage } from "../../components/HeaderUserPage";
import { SectionEvents } from "../UserPage/style";
import "./style.css";
import { CardUserPage } from "../../components/CardUserPage";
import { MenuMobile } from "../../components/MenuMobileUser";
import { GiveContextUserPage } from "../../contexts/GiveContextUserPage";
import { useContext, useEffect } from "react";
import { MenuStyled } from "./style";
import { InfoModalCampaign } from "../../components/InfoModalCampaign";
import Header from "../../components/Header";

export const EventsPage = () => {
  const {
    showMenu,
    filterDonationFood,
    filterDonationToys,
    filterDonationCoat,
    filterDonationAnimals,
    filterDonation,
    showModalInfo,
    setThisPage,
  } = useContext(GiveContextUserPage);

  useEffect(()=>{
    setThisPage("Eventos")
  },[])

  return (
    <div>
      {showModalInfo ? <InfoModalCampaign /> : null}
      <Header  headerType="type2" />
      {showMenu ? <MenuMobile /> : null}
      <main>
        <SectionEvents>
          <nav>
            <MenuStyled>
              <li onClick={filterDonation}>Todos</li>
              <li onClick={filterDonationFood}>Alimentos</li>
              <li onClick={filterDonationToys}>Brinquedos</li>
              <li onClick={filterDonationCoat}>Agasalhos</li>
              <li onClick={filterDonationAnimals}>Animais</li>
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
