import React from 'react';
import styled from 'styled-components';
import {black} from "../Styles/colors"
import {Title} from "../Styles/title"

const NavbarStyled = styled.div`
    background-color: ${black};
    padding: 10px;
    position:fixed;
    width:100%;
    z-index:1;
`
const Logo = styled(Title)`
    height:70px;
    width:80px;
    background-image:url("img/logo-small.png");
    background-position:center;
    background-size:cover;
    ${'' /* font-size:35px;
    color: white; */}
    ${'' /* text-shadow:1px 1px 8px #380502; */}
`
export function Navbar(){
    return <NavbarStyled>
    <Logo>
    
    </Logo>
    </NavbarStyled>;
}
