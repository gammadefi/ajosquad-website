import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Fade, Zoom, Bounce } from 'react-awesome-reveal';

const Shortstory = () => {
    return (
        <div className='w-full py-8 md:p-24 px-3 md:px-8 lg:px-[96px] h-full'>
            {/* Title with Zoom effect */}
            <Zoom triggerOnce duration={800}>
                <h3 className='text-[#08354C] text-center font-bold text-4xl md:text-5xl'>
                    A Short Story About Us
                </h3>
            </Zoom>

            <div className='w-full my-12 items-center px-5 md:px-12 gap-8 grid md:gap-12 grid-cols-1 md:grid-cols-2'>
                {/* Image Section with Flip effect */}
                <Bounce direction="left" triggerOnce delay={200}>
                    <div className='w-full mx-auto'>
                        <img src='/assets/about2.png' alt="About us" className='rounded-xl shadow-lg' />
                    </div>
                </Bounce>

                {/* Text Section with Staggered Fade effect */}
                <Fade cascade damping={0.2} direction="right" triggerOnce>
                    <div className='md:max-w-[483px]'>
                        <p className='md:text-2xl text-xl leading-7 font-light'>
                            <span className='font-bold'>Ajosquad</span>, a financial technology company that’s focused on helping people save money and achieve their financial goals. Our company is founded on the belief that everyone deserves the opportunity to be financially secure, no matter their income level or financial experience. Our team is made up of experienced professionals who are passionate about helping people take control of their financial future.
                        </p>

                        <Link href="/about" className='flex items-center w-[160px] justify-center border my-4 rounded px-4 py-3 gap-2 gradient-text'>
                            Read More <FaArrowRight className='text-primary font-thin' />
                        </Link>

                        {/* Stats Section */}

                        <p className='md:text-2xl text-xl leading-7 font-light'>
                            Our members have saved and we have made payouts of approx $1,000,000+ in 1yr+ with 0% default rate. We can call it <span className='font-semibold'>“Our Score Card”</span>
                        </p>
                        <div className='flex my-8 justify-evenly md:justify-start items-center gap-12'>
                            <Zoom triggerOnce>
                                <div>
                                    <h3 className='font-extrabold text-3xl gradient-text text-center md:text-4xl'>1+</h3>
                                    <span className='text-sm text-center'>Years</span>
                                </div>
                            </Zoom>
                            <Zoom triggerOnce delay={200}>
                                <div>
                                    <h3 className='font-extrabold text-3xl gradient-text text-center md:text-4xl'>300+</h3>
                                    <span className='text-sm text-center'>Active Users</span>
                                </div>
                            </Zoom>
                            <Zoom triggerOnce delay={400}>
                                <div>
                                    <h3 className='font-extrabold text-3xl gradient-text text-center md:text-4xl'>60+</h3>
                                    <span className='text-sm text-center'>Completed Squad</span>
                                </div>
                            </Zoom>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}

export default Shortstory;
