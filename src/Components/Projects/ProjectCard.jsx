import React from 'react'
import { LiaJenkins } from 'react-icons/lia'

function ProjectCard({title,main,Link,text}) {
  return (
    <div className='p-3 md:p-6 flex flex-col w-80 bg-[#0c0e19] shadow-xl shadow-slate-900 rounded-2xl'>
        <img className="p-4 " src="https://thumbs.dreamstime.com/b/projects-concept-black-chalkboard-d-rendering-handwritten-top-view-office-desk-lot-business-office-supplies-79906734.jpg" alt="" />
        <h3 className='px4 text-xl md:text-2xl font-bold leading-normal text-center'>
            {title}
        </h3>
      <p className='px-4 text-sm md:tex-md leading-tight py-2'>{main}</p>
      <div className='mt-2 p-2 md:p-4 flex gap-2 md:gap-4 justify-center'>
        <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697] '>
            <a href={Link}>{text}</a>
        </button>

        {/* <button className='md:mt-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>
            Source code
        </button> */}
      </div>
    </div>
  )
}

export default ProjectCard
