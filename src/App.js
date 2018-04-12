import React from "react";

import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import logo from "./logo.svg";
import "./App.css";

import MoviesList from "./MoviesList";
import MovieDetail from "./MovieDetail";

import Raven from "raven-js";
Raven.config(
  "https://3b2a1cee2b2342e79a1d633c61313f2e@sentry.io/1181135"
).install();

const App = () => (
  <Router>
    <div className="App">
      <header className="App-header">
        <Link to="/">
          <img src={logo} className="App-logo" alt="logo" />
        </Link>
      </header>
      <Switch>
        <Route exact path="/" component={MoviesList} />
        <Route path="/:id" component={MovieDetail} />
      </Switch>
    </div>
  </Router>
);

export default App;
