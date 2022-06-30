import React from "react";

export const Navbar = ({brand}) => {
    return (

        <nav className="navbar">
            
            <div className="container">
                <a href="/">{brand}</a>
            </div>
        </nav>
    );
}