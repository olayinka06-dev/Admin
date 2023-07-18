"use client";
import { useRouter } from "next/navigation";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { BsArrowLeft } from "react-icons/bs";
import React from "react";
export default function TeamDetail() {
    const router = useRouter()
    return (
        <div className="container-fluid bg-[#FFFFFF] p-[48px] px-[50px]">
            <div className="container flex pb-[35px] space-x-[10px] cursor-pointer" onClick={() => router.back()}>
                <BsArrowLeft  className="mt-[3px] text-[#00CCFF]"/>
                <p className="text-[#00CCFF] text-sm font-[600]">Back To Page</p>
            </div>
            <div className="container pb-[20px]">
                <p className="lg:text-[20px] text-[16px] font-[600] text-[#000000]">Invite Team Member</p>
            </div>
            <div className="container lg:mt-[10px] mt-[10px] lg:space-x-[20px] space-x-[10px] flex">
                <div className="container">
                    <label htmlFor="" className="lg:text-sm font-[400] leading-[50px]" >Full Name<span className="text-[red]">*</span></label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none" placeholder="1234567891" type="" name="" id="" />
                </div>
                <div className="container">
                    <label htmlFor="" className="lg:text-sm font-[400] leading-[50px]">Email Address<span className="text-[red]">*</span></label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full  lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none" placeholder="Jays Alimi" type="text" name="" id="" />
                </div>
            </div>
            <div className="container mx-auto lg:mt-[20px] mt-[10px]">
                        <label htmlFor="" className="lg:text-sm font-[400] leading-[50px]">Role<span className="text-[red]">*</span></label><br />
                <div className="container border border-[rgba(0,0,0,0.1)] w-full lg:py-[10px] py-[5px] lg:px-[20px] px-[13px] rounded-[10px] lg:text-sm">
                    <div className="container w-full">
                        <select className=" w-[99%] outline-none" name="" id="">
                            <option value="">Developer</option>
                            <option value="">Developer</option>
                        </select>
                    </div>
                </div>
            </div>

           


            <div className="container mt-[35px] text-[white] lg:py-[17px] py-[10px] rounded-[10px] px-[20px] items-center justify-center bg-[rgba(0,204,255,1)] border border-[rgba(0,204,255,1)] lg:space-x-[15px] flex">
                <IoCheckmarkCircleOutline />
                <button>
                    <p className="text-[white] text-sm">Send Now</p>
                </button>
            </div>
        </div>
    )
}