import Logotipo from "../../resources/images/Logotipo.png";
import "./Footer.scss";

const Footer = (props) => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__content__column">
          <a className="footer__logo" href="/">
            <img src={Logotipo} alt="TecnoSeguros" />
          </a>
        </div>
        <div className="footer__content__column">
          <h2 className="footer__content__column__title">Contacto</h2>
          <div className="footer__content__column__contact">
            <p>+57 300 539 9165</p>
          </div>
          <div className="footer__content__column__contact">
            <p>
              Cll. 32 Sur # 13-11, Bogotá, Colombia
            </p>
          </div>
        </div>
        <div className="footer__content__column">
          <h2 className="footer__content__column__title">Navegación</h2>
          <div className="footer__content__column__navigation">
            <ul>
                <li>
                    <a href="/">Inicio</a>
                </li>
                <li>
                    <a href="/about">Sobre Nosotros</a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
