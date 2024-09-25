import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';

const Products = () => {
    return (
        <div className='w-full py-8 md:py-[55px] px-3 md:px-8 lg:px-[96px] h-full bg-[#E8F5FB]'>
            {/* Title with Zoom effect */}
            <Zoom triggerOnce duration={800}>
                <h3 className='gradient-text text-center font-bold text-3xl md:text-5xl'>Our Products</h3>
            </Zoom>

            <div className='grid px-5 md:px-12 grid-cols-1 gap-12 md:grid-cols-2 my-8 md:my-16 w-full'>
                {/* AjoSquad Savings Section */}
                <Slide direction="left" triggerOnce delay={200}>
                    <div className='w-full md:max-w-[525.5px]'>
                        <Zoom triggerOnce duration={1000}>
                            <h3 className='text-2xl text-center md:text-left font-bold md:text-4xl'>AjoSquad Savings</h3>
                        </Zoom>

                        <Fade direction="up" triggerOnce delay={400}>
                            <p className='my-4 font-[200] text-xl md:text-4xl'>
                                Our Product (<span className='gradient-text font-medium'>AjoSquad</span>) is a platform that gives members the enablement to pool funds together and take turns receiving pooled funds.
                            </p>
                        </Fade>

                        <Zoom triggerOnce delay={600}>
                            <img src='/assets/squad.png' className='w-full mx-auto md:-ml-2' alt="AjoSquad Savings" />
                        </Zoom>

                        <Fade direction="up" triggerOnce delay={800}>
                            <p className='my-4 font-[200] text-xl md:text-4xl'>
                                AjoSquad automates the process of community-based savings, allowing people to join a savings group, also known as a “Squad,” where members take turns receiving pooled funds.
                            </p>
                        </Fade>

                        <Fade triggerOnce delay={1000}>
                            <Link href="" className='flex items-center w-[160px] justify-center border border-primary my-4 rounded px-4 py-3 gap-2 gradient-text'>
                                Read More <FaArrowRight className='text-primary font-thin' />
                            </Link>
                        </Fade>
                    </div>
                </Slide>

                {/* AjoHomes for Investment Section */}
                <Slide direction="right" triggerOnce delay={400}>
                    <div className='w-full md:max-w-[530.5px]'>
                        <Zoom triggerOnce duration={1000}>
                            <h3 className='text-2xl text-center md:text-left font-bold md:text-4xl'>
                                AjoHomes for Investment <span className='text-sm whitespace-nowrap gradient-text'>Coming Soon!!!</span>
                            </h3>
                        </Zoom>

                        <Zoom triggerOnce delay={600}>
                            <img src='/assets/house-2.png' className='w-full my-4 mx-auto md:-ml-2' alt="AjoHomes Investment" />
                        </Zoom>

                        <Fade direction="up" triggerOnce delay={800}>
                            <p className='my-4 font-[200] text-xl md:text-4xl'>
                                <span className='gradient-text font-medium'>AjoHomes</span> is an innovative product designed to allow individuals to invest in real estate through collective savings, much like joining a squad to buy stocks and shares.
                            </p>
                        </Fade>

                        <Fade direction="up" triggerOnce delay={1000}>
                            <p className='my-4 font-[200] text-xl md:text-4xl'>
                                With AjoHomes, you can purchase a property purely for investment purposes, capitalizing on the potential growth of the real estate market and enjoying the benefits of property ownership without the usual complexities.
                            </p>
                        </Fade>

                        <Fade triggerOnce delay={1200}>
                            <Link href="" className='flex items-center w-[160px] justify-center border border-primary my-4 rounded px-4 py-3 gap-2 gradient-text'>
                                Read More <FaArrowRight className='text-primary font-thin' />
                            </Link>
                        </Fade>
                    </div>
                </Slide>
            </div>
        </div>
    );
}

export default Products;
