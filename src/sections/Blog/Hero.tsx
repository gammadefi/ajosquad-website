import React from 'react'
import { Fade } from 'react-awesome-reveal';

const Hero = () => {
  return (
    <div className="w-full lg:h-[55vh] 2xl:h-[70vh] bg-center bg-cover bg-no-repeat bg-[url('/assets/BlogHeroImage.svg')]">
      <div className='w-full px-3 md:px-8 lg:px-[96px] h-full flex justify-center items-center bg-black bg-opacity-40'>
        <Fade direction="down" triggerOnce>
          <div className='text-white flex flex-col gap-2 pt-48 pb-20'>
            <h1 className='text-2xl md:text-5xl md:text-center font-bold font-ageo'>
              Your Guide to Financial Success: Ajosquad Blog
            </h1>
            <h5 className='px-4 md:text-xl text-center my-4 md:mx-auto lg:w-[73%] 2xl:w-[70%]'>
              Maximize your financial potential with Ajosquad. Get access to exclusive benefits, expert advice, and unbeatable offers. Subscribe now to stay informed.
            </h5>
            <div className='w-full md:mx-auto md:w-4/5 lg:w-1/2 py-2 px-3 md:py-3 md:px-5 flex items-center gap-5 border boder-white rounded-full'>
              <input className='w-4/5 lg:w-10/12 h-full text-white placeholder:text-white bg-transparent border-none focus:outline-none' placeholder='Your Email' />
              <button className='text-primary bg-white rounded-full w-1/5 lg:w-2/12 py-[6px] px-3 text-sm '>Join</button>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  )
}

export default Hero;
