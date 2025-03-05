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
    }

`;

export default WorkContainer;