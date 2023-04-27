import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './navbar.css'

export default function Navbar2(props) {
  return (
    <div>
       <>
       <nav className={`navbar navbar-expand-lg bg-blue navbar-dark`} style={{ height: '90px' }}>
            <div className="container-fluid">
                <img src='favicon.png' alt='Logo' className='mx-2' style={{ width: '50px', height: '50px' }}></img>
                <h1 className="navbar-brand my-1 mx-1" style={{ fontSize: '35px' }}><strong>{props.title}</strong></h1>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" aria-current="page" to="/" textmode="/"><h5 className='mx-2' style={{ paddingTop: '20px', paddingLeft: '10px' }}>Home</h5></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about"><h5 className='mx-2' style={{ paddingTop: '20px', paddingLeft: '10px'}}>About Us</h5></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Login"><h5 className='mx-2' style={{ paddingTop: '20px', paddingLeft: '10px'}}>Log In</h5></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Register"><h5 className='mx-2' style={{ paddingTop: '20px', paddingLeft: '10px'}}>Register</h5></Link>
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
