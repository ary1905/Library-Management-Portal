import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Search.css'


class User extends Component {

    state = {
        User: [],
        Input: '',
        Option: 'None'
    }

    componentDidMount() {
        const url = 'http://localhost/DBS_Project/PHP/User.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ User: data })
            })
    }

    handleInputChange = (e) => {
        this.setState({ Input: e.target.value })
    }

    handleOptionChange = (e) => {
        this.setState({ Option: e.target.value })
    }


    render() {
        const filteredUser = this.state.User.filter((user) => {
            if (this.state.Option === 'User_ID') {
                return user.User_ID.toLowerCase().includes(this.state.Input.toLowerCase())
            } else if (this.state.Option === 'User_Name') {
                return user.User_Name.toLowerCase().includes(this.state.Input.toLowerCase())
            } else if (this.state.Option === 'Contact_No') {
                return user.Contact_No.toLowerCase().includes(this.state.Input.toLowerCase())
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
                            <option value="User_ID">User ID</option>
                            <option value="User_Name">User Name</option>
                            <option value="Contact_No">Contact Number</option>
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
                                    </tr>
                                </thead>
                                <thead style={{ color: 'white' }}>
                                    <tr>
                                        <th style={{ height: '40px' }}>User ID</th>
                                        <th>User Name</th>
                                        <th>Contact Number</th>
                                        <th>Registration Date</th>
                                        <th>Total Fine</th>
                                        <th style={{ textAlign: "center" }}>Operation</th>
                                    </tr>
                                </thead>
                                <tbody className="thead-light" style={{ color: 'white' }}>
                                    {filteredUser.map((rs, index) => (
                                        <tr key={index}>
                                            <td>{rs.User_ID}</td>
                                            <td>{rs.User_Name}</td>
                                            <td>{rs.Contact_No}</td>
                                            <td>{rs.Reg_Date}</td>
                                            <td>{rs.Total_Fine}</td>
                                            <td style={{paddingLeft:'20px'}}><Link className="cssbuttons-io-buttondel" to='/User' onClick={this.handleDelete = () => {
                                                const url = 'http://localhost/DBS_Project/PHP/DelUser.php'
                                                let fData = new FormData();
                                                fData.append('User_ID', rs.User_ID);
                                                axios.post(url, fData)
                                                    .then(response => alert(response.data))
                                                    .catch(error => alert(error))
                                            }}>
                                                <span>Delete</span>
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

export default User