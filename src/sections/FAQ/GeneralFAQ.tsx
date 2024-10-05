import React, { useState } from 'react'
import Accordion from '../../components/Accordion'
import { faq } from './faqs'

const GeneralFAQ = () => {
  const [selectedItem, setSelectedItem] = useState<number | null>(null)

  const handleClick = (id: number | null) => {
    if (selectedItem === id) {
      setSelectedItem(null)
    } else {
      setSelectedItem(id)
    }
  }
  return (
    <div className='py-5 md:py-10 flex flex-col gap-5 md:gap-8 lg:w-full'>
      {
        faq.general.map((item, id) => (
          
            <Accordion key={id} question={item.question} answer={item.answer} handleOnClick={() => handleClick(id)} open={id === selectedItem} />
        ))
      }
    </div>
  )
}

export default GeneralFAQ