import React from 'react'
import Heading from '../Heading/Heading'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <div className='hero-section'>
        <Heading />
        <div>
            <p>Мы - команда квалифицированных дизайнеров и архитекторов, занимающихся разработкой и реализацией дизайн-проектов</p>
        </div>
    </div>
  )
}

export default HeroSection