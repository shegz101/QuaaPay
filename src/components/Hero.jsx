import React from 'react';
import app_interface from '../assets/app_interface.png';

const Hero = () => {
    return (
        <div className='flex flex-row w-[1349px] h-[758.5px] max-w-[1440px] pt-[100px]'>
            <div className='block w-[553px] h-[558.5px] min-h-[auto] min-w-[auto] mt-20'>
                <p className='h-[39px] mb-[27px] mx-0 mt-0 text-[#525224] capitalize text-3xl font-medium'>
                    The Advertisement Digital Wallet
                </p>
                <p className='block h-[146px] text-[56px] font-bold capitalize mb-[27px] mx-0 mt-0 text-[#12111153]'>
                    Put back, Money into your Wallet
                </p>
                <p className='block text-base h-24 text-[#525224]'>
                    With QuaaPay your inactive account can now become active, by watching of advertisements and getting reward for them.
                    QuaaPay is a mobile application that lets you watch ads, and receive reward, get quaa coin, send money to other users, cash out your money.
                </p>
                {/* Get Application Button */}
                <div className='mt-6 h-[auto] w-max py-3 px-8 border text-[#f04d07] border-[#f04d07] rounded-lg font-medium cursor-pointer'>
                    <button>Get Started</button>
                </div>
            </div>
            <div className='flex flex-row h-[593.5px] w-[498px] ml-20'>
                <div className="relative h-[593.5px]">
                    <img src={app_interface} className="h-[100%] origin-bottom -rotate-3 ml-10" alt='App Interface'/>
                </div>
                <img src={app_interface} className="h-[593.5px] absolute origin-bottom rotate-6 ml-40 z-10" alt='App Interface'/>
            </div>
        </div>
    )
}

export default Hero;