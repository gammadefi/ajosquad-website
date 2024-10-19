import React from 'react'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import ComingSoon from '../../src/sections/Gallery/ComingSoon'
import Hero from '../../src/sections/Gallery/Hero'
import Main from '../../src/sections/Gallery/Main'

const index = () => {
  return (
    <div>
      <Header hasHero={true} />
      <Hero />
      <Main />
      {/* <ComingSoon /> */}
      <Footer />
    </div>
  )
}

export default index