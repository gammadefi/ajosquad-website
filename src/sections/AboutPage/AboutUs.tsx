import Link from 'next/link'
import React from 'react'
import { Slide } from 'react-awesome-reveal'

const AboutUs = () => {
  return (
    <section className='px-3 md:px-8 py-8 lg:py-20 lg:px-24'>
      <h1 className='mb-10 lg:mb-20 gradient-text font-bold text-3xl lg:text-5xl w-fit mx-auto'>About Us</h1>
      <div className='lg:flex items-center justify-between'>
        <Slide className='lg:w-1/2' direction='left' triggerOnce>
          <img src='/assets/AboutImage.svg' alt='About image' className='h-full mx-auto' />
        </Slide>
        <Slide className='lg:w-1/2' direction='right' triggerOnce>
          <div className='py-6 lg:py-0 lg:px-20 space-y-4 text-xl lg:text-2xl'>
            <p><span className='font-semibold'>Ajosquad</span>, a financial technology company that's focused on helping people save money and achieve their financial goals. Our company is founded on the belief that everyone deserves the opportunity to be financially secure, no matter their income level or financial experience. Our team is made up of experienced professionals who are passionate about helping people take control of their financial future.</p>
            <p>Our platform (AjoSquad) automates the process of community-based savings, allowing people to join a savings group, also known as a “Squad,” where members take turns receiving pooled funds. Our user-friendly platform is easy to navigate and provides a secure environment for all your financial transactions.</p>
            <Link href='' className="text-base block w-fit rounded-lg p-0.5 bg-gradient-to-r from-[#23454F] via-[#0066FF] to-[#1EB7CF]">
              <div className="bg-white flex items-center gap-2 py-2 px-10 rounded-[calc(0.5rem-2px)]">
                <span className='gradient-text'>Read to know more on our blog</span>
              </div>
            </Link>
          </div>
        </Slide>
      </div>
    </section>
  )
}

export default AboutUs