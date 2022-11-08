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
  const {
    showMenu,
    filterDonationFood,
    filterDonationToys,
    filterDonationCoat,
    filterDonationAnimals,
    filterDonation,
    showModalInfo,
  } = useContext(GiveContextUserPage);

  return (
    <div>
      {showModalInfo ? <InfoModalCampaign /> : null}
      <HeaderUserPage />
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
