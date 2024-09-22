import React from 'react';
import { Fade } from 'react-awesome-reveal';

const About = () => {
    return (
        <div className='w-full py-8 md:p-24 px-5 md:px-8 lg:px-[80px] h-full'>
            {/* Wrap the h3 element in the Fade component for a reveal effect */}
            <Fade direction="up" triggerOnce={true}>
                <h3 className='text-[#08354C] text-center font-bold text-3xl md:text-5xl'>
                    AjoSquad
                </h3>
            </Fade>

            {/* Reveal effect for the subtitle */}
            <Fade direction="up" delay={100} triggerOnce={true}>
                <h5 className='text-[#08354C] my-5 font-normal text-lg md:text-2xl text-center'>
                    Pool together, Prosper together
                </h5>
            </Fade>

            {/* Reveal effect for the paragraph content */}
            <Fade direction="up" delay={200} triggerOnce={true}>
                <p className='md:text-[29px] my-8 md:my-12 !tracking-[-1.6%] leading-[28px] md:leading-[36px] font-extralight'>
                    <span className='font-semibold'>AjoSquad</span>, a revolutionary Fintech platform that automates community-based savings, streamlining the traditional peer-to-peer (P2P) savings process. Our user-friendly platform allows you to join a savings group, known as a "Squad," where members take turns receiving pooled funds in a secure and transparent environment. With AjoSquad, you can easily save and grow your money collectively, enjoying a seamless and secure experience for all your financial transactions."
                </p>
            </Fade>
        </div>
    );
};

export default About;
