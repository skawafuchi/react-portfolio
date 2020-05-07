import React from "react";

function Technologies() {
    return <div id="technologies" className="card">
        <h1>Here's some technologies I'm familiar with:</h1>
        <div className="technology-container">
            <h3 className="technology-title">Front End:</h3>
            <div className="technology-list">
                <p className="technology-item">HTML</p>
                <p className="technology-item">CSS</p>
                <p className="technology-item">Javascript</p>
                <p className="technology-item">JQuery</p>
                <p className="technology-item">Bootstrap</p>
                <p className="technology-item">React</p>
            </div>
            <h3 className="technology-title">Back End:</h3>
            <div className="technology-list">
                <p className="technology-item">MongoDB</p>
                <p className="technology-item">Express</p>
                <p className="technology-item">Node.js</p>
                <p className="technology-item">Python</p>
            </div>
        </div>
    </div>
}

export default Technologies;