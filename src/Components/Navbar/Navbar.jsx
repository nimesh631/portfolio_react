import React, { useState } from 'react'
import { RiMenu2Line, RiCloseLine } from '@remixicon/react'

function Navbar() {
    const [menu, openMenu] = useState(false);
    const [showMenu, setShowMenu] = useState(true);

    const toggleMenu = () => {
        openMenu(!menu);
        setShowMenu(!showMenu);
    };

    return (
        <nav className='fixed top-0 left-0 z-50 w-full bg-blue-950 rounded-lg flex flex-wrap justify-between h-15 md:items-center text-white px-10 py-1 md:px-20'>
            <span className='text-xl font-bold tracking-wide mt-4'>Portfolio</span>
            <ul className={`${menu ? "block" : "hidden"} mx-24 py-1 mt-4 font-semibold md:mt-5 bg-black px-2 rounded-xl bg-opacity-30 md:border-none text-center md:bg-transparent md:static md:mx-0 md:flex gap-6`}>
                <a href="#About">
                    <li className='text-md transition-all duration-300 p-2 md:p-0 hover:text-blue-400'>About</li>
                </a>

                <a href="#Skills">
                    <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-400'>Skills</li>
                </a>

                <a href="#Projects">
                    <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-400'>Projects</li>
                </a>

                <a href="#Footer">
                    <li className='text-md transition-all duration-300 p-1 md:p-0 hover:text-blue-400'>Contact</li>
                </a>
            </ul>

            {showMenu ? (
                <RiMenu2Line size={20} className="md:hidden absolute right-10 top-2 transition-all duration-300" onClick={toggleMenu} />
            ) : (
                <RiCloseLine size={20} className="md:hidden absolute right-10 top-2 transition-all duration-300" onClick={toggleMenu} />
            )}
        </nav>
    );
}

export default Navbar;
