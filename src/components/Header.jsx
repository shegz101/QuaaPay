import React, { useState } from 'react';
import logo from "../assets/footer-logo.png";
import { useScrollPosition } from './useScrollPosition';

const Header = () => {
    const scrollPosition = useScrollPosition();

    const nav_position = scrollPosition > 0 ? 'shadow-lg' : 'shadow-none';
    let nav_links = [
        {name:"Home", link:"/"},
        {name:"Features", link:"/"},
        {name:"Our Community", link:"/"},
        {name:"Payment Gateway", link:"/"},
        {name:"Our Framework", link:"/"},
    ];

    let [open, setOpen] = useState(false);
    
    return (
        <div className={`${nav_position} transition-shadow bg-[#ffffff] xs:h-16 z-30 w-full px-16 xs:px-[4px] pt-4 pb-4 fixed xs:absolute`}>
            {/*Big Screens Navbar*/}
            <div className="xt:flex xt:justify-between xt:space-x-2">
                {/* Quaapay Logo */}
                <div className='flex justify-between'>
                    <img className='h-14 xs:h-12 bg-transparent mt-[-8px]' src={logo} alt="logo"/>
                    <div className="xs:block xt:hidden pr-2 text-3xl mt-[5px]" onClick={() => setOpen(!open)}>
                        <ion-icon name={open ? 'close' : 'menu'} className='cursor-pointer'> </ion-icon>
                    </div>
                </div>

                <div className='flex xt:space-x-40 xs:w-full'>
                    {/* Nav Links */}
                    <nav className="text-[#000000] font-semibold xs:w-[100%] xs:items-center">
                        <ul className={`xs:flex-col flex xt:flex-row xt:space-x-10 xs:bg-[#e7e2e2] xs:text-center xs:py-5 z-[-1] xs:items-center xs:space-y-5 text-[15px] xs:text-[20px] cursor-pointer font-semibold xt:w-auto w-full transition-all duration-500 ease-in ${open ? 'xs:mt-5 opacity-100' : 'xs:mt-[-500px]'} xt:opacity-100`}>
                            {
                                nav_links.map((link) => (
                                    <li key={link.name}>
                                        <a className='hover:opacity-60' href={link.link}>{link.name}</a>
                                    </li>
                                ))
                            }
                            <button className='bg-[#0707B0] hover:bg-[#0707B0]-600 h-11 mt-[-10px] rounded-[5px] duration-500 w-40 opacity-95 text-[14px] text-[#FFFFFF]'>Download app</button>
                        </ul>
                    </nav>
                </div>     
            </div>
        </div>
    ) 
}

export default Header;
