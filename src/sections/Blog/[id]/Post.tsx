import { TbMessage2 } from "react-icons/tb"
import { BlogType } from "../../../libs/types"
import { BsDot } from "react-icons/bs"
import dateFormatter from "../../../libs/utils/dateFormatter"
import Image from "next/image"
import MarkdownRenderer from "../MarkdownRenderer"
import { calculateReadTime } from "../../../libs/utils/blogFunctions"

const Post = ({ blogPost }: { blogPost: BlogType }) => {
  return (
    <div className='space-y-2 md:space-y-5'>
      <div className='w-full'>
        <Image src={blogPost.image} alt={`Blog image: ${blogPost.title}`} className='rounded-xl w-full h-[204px] md:h-[270px] object-cover' width={300} height={200} />
      </div>
      <div className='text-[#676767] md:hidden flex items-center text-sm'>
        <span>{dateFormatter(blogPost.createdAt)}</span>
        <BsDot size={20} />
        <span>{calculateReadTime(blogPost.content)}</span>
      </div>
      <h3 className='font-semibold text-2xl md:text-3xl lg:text-5xl'>{blogPost.title}</h3>
      <div className="flex justify-between">
        <div className="flex gap-4">
          <div className='flex gap-1 items-center text-xs font-semibold'>
            {
              blogPost.tags.map((tag) => (
                <span className='bg-[#F1F1F1] py-2 px-3 rounded-md'>{tag}</span>
              ))
            }
          </div>
          <div className='hidden text-[#676767] md:flex items-center text-sm'>
            <span>{dateFormatter(blogPost.createdAt)}</span>
            <BsDot size={20} />
            <span>5 min read</span>
          </div>
        </div>
        <div className='text-base flex gap-1 items-center text-black font-medium'>
          <TbMessage2 size={25} />
          <span>{blogPost.comments.length} Comments</span>
        </div>
      </div>
      <article className='space-y-2 text-base lg:text-xl 2xl:text-2xl text-[#3E3D34] prose prose-p:my-2 prose-a:text-primary'>
        <MarkdownRenderer markdown={blogPost.content} />
      </article>
    </div>
  )
}

export default Post