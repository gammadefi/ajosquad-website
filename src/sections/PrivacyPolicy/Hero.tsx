import React from 'react'
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';
import ChartIcon from '../../../public/assets/chart-white.svg'

const Hero = () => {
  return (
    <div className="w-full bg-center bg-cover bg-no-repeat bg-[url('/assets/PrivacyPolicyHeroImage.png')]">
      <div className='w-full h-full pt-48 pb-20 lg:pt-48 lg:pb-24 px-5 md:px-8 lg:px-[96px] flex items-center bg-black bg-opacity-60'>
        <Fade direction="down" triggerOnce>
          <div className='text-lg md:text-2xl text-white flex flex-col gap-3 lg:gap-6'>
            <div className='flex gap-2 items-center'>
              <Image src={ChartIcon} alt='Icon' />
              <p>
                Privacy Policy
              </p>
            </div>
            <h1 className='lg:w-3/4 md:text-7xl text-4xl font-medium font-ageo'>Ajosquad Privacy Policy</h1>
            <p>
              This policy explains how we collect, use, and protect your personal information
            </p>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Hero;
