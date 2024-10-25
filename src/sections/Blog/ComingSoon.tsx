import React from 'react'
import Image from 'next/image'

const ComingSoon = () => {
  return (
    <div className='w-full flex items-center justify-center md:h-screen py-10 md:py-20'>
      <div className='md:w-[600px] px-8 md:h-[600px] relative'>
        <Image alt='' width={500} height={500} className='mx-auto' src={"/assets/under-construction-gallery.png"} />
        <h3 className='text-right gradient-text text-3xl md:text-5xl right-3   bottom-8 md:top-[450px] z-10 md:right-0 font-bold absolute'>Coming Soon!!!</h3>
      </div>

    </div>
  )
}

export default ComingSoon