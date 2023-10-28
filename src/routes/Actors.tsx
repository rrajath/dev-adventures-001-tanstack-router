import React from 'react';
import { buildActors } from '../utils/database';
import Nav from '../components/Nav';
import { Box, Flex } from '@chakra-ui/react';
import { Link, Outlet } from '@tanstack/react-router';
import { actorDetailRoute } from '..';

export function getActors() {
  return buildActors();
}

export default function Actors({ useLoader }) {
  const actors = useLoader();
  return (
    <>
      <Nav/>
      <Flex direction={'row'}>
      <Box flex={1}>
        {actors.map((a: any) => (
          <div key={a.id}>
            <Link to={actorDetailRoute.to} params={{ actorId: a.id }}>{a.name}</Link>
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
