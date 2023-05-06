import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Search.css'

class Book extends Component {
    state = {
        Books: [],
        Input: '',
        Option: 'None'
    }

    componentDidMount() {
        const url = 'http://localhost/DBS_Project/PHP/Book.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ Books: data })
            })
    }

    handleInputChange = (e) => {
        this.setState({ Input: e.target.value })
    }

    handleOptionChange = (e) => {
        this.setState({ Option: e.target.value })
    }

    render() {
        const filteredBooks = this.state.Books.filter((book) => {
            if (this.state.Option === 'Book_Name') {
                return book.Book_Name.toLowerCase().includes(this.state.Input.toLowerCase())
            } else if (this.state.Option === 'ISBN') {
                return book.ISBN.toLowerCase().includes(this.state.Input.toLowerCase())
            } else if (this.state.Option === 'Category_ID') {
                return book.Category_ID.toLowerCase().includes(this.state.Input.toLowerCase())
            } else {
                return true
            }
        })

        return (
            <>
                <form>
                    <div className="search-container mx-2">
                        <select className="search-dropdown" value={this.state.Option} onChange={this.handleOptionChange}>
                            <option value="None">---None---</option>
                            <option value="Book_Name">Book Name</option>
                            <option value="ISBN">ISBN</option>
                            <option value="Category_ID">Category</option>
                        </select>
                        <input
                            type="text"
                            placeholder="Search"
                            className="search-input"
                            value={this.state.Input}
                            onChange={this.handleInputChange}
                        />
                    </div>
                </form>
                <div className='page' style={{ width: '1519px', height: '100vh', position: 'absolute', left: '0', top: '150px' }}>
                    <div className="page" style={{ padding: 20 }}>
                        <div className="col-xs-8" style={{ border: '5px solid #d5ad18', borderRadius: '10px' }}>
                            <table className={`table`}>
                                <thead>
                                    <tr style={{ backgroundColor: '#d5ad18' }}>
                                        <th style={{ border: 'none' }}></th>
                                        <th colSpan={1} style={{ border: 'none' }}><h1 style={{ color: 'black', fontWeight: 'bold', textIndent: '480px' }}>Books Table</h1></th>
                                        <th style={{ border: 'none' }}></th>
                                        <th style={{ border: 'none' }}></th>
                                        <th style={{ border: 'none' }}></th>
                                        <th style={{ border: 'none' }}></th>
                                        <th style={{ border: 'none' }}></th>
                                        <th style={{ border: 'none' }}></th>
                                    </tr>
                                </thead>
                                <thead style={{ color: 'white' }}>
                                    <tr>
                                        <th style={{ height: '40px' }}>Books ID</th>
                                        <th>Books Name</th>
                                        <th>Author ID</th>
                                        <th>ISBN</th>
                                        <th>Book Status</th>
                                        <th>Category ID</th>
                                        <th colSpan={2} style={{ textAlign: "center" }}>Operation</th>
                                    </tr>
                                </thead>
                                <tbody className="thead-light" style={{ color: 'white' }}>
                                    {filteredBooks.map((rs, index) => (
                                        <tr key={index}>
                                            <td>{rs.Book_ID}</td>
                                            <td>{rs.Book_Name}</td>
                                            <td>{rs.Author_ID}</td>
                                            <td>{rs.ISBN}</td>
                                            <td>{rs.Book_Status}</td>
                                            <td>{rs.Category_ID}</td>
                                            <td><Link className="cssbuttons-io-buttondel" to='/Books' onClick={this.handleDelete = () => {
                                                const url = 'http://localhost/DBS_Project/PHP/DelBook.php'
                                                let fData = new FormData();
                                                fData.append('Book_ID', rs.Book_ID);
                                                axios.post(url, fData)
                                                    .then(response => alert(response.data))
                                                    .catch(error => alert(error))
                                            }}>
                                                <span>Delete</span>
                                            </Link></td>
                                            <td><Link className="cssbuttons-io-buttonupd">
                                                <span>Update</span>
                                            </Link></td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Book