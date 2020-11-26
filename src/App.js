import React from 'react';
import './App.css';
import Brewers from './components/Brewers/Brewers.js';
import Navbar from './components/Navbar/Navbar.js';
import Contact from './components/Contact/Contact.js';
import About from './components/About/About.js';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
        <Route path="/brewers" exact component={Brewers}/>
        <Route path="/contact" exact component={Contact}/>
        <Route path="/about" exact component={About}/>
        </Switch>
      </div>
    </Router>
  )
}


export default App;
