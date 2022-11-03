import { Link } from "react-router-dom";
import StylerHeaderUser from "./style";

export const HeaderUserPage = () => {
  return (
    <StylerHeaderUser>
      <h1>2Give</h1>
      <nav>
        <ul>
          <li>
            <Link to={""}>Home</Link>
          </li>
          <li>
            {" "}
            <Link to={""}>Dashboard</Link>
          </li>
          <li>
            {" "}
            <Link to={""}>Eventos</Link>
          </li>
        </ul>
        <button>Sair</button>
      </nav>
    </StylerHeaderUser>
  );
};
