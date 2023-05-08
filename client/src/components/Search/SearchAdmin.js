import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Search.css'

class Admin extends Component {
    state = {
        Admin: [],
        Input: '',
        Option: 'None'
    }

    componentDidMount() {
        const url = 'http://localhost/DBS_Project/PHP/Admin.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ Admin: data })
            })
    }

    handleInputChange = (e) => {
        this.setState({ Input: e.target.value })
    }

    handleOptionChange = (e) => {
        this.setState({ Option: e.target.value })
    }

    render() {
        const filteredAdmin = this.state.Admin.filter((admin) => {
            if (this.state.Option === 'Admin_ID') {
                return admin.Admin_ID.includes(this.state.Input.toLowerCase())
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
                            <option value="Admin_ID">Admin ID</option>
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
                                        <th style={{ border: 'none' }}><h1 style={{ color: 'black', fontWeight: 'bold', textIndent:'300px'}}>Admin</h1></th>
                                        <th style={{ border: 'none' }}><h1 style={{ color: 'black', fontWeight: 'bold', textIndent:'-350px' }}>Table</h1></th>
                                        <th style={{ border: 'none' }}></th>
                                        <th style={{ border: 'none' }}></th>
                                    </tr>
                                </thead>
                                <thead style={{ color: 'white' }}>
                                    <tr>
                                        <th style={{ height: '40px' }}>Admin ID</th>
                                        <th>Admin Password</th>
                                        <th style={{ textAlign: "center" }}>Operation</th>
                                    </tr>
                                </thead>
                                <tbody className="thead-light" style={{ color: 'white' }}>
                                    {filteredAdmin.map((rs, index) => (
                                        <tr key={index}>
                                            <td>{rs.Admin_ID}</td>
                                            <td>{rs.Admin_password}</td>
                                            <td style={{paddingLeft:'100px'}}><Link className="cssbuttons-io-buttondel" to='/Admin' onClick={this.handleDelete = () => {
                                                const url = 'http://localhost/DBS_Project/PHP/DelAdmin.php'
                                                let fData = new FormData();
                                                fData.append('Admin_ID', rs.Admin_ID);
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

export default Admin