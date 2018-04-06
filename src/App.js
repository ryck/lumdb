import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

import Movie from "./Movie";

const API_KEY = "5ed7a59c30a22dd13ea34a42b5984ae0";

class App extends Component {
  state = {
    movies: []
  };

  async componentDidMount() {
    try {
      const res = await fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      );
      const movies = await res.json();
      this.setState({
        movies: movies.results
      });
      console.log(movies);
    } catch (e) {
      console.log(e);
    }
  }

  render() {
    console.log(process.env.NODE_ENV);
    console.log("REACT_APP_API_KEY", process.env.REACT_APP_API_KEY);
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        {this.state.movies.map(movie => <Movie key={movie.id} movie={movie} />)}
      </div>
    );
  }
}

export default App;
