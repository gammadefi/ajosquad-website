import React from 'react';
import { BlogType } from '../../libs/types';
import BlogCard from './BlogCard';

const AllBlogs = ({ blogPosts }: { blogPosts: BlogType[] }) => {
  return (
    <section className='py-10 md:py-20'>
      <h3 className='text-2xl lg:text-4xl font-semibold mb-5 md:mb-10'>All blog post</h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
        {
          blogPosts.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              image={blog.image}
              content={blog.content}
              tags={blog.tags}
              createdAt={blog.createdAt}
              comments={blog.comments}
              isRecentBlogSection={false}
            />
          ))}
      </div>
    </section>
  )
}

export default AllBlogs