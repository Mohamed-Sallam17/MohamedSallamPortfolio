import { Link } from "react-router-dom";
import logoImg from "/public/assets/logo.png";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

function Header() {
  const [isMobileMenu, SetIsMobileMenu] = useState(false);

  return (
    <header className="h-21 fixed top-0 w-full z-20 flex justify-center items-center backdrop-blur-3xl">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="navbar-logo">
            <Link to="/">
              <img src={logoImg} alt="Logo" width="120" height="100" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="navbar-links hidden lg:flex">
            <ul className="flex space-x-4">
              <li className="py-4">
                <a href="#about">About</a>
              </li>
              <li className="py-4">
                <a href="#skills">Skills</a>
              </li>
              <li className="py-4">
                <a href="#projects">Projects</a>
              </li>
              <li className="py-4">
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>


          <div className="flex items-center space-x-4 lg:space-x-0 lg:hidden">

            {/* <ThemeToggle /> */}


            <button
              type="button"
              className="toggle-menu lg:hidden cursor-pointer"
              onClick={() => SetIsMobileMenu(true)}
              aria-label="Open menu"
            >
              <svg
                fill="var(--text)"
                width="30"
                height="30"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>bars</title>
                <path d="M2 8.749h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-28c-0.414 0-0.75-0.336-0.75 0.75s0.336 0.75 0.75 0.75v0zM30 15.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM30 23.25h-28c-0.414 0-0.75-0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenu && (
        <MobileMenu
          isOpen={isMobileMenu}
          onClose={() => SetIsMobileMenu(false)}
        />
      )}
    </header>
  );
}

export default Header;