import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import './button.css'

export default function Navbar(props) {

    const handleClick = () => {
        props.change();
    }

    return (
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
                        <li class="nav-item dropdown" data-bs-theme="dark">
                            <a class="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                {props.add}
                            </a>
                            <ul class="dropdown-menu">
                                <li><a class="dropdown-item" href="/AddBook">Add New Book</a></li>
                                <li><a class="dropdown-item" href="/AddAdmin">Add New Admin</a></li>
                                <li><a class="dropdown-item" href="/AddAuthor">Add New Author</a></li>
                                <li><a class="dropdown-item" href="/AddUser">Add New User</a></li>
                                <li><a class="dropdown-item" href="/AddCategory">Add New Category</a></li>
                                <li><a class="dropdown-item" href="/AddIssue">Add New Issue</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/Search">Search</Link>
                        </li>
                    </ul>
                </div>
                <Link className="button2" to="/logOut" onClick={handleClick} >Logout</Link>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Library Portal',
    aboutText: 'About Library Portal',
    add: 'Add New Entries'
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}


