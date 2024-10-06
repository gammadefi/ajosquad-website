import Link from 'next/link';
import React from 'react'
import { Fade } from 'react-awesome-reveal';

const Hero = () => {
  return (
    <div className="w-full bg-center bg-cover bg-no-repeat lg:h-[100vh] bg-hero-home">
      <div className='w-full h-full pt-32 lg:pt-20 pb-10 lg:pb-0 px-3 md:px-8 lg:px-[96px] flex items-center bg-black bg-opacity-40'>
        <Fade direction="down" triggerOnce>
          <div className='text-white flex flex-col gap-2'>
            <h1 className='md:text-7xl text-4xl font-medium font-ageo'>Ajosquad</h1>
            <h3 className='lg:w-4/5 md:text-7xl text-3xl lg:leading-[72px] font-light font-ageo'>
              Effortless Savings, Maximum Returns.
            </h3>
            <Link className='text-lg my-3 rounded-lg shadow shadow-[#2F2B431A] block w-full md:w-fit text-center px-4 py-3 md:px-16 bg-white' href="https://app.ajosquad.com/register"><span className='gradient-text'>Try Ajosquad now</span></Link>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Hero;
