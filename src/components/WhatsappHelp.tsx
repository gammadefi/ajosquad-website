import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const WhatsAppButton = () => {
  const phoneNumber = '16394705884'; // Replace with the contact number you want
  const message = 'Hello, I need help with'; // Customize the message
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  const [isVisible, setIsVisible] = useState(true);
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let scrollTimeout: NodeJS.Timeout;
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      // If scrolling down, hide the button
      if (scrollTop > lastScrollTop) {
        setIsScrolling(true);
        setIsVisible(false);
      } else {
        // If scrolling up, show the button
        setIsScrolling(true);
        setIsVisible(false);
      }

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;

      // Clear any existing timeout when scrolling
      clearTimeout(scrollTimeout);

      // Set a timeout to detect if scrolling has stopped
      scrollTimeout = setTimeout(() => {
        setIsScrolling(false);
        setIsVisible(true); // Show the button when scrolling stops
      }, 500); // Adjust the timeout duration if needed
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimeout);
    };
  }, []);

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-5 z-20 left-2 md:left-5 text-white md:p-4 transition-all duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
    >
      <Image src={"/assets/whatsapp-chat.svg"} alt='' width={131} height={40} />
    </a>
  );
};

export default WhatsAppButton;
