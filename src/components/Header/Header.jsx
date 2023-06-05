import "./Header.scss";
import LoginMenu from "./children/LoginMenu/LoginMenu";
import Logotipo from "../../resources/images/Logotipo.png";

const Header = (props) => {
  return (
    <header className="header">
      <a className="header__logo" href="/">
        <img src={Logotipo} alt="TecnoSeguros"/>
      </a>
      <div className="header__navbar">
        <a href="/">Inicio</a>
        <a href="/insurance">Seguros</a>
        <a href="/packages">Paquetes</a>
      </div>
      <LoginMenu />
    </header>
  );
};

export default Header;
