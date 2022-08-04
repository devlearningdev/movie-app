import React from "react";
import Navbar from "./Navbar";
import TopRatedTvShows from "./TopRatedTvShows";
import TrendingMovies from "./TrendingMovies";

const Home = () => {
  return (
    <div>
      <Navbar />
      <TrendingMovies />
      <TopRatedTvShows />
    </div>
  );
};

export default Home;
