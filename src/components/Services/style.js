import styled from 'styled-components';

const ServicesContainer = styled.section`
  background-color: ${({ theme }) => theme.background};
  color: white;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin-bottom: 5rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
  
  .contentServices{
    margin-top: 5rem;
    width: 100%;
    grid-column: 1 / span 2;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    padding: 0 16rem;
    box-sizing: border-box;

    @media (max-width: 1024px) {
      grid-column: 1;
  }
  }

  .aboutService, .local {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    padding: 6rem 15rem;

  }

  .aboutService{
    /* background-color: ${({ theme }) => theme.backgroundContrast}; */
    padding-left: 17.1rem;
  }

  .local{
    padding-right: 18rem;
    position: relative;


    @media (max-width: 1024px) {
      padding-right: 0;
  }

    .descriptionLocal{
      color: ${({ theme }) => theme.paragraphColor};
      font-size: 1.2rem;

      ul, li{
        list-style: none;
      }
    }

    .titleHead{
      font-size: 1.8rem;
      color: ${({ theme }) => theme.secondaryText};
      gap: 1rem;
      position: relative;

      span{
        position: absolute;
        left: -15%;
        top: 52%;
        transform: translateY(-50%);
        color:${({ theme }) => theme.primaryText} ;
      }
    }

    h3{
      text-transform: uppercase;
      display: flex;
      align-items: center;
      

      a{
        color: ${({ theme }) => theme.secondaryText};
        text-decoration: none;
      }
    }

    .location{
        position: absolute;
        color: ${({ theme }) => theme.colorGray};
        z-index: 1;
    }
    
    .address::after{
      content: '';
      width: 20%;
      height: 2px;
      margin-top: 1rem;
      background-color: ${({ theme }) => theme.colorGray};
      display: block;
      position: absolute;
    }

    .iframeContainer{
        position: absolute;
        width: 100%;
        height: 100%;
        left: 0;

        @media (max-width: 1024px) {
          position: relative;
              height: 500px;
            }

        iframe{
            position: absolute;
            width: 100%;
            height: 100%;

           
        }
    }

    .iframeContainer::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background-color:rgba(15, 15, 15, 0.83);
        pointer-events: none; 
    }


  }

  .textHighlight {
    color: ${({ theme }) => theme.primaryText};
  }

  .title {
    font-size: ${({ theme }) => theme.title};
    color: ${({ theme }) => theme.secondaryText};
    text-transform: uppercase;
    line-height: 100%;
    margin: 1rem 0;
  }

  .title::after{
    content: "";
    width: 40%;
    background-color: ${({ theme }) => theme.colorGray};
    height: 2px;
    display: block;
    right: 100%;
    margin-top: 1rem;
  }

  .paragraph {
    font-size: ${({ theme }) => theme.paragraphSize};
    color: ${({ theme }) => theme.paragraphColor};
  }

  .location {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
  }

  .location p {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    font-size: 1.1rem;
    color: #fff;
  }

  .button {
    margin-top: 1rem;
    padding: 10px 20px;
    background: transparent;
    border: 2px solid #d4af37;
    color: #d4af37;
    font-size: 1rem;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .button:hover {
    background: #d4af37;
    color: #111;
  }

  @media(max-width: 1440px) {
    margin-bottom: 0;

    .aboutService, .local{
      padding: 5rem 10rem;


    }

    .contentServices{
      margin-top: 5rem;
      width: 100%;
      grid-template-columns: 1fr 1fr;
      display: grid;
      justify-content: center;
      align-items: center;
      padding: 0 16rem;
      box-sizing: border-box;
      gap: 1rem;

      .cardService{
        width: 85%;
        height: 85%;
        h3{
          text-align: center;
        }
      }
    }
  }

  @media (max-width: 1024px){
    .aboutService, .local{
      padding: 5rem 12rem;
    }

    .contentServices{
      padding: 0 5rem;
    }

    .local{
      padding: 0;

      .location{
        margin-left: 15rem;
      }

    }
  }

  @media (max-width: 768px){
    .contentServices{
      padding: 0;
      display: flex;
      flex-direction: column;
      .cardService{
        width: 50%;
      }
    }

    .aboutService{
      padding: 5rem 6rem;
    }

  }

  @media (max-width: 425px){

    .contentServices{
      .cardService{
        width: 70%;
      }
    }

    .aboutService{
      padding: 5rem 2rem;
      .title{
        font-size: 2.2rem;
      }
    }

    .local{
      .titleHead{
        font-size: 1.2rem;
      }

      .location{
        margin-left: 5rem;
      }
    }
  }
`;

export default ServicesContainer;