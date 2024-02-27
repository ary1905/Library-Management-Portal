import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

    const handleClick = () => {
        props.change();
    }

    return (
        <nav className={`navbar navbar-expand-lg bg-blue navbar-dark`}>
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
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false" >
                                <h5 className='mx-2' style={{ paddingTop: '20px', paddingLeft: '10px' }}>{props.add}</h5>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/AddBook"><p style={{ color: 'white' }}>Add New Book</p></Link></li>
                                <li><Link className="dropdown-item" to="/AddAuthor"><p style={{ color: 'white' }}>Add New Author</p></Link></li>
                                <li><Link className="dropdown-item" to="/AddUser"><p style={{ color: 'white' }}>Add New User</p></Link></li>
                                <li><Link className="dropdown-item" to="/AddCategory"><p style={{ color: 'white' }}>Add New Category</p></Link></li>
                            </ul>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link" to='/' role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <h5 className='mx-2' style={{ paddingTop: '20px', paddingLeft: '10px' }}>{props.search}</h5>
                            </Link>
                            <ul className="dropdown-menu">
                                <li><Link className="dropdown-item" to="/SearchBook"><p style={{ color: 'white' }}>Search Book Records</p></Link></li>
                                <li><Link className="dropdown-item" to="/SearchUser"><p style={{ color: 'white' }}>Search User Details</p></Link></li>
                                <li><Link className="dropdown-item" to="/SearchAdmin"><p style={{ color: 'white' }}>Search Admin Details</p></Link></li>
                                <li><Link className="dropdown-item" to="/SearchAuthor"><p style={{ color: 'white' }}>Search Author Records</p></Link></li>
                                <li><Link className="dropdown-item" to="/SearchCategory"><p style={{ color: 'white' }}>Search for Categories</p></Link></li>
                                <li><Link className="dropdown-item" to="/SearchIssue"><p style={{ color: 'white' }}>Search Issue Records</p></Link></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <Link className="button2" to="/logOut" onClick={handleClick}>Logout</Link>
            </div>
        </nav>
    )
}

Navbar.defaultProps = {
    title: 'Library Portal',
    aboutText: 'About Library Portal',
    add: 'Add New Entries',
    search: 'Search for Records'
}

Navbar.propTypes = {
    title: PropTypes.string,
    aboutText: PropTypes.string
}


