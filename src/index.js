import React from 'react';
import ReactDOM from 'react-dom';
import './assets/styles/index.css';

import {BrowserRouter as Router, Link, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import CarAnalysis from './components/CarAnalysis';
import Game from './components/Game';
import House from './components/House';
import Travel from './components/Travel';
import Medical from './components/Medical';
import Cooking from './components/Cooking';

ReactDOM.render(
  <>
    <Router>
      <Switch>
        <Route path="/game">
          <Game />
        </Route>
        <Route path="/travel">
          <Travel />
        </Route>
        <Route path="/house">
          <House />
        </Route>
        <Route path="/medical">
          <Medical />
        </Route>
        <Route path="/cooking">
          <Cooking />
        </Route>
        <Route path="/car-analysis">
          <CarAnalysis />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  </>,
  document.getElementById('root'),
);
