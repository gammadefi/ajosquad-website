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
              name='Ngozi Okonta'
              description='Ngozi brings over 23 years of diverse work experience in both the Banking and Technology sectors. Her career as a Cloud Consultant, paired with her deep understanding of finance, has equipped her with the skills to develop Ajosquad—a platform designed to provide innovative solutions to everyday financial needs.
              With a BSc in Banking and Finance, an MBA in Strategy, and many IT certifications under her belt, Ngozi’s diverse expertise allows her to approach the business from both a financial and technological perspective, ensuring Ajosquad remains a forward-thinking, customer-centric solution.
              In her personal time, Ngozi loves to explore emerging technologies and spend time with her family. She resides in Canada with her husband and four children.'
              role='Founder|CEO,  Ajosquad'
              image={ChartIcon}
            />
          </Slide>

          {/* <Slide direction="up" triggerOnce className='w-full md:w-auto'>
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
          </Slide> */}
        </div>
      </Fade>
    </section>
  );
};

export default Team;
