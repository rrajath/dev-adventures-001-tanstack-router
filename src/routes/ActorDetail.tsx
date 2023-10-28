import { getActor } from '../utils/actors';

export function getActorDetail({ params: { actorId }}) {
  const id = Number(actorId);
  const actor = getActor(id);
  return actor;
}

export default function ActorDetail({ useLoader }) {
  const actorDetail = useLoader(ActorDetail);
  return (
    <div>
    <h1>
      {actorDetail.name}
    </h1>
    <p>
      {actorDetail.age}
    </p>
  </div>
  )
}
