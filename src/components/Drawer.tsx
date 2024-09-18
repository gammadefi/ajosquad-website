import React, { useRef } from 'react'
import useOnClickOutside from '../hooks/useClickOutside';
import Link from 'next/link';
import { useRouter } from 'next/router';

interface INO {
    isOpen: boolean;
    setIsOpen: any;
}

const Drawer = ({ isOpen, setIsOpen }: INO) => {
    const { pathname, push } = useRouter();
    const sideNavRef = useRef<any>();
    useOnClickOutside(sideNavRef, () => {
        setIsOpen(false);
    });
    return (
        <>
            {isOpen && (
                <section
                    ref={sideNavRef}
                    className={`fixed notification-sidebar ${isOpen ? "active" : ""
                        } rounded-tl rounded-bl transition-transform duration-1000 h-[443px] w-full  top-0 shadow-md bg-white z-30 right-0`}
                >
                    <div className="h-full flex flex-col pr-1 justify-center">
                        <div
                            style={{ borderColor: "#EBEFF2" }}
                            className="py-5 flex items-center justify-between  px-5"
                        >
                            <div className="flex items-center">
                                <img className="h-10 w-auto" alt="G" src="/assets/ESL-Logo.svg" />

                            </div>
                            <img
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                                src="/assets/close-nav.svg"
                                className="w-8 h-auto cursor-pointer"
                                alt=""
                            />
                        </div>
                        <div className="flex-1 scrollbar px-6 py-4 overflow-y-auto">
                            <div className="flex w-full gap-y-6 mx-auto flex-col">
                                <Link
                                    href="/"
                                    className={`pr-12 text-base ${pathname === "/" ? "text-[#C9092E]" : " text-[#022295]"}`}
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/about-us"
                                    className={`pr-12 text-base ${pathname === "/about-us" ? "text-[#C9092E]" : " text-[#022295]"}`}
                                >
                                    About us
                                </Link>
                                <Link
                                    href="/what-we-do"
                                    className={`pr-12 text-base ${pathname === "/what-we-do" ? "text-[#C9092E]" : " text-[#022295]"}`}
                                >
                                    What we do
                                </Link>
                                <Link
                                    href="/career"
                                    className={`pr-12 text-base ${pathname === "/career" ? "text-[#C9092E]" : " text-[#022295]"}`}
                                >
                                    Career
                                </Link>
                                <Link
                                    href="/contact-us"
                                    className={`pr-12 text-base ${pathname === "/contact-us" ? "text-[#C9092E]" : " text-[#022295]"}`}
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>

                    </div>
                </section>
            )}
        </>
    )
}

export default Drawer