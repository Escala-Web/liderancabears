import React from "react";
import FooterContent from "./style";
import { FaWhatsapp } from "react-icons/fa";

const Footer = () => {

  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterContent>
      <div className="footer-content">
        <p>&copy; {year} Liderança Bears. Todos os direitos reservados</p>
        <p>Desenvolvido pela <a href="https://escalaweb.com.br" target="_blank">Escala Web</a></p>
      </div>

      <div className="whatsapp">
        <FaWhatsapp size={32} />
      </div>
    </FooterContent>
  );
};

export default Footer;
