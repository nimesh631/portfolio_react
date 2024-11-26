import React from 'react'

function Home() {
  return (
    <div className='text-white flex w-full justify-between items-start p-10 md:p-20'>
      <div className="md:w-2/4 md:pt-10">
      <h1 className='text-3xl md:text-5xl font-bold flex leading-normal tracking-tighter'>Hi,I'm Nimesh Man Kayastha</h1>
      <p className='text-sm md:text-xl tracking-tight pt-5'> Currently pursuing a Bachelor of Science in Computer Science and Information Technology (BSc.CSIT) 
from Himalaya College of Engineering. Passionate front-end developer with experience in building 
responsive web applications. Proficient in HTML, CSS, JavaScript, and digital marketing strategies. Seeking 
opportunities to leverage my skills in dynamic environments.</p>
      <button className='mt-5 md:md-10 text-white py-02 px-3 text-sm md:text-lg md:py-2 md:px-4 hover:opacity-85 duration-300 hover:scale-105 font-semibold rounded-3xl bg-[#465697]' >Contact me</button>
      </div>
      <div className='m-20 flex justify-end'>
      <img 
  className="w-2/5  rounded-2xl" 
  src="pp.jpg" 
 
  alt="Profile Picture" 
/>

      </div>
     
    </div>
  )
}

export default Home
