import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutimg from "../assets/8.jpg";
import React from 'react'

function Adoptions () {
  return (
    <>
    <Navbar />
    <Hero cName="hero-mid"heroImg={aboutimg} title="Adoptions"/>
    </>
  );
}

export default Adoptions