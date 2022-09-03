import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import TrendingMovies from "./TrendingMovies";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";

const MovieDetails = () => {
  const location = useLocation();
  const [trailers, setTrailers] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${location.state.id}/videos?api_key=b28a53f206c15a63a8c1de7477017045&language=en-US`
      )
      .then((res) => setTrailers(res.data.results));
  }, []);

  console.log(trailers);

  const officialTrailer = trailers.map((item) => {
    {
      return (
        item.name.match(/^Official Trailer$/) && (
          <iframe
            width="100%"
            height="315"
            src={`https://www.youtube.com/embed/${item.key}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        )
      );
    }
  });

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
          <br />

          <br />
          {officialTrailer}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
