import React from 'react'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import Hero from '../../src/sections/Blog/Hero'
import AllBlog from '../../src/sections/Blog/AllBlog'
import RecentBlog from '../../src/sections/Blog/RecentBlog'

const index = () => {
  return (
    <div>
      <Header hasHero={true} />
      <Hero />
      <RecentBlog />
      <AllBlog />
      <Footer />
    </div>
  )
}

export default index