import React from 'react'

export default function About(props) {
    return (
        <div>
            <h1 className='mx-1 my-3'>About us</h1>
            <div className="accordion" id="accordionExample" data-bs-theme={`${props.mode}`}>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <strong>SQL DataBase</strong>
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Structured query language (SQL)</strong> is a programming language for storing and processing information in a relational database.
                            A relational database stores information in tabular form, with rows and columns representing different data attributes and the various relationships between the data values.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Functionalities</strong>
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <strong>Use Cases</strong> <br /> It is used to add, delete, and modify data stored within a relational database.
                            Relational databases are databases that store data with keys and/or values that are related to each other across tables.
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Free To Use</strong>
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            It's a <strong>great free and open-source</strong> choice for anything that requires working with relational databases. And you can run it on most popular platforms, including Linux, Windows, and macOS.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}