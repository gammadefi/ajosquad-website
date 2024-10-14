import React from 'react';
import { Fade, Slide, Zoom } from 'react-awesome-reveal';
import { FaCheckCircle } from 'react-icons/fa';

const Benefits = () => {
    return (
        <div className='w-full py-12 text-white md:py-[55px] px-3 md:px-8 lg:px-[96px] h-full bg-[#08354C]'>
            {/* Title with Zoom effect */}
            <Zoom triggerOnce duration={800}>
                <h3 className='text-white text-center font-bold text-3xl md:text-5xl'>Benefits of Using Our Products</h3>
            </Zoom>

            {/* AjoSquad Savings Section */}
            <div className='grid px-5 items-center md:px-12 grid-cols-1 gap-12 md:grid-cols-2 my-8 md:my-16 w-full'>
                <Slide direction="left" triggerOnce>
                    <div className='w-full md:max-w-[525.5px]'>
                        <Zoom triggerOnce duration={1000}>
                            <img src='/assets/save.png' alt="AjoSquad Savings" />
                        </Zoom>
                    </div>
                </Slide>

                <Slide direction="right" triggerOnce>
                    <div className='w-full md:max-w-[521px]'>
                        <Fade direction="up" triggerOnce delay={200}>
                            <h3 className='text-3xl md:text-4xl font-bold'>AjoSquad Savings</h3>
                        </Fade>

                        <Fade direction="up" triggerOnce delay={400}>
                            <p className='text-white font-extralight my-4 text-2xl md:text-4xl leading-[44px]'>
                                Become Financially free by joining a <span className='font-semibold'>squad</span> and boost your savings capability.
                            </p>
                        </Fade>

                        <div className='flex gap-4 my-6 flex-col'>
                            {[
                                "Already vetted and trusted people to form saving group.",
                                "Fully automated platform to receive funds from members and credit beneficiary with one deposit.",
                                "Track all payment and follow up if variation occurs.",
                                "Automatically send reminders and prompt before debit day.",
                                "Save with others and collect the lump sum as one payment."
                            ].map((benefit, index) => (
                                <Fade direction="up" triggerOnce delay={600 + index * 200} key={index}>
                                    <div className='flex md:text-lg gap-2 items-center'>
                                        <div className=''>
                                            <FaCheckCircle className="h-6 !text-[24px]" />
                                        </div>
                                        {benefit}
                                    </div>
                                </Fade>
                            ))}
                        </div>
                    </div>
                </Slide>
            </div>

            {/* AjoHomes for Investment Section */}
            <div className='grid px-5 items-center md:px-12 grid-cols-1 gap-12 md:grid-cols-2 my-8 md:my-16 w-full'>
                <Slide direction="left" className='order-last md:order-1' triggerOnce>
                    <div className='w-full md:max-w-[521px]'>
                        <Fade direction="up" triggerOnce delay={200}>
                            <h3 className='text-3xl md:text-4xl font-bold'>AjoHomes for Investment</h3>
                        </Fade>

                        <Fade direction="up" triggerOnce delay={400}>
                            <p className='text-white font-extralight my-4 text-2xl md:text-4xl leading-[44px]'>
                                AjoHomes is an innovative product designed to allow individuals to invest in real estate through collective savings, much like joining a squad to buy stocks and shares.
                            </p>
                        </Fade>

                        <Fade direction="up" triggerOnce delay={600}>
                            <h3 className='font-semibold text-xl md:text-2xl'>Key Benefits of Using AjoHomes</h3>
                        </Fade>

                        <div className='flex gap-4 my-3 flex-col'>
                            {[
                                "Full Transparency and Personal Involvement",
                                "Expert Property Management and Maintenance",
                                "Stable Canadian Real Estate Market",
                                "Strategic 3-5 Year Investment Horizon",
                                "Detailed Quarterly Performance Reports"
                            ].map((benefit, index) => (
                                <Fade direction="up" triggerOnce delay={800 + index * 200} key={index}>
                                    <div className='flex md:text-lg gap-2 items-center'>
                                        <FaCheckCircle className="h-6 text-[24px]" /> {benefit}
                                    </div>
                                </Fade>
                            ))}
                        </div>
                    </div>
                </Slide>

                <Slide direction="right" className='order-1 md:order-last' triggerOnce>
                    <div className='w-full md:max-w-[525.5px]'>
                        <Zoom triggerOnce duration={1000}>
                            <img src='/assets/house-image.png' alt="AjoHomes Investment" />
                        </Zoom>
                    </div>
                </Slide>
            </div>
        </div>
    );
};

export default Benefits;
