import Image from 'next/image';
import React from 'react';
import { Slide } from 'react-awesome-reveal';
import HomeImage from '../../../../public/assets/House Image 2(1).png';

const HowAjoHomesWorks = () => {
  return (
    <section className='px-5 md:px-8 py-8 lg:py-20 lg:px-24'>
      {/* Slide-in effect for the main heading */}
      <Slide direction='down' triggerOnce>
        <h1 className='text-[#08354C] mb-10 lg:mb-14 text-center font-bold mx-auto w-fit text-3xl lg:text-5xl'>
          How AjoHomes Works
        </h1>
      </Slide>

      <div className='flex flex-col-reverse lg:flex-row items-center justify-between'>
        {/* Slide-in effect for the text */}
        <Slide className='lg:w-1/2' direction='left' triggerOnce>
          <p className='py-6 font-extralight lg:py-0 lg:px-32 text-xl lg:text-2xl'>
            With <span className='gradient-text font-semibold'>Ajosquad</span>, you have the opportunity to invest in a property by buying units, where each unit is priced at $1,000. You can purchase multiple units, allowing you to tailor your investment to your financial goals and capacity. This form of investment democratizes access to real estate, enabling you to own a part of an investment property and share in its future appreciation.
          </p>
        </Slide>

        {/* Slide-in effect for the image */}
        <Slide className='md:h-[640px] lg:w-1/2' direction='right' triggerOnce>
          <Image src={HomeImage} alt='About image' className='h-full mx-auto' />
        </Slide>
      </div>
    </section>
  );
};

export default HowAjoHomesWorks;
