import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Hero from '../components/Hero/Hero'
import Body from '../components/Body/Body'
// import Contact from '../components/Contact/Contact'
import ContactPage from '../components/Contact/Contact.jsx'
import Footer from '../components/Footer/Footer'
import TeamSection from '../components/TeamSection/TeamSection.jsx'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Body/>
      <TeamSection />
      <ContactPage/>
      <Footer/>
    </div>
  )
}

export default Home