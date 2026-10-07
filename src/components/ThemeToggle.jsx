import { useEffect, useState } from "react";
import { MdSunny } from "react-icons/md";
import { FaMoon } from "react-icons/fa6";

function ThemeToggle() {
const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
    return savedTheme === "dark";
    }
    return true;
});

useEffect(() => {
    if (isDarkMode) {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
    } else {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
    }
}, [isDarkMode]);

const toggleTheme = () => {
    setIsDarkMode((prev) => !prev);
};

return (
    <button
    type="button"
    className="toggle-mode bg-[#ffffff2e] p-[5px] rounded-full cursor-pointer"
    onClick={toggleTheme}
    aria-label="Toggle theme"
    >
    <MdSunny
        className={`${isDarkMode ? "block" : "hidden"} text-xl`}
    />
    <FaMoon
        className={`${isDarkMode ? "hidden" : "block"} text-xl`}
    />
    </button>
);
}

export default ThemeToggle;