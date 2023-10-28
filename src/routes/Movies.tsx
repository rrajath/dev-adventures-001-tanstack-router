import { getMovies } from '../utils/movies';
import Nav from '../components/Nav';
import { Link, Outlet } from '@tanstack/react-router';
import { movieDetailRoute } from '..';
import { Box, Flex } from '@chakra-ui/react';

export function getAllMovies() {
  return getMovies();
}

export function Movies({ useLoader }) {
  const movies = useLoader();
  return (
    <>
      <Nav/>
      <Flex direction={'row'}>
        <Box flex={1}>
          {movies.map((m: any) => (
            <div key={m.id}>
              <h2><Link to={movieDetailRoute.to} params={{ movieId: m.id }}>{m.title}</Link></h2>
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
