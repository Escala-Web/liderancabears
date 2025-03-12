import ContainerBanner from "./style";
import Button from "../Button";
import { Container } from "../../styles/GlobalStyle";
import with_banner from '../../assets/images/with_banner.png';

const Banner = () => {

  function redirectWhatsapp(){
    const LINK = "https://sites.appbarber.com.br/liderancabarber-71lw?fbclid=PAZXh0bgNhZW0CMTEAAaakUgmf3Y5iz5kgIC_kkMpnCvZ7GbdDrjQPiGNIfW1HqpYowfPGSoKkr54_aem_NTLP-ZDTnNZffJMkgLVj_Q";
    window.open(LINK, '_blank');
  }

  return (
    <ContainerBanner>
      <div className="background-blur"></div>
      <Container>
        <h1 className="title">Sempre trabalhando <span className="textHighlight">no seu estilo</span></h1>

        <div className="contentSize">
          <p className="since">Atendimento exclusivo e uma experiência única para homens que valorizam o visual</p>
        </div>

        <div className="img">
          <img src={with_banner} alt="" />
        </div>

        <Button text={"Faça seu Agendamento"} onClick={()=> redirectWhatsapp()}></Button>
      </Container>
    </ContainerBanner>
  );
};

export default Banner;
