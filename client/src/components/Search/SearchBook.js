import React, { Component } from 'react';
import axios from 'axios';
import './Search.css'

class Inst extends Component {
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
                <div className="container my-2" style={{ padding: 20, color: 'white' }}>
                    <div className="col-xs-8">
                        <h1 className='my-4'>Books Table</h1>
                        <table className={`table table-bordered my-3 table-striped table-${this.props.mode}`}>
                            <thead className="thead-light">
                                <tr style={{ padding: 20, color: 'white' }}>
                                    <th>Books ID</th>
                                    <th>Books Name</th>
                                    <th>Author ID</th>
                                    <th>ISBN</th>
                                    <th>Book Status</th>
                                    <th>Category ID</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBooks.map((rs, index) => (
                                    <tr key={index}>
                                        <td style={{ color: 'white' }}>{rs.Book_ID}</td>
                                        <td style={{ color: 'white' }}>{rs.Book_Name}</td>
                                        <td style={{ color: 'white' }}>{rs.Author_ID}</td>
                                        <td style={{ color: 'white' }}>{rs.ISBN}</td>
                                        <td style={{ color: 'white' }}>{rs.Book_Status}</td>
                                        <td style={{ color: 'white' }}>{rs.Category_ID}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </>
        );
    }
}

export default Inst