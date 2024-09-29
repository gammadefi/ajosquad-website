import React from 'react'
import Image, { StaticImageData } from 'next/image'
import HouseImage from '../../../public/assets/House Image 2.png'

const Explore = () => {
  return (
    <section className='bg-[#E8F5FB] py-10 px-5 md:px-10 lg:px-44 lg:py-32'>
      <h3 className='text-3xl md:text-5xl font-light text-center md:px-10'>Click to <span className="gradient-text font-medium">join & explore</span><br className='md:hidden' /> out our latest post <br /> on our <span className="gradient-text font-normal">social</span> media <span className="gradient-text font-normal">channels</span></h3>
      <div className='-mr-5 md:-mr-10 lg:-mr-44 overflow-x-scroll'>
        <div className='mx-auto w-fit pt-10 lg:pt-20 flex gap-10 pr-5 md:pr-10 lg:pr-32'>
          <PostCard imgUrl={HouseImage} btnText='View Instagram Post' />
          <PostCard imgUrl={HouseImage} btnText='View X Post' />
          <PostCard imgUrl={HouseImage} btnText='View Facebook Post' />
        </div>
      </div>
    </section>
  )
}

export default Explore

function PostCard({ imgUrl, btnText }: { imgUrl: StaticImageData, btnText: string }) {
  return (
    <div className='w-[220px] lg:w-[300px] space-y-4'>
      <Image src={imgUrl} alt='image' />
      <button className="font-medium w-full rounded-lg p-0.5 bg-gradient-to-r from-[#23454F] via-[#0066FF] to-[#1EB7CF]">
        <div className="bg-[#E8F5FB] text-center p-2 rounded-[calc(0.5rem-2px)]">
          <span>{btnText}</span>
        </div>
      </button>
    </div>
  )
}