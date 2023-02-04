import React from 'react';
import logo from "../assets/header-logo.jpg";
import { GiHamburgerMenu } from "react-icons/gi"

const Header = () => {
    return (
        <div className='flex justify-between bg-[#000000] xs:w-[80%] xs:h-12 xs:ml-[10%] xs:mr-[10%] w-[60%] ml-[20%] mr-[20%] h-14 
        rounded-[40px] items-center fixed z-20'>
            {/* Quaapay Logo */}
            <div className='flex flex-row space-x-8 ml-3'>
                <div className='xs:w-[50%] w-[20%] xs:pl-4'>
                    <img className='h-10 w-[150px] bg-transparent' src={logo} alt="logo"/>
                </div>
                <nav className="text-[#FFFFFF] font-semibold mt-[12px]">
                    <ul className='xs:hidden flex flex-row space-x-4 text-[13px]'>
                        <li>Community</li>
                        <li>Features</li>
                        <li>Docs</li>
                        <li>Terms & policy</li>
                    </ul>
                </nav>
            </div>

            <div className='xs:hidden h-full'>
                <button className='bg-[#4e4e4e] h-full rounded-[41px] w-40 opacity-95 text-[14px] text-[#FFFFFF]'>Download app</button>
            </div>

            <div className="xs:block xt:hidden pr-6">
                <GiHamburgerMenu className='text-[#FFFFFF] h-40 w-8'/>
            </div>
        </div>
    )
}

export default Header;
