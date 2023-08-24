import React from 'react'
import project1img from '../../assets/project1img.jpg'
import project2img from '../../assets/project2img.jpg'
import project3img from '../../assets/project3img.jpg'


const ProjectsSection = () => {
  return (
    <div>
        <h2>проекты</h2>
        <div>
            <div>NEW</div>
            <img src={project1img} alt="" />
            <p>ЖК ПРАВОБЕРЕЖНЫЙ — 112 м² — 2023</p>
            <a href="">Подробнее →</a>
        </div>
        <div>
            <div>NEW</div>
            <img src={project2img} alt="" />
            <p>ЖК НОРВЕЖСКИЙ ПАРК — 75 М² — 2023</p>
            <a href="">Подробнее →</a>
        </div>
        <div>
            <div>NEW</div>
            <img src={project3img} alt="" />
            <p>ЖК СОСНОВСКИЕ ОЗЕРА — 94 М² — 2022</p>
            <a href="">Подробнее →</a>
        </div>
        <button>Смотреть все проекты</button>
    </div>
  )
}

export default ProjectsSection