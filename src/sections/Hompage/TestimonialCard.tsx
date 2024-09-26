import React from 'react'
import Image from 'next/image'

const TestimonialCard = ({ name, image, testimonial }: { name: string, image: string, testimonial: string }) => {
  return (
    <div className="inline-block p-3 lg:px-8 lg:py-7 w-[300px] lg:w-[437px] bg-[#101010] rounded-xl space-y-3">
      <p className='text-sm lg:text-lg'>
        {testimonial}
      </p>
      <div className="flex items-center gap-2">
        <div className='h-8 w-8 rounded-full'>
          <Image src={image} alt={name} className='w-full h-full rounded-full' />
        </div>
        <h3 className='font-bold text-lg'>{name}</h3>
      </div>
    </div>
  )
}

export default TestimonialCard