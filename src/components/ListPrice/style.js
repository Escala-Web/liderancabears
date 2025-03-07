import styled from 'styled-components';

const ListPriceContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    font-size: 1.3rem;
    text-transform: uppercase;
    margin: 1rem 0px;
    padding-bottom: 1rem;
    border-bottom: 2px solid ${({theme}) => theme.colorGray};
    font-weight: bold;

    @media (max-width: 425px){
        font-size: 1.1rem;
    }

    .serviceList{
        color: ${({theme}) => theme.secondaryText};
    }

    .priceList{
        color: #46c746;
    }
`;

export default ListPriceContainer;