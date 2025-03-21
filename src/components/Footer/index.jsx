import React from "react";
import FooterContent from "./style";
import { FaWhatsapp } from "react-icons/fa";
import { CONFIG } from "../../config/config";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineSmartphone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  const handleScroll = () => {
    const bannerHeight = document.querySelector('.banner')?.offsetHeight || 0;
    const footerHeight = document.querySelector('.footer-content')?.offsetHeight || 0;
    const scrollPosition = window.scrollY + window.innerHeight;
    const footerPosition = document.body.scrollHeight - footerHeight;
  
    const whatsappButton = document.querySelector('.whatsapp');
    if (!whatsappButton) return;
  
    if (window.scrollY > bannerHeight && scrollPosition < footerPosition) {
      whatsappButton.style.opacity = '1';
      whatsappButton.style.visibility = 'visible';
    } else {
      whatsappButton.style.opacity = '0';
      whatsappButton.style.visibility = 'hidden';
    }
  };

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <FooterContent>
      <div className="containerFooter">
        <div className="footerEmail">
          <MdOutlineEmail className="iconFooter" /><h3><a href={"mailto:"+CONFIG.email} target="_blank" title="Ir para email">{CONFIG.email}</a></h3>
        </div>
        <div className="footerContact">
          <MdOutlineSmartphone className="iconFooter" />{" "}
          <h3><a href={CONFIG.getLinkWpp()} title="Ir para WhatsApp" target="_blank">{CONFIG.whatsapp}</a></h3>
        </div>

        <div className="footerAddress">
          <IoLocationSharp className="iconFooter" /> <h3><a href={"https://www.google.com.br/maps/place/"+CONFIG.address} title="Ir para Endereço" target="_blank">{CONFIG.address}</a></h3>
        </div>
      </div>

      <div className="footer-content">
        <p> Liderança Barbers Shop. Todos os direitos reservados</p>
        <p>
          <Link to={"/politica-de-privacidade"} title="Política de Privacidade">Politica de privacidade</Link>
        </p>
        <p>
          &copy; {year} Desenvolvido por{" "}
          <a href="https://escalaweb.com.br" title="Ir para Escala Web">
            Escala Web
          </a>
        </p>
      </div>

      <a className="whatsapp" href={CONFIG.getLinkWpp()} title="Ir para WhatsApp" target="_blank">
        <FaWhatsapp size={32} />
      </a>
    </FooterContent>
  );
};

export default Footer;
