import React from 'react'
import ContactForm from './ContactForm'
import Image from 'next/image'
import ChartIcon from '../../../public/assets/chart.svg'

const Contact = () => {
  return (
    <section className='px-6 py-10 lg:py-20 lg:px-24 bg-[#E8F5FB] text-xl md:text-3xl font-light'>
      <div className='space-y-2 md:mx-auto w-fit'>
        <div className='flex items-center gap-3'>
          <Image src={ChartIcon} alt='Chart icon' />
          <h2 className='font-extralight text-lg md:text-2xl'>Get In Touch</h2>
        </div>
        <h3 className='gradient-text w-fit text-5xl lg:text-6xl font-bold'>Contact Us</h3>
      </div>
      <ContactForm />
    </section>

  )
}

export default Contact