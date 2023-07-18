"use client";
import { useRouter } from "next/navigation";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { BsArrowLeft } from "react-icons/bs";
import React from "react";
export default function PayoutDetail() {
    const router = useRouter()
    return (
        <div className="container-fluid bg-[#FFFFFF] p-[48px] rounded-[20px]">
            <div className="container flex pb-[35px] space-x-[10px] cursor-pointer" onClick={() => router.back()}>
                <BsArrowLeft  className="mt-[0px] text-[#00CCFF]"/>
                <p className="text-[#00CCFF] text-[14px] font-[600]">Back To Page</p>
            </div>
            <div className="container pb-[20px]">
                <p className="lg:text-[20px] text-[16px] font-[600] text-[#000000]">Payout Details</p>
            </div>
            <div className="container mx-auto lg:mt-[10px] mt-[10px] lg:space-x-[20px] space-x-[10px] flex lg:flex-row flex-col">
                <div className="container">
                    <label htmlFor="" className="lg:text-[16px] font-[400] leading-[50px]" >Account Number<span className="text-[red]">*</span></label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none text-[14px]" placeholder="e.g 1234567891" type="" name="" id="" />
                </div>
                <div className="container mx-auto">
                    <label htmlFor="" className="lg:text-[16px] font-[400] leading-[50px]">Account Name<span className="text-[red]">*</span></label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full  lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none text-[14px]" placeholder="e.g Jays Alimi" type="text" name="" id="" />
                </div>
            </div>
            <div className="container mx-auto lg:mt-[20px] mt-[10px]">
                        <label htmlFor="" className="lg:text-[16px] font-[400] leading-[50px]">Bank Name<span className="text-[red]">*</span></label><br />
                <div className="container border border-[rgba(0,0,0,0.1)] w-full lg:py-[10px] py-[5px] lg:px-[20px] px-[13px] rounded-[10px] lg:text-[14px]">
                    <div className="container w-full">
                        <select className=" w-[99%] outline-none" name="" id="">
                            <option value="">WEMA Bank</option>
                            <option value="">WEMA Bank</option>
                        </select>
                    </div>
                </div>
            </div>

            <div className="container flex flex-col lg:flex-row lg:mt-[20px] mt-[10px] lg:gap-[0] gap-[10px] space-x-[10px]">
                <div className="container w-full">
                    <label htmlFor="" className="lg:text-[16px] font-[400] leading-[50px]">Enter Amount<span className="text-[red]">*</span></label><br />
                    <div className="flex space-x-[10px] border border-[rgba(0,0,0,0.1)] w-full lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none">

                        <select className="outline-none lg:text-[14px] text-[12px] border-r-2" name="" id="">
                            <option value="">NGN</option>
                            <option value="">NGN</option>
                        </select>
                        <input className="outline-none lg:text-[14px] text-[12px]" placeholder="Enter Amount" type="" name="" id="" />
                    </div>
                </div>
                <div className="container w-full">
                    <div className="container">
                        <label htmlFor="" className="lg:text-[16px] font-[400] leading-[50px]">Description<span className="text-[rgba(0,0,0,0.7)]">(optional)</span></label><br />
                        <input className="border border-[rgba(0,0,0,0.1)] w-full  lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] lg:text-[14px] text-[12px] rounded-[10px] outline-none" placeholder="e.g Jays Alimi" type="text" name="" id="" />
                    </div>
                </div>

            </div>


            <div className="container mt-[35px] text-[white] lg:py-[17px] py-[10px] rounded-[10px] px-[20px] items-center justify-center bg-[rgba(0,204,255,1)] border border-[rgba(0,204,255,1)] lg:space-x-[15px] flex">
                <IoCheckmarkCircleOutline />
                <button>
                    <p className="text-[white] text-[14px]">Send Now</p>
                </button>
            </div>
        </div>
    )
}