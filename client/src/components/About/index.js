import React from "react";
import "./style.css";


function About() {

    return (
        <div className="about-back">
            <h1 className="title">About Me</h1>
            <h2>I'm a fullstack developer from Portland, Oregon</h2>
            <p>I am a Web Developer with a background in Graphic Design. I enjoy creating functional and aesthetically pleasing applications while keeping the User’s experience in mind.</p>
            <p>In diam nulla, iaculis in aliquet vitae, interdum quis nisl. Proin fermentum, sapien quis aliquam pulvinar, est lacus fringilla diam, non pellentesque eros justo in lorem. Phasellus quis porta sapien. Ut id cursus nulla. Vivamus ornare ex a turpis luctus, sit amet rutrum felis suscipit. Duis tempus dignissim porta. Aenean fermentum urna in leo volutpat euismod.</p>
            <h1>Skills</h1>
            <h2>Frontend</h2>
            <ul>
                <li>React</li>
                <li>JavaScript</li>
                <li>CSS</li>
                <li>HTML</li>
            </ul>
            <h2>Backend</h2>
            <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Git</li>
                <li>SQL</li>
                <li>MongoDB</li>
            </ul>
            <h2>Other Skills</h2>
            <ul>
                <li>Adobe InDesign</li>
                <li>Adobe Photoshop</li>
            </ul>
            <h2>Interests</h2>
            <p>Reading</p>
        </div>

    );
}

export default About;