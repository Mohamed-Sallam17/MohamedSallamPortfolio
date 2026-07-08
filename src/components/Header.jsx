import { Link } from "react-router-dom"
import logoImg from "../assets/logo.png"
import { useState } from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";


function Header() {
  const [isDarkMode, setIsDarkMode ] = useState(true);
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode)
    if(!isDarkMode){
      document.documentElement.classList.add("dark");
    }else{
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <header className="h-21 fixed top-0 w-full z-2 flex justify-center items-center backdrop-blur-3xl">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logoImg} alt="Logo" width="120" height="100" />
            </Link>
          </div>
          <div className="navbar-links hidden lg:flex">
            <ul className="flex space-x-4">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#skills">Skills</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-4 lg:space-x-0">
            <div className="toggle-mode bg-[#ffffff2e] p-[5px] rounded-[50%]" onClick={toggleTheme}>
              <MdSunny className={`${isDarkMode ? 'block' : 'hidden'} text-xl`} />
              <FaMoon className={`${isDarkMode ? 'hidden' : 'block'} text-xl`} />
                {/* {lightModeIcon}
                {darkModeIcon} */}
            </div>
            <div className="toggle-menu lg:hidden">
              <svg fill="#EEEEEE" width="30" height="30" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg">
                <title>bars</title>
                <path d="M2 8.749h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0zM30 15.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0zM30 23.25h-28c-0.414 0-0.75 0.336-0.75 0.75s0.336 0.75 0.75 0.75v0h28c0.414 0 0.75-0.336 0.75-0.75s-0.336-0.75-0.75-0.75v0z"></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header


