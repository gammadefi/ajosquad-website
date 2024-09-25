import React from 'react';
import TeamCard from './Teamcard';
import { Zoom, Fade, Slide } from 'react-awesome-reveal';
import ChartIcon from '../../../public/assets/chart.svg';

const Team = () => {
  return (
    <section className='px-5 py-10 lg:py-20 lg:px-12 2xl:px-24'>
      <Fade direction="up" triggerOnce>
        <div className='space-y-4'>
          {/* Zoom-in effect on heading */}
          <Zoom triggerOnce>
            <h2 className='gradient-text font-medium w-fit mx-auto md:text-xl'>
              Our Team
            </h2>
          </Zoom>

          {/* Fade-in effect on description text */}
          <Fade direction='up' triggerOnce>
            <p className='text-center font-semibold text-[#08354C] text-2xl lg:text-4xl lg:px-20'>
              Meet the Visionaries Driving Your Global Success, Bringing a Wealth of Skills and Diverse Expertise from Various Backgrounds.
            </p>
          </Fade>
        </div>

        {/* Slide-in effect for the team cards */}
        <div className='my-5 lg:my-10 flex flex-wrap justify-center gap-5'>
          <Slide direction="left" triggerOnce className='w-full md:w-auto'>
            <TeamCard
              name='Team member name'
              description='Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras.'
              role='Role'
              image={ChartIcon}
            />
          </Slide>

          <Slide direction="up" triggerOnce className='w-full md:w-auto'>
            <TeamCard
              name='Team member name'
              description='Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras.'
              role='Role'
              image={ChartIcon}
            />
          </Slide>

          <Slide direction="right" triggerOnce className='w-full md:w-auto'>
            <TeamCard
              name='Team member name'
              description='Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras.'
              role='Role'
              image={ChartIcon}
            />
          </Slide>

          <Slide direction="left" triggerOnce className='w-full md:w-auto'>
            <TeamCard
              name='Team member name'
              description='Lorem ipsum dolor sit amet consectetur. Tortor euismod eu aliquam odio congue pellentesque eget. Amet proin vitae massa accumsan et commodo sed. Elementum dui ipsum urna tortor enim. Sollicitudin at egestas viverra a mauris id scelerisque purus cras.'
              role='Role'
              image={ChartIcon}
            />
          </Slide>
        </div>
      </Fade>
    </section>
  );
};

export default Team;
