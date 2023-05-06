import React from 'react'
import { Link } from "react-router-dom";
import './Success.css'

export default function SuccessBook(props) {
    return (
        <div className='cont'>
            <div className="cardsuc">
                <div className="headersuc">
                    <div className="imagesuc">
                        <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M20 7L9.00004 18L3.99994 13" stroke="#000000" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                    </div>
                    <div className="contentsuc">
                        <span className="titlesuc"><h3>Submit Success</h3></span>
                        <p className="message">New Book Details have been Successfully added into the records</p>
                    </div>
                    <div className="actions">
                        <Link className="history" type="button" to='/'>Home</Link>
                        <Link className="track" type="button" to='/Books'>View Book Records</Link>
                        <Link className="track" type="button" to='/AddBook'>Add New Book</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}
