import React from "react";
import "./styles.css";

const ProjectCard = (props) => {
    return (

        <div className="col-md-4 col-sm-6">
            <div className="card">
                <div className="view view-copy">
                    <div className="img-container">
                        <img alt={props.name} src={props.image} />
                        <div className="mask">
                            <a href={props.deployed}><h2>{props.name}</h2></a>
                            <p>{props.blurb}</p>
                            <a href={props.github} target="_blank" rel="noopener noreferrer" className="info">Visit GitHub</a>
                            <a href={props.deployed} target="_blank" rel="noopener noreferrer" className="info">Visit Site</a>
                            {/* <a href={props.github} target="_blank" rel="noopener noreferrer"><img className="gitcat" src="./assets/github.png" alt="GitHub Logo" /></a>
                            <a href={props.deployed} target="_blank" rel="noopener noreferrer" ><i className="deploy fas fa-external-link-alt"></i></a>*/}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectCard;