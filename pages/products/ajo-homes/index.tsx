import React from 'react'
import Header from '../../../src/components/Header'
import Footer from '../../../src/components/Footer'
import Hero from '../../../src/sections/Product/AjoHomes/Hero'
import IntroducingAjoHomes from '../../../src/sections/Product/AjoHomes/IntroducingAjoHomes'
import HowAjoHomesWorks from '../../../src/sections/Product/AjoHomes/HowAjoHomesWorks'
import Benefits from '../../../src/sections/Product/AjoHomes/Benefits'
import WhyInvest from '../../../src/sections/Product/AjoHomes/WhyInvest'
import AjoHomesLaunching from '../../../src/sections/Product/AjoHomes/AjoHomesLaunching'

const index = () => {
  return (
    <div>
      <Header hasHero={true} />
      <Hero />
      <IntroducingAjoHomes />
      <HowAjoHomesWorks />
      <Benefits />
      <WhyInvest />
      <AjoHomesLaunching />
      <Footer />
    </div>
  )
}

export default index