import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`

    :root{
      scroll-behavior: smooth;
    }

    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        background-color: ${({ theme }) => theme.background};
        overflow-x: hidden;
    }
`;

export const Container = styled.div`
  min-width: 1200px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .textHighlight {
    color: ${({ theme }) => theme.primaryText};
  }

  .title {
    font-size: ${({ theme }) => theme.title};
    color: ${({theme}) => theme.secondaryText};
    text-transform: uppercase;
  }

  .paragraph {
    font-size: ${({ theme }) => theme.paragraphSize};
    color: ${({ theme }) => theme.paragraphColor};
  }

  @media (max-width: 768px){
    min-width: 0;
    .title{
      font-size: 2.2rem !important;
      text-align: center;
    }
  }

  @media (max-width: 1024px){
    .title{
      font-size: 3rem;
    }
  }

`;
