import React from 'react'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import Hero from '../../src/sections/Blog/Hero'
import AllBlogs from '../../src/sections/Blog/AllBlogs'
import RecentBlog from '../../src/sections/Blog/RecentBlog'
import { BlogType } from '../../src/libs/types'

const index = ({ data }: { data: any }) => {
  const blogPosts: BlogType[] = data.data.slice(1);
  return (
    <div>
      <Header hasHero={true} />
      <Hero />
      <RecentBlog blogPosts={blogPosts} />
      <AllBlogs blogPosts={blogPosts} />
      <Footer />
    </div>
  )
}

export default index

export async function getStaticProps() {
  const res = await fetch('https://ajosquad-backend.onrender.com/blog');
  const data = await res.json()
  return {
    props: {
      data
    },
  }
}