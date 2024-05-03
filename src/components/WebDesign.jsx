import React from 'react';
import { laptop_1 } from '../assets/kraken_assets';

const WebDesign = () => {
  return (
    <section id="web" className='flex flex-col justify-center sm:flex-col xl:mt-[60vh] mt-[45vh] xs:mt-[26.1vh] ss:mt-[26.1vh] sm:mt-[36.7vh] md:mt-[36.7vh] hollow:mt-[12.7vh] min-h-screen bg-mobiletitle items-center'>
    <div className='max-w-[1440px] w-full items-center justify-end flex flex-col md:flex-row mt-[-15rem]'>
    <div className=' m-1 md:mr-[-95rem] mr-[-0.05rem]'>
      <div className='text-[170px] md:text-[384px] font-montserrat font-black hero-text'>
        WEB
      </div>
      <div className='px-10 md:mt-[-15rem] md:ml-[14rem] ml-[0.05rem] mt-[-7rem]'>
        <p className='text-[80px] md:text-[152px] font-montserrat font-black  text-shadow drop-shadow-2xl text-herocolor'>DESIGNS
        </p>
      </div>
    </div>
      <div className='mt-[-4.5rem] ml-[2rem] z-10 md:mr-[-4rem] flex md:mb-[-38rem] md:rotate-12'>
        <img 
          src={laptop_1}
          className='h-[220px] w-[280px] md:w-[850px] md:h-[500px] md:rotate-6'
        />
      </div>
        <div className='pt-10 pb-5 text-center justify-center p-14 mb-[-1rem] md:w-[690px] md:mb-[-51rem] md:text-end'>
          <p className='font-poppins font-normal text-white leading-7'> 
          We don’t just design, we craft digital 
          experiences that are interactive, and visually 
          stunning. Your website is your digital 
          storefront, and first impressions matter. We'll 
          help you make a splash with a website that's 
          as unique as your brand.
          </p>
        </div>
    </div>

    </section>
      
  )
}

export default WebDesign