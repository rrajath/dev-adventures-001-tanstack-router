export type Movie = {
  id: string;
  title: string;
  overview: string;
  releaseDate: string;
  rating: number;
  favorite?: boolean;
  actors: Actor[];
};

export type Actor = {
  id: string;
  name: string;
  age: number;
};
