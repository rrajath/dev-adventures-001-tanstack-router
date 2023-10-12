import React from 'react';
import { buildActors } from '../utils/database';
import Nav from '../components/Nav';

export function getActors() {
  return buildActors();
}

export default function Actors({ useLoader }) {
  const actors = useLoader();
  return (
    <div>
      <Nav/>
      <h1>This is the Actors component</h1>
      {actors.map((a: any) => (
        <div key={a.id}>
          <h2>{a.name}</h2>
          <p>{a.age}</p>
        </div>
      ))}
    </div>
  );
}
