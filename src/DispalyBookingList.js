import React, {Component} from "react"

class DisplayBookingList extends Component {
  renderBookings() {
    return (
      this.props.bookings.map((booking) => {
        return (
          <React.Fragment>
            <div className="card col-md-6">
              <div className="card-header">
                <h4>{booking.movie.name} ({booking.movie.language})</h4>
              </div>
              <div className="card-body">
                <blockquote className="blockquote mb-0">
                  <div className="row">
                    <div className="col-md-2">
                      <img src={booking.movie.imageUrl} style={{height: '115px'}} />
                    </div>
                    <div className="col">
                      <p>{booking.cinema.name}</p>
                      <p>Show Time: {booking.cinema.date} | <span className="badge bg-success">{booking.cinema.time}</span> </p>
                      <footer className="blockquote-footer">{booking.cinema.address}</footer>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </React.Fragment>
        )
      })
    )
  }

  render() {
    return(
      <React.Fragment>
        <div className="row">
          <input type="button" className="btn btn-primary" value="Home" onClick={this.props.onHomeClick} />
        </div>
        <br />
        <div className="row">
          {this.renderBookings()}
        </div>
      </React.Fragment>
    )
  }
}

export default DisplayBookingList
