import { Link } from "react-router-dom";
import { DivMenuMobile } from "./style";

export const MenuMobile = () => {
  return (
    <DivMenuMobile>
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
        <button>Sair</button>
      </ul>
    </DivMenuMobile>
  );
};
