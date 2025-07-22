import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Body from '../components/Body/Body'
// import Contact from '../components/Contact/Contact'
import Contact from '../components/TeamSection/TeamSection'
import Footer from '../components/Footer/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Body/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home