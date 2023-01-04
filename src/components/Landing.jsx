import React from "react";
import Header from "./Header";
import Densin1 from "../assets/densin1.png";
import Densin3 from "../assets/dIagonalicon3.png";
import Densin2 from "../assets/dIagonalicon2.png";
import navigator from "../assets/brokendash.png";
import mobilescreen from "../assets/mobilesample.png";
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
                            influence other people touse their product or service.
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

            {/* Second Download App Segment */}
            <div className="mt-[40px] pt-10 bg-[#8402C0] font-black text-[#FFFFFF] items-center text-center h-[250px]">
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