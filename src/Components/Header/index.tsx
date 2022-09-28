import { HeaderContainer } from "./styles"
import logo from "./../../assets/logo.svg"

import { Timer, Scroll } from "phosphor-react"
import { NavLink } from "react-router-dom"

export function Header() {
    return (
        <HeaderContainer>
            <img alt="logotipo: dois triângulos intersectados" src={logo} />
            <nav>
                <NavLink to="/home" title="Timer">
                    <Timer size={32} />
                </NavLink>
                <NavLink to="/history" title="History">
                    <Scroll size={32} />
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}