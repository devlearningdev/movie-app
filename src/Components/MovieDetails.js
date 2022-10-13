import React from "react";
import Card from "./Card";
import Navbar from "./Navbar";
import TrendingMovies from "./TrendingMovies";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer";
import axios from "axios";
import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
////////////////////////////////////////////////////////////////////
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Loading from "./Loading";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import StarIcon from "@mui/icons-material/Star";

const MovieDetails = () => {
  const location = useLocation();
  const [trailers, setTrailers] = React.useState([]);
  const [reviews, setReviews] = React.useState([]);
  const [showReviews, setShowReviews] = React.useState(false);
  const [showTrailer, setShowTrailer] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${location.state.id}/videos?api_key=b28a53f206c15a63a8c1de7477017045&language=en-US`
      )
      .then((res) => setTrailers(res.data.results));
  }, []);

  const officialTrailer = trailers.map((item) => {
    {
      return (
        item.type === "Trailer" && (
          <iframe
            width="100%"
            height="350"
            src={`https://www.youtube.com/embed/${item.key}`}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
            className="youtube-content"
          ></iframe>
        )
      );
    }
  });

  React.useEffect(() => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/${location.state.id}/reviews?api_key=b28a53f206c15a63a8c1de7477017045&language=en-US&page=1`
      )
      .then((res) => setReviews(res.data.results));
  }, []);

  //console.log(reviews);

  const displayReviews = reviews.map((item) => {
    return (
      <fieldset>
        <legend className="pseudo">
          <strong>{item.author}'s review : </strong>
          <span
            className={
              item.author_details.rating != null
                ? item.author_details.rating >= 7.5
                  ? "review-note-green"
                  : item.author_details.rating <= 7.5 &&
                    item.author_details.rating >= 6
                  ? "review-note-orange"
                  : "review-note-red"
                : ""
            }
          >
            {item.author_details.rating && `${item.author_details.rating} /10`}
          </span>
        </legend>
        <FontAwesomeIcon icon={faQuoteLeft} className="guillemet">
          {" "}
        </FontAwesomeIcon>
        <span> </span>
        <i>{item.content}</i>
        <span> </span>
        <FontAwesomeIcon
          icon={faQuoteRight}
          className="guillemet"
        ></FontAwesomeIcon>
      </fieldset>
    );
  });

  function handleShowTrailer() {
    setShowTrailer((previousValue) => !previousValue);
  }

  const style = {
    position: "absolute",
    top: "40%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "auto",
    bgcolor: "rgba(0, 0, 0, 0.833)",
    border: "2px solid #000",
    boxShadow: 24,
    p: 0,
    borderRadius: 3,
  };

  function BasicModal() {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
      <div>
        💭
        <span
          onClick={reviews.length > 0 && handleOpen}
          className={
            reviews.length > 0 ? "reviews-word" : "reviews-word-disabled"
          }
        >
          {" "}
          {reviews.length > 0
            ? reviews.length > 1
              ? ` ${reviews.length} persons reviewed this movie.`
              : ` ${reviews.length} person reviewed this movie.`
            : "No review available."}
        </span>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            {/*<Typography id="modal-modal-title" variant="h6" component="h2">
              Text in a modal
    </Typography>*/}
            <Typography
              id="modal-modal-description"
              className="reviews-container "
              sx={{ mt: 2 }}
            >
              {displayReviews}
            </Typography>
          </Box>
        </Modal>
      </div>
    );
  }

  return (
    <div>
      <Navbar />

      <div className="parent">
        {" "}
        <div className="div1">
          <img
            src={`https://image.tmdb.org/t/p/w1280/${location.state.img}`}
            className="movie-details-image"
          ></img>
        </div>
        <div className="div2">
          <h2>{location.state.title}</h2>
          <p>
            <span className="grayish-text">{location.state.overview}</span>
            <br />
            <br />
            <hr className="separator" />
            <br />
            <span>
              ⭐ {location.state.rating.toFixed(1)}{" "}
              <span className="grayish-text">
                {" "}
                / <strong>10 </strong> ( {location.state.reviewNumber} notes)
              </span>
            </span>
            {/*<Stack spacing={1}>
              <Rating
                name="half-rating-read"
                defaultValue={Number(location.state.rating.toFixed(1) / 2)}
                precision={0.01}
                readOnly
                emptyIcon={
                  <StarIcon style={{ opacity: 0.5 }} fontSize="inherit" />
                }
                styles={{ color: "green" }}
              />
              </Stack>*/}
          </p>

          <p>
            <span>🍿</span>
            <strong> Release Date:</strong>{" "}
            <span className="grayish-text">
              {location.state.releaseDate
                ? location.state.releaseDate + "."
                : "Unknown"}{" "}
            </span>
          </p>
          <BasicModal />
          <br />
          {officialTrailer.length > 0 ? (
            <div className="trailer-container" onClick={handleShowTrailer}>
              {officialTrailer.length > 1 ? (
                <h4>Official Trailers</h4>
              ) : (
                <h4>Official Trailer</h4>
              )}
              {showTrailer && officialTrailer}
            </div>
          ) : (
            <div className="no-trailer-container">
              <h4>No official trailer</h4>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetails;
