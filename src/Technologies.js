import React, { useEffect } from "react";
import  { typeWrite } from "./Animations"

function Technologies() {
    const technologyName = [
        ["HTML", "Javascript", "CSS", "JQuery", "Bootstrap", "React"],
        ["MongoDB","Express","Node.js","Python"]];
    useEffect(() => {
        let loaded = false;
        window.onscroll = () => {
            if (window.scrollY > (window.innerHeight * .80 * 1.5) && !loaded) {
                document.querySelectorAll(".technology-list").forEach((technologyType, index) => {
                    technologyName[index].forEach(name => {
                        let newItem = document.createElement("p");
                        technologyType.appendChild(newItem);
                        typeWrite(newItem, name);
                    });
                });
                loaded = true;
            }
        }
    });

    return <div id="technologies" className="card">
        <h1>Here's some technologies I'm familiar with:</h1>
        <div className="technology-container">
            <h3 className="technology-title">Front End:</h3>
            <div className="technology-list">
            </div>
            <h3 className="technology-title">Back End:</h3>
            <div className="technology-list">
            </div>
        </div>
    </div>
}

export default Technologies;