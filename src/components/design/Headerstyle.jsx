import { useEffect } from 'react';
import { navigation } from "../../constants";
import React from 'react';

export const HamburgerMenu = ({ onClose }) => {
    useEffect(() => {
        // Function to handle scroll event
        const preventScroll = (e) => {
            e.preventDefault();
        };

        // Event listener to prevent scrolling
        document.body.style.overflow = 'hidden';
        window.addEventListener('scroll', preventScroll);

        // Cleanup function to remove the event listener
        return () => {
            document.body.style.overflow = 'auto';
            window.removeEventListener('scroll', preventScroll);
        };
    }, []); // Only run this effect once when the component mounts

    return (
        <div className="absolute inset-0 sm:hidden bg-mobilenav z-10 overflow-y-hidden">
            <div className="text-end p-5 font-poppins font-bold text-[40px] hover:cursor-pointer" onClick={onClose}>X</div>
            <div className="flex-col flex text-center font-poppins font-medium text-[24px] text-mobiletitle py-[30%]">
                {navigation.map((item) => (
                    <a key={item.id} href={item.url}
                    className="hover:opacity-60 pt-[30px]"
                    onClick={onClose}
                    >
                        {item.title}
                    </a>
                    ))}
            </div>
        </div>
    );
};
