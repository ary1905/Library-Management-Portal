import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import LibraryImg from "./lib.jpg";
import axios from 'axios';


const LoginPage = (props) => {
  const [Admin_ID, setAdmin_ID] = useState('');
  const [Admin_password, setAdmin_Password] = useState('');

  const handleChange = () => {
    if (Admin_ID.length !== 0 && Admin_password.length !== 0) {
      const url = 'http://localhost/DBS_Project/PHP/register.php'

      let fData = new FormData();
      fData.append('Admin_ID', Admin_ID);
      fData.append('Admin_password', Admin_password);

      axios.post(url, fData)
        .then(response => alert(response.data))
        .catch(error => alert(error));
    }
  }
  return (
    <>
      <section className="vh-100" >
        <div className="container py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col col-xl-10">
              <div className="card" style={{ borderRadius: '1rem', backgroundColor: `${props.cardMode}` }}>
                <div className="row g-0">
                  <div className="col-md-6 col-lg-5 d-none d-md-block">
                    <img src={LibraryImg} alt="Library Pic" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem' }} />
                  </div>
                  <div className="col-md-6 col-lg-7 d-flex align-items-center">
                    <div className="card-body p-4 p-lg-5 text-black">
                      <div className="d-flex align-items-center mb-3 pb-1">
                        <i className="fas fa-cubes fa-2x me-3" style={{ color: '#ff6219' }}></i>
                        <span className="h1 fw-bold mb-0"><b>REGISTER</b></span>
                      </div>
                      <form>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example17"><b>ID:</b></label>
                          <input type="text" id="form2Example17" className="form-control form-control-lg" placeholder='ID' value={Admin_ID} onChange={(e) => setAdmin_ID(e.target.value)} />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example27"><b>Password:</b></label>
                          <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder='Password' value={Admin_password} onChange={(e) => setAdmin_Password(e.target.value)} />
                        </div>
                        <div className="form-outline mb-4">
                          <label className="form-label" htmlFor="form2Example27"><b>Re-Enter Password:</b></label>
                          <input type="password" id="form2Example27" className="form-control form-control-lg" placeholder='Password' />
                        </div>
                      </form>
                      <div className="pt-1 mb-4">
                        <Link type='submit' to='/Login' className={`btn btn-${props.btnMode}`} onClick={handleChange}>Register</Link>
                      </div>
                      <Link to="/Login" className="small text-muted">Already a Member.</Link><br></br>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
