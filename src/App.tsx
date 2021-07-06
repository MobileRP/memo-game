import { useUser } from 'hooks';
import React from 'react';
import './App.scss';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import { MainNavigator } from 'components/MainNavigation/MainNavigator';
import { Game, Home, Scores } from 'screens';


const App: React.FC = () => {
  const { user } = useUser();
  return (
    <Router>
      <div className="App">
        <MainNavigator />
        <Switch>
          <Route path="/" exact>
            <Home />
          </Route>
          <Route path="/game">{!user ? <Redirect to={'/'} /> : <Game />}</Route>
          <Route path="/scores">
            <Scores />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
