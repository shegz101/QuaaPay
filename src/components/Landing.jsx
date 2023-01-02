import React from "react";
import Header from "./Header";
import Densin1 from "../assets/densin1.png";
import navigator from "../assets/brokendash.png";
import btnellipse from "../assets/btnellipse.png";

const Landing = () => {
    return (
        <div>
            <Header/>
            <div className="flex flex-row">
                <div className="mt-20">
                    <img className="w-[250px]" src={Densin1} alt="Densin"/>
                </div>
                <div className="mt-[180px] flex flex-col">
                    <div className="text-[32px] font-black text-[#000000] block leading-8">
                        <p>We help Advertise,</p> 
                        <p>influence, <span className="text-[#0014CC]">pay</span>, receive, and sell.</p>
                    </div>
                    <div className="w-[50%] leading-5 pt-5 font-medium">
                        <p>Quaapay can be best described as an online money-making 
                           strategy created as a marketplace for every individual 
                           around the globe to become an influencer 
                           by helping brands, companies, and advertisers 
                           influence other people touse their product or service.
                        </p>
                    </div>
                    <div className="w-[350px] flex flex-row">
                        <div className="bg-[#000000] mt-5 h-[70px] text-[#FFFFFF] rounded-[18px] w-[200px] flex flex-row items-center justify-center pr-2 pl-2">
                            <button className="text-[18px] font-semibold pr-2">Start advertising</button>
                            <p className="bg-[#FFFFFF] rounded-full h-4 w-4 mt-1"></p>
                        </div>

                        <div className="flex flex-row mt-14 ml-[-20px]">
                            <div>
                                <img src={navigator} className="text-[#FFFFFF] w-12 bg-white" alt="navigator"/>
                            </div>
                            <div>
                                <p className="text-[12px] mt-[-9px] ml-1 font-bold">Download app</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Landing;