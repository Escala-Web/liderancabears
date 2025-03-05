import React from "react";
import FooterContent from "./style";
import { FaWhatsapp } from "react-icons/fa";
import { CONFIG } from "../../config/config";
import { IoLocationSharp } from "react-icons/io5";
import { MdOutlineSmartphone } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <FooterContent>
      <div className="containerFooter">
        <div className="footerEmail">
          <MdOutlineEmail className="iconFooter" /> <h3>{CONFIG.email}</h3>
        </div>
        <div className="footerContact">
          <MdOutlineSmartphone className="iconFooter" />{" "}
          <h3>{CONFIG.whatsapp}</h3>
        </div>

        <div className="footerAddress">
          <IoLocationSharp className="iconFooter" /> <h3>{CONFIG.address}</h3>
        </div>
      </div>

      <div className="footer-content">
        <p> Liderança Bears. Todos os direitos reservados</p>
        <p>
          <a href="/politica-de-privacidade">Politica de privacidade</a>
        </p>
        <p>
          &copy; {year} Desenvolvido por{" "}
          <a href="https://escalaweb.com.br">Escala Web</a>
        </p>
      </div>

      <div className="whatsapp">
        <FaWhatsapp size={32} />
      </div>
    </FooterContent>
  );
};

export default Footer;
