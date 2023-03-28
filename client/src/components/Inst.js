import React, { Component } from 'react';
import axios from 'axios';

class Inst extends Component {
    state = {
        Books: []
    }
    componentDidMount() {
        const url = 'http://localhost/index.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ Books: data })
            })
    }
    render() {
        return (
            <div className="container my-2" style={{ padding: 20 }}>
                <div className="col-xs-8">
                    <h1 className='my-4'>Books Table</h1>
                    <table className={`table table-bordered my-3 table-striped table-${this.props.mode}`}>
                        <thead className="thead-light">
                            <tr>
                                <th style={{ height: '40px' }}>Books ID</th>
                                <th>Books Name</th>
                                <th>Author ID</th>
                                <th>ISBN</th>
                                <th>Book Status</th>
                                <th>Category ID</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.Books.map((rs, index) => (
                                <tr key={index}>
                                    <td>{rs.Book_ID}</td>
                                    <td>{rs.Book_Name}</td>
                                    <td>{rs.Author_ID}</td>
                                    <td>{rs.ISBN}</td>
                                    <td>{rs.Book_Status}</td>
                                    <td>{rs.Category_ID}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Inst