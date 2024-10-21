import React from 'react'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import Hero from '../../src/sections/Blog/Hero'
import AllBlogs from '../../src/sections/Blog/AllBlogs'
import RecentBlog from '../../src/sections/Blog/RecentBlog'
import { BlogType } from '../../src/libs/types'
import { GetServerSideProps } from 'next'
import Pagination from '../../src/components/Pagination'
import Head from 'next/head'

const index = ({ data1, data2 }: { data1: { data: BlogType[] }, data2: { totalPages: number, data: BlogType[] } }) => {
  const blogPosts1: BlogType[] = data1.data;
  const blogPosts: BlogType[] = data2.data;
  const totalPages = data2.totalPages
  return (
    <div>
      <Head>
        <title>Blogs | Ajosqaud</title>
      </Head>
      <Header hasHero={true} />
      <Hero />
      <div className='px-4 md:px-10 lg:px-24 2xl:px-28'>
        <RecentBlog blogPosts={blogPosts1} />
        <AllBlogs blogPosts={blogPosts} />
        <Pagination totalPages={totalPages} />
      </div>
      <Footer />
    </div>
  )
}

export default index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  let url = 'https://ajosquad-backend.onrender.com/blog?limit=6';
  if (query.page) {
    url = `https://ajosquad-backend.onrender.com/blog?limit=6&page=${query.page}`;
  }
  const responses = await Promise.all([
    fetch("https://ajosquad-backend.onrender.com/blog"),
    fetch(url)
  ]);
  const data1 = await responses[0].json();
  const data2 = await responses[1].json();

  return {
    props: {
      data1,
      data2
    },
  }
}