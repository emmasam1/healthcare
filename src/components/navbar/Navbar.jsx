import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="p-4 fixed w-[100%] z-20 top-0 bg-white">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-white text-2xl font-bold">
          <img src={logo} alt="" className='w-[12rem]' />
        </div>
        <div className="block lg:hidden">
          <button 
            onClick={() => setIsOpen(!isOpen)} 
            className="text-white focus:outline-none"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
        <div className={`w-full flex-grow lg:flex lg:items-center lg:justify-center lg:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <div className="text-sm lg:flex-grow lg:flex lg:justify-center">
            <Link to="/" className="block mt-4 lg:inline-block lg:mt-0 text-blue-600 hover:text-blue-200 mr-4 text-lg">
              Home
            </Link>
            <Link to="/about" className="block mt-4 lg:inline-block lg:mt-0 text-blue-600 hover:text-blue-200 mr-4 text-lg">
              About
            </Link>
            <Link to="/contact" className="block mt-4 lg:inline-block lg:mt-0 text-blue-600 hover:text-blue-200 text-lg">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
