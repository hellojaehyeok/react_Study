import React, { useState } from 'react';

const Navigation = () =>{

    console.log("hello");

    return(
        <nav className="nav">
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Movie</a></li>
                <li><a href="#">Login</a></li>
            </ul>
        </nav>
    );
}

export default Navigation;