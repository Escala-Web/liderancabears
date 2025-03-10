import styled from "styled-components";

const TeamContainer = styled.section`

    margin-bottom: 4rem;

  .textHighlight {
    color: ${({ theme }) => theme.primaryText};
  }

  .title {
    font-size: ${({ theme }) => theme.title};
    color: ${({ theme }) => theme.secondaryText};
    text-transform: uppercase;
    position: relative;
    width: 100%;
    text-align: center;
    @media (max-width: 425px){
      font-size: 2.2rem;
    }
  }

  .title::after {
    content: '';
    width: 30%;
    height: 2px;
    background-color: ${({ theme }) => theme.colorGray};
    display: block;
    left: 50%;
    position: absolute;
    transform: translateX(-50%);
    margin-top: 1rem;
  }

  .paragraph {
    font-size: ${({ theme }) => theme.paragraphSize};
    color: ${({ theme }) => theme.paragraphColor};
  }

  .contentWorkers{
    display: flex;
    width: 100%;
    justify-content: space-around;
    align-items: center;
    gap: 2rem;
    margin-top: 5rem;

    @media (max-width: 1024px) {
        flex-direction: column;
    }
  }

`;

export default TeamContainer;