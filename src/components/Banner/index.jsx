import ContainerBanner from "./style";
import Button from "../Button";
import { Container } from "../../styles/GlobalStyle";

const Banner = () => {

  function redirectWhatsapp(){
    const LINK = "https://sites.appbarber.com.br/liderancabarber-71lw?fbclid=PAZXh0bgNhZW0CMTEAAaakUgmf3Y5iz5kgIC_kkMpnCvZ7GbdDrjQPiGNIfW1HqpYowfPGSoKkr54_aem_NTLP-ZDTnNZffJMkgLVj_Q";
    window.open(LINK, '_blank');
  }

  return (
    <ContainerBanner>
      <Container>
        <h1 className="title">Sempre trabalhando <span className="textHighlight">no seu estilo</span></h1>

        <div>
          <p className="since">Desde 2024</p>
        </div>

        <Button text={"Faça seu Agendamento"} onClick={()=> redirectWhatsapp()}></Button>
      </Container>
    </ContainerBanner>
  );
};

export default Banner;
