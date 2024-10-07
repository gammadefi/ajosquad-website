import React from 'react';
import { Fade, Zoom } from 'react-awesome-reveal';

const KeyFeatures = () => {
    return (
        <div className='w-full py-8 md:p-24 px-3 md:px-8 lg:px-[96px] h-full'>
            <Fade direction="up" triggerOnce>
                {/* Zoom-in effect on the main heading */}
                <Zoom triggerOnce>
                    <h3 className='text-[#08354C] text-center font-bold text-3xl md:text-5xl'>
                        Key Features & Benefits of AjoSquad
                    </h3>
                </Zoom>

                {/* Grid for features with Zoom effects */}
                <div className='grid md:grid-cols-2 px-5 grid-cols-1 lg:grid-cols-3 md:max-w-[980px] mx-auto items-center my-12 justify-center gap-5'>
                    <Zoom  delay={150} triggerOnce>
                        <div className='md:w-[300px] w-full mx-auto p-5 h-[200px] rounded-xl bg-[#EEEFF0]'>
                            <h3 className='text-xl mx-auto font-semibold'>Automated Savings</h3>
                            <p className='font-light md:text-base text-sm mt-2'>
                                Say goodbye to manual contributions! Ajosquad automates bi-weekly deductions, ensuring consistent savings progress.
                            </p>
                        </div>
                    </Zoom>

                    <Zoom  delay={300} triggerOnce>
                        <div className='md:w-[300px] w-full mx-auto p-5 h-[200px] rounded-xl bg-[#EEEFF0]'>
                            <h3 className='text-xl font-semibold'>Variety of Savings Groups (Squad)</h3>
                            <p className='font-light md:text-base text-sm mt-2'>
                                Choose a savings group that aligns with your budget - $200, $300, $500, or $1000 twice monthly contribution options are available.
                            </p>
                        </div>
                    </Zoom>

                    <Zoom delay={450} triggerOnce>
                        <div className='md:w-[300px] w-full mx-auto p-5 h-[200px] rounded-xl bg-[#EEEFF0]'>
                            <h3 className='text-xl font-semibold'>Transparent and Secure</h3>
                            <p className='font-light md:text-base text-sm mt-2'>
                                Ajosquad is a FINTRAC-registered company utilizing industry-leading payment processing (Gocardless) and verification (Shufti Pro) for your peace of mind.
                            </p>
                        </div>
                    </Zoom>

                    <Zoom delay={600} triggerOnce>
                        <div className='md:w-[300px] w-full mx-auto p-5 h-[200px] rounded-xl bg-[#EEEFF0]'>
                            <h3 className='text-xl font-semibold'>Default Protection</h3>
                            <p className='font-light md:text-base text-sm mt-2'>
                                Don't worry about missed payments from others! Ajosquad has you covered. We handle defaults and ensure the group savings cycle continues uninterrupted.
                            </p>
                        </div>
                    </Zoom>

                    <Zoom delay={750} triggerOnce>
                        <div className='md:w-[300px] w-full mx-auto p-5 h-[200px] rounded-xl bg-[#EEEFF0]'>
                            <h3 className='text-xl font-semibold'>Increased Savings Potential</h3>
                            <p className='font-light md:text-base text-sm mt-2'>
                                By pooling funds with others, you gain access to a larger payout sooner, accelerating your financial goals.
                            </p>
                        </div>
                    </Zoom>

                    <Zoom delay={900} triggerOnce>
                        <div className='md:w-[300px] w-full mx-auto p-5 h-[200px] rounded-xl bg-[#EEEFF0]'>
                            <h3 className='text-xl font-semibold'>Simplified Group Formation</h3>
                            <p className='font-light md:text-base text-sm mt-2'>
                                Eliminate the hassle of finding trustworthy individuals. Ajosquad facilitates seamless group joining and management.
                            </p>
                        </div>
                    </Zoom>
                </div>
            </Fade>
        </div>
    );
};

export default KeyFeatures;
