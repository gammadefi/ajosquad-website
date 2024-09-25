import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Fade, Zoom } from 'react-awesome-reveal';

const Howitworks = () => {
    return (
        <div className='w-full py-8 md:py-24 px-3 md:px-8 lg:px-[96px] h-full'>
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
                        description: "Sign up through our user-friendly app (app.ajosquad.com). Provide necessary information needed to set up your account.",
                    },
                    {
                        title: "Complete KYC",
                        description: "Complete KYC (Know Your Customer). Verify your identity for a secure experience.",
                    },
                    {
                        title: "Connect Bank",
                        description: "Link your bank account for seamless payouts.",
                    },
                    {
                        title: "Choose a Position",
                        description: "Proceed to select a payment position of your choice.",
                    },
                    {
                        title: "Add Payout Bank Details",
                        description: "Provide your bank account information to receive your savings payout when your position is reached.",
                    },
                    {
                        title: "Monitor Progress",
                        description: "Track your contributions and monitor your squad’s progress through the dashboard.",
                    }
                ].map((item, index) => (
                    <Zoom triggerOnce delay={index * 150} key={index}>
                        <div className='md:w-[300px] w-full mx-auto p-5 h-[170px] rounded-xl bg-[#EEEFF0] shadow-md hover:shadow-lg transition-shadow duration-300'>
                            <h3 className='text-xl mx-auto font-semibold'>{item.title}</h3>
                            <p className='font-light mt-2'>{item.description}</p>
                        </div>
                    </Zoom>
                ))}
            </div>

            <Fade direction="up" triggerOnce delay={500}>
                <div className='text-center mt-8'>
                    <Link className='text-[#08354C] text-lg font-semibold flex items-center gradiant-text justify-center hover:text-[#005b78] transition-colors' href="/learn-more">
                        Learn More <FaArrowRight className='ml-2' />
                    </Link>
                </div>
            </Fade>
        </div>
    );
};

export default Howitworks;
