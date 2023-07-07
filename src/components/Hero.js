import "./HeroStyles.css";
import React from 'react'


//import AboutImg from "../assets/1.jpeg";

function Hero(props) {
  return ( <>
    <div className={props.cName}>
        <img alt="HeroImg" src={props.heroImg} className="three"/>
    
    <div className="hero-text">
        <h1>{props.title}</h1>
        <p>{props.text}</p>
        <a href ={props.url}className={props.btnClass}>{props.buttonText}</a>
    </div>
    </div>
    </>
    
  )
}

export default Hero;