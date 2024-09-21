import React from 'react'
import TeamCard from './Teamcard'
import { Fade } from 'react-awesome-reveal'
import ChartIcon from '../../../public/assets/chart.svg'

const Team = () => {
  return (
    <section className='px-5 py-10 lg:py-20 lg:px-12 2xl:px-24'>
    <Fade direction="up" triggerOnce>
      <div>
        <div className='space-y-4'>
          <h2 className='gradient-text font-medium w-fit mx-auto md:text-xl'>
            Our Team
          </h2>
          <p className='text-center font-semibold text-[#08354C] text-2xl lg:text-4xl lg:px-20'>
            Meet the Visionaries Driving Your Global Success, Bringing a Wealth of Skills and Diverse Expertise from Various Backgrounds.
          </p>
        </div>
        <div className='my-5 lg:my-10 flex flex-wrap justify-center gap-5'>
          <TeamCard name='Team member name' description='Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras. Maecenas in massa in purus dui orci. Elementum pretium sapien vulputate odio ipsum commodo. Facilisi sapien malesuada parturient ut phasellus. Ultricies ac viverra molestie at pretium.Lorem ipsum dolor sit amet consectetur.' role='Role' image={ChartIcon} />
          <TeamCard name='Team member name' description='Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras. Maecenas in massa in purus dui orci. Elementum pretium sapien vulputate odio ipsum commodo. Facilisi sapien malesuada parturient ut phasellus. Ultricies ac viverra molestie at pretium.Lorem ipsum dolor sit amet consectetur.' role='Role' image={ChartIcon} />
          <TeamCard name='Team member name' description='Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras. Maecenas in massa in purus dui orci. Elementum pretium sapien vulputate odio ipsum commodo. Facilisi sapien malesuada parturient ut phasellus. Ultricies ac viverra molestie at pretium.Lorem ipsum dolor sit amet consectetur.' role='Role' image={ChartIcon} />
          <TeamCard name='Team member name' description='Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras. Maecenas in massa in purus dui orci. Elementum pretium sapien vulputate odio ipsum commodo. Facilisi sapien malesuada parturient ut phasellus. Ultricies ac viverra molestie at pretium.Lorem ipsum dolor sit amet consectetur.' role='Role' image={ChartIcon} />
        </div>
      </div>
    </Fade>
  </section>
  )
}

export default Team