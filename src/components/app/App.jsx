import React from 'react';
import {
  BrowserRouter as Router,
  Route, 
  Switch
} from 'react-router-dom';
import Search from '../../containers/search/Search';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Search} />
      </Switch>
    </Router>
  );
}
