import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TrendingMovies = () => {
  //Navigation vers "/movie-details":
  const navigate = useNavigate();

  function weNavigate() {
    return navigate("/movie-details");
  }

  const [trendingMovies, setTrendingMovies] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/day?api_key=b28a53f206c15a63a8c1de7477017045"
      )
      .then((res) => setTrendingMovies(res.data.results));
  }, []);

  const movieToShow = trendingMovies.map((item) => {
    return (
      <div key={item.id} className="movie-card">
        <img
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          onClick={weNavigate}
        ></img>
        <p
          className={
            item.vote_average >= 7.5
              ? "note-green"
              : item.vote_average <= 7.5 && item.vote_average >= 6
              ? "note-orange"
              : "note-red"
          }
        >
          {item.vote_average.toFixed(1)}/10
        </p>
      </div>
    );
  });

  return (
    <div>
      <div className="title-div">
        <h3>🚀 Trending</h3>
      </div>
      <div className="trending-movies-container">{movieToShow}</div>
    </div>
  );
};

export default TrendingMovies;
