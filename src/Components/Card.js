import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

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

  const [isFavorite, setIsFavorite] = React.useState(Boolean);

  function handleFavorite() {
    setIsFavorite((previousValue) => !previousValue);
  }

  // // // // // // // // // // // // // // // // // // // // // //////

  return (
    <div key={props.item.id} className="movie-card">
      <FontAwesomeIcon
        icon={faBookmark}
        onClick={handleFavorite}
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
        {props.item.vote_average.toFixed(1)}/10
      </p>
    </div>
  );
};

export default Card;