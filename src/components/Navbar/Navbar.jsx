// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full mx-auto flex justify-between items-center p-6 pt-4 text-white/65">
      <div>
        <img
          className="w-10 md:mr-0 lg:mr-10"
          src="AssetsNavbar/logonav.svg"
          alt=""
        />
      </div>

      <div
        className="hidden max bg-[#D9D9D9]/15 rounded-full justify-center justify-self-end md:flex md:text-[10px] md:py-2 md:px-5 md:gap-4
        lg:text-xs lg:py-3 lg:px-7 lg:gap-10"
      >
        <a href="#" className="hover:underline">
          Home
        </a>
        <a href="#" className="hover:underline">
          Our Services
        </a>
        <a href="#" className="hover:underline">
          Our Team
        </a>
        <a href="#" className="hover:underline">
          About Us
        </a>
        <a href="#" className="hover:underline">
          Events
        </a>
        <a href="#" className="hover:underline">
          What's New
        </a>
      </div>

      <button className="hidden md:flex justify-center items-center border rounded-lg border-[#D9D9D9]/15 md:text-[10px] md:py-2 md:px-4 lg:px-7 lg:py-2.5 lg:text-xs">
        Search through our plethora of articles
      </button>
    </div>
  );
};

export default Navbar;
