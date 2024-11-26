import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div id='Projects' className='p-10 md:p-12 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold text-center'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-7 mx-20'>
            <ProjectCard title="Rock Paper Scissor " main="This is a Rock Paper Scissor web game website created using js" Link=" https://nimesh631.github.io/rockpaperscissor/"/>
            <ProjectCard title="Quiz" main="This is a Quiz game website created using js" Link="https://nimesh631.github.io/Quiz/"/>
            <ProjectCard title="Currency" main="This is a Currency Convertor App created using react. It makes use of Reusable components" Link="https://nimesh631.github.io/chai-aur-code/"/>
        </div>
    </div>
  )
}

export default Projects