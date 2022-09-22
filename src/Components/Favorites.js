import React from "react";
import { FavoriteContext } from "../Context";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Favorites() {
  const { favoriteArray, setFavoriteArray } = React.useContext(FavoriteContext);

  ////////////////////////////////////////////////////////////////////////////

  //Removing a movie from favorite Array:
  const favoritedMovies = favoriteArray.map((item) => {
    function handleRemove() {
      //alert(item.movie.id);

      const newArray = favoriteArray.filter(
        (film) => film.movie.id !== item.movie.id
      );
      setFavoriteArray(newArray);
    }

    //Navigation:
    /*const navigate = useNavigate();

    function weNavigate() {
      return navigate(`/movie-details/`, {
        state: {
          id: item.movie.id,
          title: item.movie.name || item.movie.title,
          img: item.movie.poster_path,
          overview: item.movie.overview,
          rating: item.movie.vote_average,
          reviewNumber: item.movie.vote_count,
          releaseDate: item.movie.release_date || item.movie.first_air_date,
        },
      });
    }*/

    //Displaying array of favorites:
    return (
      <div className="movie-card" key={item.movie.id}>
        <FontAwesomeIcon
          icon={faRemove}
          className="remove-cross"
          onClick={handleRemove}
        ></FontAwesomeIcon>

        <img
          className="movie-img"
          src={`https://image.tmdb.org/t/p/w500/${item.movie.poster_path}`}
          onClick={() => {
            weNavigate();
          }}
        ></img>
      </div>
    );
  });

  return (
    <div>
      <Navbar />
      {favoriteArray.length === 0 ? (
        <p className="favorites-title">You don't have any favorites</p>
      ) : (
        <p className="favorites-title">Your favorites</p>
      )}
      {favoriteArray.length > 0 && (
        <div className="favorite-movies-container">{favoritedMovies}</div>
      )}
    </div>
  );
}

export default Favorites;
