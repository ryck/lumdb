import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import PropTypes from "prop-types";

const POSTER_PATH = "http://image.tmdb.org/t/p/w154";

const Movie = ({ movie }) => (
  <Link to={`/${movie.id}`}>
    <Poster src={`${POSTER_PATH}${movie.poster_path}`} alt={movie.title} />
  </Link>
);

export default Movie;

Movie.PropTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired
  }).isRequired
};

export const Poster = styled.img`
  box-shadow: 0 0 35px black;
`;
