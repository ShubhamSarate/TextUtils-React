import React from 'react'
import PropTypes from 'prop-types'
import {Link} from 'react-router-dom'

export default function Navbar(props) {
  return (
    <nav className={`navbar-${props.mode} px-3 d-flex justify-content-between bg-${props.mode}`}>
      {/* LEFT SIDE */}
      <div className="d-flex align-items-center">
        <Link className="navbar-brand me-4" to="/">{props.title}</Link>

        <ul className="navbar-nav flex-row">
          <li className="nav-item me-3">
            <Link className="navbar-brand me-4" to="/">{props.home}</Link>
          </li>
          <li className="nav-item">
            <Link className="navbar-brand me-4" to="/about">{props.aboutText}</Link>
          </li>
        </ul>
      </div>
      <div className={`form-check form-switch py-2 text-${props.mode === 'light' ? 'dark' : 'light'}`}>
  <input className="form-check-input" onClick={props.toggleMode} type="checkbox" role="switch" id="switchCheckDefault"/>
  <label className="form-check-label" htmlFor="switchCheckDefault">{props.mode === 'light' ? "Dark Mode" : "Light Mode"}</label>
</div>
    </nav>
  )
}

Navbar.propTypes = {
    title : PropTypes.string.isRequired,
    aboutText : PropTypes.string,
}

Navbar.defaultProps = {
    title: 'Set Title here',
    aboutText: 'Set About here'
};