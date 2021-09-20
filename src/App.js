import Navigation from 'Navigation/Navigation';
import HomePage from 'HomePage/HomePage';
import MoviesPage from './MoviesPage/MoviesPage';
import { Route, Switch } from 'react-router';

export default function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomePage />
        </Route>
        <Route path="/movies">
          <MoviesPage />
        </Route>
      </Switch>
    </>
  );
}
