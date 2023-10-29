import { Heading } from "@chakra-ui/react";

export default function ActorName({ props: { actorName }}) {
  return (
    <Heading fontSize="4xl">
      {actorName}
    </Heading>
  );
}