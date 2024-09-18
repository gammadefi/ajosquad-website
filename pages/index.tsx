import React from 'react'
import Header from '../src/components/Header'
import Hero from '../src/sections/Hompage/Hero'
import Footer from '../src/components/Footer'

const index = () => {
  return (
    <div>
      <Header hasHero={true} />
      <Hero />
      <Footer />
    </div>
  )
}

export default index