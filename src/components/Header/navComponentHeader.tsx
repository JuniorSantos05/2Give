import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { IHeader } from ".";
import { GiveContextAuthorization } from "../../contexts/GiveContextAuthorization";
import { GiveContextUserPage } from "../../contexts/GiveContextUserPage";
import { Button } from "../Button";

import { NavStyle } from "./style";

function NavComponentHeader({ headerType }: IHeader) {
  const { user } = useContext(GiveContextAuthorization);
  const { thisPage } = useContext(GiveContextUserPage);
  const navigate = useNavigate();

  function handlelogOut() {
    localStorage.clear();
    navigate("/login");
  }

  if (headerType === "type1") {
    return (
      <NavStyle>
        <Link to={"/homePage"}>
          <h4
            id="active"
            style={
              thisPage === "Home"
                ? { color: "#F0386B" }
                : { backgroundColor: "var(--grey-2)" }
            }>
            Home
          </h4>
        </Link>
        <Link to={"/about"}>
          <h4
            style={
              thisPage === "Sobre"
                ? { color: "#F0386B" }
                : { backgroundColor: "var(--grey-2)" }
            }>
            Sobre nós
          </h4>
        </Link>
        <Link to={"/contact"}>
          <h4
            style={
              thisPage === "Contato"
                ? { color: "#F0386B" }
                : { backgroundColor: "var(--grey-2)" }
            }>
            Contato
          </h4>
        </Link>
        {user?.id ? (
          <>
            <button onClick={handlelogOut}>
              <h4>Sair</h4>
            </button>
            <Link to={"/userPage"}>
              <button>
                <h4>Dashboard</h4>
              </button>
            </Link>
          </>
        ) : (
          <>
            <Link to={"/login"}>
              <Button>Login</Button>
            </Link>
            <Link to={"/register"}>
              <Button>Register</Button>
            </Link>
          </>
        )}
      </NavStyle>
    );
  } else {
    return (
      <NavStyle>
        <Link to={"/homePage"}>
          <h4
            id="active"
            style={
              thisPage === "Home"
                ? { color: "#F0386B" }
                : { backgroundColor: "var(--grey-2)" }
            }>
            Home
          </h4>
        </Link>
        <Link to={"/userPage"}>
          <h4
            style={
              thisPage === "Dashboard"
                ? { color: "#F0386B" }
                : { backgroundColor: "var(--grey-2)" }
            }>
            Dashboard
          </h4>
        </Link>
        <Link to={"/events"}>
          <h4
            style={
              thisPage === "Eventos"
                ? { color: "#F0386B" }
                : { backgroundColor: "var(--grey-2)" }
            }>
            Eventos
          </h4>
        </Link>

        <button onClick={handlelogOut}>
          <h4>Sair</h4>
        </button>
      </NavStyle>
    );
  }
}

export default NavComponentHeader;
