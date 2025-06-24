import React from "react";
import logo from "../assets/logo.jpg";

const NavBar = () => {
  return (
    <div className="bg-white text-black md:pl-8 px-6 py-4 shadow-md">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-start gap-10 md:gap-44">
        
        {/* Logo and Title */}
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-20">
          <img src={logo} alt="Logo" className="h-12 w-auto" />
          <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-agency font-bold text-center md:text-left">
            DEBATE TO EDUCATE
          </h1>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-16 sm:text-sm md:text-lg font-bold font-sans mt-4 md:mt-0">
          <a href="#home" className="text-blue-900 hover:text-black">Home</a>
          <a href="#about" className="text-blue-900 hover:text-black">About Us</a>
          <a href="#services" className="text-blue-900 hover:text-black">Events</a>
          <a href="#blog" className="text-blue-900 hover:text-black">Blog/News</a>
          <a href="#contact" className="text-blue-900 hover:text-black">Contact</a>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
