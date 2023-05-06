import React, { Component } from 'react';
import axios from 'axios';

class Admin extends Component {
    state = {
        Category: []
    }
    componentDidMount() {
        const url = 'http://localhost/DBS_Project/PHP/Category.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ Category: data })
            })
    }
    render() {
        return (
            <>
            <div className='page' style={{ width: '1300px', height: '100vh', position: 'absolute', left: '70', top: '150px' }}>
                <div className="page" style={{ padding: 20 }}>
                    <div className="col-xs-8" style={{ border: '5px solid #d5ad18', borderRadius: '10px' }}>
                        <table className={`table`}>
                            <thead>
                                <tr style={{ backgroundColor: '#d5ad18' }}>
                                    <th style={{ border: 'none' }}><h1 style={{ color: 'black', fontWeight: 'bold', textIndent:'230px'}}>Category</h1></th>
                                    <th style={{ border: 'none' }}><h1 style={{ color: 'black', fontWeight: 'bold', textIndent:'-460px' }}>Table</h1></th>
                                    <th style={{ border: 'none' }}></th>
                                </tr>
                            </thead>
                            <thead style={{ color: 'white' }}>
                                <tr>
                                    <th style={{ height: '40px' }}>Category ID</th>
                                    <th>Category Name</th>
                                    <th>Shelf Number</th>
                                </tr>
                            </thead>
                            <tbody className="thead-light" style={{ color: 'white' }}>
                                {this.state.Category.map((rs, index) => (
                                    <tr key={index}>
                                        <td>{rs.Category_ID}</td>
                                        <td>{rs.Category_Name}</td>
                                        <td>{rs.Shelf_Number}</td>
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