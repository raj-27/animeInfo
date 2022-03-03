import React,{useContext}from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";

export default function AnimeCard(props) {
  let {darkMode,setLoading} = useContext(ThemeContext)
  let { image_url, title, mal_id } = props.anime;


  let activeLoader=()=>{
      setLoading(true)
  }
  return (
    <>
      <Link
        style={{textDecoration: "none",margin:'0 2px' }}
        to={`/anime/${mal_id}`}
        onClick={activeLoader}
        // className="mx-1"
      >
        <div className="col-sm-5 col-md-5 col-lg-3 col-12">

        <div className={`card m-1 ${darkMode?"bg-dark":"bg-white"}  product-card`} style={{ width: "20rem" }}>
          <img className="img-fluid" src={image_url} alt="Card_image" />
          <div className="card-body">
            <h5 className={`card-title  text-center ${darkMode?"text-white":"text-dark"}`}>
              <b>{title}</b>
            </h5>
          </div>
        </div>
        </div>
      </Link>
    </>
  );
}
