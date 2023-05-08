import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Search.css'


class Issue extends Component {

    state = {
        Issue: [],
        Input: '',
        Option: 'None'
    }

    componentDidMount() {
        const url = 'http://localhost/DBS_Project/PHP/Issue.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ Issue: data })
            })
    }

    handleInputChange = (e) => {
        this.setState({ Input: e.target.value })
    }

    handleOptionChange = (e) => {
        this.setState({ Option: e.target.value })
    }


    render() {
        const filteredIssue = this.state.Issue.filter((issue) => {
            if (this.state.Option === 'Issue_ID') {
                return issue.Issue_ID.toLowerCase().includes(this.state.Input.toLowerCase())
            } else if (this.state.Option === 'Book_ID') {
                return issue.Book_ID.toLowerCase().includes(this.state.Input.toLowerCase())
            } else if (this.state.Option === 'User_ID') {
                return issue.User_ID.toLowerCase().includes(this.state.Input.toLowerCase())
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
                            <option value="Issue_ID">Issue ID</option>
                            <option value="Book_ID">Book ID</option>
                            <option value="User_ID">User ID</option>
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
                                        <th style={{ border: 'none' }}><h1 style={{ color: 'black', fontWeight: 'bold', textIndent: '400px' }}>Issue</h1></th>
                                        <th style={{ border: 'none' }}><h1 style={{ color: 'black', fontWeight: 'bold', textIndent: '-50px' }}>Table</h1></th>
                                        <th style={{ border: 'none' }}></th>
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
                                        <th style={{ height: '40px' }}>Issue ID</th>
                                        <th>Book ID</th>
                                        <th>User ID</th>
                                        <th>Issue Date</th>
                                        <th>Due Date</th>
                                        <th>Return Date</th>
                                        <th>Issue Status</th>
                                        <th>Fine</th>
                                        <th colSpan={2} style={{ textAlign: "center" }}>Operation</th>
                                    </tr>
                                </thead>
                                <tbody className="thead-light" style={{ color: 'white' }}>
                                    {filteredIssue.map((rs, index) => (
                                        <tr key={index}>
                                            <td>{rs.Issue_ID}</td>
                                            <td>{rs.Book_ID}</td>
                                            <td>{rs.User_ID}</td>
                                            <td>{rs.Issue_Date}</td>
                                            <td>{rs.Expected_Return_Date}</td>
                                            <td>{rs.Return_Date}</td>
                                            <td>{rs.Issue_Status}</td>
                                            <td>{rs.Fine}</td>
                                            <td><Link className="cssbuttons-io-buttondel" to='/Issue' onClick={this.handleDelete = () => {
                                                const url = 'http://localhost/DBS_Project/PHP/DelIssue.php'
                                                let fData = new FormData();
                                                fData.append('Issue_ID', rs.Issue_ID);
                                                axios.post(url, fData)
                                                    .then(response => alert(response.data))
                                                    .catch(error => alert(error))
                                            }}>
                                                <span>Delete</span>
                                            </Link></td>
                                            <td><Link className="cssbuttons-io-buttonupd" to='/Issue' onClick={this.handleUpdate = (e) => {
                                                const url = 'http://localhost/DBS_Project/PHP/UpdIssue.php'
                                                let fData = new FormData();
                                                fData.append('Issue_ID', rs.Issue_ID);
                                                fData.append('User_ID', rs.User_ID);
                                                axios.post(url, fData)
                                                    .then(response => alert(response.data))
                                                    .catch(error => alert(error))
                                            }}>
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

export default Issue