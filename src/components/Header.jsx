import { Link } from "react-router-dom"
import logoImg from "../assets/logo.png"
import { useState } from "react";


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

  const lightModeIcon = (<svg xmlns="http://www.w3.org/2000/svg" className={`lucide lucide-sun-icon lucide-sun ${isDarkMode ? 'block' : 'hidden'}`} width="24" height="24" viewBox="0 0 24 24" fill="var(--heading-color)" stroke="var(--heading-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>)
  const darkModeIcon = (<svg xmlns="http://www.w3.org/2000/svg" className={`lucide lucide-moon-icon lucide-moon ${isDarkMode ? 'hidden' : 'block'}`} width="24" height="24" viewBox="0 0 24 24" fill="var(--bg-color)" stroke="var(--bg-color)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"/></svg>)

  return (
    <header className="h-21 fixed top-0 w-full">
      <div className="container mx-auto p-4">
        <div className="flex items-center justify-between">
          <div className="navbar-logo">
            <Link to="/">
              <img src={logoImg} alt="Logo" width="50" height="50" />
            </Link>
          </div>
          <div className="navbar-links hidden lg:flex">
            <ul className="flex space-x-4">
              <li>
                <Link to="/">About</Link>
              </li>
              <li>
                <Link to="/">Skills</Link>
              </li>
              <li>
                <Link to="/">Projects</Link>
              </li>
              <li>
                <Link to="/">Contact</Link>
              </li>
            </ul>
          </div>
          <div className="flex items-center space-x-4 lg:space-x-0">
            <div className="toggle-mode bg-[#ffffff2e] p-[5px] rounded-[50%]" onClick={toggleTheme}>
                {lightModeIcon}
                {darkModeIcon}
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


