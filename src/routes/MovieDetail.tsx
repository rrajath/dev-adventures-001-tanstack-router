import React from 'react';
import { getMovie } from '../utils/movies';
import Nav from '../components/Nav';

export function getMovieDetail({ params: { movieId } }) {
  const id = Number(movieId);
  return getMovie(id);
}

export default function MovieDetail({ useLoader }) {
  const movieDetail = useLoader(MovieDetail);
  return (
    <div>
      <Nav/>
      {movieDetail.title}
    </div>
  );
};