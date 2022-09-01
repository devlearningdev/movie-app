import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Card from "./Card";
import Footer from "./Footer";

const SearchMovie = () => {
  const [movieList, setMovieList] = React.useState([]);

  //Récupérer la requête
  const [request, setRequest] = React.useState("");

  function handleChange(event) {
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

  const movieToShow = movieList.map((item) => {
    if (item.poster_path) {
      return <Card key={item.id} item={item} />;
    }
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
            {movieList.length > 0 ? (
              <h2>Results for "{request}":</h2>
            ) : (
              <h2>Sorry, no results for "{request}"</h2>
            )}
          </div>
          {movieList.length > 0 ? (
            <div className="search-movies-container">{movieToShow}</div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchMovie;
