import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import "../componen2 css/AnimeDetail.css";
import { ThemeContext } from "../Component 2/ThemeContext";
import Loader from "./Loader";

export default function AnimeDetail() {
  const { darkMode, loading, setLoading } = useContext(ThemeContext);
  const [Detail, setDetail] = useState([]);
  let params = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    fetch(`https://api.jikan.moe/v3/anime/${params.mal_id}`)
      .then((response) => response.json())
      .then((data) => {
        setLoading(!data.request_cached);
        setDetail(data);
      });
  }, []);

  let previuousPage = () => {
    navigate(-1);
  };

  let {
    image_url,
    members,
    episodes,
    duration,
    title_english,
    title_japanese,
    trailer_url,
    producers,
    genres,
    favorites,
    studios,
    Url,
    rank,
    title,
  } = Detail;
  console.log(trailer_url);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <>
          <div className="container-fluid anime-data">
          <button className="btn my-2" onClick={previuousPage}>
          <i className="uil uil-backward"></i>
          </button>
            <div className="row justify-content-center">
              <div className="col-12 col-lg-3 col-sm-5 col-md-4  anime-img-container  d-flex justify-content-center">
                <div className="img-box p-3">
                <img src={image_url} className="img-fluid" alt="" />
                </div>
              </div>
              <div className="col-12 col-lg-8 col-sm-7 col-md-8 anime-content-container ">
                <div className="row justidy-content-center ">
                  <span className="col-lg-3 col-sm-5 col-md-5 col-12 mx-1 my-3">
                    English Title : {title_english}
                  </span>
                  <span className="col-lg-3 col-sm-5 col-md-5 col-12 mx-1 my-3">
                    Japanese Title : {title_japanese}
                  </span>
                  <span className="col-lg-3 col-sm-5 col-md-5 col-12 mx-1 my-3">
                    Episodes: {episodes}
                  </span>
                  <span className="col-lg-3 col-sm-5 col-md-5 col-12 mx-1 my-3">
                    Members: {members}
                  </span>
                  <span className="col-lg-3 col-sm-5 col-md-5 col-12 mx-1 my-3">
                    Rank : {rank}
                  </span>
                  <span className="col-lg-3 col-sm-5 col-md-5 col-12 mx-1 my-3">
                    Duration : {duration}
                  </span>
                  <span className="col-lg-3 col-sm-5 col-md-5 col-12 mx-1 my-3">
                    Favorite: {favorites}
                  </span>
                  <span className="col-lg-3 col-sm-5 col-md-5 col-12 mx-1 my-3">
                    Producers :{" "}
                    {producers &&
                      producers.map((producer) => (
                        <span
                          className="m-1 d-inline-block"
                          key={producers.mal_id}
                        >
                          {producer.name},
                        </span>
                      ))}
                  </span>
                  <span className="col-lg-3 col-sm-5 col-md-5 col-12 mx-1 my-3">
                    Genres :{""}
                    {genres &&
                      genres.map((genre) => (
                        <span className="m-1 d-inline-block" key={genre.mal_id}>
                          {genre.name},
                        </span>
                      ))}
                  </span>
                  <span className="col-lg-3 col-sm-5 col-md-5 col-12 mx-1 my-3">
                    Studio :{" "}
                    {studios &&
                      studios.map((studio) => (
                        <span
                          className="m-1 d-inline-block"
                          key={studio.mal_id}
                        >
                          {studio.name}
                        </span>
                      ))}
                  </span>
                  <span className="col-12 mx-auto  video-container">
                    <iframe
                      className='video'
                      src={trailer_url}
                      title="YouTube video player"
                      alt="anime-video"
                      frameBorder="0"
                      allow="accelerometer;  clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    ></iframe>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
