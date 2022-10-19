import React from "react";
import axios from "axios";

const HeroBanner = () => {
  const [trendingMovies, setTrendingMovies] = React.useState([]);
  const [displayWall, setDisplayWall] = React.useState([]);

  React.useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=b28a53f206c15a63a8c1de7477017045"
      )
      .then((res) => {
        setTrendingMovies(res.data.results);
      });
  }, []);

  const wallpapers = trendingMovies.map((item) => item.backdrop_path);

  function randomPick() {
    return wallpapers[Math.floor(Math.random() * wallpapers.length)];
  }

  setInterval(randomPick, 5000);

  //setInterval("console.log('eagle')", 5000);

  /*const wallpaperPath = setInterval(function random() {
    trendingMovies.map((item) => console.log(item.backdrop_path));
  }, 5000);*/

  return (
    <div className="hero-container">
      <img
        className="hero-img"
        src={`https://image.tmdb.org/t/p/original${randomPick()}`}
      ></img>
      <div className="hero-text">
        <h1 className="main-h1">Search Thousands of movies.</h1>
        {/*<p>Look for trending content, up-coming movies, top rated etc ...</p>*/}
      </div>
    </div>
  );
};

export default HeroBanner;

/*<img
        className="hero-image"
        src="https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg"
      ></img>*/
