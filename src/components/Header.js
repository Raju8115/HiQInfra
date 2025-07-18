import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import useWindowWidth from "../hooks/useWindowWidth";


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const width = useWindowWidth();

  const toggleMenu = () => setIsOpen(!isOpen);

  const isMobile = width < 342; // Tailwind 'md' = 768px

  return (
    <header className="bg-white fixed top-0 left-0 right-0 z-50">
      <div className="flex justify-end">
        {/* Desktop Menu (only if not mobile) */}
        {!isMobile && (
          <nav className="flex justify-end text-gray-800 text-base md:text-lg flex-wrap border-b-[1px] border-gray-200 w-full">
            <span className="hover:text-black cursor-pointer text-base font-semibold text-[#0d1216b3] px-4 py-3"><a href="#home">Home</a></span>
            <span className="hover:text-black cursor-pointer text-base font-semibold text-[#0d1216b3] px-4 py-3"><a href="#about">About</a></span>
            <span className="hover:text-black cursor-pointer text-base font-semibold text-[#0d1216b3] px-4 py-3"><a href="#why_us">Why Us</a></span>
            <span className="hover:text-black cursor-pointer text-base font-semibold text-[#0d1216b3] px-4 py-3"><a href="#contact">Contact</a></span>
          </nav>
        )}

        {/* Hamburger Icon (only if mobile) */}
        {isMobile && (
          <button onClick={toggleMenu} className="text-gray-800 focus:outline-none p-4">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        )}
      </div>

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-36 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-bold text-[#0d1216b3]">Menu</h2>
          <button onClick={toggleMenu}>
            <X size={24} className="text-gray-800" />
          </button>
        </div>
        <nav className="flex flex-col text-[#0d1216b3] font-bold text-base p-4 space-y-4">
          <span className="hover:text-black cursor-pointer"><a href=""></a></span>
          <span className="hover:text-black cursor-pointer">About</span>
          <span className="hover:text-black cursor-pointer">Why Us</span>
          <span className="hover:text-black cursor-pointer">Contact</span>
        </nav>
      </div>

      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 z-40 border-none"
          onClick={toggleMenu}
        />
      )}
    </header>
  );
};

export default Header;