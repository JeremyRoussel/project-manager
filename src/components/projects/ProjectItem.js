import React from 'react'


// the project title plus a delete button
const ProjectItem = (props) => {

   
  return (
    <div >
        <li>
            <span>
                {props.project.title}&nbsp;&nbsp;
            </span>

            {props.project.category}
            <a href="#" onClick={() => props.onDelete(props.project.id) } >X</a>
        </li>
      
    </div>
  )
}

export default ProjectItem
