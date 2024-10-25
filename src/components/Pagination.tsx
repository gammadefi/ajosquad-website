'use client';

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useRouter } from "next/router";

export default function Pagination({ totalPages }: { totalPages: number }) {
  const pathname = usePathname();
  const router = useRouter();
  const { query } = router;
  const currentPage: any = query.page || '1';
  const currentTag = query.tag

  const createPageURL = (pageNumber: number | string) => {
    const params: any = new URLSearchParams();
    if (query.tag) {
      params.set('tag', currentTag);
      params.set('page', pageNumber.toString());
      return `${pathname}?${params.toString()}`;
    }
    params.set('page', pageNumber.toString());
    return `${pathname}?${params.toString()}`;
  };

  function renderItems() {
    const elements = [];
    for (let index = 1; index <= totalPages; index++) {
      elements.push(
        <PaginationNumber
          key={index}
          href={createPageURL(index)}
          page={index}
          isActive={currentPage == index}
        />
      );
    }
    return elements;
  }
  return (
    <div className="flex gap-2.5 justify-end pb-10">
      <PaginationArrow
        direction="left"
        href={createPageURL(Number(currentPage) - 1)}
        isDisabled={currentPage <= 1}
      />
      {renderItems()}
      <PaginationArrow
        direction="right"
        href={createPageURL(Number(currentPage) + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

function PaginationNumber({ page, href, isActive }: { page: number | string, href: string, isActive: boolean }) {
  return (
    <Link href={href} scroll={false} className={`flex p-2 w-8 rounded-md items-center justify-center text-sm ${isActive && 'bg-primary text-white'}`}>
      {page}
    </Link>
  );
}

function PaginationArrow({ href, direction, isDisabled }: { href: string, direction: 'left' | 'right', isDisabled?: boolean }) {
  const jsx =
    direction === 'left' ? (
      <>
        <FaChevronLeft />
        <p>Previous</p>
      </>
    ) : (
      <>
        <p>Next</p>
        <FaChevronRight />
      </>
    );

  return isDisabled ? (
    <div className="text-sm flex px-3 gap-1 items-center justify-center rounded-md border pointer-events-none text-gray-400">{jsx}</div>
  ) : (
    <Link href={href} scroll={false} className="text-sm flex px-3 gap-1 items-center justify-center rounded-md border border-primary">
      {jsx}
    </Link>
  );
}