import React from "react";
import logo from "../assets/logo2.png";
import { google } from "../assets/index";
import { apple } from "../assets/index";

const Footer = () => {
    return (
        <div className="w-[90%] mr-[5%] ml-[5%] h-max pt-10 pb-10">
            
            <div className="flex flex-col">
                {/* Row 1 Footer */}
                <div className="cursor-pointer font-black">
                    <div className="grid grid-cols-5 gap-5">
                        <div>
                            <img className='h-5 text-[#000000]' src={logo} alt="QuaaPay Logo"/>
                        </div>
                        <div>
                            <p className="text-[#5E5E5E]">Community</p>
                            <ul className="text-[#000000]">
                                <li>Developers</li>
                                <li>Forum</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[#5E5E5E]">About us</p>
                            <ul className="text-[#000000]">
                                <li>Security</li>
                                <li>Privacy</li>
                                <li>Cookie Policy</li>
                                <li>Terms & Policy</li>
                                <li>Jobs</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[#5E5E5E]">Using QuaaPay</p>
                            <ul className="text-[#000000]">
                                <li>FAQ</li>
                                <li>Payment and Billing</li>
                                <li>Sign-up sign-up help</li>
                                <li>How to Transfer</li>
                                <li>How to Advertise</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[#5E5E5E]">For Individuals</p>
                            <ul className="text-[#000000]">
                                <li>Trust Guide</li>
                                <li>Solutions</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Row 2 Footer */}
                <div className="flex cursor-pointer font-black mt-6 justify-center space-x-4g 0">
                    <div className="">
                        <p className="text-[#5E5E5E]">Community</p>
                        <ul className="text-[#000000]">
                            <li>Twitter</li>
                            <li>Facebook</li>
                            <li>YouTube</li>
                            <li>Tiktok</li>
                            <li>LinkedIn</li>
                        </ul>
                    </div>
                    <div className="">
                        <p className="text-[#5E5E5E]">Productivity</p>
                        <ul className="text-[#000000]">
                            <li>Tekki</li>
                            <li>web Tree</li>
                            <li>Number Up</li>
                            <li>Gist Me</li>
                        </ul>
                    </div>
                    <div className="">
                        <p className="text-[#5E5E5E]">Ads Space</p>
                        <ul className="text-[#000000]">
                            <li>Advertise</li>
                            <li>Promote Business</li>
                            <li>Email Forwarder Promotion</li>
                            <li>Ads Space</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="flex flex-col mt-[40px] space-y-2  ml-[20%]">
                <div className="flex flex-row space-x-2">
                    <img src={google} alt="Google play store"/>
                    <img src={apple} alt="apple store"/>
                </div>

                <div>
                    <p className="text-[#7D7D7D] font-black">@2023 QuaaPay • A ConsenSys Formation</p>
                </div>
            </div> 
        </div>
    )
}

export default Footer;