import React from "react";
import ServicesContainer from "./style";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineSmartphone } from "react-icons/md";
import { CONFIG } from "../../config/config";
import CardService from "../CardService";
import tesourasIcon from "../../assets/icons/tesouras.png";
import navalhaIcon from "../../assets/icons/navalha.png";
import cabeloCurtoIcon from "../../assets/icons/cabelo-masculino-curto.png";
import mascaraIcon from "../../assets/icons/mascara-de-folha.png";

const Services = () => {
  const servicos = [
    {
        titulo: "Corte de Cabelo Premium",
        desc: "Transforme seu visual com cortes personalizados e técnicas modernas. Nossos barbeiros especialistas garantem um acabamento impecável, realçando seu estilo único.",
        icone: tesourasIcon,
    },
    {
        titulo: "Tratamentos Capilares",
        desc: "Cuide da saúde do seu cabelo com nossos tratamentos exclusivos. Oferecemos soluções para diversos tipos de cabelo, promovendo força, brilho e vitalidade.",
        icone: cabeloCurtoIcon,
    },
    {
        titulo: "Barba e Finalizações",
        desc: "Experimente o cuidado completo para sua barba, desde o design até o acabamento perfeito. Oferecemos técnicas tradicionais e modernas para um visual impecável e confortável.",
        icone: navalhaIcon,
    },
    {
        titulo: "Cuidados com a Pele",
        desc: "Relaxe e revitalize sua pele com nossos tratamentos faciais. Oferecemos limpeza profunda, hidratação e cuidados específicos para um rosto com aparência rejuvenescida.",
        icone: mascaraIcon,
    },
];

  return (
    <ServicesContainer id="about">
      <div className="aboutService">
        <h2 className="title">
          Serviços <span className="textHighlight">Além da Expectativa</span>
        </h2>
        <p className="paragraph">
          Cada serviço é pensado para atender às suas necessidades e estilo.
          Nossos barbeiros dominam técnicas avançadas e utilizam produtos de
          alta qualidade, para que você saia da nossa barbearia com a confiança
          renovada. Na Liderança Barbers Shop, cada
          detalhe é pensado para proporcionar uma experiência única e memorável.
        </p>
      </div>

      <div className="local">
        <div className="location">
          <div className="address">
            <div className="titleHead">
              <span>
                <IoLocationSharp />
              </span>
              <h3>Localização</h3>
            </div>
            <p className="descriptionLocal">{CONFIG.address}</p>
          </div>

          <div className="schedule">
            <div className="titleHead">
              <span>
                <MdOutlineSmartphone />
              </span>
              <h3>
                <a href={CONFIG.getLinkWpp()} target="_blank" title="Ir para WhatsApp">
                  {CONFIG.whatsapp}
                </a>
              </h3>
            </div>
            <p className="descriptionLocal">Seg à Sex 08h às 18h</p>
            <p className="descriptionLocal">Sáb 09h às 14h</p>
          </div>
        </div>

        <div className="iframeContainer">
          <iframe

            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2586.9519635435267!2d-46.583792737973425!3d-23.514420592294393!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5f46970eb71f%3A0xbace5d4290aa1374!2sLIDERAN%C3%87A%20BARBERS%20SHOP!5e0!3m2!1spt-BR!2sbr!4v1740749962422!5m2!1spt-BR!2sbr"
           
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>

      <div className="contentServices">
        {servicos.map((element, index) => (
          <CardService
            key={index}
            desc={element.desc}
            titulo={element.titulo}
            icone={element.icone}
          />
        ))}
      </div>
    </ServicesContainer>
  );
};

export default Services;
