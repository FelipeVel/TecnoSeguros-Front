import React, { useState } from "react";
import Card from "../../components/Card/Card";
import Carro from "../../resources/images/carro.png";
import Vida from "../../resources/images/vida.png";
import Viaje from "../../resources/images/viaje.png";
import Volante from "../../resources/images/volante.png";
import TodoRiesgo from "../../resources/images/todoRiesgo.png";
import vidaEntera from "../../resources/images/vidaEntera.png";
import vidaTermino from "../../resources/images/vidaTermino.png";
import equipaje from "../../resources/images/equipaje.png";
import cancelacion from "../../resources/images/cancelacion.png";
import medicoViaje from "../../resources/images/medicoViaje.png";
import "./Seguros.scss";

const Seguros = () => {
  const [deployedBlock, setDeployedBlock] = useState(null);

  const clickHandler = (block) => {
    setDeployedBlock(block);
  };
  const blocks = {
    vehiculos: (
      <div className="SegurosPage-Insurance-Block">
        <div className="SegurosPage-Insurance-Block-Title">
          Seguros de vehículos
        </div>
        <div className="SegurosPage-Insurance-Block-Content">
          <Card
            image={TodoRiesgo}
            className="SegurosPage-Insurance-Block-Content-Card"
            title="Seguro todo riesgo"
            description="Cubre los daños ocasionados a tu vehículo por accidentes de tránsito, fenómenos naturales, vandalismo, entre otros."
            orientation="horizontal"
          />
          <Card
            image={Volante}
            className="SegurosPage-Insurance-Block-Content-Card"
            title="SOAT"
            description="Cubre los daños ocasionados a terceros en accidentes de tránsito."
            orientation="horizontal"
          />
          <a href="/cotizar" className="SegurosPage-Insurance-Block-Content-Button">
            <button>Cotizar</button>
          </a>
        </div>
      </div>
    ),
    vida: (
      <div className="SegurosPage-Insurance-Block">
        <div className="SegurosPage-Insurance-Block-Title">
          Seguros de vida
        </div>
        <div className="SegurosPage-Insurance-Block-Content">
          <Card
            image={vidaTermino}
            className="SegurosPage-Insurance-Block-Content-Card"
            title="Seguro de vida a término"
            description="Proporciona cobertura de seguro de vida por un período de tiempo específico"
            orientation="horizontal"
          />
          <Card
            image={vidaEntera}
            className="SegurosPage-Insurance-Block-Content-Card"
            title="Seguro de vida entera"
            description="Proporciona cobertura de seguro de vida por toda la vida del asegurado"
            orientation="horizontal"
          />
          <a href="/cotizar" className="SegurosPage-Insurance-Block-Content-Button">
            <button>Cotizar</button>
          </a>
          </div>
      </div>
    ),
    viaje: (
      <div className="SegurosPage-Insurance-Block">
        <div className="SegurosPage-Insurance-Block-Title">
          Seguros de viaje
        </div>
        <div className="SegurosPage-Insurance-Block-Content">
          <Card
            image={equipaje}
            className="SegurosPage-Insurance-Block-Content-Card"
            title="Seguro de equipaje"
            description="Cubre la pérdida, robo o daño de tu equipaje y pertenencias personales durante el viaje"
            orientation="horizontal"
          />
          <Card
            image={cancelacion}
            className="SegurosPage-Insurance-Block-Content-Card"
            title="Seguro de cancelación"
            description="Cubre los gastos de cancelación de viaje por causas de fuerza mayor"
            orientation="horizontal"
          />
          <Card
            image={medicoViaje}
            className="SegurosPage-Insurance-Block-Content-Card"
            title="Seguro médico de viaje"
            description="Cubre los gastos médicos de emergencia durante el viaje"
            orientation="horizontal"
          />
          <a href="/cotizar" className="SegurosPage-Insurance-Block-Content-Button">
            <button>Cotizar</button>
          </a>
        </div>
      </div>
    )
  };

  return (
    <div className="SegurosPage">
      <div className="SegurosPage-Landing">
        <div className="SegurosPage-Landing-container">
          <div className="SegurosPage-Landing-Title">
            <h1>Cotiza con nosotros tu seguro</h1>
          </div>
          <div className="SegurosPage-Landing-Info">
            <Card
              image={Carro}
              className="SegurosPage-Landing-Info-Card"
              title="Seguro de vehículos"
              description="Cotiza tu seguro de vehículos con nosotros y obtén los mejores beneficios."
              button="Ver más"
              onClickHandler={clickHandler}
              insurance="vehiculos"
            />
            <Card
              image={Vida}
              className="SegurosPage-Landing-Info-Card"
              title="Seguro de vida"
              description="Cotiza tu seguro de vida con nosotros y obtén los mejores beneficios."
              button="Ver más"
              onClickHandler={clickHandler}
              insurance="vida"
            />
            <Card
              image={Viaje}
              className="SegurosPage-Landing-Info-Card"
              title="Seguro de viaje"
              description="Cotiza tu seguro de viaje con nosotros y obtén los mejores beneficios."
              button="Ver más"
              onClickHandler={clickHandler}
              insurance="viaje"
            />
          </div>
        </div>
      </div>
      {deployedBlock ? blocks[deployedBlock] : ""}
    </div>
  );
};

export default Seguros;
