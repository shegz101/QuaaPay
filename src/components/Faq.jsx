import React from "react";
import ask from "../assets/ask.png";

const Faq = () => {
    return (
        <div className="flex flex-col items-center">
            <div className="text-[#000000] font-black text-[45px] text-center leading-10">
                <h1>Ask Us Questions</h1>
                <h1>And we will answer</h1>
            </div>

            {/* section for the landing image */}
            <div className="w-[70%] mt-10">
                <header className="relative text-[#FFFFFF] h-[350px] rounded-[45px] pt-[250px]" style={{backgroundSize: '',
                backgroundImage: `url('${ask}')`,
                backgroundPosition:'center center'
                }}>
                    <div className="flex flex-row justify-between h-16 ask-input 
                    items-center z-20h-[50px] w-[80%] ml-[10%] mr-[10%] absolute bg-[#FFFFFF] rounded-[20px]">
                        <input type="text" placeholder="Ask us a question?" className="h-full outline-none rounded-l-[20px] w-70%]" />
                        <button className="bg-[#000000] text-[#FFFFFF] rounded-[20px] h-full w-[30%]">
                            send
                        </button>
                    </div>
                </header>
            </div>
        </div>
    )
}

export default Faq;