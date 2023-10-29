import { getMovies } from '../utils/movies';
import Nav from '../components/Nav';
import { Link, Outlet } from '@tanstack/react-router';
import { movieDetailRoute } from '..';
import { Box, Flex } from '@chakra-ui/react';
import MovieListItem from '../components/MovieListItem';

export function getAllMovies() {
  return getMovies();
}

export function Movies({ useLoader }) {
  const movies = useLoader();
  return (
    <>
      <Nav/>
      <Flex direction={'row'}>
        <Box flex={3}>
          {movies.map((m: any) => (
            <div key={m.id}>
              <MovieListItem props={{ movieDetail: m }}/>
            </div>
          ))}
        </Box>
        <Box flex={10}>
          <Outlet/>
        </Box>
      </Flex>
    </>
  );
}
