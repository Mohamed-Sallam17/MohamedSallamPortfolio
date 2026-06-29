import { Link } from "react-router-dom"
import logoImg from "../assets/logo.png"


function Header() {
  return (
    <header className="h-21">
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
            <div className="toggle-mode">
              <div className="ligth-mode-icon">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 64 64"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlns:xlink="http://www.w3.org/1999/xlink"
                  aria-hidden="true"
                  role="img"
                  class="iconify iconify--emojione"
                  preserveAspectRatio="xMidYMid meet"
                >
                  <g fill="#ffe62e">
                    <path d="M20.5 59.7l7-7.2c-2.5-.5-4.8-1.5-6.9-2.9l-.1 10.1"></path>
                    <path d="M43.5 4.3l-7 7.2c2.5.5 4.8 1.5 6.9 2.9l.1-10.1"></path>
                    <path d="M4.3 43.5l10.1-.1C13 41.3 12 39 11.5 36.5l-7.2 7"></path>
                    <path d="M59.7 20.5l-10.1.1c1.3 2.1 2.3 4.4 2.9 6.9l7.2-7"></path>
                    <path d="M4.3 20.5l7.2 7c.5-2.5 1.5-4.8 2.9-6.9l-10.1-.1"></path>
                    <path d="M59.7 43.5l-7.2-7c-.5 2.5-1.5 4.8-2.9 6.9l10.1.1"></path>
                    <path d="M20.5 4.3l.1 10.1c2.1-1.3 4.4-2.3 6.9-2.9l-7-7.2"></path>
                    <path d="M43.5 59.7l-.1-10.1C41.3 51 39 52 36.5 52.5l7 7.2"></path>
                  </g>
                  <g fill="#ffce31">
                    <path d="M14.8 44l-4 9.3l9.3-4C18 47.8 16.2 46 14.8 44"></path>
                    <path d="M49.2 20l4-9.3l-9.2 4c2 1.5 3.8 3.3 5.2 5.3"></path>
                    <path d="M11.4 28.3L2 32l9.4 3.7c-.3-1.2-.4-2.4-.4-3.7s.1-2.5.4-3.7"></path>
                    <path d="M52.6 35.7L62 32l-9.4-3.7c.2 1.2.4 2.5.4 3.7c0 1.3-.1 2.5-.4 3.7"></path>
                    <path d="M20 14.8l-9.3-4l4 9.3c1.5-2.1 3.3-3.9 5.3-5.3"></path>
                    <path d="M44 49.2l9.3 4l-4-9.3C47.8 46 46 47.8 44 49.2"></path>
                    <path d="M35.7 11.4L32 2l-3.7 9.4c1.2-.2 2.5-.4 3.7-.4s2.5.1 3.7.4"></path>
                    <path d="M28.3 52.6L32 62l3.7-9.4c-1.2.3-2.4.4-3.7.4s-2.5-.1-3.7-.4"></path>
                    <circle cx="32" cy="32" r="19"></circle>
                  </g>
                </svg>
              </div>
              <div className="dark-mode-icon hidden">
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 24 24"
                  fill="#EEEEEE"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13 6V3M18.5 12V7M14.5 4.5H11.5M21 9.5H16M15.5548 16.8151C16.7829 16.8151 17.9493 16.5506 19 16.0754C17.6867 18.9794 14.7642 21 11.3698 21C6.74731 21 3 17.2527 3 12.6302C3 9.23576 5.02061 6.31331 7.92462 5C7.44944 6.05072 7.18492 7.21708 7.18492 8.44523C7.18492 13.0678 10.9322 16.8151 15.5548 16.8151Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
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


