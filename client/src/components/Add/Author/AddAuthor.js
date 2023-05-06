import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import LibraryImg from "./lib.jpg";

export default function AddAuthor() {
    const [Author_ID, setAuthor_ID] = useState('');
    const [Author_Name, setAuthor_Name] = useState('');

    const handleChange = () => {
        if (Author_Name.length !== 0 && Author_ID.length !== 0) {
            const url = 'http://localhost/DBS_Project/PHP/addauthor.php'
            let fData = new FormData();
            fData.append('Author_ID', Author_ID);
            fData.append('Author_Name', Author_Name);
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
                                    <img src={LibraryImg} alt="Library Pic" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem', height: '650px' }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center" style={{ maxHeight: '900px' }}>
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <div className="d-flex align-items-center mb-3 pb-1">
                                            <i className="fas fa-cubes fa-2x me-3" style={{ color: '#5f4319' }}></i>
                                            <span className="h1 fw-bold mb-0"><b>Add Author Details</b></span>
                                        </div>
                                        <div className="final">
                                            <div className="addContainer">
                                                <div className="addcard">
                                                    <div className="form-outline mb-4 addinputBox1">
                                                        <input type="text" required="required" value={Author_ID} onChange={(e) => setAuthor_ID(e.target.value)} />
                                                        <span>Author ID</span>
                                                    </div>
                                                    <div className="form-outline mb-4 addinputBox1">
                                                        <input type="text" required="required" value={Author_Name} onChange={(e) => setAuthor_Name(e.target.value)} />
                                                        <span>Author Name</span>
                                                    </div>
                                                    <Link to='/SuccessAuthor' className="enter" onClick={handleChange}>Enter</Link>
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
