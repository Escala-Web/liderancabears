import styled from 'styled-components';

const PricesContent = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr;

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

  .price {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem 8rem 2rem 15rem;
    background-color: ${({ theme }) => theme.backgroundContrast};

    .seeAll {
      display: flex;
      width: 100%;
      justify-content: center;
    }
  }

  @media (max-width: 1440px) {
    .reviews {
      .coment {
        margin-top: 50%;
        transform: translateY(-50%);
      }
    }

    .price {
      padding-left: 10rem;
    }
  }

  .reviews {
    h2 {
      text-transform: uppercase;
      text-align: center;
      color: ${({ theme }) => theme.secondaryText};
    }

    .content {
      margin-top: 5rem;
    }
  }
`;

export default PricesContent;