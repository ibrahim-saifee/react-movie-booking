import React, { Component } from "react"
import DisplayMovie from "./DisplayMovie"
import Movie from "./Movie"

class DisplayMoviesList extends Component {
  constructor(props) {
    super(props)

    var moviesList = [
      new Movie(1, 'Inception', './inception.jpg', 'Thriller', 1000),
      new Movie(2, 'Smurf', './smurf.jpg', 'Anime', 100),
      new Movie(3, 'Rava - The Last Dragon', './rava.jpg', 'Anime', 10),
      new Movie(4, 'Fast and Furious', './fast_and_furious.jpg', 'Action', 50),
      new Movie(5, 'Interstellar', './interstellar.jpg', 'Sci-Fi', 1000),
      new Movie(6, 'Martian', './martian.jpg', 'Sci-Fi', 500),
      new Movie(7, 'Mission Impossible', './mission_impossible.jpg', 'Action', 100),
      new Movie(8, 'The Immitation Game', './immitation_game.jpg', 'Bio-Pic', 10),
      new Movie(9, 'Man Who Knew Infinity', './man_who_knew_infinity.jpg', 'Bio-Pic', 2000),
      new Movie(10, 'Shawshank Redemption', './shawshank_redemption.jpg', 'Suspense', 4000),
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
