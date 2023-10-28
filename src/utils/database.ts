import { Movie } from './types';

const alPacino = buildAlPacino();
const diCaprio = buildDiCaprio();

export function buildMovies() {
  const godfather: Movie = {
    id: '1',
    title: 'The Godfather',
    overview:
      'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
    releaseDate: '1972-03-24',
    rating: 8.7,
    actors: [alPacino],
  };

  const titanic: Movie = {
    id: '2',
    title: 'Titanic',
    overview:
      'A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the ill-fated R.M.S. Titanic.',
    releaseDate: '1997-11-01',
    rating: 7.9,
    actors: [diCaprio],
  };

  return [godfather, titanic];
}

export function buildActors() {
  return [alPacino, diCaprio];
}

function buildAlPacino() {
  return {
    id: '10',
    name: 'Al Pacino',
    age: 55,
  };
}

function buildDiCaprio() {
  return {
    id: '20',
    name: 'DiCaprio',
    age: 48,
  };
}
