import React from "react";
import { Alert } from "bootstrap";
import MovieSlider from "../../../../common/MovieSlider/MovieSlider";
import { responsive } from "../../../../constants/responsive";
import { useTopRatedMoviesQuery } from "../../../../hooks/useTopRatedMovies";

const TopRatedMovie = () => {
  const { data, isLoading, isError, error } = useTopRatedMoviesQuery();

  if (isLoading) return <h1>Loading...</h1>;

  if (isError) return <Alert variant="danger">{error.message}</Alert>;
  return (
    <div>
      <MovieSlider
        title="Top Rated Movie"
        movies={data.results}
        responsive={responsive}
      />
    </div>
  );
};

export default TopRatedMovie;
