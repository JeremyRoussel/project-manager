import React from 'react'
import ProjectItem from './ProjectItem'


const Project = (props) => {

    let projectsArr = props.projects.map(project => {
        return <ProjectItem key={project.id} project={project} onDelete={props.onDelete}/>
    })


  return (
    <>
        Project

        {projectsArr}
    </>
  )
}

export default Project
