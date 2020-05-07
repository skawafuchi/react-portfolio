import React, { useEffect } from "react";
import {typeWrite, AddBlinkingCursor} from "./Animations"


function Contact() {
    const personalEmail = "skawafuchi@gmail.com";
    let clicked = false;
    
    function animateEmail() {
        if (!clicked){
            clicked=true;
            document.querySelector(".contact-content").classList.remove("clickable");
            document.querySelector(".contact-content").removeAttribute("onclick");
            typeWrite(document.querySelector(".contact-content"), personalEmail,50);
        }
    }

    useEffect(() => {
        AddBlinkingCursor(document.querySelector(".contact-content"));
    });

    return <div id="contact" className="card">
        <div>
            <h1>Here's how to contact me</h1>
            <div className="contact-info">
                <h3 className="contact-title">email:    </h3>
                <h3 className="contact-content clickable" onClick={animateEmail}>Click to reveal</h3>
            </div>
        </div>
    </div>
}

export default Contact;