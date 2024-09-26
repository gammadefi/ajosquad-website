import React from 'react'
import Image from 'next/image'
import TestimonialIcon from '../../../public/assets/search-status.svg'
import TestimonialCard from './TestimonialCard'
import Avatar from '../../../public/assets/Frame 1000009532.svg'

const Testimonial = () => {
  return (
    <section className='py-10 px-5 md:px-10 lg:px-44 lg:py-32 bg-[#08354C] text-white'>
      <div className='space-y-2 lg:mb-10'>
        <div className='flex items-center gap-2'>
          <Image src={TestimonialIcon} alt='Chart icon' />
          <h2 className='text-sm lg:text-xl'>Client Testimonial</h2>
        </div>
        <div className='space-y-1 font-medium text-3xl lg:text-5xl'>
          <p>Real <span className='bg-clip-text text-transparent bg-gradient-to-r from-white via-[#0066FF] to-[#1EB7CF]'>People</span> real <span className='bg-clip-text text-transparent bg-gradient-to-r from-white via-[#0066FF] to-[#1EB7CF]'>success</span></p>
          <p>transforming finances, transforming lives</p>
        </div>
      </div>
      <div className='-mr-5 md:-mr-10 lg:-mr-44 overflow-x-scroll'>
        <div className='w-fit py-5 flex gap-5 lg:gap-10 pr-5 md:pr-10 lg:pr-32'>
          <TestimonialCard name='Danny Kay' image={Avatar} testimonial='Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras. Maecenas in massa in purus dui orci. Elementum pretium sapien vulputate odio ipsum commodo. Facilisi sapien malesuada parturient ut phasellus. Ultricies ac viverra molestie at pretium.Lorem ipsum dolor sit amet consectetur.' />
          <TestimonialCard name='Danny Kay' image={Avatar} testimonial='Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras. Maecenas in massa in purus dui orci. Elementum pretium sapien vulputate odio ipsum commodo. Facilisi sapien malesuada parturient ut phasellus. Ultricies ac viverra molestie at pretium.Lorem ipsum dolor sit amet consectetur.' />
          <TestimonialCard name='Danny Kay' image={Avatar} testimonial='Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras. Maecenas in massa in purus dui orci. Elementum pretium sapien vulputate odio ipsum commodo. Facilisi sapien malesuada parturient ut phasellus. Ultricies ac viverra molestie at pretium.Lorem ipsum dolor sit amet consectetur.' />
          <TestimonialCard name='Danny Kay' image={Avatar} testimonial='Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras. Maecenas in massa in purus dui orci. Elementum pretium sapien vulputate odio ipsum commodo. Facilisi sapien malesuada parturient ut phasellus. Ultricies ac viverra molestie at pretium.Lorem ipsum dolor sit amet consectetur.' />
        </div>
      </div>

    </section>
  )
}

export default Testimonial