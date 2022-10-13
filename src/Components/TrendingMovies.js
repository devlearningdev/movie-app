import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Card from "./Card";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingMovies = () => {
  const [trendingMovies, setTrendingMovies] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/all/week?api_key=b28a53f206c15a63a8c1de7477017045"
      )
      .then((res) => {
        setTrendingMovies(res.data.results);
      });
  }, []);

  //MAP
  const movieToShow = trendingMovies.map((item) => {
    return <Card key={item.id} item={item} />;
  });

  function SimpleSlider() {
    var settings = {
      dots: false,
      infinite: false,
      speed: 500,
      slidesToShow: 15,
      slidesToScroll: 15,
      responsive: [
        {
          breakpoint: 3200,
          settings: {
            slidesToShow: 13,
            slidesToScroll: 13,
          },
        },
        {
          breakpoint: 2800,
          settings: {
            slidesToShow: 11,
            slidesToScroll: 11,
          },
        },
        {
          breakpoint: 2435,
          settings: {
            slidesToShow: 10,
            slidesToScroll: 10,
          },
        },
        {
          breakpoint: 2200,
          settings: {
            slidesToShow: 9,
            slidesToScroll: 9,
          },
        },
        {
          breakpoint: 1990,
          settings: {
            slidesToShow: 8,
            slidesToScroll: 8,
          },
        },
        {
          breakpoint: 1780,
          settings: {
            slidesToShow: 7,
            slidesToScroll: 7,
          },
        },
        {
          breakpoint: 1595,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
          },
        },
        {
          breakpoint: 1350,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 1210,
          settings: {
            slidesToShow: 6,
            slidesToScroll: 6,
          },
        },
        {
          breakpoint: 1100,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 5,
          },
        },
        {
          breakpoint: 950,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4,
          },
        },
        {
          breakpoint: 500,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },

        {
          breakpoint: 450,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        /*{
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2,
          },
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },*/
      ],
    };
    return <Slider {...settings}>{movieToShow}</Slider>;
  }

  return (
    <div>
      <div className="title-div">
        <h3>🚀 Trending this week</h3>
      </div>
      {/*<div className="trending-movies-container">{movieToShow}</div>*/}
      <div className="slider-container">
        <SimpleSlider />
      </div>
    </div>
  );
};

export default TrendingMovies;
