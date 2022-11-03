import logo from "../../../src/logo.svg";
import { CardEvents } from "./styled";

export const CardUserPage = () => {
  return (
    <CardEvents>
      <figure>
        <img src={logo} alt="imagem da campanha" />
      </figure>
      <h3>Natal sem fome</h3>
      <div className="container">
        <div className="progress-bar"></div>
      </div>
      <div>
        <span>
          Meta: <strong>R$ 30.000</strong>
        </span>
        <p>(50%)</p>
      </div>
    </CardEvents>
  );
};
