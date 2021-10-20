import React from 'react';
import '../App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Navigation from './Navigation';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Landing}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
