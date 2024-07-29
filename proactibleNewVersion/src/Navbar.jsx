import React from "react";
import { Link } from "react-router-dom";
import { homeIcon,aboutIcon, contactIcon, whatsappIcon } from "./assets/iconPaths";


export default function Navbar() {
  return (
    <nav className="customNavbar">
      <ul className="flex space-x-4">
        <li className="Navbar"></li>
        <li className="NavbarLogo"></li>
        <li className="customNavItem">
        <Link to="/" className=" flex items-center">
            {homeIcon}
            <span className="ml-2">Inicio</span>
          </Link>
        </li>
        <li className="customNavItem">
          <Link to="/nosotros" className="flex items-center">
          {aboutIcon}
            <span className="ml-2">Nosotros</span>
          </Link>
        </li>
        <li className="customNavItem">
          <Link to="/contacto" className="flex items-center">
            {contactIcon}
            <span className="ml-2">Contacto</span>
          </Link>
        </li>
        <li className="customNavItem">
          <Link to="/whatsapp" className="flex items-center">
            {whatsappIcon}
            <span className="ml-2">Whatsapp</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
