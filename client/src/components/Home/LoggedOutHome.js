import React from 'react';
import './LibraryPortal.css';
import BookImage from './HomePage/book.jpg';
import AuthorImage from './HomePage/author.jpg';
import EventImage from './HomePage/event.jpg';
import { Link } from "react-router-dom";

function LoggedOut(props) {
  return (
    <div className='mainbody'>
      <header className="header">
        <h1 className="header-title">Welcome to the BookShelf-Pro Web Portal</h1>
      </header>
      <main className="main">
        <section className='section1'>
          <img src={BookImage} alt="Books" className="section-image" />
          <h2 className="section-title">Books</h2>
          <p className="section-description">Explore our collection of books</p>
          {props.isLogged ?
            <Link className="btn btn-dark" to="/Books" disabled>View All Books</Link>
            :
            <span className="btn btn-dark">View All Books</span>
          }
        </section>
        <section className={`${props.box_shadow}`}>
          <img src={AuthorImage} alt="Authors" className="section-image" />
          <h2 className="section-title">Authors</h2>
          <p className="section-description">Discover our featured authors</p>
          {
            props.isLogged ?
              <Link className="btn btn-dark" to="/Author">View All Authors</Link>
              :
              <span className="btn btn-dark">View All Authors</span>
          }
        </section>
        <section className={`${props.box_shadow}`}>
          <img src={EventImage} alt="Events" className="section-image" />
          <h2 className="section-title">Events</h2>
          <p className="section-description">Join us for upcoming events</p>
          {
            props.isLogged ?
              <Link className="btn btn-dark">View All Events</Link>
              :
              <span className="btn btn-dark">View All Events</span>

          }
        </section>
      </main>
      <footer className="footer-07">
        <div className="container">
          <div className="row mt-2">
            <div className="col-md-12 text-center">
              <p className="footer-text">© 2023 BookShelf-Pro. All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default LoggedOut;
