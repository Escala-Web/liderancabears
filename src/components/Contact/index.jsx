import React from "react";
import ContactContainer from "./style";
import Button from "../Button";
import { email } from "../../api/email";
import {toast} from 'react-toastify'

const Contact = () => {
  async function sendEmail(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await email(data);
      console.log("Resposta do servidor:", response);

      if (response.success) {
        toast.success("Foi")
      } else {
        toast.error("Não foi");
      }
    } catch (error) {
      console.error("Erro ao enviar e-mail:", error);
      toast.error(
        "Erro ao enviar a mensagem. Por favor, tente novamente mais tarde."
      );
    }
  }

  return (
    <ContactContainer>

      <div className="form">
        <h2 className="title">
          <span className="textHighlight">Agende</span> Agora
        </h2>
        <p className="paragraph">Envie-nos uma mensagem para agendar</p>

        <form method="POST" onSubmit={sendEmail}>
          <div className="form-group">
            <input type="text" placeholder="NOME" name="name" />
          </div>

          <div className="form-group">
            <input type="email" placeholder="EMAIL" name="email" />
          </div>

          <div className="form-group">
            <input type="text" placeholder="CONTATO" name="phone" />
          </div>

          <div className="form-group">
            <textarea
              placeholder="DEIXE SUA MENSAGEM AQUI"
              name="message"
              rows="5"
              cols="33"
            ></textarea>
          </div>

          <Button text={"Enviar Menagem"} isActive={false} />
        </form>
      </div>

      <div className="imageContact"></div>
    </ContactContainer>
  );
};

export default Contact;
