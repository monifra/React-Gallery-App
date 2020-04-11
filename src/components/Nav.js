import React from "react";
import { NavLink } from 'react-router-dom';


const Nav = (props) => (

    <nav className="main-nav">
        <ul>
            <li>
                <NavLink to='/search/horse'>Horse</NavLink>
            </li>
            <li>
                <NavLink to='/search/cat'>Cat</NavLink>
            </li>
            <li>
                <NavLink to='/search/bird'>Bird</NavLink>
            </li>
            <li>
                <NavLink to='/search/dinosaur'>Dinosaur</NavLink>
            </li>
        </ul>
    </nav>

);

export default Nav;