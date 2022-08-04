import React from "react";
import axios from "axios";

const TopRatedTvShows = () => {
  const [topRated, setTopRated] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=b28a53f206c15a63a8c1de7477017045&language=en-US&page=1"
      )
      .then((res) => setTopRated(res.data.results));
  }, []);

  const movieTitle = topRated.map((item) => {
    return (
      <div key={item.id} className="movie-card ">
        <img src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}></img>
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
    <div className="top-rated-container">
      <div className="title-div">
        <h3>⭐ TMDB Top Rated</h3>
      </div>
      <div className="trending-movies-container">{movieTitle}</div>
    </div>
  );
};

export default TopRatedTvShows;
