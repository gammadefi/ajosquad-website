import React from 'react'
import Image from 'next/image'
import { Slide } from 'react-awesome-reveal'
import ComingSoon from '../../../public/assets/Coming Soon.svg'
import HomeImage from '../../../public/assets/House Image 2.png'

const IntroducingAjoHomes = () => {
  return (
    <section className='px-5 md:px-8 py-8 lg:py-20 lg:px-24'>
      <div className='text-[#08354C] mb-10 lg:mb-14 text-center'>
        <h1 className='font-bold mx-auto w-fit text-3xl lg:text-5xl flex items-center gap-2'>Introducing AjoHome <Image src={ComingSoon} alt='coming soon icon' className='md:h-10 md:w-10 lg:w-fit lg:h-fit'/></h1>
        <p className='lg:text-2xl'>A Novel Way to Invest in Real Estate</p>
      </div>
      <div className='lg:flex items-center justify-between'>
        <Slide className='md:h-[640px] lg:w-1/2' direction='left' triggerOnce>
          <Image src={HomeImage} alt='About image' className='h-full mx-auto' />
        </Slide>
        <Slide className='lg:w-1/2' direction='right' triggerOnce>
          <p className='font-light py-6 lg:py-0 lg:px-32 text-xl lg:text-2xl'>At <span className='font-semibold'>Ajosquad</span>, we are excited to introduce our newest product, <span className='font-semibold'>AjoHomes</span>—an innovative product designed to allow individuals to invest in real estate through collective savings, much like joining a squad to buy stocks and shares. With <span className='font-semibold'>AjoHomes</span>, you can purchase a property purely for investment purposes, capitalizing on the potential growth of the real estate market and enjoying the benefits of property ownership without the usual complexities.</p>
        </Slide>
      </div>
    </section>
  )
}

export default IntroducingAjoHomes