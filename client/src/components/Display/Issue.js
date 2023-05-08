import React, { Component } from 'react';
import axios from 'axios';

class Issue extends Component {
    state = {
        Issue: []
    }
    componentDidMount() {
        const url = 'http://localhost/DBS_Project/PHP/Issue.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ Issue: data })
            })
    }
    render() {
        return (
            <div className='page' style={{ width: '1519px', height: '100vh', position: 'absolute', left: '0', top: '150px' }}>
                <div className="page" style={{ padding: 20 }}>
                    <div className="col-xs-8" style={{ border: '5px solid #d5ad18', borderRadius: '10px' }}>
                        <table className={`table`}>
                            <thead>
                                <tr style={{ backgroundColor: '#d5ad18' }}>
                                    <th style={{ border: 'none' }}></th>
                                    <th colSpan={2} style={{ border: 'none'}}><h1 style={{color: 'black', fontWeight:'bold', textIndent:'350px'}}>Issue Table</h1></th>
                                    <th style={{ border: 'none'}}></th>
                                    <th style={{ border: 'none' }}></th>
                                    <th style={{ border: 'none' }}></th>
                                    <th style={{ border: 'none' }}></th>
                                    <th style={{ border: 'none' }}></th>
                                    <th style={{ border: 'none' }}></th>
                                </tr>
                            </thead>
                            <thead style={{ color:'white' }}>
                                <tr>
                                    <th style={{ height: '40px' }}>Issue ID</th>
                                    <th>Book ID</th>
                                    <th>User ID</th>
                                    <th>Issue Date</th>
                                    <th>Due Date</th>
                                    <th>Return Date</th>
                                    <th>Book Status</th>
                                    <th>Fine</th>
                                </tr>
                            </thead>
                            <tbody className="thead-light" style={{ color:'white' }}>
                                {this.state.Issue.map((rs, index) => (
                                    <tr key={index}>
                                        <td>{rs.Issue_ID}</td>
                                        <td>{rs.Book_ID}</td>
                                        <td>{rs.User_ID}</td>
                                        <td>{rs.Issue_Date}</td>
                                        <td>{rs.Expected_Return_Date}</td>
                                        <td>{rs.Return_Date}</td>
                                        <td>{rs.Issue_Status}</td>
                                        <td>{rs.Fine}</td>
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

export default Issue