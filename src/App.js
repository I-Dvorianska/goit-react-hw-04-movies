import Navigation from 'Navigation/Navigation';
import HomeView from 'HomeView/HomeView';
import MoviesView from './MoviesView/MoviesView';
import { Route, Switch } from 'react-router';

export default function App() {
  return (
    <>
      <Navigation />
      <Switch>
        <Route path="/" exact>
          <HomeView />
        </Route>
        <Route path="/movies">
          <MoviesView />
        </Route>
      </Switch>
    </>
  );
}
