import styled from 'styled-components';

const PolicyContainer = styled.section`
    max-width: 1400px;
    margin: 150px auto;
    color: ${({theme}) => theme.secondaryText};
    
    .title{
        font-size: 2rem;
    }

    a{
        color: ${({theme}) => theme.secondaryText};
    }

    p{
    }

    @media (max-width: 1024px){
        padding: 0 5rem;
    }

    @media (max-width: 425px){
        padding: 0 2rem;
    }
`;

export default PolicyContainer;