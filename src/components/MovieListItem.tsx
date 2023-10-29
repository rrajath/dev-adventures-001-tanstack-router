import { Box } from '@chakra-ui/react';
import { Link } from '@tanstack/react-router';
import React from 'react';
import { movieDetailRoute } from '..';

export default function MovieListItem({ props: { movieDetail }}) {
  return (
    <Box key={movieDetail.id} bg="facebook.400" m={4} rounded={"md"} p={4}>
    <Link
      activeProps={{ style: {color: 'coral' }}}
      to={movieDetailRoute.to}
      params={{ movieId: movieDetail.id }}
      >
        {movieDetail.title}
    </Link>
  </Box>
  );
}
