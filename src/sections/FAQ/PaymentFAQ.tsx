import React, { useState } from 'react'
import Accordion from '../../components/Accordion'
import { faq } from './faqs'

const PaymentFAQ = () => {
  const items = [
    { id: 1, question: 'What is Ajosquad?(Payment)', answer: 'Ajosquad is a collective savings platform that allows individuals to join a savings Squad, contribute bi-weekly, and receive payouts based on a predetermined schedule. A typical Squad consists of 10 members and operates on a 5-month life cycle.' },
    { id: 2, question: 'What is Ajosquad?', answer: 'Ajosquad is a collective savings platform that allows individuals to join a savings Squad, contribute bi-weekly, and receive payouts based on a predetermined schedule. A typical Squad consists of 10 members and operates on a 5-month life cycle.' },
    { id: 3, question: 'What is Ajosquad?', answer: 'Ajosquad is a collective savings platform that allows individuals to join a savings Squad, contribute bi-weekly, and receive payouts based on a predetermined schedule. A typical Squad consists of 10 members and operates on a 5-month life cycle.' },
    { id: 4, question: 'What is Ajosquad?', answer: 'Ajosquad is a collective savings platform that allows individuals to join a savings Squad, contribute bi-weekly, and receive payouts based on a predetermined schedule. A typical Squad consists of 10 members and operates on a 5-month life cycle.' },
    { id: 5, question: 'What is Ajosquad?', answer: 'Ajosquad is a collective savings platform that allows individuals to join a savings Squad, contribute bi-weekly, and receive payouts based on a predetermined schedule. A typical Squad consists of 10 members and operates on a 5-month life cycle.' }
  ]

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
        faq.payment.map((item, id) => (
          <Accordion key={id} question={item.question} answer={item.answer} handleOnClick={() => handleClick(id)} open={id === selectedItem} />
        ))
      }
    </div>
  )
}

export default PaymentFAQ