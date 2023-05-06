import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {
    state = {
        Admin: []
    }
    componentDidMount() {
        const url = 'http://localhost/DBS_Project/PHP/Admin.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ Admin: data })
            })
    }
    render() {
        return (
            <div style={{width:'1350px'}}>
                <div className='page' style={{ width: '1200px', height: '100vh', left: '100', top: '120px', paddingLeft:'100px' }}>
                    <div className="page" style={{ padding: 20 }}>
                        <div className="col-xs-8" style={{ border: '5px solid #d5ad18', borderRadius: '10px' }}>
                            <table className={`table`}>
                                <thead>
                                    <tr style={{ backgroundColor: '#d5ad18' }}>
                                        <th style={{ border: 'none' }}><h1 style={{ color: 'black', fontWeight: 'bold', textIndent: '180px' }}>Admin</h1></th>
                                        <th style={{ border: 'none' }}><h1 style={{ color: 'black', fontWeight: 'bold', textIndent: '-580px' }}>Table</h1></th>
                                    </tr>
                                </thead>
                                <thead style={{ color: 'white' }}>
                                    <tr>
                                        <th style={{ height: '40px' }}>Admin ID</th>
                                        <th>Admin Password</th>
                                    </tr>
                                </thead>
                                <tbody className="thead-light" style={{ color: 'white' }}>
                                    {this.state.Admin.map((rs, index) => (
                                        <tr key={index}>
                                            <td>{rs.Admin_ID}</td>
                                            <td>{rs.Admin_password}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Admin