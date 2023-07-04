import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutimg from "../assets/6.jpg";
import React from 'react'

function Contact () {
  return (
    <>
    <Navbar />
    <Hero cName="hero-mid"heroImg={aboutimg} title="Contact us"/>
    </>
  );
}

export default Contact