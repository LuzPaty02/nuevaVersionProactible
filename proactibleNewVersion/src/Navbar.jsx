import React from "react";
import { Link } from "react-router-dom";
import { homeIcon, aboutIcon, contactIcon, whatsappIcon } from "./assets/iconPaths";
import logo1 from './assets/images/images/logo1.png';

export default function Navbar() {
  return (
    <nav className="customNavbar">
      <li className="NavbarLogo">
        <Link to="/">
          <img src={logo1} alt="logo" />
        </Link>
      </li>
      <ul className="customNavItems">
        <li className="customNavItem">
          <Link to="/" className="flex items-center">
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
