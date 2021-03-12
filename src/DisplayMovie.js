import React, { Component } from "react"
import "./DisplayMovie.css"

class DisplayMovie extends Component {
  render() {
    return (
      <div className="card movie-card">
        <img src={this.props.movie.imageUrl} className="card-img-top movie-image" alt={this.props.movie.name} />
        <div className="card-body">
          <h4 className="card-title">{this.props.movie.name}</h4>
          <small>({this.props.movie.language})</small>
          <div className="row">
            <div className="col">
              <p className="card-text">{this.props.movie.type}</p>
              <p className="card-text">
                <i class="fa fa-heart likes"></i> {this.props.movie.likes}
              </p>
            </div>
            <div className="col">
              <a href="#" className="btn btn-primary">Book Now</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DisplayMovie
