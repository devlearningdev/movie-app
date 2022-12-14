import "./App.css";
import TrendingMovies from "./Components/TrendingMovies";
import TopRatedTvShows from "./Components/TopRatedTvShows";
import Navbar from "./Components/Navbar";
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import SearchMovie from "./Components/SearchMovie";
import MovieDetails from "./Components/MovieDetails";
import Favorites from "./Components/Favorites";
import FavoriteProvider, { FavoriteContext } from "./Context";

function App() {
  return (
    <div className="App">
      <FavoriteProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/search-movie" element={<SearchMovie />}></Route>
            <Route path="*" element={<Home />}></Route>
            <Route path="/movie-details" element={<MovieDetails />}></Route>
            <Route path="/favorite-movies" element={<Favorites />}></Route>
          </Routes>
        </BrowserRouter>
      </FavoriteProvider>
    </div>
  );
}

export default App;
