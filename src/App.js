import logo from './logo.svg';
import './App.css';
import Header from "./Header"
import DisplayMoviesList from "./DisplayMoviesList"
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header></Header>
      <hr />
      <DisplayMoviesList></DisplayMoviesList>
    </React.Fragment>
  );
}

export default App;
