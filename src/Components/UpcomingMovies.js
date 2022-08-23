import React from "react";
import axios from "axios";
import Card from "./Card";

const UpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/movie/upcoming?api_key=b28a53f206c15a63a8c1de7477017045&language=en-US&page=1"
      )
      .then((res) => setUpcomingMovies(res.data.results));
  }, []);

  const upComing = upcomingMovies.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  return (
    <div>
      <div className="title-div">
        <h3>⏳ Upcoming Movies</h3>
      </div>
      <div className="trending-movies-container">{upComing}</div>
    </div>
  );
};

export default UpcomingMovies;
