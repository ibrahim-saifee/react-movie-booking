import logo from './logo.svg';
import './App.css';
import React from 'react';
import Header from "./Header"
import DisplayMoviesList from "./DisplayMoviesList"
import DisplayCinemasList from "./DisplayCinemasList"
import DisplayBookingList from "./DispalyBookingList"
import Footer from "./Footer"

class App extends React.Component {

  constructor() {
    super()

    this.pages = {
      displayMoviesList: 0,
      displayCinemas: 1,
      displayBookingList: 2,
    }

    this.state = {
      page: this.pages.displayMoviesList,
      selectedMovie: null,
      selectedCinema: null,
      bookings: []
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
      page: this.pages.displayMoviesList
    })
  }

  onCinemaBookHandler = (movie, cinema) => {
    this.setState((prevState) => {
      var newBooking = { movie: movie, cinema: cinema }

      return {
        ...prevState,
        bookings: [...prevState.bookings, newBooking],
        page: this.pages.displayBookingList,
      }
    })
  }

  onMyBookingClickHandler = () => {
    this.setState({
      page: this.pages.displayBookingList,
    })
  }

  renderPage(page) {
    switch(page) {
      case this.pages.displayMoviesList:
        return(<DisplayMoviesList onMovieBook={this.onMovieBookHandler} onMyBookingClick={this.onMyBookingClickHandler}></DisplayMoviesList>)
      case this.pages.displayCinemas:
        return(<DisplayCinemasList selectedMovie={this.state.selectedMovie} onCinemaBook={this.onCinemaBookHandler} onMovieCancel={this.onMovieCancelHandler}></DisplayCinemasList>)
      case this.pages.displayBookingList:
        return(<DisplayBookingList bookings={this.state.bookings} onHomeClick={this.onMovieCancelHandler}></DisplayBookingList>)
    }
  }

  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <hr />
        { this.renderPage(this.state.page) }
        <Footer></Footer>
      </React.Fragment>
    );
  }
}

export default App;
