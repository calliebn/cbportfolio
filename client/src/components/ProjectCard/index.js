import React from "react";
import "./styles.css";

const ProjectCard = (props) => {
    return (

        <div className="col-md-4 col-sm-6">
            <div className="card">
                <div className="img-container">
                    <a href={props.deployed}><img alt={props.name} src={props.image} /></a>
                </div>
                <div className="card-body">
                    <a href={props.deployed}><h3>{props.name}</h3></a>
                    <div className="icons">
                        <a href={props.github} target="_blank" rel="noopener noreferrer"><img className="gitcat" src="../../assets/github.png" alt="GitHub Logo" /></a>
                        <a href={props.deployed} target="_blank" rel="noopener noreferrer"><i className="deploy fas fa-external-link-alt"></i></a>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default ProjectCard;