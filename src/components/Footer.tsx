import Image from 'next/image';
import Link from 'next/link'
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import React, { useState } from "react";
import axios from 'axios';
import Spinner from './spinner/Spinner';

const Footer = () => {

  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async () => {
    // e.preventDefault();
    setStatus('loading');

    try {
      const response = await axios.post('/api/subscribe', { email });

      if (response.data.success) {
        setStatus('success');
        setEmail('');

        setTimeout(() => {
          setStatus('');
        }, 5000);
      } else {
        setStatus('error');

        setTimeout(() => {
          setStatus('');
        }, 5000);
      }
    } catch (error) {
      setStatus('error');

       setTimeout(() => {
        setStatus('');
      }, 5000);
    }
  };
  return (
    <footer className="w-full font-sora bg-black text-white pt-16 px-8 md:px-16">
      <div className='w-full gap-10 flex md:flex-row flex-col justify-between '>
        <div className='md:w-1/2 w-full'>
          <h2 className='md:text-4xl font-bold text-2xl'>Join Our Community</h2>
          <p className='text-xs md:text-sm font-normal mb-6 my-4'>Stay ahead of the curve with exclusive updates and unbeatable financial offers from Ajosquad. Subscribe now to be the first to discover the latest news from Ajosquad.</p>

          <div className='w-full py-3 px-4 flex items-center border boder-white rounded-full md:h-[56px]'>
            <input value={email} onChange={(e) => setEmail(e.target.value)} className='w-full h-full text-white placeholder:text-white bg-transparent border-none focus:outline-none' placeholder='Your Email' />
            <button disabled={status === "loading" || status === "success"} onClick={handleSubmit} className='text-primary bg-white flex items-center justify-center rounded-full w-[64px] py-[6px] px-3 text-sm '>{status === "loading" ? <Spinner width={14} color='#000' /> : status === "success" ? "✔" :"Join"}</button>

          </div>
        </div>



        <div className='flex-col  pr-10 flex gap-3'>

          <Link href="/privacy-policy">Privacy Policy</Link>
          {/* <Link href="/terms-of-service">Terms of Service</Link> */}
          <Link href="/faq#contact">Contact Us</Link>
          <Link href="/about">About Us</Link>
          <Link href="/faq">Faq</Link>

        </div>

      </div>
      <div className='w-full py-16 flex items-center gap-5 flex-wrap-reverse justify-between'>
        <div className='flex gap-2 items-center'>
          <Image src={'/assets/logo.svg'} alt='' width={40} height={40} />
          <h5>Ajosquad | All Rights Reserved | Copyright © 2024</h5>
        </div>

        <div className='flex gap-2 items-center ml-auto justify-end'>
          <Link href={"https://web.facebook.com/profile.php?id=61554877149543"}>
              <Image alt='' src={"/assets/facebook.svg"} width={30} height={30} />

          </Link>
          <Link href={"https://twitter.com/ajos_quad"}>
              <Image alt='' src={"/assets/x.svg"} width={30} height={30} />

          </Link>
          <Link href={"https://www.instagram.com/ajo_squad/"}>
              <Image alt='' src={"/assets/instagram.svg"} width={30} height={30} />

          </Link>

        </div>


      </div>



    </footer>
  );
};

export default Footer;

