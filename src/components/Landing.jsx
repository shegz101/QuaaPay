import React from "react";
import Header from "./Header";
import Faq from "./Faq";
import Densin1 from "../assets/densin1.png";
import Densin3 from "../assets/dIagonalicon3.png";
import Densin2 from "../assets/dIagonalicon2.png";
import navigator from "../assets/brokendash.png";
import mobilescreen from "../assets/mobilesample.png";
import influencer from "../assets/influencer.png";
import buysell from "../assets/buyandsell.png";
import advertise from "../assets/advertise.png";
import cash from "../assets/cash.png";
import { google } from "../assets/index";
import { apple } from "../assets/index";

const Landing = () => {
    return (
        <div>
            <Header/>
            <div className="flex flex-row">
                <div className="flex flex-row">
                    <div className="mt-20 w-[500px]">
                        <img className="" src={Densin1} alt="Densin"/>
                    </div>

                    <div className="mt-[180px] flex flex-col">
                        <div className="text-[36px] font-black text-[#000000] leading-9">
                            <p>We help Advertise,</p> 
                            <p>influence, <span className="text-[#0014CC]">pay</span>, receive, and sell.</p>
                        </div>
                        <div className="w-[90%] leading-6 pt-5 font-normal">
                            <p className="text-[20px]">Quaapay can be best described as an online money-making 
                            strategy created as a marketplace for every individual 
                            around the globe to become an influencer 
                            by helping brands, companies, and advertisers 
                            influence other people to use their product or service.
                            </p>
                        </div>
                        <div className="flex flex-row">
                            <div className="bg-[#000000] mt-5 h-[70px] text-[#FFFFFF] rounded-[18px] w-[200px] flex flex-row items-center justify-center pr-2 pl-2">
                                <button className="text-[18px] font-semibold pr-2">Start advertising</button>
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

                            <div className="rotate-45">
                                <img src={Densin3} alt="densin-2" className="justify-end"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex flex-row mr-[100px]">
                    <div className="flex flex-row mt-[130px]">
                        <div className="">
                            <img src={mobilescreen} className="w-[1400px]" alt="Screen sample"/>
                        </div>
                    </div>

                    <div className="mt-[130px] w-[300px]">
                        <img src={Densin2} alt="debsin 2"/>
                    </div>
                </div>
            </div>
            
            {/* First Download App Segment */}
            <div className="mt-[40px] pt-10 bg-[#4460F4] font-black text-[#FFFFFF] items-center text-center h-[250px]">
                <h1 className="text-[30px]">Download Our App On The App Store Or Play Store</h1> 
                <p>Begin to use quaapay wallet</p>
                <div className="items-center flex flex-row mt-[40px] justify-center space-x-2">
                    <img src={google} alt="Google play store"/>
                    <img src={apple} alt="apple store"/>
                </div>
            </div>

            {/* Influencer and Promotion Section */}
            <div className="flex flex-row w-[85%] ml-[10%] mr-[5%] space-x-[-35px]">
                <div className="w-[40%]">
                    <img src={influencer} alt="Influncer post" className="w-[545px]"/>
                </div>
                <div className="w-[60%] flex flex-row">
                    <div className="mt-[160px] w-[75%]">
                        <h2 className="text-[30px] font-black block leading-8">Help Brands, Companies to promote there business and earn.</h2>
                        <p className="text-[14px] font-medium leading-4 pt-3">Quaapay can be best described as an online money-making strategy created as a 
                            marketplace for every individual around the globe to become an influencer by helping brands, 
                            companies, and advertisers influence other people to use their product or service.
                        </p>
                    </div>

                    <div className="w-[15%] rotate-80">
                        <img src={Densin2} alt="Densin2"/>
                    </div>
                </div>
            </div>

            {/* Buy and Sell SectiOn */}
            <div className="flex flex-row w-[90%] space-x-3">
                <div>
                    <img src={Densin1} alt="Densin1"/>
                </div>

                <div className="w-[50%] mt-[150px]">
                    <h3 className="text-[30px] font-black block leading-8">Buy & Sell Easily.</h3>
                    <p className="text-[14px] font-medium leading-4 pt-3">Quaapay can be best described as an online money-making strategy created as a 
                        marketplace for every individual around the globe to become an influencer by helping brands, 
                        companies, and advertisers influence other people touse their product or service.
                    </p>

                    <div className="flex flex-row">
                        <div className="bg-[#000000] mt-5 h-[70px] text-[#FFFFFF] rounded-[18px] w-[200px] flex flex-row items-center justify-center pr-2 pl-2">
                            <button className="text-[18px] font-semibold pr-2">Start selling</button>
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
            <div className="flex flex-row w-[80%] space-x-3 ml-[10%]">
                <div>
                    <img src={advertise} alt="buy and sell icon"/>
                </div>

                <div className="w-[50%] mt-[150px]">
                    <h3 className="text-[30px] font-black block leading-8">Start advertising.</h3>
                    <p className="text-[14px] font-medium leading-4 pt-3">Get your company's name out there at a low cost. 
                    Much less stress is saved. Our development made it all easy to start promoting business and 
                    creating ad inventory to In a matter of minutes, you can reach millions of people.
                    </p>

                    <div className="flex flex-row">
                        <div className="flex flex-row mt-14">
                            <div>
                                <p className="text-[12px] mt-[-9px] font-bold">Send cash</p>
                            </div>
                            <div className="">
                                <img src={navigator} className="text-[#FFFFFF] w-12 bg-white ml-[-5px] z-20" alt="navigator"/>
                            </div>
                        </div>

                        <div className="bg-[#000000] mt-5 h-[70px] text-[#FFFFFF] rounded-[18px] w-[200px] flex flex-row items-center justify-center pr-2 pl-2 space-x-5">
                            <p className="bg-[#FFFFFF] rounded-full h-4 w-4"></p>
                            <button className="text-[18px] font-semibold">Download app</button>
                        </div>
                    </div>
                </div>

                <div>
                    <img src={Densin2} alt="Densin1" className="rotate-45"/>
                </div>
            </div>

            {/* Send and Receive Money */}
            <div className="flex flex-row w-[75%] space-x-2 ml-[12.5%] mr-[12.5%]">
                <div className="w-[50%] mt-[150px]">
                    <h3 className="text-[30px] font-black block leading-8">Send Money Easily,</h3>
                    <h3 className="text-[30px] font-black block leading-8">By Scanning or Transferring.</h3>
                    <p className="text-[14px] font-medium leading-4 pt-3">Get your company's name out there at a low cost. Much less stress is saved. 
                    Our development made it all easy to start promoting business and 
                    creating ad inventory to In a matter of minutes, you can reach millions of people.
                    </p>

                    <div className="flex flex-row">
                        <div className="bg-[#000000] mt-5 h-[70px] text-[#FFFFFF] rounded-[18px] w-[200px] flex flex-row items-center justify-center pr-2 pl-2">
                            <button className="text-[18px] font-semibold pr-2">Download app</button>
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
            <div className="mt-[80px] pt-10 bg-[#8402C0] font-black text-[#FFFFFF] items-center text-center h-[250px]">
                <h1 className="text-[30px]">Download Our App On The App Store Or Play Store</h1> 
                <p>Begin to use quaapay wallet</p>
                <div className="items-center flex flex-row mt-[40px] justify-center space-x-2">
                    <img src={google} alt="Google play store"/>
                    <img src={apple} alt="apple store"/>
                </div>
            </div>
        </div>
    )
}

export default Landing;