"use client";
import React from "react";
import { GoArrowSwitch } from "react-icons/go";
import { RiDeleteBinLine } from "react-icons/ri";
export default function SettingPreference() {
    return (
        <div className="">
            <div className="container mx- mt-[30px] lg:p-[48px] p-[28px] border border-[rgba(0,0,0,0.1)] rounded-[20px]">
                <p className="text-[14px] font-[400] text-[rgba(0,0,0,0.5)] leading-[25px]">Notification</p>
                <p className="lg:text-[20px] text-[15px] lg:pt-[28px] font-[600] text-[rgba(0,0,0,1)] leading-[25px]">Alert Notification</p>
                <div className="container  lg:mt-[28px] pb-[20px flex">
                    <div className="container lg:w-[290px] flex space-x-[5px]">
                        <input className="lg:w-[25px]" type="checkbox" name="" id="" />
                        <label htmlFor="" className="lg:text-[14px] text-[12px] font-[400] leading-[50px]" >Email Notification</label>
                    </div>
                    <div className="container flex space-x-[5px]">
                        <input className="lg:w-[25px]" type="checkbox" name="" id="" />
                        <label htmlFor="" className="lg:text-[14px] text-[12px] font-[400] leading-[50px]" >SMS Notification</label>
                    </div>

                </div>
                <div className="lg:mt-[30px]">
                    <hr />
                </div>
                
                    <p className="lg:text-[18px] text-[15px] lg:pb-[20px] pb-[10px] lg:py-[30px] py-[10px]  font-[600] text-[rgba(0,0,0,1)] leading-[25px]">Warning Amount</p>
                    <div className="container mx-auto flex lg:flex-row flex-col lg:gap-[0] gap-[10px] lg:space-x-[10px]">
                    
                            <div className="mx-auto flex lg:space-x-[10px] border border-[rgba(0,0,0,0.1)]  lg:py-[13px] py-[10px] lg:px-[20px] px-[10px] rounded-[10px] outline-none">
                                <input className="outline-none text-[14px]" placeholder="Enter Amount" type="" name="" id="" />
                                <select className="outline-none lg:text-[14px] text-[12px] border-l-2" name="" id="">
                                    <option value="">NGN</option>
                                    <option value="">NGN</option>
                                </select>
                        
                        </div>
                        <div className=" items-center justify-center flex">
                            <GoArrowSwitch />
                        </div>
                            <div className="mx-auto flex space-x-[10px] border border-[rgba(0,0,0,0.1)] lg:py-[13px] py-[10px] px-[20px] rounded-[10px] outline-none">
                                <input className="outline-none lg:text-[14px] text-[12px]" placeholder="Enter Amount" type="" name="" id="" />
                                <select className="outline-none lg:text-[14px] text-[12px] border-l-2" name="" id="">
                                    <option value="">NGN</option>
                                    <option value="">NGN</option>
                                </select>
                            
                        </div>
                        <div className="">
                            <button className="bg-[#0CF] lg:py-[10px] py-[5px] lg:px-[30px] px-[10px] rounded-[13px] text-white border-none items-center justify-center text-[14px]">Save Change</button>
                        </div>
                    </div>
                
            </div>
            <div className="container mx-auto lg:mb-[0px] mb-[70px] text-[red] space-x-[10px] items-center text-[14px] justify-center flex mt-[30px] py-[20px] border border-[rgba(0,0,0,0.1)] rounded-[20px]"> 
               <RiDeleteBinLine />
               <button className="outline-none">Close Business</button>
            </div>
        </div>
    )
}