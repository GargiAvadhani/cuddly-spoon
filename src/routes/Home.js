import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import React from 'react'
import hero from "../assets/hero.jpg"
import Information from "../components/Information";
import Footer from "../components/Footer";
function Home() {
  return (
    <>
    <Navbar />
    <Hero
    cName="hero"
    heroImg={hero}
    title="We also get hungry"
    text="can you feed us?"
    buttonText="Sponsor an Animal"
    url="/"
    btnClass="show"
     />
     <Information/>
     <Footer />
    </>
  )
}

export default Home