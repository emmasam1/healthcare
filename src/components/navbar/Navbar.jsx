import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Spin as Hamburger } from 'hamburger-react';
import './Navbar.css';  // Make sure to create this CSS file

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
      <div className="pa-10 flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="w-20" alt="Logo" />
        </Link>
        <div className="relative md:hidden z-20">
          <Hamburger toggled={isOpen} toggle={toggleMenu} size={27} />
        </div>
        <div className={`mobile-menu ${isOpen ? 'open' : ''} md:hidden`} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 bg-white h-full">
            <li>
              <Link to="/" className="block py-2 px-3 text-green-700 hover:text-green-900" aria-current="page" onClick={closeMenu}>Home</Link>
            </li>
            <li>
              <Link to="/about" className="block py-2 px-3 text-green-700 hover:text-green-900" onClick={closeMenu}>About</Link>
            </li>
            <li>
              <Link to="/services" className="block py-2 px-3 text-green-700 hover:text-green-900" onClick={closeMenu}>Services</Link>
            </li>
            <li>
              <Link to="/contact" className="block py-2 px-3 text-green-700 hover:text-green-900" onClick={closeMenu}>Contact</Link>
            </li>
          </ul>
        </div>
        <div className="hidden md:flex md:items-center md:space-x-8 rtl:space-x-reverse">
          <Link to="/" className="py-2 px-3 text-green-700 hover:text-green-900" aria-current="page">Home</Link>
          <Link to="/about" className="py-2 px-3 text-green-700 hover:text-green-900">About</Link>
          <Link to="/services" className="py-2 px-3 text-green-700 hover:text-green-900">Services</Link>
          <Link to="/contact" className="py-2 px-3 text-green-700 hover:text-green-900">Contact</Link>
        </div>
        {isOpen && <div className="fixed inset-0 bg-black opacity-50 z-10" onClick={closeMenu}></div>}
      </div>
    </nav>
  );
};

export default Navbar;
