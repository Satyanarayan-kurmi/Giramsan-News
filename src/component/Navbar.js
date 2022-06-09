import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export class Navbar extends Component {
  static propTypes = {}

  render() {
    return (
        <nav style={{background:'rgb(192 42 102)'}} className="navbar fixed-top navbar-expand-lg navbar-dark   ">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">Giramsan-News</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/business">Business</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/general">General</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/health">Health</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/science">Science</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/sport">Sport</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/technology">Technology</Link>
              </li>
            </ul>
      </div>
        </div>
      </nav>

    )
  }
}

export default Navbar