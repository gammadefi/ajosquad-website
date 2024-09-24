import React, { FormEvent, useState } from 'react'
import { FaArrowRight } from "react-icons/fa6";

const ContactForm = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [email, setEmail] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [message, setMessage] = useState("")

  const handleOnSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log({
      firstName,
      lastName,
      phoneNumber,
      email,
      message
    })
  }
  return (
    <form onSubmit={handleOnSubmit} className='py-5 lg:py-16 space-y-4 lg:space-y-8 text-sm lg:text-base mx-auto lg:w-3/4'>
      <div className='flex flex-col md:flex-row md:gap-10'>
        <div className='space-y-2 flex flex-col w-full'>
          <label htmlFor="firstName" className='font-medium'>
            First Name
          </label>
          <input id='firstName' type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} placeholder='First Name' className='rounded-lg border border-[#D0D5DD] px-[14px] py-[10px] lg:py-4 lg:px-5 lg:rounded-xl focus:outline-none' required />
        </div>
        <div className='space-y-2 flex flex-col w-full'>
          <label htmlFor="lastName" className='font-medium'>
            Last Name
          </label>
          <input id='lastName' type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} placeholder='Last Name' className='rounded-lg border border-[#D0D5DD] px-[14px] py-[10px] lg:py-4 lg:px-5 lg:rounded-xl focus:outline-none' required />
        </div>
      </div>
      <div className='flex flex-col md:flex-row md:gap-10'>
        <div className='space-y-2 flex flex-col w-full'>
          <label htmlFor="email" className='font-medium'>
            Email
          </label>
          <input id='email' type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder='linda@framcreative.com' className='rounded-lg border border-[#D0D5DD] px-[14px] py-[10px] lg:py-4 lg:px-5 lg:rounded-xl focus:outline-none' required />
        </div>
        <div className='space-y-2 flex flex-col w-full'>
          <label htmlFor="phoneNumber" className='font-medium'>
            Phone Number
          </label>
          <input id='phoneNumber' type='tel' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} placeholder='Phone Number' className='rounded-lg border border-[#D0D5DD] px-[14px] py-[10px] lg:py-4 lg:px-5 lg:rounded-xl focus:outline-none' required />
        </div>
      </div>
      <textarea value={message} onChange={(e) => setMessage(e.target.value)} placeholder='Your Message' rows={5} className='w-full lg:h-60 rounded-lg border border-[#D0D5DD] px-[14px] py-[10px] lg:py-4 lg:px-5 lg:rounded-xl focus:outline-none resize-none' required></textarea>
      <button className="w-full lg:w-fit mx-auto text-base flex items-center justify-center gap-2 font-semibold text-white rounded-lg py-3 px-4 lg:px-16 bg-gradient-to-r from-[#23454F] via-[#0066FF] to-[#1EB7CF]">
        <span>Submit</span>
        <FaArrowRight />
      </button>
    </form>
  )
}

export default ContactForm