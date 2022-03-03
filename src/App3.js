import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar2 from "./App3/Component 2/Navbar2";
import About from "./App3/Pages2/About";
import Home from "./App3/Pages2/Home";
import AnimeList from "./App3/Pages2/AnimeList";
import AnimeDetail from "./App3/Pages2/AnimeDetail";
import { ThemeContext } from "./App3/Component 2/ThemeContext";
import LandingPage from "./LandingPage";
import PageNotFound from './App3/Pages2/PageNotFound';

export default function App3() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) === true
  );
  const [isLogin, setLogin] = useState(
    JSON.parse(localStorage.getItem("isLogin")) === true
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (darkMode === false) {
      document.body.style.color = "#000";
      document.body.style.backgroundColor = "#fff";
    } else {
      document.body.style.color = "#fff";
      document.body.style.backgroundColor = "#000";
    }
    saveMode();
  }, [darkMode, isLogin]);

  let saveMode = () => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    localStorage.setItem("isLogin", JSON.stringify(isLogin));
  };

  return (
    <>
      <ThemeContext.Provider
        value={{darkMode,setDarkMode, isLogin, setLogin,loading,setLoading}}
      >
        {isLogin ? (
          <Router>
            <Navbar2 />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="anime" element={<AnimeList />} />
              <Route path="anime/:mal_id" element={<AnimeDetail />} />
              <Route path="*" element={<PageNotFound />} />
            </Routes>
          </Router>
        ) : (
          <LandingPage />
        )}
      </ThemeContext.Provider>
    </>
  );
}
