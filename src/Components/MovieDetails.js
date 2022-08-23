import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import TrendingMovies from "./TrendingMovies";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const MovieDetails = () => {
  const location = useLocation();

  return (
    <div>
      <Navbar />

      <div className="parent">
        <div className="div1">
          <img
            src={`https://image.tmdb.org/t/p/original${location.state.img}`}
            className="movie-details-image"
          ></img>
        </div>
        <div className="div2">
          <h2>{location.state.title}</h2>

          <p>
            <span>{location.state.overview}</span>
            <br />
            <br />
            <hr className="separator" />
            <br />
            <span>
              ⭐ {location.state.rating.toFixed(1)} / <strong>10 </strong> (
              <u>{location.state.reviewNumber} reviews</u>)
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
