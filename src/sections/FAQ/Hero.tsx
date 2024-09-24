import React from 'react'
import { Fade } from 'react-awesome-reveal';

const Hero = () => {
  return (
    <div className="w-full lg:h-[80vh] 2xl:h-[90vh] bg-center bg-cover bg-no-repeat bg-[url('/assets/FAQHeroImage.png')]">
      <div className='w-full h-full pt-48 pb-20 lg:pt-48 lg:pb-24 px-5 md:px-8 lg:px-[96px] flex items-center bg-black bg-opacity-60'>
        <Fade direction="down" triggerOnce>
          <div className='text-lg md:text-xl lg:text-2xl text-white flex flex-col gap-3 lg:gap-6'>
            <p>
              Get in touch
            </p>
            <h1 className='md:w-4/5 lg:w-2/5 md:text-7xl text-4xl font-medium'>We're Here To Help 24/7</h1>
            <p className='md:w-11/12 lg:w-[70%] 2xl:w-3/5'>
              Need assistance or have questions about Ajosquad? We're here to help! Browse our Help Centre for solutions or chat with us for direct support. Our FAQ section is also available for quick answers
            </p>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Hero;
