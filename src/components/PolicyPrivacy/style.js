import styled from 'styled-components';

const PolicyContainer = styled.section`
    max-width: 1400px;
    margin: 250px auto;
    color: ${({theme}) => theme.secondaryText};
    
    .title{
        font-size: 2rem;
    }

    a{
        color: ${({theme}) => theme.secondaryText};
    }

    p{
    }
`;

export default PolicyContainer;