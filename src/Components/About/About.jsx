import React from 'react';
// import { IoArrowForward } from "react-icons/io5";

function About() {
  return (
    <section id="About" className='text-white md:flex overflow-hidden items-center justify-center bg-black shadow-xl mx-0 md:mx-20 bg-opacity-30 rounded-lg p-12'>
      <div>
        <h2 className='text-2xl md:text-4xl font-bold mb-6 text-center mt-10'>About Me</h2>
        <div className='md:flex md:flex-row flex-col items-center'>
          <img
            className="md:h-80 w-full md:w-auto rounded-lg object-cover mb-6 md:mb-0 md:mr-6"
            src="https://img.freepik.com/premium-photo/unrecognizable-man-office-anonymous-employee-workplace-businessman-working-cubicle-facel_980716-229637.jpg"
            alt="About us"
          />
          <ul>
            <div className='flex gap-3 py-4 items-start'>
              {/* <IoArrowForward size={30} className="mt-1 text-blue-500" /> */}
              <span className='w-full md:w-96'>
                <h1 className='text-xl md:text-2xl font-semibold leading-normal'>Beginner Web Developer</h1>
                <p className='text-md md:text-md leading-tighter py-2 '>
                Hi, I'm Nimesh Man Kayastha! I’m a creative Web Developer with a passion for building visually appealing and user-friendly web applications. I love turning ideas into reality through clean design and intuitive interfaces.

My journey into web development started with a curiosity for technology and a desire to bring designs to life. Over time, I’ve worked on various projects that challenge me to grow and learn every day.

When I’m not coding, you’ll likely find me immersed in drawing, capturing moments through photography, or losing myself in the pages of a great novel. These hobbies inspire my creativity and bring a unique perspective to my work.
                </p>
              </span>
            </div>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default About;
