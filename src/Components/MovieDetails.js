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
  const [showReviews, setShowReviews] = React.useState(false);
  const [showTrailer, setShowTrailer] = React.useState(false);
  //const [watchProvider, setWatchProvider] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${location.state.id}/videos?api_key=b28a53f206c15a63a8c1de7477017045&language=en-US`
      )
      .then((res) => setTrailers(res.data.results));
  }, []);

  const officialTrailer = trailers.map((item) => {
    {
      return (
        item.name.match(/^Official Trailer$/) && (
          <iframe
            width="100%"
            height="350"
            src={`https://www.youtube.com/embed/${item.key}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="youtube-content"
          ></iframe>
        )
      );
    }
  });

  /* React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${location.state.id}/watch/providers?api_key=b28a53f206c15a63a8c1de7477017045`
      )
      .then((res) => console.log(setWatchProvider(res.data.results.US.buy)));
  }, []);

  const provider = watchProvider?.map((item) => {
    {
      return (
        <img
          className="logo-provider"
          src={`https://image.tmdb.org/t/p/original${item.logo_path}`}
        ></img>
      );
    }
  });*/

  function handleReviewClick() {
    setShowReviews((previousValue) => !previousValue);
  }

  function handleShowTrailer() {
    setShowTrailer((previousValue) => !previousValue);
  }

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
            <span className="grayish-text">{location.state.overview}</span>
            <br />
            <br />
            <hr className="separator" />
            <br />
            <span>
              ⭐ {location.state.rating.toFixed(1)}{" "}
              <span className="grayish-text">
                / <strong>10 </strong> (
                <u onClick={handleReviewClick}>
                  {location.state.reviewNumber} reviews
                </u>
                )
              </span>
            </span>
          </p>
          <br />

          <div className="trailer-container" onClick={handleShowTrailer}>
            <h4>Watch Trailer</h4>
            {showTrailer && officialTrailer}
          </div>
        </div>
      </div>
      {showReviews && <div className="reviews-container">hello</div>}
    </div>
  );
};

export default MovieDetails;
