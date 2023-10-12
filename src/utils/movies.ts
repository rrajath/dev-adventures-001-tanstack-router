import { buildMovies } from './database';
import { Movie } from './types';

let idCounter = 0;
let movies: Movie[] = buildMovies();

export function getMovies(q?: string) {
  if (!q) {
    return movies;
  }
  return movies.filter((m: Movie) => {
    return (
      m.title.toLowerCase().includes(q.toLowerCase()) ||
      m.overview.toLowerCase().includes(q.toLowerCase())
    );
  });
}

export function getMovie(id: number) {
  const movies = getMovies();
  const movie = movies.find((m: Movie) => Number(m.id) == id);
  return movie;
}

export function createMovie(updates: any) {
  idCounter++;
  movies.push({ ...updates, id: idCounter });
}

export function updateMovie(updates: any, id: number) {
  const movie = getMovie(id);
  Object.assign(movie, updates);
  return movie;
}

export function deleteMovie(id: number) {
  movies = movies.filter((m: Movie) => Number(m.id) != id);
}

export function favoriteMovie(id: number) {
  const movie = getMovie(id);
  if (!movie.favorite) {
    Object.assign(movie, { favorite: true });
  } else {
    Object.assign(movie, { favorite: false });
  }
}
