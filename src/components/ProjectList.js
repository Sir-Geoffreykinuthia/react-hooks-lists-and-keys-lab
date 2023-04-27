import React from "react";
// importing the ProjectItem component.
import ProjectItem from "./ProjectItem";
// defining the components function and passing in the projects prop 
function ProjectList({ projects }) {
  // tring to log in the projectto the console to see its function 
  console.log(projects);
  return (
    // rendring the main container for the project section with an ID of projects
    <div id="projects">
      {/* rendering heder for section */}
      <h2>My Projects</h2>
      <div id="project-list">
        {/* mapping over the projects prop to render the projectItem component "iteratably" for each */}
        {projects.map((project) => (
          <ProjectItem key={project.id} name={project.name} about={project.about} technologies={project.technologies}/>
        ))}</div>
    </div>
  );
}

export default ProjectList;
