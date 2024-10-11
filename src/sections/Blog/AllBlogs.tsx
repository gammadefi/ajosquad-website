import React from 'react';
import { BlogType } from '../../libs/types';
import Pagination from './Pagination';

const AllBlogs = ({ blogPosts }: { blogPosts: BlogType[] }) => {
  return (
    <section className='px-4 md:px-10 lg:px-24 2xl:px-28 py-10 md:py-20'>
      <h3 className='text-2xl lg:text-4xl font-semibold mb-5 md:mb-10'>All blog post</h3>
      <Pagination itemsPerPage={6} blogPosts={blogPosts} />
    </section>
  )
}

export default AllBlogs