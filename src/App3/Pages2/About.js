import React from "react";
import "../componen2 css/Home.css";
export default function About() {
  return (
    <>
      <div className="container about-container">
        <div className="row mx-auto d-flex justify-content-center align-items-center my-4">
          <div className="profile-pic col-12 col-md-5 col-sm-5 col-lg-5">
            <img src="/images/profile_pic.jpg" className="img-fluid display-1 rounded-circle" alt="" />
          </div>
          <div className="about-info col-12 col-md-5 col-sm-5 col-lg-5  ">
            <p>
              This site is all aboout Anime information and render detail
              information like how many episode,character,genre and etc . I
              creates this site for Project Purpose which i built in React js
              Hope You Like My design or If you have any feedback about my site
              you cantact me through below mention social media links.
            </p>
            <ul className="d-flex">
              <li className="lead mx-1">
                <a href="https://www.linkedin.com/in/rajyadav27/" target='_blank' >
                  <i className="uil uil-linkedin"></i>
                </a>
              </li>
              <li className="lead mx-1">
                <a href="https://wa.me/9892603606" target='_blank' >
                <i className="uil uil-whatsapp text-success"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
