import React from 'react'
import AboutSection from './components/AboutSection/AboutSection'
import HeroSection from './components/HeroSection/HeroSection'
import ProjectsSection from './components/ProjectsSection/ProjectsSection'

const App = () => {
  return (
    <div className='container'>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />

    </div>
  )
}

export default App
