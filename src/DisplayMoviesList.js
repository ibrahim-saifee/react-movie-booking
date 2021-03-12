import React, { Component } from "react"
import DisplayMovie from "./DisplayMovie"
import Movie from "./models/Movie"

class DisplayMoviesList extends Component {
  constructor(props) {
    super(props)

    var moviesList = [
      new Movie(1, 'Inception', './inception.jpg', 'Thriller', 'English', 5, 1000),
      new Movie(2, 'The Smurfs 3D', './smurf.jpg', 'Anime', 'Hindi', 4, 100),
      new Movie(3, 'Rava - The Last Dragon', './rava.jpg', 'Anime', 'English', 3, 10),
      new Movie(4, 'Fast and Furious 6', './fast_and_furious.jpg', 'Action', 'Hindi', 2, 50),
      new Movie(5, 'Interstellar', './interstellar.jpg', 'Sci-Fi', 'English', 4, 1000),
      new Movie(6, 'The Martian', './martian.jpg', 'Sci-Fi', 'English', 3, 500),
      new Movie(7, 'Mission Impossible 6', './mission_impossible.jpg', 'Action', 'Hindi', 3, 100),
      new Movie(8, 'The Immitation Game', './immitation_game.jpg', 'Bio-Pic', 'English', 5, 10),
      new Movie(9, 'The Man Who Knew Infinity', './man_who_knew_infinity.jpg', 'Bio-Pic', 'English', 5, 2000),
      new Movie(10, 'The Shawshank Redemption', './shawshank_redemption.jpg', 'Suspense', 'English', 5, 4000),
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
            <DisplayMovie movie={movie} onBook={this.props.onMovieBook}></DisplayMovie>
          </div>
        )
      })
    )
  }

  render() {
    return (
      <div className="row row-cols-1 row-cols-md-4 g-4">
        {this.renderMovies()}
      </div>
    )
  }
}

export default DisplayMoviesList
