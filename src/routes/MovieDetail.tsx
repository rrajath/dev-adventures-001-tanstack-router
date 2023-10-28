import React from 'react';
import { getMovie } from '../utils/movies';
import Nav from '../components/Nav';

export function getMovieDetail({ params: { movieId } }) {
  const id = Number(movieId);
  const movie = getMovie(id);
  return movie;
}

export default function MovieDetail({ useLoader }) {
  const movieDetail = useLoader(MovieDetail);
  return (
    <div>
      <h1>
        {movieDetail.title}
      </h1>
      <p>
        {movieDetail.overview}
      </p>
    </div>
  );
};