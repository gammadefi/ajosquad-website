import Link from 'next/link';
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import { Fade } from 'react-awesome-reveal';

const Howitworks = () => {
    return (
        <div className='w-full py-8 md:p-24 px-3 md:px-8 lg:px-[96px] h-full'>
            <Fade direction="up" triggerOnce>
                <h3 className='text-[#08354C] text-center font-bold text-3xl md:text-5xl'>
                    How it Works
                </h3>
                <h5 className='text-[#787A7D] text-center font-normal text-lg mt-3 md:text-3xl'>Learn how it works and skyrocket your saving.</h5>

                <div className='grid md:grid-cols-2 px-5 grid-cols-1 lg:grid-cols-3 md:max-w-[980px] mx-auto items-center my-12 justify-center gap-5'>
                    <div className='md:w-[300px] w-full mx-auto p-5 h-[170px] rounded-xl bg-[#EEEFF0]'>

                        <h3 className='text-xl mx-auto font-semibold '>Create an Account</h3>
                        <p className='font-light mt-2'>Sign up through our user-friendly app (app.ajosquad.com). By providing necessary information needed to set up your account.</p>

                    </div>
                    <div className='md:w-[300px] w-full mx-auto p-5 h-[170px] rounded-xl bg-[#EEEFF0]'>

                        <h3 className='text-xl font-semibold '>Complete KYC</h3>
                        <p className='font-light mt-2'>Complete KYC (Know Your Customer) Verify your identity for a secure experience.</p>

                    </div>
                    <div className='md:w-[300px] w-full mx-auto p-5 h-[170px] rounded-xl bg-[#EEEFF0]'>

                        <h3 className='text-xl font-semibold '>Connect Bank</h3>
                        <p className='font-light mt-2'>Link your bank account for seamless payouts.   </p>

                    </div>
                    <div className='md:w-[300px] w-full mx-auto p-5 h-[170px] rounded-xl bg-[#EEEFF0]'>

                        <h3 className='text-xl font-semibold '>Choose a Position</h3>
                        <p className='font-light mt-2'>Then Proceed to select a payment position of your choice.</p>

                    </div>
                    <div className='md:w-[300px] w-full mx-auto p-5 h-[170px] rounded-xl bg-[#EEEFF0]'>

                        <h3 className='text-xl font-semibold '>Add Payout Bank Details</h3>
                        <p className='font-light mt-2'>Provide your bank account information to receive your savings payout when your position is reached.</p>

                    </div>
                    <div className='md:w-[300px] w-full mx-auto p-5 h-[170px] rounded-xl bg-[#EEEFF0]'>

                        <h3 className='text-xl font-semibold '>Create an Account</h3>
                        <p className='font-light mt-2'>Sign up through our user-friendly app (app.ajosquad.com). By providing necessary information needed to set up your account.</p>

                    </div>

                </div>

                <Link href='' className="text-base block mx-auto w-full md:w-fit rounded-lg p-0.5 bg-gradient-to-r from-[#23454F] via-[#0066FF] to-[#1EB7CF]">
                    <div className="bg-white flex items-center justify-center gap-2 py-2 px-10 rounded-[calc(0.5rem-2px)]">
                        <span className='gradient-text'>Register now</span>
                        <FaArrowRight className='text-[#1EB7CF]' size={12} />
                    </div>
                </Link>
            </Fade>
        </div>
    )
}

export default Howitworks