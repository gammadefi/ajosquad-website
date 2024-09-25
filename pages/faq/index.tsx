import React from 'react'
import Header from '../../src/components/Header'
import Hero from '../../src/sections/FAQ/Hero'
import ChatSupport from '../../src/sections/FAQ/ChatSupport'
import FAQ from '../../src/sections/FAQ/FAQ'
import Footer from '../../src/components/Footer'
import Contact from '../../src/sections/FAQ/Contact'

const index = () => {
  return (
    <div>
      <Header hasHero={true} />
      <Hero />
      <FAQ />
      <ChatSupport />
      <Contact />
      <Footer />
    </div>
  )
}

export default index