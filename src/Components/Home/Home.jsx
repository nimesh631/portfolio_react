import React from 'react'
function Home() {
  return (
    <div className='text-white flex flex-col md:flex-row w-full justify-between items-center p-6 md:p-20'>
      <div className="w-full md:w-2/4 md:pt-10">
        <h1 className='text-3xl md:text-5xl font-bold flex leading-normal tracking-tighter'>Hi,I'm Nimesh Man Kayastha</h1>
        <p className='text-sm md:text-xl tracking-tight pt-5'>Front-end developer and final-year BSc.CSIT student with full-stack internship experience at Fusemachines. Skilled in React, TypeScript, NestJS, and PostgreSQL. Passionate about building responsive web apps and collaborating in agile teams.</p>
        <button className='mt-5 md:md-10 text-white py-2 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]'>Contact me</button>
      </div>
      <div className='mt-8 md:m-20 flex justify-center md:justify-end w-full md:w-2/4'>
        <img
          className="w-48 h-48 sm:w-64 sm:h-64 md:w-3/4 md:h-auto object-cover rounded-2xl"
          src="pp.jpg"
          alt="Profile Picture"
        />
      </div>
    </div>
  )
}
export default Home