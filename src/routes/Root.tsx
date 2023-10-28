import React from 'react';
import Nav from '../components/Nav';
import { Outlet } from '@tanstack/react-router';

function Root() {
  return (
    <div>
      <Nav/>
      <h1>This is the Root component</h1>
      <Outlet/>
    </div>
  );
}

export default Root;
