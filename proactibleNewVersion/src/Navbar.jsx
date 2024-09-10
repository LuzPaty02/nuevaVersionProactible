import React, { useState, useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import {
  homeIcon,
  aboutIcon,
  contactIcon,
  whatsappIcon,
} from "./assets/iconPaths";
import logo1 from "./assets/images/images/logo1.png";
import { WHATSAPP_LINK } from "./assets/whatsapp";

export default function Navbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null); // Ref for the sidebar
  const location = useLocation(); // Hook to get current location

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsSidebarOpen(false); // Automatically close sidebar after scrolling
  };

  const handleInicioClick = () => {
    if (location.pathname === "/") {
      // If already on home page, trigger smooth scroll to top
      scrollToSection("home");
    } else {
      // Otherwise, navigate to home page
      window.location.href = "/";
    }
    setIsSidebarOpen(false); // Close sidebar when navigating to home
  };

  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setIsSidebarOpen(false); // Close the sidebar if clicked outside
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside); // Clean up
    };
  }, [isSidebarOpen]);

  return (
    <nav className="bg-white shadow-lg p-4 fixed top-0 left-0 w-full z-50 h-16">
      <div className="container mx-auto flex items-center justify-between h-full">
        
        {/* Logo on the left */}
        <div className="flex items-center flex-none">
          <a href="/" className="flex items-center">
            <img src={logo1} alt="logo" className="w-32 h-fixed m-2 flex-shrink-0" />
          </a>
        </div>

        {/* Centered navigation items, hidden on mobile */}
        <div className="flex-1 justify-center sm:flex hidden">
          <ul className="flex items-center space-x-6">
            <li className="list-none">
              <button
                onClick={handleInicioClick}
                className="flex items-center text-customBlue hover:text-blue-600 transition-colors duration-200"
              >
                {homeIcon}
                <span className="ml-2 text-base">Inicio</span>
              </button>
            </li>
            <li className="list-none">
              <button
                onClick={() => scrollToSection("impacto")}
                className="flex items-center text-customBlue hover:text-blue-600 transition-colors duration-200"
              >
                {aboutIcon}
                <span className="ml-2 text-base">Impacto</span>
              </button>
            </li>
            <li className="list-none">
              <button
                onClick={() => scrollToSection("contact")}
                className="flex items-center text-customBlue hover:text-blue-600 transition-colors duration-200"
              >
                {contactIcon}
                <span className="ml-2 text-base">Contacto</span>
              </button>
            </li>
            <li className="list-none">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-customBlue hover:text-blue-600 transition-colors duration-200"
              >
                {whatsappIcon}
                <span className="ml-2 text-base">Whatsapp</span>
              </a>
            </li>
          </ul>
        </div>

        {/* Empty column to help with distribution */}
        <div className="flex-none w-32 min-h-16">
          {/* This div is empty to help with distribution */}
        </div>

        {/* Menu button on mobile devices */}
        <button className="text-customBlue sm:hidden m-2" onClick={toggleSidebar}>
          ☰
        </button>
      </div>

      {/* Sidebar for mobile screens */}
      <div
        ref={sidebarRef} // Reference to the sidebar
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button className="text-customBlue p-4" onClick={toggleSidebar}>
          ✕
        </button>
        <ul className="flex flex-col p-4 space-y-4">
          <li className="list-none">
            <button
              onClick={handleInicioClick}
              className="flex items-center text-customBlue hover:text-blue-600 transition-colors duration-200"
            >
              {homeIcon}
              <span className="ml-2 text-base">Inicio</span>
            </button>
          </li>
          <li className="list-none">
            <button
              onClick={() => scrollToSection("impacto")}
              className="flex items-center text-customBlue hover:text-blue-600 transition-colors duration-200"
            >
              {aboutIcon}
              <span className="ml-2 text-base">Impacto</span>
            </button>
          </li>
          <li className="list-none">
            <button
              onClick={() => scrollToSection("contact")}
              className="flex items-center text-customBlue hover:text-blue-600 transition-colors duration-200"
            >
              {contactIcon}
              <span className="ml-2 text-base">Contacto</span>
            </button>
          </li>
          <li className="list-none">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-customBlue hover:text-blue-600 transition-colors duration-200"
            >
              {whatsappIcon}
              <span className="ml-2 text-base">Whatsapp</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
