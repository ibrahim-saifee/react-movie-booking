import React, { Component } from "react"
import "./DisplayMovie.css"

class DisplayMovie extends Component {
  constructor(props) {
    super(props)
  }

  renderRatings() {
    var stars = []
    for (let step = 0; step < this.props.movie.rating; step++) {
      stars.push(<span className="fa fa-star"></span>)
    }

    return(stars)
  }

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
                <i className="fa fa-heart likes"></i> {this.props.movie.likes}
              </p>
            </div>
            <div className="col">
              { this.props.showCancel ? <input type="button" className="btn btn-danger" value="Cancel" onClick={this.props.onCancel} /> : <input type="button" className="btn btn-primary" value="Book Now" onClick={this.props.onBook.bind(this, this.props.movie)} /> }
              <div className="movie-ratings">{this.renderRatings()}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DisplayMovie
