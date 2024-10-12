import Link from 'next/link';
import React from 'react';
import { Zoom, Bounce, Slide } from 'react-awesome-reveal';

const FinancialsEducation = () => {
  return (
    <section className='md:p-8 py-8 px-3 lg:py-20 lg:px-24'>
      {/* Apply Zoom effect to the heading */}
      <Zoom triggerOnce>
        <div className='text-[#08354C] space-y-3 mb-6 lg:mb-14'>
          <h2 className='text-3xl lg:text-5xl font-bold text-center'>
            We Also Offer Financial Education
          </h2>
          <p className='text-sm md:text-base lg:text-2xl text-center'>
            Unlock Your Financial Future: Learn from Industry Experts with Our Monthly Classes!
          </p>
        </div>
      </Zoom>

      {/* Combine Slide and Bounce effects for the text and link */}
      <Slide direction="left" triggerOnce>
        <div className='space-y-3 md:space-y-5 lg:px-28'>
          <Bounce cascade triggerOnce damping={0.2}>
            <p className='text-2xl lg:text-3xl font-extralight'>
              At Ajosquad, we believe that knowledge is the foundation of financial freedom! That's why we've incorporated Monthly Financial Education Classes into our offerings, tailored to empower our community with the tools they need to succeed.
            </p>
            <Link href='/blog' className="block w-fit rounded-lg p-0.5 bg-gradient-to-r from-[#23454F] via-[#0066FF] to-[#1EB7CF]">
              <div className="bg-white flex items-center gap-2 py-2 px-10 rounded-[calc(0.5rem-2px)]">
                <span className='gradient-text'>Read to know more on our blog</span>
              </div>
            </Link>
          </Bounce>
        </div>
      </Slide>
    </section>
  );
};

export default FinancialsEducation;
