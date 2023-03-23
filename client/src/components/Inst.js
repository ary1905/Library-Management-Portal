import React, { Component } from 'react';
import axios from 'axios';

class Inst extends Component {
    state = {
        instructor: []
    }
    componentDidMount() {
        const url = 'http://localhost/index.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ instructor: data })
            })
    }
    render() {
        return (
            <div className="container my-2" style={{ padding: 20 }}>
                <div className="col-xs-8">
                    <h1 className='my-4'>Instructor Table</h1>
                    <table className={`table table-bordered my-3 table-striped table-${this.props.mode}`}>
                        <thead className="thead-light">
                            <tr>
                                <th style={{ height: '40px' }}>ID</th>
                                <th>Instructor Name</th>
                                <th>Department Name</th>
                                <th>Salary</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.instructor.map((rs, index) => (
                                <tr key={index}>
                                    <td>{rs.ID}</td>
                                    <td>{rs.I_Name}</td>
                                    <td>{rs.Dept_name}</td>
                                    <td>$ {rs.Salary}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Inst