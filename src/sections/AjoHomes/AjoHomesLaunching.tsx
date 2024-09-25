import React from 'react'
import { Fade } from 'react-awesome-reveal'
import ComingSoon from '../../../public/assets/Coming Soon.svg'
import Image from 'next/image'

const AjoHomesLaunching = () => {
  return (
    <section className='px-5 md:px-8 py-8 lg:py-20 lg:px-24'>
      <Fade direction='up' triggerOnce>
        <h1 className='text-[#08354C] text-center mb-0 lg:mb-14 font-bold mx-auto w-fit text-3xl lg:text-5xl flex items-center'>AjoHomes Launching Soon!!! <Image src={ComingSoon} alt='coming soon icon' className='h-10 w-10 lg:w-fit lg:h-fit'/></h1>
        <p className='font-extralight py-6 lg:py-0 lg:px-10 text-xl lg:text-2xl 2xl:text-3xl'>
          We are thrilled to announce that AjoHomes will be launching later this year. This groundbreaking product represents a new way to invest in real estate, combining the power of collective savings with the potential for significant returns. <br />
          Stay tuned for more details, and prepare to join the AjoHomes community to take advantage of this novel investment opportunity. Let's make your financial dreams a reality together!
        </p>
      </Fade>
    </section>
  )
}

export default AjoHomesLaunching