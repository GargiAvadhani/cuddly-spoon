import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutimg from "../assets/8.jpg";
import React from 'react'
import Footer from "../components/Footer";
import Animals from "../components/Animals"

function AnimalRescue () {
  return (
    <>
    <Navbar />
    <Hero cName="hero-mid"heroImg={aboutimg} title="Animal Rescue"/>
    <Animals />
    <Footer/>
    </>

  );
}

export default AnimalRescue