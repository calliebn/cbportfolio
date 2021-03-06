import React from "react";
import "./style.css";
import ProjectCard from "../ProjectCard";
import projects from "../../projects.json"


function ProjectInfo() {
    console.log(projects)
    return (
        <div className="projects-back">
            <h1 className="title">Projects</h1>
            <div className="row">
                {/* Loop through a static list */}
                {projects.map(project => (

                    <ProjectCard
                        key={project.id}
                        image={project.image}
                        name={project.name}
                        point1={project.point1}
                        point2={project.point2}
                        point3={project.point3}
                        github={project.github}
                        deployed={project.deployed}
                    />


                ))}
            </div>
        </div>
    );
}

export default ProjectInfo;