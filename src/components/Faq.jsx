import React from "react";
import ask from "../assets/ask.png";

const Faq = () => {
    return (
        <div className="flex flex-col items-center xs:mb-5">
            <div className="text-[#000000] font-black text-[45px] xs:text-[20px] xs:mt-20 text-center xs:leading-6 leading-10">
                <h1>Ask Us Questions</h1>
                <h1>And we will answer</h1>
            </div>

            {/* section for the landing image */}
            <div className="w-[70%] mt-10 xs:mt-3 xs:w-[90%]">
                <header className="relative text-[#FFFFFF] h-[350px] rounded-[45px] xs:rounded-[30px] xt:pt-[250px] xs:pt-[250px]" style={{backgroundSize: '',
                backgroundImage: `url('${ask}')`,
                backgroundPosition:'center center'
                }}>
                    <div className="flex justify-between xs:justify-center h-16 ask-input xs:text-center 
                    items-center z-20 w-[80%] xs:w-[90%] ml-[10%] mr-[10%] xs:mr-[5%] xs:ml-[5%] absolute bg-[#FFFFFF] rounded-[20px]">
                        <input type="text" placeholder="Ask us a question?" className="ama-input xs:hidden h-full outline-none rounded-l-[20px] w-[70%] text-[#000000]" />
                        <button className="bg-[#000000] text-[#FFFFFF] rounded-[20px] h-full w-[30%] xs:hidden">
                            send
                        </button>
                        <p className="xt:hidden text-[#000000] font-bold space-x-2 text-[25px] text-center pl-5">ask ?</p>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Faq;