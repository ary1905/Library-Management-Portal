import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Search.css'

class Category extends Component {
    state = {
        Category: [],
        Input: '',
        Option: 'None'
    }

    componentDidMount() {
        const url = 'http://localhost/DBS_Project/PHP/Category.php'
        axios.get(url).then(response => response.data)
            .then((data) => {
                this.setState({ Category: data })
            })
    }

    handleInputChange = (e) => {
        this.setState({ Input: e.target.value })
    }

    handleOptionChange = (e) => {
        this.setState({ Option: e.target.value })
    }

    render() {
        const filteredCategory = this.state.Category.filter((cat) => {
            if (this.state.Option === 'Category_ID') {
                return cat.Category_ID.toLowerCase().includes(this.state.Input.toLowerCase())
            } else if (this.state.Option === 'Category_Name') {
                return cat.Category_Name.toLowerCase().includes(this.state.Input.toLowerCase())
            }else if (this.state.Option === 'Shelf_Number') {
                return cat.Shelf_Number.toLowerCase().includes(this.state.Input.toLowerCase())
            }else {
                return true
            }
        })

        return (
            <>
                <form>
                    <div className="search-container mx-2">
                        <select className="search-dropdown" value={this.state.Option} onChange={this.handleOptionChange}>
                            <option value="None">---None---</option>
                            <option value="Category_ID">Category ID</option>
                            <option value="Category_Name">Category Name</option>
                            <option value="Shelf_Number">Shelf Number</option>
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
                                        <th style={{ border: 'none' }}><h1 style={{ color: 'black', fontWeight: 'bold', textIndent:'430px'}}>Category</h1></th>
                                        <th style={{ border: 'none' }}><h1 style={{ color: 'black', fontWeight: 'bold', textIndent:'-120px' }}>Table</h1></th>
                                        <th style={{ border: 'none' }}></th>
                                        <th style={{ border: 'none' }}></th>
                                        <th style={{ border: 'none' }}></th>
                                    </tr>
                                </thead>
                                <thead style={{ color: 'white' }}>
                                    <tr>
                                        <th style={{ height: '40px' }}>Category ID</th>
                                        <th>Category Name</th>
                                        <th>Shelf Number</th>
                                        <th colSpan={2} style={{ textAlign: "center" }}>Operation</th>
                                    </tr>
                                </thead>
                                <tbody className="thead-light" style={{ color: 'white' }}>
                                    {filteredCategory.map((rs, index) => (
                                        <tr key={index}>
                                            <td>{rs.Category_ID}</td>
                                            <td>{rs.Category_Name}</td>
                                            <td>{rs.Shelf_Number}</td>
                                            <td style={{paddingLeft:'50px'}}><Link className="cssbuttons-io-buttondel" to='/Category' onClick={this.handleDelete = () => {
                                                const url = 'http://localhost/DBS_Project/PHP/DelCategory.php'
                                                let fData = new FormData();
                                                fData.append('Category_ID', rs.Category_ID);
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

export default Category