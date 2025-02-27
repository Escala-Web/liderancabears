import styled from 'styled-components';

const ButtonStyle = styled.button`
    border: 4px solid ${({theme, isActive})=> isActive ? theme.primaryText : theme.borderGray};
    background-color: transparent;
    padding: 1.5rem;
    text-transform: uppercase;
    margin-top: 2rem;
    color: ${({theme}) => theme.secondaryText};
    font-weight: bold;
    font-size: 1.3rem;
`
export default ButtonStyle;