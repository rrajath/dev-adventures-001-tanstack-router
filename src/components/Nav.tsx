import { Box, Button } from "@chakra-ui/react"
import { Link } from "@tanstack/react-router";

export default function Nav() {
  return (
    <Box p={4}>
      <Button as={Link} to="/" m={2} colorScheme="teal">Home</Button>
      <Button as={Link} to="/movies" m={2} colorScheme="blue">Movies</Button>
      <Button as={Link} to="/actors" m={2} colorScheme="orange">Actors</Button>
    </Box>
  );
}
