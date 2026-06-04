import { useState } from 'react'
import '../App.css'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Lottery from '../components/Lottery'
import Stats from '../components/Stats'
import Features from '../components/Feature'
import Cards from '../components/Card'
import Footer from '../components/Footer'
import Coins from '../components/Coins'


function Home() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Lottery/>
      <Stats/>
      <Coins/>
      <Features/>
      <Cards/>
      <Footer/>
    </>
  )
}

export default Home
