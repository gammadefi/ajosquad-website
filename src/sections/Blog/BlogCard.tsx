import React from 'react'
import Image from 'next/image'
import { BsDot } from "react-icons/bs";
import { TbMessage2 } from "react-icons/tb";
import { FaArrowRight } from "react-icons/fa";
import Link from 'next/link';
import { BlogCardType } from '../../libs/types';
import dateFormatter from '../../libs/utils/dateFormatter';
import { calculateReadTime, getFirst10Words } from '../../libs/utils/blogFunctions';
import MarkdownRenderer from './MarkdownRenderer';


const BlogCard = ({ id, title, image, content, createdAt, tags, comments, isRecentBlogSection }: BlogCardType) => {
  return (
    <div className='w-full md:max-w-[400px] 2xl:max-w-[450px] space-y-1.5'>
      {/* TODO: update img tag to Next.js Image component  */}
      <Image src={image} alt={`Blog image: ${title}`} className='rounded-xl w-full h-[280px]' width={300} height={200} />
      <div className='text-[#676767] text-sm flex justify-between'>
        <div className='flex items-center -space-x-1'>
          <span>{dateFormatter(createdAt)}</span>
          <BsDot size={20} />
          <span>{calculateReadTime(content)} min(s) read</span>
        </div>
        <div className='text-base flex gap-1 items-center text-black'>
          <TbMessage2 size={25} />
          <span>{comments.length} Comments</span>
        </div>
      </div>
      <h3 className='text-[#676767] font-semibold text-xl'>{title}</h3>
      {
        !isRecentBlogSection &&
        <MarkdownRenderer markdown={getFirst10Words(content) + "..."} />
      }
      <div className='text-sm flex justify-between'>
        <div className='flex gap-1 items-center text-xs font-semibold'>
          {
            tags.slice(0, 2).map((tag) => (
              <span className='bg-[#F1F1F1] py-2 px-3 rounded-md'>{tag}</span>
            ))
          }
        </div>
        <Link href={`/blog/${id}?tag=${tags[0]}`} className='flex px-3 py-1.5 gap-1 items-center text-black rounded border border-primary'>
          <span>Read More</span>
          <FaArrowRight />
        </Link>
      </div>
    </div>
  )
}

export default BlogCard