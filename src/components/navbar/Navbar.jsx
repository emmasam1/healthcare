import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className="bg-white fixed w-full z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="w-20" alt="Logo" />
        </Link>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded={isOpen}
          onClick={toggleMenu}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
          </svg>
        </button>
        <div className={`${isOpen ? 'block z-50' : 'hidden'} absolute top-16 left-0 right-0 w-full md:static md:block md:w-auto bg-white md:bg-transparent`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-none bg-white md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <Link to="/" className="block py-2 px-3 text-green-700 hover:text-green-900 hover:bg-green-400 rounded-none md:bg-transparent md:text-green-700 md:p-0 dark:text-green-700" aria-current="page" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 text-green-700 hover:text-green-900 hover:bg-green-400 rounded-none md:bg-transparent md:text-green-700 md:p-0 dark:text-green-700" onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 px-3 text-green-700 hover:text-green-900 hover:bg-green-400 rounded-none md:bg-transparent md:text-green-700 md:p-0 dark:text-green-700" onClick={closeMenu}>Services</Link>
            </li>
            
            <li>
              <Link to="/contact" className="block py-2 px-3 text-green-700 hover:text-green-900 hover:bg-green-400 rounded-none md:bg-transparent md:text-green-700 md:p-0 dark:text-green-700" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>
        {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-40" onClick={toggleMenu}></div>}
      </div>
    </nav>
  );
};

export default Navbar;
``
