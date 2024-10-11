'use client'

import ReactPaginate from "react-paginate";
import { BlogType } from "../../libs/types";
import { useState } from "react";
import BlogCard from "./BlogCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Pagination = ({ itemsPerPage, blogPosts }: { itemsPerPage: number, blogPosts: BlogType[] }) => {
  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  const currentBlogPosts = blogPosts.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(blogPosts.length / itemsPerPage);

  const handlePageClick = (e: any) => {
    const newOffset = (e.selected * itemsPerPage) % blogPosts.length;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'>
        <Items currentBlogPosts={currentBlogPosts} />
      </div>
      <div className="my-4 lg:my-8 w-full flex justify-center md:justify-end">
        <ReactPaginate
          breakLabel="..."
          nextLabel={<NextBtn />}
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel={<PreviousBtn />}
          renderOnZeroPageCount={null}
          className="flex justify-around gap-5"
          pageClassName="py-2 px-4 rounded"
          activeClassName="bg-primary py-2 px-4 rounded text-white font-bold"
          previousClassName="w-28 border border-primary py-2 px-4 rounded"
          nextClassName="w-28 border border-primary py-2 px-4 rounded"
          disabledClassName="opacity-40"
        />
      </div>
    </>
  );
}

export default Pagination;


function Items({ currentBlogPosts }: { currentBlogPosts: BlogType[] }) {
  return (
    <>
      {currentBlogPosts &&
        currentBlogPosts.map((blog) => (
          <BlogCard
            key={blog.id}
            id={blog.id}
            title={blog.title}
            image={blog.image}
            content={blog.content}
            tags={blog.tags}
            createdAt={blog.createdAt}
            readTime="5 mins"
            comments={blog.comments}
            isRecentBlogSection={false}
          />
        ))}
    </>
  );
}

function NextBtn() {
  return (
    <div className="flex justify-center items-center gap-2 font-semibold">
      <p>Next</p>
      <FaChevronRight size={14} />
    </div>
  );
}

function PreviousBtn() {
  return (
    <div className="flex justify-center items-center gap-2 font-semibold">
      <FaChevronLeft size={14} />
      <p>Previous</p>
    </div>
  );
}

