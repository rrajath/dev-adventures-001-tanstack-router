import { Box } from '@chakra-ui/react';
import { getActor } from '../utils/actors';
import ActorName from '../components/ActorName';

export function getActorDetail({ params: { actorId }}) {
  const id = Number(actorId);
  const actor = getActor(id);
  return actor;
}

export default function ActorDetail({ useLoader }) {
  const actorDetail = useLoader(ActorDetail);
  return (
    <Box m={4}>
      <ActorName props={{ actorName: actorDetail.name }}/>
      <p>
        {actorDetail.age}
      </p>
    </Box>
  )
}
