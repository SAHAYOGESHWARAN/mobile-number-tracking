import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import TrackNumber from './components/TrackNumber';

const App = () => {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/track" component={TrackNumber} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;