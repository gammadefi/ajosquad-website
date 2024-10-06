import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Fade, Zoom } from 'react-awesome-reveal';
import Image from 'next/image';

const Howitworks = () => {
    return (
        <div className='w-full py-8 md:pt-24 md:pb-20 px-3 md:px-8 lg:px-[96px] h-full'>
            <Fade direction="up" triggerOnce>
                <h3 className='text-[#08354C] text-center font-bold text-4xl md:text-5xl'>
                    How it Works
                </h3>
                <h5 className='text-[#787A7D] text-center font-normal text-xl mt-3 md:text-3xl'>
                    Learn how it works and skyrocket your saving.
                </h5>
            </Fade>

            <div className='grid md:grid-cols-2 lg:grid-cols-3 px-5 md:max-w-[980px] mx-auto items-center my-12 justify-center gap-5'>
                {[
                    {
                        title: "Create an Account",
                        description: (
                            <>
                                Sign up through our user-friendly app (
                                <a className='gradient-text' href="https://app.ajosquad.com" target="_blank" rel="noopener noreferrer">
                                    app.ajosquad.com
                                </a>
                                ). Provide the necessary information . An email will be sent, click to confirm your email and log in to access your dashboard
                            </>
                        ),
                    },
                    {
                        title: "Complete KYC/Agreement ",
                        description: "Complete your KyC to verify your identity for a secure experience and sign your agreement forms for clarity and legal protection",
                    },
                    {
                        title: "Join a squad and Connect Bank",
                        description: "Join a squad of your choice and Link your bank to create a mandate and enjoy seamless automatic debits",
                    },
                    {
                        title: "Choose a Position",
                        description: "Proceed to select any available payout position of your choice",
                    },
                    {
                        title: "Add Payout Bank Details",
                        description: "Provide your bank information to automatically receive your payout once due.",
                    },
                    {
                        title: "Monitor Progress",
                        description: "Track your contributions and monitor your squad's progress through the dashboard.",
                    }
                ]
                    .map((item, index) => (
                        <Zoom triggerOnce delay={index * 150} key={index}>
                            <div className='md:w-[300px] w-full mx-auto p-5 h-[210px] rounded-xl bg-[#EEEFF0] shadow-md hover:shadow-lg transition-shadow duration-300'>
                                <h3 className='text-xl mx-auto font-semibold'>{item.title}</h3>
                                <p className='font-light mt-2'>{item.description}</p>
                            </div>
                        </Zoom>
                    ))}
            </div>

            <div className='mt-[60px]'>
                <Fade direction='up' triggerOnce delay={400}>
                    <h3 className='text-center text-[#A0A3A6] '>Out Partners</h3>
                </Fade>
                <Fade direction="up" triggerOnce delay={500}>
                    <div className='text-center flex items-center justify-center gap-8 mt-3'>
                        <Image src={"/assets/deborahomes.png"} alt='' width={120} height={64} />
                        <Image src={"/assets/canada.png"} alt='' width={120} height={64} />

                    </div>
                </Fade>
            </div>


        </div>
    );
};

export default Howitworks;
