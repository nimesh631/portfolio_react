import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';  // Importing icons

function Footer() {
  return (
    <div id="Footer" className='flex justify-around bg-[#465697] text-white p-10 md:p-12 items-center'>
      <div>
        <h1 className='text-2xl md:text-6xl font-bold'>Contact</h1>
        <h3 className='text-sm md:text-2xl font-normal'>Feel Free To Reach Out!</h3>
      </div>
      <ul className='text-sm md:text-xl'>
        <li className='flex items-center'>
          <FaEnvelope className='mr-2' />
          <a href="mailto:nimeshkayastha067@gmail.com">nimeshkayastha067@gmail.com</a>
        </li>
        <li className='flex items-center'>
          <FaLinkedin className='mr-2' />
          <a href="https://www.linkedin.com/in/nimesh-kayastha-830373320/" target="_blank" rel="noopener noreferrer">
            /www.linkedin.com/in/nimesh-kayastha-830373320/
          </a>
        </li>
        <li className='flex items-center'>
          <FaGithub className='mr-2' />
          <a href="https://github.com/nimesh631" target="_blank" rel="noopener noreferrer">
            github.com/nimesh631
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
