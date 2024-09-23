import React from 'react'
import Header from '../../src/components/Header'
import Hero from '../../src/sections/TermsOfService/Hero'
import Terms from '../../src/sections/TermsOfService/Terms'
import Footer from '../../src/components/Footer'

const index = () => {
  return (
    <main>
      <Header hasHero={true} />
      <Hero />
      <div className='space-y-10 py-10 lg:py-20 px-5 lg:px-28 2xl:px-36'>
        <p className='text-xl font-medium'>Current as of 5, May 2024</p>
        <Terms />
      </div>
      <Footer />
    </main>
  )
}

export default index