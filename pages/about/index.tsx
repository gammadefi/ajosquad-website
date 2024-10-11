import React from 'react'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import Hero from '../../src/sections/AboutPage/Hero'
import Team from '../../src/sections/AboutPage/Team'
import AboutUs from '../../src/sections/AboutPage/AboutUs'
import FinancialsEducation from '../../src/sections/AboutPage/FinancialsEducation'
import MissionAndVision from '../../src/sections/AboutPage/MissionAndVision'

const index = () => {
  return (
    <div>
      <Header hasHero={true} />
      <Hero />
      <AboutUs />
      <FinancialsEducation />
      <MissionAndVision />
      <Team />
      <Footer />
    </div>
  )
}

export default index



