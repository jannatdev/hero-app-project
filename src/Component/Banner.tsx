import Image from 'next/image';
import React from 'react';
import heroImage from '@/app/assets/hero.png'

const Banner = () => {
    return (
        <div className='mt-10'>
            <div className='mx-auto w-[55%]'>
                <h1 className= ' text-4xl font-bold leading-15 text-center'>We Build <br /> 
                <span className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent '>Productive</span>  Apps</h1>
                <p className='text-[##627382] text-center mt-4'>At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter,
                     and more exciting.Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            </div>
            <div className='mt-10'   >
                <Image  src={heroImage} width={600} height={700} alt="hero Image" className='mx-auto'/>
            </div>
            <div className='w-[full] h-50 bg-[#632EE3]'>

            </div>
            
            
        </div>
    );
};

export default Banner;