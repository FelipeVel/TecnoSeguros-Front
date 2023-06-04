import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper";
import Card from "../../components/Card/Card";
import Banner1 from "../../resources/images/Banner1.jpeg";
import Banner2 from "../../resources/images/Banner2.jpeg";
import Lupa from "../../resources/images/lupa.png";
import Telefono from "../../resources/images/telefono.png";
import Elegir from "../../resources/images/por-que-elegir.png";
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";
import "./Home.scss";

const Home = (props) => {
  const progressCircle = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
  };

  const HomeCarrousel = (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      pagination={{ clickable: true }}
      navigation={true}
      autoplay={{
        delay: 3500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay, Pagination, Navigation]}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      className="Carrusel"
    >
      <SwiperSlide>
        <Card image={Banner1} />
      </SwiperSlide>
      <SwiperSlide>
        <Card image={Banner2} />
      </SwiperSlide>
      <SwiperSlide>
        <Card image={Banner1} />
      </SwiperSlide>
      <SwiperSlide>
        <Card image={Banner2} />
      </SwiperSlide>
      <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressCircle}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
      </div>
    </Swiper>
  );
  return (
    <div className="home">
      <div className="home__carousel">{HomeCarrousel}</div>
      <div className="home__content page__content">
        <Card
          title="¿Qué es TecnoSeguros?"
          description={
            <div>
              <p>
                Tecnoseguros es una plataforma innovadora que actúa como
                intermediario entre los clientes y los agentes aseguradores. Su
                principal objetivo es simplificar y agilizar el proceso de
                búsqueda y contratación de seguros, brindando a los usuarios una
                experiencia eficiente y personalizada.
              </p>

              <p>
                En Tecnoseguros, los clientes pueden acceder a una amplia
                variedad de opciones de seguros, desde automóviles y viviendas
                hasta seguros de vida y salud. La plataforma proporciona
                herramientas intuitivas que permiten a los usuarios comparar
                diferentes planes, coberturas y precios ofrecidos por los
                agentes aseguradores registrados en la plataforma.
              </p>
            </div>
          }
          image={Telefono}
          imagePosition="last"
          orientation="horizontal"
        />
        <Card
          description={
            <div>
              <p>
                Mediante un sistema de búsqueda avanzada, los clientes pueden
                filtrar los resultados según sus necesidades específicas y
                recibir cotizaciones detalladas en tiempo real. Además,
                Tecnoseguros ofrece información completa y transparente sobre
                cada póliza, incluyendo términos y condiciones, beneficios y
                requisitos.
              </p>

              <p>
                Una vez que los clientes encuentran la opción de seguro
                adecuada, pueden contactar directamente a los agentes
                aseguradores a través de la plataforma. Tecnoseguros proporciona
                un medio de comunicación seguro y confiable para establecer
                conversaciones, realizar consultas adicionales y finalizar la
                contratación del seguro elegido.
              </p>
            </div>
          }
          image={Lupa}
          imagePosition="first"
          orientation="horizontal"
        />
        <Card
          title="¿Por qué elegir TecnoSeguros?"
          description={
            <div>
              <p>
                Elegir TecnoSeguros te brinda la conveniencia de acceder a una
                variedad de opciones de seguros, comparar diferentes planes,
                recibir información transparente, comunicarte directamente con
                agentes aseguradores y disfrutar de servicios adicionales para
                garantizar tu satisfacción y tranquilidad en el ámbito de los
                seguros.
              </p>
            </div>
          }
          image={Elegir}
          imagePosition="last"
          orientation="horizontal"
        />
      </div>
    </div>
  );
};

export default Home;
