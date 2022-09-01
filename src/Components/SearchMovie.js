import React from "react";
import Navbar from "./Navbar";
import axios from "axios";
import Card from "./Card";
import Footer from "./Footer";

const SearchMovie = () => {
  const [movieList, setMovieList] = React.useState([]);

  //Récupérer la requête et la sauvegarder au refresh
  const [request, setRequest] = React.useState(() => {
    const saved = localStorage.getItem("request");
    const initialValue = JSON.parse(saved);
    return initialValue;
  });

  React.useEffect(() => {
    localStorage.setItem("request", JSON.stringify(request));
  }, [request]);

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
              <h3 className="title.div">Results for "{request}":</h3>
            ) : (
              <h3 className="title.div">Sorry, no results for "{request}"</h3>
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
