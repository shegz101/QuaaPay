import React from 'react';
import logo from '../assets/logo.png';
import { IoIosArrowDown } from 'react-icons/io';

const Header = () => {
    return (
        <div className='flex flex-row justify-between my-8'>
            {/* Quaapay Logo */}
            <div>
                <img src={logo} className='h-16 w-44' alt='quaapay'/>
            </div>

            {/* Nav Links */}
            <div>
                <nav className='flex flex-row justify-between list-none text-lg tracking-wide font-medium mt-4 px-8 space-x-14 cursor-pointer'>
                    <li className='h-16'>Home</li>
                    <li className='h-16'>About</li>
                    <li className='h-16'>Contact</li>
                    <li className='h-16'>FAQ</li>
                    {/* <li className='h-16'>Blog</li> */}
                    <li className='h-16 flex flex-row'>Legal <IoIosArrowDown className='mt-1.5 ml-2'/></li>
                </nav>
            </div>

            {/* Get Application Button */}
            <div className='mt-3 h-12 py-3 px-8 border text-[#f04d07] border-[#f04d07] rounded-lg font-medium cursor-pointer'>
                <button>Get App</button>
            </div>
        </div>
    )
}

export default Header;
