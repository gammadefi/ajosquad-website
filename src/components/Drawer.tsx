import React, { useRef, useState } from 'react'
import useOnClickOutside from '../hooks/useClickOutside';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaChevronCircleUp, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import clsx from 'clsx';

interface INO {
    isOpen: boolean;
    setIsOpen: any;
    hasHero: boolean
}

const Drawer = ({ isOpen, setIsOpen, hasHero }: INO) => {
    const { pathname, push } = useRouter();
    const [openDrop, setOpenDrop] = useState(false)
    const sideNavRef = useRef<any>();
    useOnClickOutside(sideNavRef, () => {
        setIsOpen(false);
    });

    console.log(pathname)
    return (
        <>
            {isOpen && (
                <section
                    ref={sideNavRef}
                    className={`fixed notification-sidebar ${isOpen ? "active" : ""
                        } rounded-tl rounded-bl transition-transform duration-1000 h-screen w-[90%] rounded-r-lg   top-0 shadow-md bg-white z-30 left-0`}
                >
                    <div className="h-full  w-full  flex flex-col pr-1 justify-center">
                        <div
                            style={{ borderColor: "#EBEFF2" }}
                            className="py-5 flex items-center justify-between  px-5"
                        >
                            <Link
                                href="/"
                                className="align-middle flex items-center justify-center gap-3 text-2xl font-bold text-[#03071e]"
                            >
                                <img className="h-16 w-auto" alt="Ajosquad" src="/assets/logo.png" />
                            </Link>
                            <img
                                onClick={() => {
                                    setIsOpen(false);
                                }}
                                src="/assets/close-nav.svg"
                                className="w-8 h-auto col cursor-pointer"
                                alt=""
                            />
                        </div>
                        <div className="flex-1 relative scrollbar px-6 py-4 overflow-y-auto">
                            <div className="flex w-full justify-center gap-y-3 mx-auto flex-col">
                                <Link
                                    href="/"
                                    className={`pr-12  border-b  flex items-center text-base h-[50px] `}
                                >
                                    <span className={pathname === "/" ? "gradient-text font-semibold" : "text-black"}>Home</span>

                                </Link>
                                <Link
                                    href="/about"
                                    className={`pr-12  border-b  flex items-center text-base h-[50px] `}
                                >
                                    <span className={pathname === "/about" ? "gradient-text font-semibold" : "text-black"}>About Us</span>

                                </Link>

                                <button
                                    onClick={() => setOpenDrop(!openDrop)}
                                    className={`pr-12 w-full  border-b  justify-between flex items-center text-base h-[50px] `}
                                >
                                    <span className={pathname === "/*****" ? "gradient-text font-semibold" : "text-black"}>Product</span>

                                    <FaChevronDown className={clsx('text-black transform transition-transform duration-30', openDrop && "rotate-180")} />

                                </button>

                                {
                                    openDrop &&
                                    <>
                                        <Link
                                            href="/products/ajosquad"
                                            className={`pr-12  border-b  flex items-center text-base h-[50px] `}
                                        >
                                            <span className={pathname === "/products/ajosquad" ? "gradient-text font-semibold" : "text-black"}>AjoSquad</span>

                                        </Link>
                                        <Link
                                            href="/products/ajohomes"
                                            className={`pr-12  border-b  flex items-center text-base h-[50px] `}
                                        >
                                            <span className={pathname === "/products/ajohomes" ? "gradient-text font-semibold" : "text-black"}>AjoHomes <span className='text-[11px] ml-4 !-mt-3 gradient-text'>coming soon!!!</span></span>

                                        </Link>
                                    </>
                                }


                                <Link
                                    href="/gallery"
                                    className={`pr-12  border-b  flex items-center text-base h-[50px] `}
                                >
                                    <span className={pathname === "/gallery" ? "gradient-text font-semibold" : "text-black"}>Gallery</span>

                                </Link>
                                <Link
                                    href="/blog"
                                    className={`pr-12  border-b  flex items-center text-base h-[50px] `}
                                >
                                    <span className={pathname === "/blog" ? "gradient-text font-semibold" : "text-black"}>Blog</span>

                                </Link>
                                <Link
                                    href="/faq"
                                    className={`pr-12  border-b  flex items-center text-base h-[50px] `}
                                >
                                    <span className={pathname === "/faq" ? "gradient-text font-semibold" : "text-black"}>Help</span>

                                </Link>
                            </div>
                            <div className='w-full absolute right-0 px-3  bottom-3 flex flex-col gap-2'>
                                <Link
                                    className={clsx(
                                        "border  text-center rounded-lg px-4 py-2",
                                        "border-primary text-primary"
                                    )}
                                    href=""
                                >
                                    <span className='gradient-text'>Login</span>
                                    
                                </Link>
                                <Link
                                    className="border w-full text-center text-white rounded-lg bg-primary hover:bg-primary-hover px-4 py-2"
                                    href=""
                                >
                                    Sign Up
                                </Link>
                            </div>
                        </div>
                    </div>


                </section >
            )}
        </>
    )
}

export default Drawer