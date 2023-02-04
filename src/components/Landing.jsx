import React from "react";
import Header from "./Header";
import Faq from "./Faq";
import Densin1 from "../assets/densin1.png";
import Densin2 from "../assets/dIagonalicon2.png";
import Densin3 from "../assets/diagonalicon3.png";
import MobDensin from "../assets/mob-densin.png";
import navigator from "../assets/brokendash.png";
import mobilescreen from "../assets/mobilesample.png";
import influencer from "../assets/influencer.gif";
import buysell from "../assets/buyandsell.gif";
import advertise from "../assets/advertisement.gif";
import cash from "../assets/cash.gif";
import { google } from "../assets/index";
import { apple } from "../assets/index";
import Footer from "./Footer";

const Landing = () => {
    return (
        <div>
            <Header/>
            <div className="flex flex-row xs:flex-col Xs:w-[95%] xs:ml-[5%] xs:mr-[3.5%]">
                <div className="flex flex-row">
                    <div className="mt-20 w-[500px] xs:hidden">
                        <img className="" src={Densin1} alt="Densin"/>
                    </div>

                    <div className="mt-[180px] xs:mt-[100px] flex flex-col">
                        <div className="flex flex-row xs:w-[100%] space-x-2">
                            <div className="text-[36px] xs:text-[26px] font-black text-[#000000] leading-9 xs:items-center xs:w-[95%]">
                                <p className="xs:text-[38px] block xs:leading-[50px]">We help <span>Advertise, Influence, <span className="text-[#0014CC]">Pay</span>,</span> Receive, and Sell.</p> 
                            </div>
                            <div className="xt:hidden xs:hidden  mt-[-50px]">
                                <img src={MobDensin} alt="densin-3" className=""/>
                            </div>
                        </div>
                        <div className="w-[90%] leading-6 pt-5 font-normal">
                            <p className="text-[20px] xs:text-[1rem]">Quaapay can be best described as an online <strong>money-making </strong>
                            strategy created as a marketplace for every individual 
                            around the globe to become an influencer 
                            by helping brands, companies, and advertisers 
                            influence other people to use their product or service.
                            </p>
                        </div>
                        <div className="flex flex-row">
                            <div className="bg-[#000000] mt-5 h-[70px] text-[#FFFFFF] rounded-[18px] w-[200px] xs:w-[150px] flex items-center justify-center pr-2 pl-2">
                                <button className="text-[18px] xs:text-[12px] font-semibold pr-2" disabled>Start advertising</button>
                                <p className="bg-[#FFFFFF] rounded-full h-4 w-4 mt-1"></p>
                            </div>

                            <div className="flex flex-row mt-14 ml-[-20px] ">
                                <div>
                                    <img src={navigator} className="text-[#FFFFFF] w-12 bg-white" alt="navigator"/>
                                </div>
                                <div>
                                    <p className="text-[12px] mt-[-9px] ml-1 font-bold">Download app</p>
                                </div>
                            </div>

                            <div className="rotate-45 xs:hidden">
                                <img src={Densin3} alt="densin-3" className="justify-end"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="xt:flex xt:mr-[100px] xs:items-center">
                    <div className="flex mt-[130px] xs:mt-[60px]">
                        <div className="xs:mr-[2.5%]">
                            <img src={mobilescreen} className="w-[1400px]" alt="Screen sample"/>
                        </div>
                    </div>

                    <div className="mt-[130px] xs:mt-[2px] xs:ml-[-20px] w-[300px]">
                        <img src={Densin2} className="rotate-45 xs:w-[40px]" alt="debsin 2"/>
                    </div>
                </div>
            </div>
            
            {/* First Download App Segment */}
            <div className="mt-[40px] xs:mt-[5px] pt-10 z-20 xs:pt-5 bg-[#4460F4] font-black text-[#FFFFFF] items-center text-center h-[250px] xs:h-[200px]">
                <h1 className="text-[30px] xs:hidden">Download Our App On The App Store Or Play Store</h1> 
                <h1 className="text-[20px] xt:hidden">Download Quaapay</h1> 
                <p>Begin to use quaapay wallet</p>
                <div className="items-center flex mt-[40px] justify-center space-x-2">
                    <img src={google} className="xs:w-[135px]" alt="Google play store"/>
                    <img src={apple} className="xs:w-[120px]" alt="apple store"/>
                </div>
            </div>

            {/* Influencer and Promotion Section */}
            <div className="flex xs:flex-col w-[85%] xs:w-[95%] xs:ml-[5%] xs:mr-[3.5%] mr-[10%] ml-[5%] xt:space-x-[-35px]">
                <div className="w-[40%] xs:w-full">
                    <img src={influencer} alt="Influencer post" className="w-[545px]"/>
                </div>
                <div className="w-[60%] xs:w-[95%] flex">
                    <div className="mt-[160px] xs:mt-[10px] xt:w-[75%] xs:w-[95%] xs:mr-[2.5%] xs:ml-{2.5%]">
                        <h2 className="text-[30px] xs:text-[23px] font-black leading-8 xs:leading-6">Help <span className="xs:hidden">Brands</span> Companies to promote there business and earn.</h2>
                        <p className="text-[14px] xs:text-[12px] font-medium xs:font-normal leading-4 pt-3">Quaapay can be best described as an online money-making strategy created as a 
                            marketplace for every individual around the globe to become an influencer by helping brands, 
                            companies, and advertisers influence other people to use their product or service.
                        </p>
                    </div>

                    <div className="w-[15%] rotate-80 xs:hidden">
                        <img src={Densin2} alt="Densin2"/>
                    </div>
                </div>
            </div>

            {/* Buy and Sell SectiOn */}
            <div className="flex xs:flex-col-reverse w-[90%] xs:w-[95%] xt:space-x-3">
                <div className="xs:hidden">
                    <img src={Densin1} alt="Densin1"/>
                </div>

                <div className="w-[50%] mt-[150px] xs:mt-[30px] xs:w-[95%] xs:mr-[3.5%] xs:ml-[5%]">
                    <h3 className="text-[30px] xs:text-[23px] font-black block leading-8">Buy & Sell Easily.</h3>
                    <p className="text-[14px] xs:text-[12px] xs:font-normal font-medium leading-4 pt-3">Quaapay can be best described as an online money-making strategy created as a 
                        marketplace for every individual around the globe to become an influencer by helping brands, 
                        companies, and advertisers influence other people touse their product or service.
                    </p>

                    <div className="flex flex-row">
                        <div className="bg-[#000000] mt-5 h-[70px] text-[#FFFFFF] rounded-[18px] w-[200px] flex flex-row items-center justify-center pr-2 pl-2">
                            <button className="text-[18px] font-semibold pr-2" disabled>Start selling</button>
                            <p className="bg-[#FFFFFF] rounded-full h-4 w-4 mt-1 ml-8"></p>
                        </div>

                        <div className="flex flex-row mt-14 ml-[-40px]">
                            <div className="">
                                <img src={navigator} className="text-[#FFFFFF] w-12 bg-white ml-4" alt="navigator"/>
                            </div>
                            <div>
                                <p className="text-[12px] mt-[-9px] ml-1 font-bold">Faster</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={buysell} alt="buy and sell icon"/>
                </div>
            </div>

            {/* Advertise Section */}
            <div className="flex xs:flex-col w-[80%] xs:w-[95%] xt:space-x-3 xt:ml-[10%] xs:ml-[5%] xs:mr-[3.5%]">
                <div>
                    <img src={advertise} alt="buy and sell icon"/>
                </div>

                <div className="w-[50%] mt-[150px] xs:mt-[30px] xs:w-[95%]">
                    <h3 className="text-[30px] xs:text-[23px] font-black block leading-8">Start advertising.</h3>
                    <p className="text-[14px] xs:text-[12px] xs:font-normal font-medium leading-4 pt-3">Get your company's name out there at a low cost. 
                    Much less stress is saved. Our development made it all easy to start promoting business and 
                    creating ad inventory to In a matter of minutes, you can reach millions of people.
                    </p>

                    <div className="flex">
                        <div className="flex mt-14">
                            <div>
                                <p className="text-[12px] mt-[-9px] font-bold">Send cash</p>
                            </div>
                            <div className="">
                                <img src={navigator} className="text-[#FFFFFF] w-12 bg-white z-20" alt="navigator"/>
                            </div>
                        </div>

                        <div className="bg-[#000000] mt-5 h-[70px] text-[#FFFFFF] rounded-[18px] w-[200px] flex items-center justify-center pr-2 pl-2 space-x-5">
                            <p className="bg-[#FFFFFF] rounded-full h-4 w-4"></p>
                            <button className="text-[18px] xs:text-[14px] font-semibold" disabled>Download app</button>
                        </div>
                    </div>
                </div>

                <div className="xs:hidden">
                    <img src={Densin2} alt="Densin1" className="rotate-45"/>
                </div>
            </div>

            {/* Send and Receive Money */}
            <div className="flex xs:flex-col-reverse w-[75%] xs:w-[95%] space-x-2 xt:ml-[12.5%] xt:mr-[12.5%] xs:ml-[5%] xs:mr-[2.5%]">
                <div className="w-[50%] xs:w-[95%] mt-[150px] xs:mt-[30px]">
                    <h3 className="text-[30px] xs:text-[23px] font-black block leading-8 xs:leading-6">Send Money Easily,</h3>
                    <h3 className="text-[30px] xs:text-[23px] font-black block leading-8 xs:leading-6">By Scanning or Transfer.</h3>
                    <p className="text-[14px] xs:text-[12px] font-medium xs:font-normal leading-4 pt-3">Get your company's name out there at a low cost. Much less stress is saved. 
                    Our development made it all easy to start promoting business and 
                    creating ad inventory to In a matter of minutes, you can reach millions of people.
                    </p>

                    <div className="flex flex-row">
                        <div className="bg-[#000000] mt-5 h-[70px] text-[#FFFFFF] rounded-[18px] w-[200px] flex items-center justify-center pr-2 pl-2">
                            <button className="text-[18px] font-semibold pr-2" disabled>Download app</button>
                            <p className="bg-[#FFFFFF] rounded-full h-4 w-4 mt-1 ml-8"></p>
                        </div>

                        <div className="flex flex-row mt-14 ml-[-28px]">
                            <div className="">
                                <img src={navigator} className="text-[#FFFFFF] w-12 bg-white ml-4" alt="navigator"/>
                            </div>
                            <div>
                                <p className="text-[12px] mt-[-9px] ml-1 font-bold">Send cash</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={cash} alt="buy and sell icon"/>
                </div>
            </div>
            <Faq/>

            {/* Second Download App Segment */}
            <div className="mt-[80px] xs:mt-[5px] pt-10 xs:pt-5 bg-[#8402C0] font-black text-[#FFFFFF] items-center text-center h-[250px] xs:h-[200px]">
                <h1 className="text-[30px] xs:hidden">Download Our App On The App Store Or Play Store</h1>
                <h1 className="text-[20px] xt:hidden">Download Quaapay</h1>  
                <p>Begin to use quaapay wallet</p>
                <div className="items-center flex mt-[40px] justify-center space-x-2">
                    <img src={google} className="xs:w-[135px]" alt="Google play store"/>
                    <img src={apple} className="xs:w-[120px]" alt="apple store"/>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default Landing;