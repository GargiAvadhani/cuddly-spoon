import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import aboutimg from "../assets/8.jpg";
import React from 'react'

function AnimalRescue () {
  return (
    <>
    <Navbar />
    <Hero cName="hero-mid"heroImg={aboutimg} title="Animal Rescue"/>
    </>
  );
}

export default AnimalRescue