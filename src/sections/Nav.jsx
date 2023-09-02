import { hamburger } from "../assets/icons";
import { headerLogo } from "../assets/images";
import { navLinks } from "../constants";
import { BsSun, BsMoonFill } from "react-icons/bs";
import { useState,useEffect } from 'react';


const Nav = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const handleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <header className="padding-x py-8 absolute z-10 w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex flex-1  justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-gray "
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <button className="text-3xl  dark:text-white" onClick={handleTheme}>
            {" "}
            {darkMode ? <BsMoonFill /> : <BsSun />}
          </button>
        </div>

        <div className="hidden max-lg:block dark:bg-white">
          <img src={hamburger} alt="menu" width={25} height={25} />
        </div>
      </nav>
    </header>
  );
};

export default Nav;
