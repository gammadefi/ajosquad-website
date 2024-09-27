import React from 'react'
import Header from '../src/components/Header'
import Hero from '../src/sections/Hompage/Hero'
import Footer from '../src/components/Footer'
import Shortstory from '../src/sections/Hompage/Shortstory'
import Products from '../src/sections/Hompage/Products'
import Benefits from '../src/sections/Hompage/Benefits'
import Howitworks from '../src/sections/Hompage/Howitworks'
import Fag from '../src/sections/Hompage/Fag'
import Security from '../src/sections/Hompage/Security'
import Testimonial from '../src/sections/Hompage/Testimonial'

const index = () => {
  return (
    <div>
      <Header hasHero={true} />
      <Hero />
      <Shortstory />
      <Products />
      <Benefits />
      <Howitworks />
      <Testimonial />
      <Security />
      <Fag />
      <Footer />
    </div>
  )
}

export default index