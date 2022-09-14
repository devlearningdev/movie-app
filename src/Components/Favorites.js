import React from "react";
import { FavoriteContext } from "../Context";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Favorites() {
  const { favoriteArray, setFavoriteArray } = React.useContext(FavoriteContext);

  ////////////////////////////////////////////////////////////////////////////

  const favoritedMovies = favoriteArray.map((item) => {
    function handleRemove() {
      //console.log(item.movie.id);
      console.log(item.movie.id);

      /* setFavoriteArray((current) =>
        current.filter((film) => {
          return film.movie.id !== 532639;
        })
      );*/
    }

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
        <h3 className="title-div">You don't have any favorites</h3>
      ) : (
        <h3 className="title-div">Your favorite content :</h3>
      )}
      {favoriteArray.length > 0 && (
        <div className="favorite-movies-container">{favoritedMovies}</div>
      )}
    </div>
  );
}

export default Favorites;
