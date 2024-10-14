import React, { useState } from 'react'
import Image from 'next/image'

const TestimonialCard = ({ name, image, testimonial }: { name: string, image: string, testimonial: string }) => {
  // State to toggle read more/less
  const [isExpanded, setIsExpanded] = useState(false);

  // Toggle the state
  const toggleReadMore = () => {
    setIsExpanded(prevState => !prevState);
  };

  return (
    <div className={`p-3 lg:px-8 lg:py-7 h-[320px] lg:h-[400px] bg-[#101010] rounded-xl flex flex-col justify-between  transition-all duration-300 ease-in-out ${isExpanded ? 'lg:w-[750px] w-[500px]' : 'w-[300px] lg:w-[437px]'}`}>
      {/* Testimonial Text */}
      <p className='text-sm lg:text-lg'>
        {isExpanded ? testimonial : `${testimonial.substring(0, 300)}...`}
      </p>

      {/* Read More / Read Less Button */}
      <button
        onClick={toggleReadMore}
        className="text-blue-500 mr-auto underline focus:outline-none text-sm"
      >
        {isExpanded ? 'Read Less' : 'Read More'}
      </button>

      {/* User Info */}
      <div className="flex items-center gap-2 mt-auto">
        <div className='h-8 w-8 rounded-full'>
          <Image src={image} alt={name} className='w-full h-full rounded-full' />
        </div>
        <h3 className='font-bold truncate text-lg'>{name}</h3>
      </div>
    </div>
  );
};

export default TestimonialCard;
