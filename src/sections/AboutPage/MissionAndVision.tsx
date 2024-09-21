import Image from 'next/image'
import React from 'react'
import { Slide } from 'react-awesome-reveal'
import ChartIcon from '../../../public/assets/chart.svg'

const MissionAndVision = () => {
  return (
    <section className='px-6 py-10 lg:py-20 lg:px-24 bg-[#E8F5FB] text-xl md:text-3xl font-light'>
        <div className='md:flex items-center justify-between'>
          <Slide className='py-6 lg:py-0 lg:px-20 space-y-4 md:w-1/2 lg:2/5' direction='left' triggerOnce>
            <div>
              <div className='flex items-center gap-3'>
                <Image src={ChartIcon} alt='Chart icon' />
                <h2 className='font-bold lg:text-xl'>Our Mission</h2>
              </div>
              <p className='lg:text-5xl'>
                Our <span className='font-bold md:gradient-text'>mission</span> is to empower people to save and grow their money collectively by offering a user-friendly, secure, and automated solution for co-operative savings.
              </p>
            </div>
          </Slide>
          <Slide className='lg:h-[600px] lg:w-[70%]' direction='right' triggerOnce>
            <img src='/assets/MissionImage.svg' alt='Mission image' className='h-full w-full mx-auto' />
          </Slide>
        </div>
        <div className='lg:flex items-center justify-between'>
          <div className='hidden lg:block'>
          </div>
          <Slide className='py-6 lg:py-0 lg:px-20 space-y-4 lg:w-[65%]' direction='right' triggerOnce>
            <div>
              <div className='flex items-center gap-3'>
                <Image src={ChartIcon} alt='Chart icon' />
                <h2 className='font-bold lg:text-3xl gradient-text'>Our Vision</h2>
              </div>
              <p>
                Our <span className='font-bold md:font-light'>vision</span> is to empower individuals and communities to reach their financial goals by providing a simple, secure, and automated platform for co-operative savings.
              </p>
            </div>
          </Slide>
        </div>
      </section>
  )
}

export default MissionAndVision