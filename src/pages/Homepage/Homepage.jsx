import React from "react";
import Banner from "./components/Banner/Banner";
import PopularMovieSlide from "./components/PopularMovieSlide/PopularMovieSlide";
import "./Homepage.style.css";
import TopRatedMovie from "./components/TopRatedMovie/TopRatedMovie";
import UpcomingMovie from "./components/UpcomingMovie/UpcomingMovie";

// 1. 배너 => popular 영화를 들고와서 첫번째 아이템을 보여주자
// 2. popular movie
// 3. top rated movie
// 4. upcoming movie

const Homepage = () => {
  return (
    <div className="homepage-wrap">
      <Banner />
      <PopularMovieSlide />
      <TopRatedMovie />
      <UpcomingMovie />
    </div>
  );
};

export default Homepage;
