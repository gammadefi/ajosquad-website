import Image from 'next/image';
import Link from 'next/link'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import React from "react";

const Footer = () => {
  return (
    <footer className="w-full font-sora bg-black text-white py-16 px-8 md:px-16">
      <div className='w-full gap-10 flex md:flex-row flex-col justify-between '>
        <div className='md:w-1/2 w-full'>
          <h2 className='md:text-4xl font-bold text-2xl'>Join Our Community</h2>
          <p className='text-xs md:text-sm font-normal mb-6 my-4'>Stay ahead of the curve with exclusive updates and unbeatable financial offers from Ajosquad. Subscribe now to be the first to discover the latest news from Ajosquad.</p>

          <div className='w-full py-3 px-4 flex items-center border boder-white rounded-full md:h-[56px]'>
            <input className='w-full h-full text-white placeholder:text-white bg-transparent border-none focus:outline-none' placeholder='Your Email' />
            <button className='text-primary bg-white rounded-full w-[64px] py-[6px] px-3 text-sm '>Join</button>

          </div>
        </div>

      

        <div className='flex-col  pr-10 flex gap-3'>
         
          <Link href="/privacy-policy">Privacy Policy</Link>
          <Link href="/terms-of-service">Terms of Service</Link>
          <Link href="">Contact Us</Link>
          <Link href="">About Us</Link>
          <Link href="">Faq</Link>

        </div>

      </div>



    </footer>
  );
};

export default Footer;

