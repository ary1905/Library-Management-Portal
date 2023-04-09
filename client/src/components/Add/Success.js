import React from 'react'
import { Link } from "react-router-dom";

export default function Success(props) {
    return (
        <div className='container' data-bs-theme={`${props.mode}`}>
            <div className="card text-center">
                <div className="card-header">
                    <h3>Instructor Details Have Been Added Successfully</h3>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Return To Home Page</h5>
                    <Link to="/" className={`btn btn-${props.btnMode}`}>Home</Link>
                </div>
                <div className="card-body">
                    <h5 className="card-title">View Records</h5>
                    <Link to="/Inst" className={`btn btn-${props.btnMode}`}>Instructor Records</Link>
                </div>
                <div className="card-body">
                    <h5 className="card-title">Add New Data</h5>
                    <Link to="/AddInst" className={`btn btn-${props.btnMode}`}>Add</Link>
                </div>
            </div>
        </div>
    )
}
