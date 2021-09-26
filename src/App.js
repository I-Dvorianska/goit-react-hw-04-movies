import { Route, Switch } from 'react-router';
import { lazy, Suspense } from 'react';
import AppBar from './AppBar/AppBar';

const HomePage = lazy(() => {
  import('./HomePage/HomePage.js');
});
const MoviesPage = lazy(() => {
  import('./MoviesPage/MoviesPage.js');
});
const MovieDetailsPage = lazy(() => {
  import('./MovieDetailsPage/MovieDetailsPage.js');
});

export default function App() {
  return (
    <>
      <AppBar />
      <Suspense fallback={<p>Loading...</p>}>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/movies" exact>
            <MoviesPage />
          </Route>
          <Route path="/movies/:movieId">
            <MovieDetailsPage />
          </Route>
        </Switch>
      </Suspense>
    </>
  );
}
