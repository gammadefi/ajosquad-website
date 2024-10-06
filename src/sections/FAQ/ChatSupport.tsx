import Image from 'next/image';
import React from 'react';
import ChatImage from '../../../public/assets/Group 33981.png';
import { IoLogoWhatsapp } from "react-icons/io";
import { Slide, Fade, Zoom } from 'react-awesome-reveal';
import { useRouter } from 'next/router';

const ChatSupport = () => {
  const router = useRouter()
  return (
    <section className='px-5 md:px-8 py-8 md:py-20 lg:px-0 mx-auto lg:w-3/4'>
      <div className='flex flex-col md:flex-row items-center justify-between gap-4'>
        {/* Slide in effect for the image */}
        <Slide direction="left" triggerOnce className='md:w-2/5 lg:w-1/2'>
          <Image src={ChatImage} alt='About image' className='h-full mx-auto' />
        </Slide>

        <div className='space-y-3 md:w-1/2 md:pr-16 lg:pr-40'>
          {/* Fade effect for the heading */}
          <Fade triggerOnce>
            <h3 className='font-bold text-4xl lg:text-6xl'>Chat to us directly</h3>
          </Fade>

          {/* Fade effect for the paragraph */}
          <Fade delay={200} triggerOnce>
            <p className='font-extralight lg:text-xl'>
              "Need help fast? Chat with our support team on WhatsApp for instant assistance."
            </p>
          </Fade>

          {/* Zoom effect for the button */}
          <Zoom delay={400} triggerOnce>
            <button onClick={() => router.push("https://api.whatsapp.com/send?phone=16394705884&text=Hello")} className="w-full lg:w-fit rounded-lg p-0.5 bg-gradient-to-r from-[#23454F] via-[#0066FF] to-[#1EB7CF]">
              <div className="bg-white text-lg flex justify-center items-center gap-2 py-3 px-14 rounded-[calc(0.5rem-2px)]">
                <IoLogoWhatsapp size={25} className='text-[#29D616]' />
                <span>Chat Support</span>
              </div>
            </button>
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default ChatSupport;
