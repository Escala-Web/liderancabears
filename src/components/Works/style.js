import styled from 'styled-components';

const WorkContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 5rem 0;

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
        @media (max-width: 425px) {
            font-size: 2.2rem;
        }
    }

    .title::after{
        content: '';
        width: 10%;
        height: 2px;
        background-color: ${({theme}) => theme.colorGray};
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

    .containerWork{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        gap: 1rem;
        min-width: 1400px;
        @media (max-width: 1024px){
            min-width: 0;
        }
    }

    @media (max-width: 1440px){
        margin-top: 2rem;
    }

    @media (max-width: 425px){
        padding: 1rem;

        .containerImage{
            display: flex;
            justify-content: center;
            align-items: center;
            img{
                width: 70%;
            }
        }
    }

`;

export default WorkContainer;