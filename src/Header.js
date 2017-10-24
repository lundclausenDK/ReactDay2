import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
    <header>
        <nav>
            <ul className="navigation">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/smurfs">Smurfs</Link></li>
                <li><Link to="/disney">Disney</Link></li>
            </ul>
        </nav>
    </header>
);

export default Header;