import React from "react";
import { Badge } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleExclamation,
  faFire,
  faStar,
} from "@fortawesome/free-solid-svg-icons";
import "./MovieCard.style.css";

const MovieCard = ({ movie }) => {
  return (
    <div
      style={{
        backgroundImage:
          "url(" +
          `https://www.themoviedb.org/t/p/w600_and_h900_bestv2${movie.poster_path}` +
          ")",
      }}
      className="movie-card"
    >
      <div className="overlay">
        <h1>{movie.title}</h1>
        {movie.genre_ids.map((id) => (
          <Badge bg="danger">{id}</Badge>
        ))}
        <div className="movie-info">
          <div>
            <FontAwesomeIcon icon={faStar} style={{ color: "#FFD700" }} />
            {movie.vote_average.toFixed(1)}
          </div>
          <div>
            {" "}
            <FontAwesomeIcon icon={faFire} style={{ color: "orangered" }} />
            {movie.popularity}
          </div>
          <div>
            <FontAwesomeIcon
              icon={faCircleExclamation}
              style={{ color: "red" }}
            />
            {movie.adult ? "over18" : "under18"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
