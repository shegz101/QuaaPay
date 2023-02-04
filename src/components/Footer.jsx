import React from "react";
import logo from "../assets/footer-logo.png";
import { google } from "../assets/index";
import { apple } from "../assets/index";

const Footer = () => {
    return (
        <div className="w-full mr-[5%] ml-[5%] h-max pt-10 pb-10">
            <div className="flex xs:flex-col w-full space-x-[100px]">
                {/* column 1 Footer */}
                <div className="w-[10%] xs:w-[80%]">
                    <img className='h-10 w-[100px] text-[#000000] mt-[-10px]' src={logo} alt="QuaaPay Logo"/>
                </div>

                {/* column 2 Footer */}
                <div className="cursor-pointer font-black flex flex-col w-[90%]">
                    {/* Row 1 Column 2 Footer */}
                    <div className="grid grid-cols-5 xs:flex xs:flex-col xt:gap-[100px]">
                        <div>
                            <p className="text-[#5E5E5E] hover:opacity-70">Community</p>
                            <ul className="text-[#000000]">
                                <li className="hover:opacity-60">Developers</li>
                                <li className="hover:opacity-60">Forum</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[#5E5E5E] hover:opacity-70">About us</p>
                            <ul className="text-[#000000]">
                                <li className="hover:opacity-60">Security</li>
                                <li className="hover:opacity-60">Privacy</li>
                                <li className="hover:opacity-60">Cookie Policy</li>
                                <li className="hover:opacity-60">Terms & Policy</li>
                                <li className="hover:opacity-60">Jobs</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[#5E5E5E] hover:opacity-70">Using QuaaPay</p>
                            <ul className="text-[#000000]">
                                <li className="hover:opacity-60">FAQ</li>
                                <li className="hover:opacity-60">Payment and Billing</li>
                                <li className="hover:opacity-60">Sign-up sign-up help</li>
                                <li className="hover:opacity-60">How to Transfer</li>
                                <li className="hover:opacity-60">How to Advertise</li>
                            </ul>
                        </div>
                        <div>
                            <p className="text-[#5E5E5E] hover:opacity-70">For Individuals</p>
                            <ul className="text-[#000000]">
                                <li className="hover:opacity-60" >Trust Guide</li>
                                <li className="hover:opacity-60">Solutions</li>
                            </ul>
                        </div>
                    </div>

                    {/* Row 2 column 2 Footer */}
                    <div className="grid grid-cols-5 xs:flex xs:flex-col gap-[100px] mt-6">
                        <div className="">
                            <p className="text-[#5E5E5E] hover:opacity-70">Community</p>
                            <ul className="text-[#000000]">
                                <li className="hover:opacity-60">Twitter</li>
                                <li className="hover:opacity-60">Facebook</li>
                                <li className="hover:opacity-60">YouTube</li>
                                <li className="hover:opacity-60">Tiktok</li>
                                <li className="hover:opacity-60">LinkedIn</li>
                            </ul>
                        </div>
                        <div className="">
                            <p className="text-[#5E5E5E] hover:opacity-70">Productivity</p>
                            <ul className="text-[#000000]">
                                <li className="hover:opacity-60">Tekki</li>
                                <li className="hover:opacity-60">web Tree</li>
                                <li className="hover:opacity-60">Number Up</li>
                                <li className="hover:opacity-60">Gist Me</li>
                            </ul>
                        </div>
                        <div className="">
                            <p className="text-[#5E5E5E] hover:opacity-70">Ads Space</p>
                            <ul className="text-[#000000]">
                                <li className="hover:opacity-60">Advertise</li>
                                <li className="hover:opacity-60">Promote Business</li>
                                <li className="hover:opacity-60">Email Forwarder Promotion</li>
                                <li className="hover:opacity-60">Ads Space</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex flex-col mt-[40px] space-y-2">
                        <div className="flex flex-row space-x-2 cursor-pointer">
                            <img src={google} alt="Google play store"/>
                            <img src={apple} alt="apple store"/>
                        </div>

                        <div>
                            <p className="text-[#7D7D7D] font-black">@2023 QuaaPay • A ConsenSys Formation</p>
                        </div>
                    </div>
                </div>
            </div> 
        </div>
    )
}

export default Footer;