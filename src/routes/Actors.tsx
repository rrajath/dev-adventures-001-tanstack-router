import { buildActors } from '../utils/database';
import Nav from '../components/Nav';
import { Box, Flex } from '@chakra-ui/react';
import { Outlet } from '@tanstack/react-router';
import ActorListItem from '../components/ActorsListItem';

export function getActors() {
  return buildActors();
}

export default function Actors({ useLoader }) {
  const actors = useLoader();
  return (
    <>
      <Nav/>
      <Flex direction={'row'} p={4}>
      <Box flex={3}>
        {actors.map((a: any) => (
          <ActorListItem props={{ actorDetail: a }}/>
        ))}
      </Box>
      <Box flex={10}>
        <Outlet/>
      </Box>
      </Flex>
    </>
  );
}
