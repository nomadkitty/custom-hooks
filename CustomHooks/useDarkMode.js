// This hook need to work together with useLocalStorage hook

import { useLocalStorage } from "./useLocalStorage";
import  { useEffect } from "react";

export const useDarkMode = (key, initialValues) => {
  const [darkMode, setDarkMode] = useLocalStorage(key, initialValues);

  useEffect(()=> {
    if (darkMode === true ) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode")
    }
  }, [darkMode]);

  return [darkMode, setDarkMode]
}

// Below is a Navbar component example to use this hook

import React from 'react';
import { useDarkMode } from "../hooks/useDarkMode";

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode("darkMode",false);
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className="navbar">
      <h1>Titile</h1>
      <div className="dark-mode__toggle" data-testid="dark-mode">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};
export default Navbar;

// Below is the CSS relating to this hook
// .navbar {
//   align-items: center;
//   border-bottom: 1px solid rgb(221, 221, 221);
//   display: flex;
//   height: 70px;
//   justify-content: space-between;
//   padding: 0 3%;
//   margin: 0 auto;
//   width: 92%;
//   -webkit-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
//   -moz-box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
//   box-shadow: 0px 2px 15px -8px rgba(0, 0, 0, 0.42);
// }

// .dark-mode {
//   color: #fff;
//   background-color: #313843;

//   .navbar {
//     background-color: #1F2022;
//     border: none;
//   }
// }

// .dark-mode__toggle {
//   background: papayawhip;
//   border-radius: 50px;
//   border: 1px solid black;
//   height: 20px;
//   position: relative;
//   width: 40px;
// }

// .toggle {
//   background: #f68819;
//   border-radius: 50px;
//   height: 20px;
//   left: 0;
//   position: absolute;
//   transition: 0.2s;
//   width: 20px;
// }

// .toggled {
//   left: 18px;
// }