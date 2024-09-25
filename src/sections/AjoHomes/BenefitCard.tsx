import React from 'react'

const BenefitCard = ({ title, description }: { title: string, description: string }) => {
  return (
    <div className='md:w-[300px] w-full mx-auto p-5 max-h-[300px] rounded-xl bg-[#EEEFF0]'>
      <h3 className='text-xl font-semibold'>{title}</h3>
      <p className='font-light mt-2'>{description}</p>
    </div>
  )
}

export default BenefitCard