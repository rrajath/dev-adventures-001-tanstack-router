import { Box } from "@chakra-ui/react";
import { Link } from "@tanstack/react-router";
import { actorDetailRoute } from "..";

export default function ActorListItem({ props: { actorDetail }}) {
  return (
    <Box key={actorDetail.id} bg="facebook.400" m={4} rounded={"md"} p={4}>
      <Link
        activeProps={{ style: {color: 'coral' }}}
        to={actorDetailRoute.to}
        params={{ actorId: actorDetail.id }}
        >
          {actorDetail.name}
      </Link>
    </Box>
  )
}