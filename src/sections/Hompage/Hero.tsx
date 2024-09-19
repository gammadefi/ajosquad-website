import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from "react-icons/fa";

const Hero = () => {
  return (
    <div className='w-full bg-center bg-cover bg-no-repeat h-[90vh] lg:h-[100vh] bg-hero'>
      <div className='w-full px-3 md:px-8 lg:px-[96px] h-full  flex justify-center items-center bg-black bg-opacity-40'>
        <div className='flex flex-col gap-2'>
          <h1 className='md:text-7xl text-5xl text-center leading-[80px] text-white font-bold font-ageo'>Ajosquad</h1>
          <h3 className='md:text-7xl text-5xl text-center leading-[72px]  text-white font-medium font-ageo'>Empowering Your Financial Journey</h3>
          <h5 className='text-white md:text-xl text-center my-4 '>Simplifying savings, amplifying financial confidence.</h5>

          <Link className=' text-lg mx-auto my-3 rounded-lg shadow shadow-[#2F2B431A] block w-[248px] text-center px-4 py-3 bg-white' href="/"><span className='gradient-text flex items-center justify-center gap-2'>Get Started <FaArrowRight className='gradient-text text-primary' /> </span></Link>

        </div>

      </div>

    </div>
  )
}

export default Hero