import React from "react";

function Contact() {

    const textToType = "skawafuchi@gmail.com";
    var pos = 1;

    function typeWrite() {
        console.log("Hello");
        let insert = document.querySelector(".contact-content");
        insert.classList.remove("clickable");
        let inter = setInterval(
            () => {
                insert.innerText = textToType.substring(0, pos);
                pos += 1;
                if (pos > textToType.length) {
                    clearInterval(inter);
                    insert.innerText = textToType;
                }
            }, 50);
    }



    setInterval(() => {

        let test = document.querySelector(".contact-content");
        //  console.log(test);
        let banana = test.innerText.substring(test.innerText.length - 1, test.innerText.length);
        if (banana === "|") {
            test.innerText = test.innerText.substring(0, test.innerText.length - 1);
        } else {
            test.innerText += "|";
        }
    }, 300);
    
    return <div id="contact" className="card">
        {/* <div className="center"> */}
        <div>
            <h1>Here's how to contact me</h1>
            <div className="contact-info">
                <h3 className="contact-title">email:    </h3>
                {/* <input type="button" value="Click to reveal" onClick={typeWrite}></input> */}
                <h3 className="contact-content clickable" onClick={typeWrite}>Click to reveal</h3>
            </div>
        </div>
    </div>
}

export default Contact;