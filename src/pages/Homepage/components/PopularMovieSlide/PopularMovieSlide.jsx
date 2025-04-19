import React from "react";
import { usePopularMoviesQuery } from "../../../../hooks/usePopularMovies";
import { Alert } from "bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import MovieCard from "../MovieCard/MovieCard";
import "./PopularMovieSlide.style.css";
import { Container } from "react-bootstrap";
import useWindowWidth from "../../../../hooks/useWindowWidth";

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const PopularMovieSlide = () => {
  const width = useWindowWidth();
  const isMobileOrTablet = width <= 1024;

  const { data, isLoading, isError, error } = usePopularMoviesQuery();
  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <Alert variant="danger">{error.message}</Alert>;

  return (
    <Container>
      <h3>Popular Movies</h3>
      <Carousel
        infinite={true}
        centerMode={!isMobileOrTablet}
        arrows={!isMobileOrTablet}
        itemClass="carousel-item-padding-40-px"
        containerClass="carousel-container"
        responsive={responsive}
      >
        {data.results.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </Carousel>
    </Container>
  );
};

export default PopularMovieSlide;
