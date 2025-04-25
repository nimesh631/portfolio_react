import React from 'react'
import ProjectCard from './ProjectCard'

function Projects() {
  return (
    <div id='Projects' className='p-10 md:p-12 text-white'>
        <h1 className='text-2xl md:text-4xl text-white font-bold text-center mt-10'>Projects</h1>
        <div className='py-12 px-8 flex flex-wrap gap-7 mx-20'>
          <ProjectCard title="Todo" text="Demo" main="Feature-rich Todo App built with React and Redux Toolkit that offers complete CRUD operations and data persistence via Local Storage. Streamlined task management with an intuitive interface." Link="https://nimesh631.github.io/ReduxToolKitTodo/"/>
            <ProjectCard title="Rock Paper Scissor " text="Demo" main="An interactive Rock Paper Scissors web game built with JavaScript that lets users compete against computer. Features real-time score tracking and responsive gameplay through dynamic DOM manipulation for a seamless user experience." Link=" https://nimesh631.github.io/rockpaperscissor/"/>
            <ProjectCard title="Quiz" text="Demo" main="A dynamic Quiz Game website built with JavaScript that implements event handling for interactive user experience, tracks and displays user scores, and utilizes query selectors for efficient DOM manipulation and content updates" Link="https://nimesh631.github.io/Quiz/"/>
            <ProjectCard title="Currency" text="Demo" main="This is a Currency Convertor App created using react. It makes use of Reusable components" Link="https://nimesh631.github.io/chai-aur-react/"/>
            <ProjectCard title="Fake API Frontend" text="Repo" main="This is a Fake API having responsive product list page with pagination, dynamic routing.
" Link="https://github.com/nimesh631/TaskProductApi"/>
 <ProjectCard title="" text="Repo" main="This is a comprehensive job portal and crowdfunding backend using Nest.js, TypeORM, PostgreSQL, and TypeScript. The system features CRUD operations, JWT authentication, and role-based authorization.
" Link="https://github.com/nimesh631/JobPortal"/>
        </div>
    </div>
  )
}

export default Projects