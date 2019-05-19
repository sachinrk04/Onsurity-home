import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import HomePage from './containers/HomePage/HomePage';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

class App extends Component {
  render() {
    return (
      <div>
      <Header />
       <Switch>
          <Route path="/" exact component={HomePage}/>
       </Switch>
       <Footer />
      </div>
    );
  }
}

export default App;
