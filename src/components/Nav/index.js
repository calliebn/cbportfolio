import React from "react";
import { NavLink } from 'react-router-dom';
import "./styles.css";


const Nav = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm">
                <div className="container-fluid">
                    <div className="navbar-brand"><NavLink to="/">Callie Nipper</NavLink></div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className="navbar-nav">
                            <div className="nav-item">
                                <NavLink to="/projects">Projects</NavLink>
                            </div>
                            <div className="nav-item">
                                <NavLink to="/about">About</NavLink>
                            </div>
                            <div className="nav-item">
                                <NavLink to="/connect">Connect</NavLink>
                            </div>
                        </div>
                    </div>

                </div>
            </nav>
        </header >
    )
}

export default Nav;