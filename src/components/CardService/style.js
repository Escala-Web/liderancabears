import styled from 'styled-components';

const ContainerCard = styled.div`
    background-color: ${({theme}) => theme.backgroundContrast};
    padding: 2rem;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: white;
    width: 100%;
    height: 100%;

    .icon{
        display: flex;
        justify-content: center;
        align-items: center;
        img{
            width: 20%;
        }
    }

    p{
        color: ${({theme}) => theme.paragraphColor};
    }

    .titulo{
        font-size: 1.8rem;
        text-transform: uppercase;
        color: ${({theme}) => theme.secondaryText};
    }

    @media (max-width: 1400px){
        width: 80%;
    }
    
`;

export default ContainerCard;
