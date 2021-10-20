import React, { useEffect, useState } from 'react';
import '../App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Landing from './Landing';
import Navigation from './Navigation';
import About from './About';
import Categories from './Categories';
import Contacts from './Contacts';
import Books from './Books';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navigation/>
        <Switch>
          <Route path="/" exact component={Landing}/>
          <Route path="/about" exact component={About}/>
          <Route path="/categories" exact component={Categories}/>
          <Route path="/contacts" exact component={Contacts}/>
        </Switch>
      </BrowserRouter>
      <Books/>
    </div>
    );
}

export default App;
