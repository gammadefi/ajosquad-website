'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import FAQIcon from '../../../public/assets/help.svg';
import Link from 'next/link';
import GeneralFAQ from './GeneralFAQ';
import SupportFAQ from './SupportFAQ';
import PaymentFAQ from './PaymentFAQ';
import { FaArrowRight } from 'react-icons/fa6';
import { Zoom, Fade, Slide } from 'react-awesome-reveal';

const FAQ = ({ isHomePage = false }: { isHomePage?: boolean }) => {
  const [activeTab, setActiveTab] = useState('general');

  return (
    <section className='px-5 md:min-h-screen md:px-8 py-8 md:pt-20 lg:px-0 mx-auto lg:w-3/4'>
      <div className='flex flex-col lg:flex-row gap-5'>
        
        {/* Left section */}
        <div className='w-4/5 lg:w-1/3 lg:pr-20 space-y-3'>
          {/* Zoom effect for the FAQ icon */}
          <Zoom triggerOnce>
            <div className='flex items-center gap-2'>
              <Image src={FAQIcon} alt='FAQ icon' />
              <p className='text-lg'>Find the answer you need</p>
            </div>
          </Zoom>

          {/* Fade effect for the header */}
          <Fade direction='up' triggerOnce>
            <h3 className='text-3xl font-semibold'>
              Frequently asked questions
            </h3>
          </Fade>
        </div>

        {/* Right section */}
        <div className='space-y-4 lg:w-2/3'>
          {/* Tab Links with Slide effect */}
          <Slide direction='down' triggerOnce>
            <div className='text-white flex justify-between md:justify-start gap-3 md:gap-6 font-semibold text-lg lg:text-xl'>
              <Link
                onClick={() => setActiveTab('general')}
                href='#general'
                className={`rounded-3xl py-2 px-4 lg:px-8 ${
                  activeTab === 'general'
                    ? 'bg-gradient-to-r from-[#23454F] via-[#0066FF] to-[#1EB7CF]'
                    : 'text-black font-normal'
                }`}
              >
                General
              </Link>
              <Link
                onClick={() => setActiveTab('support')}
                href='#support'
                className={`rounded-3xl py-2 px-4 lg:px-8 ${
                  activeTab === 'support'
                    ? 'bg-gradient-to-r from-[#23454F] via-[#0066FF] to-[#1EB7CF]'
                    : 'text-black font-normal'
                }`}
              >
                Support
              </Link>
              <Link
                onClick={() => setActiveTab('payment')}
                href='#payment'
                className={`rounded-3xl py-2 px-5 lg:px-8 ${
                  activeTab === 'payment'
                    ? 'bg-gradient-to-r from-[#23454F] via-[#0066FF] to-[#1EB7CF]'
                    : 'text-black font-normal'
                }`}
              >
                Payment
              </Link>
            </div>
          </Slide>

          {/* FAQ content sections with individual Slide effects */}
          <div>
            {
              activeTab === "general" && <GeneralFAQ />
            }
            {
              activeTab === "support" && <SupportFAQ />
            }
            {
              activeTab === "payment" && <PaymentFAQ />
            }
          </div>

          {/* Link to read more FAQ (if isHomePage is true) */}
          {isHomePage && (
            <Fade direction='up' triggerOnce>
              <Link href='/faq' className='text-base block w-fit rounded-lg ml-auto p-0.5 bg-gradient-to-r from-[#23454F] via-[#0066FF] to-[#1EB7CF]'>
                <div className='bg-[#F4F4F4] flex items-center gap-2 py-2 px-10 rounded-[calc(0.5rem-2px)]'>
                  <span className='gradient-text'>Read more FAQ</span>{' '}
                  <FaArrowRight className='text-primary' />
                </div>
              </Link>
            </Fade>
          )}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
