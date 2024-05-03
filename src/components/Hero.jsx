import React from 'react'
import { bghero, krakenlogo } from '../assets/kraken_assets'
import { heroLinks } from '../constants';

const Hero = () => {
  return (
    <section id="hero" className='flex flex-col-reverse justify-center sm:flex-row items-center mb-12 relative '>
        <div className='max-w-[1440px] mx-auto flex items-center justify-center flex-col'> 
            <div className=' hidden sm:flex items-center flex-col'>
            <h1 className='text-[200px] font-montserrat font-black text-center sm:text-[165px] md:text-[220px] lg:text-[265px] radial-text  drop-shadow-2xl'>
                    KRAKEN
            </h1>
            
            <p className='mt-[-2rem] md:mt-[-3rem] space-x-2 font-poppins font-normal md:text-[23px] text-herocolor text-[18px]'>
                {heroLinks.map((item) => (
                <a key={item.id} href={item.url}
                className="hover:opacity-60">
                    {item.title}
                </a>
                ))}
                &nbsp; and more!
            </p>
            </div>
                <div className='block sm:hidden'>
                    <img 
                        src={krakenlogo}
                        className='h-[320px] p-10'
                    />
                </div>
                <div className='block text-center sm:hidden text-herocolor text-[16px] font-poppins font-normal ml-10 mr-10 space-x-2 justify-center items-center '>
                    {heroLinks.map((item) => (
                    <a key={item.id} href={item.url}
                    className="hover:opacity-60">
                        {item.title}
                    </a>
                    ))}
                    &nbsp; and more!
                </div>
                <div className='mt-7 rounded-[8px] border-gradient h-[42px] w-[168px] text-center justify-center flex button__gradient'>
                <button className='font-inter font-semibold text-[16px] text-herocolor'>Let's Connect</button>
                </div>
                <div className='mt-10 rotate-90'>
                    <p className='text-[24px] font-poppins font-medium text-herocolor'>{" >> "}</p>    
                </div>       
        </div>
        <div className='absolute bottom-[-25rem] xl:bottom-[-35rem] ss:bottom-[-15rem] left-0 right-0 sm:bottom-[-21rem] xs:bottom-[-15rem] hollow:bottom-[-7.6rem]  lg:bottom-[-27rem]'>
        <img 
        src={bghero}
        className=" bg-cover h-full w-full"
        />
        </div>
    </section>
  )
}

export default Hero