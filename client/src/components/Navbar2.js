import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar2(props) {
  return (
    <div>
       <>
            <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode} `}>
                <div className="container-fluid">
                    <img src='favicon.png' alt='Logo' className='mx-2' style={{ width: '32px', height: '32px' }}></img>
                    <p className="navbar-brand my-1 mx-1" style={{ fontSize: '25px' }}><strong>{props.title}</strong></p>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/" textmode="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/Login" textmode="/">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    </div>
  )
}

Navbar2.defaultProps = {
    title: 'Library Portal',
    aboutText: 'About Library Portal',
    addInst: 'Add Instructor'
}

Navbar2.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}
