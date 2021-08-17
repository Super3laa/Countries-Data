import React from 'react'
import {
    Navbar,
    NavbarBrand,
    NavbarText
} from 'reactstrap';
import { HiOutlineMoon,HiMoon } from 'react-icons/hi'
import { lightTheme } from "../assets/styles/themes";
import { ElementStyle } from '../assets/styles/GlobalStyles';
export default function Header(props) {
    return (
        <ElementStyle>
            <Navbar className="Header">
                <NavbarBrand href="/" >Where in the world?</NavbarBrand>
                <NavbarText style={{cursor:"pointer"}} onClick={()=>props.theme.toggleTheme()}>{props.theme.theme === lightTheme?<HiOutlineMoon style={{fontSize: "1.3rem"}} />:<HiMoon style={{fontSize: "1.3rem"}} /> } Dark Mode</NavbarText>
            </Navbar>
        </ElementStyle>
    )

}