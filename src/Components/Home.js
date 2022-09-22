import React from "react";
import Footer from "./Footer";
import HeroBanner from "./HeroBanner";
import Navbar from "./Navbar";
import TopRatedTvShows from "./TopRatedTvShows";
import TrendingMovies from "./TrendingMovies";
import UpcomingMovies from "./UpcomingMovies";

const Home = () => {
  return (
    <div>
      <Navbar />

      <HeroBanner />
      <TrendingMovies />
      <UpcomingMovies />
      <TopRatedTvShows />
      <Footer />
    </div>
  );
};

export default Home;
