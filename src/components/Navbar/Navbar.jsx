import React from "react";
import { NavLink, Link } from "react-router-dom";


const Navbar = () => {

    return (

        <header>
            
            <nav className="navbar">

                <div className="containerNavbar">
                {/* Link se pone en <h1></h1> */}
                    <Link to="/"> 
                        <img src="https://rickandmortyapi.com/api/character/avatar/19.jpeg" alt="logo-rickmorty" className="logo" />
                    </Link> 

                    <Link to="/" className="brand">RICK AND MORTY APP</Link> {/* NavLink se pone donde esta <a></a>   */}
                </div>

                <div className="box-elements">
                    <Link to="/" className="nav-link">Personajes</Link> {/* NavLink se pone donde esta <a></a>   */}
                    
                    <NavLink to="/episodes" className="nav-link">Episodios</NavLink>
                    
                    <NavLink to="/location" className="nav-link">Ubicación</NavLink>
                </div>
            </nav>
        </header>
    );
}

export default Navbar