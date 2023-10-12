import React from 'react';
import { getMovies } from '../utils/movies';
import Nav from '../components/Nav';

export function getAllMovies() {
  return getMovies();
}

export function Movies({ useLoader }) {
  const movies = useLoader();
  return (
    <div>
      <Nav/>
      <h1>This is the Movies component</h1>
      {movies.map((m: any) => (
        <div key={m.id}>
          <h2>{m.title}</h2>
          <p>{m.overview}</p>
        </div>
      ))}
    </div>
  );
}
