import React from 'react'
import Header from '../../../src/components/Header'
import Footer from '../../../src/components/Footer'
import GalleryPage from '../../../src/sections/Gallery/GalleryPage'

const index = () => {
  return (
    <div>
        <Header hasHero={false} />
        <GalleryPage />
        <Footer />
    </div>
  )
}

export default index