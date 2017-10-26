import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
    <header>
        <nav>
            <ul className="navigation header">
                <li><NavLink activeClassName="activeV2" to="/">Home</NavLink></li>
                <li><NavLink activeClassName="activeV2" to="/smurfs">Smurfs</NavLink></li>
                <li><NavLink activeClassName="activeV2" to="/disney">Disney</NavLink></li>
            </ul>
        </nav>
    </header>
);

export default Header;