import { Heading } from "@chakra-ui/react";

export default function MovieName({ props: { movieName }}) {
  return (
    <Heading fontSize="4xl">
      {movieName}
    </Heading>
  );
}