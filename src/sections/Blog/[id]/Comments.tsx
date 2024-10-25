'use client'

import Image from "next/image"

const Comments = ({ comments }: { comments: { id: string, content: string }[] }) => {
  return (
    <section className="bg-[#F7F7F8] space-y-3 rounded-xl py-5 px-3 h-fit">
      <div className="flex items-center gap-4">
        <h2 className="font-semibold text-3xl">
          Comments
        </h2>
        <span className="bg-primary h-10 w-10 flex items-center justify-center rounded-full p-1 text-white">
          {comments.length}
        </span>
      </div>
      <div className="px-[14px] py-[10px] rounded-2xl md:rounded-3xl flex justify-between gap-4 bg-white">
        <input type="text" placeholder="Add a comment....." className="w-full placeholder:text-[#C8CCD0] focus:outline-none" />
        <button>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7.97917 14.6668C11.6611 14.6668 14.6458 11.6821 14.6458 8.00016C14.6458 4.31826 11.6611 1.3335 7.97917 1.3335C4.29727 1.3335 1.3125 4.31826 1.3125 8.00016C1.3125 11.6821 4.29727 14.6668 7.97917 14.6668Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M4.80859 10.6665C5.50859 11.6732 6.68193 12.3332 8.00193 12.3332C9.32193 12.3332 10.4886 11.6732 11.1953 10.6665" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        </button>
      </div>
      {
        comments.length === 0 ? <p>No Comments yet</p> :
          <div className="space-y-4 my-2">
            {
              comments.map((comment) => (
                <CommentCard key={comment.id} comment={comment.content} />
              ))
            }
          </div>
      }
    </section>
  )
}

export default Comments

function CommentCard({ comment }: { comment: string }) {
  return (
    <div className="flex items-center gap-3">
      {/* <img src="" alt="" className="" /> */}
      <div className="h-12 w-12 flex items-center justify-center rounded-[100%] p-1.5 border-2 border-primary font-bold text-[#101928]">
        <span>
          AN
        </span>
      </div>
      <div className="bg-[#FFF9ED] w-full p-3 rounded-xl">
        <p>{comment}</p>
      </div>
    </div>
  )
}