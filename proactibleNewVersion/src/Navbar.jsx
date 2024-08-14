import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <nav className="bg-white shadow-lg p-4">
      <div className="container mx-auto flex items-center justify-between">
        
        {/* Logo on the left */}
        <div className="flex items-center flex-none">
          <Link to="/" className="flex items-center">
            <img src={logo1} alt="logo" className="w-32 h-auto" />
          </Link>
        </div>

        {/* Centered navigation items, hidden on mobile */}
        <div className="flex-1  justify-center sm:flex hidden">
          <ul className="flex items-center space-x-6">
            <li className="list-none">
              <Link
                to="/"
                className="flex items-center text-customBlue hover:text-blue-600 transition-colors duration-200"
              >
                {homeIcon}
                <span className="ml-2 text-base">Inicio</span>
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/nosotros"
                className="flex items-center text-customBlue hover:text-blue-600 transition-colors duration-200"
              >
                {aboutIcon}
                <span className="ml-2 text-base">Nosotros</span>
              </Link>
            </li>
            <li className="list-none">
              <Link
                to="/contacto"
                className="flex items-center text-customBlue hover:text-blue-600 transition-colors duration-200"
              >
                {contactIcon}
                <span className="ml-2 text-base">Contacto</span>
              </Link>
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
        <div className="flex-none w-32">
          {/* This div is empty to help with distribution */}
        </div>

        {/* Menu button on mobile devices */}
        <button
          className="text-customBlue sm:hidden"
          onClick={toggleSidebar}
        >
          {/* Menu icon */}
          ☰
        </button>
      </div>

      {/* Sidebar for mobile screens */}
      <div
        className={`fixed top-0 left-0 w-64 h-full bg-white shadow-lg transform ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out z-50`}
      >
        <button
          className="text-customBlue p-4"
          onClick={toggleSidebar}
        >
          ✕
        </button>
        <ul className="flex flex-col p-4 space-y-4">
          <li className="list-none">
            <Link
              to="/"
              className="flex items-center text-customBlue hover:text-blue-600 transition-colors duration-200"
            >
              {homeIcon}
              <span className="ml-2 text-base">Inicio</span>
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="/nosotros"
              className="flex items-center text-customBlue hover:text-blue-600 transition-colors duration-200"
            >
              {aboutIcon}
              <span className="ml-2 text-base">Nosotros</span>
            </Link>
          </li>
          <li className="list-none">
            <Link
              to="/contacto"
              className="flex items-center text-customBlue hover:text-blue-600 transition-colors duration-200"
            >
              {contactIcon}
              <span className="ml-2 text-base">Contacto</span>
            </Link>
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
