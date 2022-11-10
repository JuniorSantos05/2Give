import { Link } from "react-router-dom";
import StylerHeaderUser from "./style";
import { AiOutlineMenu } from "react-icons/ai";
import { GiveContextUserPage } from "../../contexts/GiveContextUserPage";
import { useContext } from "react";
import { GiveContextAuthorization } from "../../contexts/GiveContextAuthorization";

export const HeaderUserPage = () => {
  const { showMenu, setShowMenu } = useContext(GiveContextUserPage);

  const { userLogout } = useContext(GiveContextAuthorization);

  return (
    <StylerHeaderUser>
      <h1>2Give</h1>
      {showMenu ? (
        <p
          onClick={() => {
            setShowMenu(false);
          }}>
          X
        </p>
      ) : (
        <AiOutlineMenu onClick={() => setShowMenu(true)} />
      )}

      <nav>
        <ul>
          <li>
            <Link to={""}>Home</Link>
          </li>
          <li>
            {" "}
            <Link to={"/"} className="dashboard">
              Dashboard
            </Link>
          </li>
          <li>
            {" "}
            <Link to={"/events"}>Eventos</Link>
          </li>
        </ul>
        <button onClick={userLogout}>Sair</button>
      </nav>
    </StylerHeaderUser>
  );
};
