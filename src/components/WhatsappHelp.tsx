import Image from 'next/image';
import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppButton = () => {
  const phoneNumber = '16394705884'; // Replace with the contact number you want
  const message = 'Hello, I need help with'; // Customize the message
  
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 z-20 left-5  text-white  p-4 transition-all"
    >
      <Image src={"/assets/whatsapp-chat.svg"} alt='' width={200} height={72} />
    </a>
  );
};

export default WhatsAppButton;
