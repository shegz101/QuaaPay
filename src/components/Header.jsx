import React from 'react';
import logo from "../assets/footer-logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { useScrollPosition } from './useScrollPosition';

const Header = () => {
    const scrollPosition = useScrollPosition();

    const nav_position = scrollPosition > 0 ? 'shadow-lg' : 'shadow-none';
    
    return (
        <div className={`${nav_position} transition-shadow bg-[#ffffff] xs:h-16 flex justify-between z-30 w-full px-16 xs:px-[4px] pt-4 pb-4 space-x-2 fixed`}>
            {/* Quaapay Logo */}
            <div className='mt-[-10px]'>
                <img className='h-14 xs:h-12 bg-transparent' src={logo} alt="logo"/>
            </div>

            {/* Nav Links */}
            <div className='mt-3 xs:hidden'>
                <nav className="text-[#000000] font-semibold">
                    <ul className='xs:hidden flex flex-row space-x-10 text-[15px] cursor-pointer font-semibold'>
                        <li className='hover:opacity-60'>Home</li>
                        <li className='hover:opacity-60'>Features</li>
                        <li className='hover:opacity-60'>Our Community</li>
                        <li className='hover:opacity-60'>Payment Gateway</li>
                        <li className='hover:opacity-60'>Our Framework</li>
                    </ul>
                </nav>
            </div>

            <div className='xs:hidden h-12'>
                <button className='bg-[#0707B0] h-full rounded-[5px] w-40 opacity-95 text-[14px] text-[#FFFFFF]'>Download app</button>
            </div>

            <div className="xs:block xt:hidden pr-2">
                <GiHamburgerMenu className='text-[#000000] h-10 w-8'/>
            </div>
        </div>
    )
}

export default Header;
