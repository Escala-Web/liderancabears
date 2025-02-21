import React from "react";
import { Link } from "react-router-dom";
import { HeaderContainer } from "./style";

const Header = () =>{
    return (
        <HeaderContainer>
            <Link to={'/'}>
                <img src="https://placehold.co/250x100" alt="Placeholder image" />
            </Link>
        </HeaderContainer>
    );
}

export default Header;