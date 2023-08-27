import React from 'react'

const ProjectCart = (props) => {
  return (
    <div>
        <div>
            { props.isNew && (<div>isNew</div>) }
            <div>{props.isNew}</div>
            <img src={props.image} alt={props.title} />
            <p>{props.title} — {props.square} м² — {props.year}</p>
            <a href={props.link}>Подробнее →</a>
        </div>
    </div>
  )
}

export default ProjectCart