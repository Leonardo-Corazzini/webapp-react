import { NavLink } from "react-router";

export default function Nav() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">Chi siamo</NavLink>
            <NavLink to="/contact">Contattaci</NavLink>
        </nav>
    )
}
