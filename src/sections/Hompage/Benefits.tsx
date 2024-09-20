import React from 'react'
import { Fade, Slide } from 'react-awesome-reveal';
import { FaCheckCircle } from 'react-icons/fa';


const Benefits = () => {
    return (
        <div className='w-full py-12 text-white md:py-[55px] px-3 md:px-8 lg:px-[96px] h-full bg-[#08354C]'>
            <Fade direction="up" triggerOnce>
                <h3 className='text-white text-center font-bold text-3xl md:text-5xl'>Benefit of using our products</h3>
            </Fade>

            <div className='grid px-5 items-center md:px-12 grid-cols-1 gap-12 md:grid-cols-2 my-8 md:my-16 w-full'>
                <Slide direction="left" triggerOnce>
                    <div className='w-full md:max-w-[525.5px]'>
                        <img src='/assets/save.png' />

                    </div>
                </Slide>

                <Slide direction="right" triggerOnce>
                    <div className='w-full md:max-w-[521px]'>
                        <h3 className='text-3xl md:text-4xl font-bold'>AjoSquad Savings</h3>

                        <p className='text-white font-extralight my-4 text-2xl md:text-4xl leading-[44px]'>Becoming financially free by joining a Squad in ajosquad and boost your saving capability.</p>
                        <div className='flex gap-4 my-6  flex-col'>
                            <div className='flex md:text-lg gap-2 items-center'>
                                <div>
                                    <FaCheckCircle className="h-6 text-[24px]" />
                                </div> Already vetted and trusted people to form saving group.
                            </div>
                            <div className='flex md:text-lg gap-2 items-center'>
                                <div>
                                    <FaCheckCircle className="h-6 text-[24px]" />
                                </div>
                                Fully automated platform to receive funds from members and credit beneficiary with one deposit.
                            </div>
                            <div className='flex md:text-lg gap-2 items-center'>
                                <div>
                                    <FaCheckCircle className="h-6 text-[24px]" />
                                </div> Track all payment and follow up if variation occurs.
                            </div>
                            <div className='flex md:text-lg gap-2 items-center'>
                                <div>
                                    <FaCheckCircle className="h-6 text-[24px]" />
                                </div>Automatically send reminders and prompt before debit day.
                            </div>
                            <div className='flex md:text-lg gap-2 items-center'>
                                <div>
                                    <FaCheckCircle className="h-6 text-[24px]" />
                                </div> Save with others and collect the lump sum as one payment.
                            </div>
                        </div>


                    </div>
                </Slide>
            </div>

            <div className='grid px-5 items-center md:px-12 grid-cols-1 gap-12 md:grid-cols-2 my-8 md:my-16 w-full'>
               

                <Slide className='order-last md:order-1' direction="left" triggerOnce>
                    <div className='w-full  md:max-w-[521px]'>
                        <h3 className='text-3xl md:text-4xl font-bold'>AjoHomes for Investment</h3>

                        <p className='text-white font-extralight my-4 text-2xl md:text-4xl leading-[44px]'>AjoHomes is an innovative product designed to allow individuals to invest in real estate through collective savings, much like joining a squad to buy stocks and shares</p>
                        <h3 className='font-semibold text-xl md:text-2xl '>Key Benefit of  Using Ajohomes</h3>
                        <div className='flex gap-4 my-3  flex-col'>
                            <div className='flex md:text-lg gap-2 items-center'>
                                <div>
                                    <FaCheckCircle className="h-6 text-[24px]" />
                                </div>Transparent Property Details
                            </div>
                            <div className='flex md:text-lg gap-2 items-center'>
                                <div>
                                    <FaCheckCircle className="h-6 text-[24px]" />
                                </div>
                                Professional Management
                            </div>
                            <div className='flex md:text-lg gap-2 items-center'>
                                <div>
                                    <FaCheckCircle className="h-6 text-[24px]" />
                                </div> Regular Updates
                            </div>
                            <div className='flex md:text-lg gap-2 items-center'>
                                <div>
                                    <FaCheckCircle className="h-6 text-[24px]" />
                                </div>Planned Sale Window
                            </div>
                            <div className='flex md:text-lg gap-2 items-center'>
                                <div>
                                    <FaCheckCircle className="h-6 text-[24px]" />
                                </div> Property Location
                            </div>
                        </div>


                    </div>
                </Slide>

                <Slide direction="right" className='order-1 md:order-last' triggerOnce>
                    <div className='w-full md:max-w-[525.5px]'>
                        <img src='/assets/house-image.png' />

                    </div>
                </Slide>
            </div>

        </div>
    )
}

export default Benefits