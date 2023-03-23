import { Link } from "react-router-dom"
import React, { useState } from 'react';
import axios from 'axios'

export default function Add(props) {
    const [ID, setID] = useState('');
    const [I_Name, setI_Name] = useState('');
    const [Dept_name, setDept_name] = useState('');
    const [Salary, setSalary] = useState('');

    const handleChange = () => {
        if (ID.length !== 0 && I_Name.length !== 0 && Dept_name.length !== 0 && Salary.length !== 0) {
            const url = 'http://localhost/add.php'

            let fData = new FormData();
            fData.append('ID', ID);
            fData.append('I_Name', I_Name);
            fData.append('Dept_name', Dept_name);
            fData.append('Salary', Salary);

            axios.post(url, fData)
                .then(response => alert(response.data))
                .catch(error => alert(error));
        }
    }

    return (
        <div className='container' data-bs-theme={`${props.mode}`}>
            <div className="card text-center">
                <div className="card-header">
                    Instructor Details
                </div>
                <div className="card-body ">
                    <p className="card-text "/>
                        <div className="mb-3 my-3">
                            <form>
                                <label htmlFor="exampleFormControlInput1" className="form-label my-2" data-bs-theme={`${props.mode}`} >Instructor ID</label>
                                <input type="number" className="form-control my-2" placeholder="ID" value={ID} onChange={(e) => setID(e.target.value)}
                                    style={{ backgroundColor: `${props.searchMode}`, color: `${props.textMode}` }} required="required" />
                                <label htmlFor="exampleFormControlInput1" className="form-label my-2" data-bs-theme={`${props.mode}`}>Instructor Name</label>
                                <input type="text" className="form-control my-2" placeholder="Name" value={I_Name} onChange={(e) => setI_Name(e.target.value)}
                                    style={{ backgroundColor: `${props.searchMode}`, color: `${props.textMode}` }} required="required" />
                                <label htmlFor="exampleFormControlInput1" className="form-label my-2" data-bs-theme={`${props.mode}`}>Instructor Department Name</label>
                                <input type="text" className="form-control my-2" placeholder="Department Name" value={Dept_name} onChange={(e) => setDept_name(e.target.value)}
                                    style={{ backgroundColor: `${props.searchMode}`, color: `${props.textMode}` }} required="required" />
                                <label htmlFor="exampleFormControlInput1" className="form-label my-2" data-bs-theme={`${props.mode}`}>Instructor Salary</label>
                                <input type="number" className="form-control my-2" placeholder="Salary" value={Salary} onChange={(e) => setSalary(e.target.value)}
                                    style={{ backgroundColor: `${props.searchMode}`, color: `${props.textMode}` }} required="required" />
                            </form>
                        </div>
                    <Link to="/success" className={`btn btn-${props.btnMode}`} onClick={handleChange}>Add Instructor Details</Link>
                </div>
                <div className="card-footer text-muted">
                    Inst_Table_TM
                </div>
            </div>
        </div>
    )
}
