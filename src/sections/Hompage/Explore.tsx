import React from 'react'
import Image, { StaticImageData } from 'next/image'
import LinkedIn from '../../../public/assets/LinkedIn.jpg'
import Tiktok from '../../../public/assets/Tiktok.jpg'
import Facebook from '../../../public/assets/Facebook.jpg'
import Instagram from '../../../public/assets/Instagram.jpg'
import BgImage from '../../../public/assets/151.svg'
import Link from 'next/link'

const Explore = () => {
  return (
    <section className='relative bg-[#E8F5FB] py-10 px-5 md:px-10 lg:py-32'>
      <h3 className='text-3xl md:text-5xl font-light text-center md:px-10'>Click to <span className="gradient-text font-medium">join & explore</span><br className='md:hidden' /> out our latest post <br /> on our <span className="gradient-text font-normal">social</span> media <span className="gradient-text font-normal">channels</span></h3>
      <div className='-mr-5 md:-mr-10 lg:mr-0 overflow-x-scroll lg:overflow-auto'>
        <div className='mx-auto w-fit pt-10 lg:pt-20 flex gap-10 pr-5 md:pr-10 lg:pr-0'>
          <PostCard imgUrl={LinkedIn} href='https://www.instagram.com/ajo_squad/' btnText='View LinkedIn Post' />
          <PostCard imgUrl={Tiktok} href='https://twitter.com/ajos_quad' btnText='View Tiktok Post' />
          <PostCard imgUrl={Facebook} href='https://web.facebook.com/profile.php?id=61554877149543' btnText='View Facebook Post' />
          <PostCard imgUrl={Instagram} href='https://web.facebook.com/profile.php?id=61554877149543' btnText='View Instagram Post' />
        </div>
      </div>
      <Image className='hidden lg:block absolute bottom-0 -right-24 z-10' src={BgImage} alt='image' />
    </section>
  )
}

export default Explore

function PostCard({ imgUrl, btnText, href = "" }: { imgUrl: StaticImageData, btnText: string, href?: string }) {
  return (
    <div className='w-[220px] lg:w-[300px] space-y-4 z-50'>
      <Image className='rounded h-[180px] lg:h-[230px]' src={imgUrl} alt='image' />
      <Link className='' href={href} >
        <div className="font-medium my-2 w-full rounded-lg p-0.5 bg-gradient-to-r from-[#23454F] via-[#0066FF] to-[#1EB7CF]">
          <div className="bg-[#E8F5FB] text-center p-2 rounded-[calc(0.5rem-2px)]">
            <span>{btnText}</span>
          </div>
        </div>
      </Link>
    </div>
  )
}