import React from 'react'
import { Fade } from 'react-awesome-reveal';

const Hero = () => {
    return (
        <div className="w-full lg:h-[80vh] 2xl:h-[90vh] bg-center bg-cover bg-no-repeat bg-[url('/assets/gallery-hero.png')]">
            <div className='w-full h-full pt-48 pb-20 lg:pt-48 lg:pb-24 px-5 md:px-8 lg:px-[96px] flex items-center bg-black bg-opacity-60'>
                <Fade direction="down" triggerOnce>
                    <div className='text-lg md:text-xl lg:text-2xl text-white flex flex-col gap-3 lg:gap-6'>
                        <p>
                            Discover More
                        </p>
                        <h1 className='md:w-4/5 lg:w-3/5 md:text-[64px] md:leading-[72px] text-4xl font-medium'>Explore Our Collection of Informative Videos</h1>
                       
                    </div>
                </Fade>
            </div>
        </div>
    )
}

export default Hero;
