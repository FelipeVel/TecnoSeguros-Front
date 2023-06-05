import Card from "../../components/Card/Card";
import React, { useState } from "react";
import "./Packages.scss";

const Packages = () => {
  const [listDeployed, setListDeployed] = useState(false);
  const deployHandler = () => (!listDeployed ? setListDeployed(true) : "");
  const packagesList = (
    <div className="PackagesPage-List">
      <Card
        className="PackagesPage-List-Card"
        title="Paquete de viaje"
        description="Cubre todos los gastos inesperados que ocurran durante tu viaje"
        button="Cotizar"
        imagePosition="first"
        orientation="horizontal"
        image="https://image.canva.com/bou1YnpV4EoeLUZTLVVY9A%3D%3D/criAPDObnbY3yLh0M-zCPw%3D%3D.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH25PN7VSL%2F20230605%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230605T005035Z&X-Amz-Expires=23386&X-Amz-Signature=995cd4e85380da5dee911e35d9648c15b173a8c073b9b34f4297bc1bb4b3e631&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2005%20Jun%202023%2007%3A20%3A21%20GMT"
        link="/cotizar"
      />
      <Card
        className="PackagesPage-List-Card"
        title="Paquete de vehículos"
        description="Cubre todos los gastos ocasionados por accidentes de tránsito"
        button="Cotizar"
        imagePosition="first"
        orientation="horizontal"
        image="https://marketplace.canva.com/eEoPY/MAFcyLeEoPY/1/tl/canva-road-accident-road-icon-MAFcyLeEoPY.png"
        link="/cotizar"
      />
    </div>
  );

  return (
    <div className="PackagesPage">
      <div className="PackagesPage-Landing">
        <div className="PackagesPage-Landing-container">
          <div className="PackagesPage-Landing-Title">
            Cotiza tu paquete de seguros ideal
          </div>
          <div className="PackagesPage-Landing-Content">
            <Card
              className="PackagesPage-Landing-Content-Card"
              title="Asesorate con un experto"
              description="TecnoSeguros se encarga de conectarte con el agente de seguros que mejor se adapte a tus necesidades"
              button="Hablar"
              imagePosition="first"
              orientation="vertical"
              image="https://image.canva.com/DQXfdRFWt2u7_yVZYqNQww%3D%3D/criAPDObnbY3yLh0M-zCPw%3D%3D.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAQYCGKMUH25PN7VSL%2F20230604%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230604T230401Z&X-Amz-Expires=29447&X-Amz-Signature=82cf5734e0ec1a018bccfa0f1b33ebd6477e3a5f962a0c15959129f05156ad4e&X-Amz-SignedHeaders=host&response-expires=Mon%2C%2005%20Jun%202023%2007%3A14%3A48%20GMT"
              link="/connect"
            />
            <Card
              className="PackagesPage-Landing-Content-Card"
              title="Cotiza un paquete pre-seleccionado"
              description="Elige un paquete preparado para ti por nuestros expertos."
              button="Ver más"
              imagePosition="first"
              orientation="vertical"
              image="https://marketplace.canva.com/nvtSU/MAEsPinvtSU/1/tl/canva-simple-star-icon-MAEsPinvtSU.png"
              onClickHandler={deployHandler}
              value="true"
            />
          </div>
        </div>
      </div>
      {listDeployed ? packagesList : ''}
    </div>
  );
};

export default Packages;
