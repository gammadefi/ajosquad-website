import React from 'react'
import Image from 'next/image'
import TestimonialIcon from '../../../public/assets/search-status.svg'
import TestimonialCard from './TestimonialCard'
import Avatar from '../../../public/assets/Frame 1000009532.svg'
import Avatar2 from "../../../public/assets/avatar-2.svg"

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
          <TestimonialCard name='Joseph & Emily' image={Avatar} testimonial='As an immigrant, saving money for the down-payment on a house seemed like an insurmountable task.
              We had the strong desire to do this, but for over a year, we were overwhelmed, with bills, bills, and other expenses constantly derailing our goals.
              Finally comes Ajo, a system we were used to from back home, and within 10 months, we were able to save up enough to cover our down payment.
              Ajosquad just made us take a closer look at our finances and helped us develop healthy saving habits.
              With Ajo, the process was seamless. It was just like an additional bi-weekly bill payment in our budget that, in actual fact, were savings.
              We encourage everyone to come onboard and be a part of this system of saving because it worked for us, and I am positive. If you commit to it, it will work for you. We have started saving for our next project!'
          />
          <TestimonialCard name='Amaka O. Newbrunswick' image={Avatar2} testimonial='Some months after relocating to Canada, I had tried starting ajo with my family and inlaws but non seemed intrested in the idea. You can then imagine my joy and curiosity when I came across Ajosquad on IG. I took some months to observe, research and ask questions before I joined. Apart from the bulk sum that I have been able to save at the end of 5 months,  my greatest advantage is the discipline I have developed by placing my savings first above my expenditure. Ajosquad has taught me the invaluable lesson of living below my income and for this I am immensely grateful. I recommend Ajosquad to anyone who needs to develop financial discipline. Join us today, what do you have to lose?' />
          <TestimonialCard name='Harrison Nzette' image={Avatar} testimonial='It is really a milestone achievement for me made through Ajosquad.At first it was really hard, have an income that barely pays the bills month in month out.Another difficult aspect is wanting to do something and being held back We just decided that we needed to be make the contribution happen at all cost. Most times we needed to borrow to balance up. But we had a focus My Canada story will not be complete without the mention of NG and the Ajosquad team.' />
          <TestimonialCard name='Louis’s Ozioma, Saskatoon' image={Avatar2} testimonial='Big shout out to the Ajo Squad team! This platform has been an absolute game-changer for me, consistently delivering great financial services. I just realized I received my payment yesterday, and the seamless process is unmatched! Their reliability and efficiency are truly top-notch. A huge thank you for always coming through and making financial management easy. Keep up the amazing work, Ajo Squad! You’re the best!' />
        </div>
      </div>

    </section>
  )
}

export default Testimonial