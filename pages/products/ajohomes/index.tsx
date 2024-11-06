import React from 'react'
import Header from '../../../src/components/Header'
import Footer from '../../../src/components/Footer'
import Hero from '../../../src/sections/AjoHomes/Hero'
import IntroducingAjoHomes from '../../../src/sections/AjoHomes/IntroducingAjoHomes'
import HowAjoHomesWorks from '../../../src/sections/AjoHomes/HowAjoHomesWorks'
import Benefits from '../../../src/sections/AjoHomes/Benefits'
import WhyInvest from '../../../src/sections/AjoHomes/WhyInvest'
import AjoHomesLaunching from '../../../src/sections/AjoHomes/AjoHomesLaunching'
import Head from 'next/head'

const index = () => {
  return (
    <div>
      <Head>
        <title>Ajohomes | AjoSquad</title>
        <meta property="og:description" content="A Novel Way to Invest in Real Estate" key="title" />
      </Head>
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