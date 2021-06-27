import React from 'react';
import "./style.css";
import { NavLink } from 'react-router-dom';

function Footer() {

    return (
        <div className="back">
            <h4><NavLink to="/connect">Like what you see? Let's connect!</NavLink></h4>
        </div>
    )
}

export default Footer;