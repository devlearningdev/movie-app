import React from "react";
import Navbar from "./Navbar";
import axios from "axios";

const SearchMovie = () => {
  const [movieList, setMovieList] = React.useState([]);

  //Récupérer la requête
  const [request, setRequest] = React.useState("");

  function handleChange(event) {
    console.log(request);
    return setRequest(event.target.value);
  }
  //Envoyer la requête à l'API
  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=b28a53f206c15a63a8c1de7477017045&query=${request}`
      )
      .then((res) => setMovieList(res.data.results));
  });

  //Afficher la requête
  const showMovieList = movieList.map((item) => {
    return (
      <div key={item.id} className="search-movie-card ">
        <img
          src={
            item.poster_path &&
            `https://image.tmdb.org/t/p/w500/${item.poster_path}`
          }
        ></img>
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      <div className="search-body">
        <input
          type="text"
          value={request}
          onChange={handleChange}
          placeholder="Movie/Serie/TV Show"
        ></input>

        <div className={!request && "search-div"}>
          <div className="title-div">
            <h2>Results for "{request}":</h2>
          </div>
          <div className="search-movies-container">{showMovieList}</div>
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
