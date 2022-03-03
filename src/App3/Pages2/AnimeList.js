import React, { useState, useEffect, useContext } from "react";
import AnimeCard from "../Component 2/AnimeCard";
import '../componen2 css/AnimeList.css'
import { ThemeContext } from "../Component 2/ThemeContext";
import Loader from "./Loader";

export default function AnimeList() {
  let {darkMode, loading, setLoading } = useContext(ThemeContext);
  const [Animes, setAnimes] = useState("");
  const [Value, setValue] = useState("");
  const [Page, setPage] = useState(1);
  const [animeName, setAnimeName] = useState('')

  let fetchData=()=>{
    if (Value===null) {
      setLoading(false);
    } else {
      setLoading(true);
    }
    setAnimeName(Value)
    setValue('')
  }

  let inputValue = (e) => {
    setValue(e.target.value);
  };

  let icrementPage = () => {
    setPage(Page + 1);
    setLoading(true)
  };

  let decrementPage = () => {
    setPage(Page - 1);
    setLoading(true)
  };

  useEffect(async () => {
    let response = await fetch(
      `https://api.jikan.moe/v3/search/anime?q=${animeName}/Zero&page=${Page}`
    );
    let data = await response.json();
    setLoading(data.results===null);
    fetchAnime(data.results);
  }, [animeName, Page]);

  let fetchAnime = async (data) => {
    setAnimes(data);
  };


  return (
   
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <h4 className="text-center p-2">Anime List</h4>

          <div className="search-div d-flex justify-content-center ">
            <input
              className="search-input"
              autoComplete="true"
              value={Value}
              onChange={inputValue}
              placeholder="search anime..."
            />
            <i className="uil uil-search search-icon" onClick={fetchData}></i>
          </div>
          <div className="container-fluid ">
            <div className="row justify-content-center ">
              {Animes.length > 0 &&
                Animes.map((anime) => (
                  <AnimeCard key={anime.mal_id} anime={anime} />
                ))}
            </div>
            <div className="page-switcher">
              <div className="page-btn ">
                <button
                  className={`btn mx-5 mx-sm-5 ${
                    darkMode ? "bg-white" : "bg-dark"
                  } ${darkMode ? "text-dark" : "text-white"}`}
                  onClick={decrementPage}
                  disabled={Page===1?true:false}
                >
                  <i className="uil uil-arrow-left"></i>
                </button>
                <button
                  className={`btn mx-5 mx-sm-5 ${
                    darkMode ? "bg-white" : "bg-dark"
                  } ${darkMode ? "text-dark" : "text-white"}`}
                  onClick={icrementPage}
                  disabled={Page===20?true:false}
                >
                  <i className="uil uil-arrow-right"></i>
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
