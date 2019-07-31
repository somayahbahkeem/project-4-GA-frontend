import React from 'react';
import "./About.css";

const About= () => {
    return(
    <div > 
        <br/> 
        <br/>
        <h2>About General Assembly </h2>       
        <p>When you learn software engineering, data, design, and business with GA, you get:</p>
        <ul>
            <li>Most Innovative Education Company 2019 (Fast Company Magazine)</li>
            <li>70,000 graduates of our immersive courses</li>
            <li>91.9% placement rate in today’s most in-demand jobs</li>
            <li>24 campuses around the world</li>
            <li>2.2M professionals in our community</li>
        </ul>
        <div className="About">
        <img src='http://static1.squarespace.com/static/5a2861f1d74cff16007d5a71/5a306168f9619aace4fa8f3e/5a318e33f9619ac59d31b3e4/1518017516956/Logos_MASTER_General+Assembly.png?format=1500w'height="170px" width="250px"/>
        </div>
    </div>
     
    )
}

export default About; 