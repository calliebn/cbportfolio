import React from "react";
import "./style.css";


function Connect() {

    return (
        <div className="connect-back">
            <h1 className="title">Let&#8217;s Connect</h1>
            <div className="icons">
                <a href="https://github.com/calliebn" target="_blank" rel="noopener noreferrer"><img className="icons" src="./assets/GitHub-Mark-120px-plus.png" alt="GitHub Logo" /></a>
                <a href="https://www.linkedin.com/in/callie-nipper-7b20406/" target="_blank" rel="noopener noreferrer"><img className="icons" src="./assets/LI-In-Bug.png" alt="LinkedIn Logo" /></a>
                <a href="mailto:callie.nipper@gmail.com"><i className="far fa-envelope mailcall"></i></a>
            </div>
            <div className="phone">
                <a href="tel:717-201-6579">717.201.6579</a>
            </div>
        </div>

    );
}

export default Connect;