import React from 'react'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import Hero from '../../src/sections/Blog/Hero'

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