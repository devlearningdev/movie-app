import React from "react";
import axios from "axios";
import Card from "./Card";

const TopRatedTvShows = () => {
  const [topRated, setTopRated] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/tv/top_rated?api_key=b28a53f206c15a63a8c1de7477017045&language=en-US&page=1"
      )
      .then((res) => setTopRated(res.data.results));
  }, []);

  //MAP
  const movieToShow = topRated.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div className="top-rated-container">
      <div className="title-div">
        <h3>⭐ Top Rated</h3>
      </div>
      <div className="trending-movies-container">{movieToShow}</div>
    </div>
  );
};

export default TopRatedTvShows;
