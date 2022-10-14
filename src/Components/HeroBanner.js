import React from "react";
import axios from "axios";

const HeroBanner = () => {
  return (
    <div className="hero-container">
      <img
        className="hero-img"
        src="https://www.xtrafondos.com/wallpapers/personajes-de-temporada-4-stranger-things-10323.jpg"
      ></img>
      <div className="hero-text">
        <h1>Search Thousands of movies.</h1>
        <p>Look for trending content, up-coming movies, top rated etc ...</p>
      </div>
    </div>
  );
};

export default HeroBanner;

/*<img
        className="hero-image"
        src="https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg"
      ></img>*/
