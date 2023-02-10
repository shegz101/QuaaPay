import React from 'react';
import logo from "../assets/footer-logo.png";
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {
    return (
        <div className='flex justify-between fixed z-20 w-full px-16 pt-6 space-x-2'>
            {/* Quaapay Logo */}
            <div className='xs:w-[50%] xs:pl-4'>
                <img className='h-12 bg-transparent' src={logo} alt="logo"/>
            </div>

            {/* Nav Links */}
            <div className='mt-5'>
                <nav className="text-[#000000] font-semibold">
                    <ul className='xs:hidden flex flex-row space-x-10 text-[13px] cursor-pointer font-semibold'>
                        <li className='hover:opacity-60'>Home</li>
                        <li className='hover:opacity-60'>Features</li>
                        <li className='hover:opacity-60'>Our Community</li>
                        <li className='hover:opacity-60'>Payment Gateway</li>
                        <li className='hover:opacity-60'>Our Framework</li>
                    </ul>
                </nav>
            </div>

            <div className='xs:hidden h-12'>
                <button className='bg-[#0707B0] h-full rounded-[10px] w-40 opacity-95 text-[14px] text-[#FFFFFF]'>Download app</button>
            </div>

            <div className="xs:block xt:hidden pr-6">
                <GiHamburgerMenu className='text-[#FFFFFF] h-40 w-8'/>
            </div>
        </div>
    )
}

export default Header;
