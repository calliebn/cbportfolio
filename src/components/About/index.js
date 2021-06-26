import React from "react";
import "./style.css";


function About() {

    return (
        <div className="about-back">
            <div className="box">
                <img src="./assets/cbn.jpg" alt="portrait of Callie Nipper" />
            </div>
            <h1 className="title">Who&#8217;s That Girl?</h1>
            <h2 className="skills">I&#8217;m a fullstack developer from Portland, Oregon</h2>
            <p>I am a Web Developer with a background in Graphic Design. I enjoy creating functional and aesthetically pleasing applications while keeping the User&#8217;s experience in mind.</p>
            <a className="btn" href="../../assets/resume_052021.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <div className="trades">
                <h2>Skills</h2>
                <h2 className="skills">Frontend</h2>
                <div className="skillset">
                    <p>React</p>
                    <p>JavaScript</p>
                    <p>CSS</p>
                    <p>HTML</p>
                </div>
                <h2 className="skills">Backend</h2>
                <div className="skillset">
                    <p>Node.js</p>
                    <p>Express</p>
                    <p>Git</p>
                    <p>SQL</p>
                    <p>MongoDB</p>
                </div>
                <h2 className="skills">Other Skills</h2>
                <div className="skillset">
                    <p>Adobe InDesign</p>
                    <p>Adobe Photoshop</p>
                    <p>Salesforce</p>
                </div>
                <h2 className="skills">Interests</h2>
                <div className="skillset">
                    <p>Reading</p>
                    <p>Roller Skating</p>
                    <p>Fiber Arts</p>
                    <p>Cement Pouring</p>
                </div>
            </div>
        </div >

    );
}

export default About;