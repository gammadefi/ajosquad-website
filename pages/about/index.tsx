import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Header from '../../src/components/Header'
import Footer from '../../src/components/Footer'
import AboutImage from '../../public/assets/AboutImage.svg'
import MissionImage from '../../public/assets/MissionImage.svg'
import ChartIcon from '../../public/assets/chart.svg'
import { FaArrowRight } from "react-icons/fa6";
import Hero from '../../src/sections/AboutPage/Hero'

const index = () => {
  return (
    <main>
      <Header hasHero={true} />
      <Hero />
      <section className='px-3 md:px-8 py-8 lg:py-20 lg:px-24'>
        <h1 className='mb-10 lg:mb-20 gradient-text font-bold text-3xl lg:text-5xl w-fit mx-auto'>About Us</h1>
        <div className='lg:flex items-center justify-between'>
          <div className='lg:h-[600px] lg:w-1/2'>
            <Image src={AboutImage} alt='About' className='h-full mx-auto' />
          </div>
          <div className='py-6 lg:py-0 lg:px-20 space-y-4 text-xl lg:text-2xl lg:w-1/2'>
            <p><span className='font-semibold'>Ajosquad</span>, a financial technology company that's focused on helping people save money and achieve their financial goals. Our company is founded on the belief that everyone deserves the opportunity to be financially secure, no matter their income level or financial experience. Our team is made up of experienced professionals who are passionate about helping people take control of their financial future.</p>
            <p>Our platform (AjoSquad) automates the process of community-based savings, allowing people to join a savings group, also known as a “Squad,” where members take turns receiving pooled funds. Our user-friendly platform is easy to navigate and provides a secure environment for all your financial transactions.</p>
            <Link className='gradient-text flex items-center gap-2 text-lg rounded-lg px-4 py-3' href="/">
              Read to know more on our blog... <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
      <section className='p-8 lg:py-20 lg:px-24'>
        <div className='text-[#08354C] space-y-3 mb-6 lg:mb-14'>
          <h2 className='text-3xl lg:text-5xl font-bold text-center'>We Offer Financials Education</h2>
          <p className='text-sm md:text-base lg:text-2xl md:text-center'>Unlock Your Financial Future: Learn from Industry Experts with Our Monthly Classes!</p>
        </div>
        <div className='space-y-3 md:space-y-5 lg:px-28'>
          <p className='text-2xl lg:text-3xl font-extralight'>
            At Ajosquad, we believe that knowledge is the foundation of financial freedom! That's why we've incorporated Monthly Financial Education Classes into our offerings, tailored to empower our community with the tools they need to succeed.
          </p>
          <button className="bg-gradient-to-r from-[#23454F] via-[#0066FF] to-[#1EB7CF] text-white font-semibold rounded-lg p-0.5">
            <span className="bg-white text-black flex items-center gap-3 w-full rounded-lg p-2">
              Read to know more on our blog... <FaArrowRight />
            </span>
          </button>
        </div>
      </section>
      <section className='px-6 py-10 lg:py-20 lg:px-24 bg-[#E8F5FB] text-xl md:text-3xl font-light'>
        <div className='md:flex items-center justify-between'>
          <div className='py-6 lg:py-0 lg:px-20 space-y-4 md:w-1/2 lg:2/5'>
            <div className='flex items-center gap-3'>
              <Image src={ChartIcon} alt='Chart icon' />
              <h2 className='font-bold lg:text-xl'>Our Mission</h2>
            </div>
            <p className='lg:text-5xl'>
              Our <span className='font-bold md:gradient-text'>mission</span> is to empower people to save and grow their money collectively by offering a user-friendly, secure, and automated solution for co-operative savings.
            </p>
          </div>
          <div className='lg:h-[600px] lg:w-[70%]'>
            <Image src={MissionImage} alt='About' className='h-full w-full mx-auto' />
          </div>
        </div>
        <div className='lg:flex items-center justify-between'>
          <div className='hidden lg:block'>

          </div>
          <div className='py-6 lg:py-0 lg:px-20 space-y-4 lg:w-[65%]'>
            <div className='flex items-center gap-3'>
              <Image src={ChartIcon} alt='Chart icon' />
              <h2 className='font-bold lg:text-3xl gradient-text'>Our Vision</h2>
            </div>
            <p>
              Our <span className='font-bold md:font-light'>vision</span> is to empower individuals and communities to reach their financial goals by providing a simple, secure, and automated platform for co-operative savings.
            </p>
          </div>
        </div>
      </section>
      <section className='px-6 py-10 lg:py-20 lg:px-24'>
        <div className='space-y-4'>
          <h2 className='gradient-text font-medium w-fit mx-auto md:text-xl'>
            Our Team
          </h2>
          <p className='text-center font-semibold text-[#08354C] text-2xl lg:text-4xl lg:px-20'>
            Meet the Visionaries Driving Your Global Success, Bringing a Wealth of Skills and Diverse Expertise from Various Backgrounds.
          </p>
        </div>
        <div className='my-5 lg:my-10 grid md:grid-cols-2 lg:grid-cols-3 gap-4'>
          <TeamCard name='Team member name' description='Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras. Maecenas in massa in purus dui orci. Elementum pretium sapien vulputate odio ipsum commodo. Facilisi sapien malesuada parturient ut phasellus. Ultricies ac viverra molestie at pretium.Lorem ipsum dolor sit amet consectetur.' role='Role' image={ChartIcon} />
          <TeamCard name='Team member name' description='Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras. Maecenas in massa in purus dui orci. Elementum pretium sapien vulputate odio ipsum commodo. Facilisi sapien malesuada parturient ut phasellus. Ultricies ac viverra molestie at pretium.Lorem ipsum dolor sit amet consectetur.' role='Role' image={ChartIcon} />
          <TeamCard name='Team member name' description='Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras. Maecenas in massa in purus dui orci. Elementum pretium sapien vulputate odio ipsum commodo. Facilisi sapien malesuada parturient ut phasellus. Ultricies ac viverra molestie at pretium.Lorem ipsum dolor sit amet consectetur.' role='Role' image={ChartIcon} />
          <TeamCard name='Team member name' description='Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras. Maecenas in massa in purus dui orci. Elementum pretium sapien vulputate odio ipsum commodo. Facilisi sapien malesuada parturient ut phasellus. Ultricies ac viverra molestie at pretium.Lorem ipsum dolor sit amet consectetur.' role='Role' image={ChartIcon} />
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default index


function TeamCard({ name, role, image, description }: { name: string, role: string, image: string, description: string }) {
  return (
    <div className="bg-gradient-to-r from-[#23454F] via-[#0066FF] to-[#1EB7CF] rounded-lg p-0.5">
      <div className="bg-white rounded-lg p-3 lg:p-6 space-y-4 lg:space-y-8">
        <div className="flex items-center gap-2">
          <div className='h-14 w-14 rounded-full'>
            <Image src={image} alt={name} className='w-full h-full rounded-full' />
          </div>
          <div>
            <h3 className='font-semibold'>{name}</h3>
            <p className='text-sm lg:text-base'>{role}</p>
          </div>
        </div>
        <p>
          {description}
        </p>
      </div>
    </div>
  )
}
