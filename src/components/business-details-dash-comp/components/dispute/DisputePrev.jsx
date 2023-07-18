"use client";
import { useRouter } from "next/navigation";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { BsArrowLeft } from "react-icons/bs";
import { IoIosCheckmarkCircle } from "react-icons/io";
import { useState } from "react";
import React from "react";
export default function DisputePrev() {
    const [isSend, setIsSend] = useState(false);
    const sendBtn = () => {
        setIsSend(!isSend);
    }
    const router = useRouter()
    return (
        <div className="container-fluid bg-[#FFFFFF] p-[48px] px-[30px]">
            <div className="container flex py-[25px] space-x-[10px] cursor-pointer" onClick={() => router.back()}>
                <BsArrowLeft className="mt-[3px] text-[#00CCFF]" />
                <p className="text-[#00CCFF] text-[16px] font-[600]">Back To Page</p>
            </div>
            <div className="container pt-[15px] pb-[25px]">
                <p className="lg:text-[20px] text-[16px] font-[600] text-[#000000]">Dispute Information</p>
            </div>
            <div className="container lg:space-x-[20px] space-x-[10px] flex">
                <div className="container">
                    <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]" >Full Name</label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full lg:py-[10px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] lg:text-[16px] text-[12px] outline-none" placeholder="Jays Alimi" type="" name="" id="" />
                </div>
                <div className="container">
                    <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]">Email Address</label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full  lg:py-[10px] py-[5px] lg:px-[20px] px-[10px] lg:text-[16px] text-[12px] rounded-[10px] outline-none" placeholder="jaysalimi.msmes@gmail.com" type="email" name="" id="" />
                </div>
            </div>
            <div className="container mx-auto lg:mt-[20px] mt-[10px]">
                <div className="container w-full">
                    <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]">Topic</label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full  py-[10px] px-[20px] rounded-[10px] lg:text-[16px] text-[12px] outline-none" placeholder="Bank Statement" type="text" name="" id="" />
                </div>
            </div>
            <div className="container mx-auto lg:mt-[20px] mt-[10px]">
                <div className="container w-full">
                    <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]">Message</label><br />
                    <textarea className=" border border-[rgba(0,0,0,0.1)] h-32 w-full py-[10px] px-[20px] rounded-[10px] lg:text-[16px] text-[12px] outline-none" placeholder="Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi magnam harum tempore repellat cum error assumenda, quidem ullam nam alias delectus vel dolorum. Sint aspernatur culpa porro eligendi minus magni similique at modi quibusdam?" type="text" name="" id="">

                    </textarea>

                </div>
            </div>
            <div className="container mx-auto lg:mt-[20px] mt-[10px]">
                <div className="container w-full">
                    <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]">Your Reply</label><br />
                    <textarea className=" border border-[rgba(0,0,0,0.1)] h-32 w-full py-[10px] px-[20px] rounded-[10px] lg:text-[16px] text-[12px] outline-none" placeholder="Your Reply Going Along The Way...!" type="text" name="" id="">

                    </textarea>

                </div>
            </div>
            <div className="lineText"><p className="lineText:before lineText:after text-[rgba(0,0,0,0.5)]">Reply To This Dispute</p></div>
            <div className="container mt-[35px] relative text-[white] lg:py-[20px] py-[10px] rounded-[10px] px-[20px] items-center justify-center bg-[rgba(0,204,255,1)] border border-[rgba(0,204,255,1)] lg:space-x-[15px] flex">
                <IoCheckmarkCircleOutline />
                <button className="outline-none" onClick={sendBtn}>
                    <p className="text-[white]">Send Now</p>
                </button>
            </div>
                {isSend && (
                    <div className="absolute top-[3%] shadow rounded-[10px] flex right-[20%] bg-[#fff]">
                        <div className="border w-[70px] border-t-[white] px-[20px] py-[30px] border-l-[white] border-r-[white] border-b-[#00CCFF]">
                            <IoIosCheckmarkCircle  className="text-[#00CCFF] text-[30px]"/>
                        </div>
                        <p className="text-[20px] pe-[20px] py-[30px] font-[600]">Successfully Sent</p>
                    </div>
                )}
        </div>
    )
}