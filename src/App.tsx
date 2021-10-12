import React from 'react';
import logo from './logo.svg';
import { Route } from 'react-router-dom';

import './App.css';
import './scss/reset.css';
import './scss/common.scss';
import Header from './pages/Header';
import Main from './pages/Main';
import Sub from './pages/Sub';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <main id="container">
        <Route exact path="/" component={Main} />
        <Route path="/sub" component={Sub} />
      </main>
    </div>
  );
}

export default App;
