import { buildActors } from './database';
import { Actor } from './types';

let actors: Actor[] = buildActors();

export function getActors() {
  return actors;
}

export function getActor(id: number) {
  return actors.find((a: Actor) => Number(a.id) == id);
}
