import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import LibraryImg from "./lib.jpg";

export default function AddUser() {
  const [User_ID, setUser_ID] = useState('');
  const [User_Name, setUser_Name] = useState('');
  const [Contact_No, setContact_No] = useState('');
  const [Reg_Date, setReg_Date] = useState('');
  const [Total_Fine, setTotal_Fine] = useState('');

  const handleChange = () => {
    if (User_ID.length !== 0 && User_Name.length !== 0 && Contact_No.length !== 0 && Total_Fine.length !== 0) {
      const url = 'http://localhost/DBS_Project/PHP/adduser.php'
      let fData = new FormData();
      fData.append('User_ID', User_ID);
      fData.append('User_Name', User_Name);
      fData.append('Contact_No', Contact_No);
      fData.append('Reg_Date', Reg_Date);
      fData.append('Total_Fine', Total_Fine);

      axios.post(url, fData)
        .then(response => alert(response.data))
        .catch(error => alert(error));
    }
  }

  return (
    <section className="vh-100" >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col col-xl-10">
            <div className="card" style={{ borderRadius: '1rem', backgroundColor: '#d5ad18' }}>
              <div className="row g-0">
                <div className="col-md-6 col-lg-5 d-none d-md-block">
                  <img src={LibraryImg} alt="Library Pic" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem', height:'762px' }} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center" style={{ maxHeight: '900px' }}>
                  <div className="card-body p-4 p-lg-5 text-black">
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i className="fas fa-cubes fa-2x me-3" style={{ color: '#5f4319' }}></i>
                      <span className="h1 fw-bold mb-0"><b>Add User Details</b></span>
                    </div>
                    <div className="final">
                      <div className="addContainer">
                        <div className="addcard">
                          <div className="form-outline mb-4 addinputBox1">
                            <input type="text" required="required" value={User_ID} onChange={(e) => setUser_ID(e.target.value)} />
                            <span>User ID</span>
                          </div>
                          <div className="form-outline mb-4 addinputBox1">
                            <input type="text" required="required" value={User_Name} onChange={(e) => setUser_Name(e.target.value)} />
                            <span>User Name</span>
                          </div>
                          <div className="form-outline mb-4 addinputBox1">
                            <input type="text" required="required" value={Contact_No} onChange={(e) => setContact_No(e.target.value)} />
                            <span>Contact Number</span>
                          </div>
                          <div className="form-outline mb-4 addinputBox1">
                            <input type="text" required="required" value={Reg_Date} onChange={(e) => setReg_Date(e.target.value)} />
                            <span>Registration Date</span>
                          </div>
                          <div className="form-outline mb-4 addinputBox1">
                            <input type="text" required="required" value={Total_Fine} onChange={(e) => setTotal_Fine(e.target.value)} />
                            <span>Total Fine</span>
                          </div>
                          <Link to='/SuccessUser' className="enter" onClick={handleChange}>Enter</Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
