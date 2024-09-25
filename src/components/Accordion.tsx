import React from 'react'
import { IoIosArrowDown } from "react-icons/io";

type AccordionPropType = {
  question: string;
  answer: string;
  handleOnClick: () => void;
  open: boolean
}
const Accordion = ({ question, answer, handleOnClick, open }: AccordionPropType) => {
  return (
    <div className="space-y-2 border-t border-[#00000061] pt-4">
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl'>{question}</h2>
        <div>
          <IoIosArrowDown size={25} className={`cursor-pointer transition-all ease-in-out ${open ? 'rotate-[180deg]' : ''} duration-500`} onClick={handleOnClick} />

        </div>
      </div>
      <p className={`pr-4 text-xl overflow-hidden transition-all ease-in-out ${open ? 'opacity-100 h-[200px] md:h-[118px] lg:h-32 2xl:h-[118px]' : 'opacity-0 h-0'} duration-500`}>{answer}</p>
    </div>
  )
}

export default Accordion