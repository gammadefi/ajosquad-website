import React from 'react'
import { Fade } from 'react-awesome-reveal'
import BenefitCard from './BenefitCard'

const Benefits = () => {
  return (
    <section className='px-5 py-10 lg:py-20 lg:px-12 2xl:px-60'>
      <Fade direction="up" triggerOnce>
        <div>
          <h1 className='text-[#08354C] text-center mb-0 lg:mb-14 font-bold mx-auto w-fit text-3xl lg:text-5xl flex'>Benefits of Using AjoHomes</h1>
          <div className='lg:w-[979px] my-5 lg:my-10 flex flex-wrap mx-auto gap-5'>
            <BenefitCard title='Transparent Property Details' description='You will have full visibility into the property you have invested in, including its physical location and address. You can even be present for the official takeover, making the investment feel more tangible and personal.'/>
            <BenefitCard title='Professional Management' description='Your investment property will be maintained and managed by a reputable real estate company, ensuring the property remains in optimal condition and maximizes its potential for appreciation.'/>
            <BenefitCard title='Property Location' description="All properties currently available for investment through AjoHomes are located within Canada, providing our investors with opportunities in one of the world's most stable real estate markets."/>
            <BenefitCard title='Planned Sale Window' description='Each property investment will be sold within a 3-5 year window, based on market conditions. Our real estate management partners will provide expert advice on the optimal time to sell within this period, ensuring that the sale occurs when it is most profitable for our investors.'/>
            <BenefitCard title='Regular Updates' description='Investors will receive quarterly statements that detail the value of their investment, operational expenses, and other relevant information. This ensures that you are always informed and up to date on the performance of your investment.'/>
          </div>
        </div>
      </Fade>
    </section>
  )
}

export default Benefits