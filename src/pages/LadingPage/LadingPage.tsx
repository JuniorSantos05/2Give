import { useState } from "react";
import Figure from "../../components/icons/figureLadingPage.svg";
import Scroll from "../../components/icons/scroll.svg";
import { HeaderStyle, ContentStyle, FooterStyle } from "./style";
import { MenuMobile } from "../../components/MenuMobile";
import { RiMenuFill } from "react-icons/ri";
import { Link } from "react-router-dom";

export const LandingPage = () => {
  const [menuIsVisible, setMenuIsVisible] = useState(false);

  return (
    <>
      <HeaderStyle>
        <MenuMobile
          menuIsVisible={menuIsVisible}
          setMenuIsVisible={setMenuIsVisible}></MenuMobile>
        <h1>2Give</h1>
        <nav>
          <ul>
            <li>
              <Link to={"/homePage"}>Home</Link>
            </li>
            <li>
              <Link to={"about"}>Sobre nós</Link>
            </li>
            <li>
              <Link to={"/contact"}>Contato</Link>
            </li>
          </ul>
          <Link to={"/login"}>
          <button className="btn">Login</button>
          </Link>
          <Link to={"/register"}>
          <button className="btn">Cadastro</button>
          </Link>
          <RiMenuFill
            onClick={() => setMenuIsVisible(true)}
            className="mobile"
            color="#F0386B"
            size={30}
          />
        </nav>
      </HeaderStyle>
      <ContentStyle>
        <main>
          <div className="titlePage">
            <h2>Conheça a </h2>
            <h2 className="colorPink">2Give</h2>
          </div>
          <p>
            Crie e participe de eventos que podem mudar o mundo de outras
            pessoas. O mundo precisa de mais soliedariedade, seja um motivador!
          </p>
          <Link to={"/register"}>
            <button>Criar projeto</button>
          </Link>
        </main>
        <img
          className="mainImage"
          src={Figure}
          alt="figura com pessoas interagindo"
        />
      </ContentStyle>
      <FooterStyle>
        <Link to={"/homePage"}>
            <img src={Scroll} alt="mouse com seta para rolagem" />
        </Link>
      </FooterStyle>
    </>
  );
};
