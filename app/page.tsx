import React from 'react'
import NavBar from './components/navBar'
import Hero from './components/Hero'
import { MarqueeDemo } from './components/Marquee'
import Projects from './components/Projects'
import { Services } from './components/Services'
import CTA from './components/CTA'
import ContactForm from './components/Contact'
import Footer from './components/Footer'
function Home() {
  return (
    <div className='bg-gray-200 min-h-screen'>
    <NavBar/>
     <main>
      <Hero/>
      <MarqueeDemo/>
      <Projects/>
      <Services/>
      <CTA/>
      <ContactForm/>
      </main> 
      <Footer/>
    </div>
  )
}

export default Home
