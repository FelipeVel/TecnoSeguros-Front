import Card from "../../components/Card/Card";
import LandingBackground from "../../resources/images/LandingBackground.png";
import "./Landing.scss";

const Landing = () => {
  return (
    <div className="LandingPage">
      <div className="LandingPage-container">
        <div className="LandingPage-Info">
          <Card
            className="LandingPage-Info-Card"
            title="Atención personalizada en cualquier momento"
            description="TecnoSeguros se encarga de conectarte con el agente de seguros que mejor se adapte a tus necesidades."
            button="Saber más"
            link="/about"
          />
        </div>
        <img src={LandingBackground} alt="LandingBackground" />
      </div>
    </div>
  );
};

export default Landing;
