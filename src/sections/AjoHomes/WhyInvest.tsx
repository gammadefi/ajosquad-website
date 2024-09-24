import React from 'react'
import { Fade } from 'react-awesome-reveal'

const WhyInvest = () => {
  return (
    <section className='px-5 md:px-8 py-8 lg:py-20 lg:px-24'>
      <Fade direction='up' triggerOnce>
        <h1 className='text-[#08354C] text-center mb-0 lg:mb-14 font-bold mx-auto w-fit text-3xl lg:text-5xl flex'>Why Invest With AjoHomes</h1>
        <p className='font-extralight py-6 lg:py-0 lg:px-10 text-xl lg:text-2xl 2xl:text-3xl'>
          Historically, real estate investment in Canada has proven to be a profitable venture. However, like any investment, there are always risks and uncertainties that lie ahead. That's why we have partnered with seasoned experts who have been in the real estate industry for decades. They possess the insights needed to determine the best time to buy and sell, and their expertise will guide us in making decisions that maximize your returns. <br />
          Our expert partners will monitor market trends and advise on the most opportune moments to enter and exit the market, ensuring that your investment has the best chance for success within the 3-5 year holding period.
        </p>
      </Fade>
    </section>
  )
}

export default WhyInvest