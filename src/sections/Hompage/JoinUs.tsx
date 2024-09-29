import React from 'react'

const JoinUs = () => {
  return (
    <section className='space-y-6 lg:space-y-12 py-10 px-5 md:px-10 lg:px-44 md:py-20 lg:py-32 text-center'>
      <h3 className='text-xl lg:text-3xl font-medium'>WE WOULD LOVE TO HEAR FROM YOU</h3>
      <h2 className='gradient-text font-bold text-3xl lg:text-6xl'>READY TO JOIN US OR MAKE ENQUIRES</h2>
      <div className='lg:text-2xl mx-auto flex items-center justify-center flex-col gap-2.5 md:gap-8 md:flex-row lg:w-3/4'>
        <button className="font-medium w-full lg:w-fit rounded-lg p-0.5 bg-gradient-to-r from-[#23454F] via-[#0066FF] to-[#1EB7CF]">
          <div className="bg-white flex items-center justify-center gap-2 py-3 px-10 rounded-[calc(0.5rem-2px)]">
            <span className='gradient-text'>CHAT US ON WHATSAPP</span>
          </div>
        </button>
        <span className='font-semibold text-lg lg:text-2xl'>Or</span>
        <button className="text-white w-full lg:w-fit font-semibold rounded-lg px-3.5 py-3.5 lg:py-3.5 lg:px-10 bg-primary">
          CONTACT FORM
        </button>
      </div>
    </section>
  )
}

export default JoinUs