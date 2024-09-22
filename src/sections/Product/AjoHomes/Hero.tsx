import Link from 'next/link';
import React from 'react'
import { Fade } from 'react-awesome-reveal';
import { FaArrowRight } from 'react-icons/fa';

const Hero = () => {
  return (
    <div className="w-full bg-center bg-cover bg-no-repeat lg:h-[100vh] bg-[url('/assets/ProductAjohomeHeroImage.png')]">
      <div className='w-full h-full pt-32 lg:pt-20 pb-10 lg:pb-0 px-3 md:px-8 lg:px-[96px] flex items-center bg-black bg-opacity-40'>
        <Fade direction="down" triggerOnce>
          <div className='text-white flex flex-col gap-2'>
            <h5 className='text-white font-medium md:text-2xl'>
              Coming soon!!!
            </h5>
            <h1 className='md:text-7xl text-4xl font-medium font-ageo'>Ajosquad</h1>
            <h3 className='lg:w-11/12 md:text-5xl lg:text-7xl text-3xl lg:leading-[72px] font-light font-ageo'>
              A Novel Way to Invest in Real Estate
            </h3>
            <Link className='text-lg my-3 rounded-lg shadow shadow-[#2F2B431A] block w-full md:w-fit text-center px-4 py-3 md:px-10 bg-white' href="/">
              <span className='gradient-text flex gap-2 items-center justify-center'>
                Try AjoHomes now
                <FaArrowRight className='text-primary' />
              </span>
            </Link>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Hero;
