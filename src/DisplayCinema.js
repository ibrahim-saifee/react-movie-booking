import {Component} from "react"

class DisplayCinema extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return(
      <div className="card">
        <div className="card-header">
          <h4>{this.props.cinema.name}</h4>
        </div>
        <div className="card-body">
          <blockquote className="blockquote mb-0">
            <div className="row">
              <div className="col">
                <p>Show Time: {this.props.cinema.date} | <span className="badge bg-success">{this.props.cinema.time}</span> </p>
                <p>Seats Available: {this.props.cinema.seatsAvailable}</p>
              </div>
              <div className="col">
                <p>Rs. {this.props.cinema.price}</p>
                <input type="button" className="btn btn-primary" value="Book Now" />
              </div>
            </div>
            <footer className="blockquote-footer">{this.props.cinema.address}</footer>
          </blockquote>
        </div>
      </div>
    )
  }
}

export default DisplayCinema
