import React from "react";
import "./MovieSlider.style.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container } from "react-bootstrap";
import useWindowWidth from "../../hooks/useWindowWidth";
import MovieCard from "../MovieCard/MovieCard";

const MovieSlider = ({ title, movies, responsive }) => {
  const width = useWindowWidth();
  const isMobileOrTablet = width <= 1024;

  return (
    <Container>
      <h3>{title}</h3>
      <Carousel
        infinite={true}
        centerMode={!isMobileOrTablet}
        arrows={!isMobileOrTablet}
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {movies.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </Container>
  );
};

export default MovieSlider;
