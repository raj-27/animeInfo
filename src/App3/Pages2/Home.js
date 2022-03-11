import React from "react";
import "../componen2 css/Home.css";
import AnimeList from "./AnimeList";

export default function Home() {
  return (
    <>
      <div className="container-fluid Home bg-dark">
        <div className="row d-flex justify-content-center align-items-center banner">
          <img
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpaperaccess.com%2Ffull%2F2917305.jpg&f=1&nofb=1"
            alt=""
            srcSet=""
            className="img-fluid"
          />
        </div>
      </div>
      <div>
        <AnimeList/>
      </div>
    </>
  );
}
