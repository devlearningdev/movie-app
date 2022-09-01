import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { FavoriteContext } from "../Context";

const Card = (props) => {
  //Navigation vers "/movie-details":
  const navigate = useNavigate();

  function weNavigate() {
    return navigate(`/movie-details/`, {
      state: {
        id: props.item.id,
        title: props.item.name || props.item.title,
        img: props.item.poster_path,
        overview: props.item.overview,
        rating: props.item.vote_average,
        reviewNumber: props.item.vote_count,
      },
    });
  }

  // Mise en favoris.

  const { addToFavorites } = React.useContext(FavoriteContext);

  const [isFavorite, setIsFavorite] = React.useState(Boolean); // State stylistique

  //Handling click on bookmark.
  function handleBookmarkColor() {
    setIsFavorite((previousValue) => !previousValue); // bookmark style from gray to yellow

    if (isFavorite === false) {
      addToFavorites(props.item);
    }
    //!isFavorite && addToFavorites(props.item);
  }

  // // // // // // // // // // // // // // // // // // // // // //////

  return (
    <div key={props.item.id} className="movie-card">
      <FontAwesomeIcon
        icon={faBookmark}
        onClick={handleBookmarkColor}
        className={isFavorite ? "star-favorite" : "bookmark"}
      ></FontAwesomeIcon>
      <img
        className="movie-img"
        src={`https://image.tmdb.org/t/p/w500/${props.item.poster_path}`}
        onClick={() => {
          weNavigate();
        }}
      ></img>
      <p
        className={
          props.item.vote_average >= 7.5
            ? "note-green"
            : props.item.vote_average <= 7.5 && props.item.vote_average >= 6
            ? "note-orange"
            : "note-red"
        }
      >
        {props.item.vote_average.toFixed(1)}
        <span className="over-ten"></span>
      </p>
    </div>
  );
};

export default Card;
