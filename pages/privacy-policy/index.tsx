import React from 'react'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import Hero from '../../src/sections/PrivacyPolicy/Hero'
import PrivacyPolicies from '../../src/sections/PrivacyPolicy/PrivacyPolicies'

const index = () => {
  return (
    <main>
      <Header hasHero={true} />
      <Hero />
      <div className='space-y-10 py-10 lg:py-20 px-5 lg:px-28 2xl:px-36'>
        <p className='text-xl font-medium'>Current as of 5, May 2024</p>
        <PrivacyPolicies />
      </div>
      <Footer />
    </main>
  )
}

export default index