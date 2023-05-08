import React, { Component } from 'react';
import axios from 'axios';

class User extends Component {
    state = {
        User: []
    }
    componentDidMount() {
        const url = 'http://localhost/DBS_Project/PHP/User.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ User: data })
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
                                    <th colSpan={2} style={{ border: 'none'}}><h1 style={{color: 'black', fontWeight:'bold', textIndent:'350px'}}>User Table</h1></th>
                                    <th style={{ border: 'none'}}></th>
                                    <th style={{ border: 'none' }}></th>
                                    <th style={{ border: 'none' }}></th>
                                </tr>
                            </thead>
                            <thead style={{ color:'white' }}>
                                <tr>
                                    <th style={{ height: '40px' }}>User ID</th>
                                    <th>User Name</th>
                                    <th>Contact Number</th>
                                    <th>Registration Date</th>
                                    <th>Total Fine</th>
                                </tr>
                            </thead>
                            <tbody className="thead-light" style={{ color:'white' }}>
                                {this.state.User.map((rs, index) => (
                                    <tr key={index}>
                                        <td>{rs.User_ID}</td>
                                        <td>{rs.User_Name}</td>
                                        <td>{rs.Contact_No}</td>
                                        <td>{rs.Reg_Date}</td>
                                        <td>{rs.Total_Fine}</td>
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

export default User