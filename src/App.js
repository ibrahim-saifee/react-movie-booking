import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./Header"
import DisplayMoviesList from "./DisplayMoviesList"

class App extends React.Component {

  constructor() {
    super()

    this.pages = {
      displayMoviesList: 'DisplayMoviesList'
    }

    this.state = {
      page: this.pages.displayMoviesList
    }
  }

  renderPage(page) {
    switch(page) {
      case this.pages.displayMoviesList:
        return(<DisplayMoviesList></DisplayMoviesList>)
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
