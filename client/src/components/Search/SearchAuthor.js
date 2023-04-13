import React, { Component } from 'react';
import axios from 'axios';
import './Search.css'

class Inst extends Component {
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
        const filteredBooks = this.state.Author.filter((author) => {
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
                            <option value="Book_Name">Author ID</option>
                            <option value="ISBN">Author Name</option>
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
                        <h1 className='my-4'>Author Records</h1>
                        <table className={`table table-bordered my-3 table-striped table-${this.props.mode}`}>
                            <thead className="thead-light">
                                <tr style={{ padding: 20, color: 'white' }}>
                                    <th>Author ID</th>
                                    <th>Author Name</th>
                                    <th>Number Of Books</th>
                                </tr>
                            </thead>
                            <tbody>
                                {filteredBooks.map((rs, index) => (
                                    <tr key={index}>
                                        <td style={{ color: 'white' }}>{rs.Author_ID}</td>
                                        <td style={{ color: 'white' }}>{rs.Author_Name}</td>
                                        <td style={{ color: 'white' }}>{rs.NumBooks}</td>
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