import React from 'react';
import { blogData } from './blog';
import { TbMessage2 } from 'react-icons/tb';
import { BsDot } from 'react-icons/bs';
import Link from 'next/link';
import { FaArrowRight } from 'react-icons/fa';
import BlogCard from './BlogCard';

const RecentBlog = () => {
  const recentBlog = blogData[0];
  const sideBlogs = blogData.slice(1, 3);
  return (
    <section className='px-4 md:p-10 lg:px-24 2xl:px-28 py-10 md:py-20'>
      <h3 className='text-2xl lg:text-4xl font-semibold mb-5 md:mb-10'>Recent blog post</h3>
      <div className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
        <div className='lg:w-2/3 space-y-2 md:space-y-3'>
          <div className='relative w-full'>
            <img src={recentBlog.imgUrl} alt={`Blog image: ${recentBlog.title}`} className='rounded-xl w-full h-[204px] md:h-[376px] object-cover' width={300} height={200} />
            <div className='text-white bg-[#45B175] absolute top-4 right-4 rounded-lg px-5 py-1 lg:py-2'>
              New
            </div>
          </div>
          <div className='text-[#676767] flex items-center text-sm'>
            <span>{recentBlog.publishDate}</span>
            <BsDot size={20} />
            <span>{recentBlog.readTime} read</span>
          </div>
          <h3 className='text-[#676767] font-bold text-2xl md:text-3xl'>{recentBlog.title}</h3>
          <div className='flex gap-1 items-center text-xs font-semibold'>
            {
              recentBlog.tags.map((tag) => (
                <span className='bg-[#F1F1F1] py-2 px-3 rounded-md'>{tag.name}</span>
              ))
            }
          </div>
          <p className='text-sm md:text-base text-[#3E3D34]'>
            Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras. Maecenas in massa in purus dui orci. Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras. Maecenas in massa in purus dui orci.Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras. Maecenas in massa in purus dui orci.Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras. Maecenas in massa in purus dui orci.
          </p>
          <div className='text-sm flex justify-between'>
            <div className='text-base flex gap-1 items-center text-black font-medium'>
              <TbMessage2 size={25} />
              <span>{recentBlog.comments.length} Comments</span>
            </div>
            <Link href={`/blog/${recentBlog.id}`} className='flex px-3 py-1.5 gap-1 items-center text-black rounded border border-primary'>
              <span>Read More</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
        <div className='-mx-4 md:-mx-10 lg:-mx-24 lg:w-1/3 overflow-x-scroll'>
          <div className='w-[750px] md:w-fit flex lg:flex-col gap-5 px-4 md:px-10 lg:px-24'>
            {
              sideBlogs.map((blog) => (
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
                  isRecentBlogSection={true}
                />
              ))
            }
          </div>
        </div>
      </div>
    </section>
  )
}

export default RecentBlog