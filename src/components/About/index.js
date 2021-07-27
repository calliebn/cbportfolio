import React from "react";
import "./style.css";

function AboutInfo() {

    return (
        <div className="about-back">
            <div className="box">
                <img src="./assets/cbn.jpg" alt="portrait of Callie Nipper" />
            </div>
            <h1 className="title">Who&#8217;s That Girl?</h1>
            <h2 className="skills">I&#8217;m a full stack developer from Portland, Oregon</h2>
            <p>I am a full stack developer utilizing a background in graphic design to build agile websites and applications. My background as a graphic designer and my passion for learning led me down the path of designing for digital publications. As I built digital publications on a custom platform, I realized that I wanted a deeper connection to the product that was being created. I am a graduate of the University of Oregon’s Coding Bootcamp and bring more than a decade of experience in working within a digital platform.</p>
            <p>Whether coding or learning a new craft, I am a maker at heart. When I’m not walking my dogs, I can be found making concrete planters, crocheting, or curling up with a good book.</p>
            <a className="btn" href="./assets/resume_072021.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
            <div className="trades">
                <h2>Skills</h2>
                <h2 className="skills">Front End</h2>
                <div className="skillset">
                    <p>React</p>
                    <p>JavaScript</p>
                    <p>jQuery</p>
                    <p>CSS3</p>
                    <p>HTML5</p>
                    <p>Bootstrap</p>
                    <p>Bulma</p>
                </div>
                <h2 className="skills">Back End</h2>
                <div className="skillset">
                    <p>Node.js</p>
                    <p>Express.js</p>
                    <p>MySQL</p>
                    <p>MongoDB</p>
                </div>
                <h2 className="skills">Other Skills</h2>
                <div className="skillset">
                    <p>Adobe Creative Cloud</p>
                    <p>Responsive Web Design</p>
                    <p>Git</p>
                    <p>GitHub</p>
                    <p>Salesforce</p>
                    <p>Heroku</p>
                </div>
                <h2>Interests</h2>
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

export default AboutInfo;