import Link from 'next/link';
import React from 'react';
import { Zoom, Fade, Slide } from 'react-awesome-reveal';

const AboutUs = () => {
  return (
    <section className='px-3 w-full md:px-8 py-8 lg:py-20 lg:px-24'>
      {/* Apply Zoom effect to the heading */}
      <Zoom triggerOnce>
        <h1 className='mb-10 lg:mb-20 gradient-text font-bold text-3xl lg:text-5xl w-fit mx-auto'>
          About Us
        </h1>
      </Zoom>

      <div className='lg:flex items-center justify-between'>
        {/* Slide effect with Zoom on image */}
        <Zoom triggerOnce className='lg:w-1/2'>
          <Slide direction='left' triggerOnce>
            <img
              src='/assets/about-us2.png'
              alt='About Ajosquad'
              className='h-full mx-auto lg:rounded-lg shadow-lg'
            />
          </Slide>
        </Zoom>

        {/* Fade effect on text content */}
        <Fade direction='up' triggerOnce className='lg:w-1/2'>
          <div className='py-6 lg:py-0 lg:px-20 space-y-4 text-xl lg:text-2xl leading-relaxed'>
            <p className='font-[300]'>
              Welcome to<span className='font-semibold'> Ajosquad</span>, a financial technology company, is focused on helping people save money and achieve their financial goals. Our belief is that everyone deserves financial security, regardless of income level or financial experience. We are a team of experienced professionals passionate about helping people take control of their financial future.
            </p>
            <p className='font-[300]'>
              Our platform automates community-based savings, enabling people to join savings groups known as "Squads," where members take turns receiving pooled funds. The platform is user-friendly and provides a secure environment for all financial transactions.
            </p>
            <Link href='/blog' className="text-base block w-fit rounded-lg p-0.5 bg-gradient-to-r from-[#23454F] via-[#0066FF] to-[#1EB7CF]">
              <div className="bg-white flex items-center gap-2 py-2 px-10 rounded-[calc(0.5rem-2px)]">
                <span className='gradient-text'>Read to know more on our blog</span>
              </div>
            </Link>
          </div>
        </Fade>
      </div>
    </section>
  );
};

export default AboutUs;
