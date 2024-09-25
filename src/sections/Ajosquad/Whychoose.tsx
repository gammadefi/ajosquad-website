import Link from 'next/link';
import React from 'react'
import { Fade } from 'react-awesome-reveal';
import { FaArrowRight } from 'react-icons/fa';

const Whychoose = () => {
    return (
        <div className='w-full py-8 md:p-24 px-5 md:px-8 lg:px-[80px] h-full'>
            {/* Wrap the h3 element in the Fade component for a reveal effect */}
            <Fade direction="up" triggerOnce={true}>
                <h3 className='text-[#08354C] text-center font-bold text-3xl md:text-5xl'>
                    Why choose Ajosquad
                </h3>
            </Fade>


            {/* Reveal effect for the paragraph content */}
            <Fade direction="up" className='md:my-12 my-8' delay={100} triggerOnce={true}>
                <p className='md:text-[29px]  !tracking-[-1.8%] leading-[28px] md:leading-[36px] font-extralight'>
                    Ajosquad is born from a desire to empower immigrants in Canada. We understand the financial hurdles newcomers face when establishing themselves in a new country. Ajosquad bridges the gap by reviving the familiar group savings concept in a modern, secure, and automated format. 
                </p>
                <p className='md:text-[29px]  -mt-8 !tracking-[-1.8%] leading-[28px] md:leading-[36px] font-extralight'>
                    Traditional group savings can be cumbersome, fraught with challenges like finding reliable participants, managing collection schedules, and handling defaults. Ajosquad tackles these issues head-on, offering a convenient and secure alternative.
                </p>
                
            </Fade>

            <Fade direction="up" className=' my-6' delay={200} triggerOnce={true}>
                <p className='md:text-[29px]  !tracking-[-1.8%] leading-[28px] md:leading-[36px] font-medium'>
                Join Ajosquad today and embark on a smarter, more collaborative savings journey!
                </p>
              
                
            </Fade>

            <Link href='' className="text-base block w-full md:w-fit rounded-lg p-0.5 bg-gradient-to-r from-[#23454F] via-[#0066FF] to-[#1EB7CF]">
              <div className="bg-white flex items-center justify-center gap-2 py-2 px-10 rounded-[calc(0.5rem-2px)]">
                <span className='gradient-text'>Join now</span>
                <FaArrowRight className='text-[#1EB7CF]' size={12} />
              </div>
            </Link>
        </div>
    )
}

export default Whychoose