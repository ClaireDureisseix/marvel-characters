import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

import Home from './components/Home';
import CharacterShow from './components/CharacterShow';

import './App.css';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/character/:id" component={CharacterShow} />
      </Switch>
    </Router>
  );
};

export default App;
