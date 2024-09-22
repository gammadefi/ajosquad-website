import React from 'react'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import Hero from '../../src/sections/Ajosquad/Hero'
import Howitworks from '../../src/sections/Ajosquad/Howitworks'
import About from '../../src/sections/Ajosquad/About'
import KeyFeatures from '../../src/sections/Ajosquad/KeyFeatures'
import Whychoose from '../../src/sections/Ajosquad/Whychoose'

const index = () => {
    return (
        <div>
            <Header hasHero={true} />
            <Hero />
            <About />
            <KeyFeatures />
            <Whychoose />
            <Howitworks />
            <Footer />

        </div>
    )
}

export default index