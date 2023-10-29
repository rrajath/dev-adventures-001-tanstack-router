import React from 'react';
import { getMovie } from '../utils/movies';
import Nav from '../components/Nav';
import MovieName from '../components/MovieName';
import { Box, Spacer } from '@chakra-ui/react';

export function getMovieDetail({ params: { movieId } }) {
  const id = Number(movieId);
  const movie = getMovie(id);
  return movie;
}

export default function MovieDetail({ useLoader }) {
  const movieDetail = useLoader(MovieDetail);
  return (
    <Box m={4}>
      <MovieName props={{ movieName: movieDetail.title }}/>
      <p>
        {movieDetail.overview}
      </p>
    </Box>
  );
};