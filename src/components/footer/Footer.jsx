import React from "react";
import { Link } from "react-router-dom";
import { FaFacebookF, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="w-full bg-slate-700 mt-24 pb-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-auto w-[90%] gap-10 pt-10">
        <div className="border-r pr-8">
          <div className="text-white text-2xl font-bold">MyBrand</div>
          <p className="text-white mt-5 mb-5">
            <b>Address:</b> Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Placeat rem rerum, consequatur nihil necessitatibus neque sed
            eos sit officia doloremque. Explicabo vel enim autem cumque,
            perspiciatis quo neque nemo provident!
          </p>
          <p className="text-white mb-5">
            <b>Phone:</b> +234(80)34-123-900
          </p>
          <Link
            to="/contact"
            className="text-white hover:underline decoration-solid"
          >
            Contact us
          </Link>
        </div>
        <div className="border-r pr-8">
          <div className="text-white text-xl font-bold mb-4">Quick Links</div>
          <ul>
            <li>
              <Link to="/about" className="text-white hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:underline">
                Services
              </Link>
            </li>
            <li>
              <Link to="/blog" className="text-white hover:underline">
                Blog
              </Link>
            </li>
            <li>
              <Link to="/faq" className="text-white hover:underline">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
        <div className="border-r pr-8">
          <div className="text-white text-xl font-bold mb-4">Resources</div>
          <ul>
            <li>
              <Link to="/privacy" className="text-white hover:underline">
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link to="/terms" className="text-white hover:underline">
                Terms & Conditions
              </Link>
            </li>
            <li>
              <Link to="/support" className="text-white hover:underline">
                Support
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:underline">
                Contact Support
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-white text-xl font-bold mb-4">Follow Us</div>
          <div className="flex space-x-4">
            <div className="flex justify-center items-center p-2 bg-white rounded-lg">
              <FaFacebookF size={25} />
            </div>
            <div className="flex justify-center items-center p-2 bg-white rounded-lg">
              <FaWhatsapp size={25} />
            </div>
            <div className="flex justify-center items-center p-2 bg-white rounded-lg">
              <FaInstagram size={25} />
            </div>
            <div className="flex justify-center items-center p-2 bg-white rounded-lg">
              <FaXTwitter size={25} />
            </div>
          </div>
        </div>
      </div>
      <p className="text-center text-white mt-4">&copy; 2024 All Rights Reserved MyBrand</p>
    </div>
  );
};

export default Footer;
