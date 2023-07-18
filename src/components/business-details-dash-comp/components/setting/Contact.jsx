"use client";
import React from "react";
export default function SettingContact() {
    return (
        <div className="">
            <div className="container lg:mt-[20px] mt-[10px] lg:space-x-[20px] space-x-[10px] flex">
                <div className="container">
                    <label htmlFor="" className="lg:text-sm text-sm font-[400] leading-[50px]" >Dispute Emails</label><br />
                    <input className=" border border-[rgba(0,0,0,0.1)] w-full lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none" placeholder="Jaysalimi.Msmes@gmail.com" type="email" name="" id="" />
                </div>
                <div className="container">
                    <label htmlFor="" className="lg:text-sm text-sm font-[400] leading-[50px]">Support Email</label><br />
                    <input className="  border border-[rgba(0,0,0,0.1)] w-full  lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none" placeholder="Jaysalimi.Msmes@gmail.com" type="email" name="" id="" />
                </div>
            </div>
            <div className="container lg:mt-[20px] mt-[10px] lg:space-x-[20px] space-x-[10px] flex">
                <div className="container">
                    <label htmlFor="" className="lg:text-sm text-sm font-[400] leading-[50px]" >General Email</label><br />
                    <input className=" border border-[rgba(0,0,0,0.1)] w-full lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none" placeholder="Jaysalimi.Msmes@gmail.com" type="email" name="" id="" />
                </div>
                <div className="container pt-[40px] lg:space-x-[10px] space-x-[5px] flex">
                    <div>
                    <input className="lg:w-[20px] w-[10px]" type="checkbox" name="" id="" />
                    </div>
                    <div>
                    <label htmlFor="" className="lg:text-sm text-sm font-[400] leading-[50px]">Use General Email For All</label><br />
                    </div>
                </div>
            </div>
            <div className="container w-full mx-auto items-end justify-end text-right lg:mt-[20px] mt-[10px]">
                <button className="bg-[#0CF] lg:py-[10px] py-[5px] lg:px-[20px] px-[10px] rounded-[13px] text-sm text-white border-none items-end justify-end">Save Change</button>
            </div>
            </div>
    )
}