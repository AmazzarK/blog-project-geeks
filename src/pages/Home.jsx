import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import Body from '../components/Body/Body';
import Contact from '../components/Contact/Contact';
import TeamSection from '../components/TeamSection/TeamSection';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <div className="relative">
      <Navbar />
      
      {/* Each main section needs an ID that matches the navbar links */}
      <section id="home" className="scroll-mt-20">
        <Hero />
      </section>

      <section id="blogs" className="scroll-mt-20">
        <Body />
      </section>

      <section id="team" className="scroll-mt-20">
        <TeamSection />
      </section>

      <section id="contact" className="scroll-mt-20">
        <Contact />
      </section>

      <Footer />
    </div>
  );
};

export default Home;