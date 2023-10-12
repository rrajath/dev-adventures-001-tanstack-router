import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { RootRoute, Route, Router, RouterProvider } from '@tanstack/react-router';
import { getMovieDetail } from './routes/MovieDetail';
import Root from './routes/Root';
import MovieDetail from './routes/MovieDetail';
import { Movies, getAllMovies } from './routes/Movies';
import Actors, { getActors } from './routes/Actors';
import { ChakraProvider } from '@chakra-ui/react';

let rootRoute = new RootRoute();

const indexRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/',
  component: Root,
});

const moviesRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/movies',
  component: Movies,
  loader: getAllMovies
})

const movieDetailRoute = new Route({
  getParentRoute: () => moviesRoute,
  path: '/movies/$movieId',
  component: MovieDetail,
  loader: getMovieDetail
});

const actorsRoute = new Route({
  getParentRoute: () => rootRoute,
  path: '/actors',
  component: Actors,
  loader: getActors,
})

const routeTree = rootRoute.addChildren([
  indexRoute,
  actorsRoute,
  moviesRoute.addChildren([
    movieDetailRoute,
  ])
]);

const router = new Router({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ChakraProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </ChakraProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
