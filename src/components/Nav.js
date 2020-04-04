import React from "react";
import { BrowserRouter, NavLink } from 'react-router-dom';


const Nav = () => (
    <BrowserRouter>
    <nav className="main-nav">
        <ul>
            <li><NavLink to='#'>Cats</NavLink></li>
            <li><NavLink to='#'>Dogs</NavLink></li>
            <li><NavLink to='#'>Computers</NavLink></li>
        </ul>
    </nav>
    </BrowserRouter>     
);

export default Nav;