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
import axios from 'axios'

const index = ({ recentBlogPosts, allBlogPosts }: { recentBlogPosts: { data: BlogType[] }, allBlogPosts: { totalPages: number, data: BlogType[] } }) => {
  const blogPosts1: BlogType[] = recentBlogPosts.data;
  const blogPosts: BlogType[] = allBlogPosts.data;
  const totalPages = allBlogPosts.totalPages;

  return (
    <div>
      <Head>
        <title>Blogs | Ajosqaud</title>
      </Head>
      <Header hasHero={true} />
      <Hero />
      {
        blogPosts1.length > 1 ?
          <div className='px-4 md:px-10 lg:px-24 2xl:px-28'>
            <RecentBlog blogPosts={blogPosts1} />
            <AllBlogs blogPosts={blogPosts} />
            <Pagination totalPages={totalPages} />
          </div> :
          <div className='py-10 md:py-16 lg:py-24 flex col-span-3 justify-center items-center gap-5 max-w-[600px] flex-col w-full mx-auto '>
            <img src='/assets/no-gallery.svg' className='mx-auto md:w-[264px] w-[150px] h-auto' />
            <p className='font-light text-center'>We currently have no blog posts. Explore our gallery for more information and stay tuned for upcoming blog content.</p>
          </div>
      }
      <Footer />
    </div>
  )
}

export default index

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query }: any = context;

  let url = 'https://api.ajosquad.com/blog?limit=6';
  if (query.page) {
    url = `https://api.ajosquad.com/blog?limit=6&page=${query.page}`;
  }
  const responses = await Promise.all([
    axios.get("https://api.ajosquad.com/blog"),
    axios.get(url)
  ]);

  const recentBlogPosts = responses[0].data;
  const allBlogPosts = responses[1].data;

  if (allBlogPosts.totalPages < query.page) {
    return {
      redirect: {
        destination: '/blog',
        permanent: false
      },
    };
  }

  return {
    props: {
      recentBlogPosts,
      allBlogPosts
    },
  }
}