import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Search.css'

class Author extends Component {
    state = {
        Author: [],
        Input: '',
        Option: 'None'
    }

    componentDidMount() {
        const url = 'http://localhost/DBS_Project/PHP/Author.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ Author: data })
            })
    }

    handleInputChange = (e) => {
        this.setState({ Input: e.target.value })
    }

    handleOptionChange = (e) => {
        this.setState({ Option: e.target.value })
    }

    render() {
        const filteredAuthor = this.state.Author.filter((author) => {
            if (this.state.Option === 'Author_ID') {
                return author.Author_ID.toLowerCase().includes(this.state.Input.toLowerCase())
            } else if (this.state.Option === 'Author_Name') {
                return author.Author_Name.toLowerCase().includes(this.state.Input.toLowerCase())
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
                            <option value="Author_ID">Author ID</option>
                            <option value="Author_Name">Author Name</option>
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
                <div className='page' style={{ width: '1300px', height: '100vh', position: 'absolute', left: '70', top: '150px' }}>
                    <div className="page" style={{ padding: 20 }}>
                        <div className="col-xs-8" style={{ border: '5px solid #d5ad18', borderRadius: '10px' }}>
                            <table className={`table`}>
                                <thead>
                                    <tr style={{ backgroundColor: '#d5ad18' }}>
                                        <th style={{ border: 'none' }}><h1 style={{ color: 'black', fontWeight: 'bold', textIndent:'430px'}}>Author</h1></th>
                                        <th style={{ border: 'none' }}><h1 style={{ color: 'black', fontWeight: 'bold', textIndent:'-150px' }}>Table</h1></th>
                                        <th style={{ border: 'none' }}></th>
                                        <th style={{ border: 'none' }}></th>
                                        <th style={{ border: 'none' }}></th>
                                    </tr>
                                </thead>
                                <thead style={{ color: 'white' }}>
                                    <tr>
                                        <th style={{ height: '40px' }}>Author ID</th>
                                        <th>Author Name</th>
                                        <th>Number Of Books</th>
                                        <th colSpan={2} style={{ textAlign: "center" }}>Operation</th>
                                    </tr>
                                </thead>
                                <tbody className="thead-light" style={{ color: 'white' }}>
                                    {filteredAuthor.map((rs, index) => (
                                        <tr key={index}>
                                            <td>{rs.Author_ID}</td>
                                            <td>{rs.Author_Name}</td>
                                            <td>{rs.NumBooks}</td>
                                            <td style={{paddingLeft:'50px'}}><Link className="cssbuttons-io-buttondel" to='/Author' onClick={this.handleDelete = () => {
                                                const url = 'http://localhost/DBS_Project/PHP/DelAuthor.php'
                                                let fData = new FormData();
                                                fData.append('Author_ID', rs.Author_ID);
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

export default Author