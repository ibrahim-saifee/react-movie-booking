import React, { Component } from "react"
import DisplayMovie from "./DisplayMovie"
import Movie from "./models/Movie"

class DisplayMoviesList extends Component {
  constructor(props) {
    super(props)

    var moviesList = [
      new Movie(1, 'Inception', './inception.jpg', 'Thriller', 'English', 1000),
      new Movie(2, 'The SMURFS 3D', './smurf.jpg', 'Anime', 'Hindi', 100),
      new Movie(3, 'Rava - The Last Dragon', './rava.jpg', 'Anime', 'English', 10),
      new Movie(4, 'Fast and Furious 6', './fast_and_furious.jpg', 'Action', 'Hindi', 50),
      new Movie(5, 'Interstellar', './interstellar.jpg', 'Sci-Fi', 'English', 1000),
      new Movie(6, 'The Martian', './martian.jpg', 'Sci-Fi', 'English', 500),
      new Movie(7, 'Mission Impossible 6', './mission_impossible.jpg', 'Action', 'Hindi', 100),
      new Movie(8, 'The Immitation Game', './immitation_game.jpg', 'Bio-Pic', 'English', 10),
      new Movie(9, 'The Man Who Knew Infinity', './man_who_knew_infinity.jpg', 'Bio-Pic', 'English', 2000),
      new Movie(10, 'The Shawshank Redemption', './shawshank_redemption.jpg', 'Suspense', 'English', 4000),
    ]

    this.state = {
      movies: [...moviesList]
    }
  }

  renderMovies() {
    return (
      this.state.movies.map((movie) => {
        return(
          <div className="col">
            <DisplayMovie movie={movie}></DisplayMovie>
          </div>
          )
      })
    )
  }

  render() {
    return (
      <div class="row row-cols-1 row-cols-md-4 g-4">
        {this.renderMovies()}
      </div>
    )
  }
}

export default DisplayMoviesList
