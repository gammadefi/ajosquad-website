import React from 'react'
import { blogData } from './blog'
import BlogCard from './BlogCard'

const AllBlog = () => {
  return (
    <section className='px-4 md:px-10 lg:px-24 2xl:px-28 py-10 md:py-20'>
      <h3 className='text-2xl lg:text-4xl font-semibold mb-5 md:mb-10'>All blog post</h3>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
        {
          blogData.map((blog) => (
            <BlogCard
              key={blog.id}
              id={blog.id}
              title={blog.title}
              imgUrl={blog.imgUrl}
              description={blog.description}
              tags={blog.tags}
              publishDate={blog.publishDate}
              readTime={blog.readTime}
              comments={blog.comments}
              isRecentBlogSection={false}
            />
          ))
        }
      </div>
    </section>
  )
}

export default AllBlog