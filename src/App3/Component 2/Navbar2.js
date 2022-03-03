import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "../componen2 css/Navbar2.css";
import { ThemeContext } from "./ThemeContext";

function Navbar2() {
  let { darkMode, setDarkMode,isLogin,setLogin } = useContext(ThemeContext);
  
  const ToggleTheme = () => {
    darkMode? setDarkMode(false) : setDarkMode(true);
  };

  let isLoggedIn = ()=> {
    setLogin(!isLogin)
  }

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? "navbar-dark" : "navbar-light"
        }  ${darkMode ? "bg-dark" : "bg-light"} sticky-top my-navbar`}
      >
        <Link className="navbar-brand" to="/">
          <img src="/images/LandingPageLogo.png" alt="" />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home <span className="sr-only">(current)</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="/anime">
                Anime
              </Link>
            </li>
          </ul>
          <div className="form-check form-switch justify-content-center align-items-center toggle mx-2">
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              <input
                className="form-check-input  toggle-input"
                type="checkbox"
                id="flexSwitchCheckDefault"
                checked={darkMode ? true : false}
                readOnly
                onClick={ToggleTheme}
              />
              <span className="toggle-btn"></span>
            </label>
          </div>
          <button className={`btn ${darkMode?'bg-white':'bg-dark'} ${darkMode?'text-dark':'text-light'} my-auto`} onClick={isLoggedIn}>{isLogin?'Logout':'Login'}</button>
        </div>
      </nav>
    </>
  );
}

export default Navbar2;
