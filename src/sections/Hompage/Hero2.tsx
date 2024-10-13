import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from "react-icons/fa";
import { Fade } from 'react-awesome-reveal';

const Hero = () => {
    return (
        <div className='relative box'>
            <div className='box'>
                <video className='w-full h-[90vh] md:h-[100vh] lg:h-[100vh]' playsInline loop autoPlay muted id="bg-video">
                    <source src="https://res.cloudinary.com/dldwasfdl/video/upload/v1728763118/2476159_Saving_Money_3840x2160_qq1jwx.mp4" />
                </video>
                <div className='w-full px-3  md:px-8 lg:px-[96px] h-[90vh] md:h-[100vh] lg:h-[100vh] flex justify-center items-center bg-black bg-opacity-30'>
                    <Fade direction="down" triggerOnce>
                        <div className='flex flex-col gap-2'>
                            <h1 className='md:text-7xl text-5xl md:text-center leading-[80px] text-white font-bold font-ageo'>
                                Ajosquad
                            </h1>
                            <h3 className='md:text-7xl text-4xl md:text-center md:leading-[72px] text-white md:font-medium font-ageo'>
                                Empowering Your Financial Journey
                            </h3>
                            <h5 className='text-white text-lg md:text-xl md:text-center my-4'>
                                Simplifying savings, amplifying financial confidence.
                            </h5>

                            <Link
                                target='_blank'
                                className='text-lg mx-auto my-3 rounded-lg shadow shadow-[#2F2B431A] w-full block md:w-[248px] text-center px-4 py-3 bg-white'
                                href="https://app.ajosquad.com/register"
                            >
                                <span className='gradient-text flex items-center justify-center gap-2'>
                                    Get Started <FaArrowRight className='gradient-text text-primary' />
                                </span>
                            </Link>
                        </div>
                    </Fade>
                </div>
            </div>



        </div>
    )
}

export default Hero