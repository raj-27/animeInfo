import React, { useContext, useEffect} from "react";
import { ThemeContext } from "./App3/Component 2/ThemeContext";
import "./App3/componen2 css/LandingPage.css";
import { authentication } from "./firebase";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

export default function LandingPage() {
  let { isLogin, setLogin, darkMode, setUserInfo } = useContext(ThemeContext);

 

  let loginWithGoogle = () => {
    let provider = new GoogleAuthProvider();
    signInWithPopup(authentication, provider).then((result) => {
      setLogin(result.user.emailVerified);
    });
  };

  return (
    <>
      <nav
        className={`navbar navbar-expand-lg ${
          darkMode ? "navbar-dark" : "navbar-light"
        }  ${darkMode ? "bg-dark" : "bg-light"}  my-navbar `}
      >
        <a className="navbar-brand" href="/">
          <img src="/images/landingLogo.png" alt="" className="img-fluid" />
        </a>
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
          <ul className="navbar-nav ml-auto sticky-top">
            <button
              className="btn btn-primary mt-2 my-sm-auto"
              onClick={loginWithGoogle}
            >
              Login
            </button>
          </ul>
        </div>
      </nav>
      <div className="container-fluid position-absolute banner-container overflow-hidden">
        <div className="row  justify-content-center align-items-center banner-row mx-auto">
          <div className="col-12 col-sm-12 col-md-5 col-lg-5">
            <img
              src="/images/Asta2.png"
              alt=""
              srcSet=""
              className="img-fluid d-inline-block"
            />
          </div>
          <div className="col-12 col-sm-12 col-md-5 col-lg-5  text-center">
            <h3>Benefits of Watching Anime</h3>
            <ul>
              <li>You learn new things.</li>
              <li>Anime feeds your imagination.</li>
              <li>How to draw an anime character!</li>
              <li>You create bonds. </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
