import './Footer.scss'

const Footer = (props) => {
    return (
        <footer className="footer">
        <div className="footer__content">
            <div className="footer__content__column">
            <h2 className="footer__content__column__title">TecnoSeguros</h2>
            <p className="footer__content__column__description">
                Tecnoseguros es una plataforma innovadora que actúa como
                intermediario entre los clientes y los agentes aseguradores. Su
                principal objetivo es simplificar y agilizar el proceso de
                contratación de seguros.
            </p>
            </div>
            <div className="footer__content__column">
            <h2 className="footer__content__column__title">Contacto</h2>
            <div className="footer__content__column__contact">
                <p>55 1234 5678</p>
            </div>
            <div className="footer__content__column__contact">
                <p>
                Av. Insurgentes Sur 1602, Crédito Constructor, Benito Juárez,
                03940 Ciudad de México, CDMX
                </p>
            </div>
            </div>
            <div className="footer__content__column">
            <h2 className="footer__content__column__title">Redes Sociales</h2>
            <div className="footer__content__column__social">
                <a href="/">
                </a>
                <a href="/">
                </a>
                <a href="/">
                </a>
            </div>
            </div>
        </div>
        </footer>
    );
};

export default Footer;