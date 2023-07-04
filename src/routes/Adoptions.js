import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutimg from "../assets/8.jpg";
import React from 'react'
import Footer from "../components/Footer";
import Adopt from "../components/Adopt";

function Adoptions () {
  return (
    <>
    <Navbar />
    <Hero cName="hero-mid"heroImg={aboutimg} title="Adoptions"/>
    <Adopt />
    <Footer/>
    </>
  );
}

export default Adoptions