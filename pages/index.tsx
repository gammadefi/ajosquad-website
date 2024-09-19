import React from 'react'
import Header from '../src/components/Header'
import Hero from '../src/sections/Hompage/Hero'
import Footer from '../src/components/Footer'
import Shortstory from '../src/sections/Hompage/Shortstory'

const index = () => {
  return (
    <div>
      <Header hasHero={true} />
      <Hero />
      <Shortstory />
      <Footer />
    </div>
  )
}

export default index