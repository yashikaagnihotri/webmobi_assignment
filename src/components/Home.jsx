import React from "react";
import homeimg from "../images/homeimg.png";
import left from "../images/left.png";
import right from "../images/right.png";
import top from "../images/top.png";

function Home() {
    return (<div className="home">
        <img className="left" src={left} alt="left" />
        <img className="right" src={right} alt="right" />
        <img className="top" src={top} alt="top" />
        <h1 className="home-heading">
            Welcome to <span className="home-incubyte">Incubute</span>
        </h1>
        <p className="home-para">Building bridges to success in the tech ecosystem.</p>
        
        <img className="center-img" src={homeimg} alt="home img" />
        <div className="background">.</div>
    </div>)
}   

export default Home;