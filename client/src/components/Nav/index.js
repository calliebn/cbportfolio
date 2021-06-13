import React from "react";
import { NavLink } from 'react-router-dom';
import "./styles.css";


const Nav = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-sm">
                <div class="container-fluid">
                    <nav>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"><i className="fas fa-bars"></i></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item">
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/projects">Projects</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/about">About</NavLink>
                                </li>
                                <li class="nav-item">
                                    <NavLink to="/connect">Connect</NavLink>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </nav>
        </header>
    )
}

export default Nav;