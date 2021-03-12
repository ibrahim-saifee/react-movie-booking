import { Component } from "react"
import "./Header.css"

class Header extends Component {
  render() {
    return (
      <div className="sticky-md-top header">
        <div className="row">
          <div className="col-md-2">
            <img src="./book_my_show_logo.png" className="header-logo" />
          </div>
          <div className="col-md-10 position-relative">
            <h1 className="header-text position-absolute bottom-50 end-50"> Movie Booking Online Platform </h1>
          </div>
        </div>
      </div>
    )
  }
}

export default Header
