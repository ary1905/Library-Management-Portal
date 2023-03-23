import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    return (
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
                                <Link className="nav-link" to="/about">{props.aboutText}</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/Login" textmode="/">Login</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/AddInst">{props.addInst}</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false" data-bs-theme={`${props.mode}`}>
                                    View Records
                                </Link>
                                <ul className="dropdown-menu" data-bs-theme={`${props.mode}`}>
                                    <li><Link className="dropdown-item" to="/Inst">Instructor Records</Link></li>
                                    <li><Link className="dropdown-item" to="/">Department Records</Link></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" id={`${props.classMode}`} placeholder="Search for Instructor  ID / NAME / Departemnt" aria-label="Search" style={{ backgroundColor: `${props.searchMode}`, color: `${props.textMode}`, width: '400px' }} />
                        <button className={`btn btn-outline-${props.btnMode}`} type="submit" >Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}

Navbar.defaultProps = {
    title: 'Library Portal',
    aboutText: 'About Library Portal',
    addInst: 'Add Instructor'
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}


