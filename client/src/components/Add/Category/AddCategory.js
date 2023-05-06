import React, { useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom'
import LibraryImg from "./lib.jpg";

export default function AddCategory() {
  const [Category_ID, setCategory_ID] = useState('');
  const [Category_Name, setCategory_Name] = useState('');
  const [Shelf_Number, setShelf_Number] = useState('');

  const handleChange = () => {
    if (Category_ID.length !== 0 && Category_Name.length !== 0 && Shelf_Number.length !== 0) {
      const url = 'http://localhost/DBS_Project/PHP/addcategory.php'
      let fData = new FormData();
      fData.append('Category_ID', Category_ID);
      fData.append('Category_Name', Category_Name);
      fData.append('Shelf_Number', Shelf_Number);

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
                  <img src={LibraryImg} alt="Library Pic" className="img-fluid" style={{ borderRadius: '1rem 0 0 1rem', height:'650px' }} />
                </div>
                <div className="col-md-6 col-lg-7 d-flex align-items-center" style={{ maxHeight: '900px' }}>
                  <div className="card-body p-4 p-lg-5 text-black">
                    <div className="d-flex align-items-center mb-3 pb-1">
                      <i className="fas fa-cubes fa-2x me-3" style={{ color: '#5f4319' }}></i>
                      <span className="h1 fw-bold mb-0"><b>Add Category Details</b></span>
                    </div>
                    <div className="final">
                      <div className="addContainer">
                        <div className="addcard">
                          <div className="form-outline mb-4 addinputBox1">
                            <input type="text" required="required" value={Category_ID} onChange={(e) => setCategory_ID(e.target.value)} />
                            <span>Category ID</span>
                          </div>
                          <div className="form-outline mb-4 addinputBox1">
                            <input type="text" required="required" value={Category_Name} onChange={(e) => setCategory_Name(e.target.value)} />
                            <span>Category Name</span>
                          </div>
                          <div className="form-outline mb-4 addinputBox1">
                            <input type="text" required="required" value={Shelf_Number} onChange={(e) => setShelf_Number(e.target.value)} />
                            <span>Shelf Number</span>
                          </div>
                          <Link to='/SuccessCat' className="enter" onClick={handleChange}>Enter</Link>
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
