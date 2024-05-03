import {krakenlogo, menu} from '../assets/kraken_assets';
import { navigation } from '../constants';
import { HamburgerMenu } from './design/Headerstyle';
import React, { useState } from 'react';


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // State variable to track menu visibility
  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle menu visibility
  };

  return (
    <section className='text-primary z-10 '>
        <div className='max-w-[1440px] mx-auto p-4 flex justify-between items-center '>
            <a href="#hero" className='p-8 sm:block hidden'>
            <img 
                src={krakenlogo}  
            />
            </a>
            <a href="#hero" className='font-montserrat font-black text-[36px] text-mobiletitle sm:hidden block'>
                KRAKEN
            </a>
            <div className='hidden sm:block space-x-5 text-primary font-inter font-medium text-[24px] p-8'>
              {navigation.map((item) => (
              <a key={item.id} href={item.url}
              className="hover:opacity-60">
                {item.title}
              </a>
              ))}
            </div>
              <div className='block sm:hidden'>
                <img
                  src={menu}
                  alt="Menu"
                  onClick={toggleMenu} // Call toggleMenu function when the menu button is clicked
                />
                {menuOpen && <HamburgerMenu onClose={toggleMenu} />} {/* Pass onClose function to close the menu */}
              </div>
        </div>   
    </section>
  )
}

export default Header