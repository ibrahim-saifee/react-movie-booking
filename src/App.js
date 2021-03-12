import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./Header"
import DisplayMoviesList from "./DisplayMoviesList"
import DisplayCinemasList from './DisplayCinemasList';

class App extends React.Component {

  constructor() {
    super()

    this.pages = {
      displayMoviesList: 0,
      displayCinemas: 1
    }

    this.state = {
      page: this.pages.displayMoviesList,
      selectedMovie: null,
      selectedCinema: null,
    }
  }

  onMovieBookHandler = (movie) => {
    this.setState({
      selectedMovie: movie,
      page: this.pages.displayCinemas
    })
  }

  onMovieCancelHandler = () => {
    this.setState({
      selectedMovie: null,
      selectedCinema: null,
      page: this.pages.displayMoviesList
    })
  }

  onCinemaBookHandler = (movie, cinema) => {
    this.setState({
      selectedMovie: movie,
      selectedCinema: cinema,
      page: this.pages.displayMoviesList,
    })
  }

  renderPage(page) {
    switch(page) {
      case this.pages.displayMoviesList:
        return(<DisplayMoviesList onMovieBook={this.onMovieBookHandler}></DisplayMoviesList>)
      case this.pages.displayCinemas:
        return(<DisplayCinemasList selectedMovie={this.state.selectedMovie} onCinemaBook={this.onCinemaBookHandler} onMovieCancel={this.onMovieCancelHandler}></DisplayCinemasList>)
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <hr />
        { this.renderPage(this.state.page) }
      </React.Fragment>
    );
  }
}

export default App;
