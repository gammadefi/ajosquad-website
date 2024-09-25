import Image from 'next/image';
import React from 'react';
import { Slide, Fade } from 'react-awesome-reveal';

const Security = () => {
    return (
        <div className='w-full bg-[#E8F5FB] py-12 md:py-24 px-4 lg:px-[96px] h-full'>
            <div className='w-full my-12 items-center px-5 md:px-8 gap-8 grid md:gap-10 grid-cols-1 md:grid-cols-2'>

                {/* Image with Slide-in effect */}
                <Slide direction="left" triggerOnce>
                    <div className='flex justify-center'>
                        <Image src="/assets/security.png" alt='Security illustration' width={450} height={450} />
                    </div>
                </Slide>

                {/* Text content with separate animations */}
                <div >
                    {/* Fade-in effect for the header */}
                    <Fade direction="up" delay={150} triggerOnce>
                        <h3 className='text-3xl lg:text-5xl text-[#08354C] font-bold leading-tight'>
                            Your Money, Safeguarded with <span className='text-gradient'>Unmatched Data Security</span>.
                        </h3>
                    </Fade>

                    {/* Slide-in effect for the paragraph */}
                    <Slide direction="up" delay={300} triggerOnce>
                        <p className='mt-6 md:text-3xl text-xl md:!leading-9 font-light'>
                            Step into a new era of financial protection with <span className='font-semibold text-[#08354C]'>AjoSquad</span> - Secure, Reliable, and Always On. Experience the confidence that comes with knowing your money is shielded from threats, allowing you to unlock a brighter financial future.
                        </p>
                    </Slide>
                </div>
            </div>
        </div>
    );
};

export default Security;
