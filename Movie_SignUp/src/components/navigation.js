import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'

const Navigation = () =>{

    console.log("hello");

    return(
        <nav className="nav">
            <ul>
                <li><NavLink to="/Home" activeClassName="activeNav">Home</NavLink></li>
                <li><NavLink to="/Movie" activeClassName="activeNav">Movie</NavLink></li>
                <li><NavLink to="/SignUp" activeClassName="activeNav">SignUp</NavLink></li>
            </ul>
        </nav>
    );
}

export default Navigation;