import React from "react";
import { NavLink } from 'react-router-dom';


const Nav = (props) => (

    <nav className="main-nav">
        <ul>
            <li>
                <NavLink to='/search/horses' onClick={()=> props.navSearch('horses')}>Horses</NavLink>
            </li>
            <li>
                <NavLink to='/search/cats' onClick={()=> props.navSearch('cats')}>Cats</NavLink>
            </li>
            <li>
                <NavLink to='/search/birds' onClick={()=> props.navSearch('birds')}>Birds</NavLink>
            </li>
            <li>
                <NavLink to='/search/dinosaurs' onClick={()=> props.navSearch('dinosaurs')}>Dinosaurs</NavLink>
            </li>
        </ul>
    </nav>

);

export default Nav;