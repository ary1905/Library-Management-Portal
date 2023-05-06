import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import './Add.css'
import LibraryImg from "./lib.jpg";

export default function AddBook() {
    const [Book_ID, setBook_ID] = useState('');
    const [Book_Name, setBook_Name] = useState('');
    const [Author_ID, setAuthor_ID] = useState('');
    const [ISBN, setISBN] = useState('');
    const [Book_Status, setBook_Status] = useState('');
    const [Category_ID, setCategory_ID] = useState('');

    const handleChange = () => {
        setBook_Status('Available');
        console.log(Book_Status);
            const url = 'http://localhost/DBS_Project/PHP/addbook.php'
            let fData = new FormData();
            fData.append('Book_ID', Book_ID);
            fData.append('Book_Name', Book_Name);
            fData.append('Author_ID', Author_ID);
            fData.append('ISBN', ISBN);
            fData.append('Book_Status', 'Available');
            fData.append('Category_ID', Category_ID);

            axios.post(url, fData)
                .then(response => alert(response.data))
                .catch(error => alert(error));
    }

    return (
        <section className="vh-100" >
            <div className="container py-5 h-100">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-xl-10">
                        <div className="card" style={{ borderRadius: '1rem', backgroundColor: '#d5ad18' }}>
                            <div className="row g-0">
                                <div className="col-md-6 col-lg-5 d-none d-md-block">
                                    <img src={LibraryImg} alt="Library Pic" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem', height:'855px' }} />
                                </div>
                                <div className="col-md-6 col-lg-7 d-flex align-items-center" style={{maxHeight:'900px'}}>
                                    <div className="card-body p-4 p-lg-5 text-black">
                                        <div className="d-flex align-items-center mb-3 pb-1">
                                            <i className="fas fa-cubes fa-2x me-3" style={{ color: '#5f4319' }}></i>
                                            <span className="h1 fw-bold mb-0"><b>Add Book Details</b></span>
                                        </div>
                                        <div className="final">
                                            <div className="addContainer">
                                                <div className="addcard">
                                                    <div className="form-outline mb-4 addinputBox1">
                                                        <input type="text" required="required" value={Book_ID} onChange={(e) => setBook_ID(e.target.value)} />
                                                        <span className="user">Book ID</span>
                                                    </div>
                                                    <div className="form-outline mb-4 addinputBox1">
                                                        <input type="text" required="required" value={Book_Name} onChange={(e) => setBook_Name(e.target.value)} />
                                                        <span className="user">Book Name</span>
                                                    </div>
                                                    <div className="form-outline mb-4 addinputBox1">
                                                        <input type="text" required="required" value={Author_ID} onChange={(e) => setAuthor_ID(e.target.value)} />
                                                        <span className="user">Author ID</span>
                                                    </div>
                                                    <div className="form-outline mb-4 addinputBox1">
                                                        <input type="text" required="required" value={ISBN} onChange={(e) => setISBN(e.target.value)} />
                                                        <span className="user">ISBN</span>
                                                    </div>
                                                    <div className="form-outline mb-4 addinputBox1">
                                                        <input type="text" required="required" value="Available" id="avail" onChange={() => console.log()} />
                                                        <span className="user">Book Status</span>
                                                    </div>
                                                    <div className="form-outline mb-4 addinputBox1">
                                                        <input type="text" required="required" value={Category_ID} onChange={(e) => setCategory_ID(e.target.value)} />
                                                        <span className="user">Category ID</span>
                                                    </div>
                                                    <Link to='/SuccessBook' className="enter" onClick={handleChange}>Enter</Link>
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
