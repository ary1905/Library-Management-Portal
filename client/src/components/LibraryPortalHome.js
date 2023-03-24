import React from 'react';
import './LibraryPortal.css';
import BookImage from './book.jpg';
import AuthorImage from './author.jpg';
import EventImage from './event.jpg';

function LibraryPortal(props) {
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
          <button className="section-button">View All Books</button>
        </section>
        <section className={`${props.box_shadow}`}>
          <img src={AuthorImage} alt="Authors" className="section-image" />
          <h2 className="section-title">Authors</h2>
          <p className="section-description">Discover our featured authors</p>
          <button className="section-button">View All Authors</button>
        </section>
        <section className={`${props.box_shadow}`}>
          <img src={EventImage} alt="Events" className="section-image" />
          <h2 className="section-title">Events</h2>
          <p className="section-description">Join us for upcoming events</p>
          <button className="section-button">View All Events</button>
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

export default LibraryPortal;
