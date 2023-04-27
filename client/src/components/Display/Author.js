import React, { Component } from 'react';
import axios from 'axios';

class Author extends Component {
    state = {
        Authors: []
    }
    componentDidMount() {
        const url = 'http://localhost/DBS_Project/PHP/Author.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ Authors: data })
            })
    }
    render() {
        return (
            <div className='page' style={{ width: '1519px', height: '100vh', position: 'absolute', left: '0', top: '70px' }}>
                <div className="page" style={{ padding: 20 }}>
                    <div className="col-xs-8" style={{ border: '5px solid #d5ad18', borderRadius: '10px' }}>
                        <table className={`table`}>
                            <thead>
                                <tr style={{ backgroundColor: '#d5ad18' }}>
                                    <th style={{ border: 'none' }}></th>
                                    <th style={{ border: 'none' }}><h1 style={{ color: 'black', fontWeight:'bold', textIndent:'150px' }}>Authors Table</h1></th>
                                    <th style={{ border: 'none' }}></th>
                                    <th style={{ border: 'none' }}></th>
                                    <th style={{ border: 'none' }}></th>
                                    <th style={{ border: 'none' }}></th>
                                </tr>
                            </thead>
                            <thead style={{ color:'white' }}>
                                <tr>
                                    <th style={{ height: '40px' }}>Authors ID</th>
                                    <th>Authors Name</th>
                                    <th>Number of Books</th>
                                </tr>
                            </thead>
                            <tbody className="thead-light" style={{ color:'white' }}>
                                {this.state.Authors.map((rs, index) => (
                                    <tr key={index}>
                                        <td>{rs.Author_ID}</td>
                                        <td>{rs.Author_Name}</td>
                                        <td>{rs.NumBooks}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

export default Author