import React, {Component} from "react"
import DisplayMovie from "./DisplayMovie"
import Cinema from "./models/Cinema"
import DisplayCinema from "./DisplayCinema"

class DisplayCinemasList extends Component {
  constructor(props) {
    super(props)

    var cinemasList = [
      new Cinema(1, 'Inox', 250, 100, 'March 27, 2021', '20:45', '123, Inox cinemas, Fake Mall, City'),
      new Cinema(2, 'PVR', 300, 100, 'March 27, 2021', '21:00', '123, PVR cinemas, Fake Mall, City'),
      new Cinema(3, 'Multi-plex', 350, 100, 'March 27, 2021', '19:00', '123, Multi-plex cinemas, Fake Mall, City'),
      new Cinema(4, 'Universal', 150, 100, 'March 27, 2021', '13:00', '123, Universal cinemas, Fake Mall, City')
    ]

    this.state = {
      cinemas: [...cinemasList]
    }
  }

  renderCinemas() {
    return(
      this.state.cinemas.map((cinema) => {
        return(
          <React.Fragment>
            <DisplayCinema cinema={cinema}></DisplayCinema> <br/>
          </React.Fragment>
        )
      })
    )
  }

  render() {
    return(
      <div className="row">
        <div className="col-md-3">
          <DisplayMovie movie={this.props.selectedMovie} showCancel={true} onCancel={this.props.onMovieCancel}></DisplayMovie>
        </div>
        <div className="col-md-8">
          {this.renderCinemas()}
        </div>
      </div>
    )
  }
}

export default DisplayCinemasList
