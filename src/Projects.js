import React from "react";
import video from './resources/website.mp4'

function Projects() {
    function openProjectPage() {
        window.open("https://skawafuchi.github.io/MouseAccuracyTrainer/")
    }
    return <div id="projects" className="card clickable" onClick={openProjectPage}>
        <div className="projects-video">
            <h1>Here's a website I've made.</h1>
            <video src={video} autoPlay loop muted></video>
        </div>
    </div>
}

export default Projects;