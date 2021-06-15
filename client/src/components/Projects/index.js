import React from "react";
import "./style.css";
import ProjectCard from "../ProjectCard";
import projects from "../../projects.json"


function ProjectInfo() {

    return (
        <div className="projects-back">
            <h1 className="title">Projects</h1>
            <ProjectCard
                image={projects[1].image}
                name={projects[1].name}
                github={projects[1].github}
                deployed={projects[1].deployed}
            />
        </div>
    );
}

export default ProjectInfo;