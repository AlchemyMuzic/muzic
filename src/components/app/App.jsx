import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';
import Artist from '../../containers/artist/Artist';
import Home from '../../containers/home/Home';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/artists/:id" component={Artist} />
      </Switch>
    </Router>
  );
}
