import React from 'react'
import Image from 'next/image'
import { BsDot } from "react-icons/bs";
import { TbMessage2 } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';

type CommentType = {
  username: string,
  content: string,
  date: string,
};

export type BlogCardType = {
  id: string,
  imgUrl: string,
  title: string,
  description: string,
  publishDate: string,
  readTime: string,
  isRecentBlogSection: boolean,
  tags: {
    name: string
  }[],
  comments: CommentType[]
}

const BlogCard = ({ id, title, imgUrl, description, publishDate, readTime, tags, comments, isRecentBlogSection }: BlogCardType) => {
  return (
    <div className='w-full max-w-[400px] space-y-1.5'>
      {/* TODO: update img tag to Next.js Image component  */}
      <img src={imgUrl} alt={`Blog image: ${title}`} className='rounded-xl w-full' width={300} height={200} />
      <div className='text-[#676767] text-sm flex justify-between'>
        <div className='flex items-center'>
          <span>{publishDate}</span>
          <BsDot size={20} />
          <span>{readTime} read</span>
        </div>
        <div className='text-base flex gap-1 items-center text-black'>
          <TbMessage2 size={25} />
          <span>{comments.length} Comments</span>
        </div>
      </div>
      <h3 className='text-[#676767] font-semibold text-2xl'>{title}</h3>
      {
        !isRecentBlogSection &&
        <p>{description}</p>
      }
      <div className='text-sm flex justify-between'>
        <div className='flex gap-1 items-center text-xs font-semibold'>
          {
            tags.map((tag) => (
              <span className='bg-[#F1F1F1] py-2 px-3 rounded-md'>{tag.name}</span>
            ))
          }
        </div>
        <Link href={`/blog/${id}`} className='flex px-3 py-1.5 gap-1 items-center text-black rounded border border-primary'>
          <span>Read More</span>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  )
}

export default BlogCard