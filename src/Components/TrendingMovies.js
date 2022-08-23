import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "./Card";

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=b28a53f206c15a63a8c1de7477017045"
      )
      .then((res) => setTrendingMovies(res.data.results));
  }, []);

  //MAP
  const movieToShow = trendingMovies.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <div className="title-div">
        <h3>🚀 Trending this week</h3>
      </div>
      <div className="trending-movies-container">{movieToShow}</div>
    </div>
  );
};

export default TrendingMovies;
