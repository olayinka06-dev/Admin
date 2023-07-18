"use client";
import React from "react";
export default function SettingPaymentInfo() {
    return (
        <div className="">
            <div className="container mt-[30px] lg:p-[48px] p-[28px] border border-[rgba(0,0,0,0.1)] rounded-[20px]">
                <p className="lg:text-[20px] text-[15px] lg:px-[20px] px-[10px] font-[600] text-[rgba(0,0,0,1)] leading-[25px]">Wallet Information</p>
                <div className="container lg:mt-[20px] lg:px-[20px] px-[10px] lg:space-x-[20px] space-x-[10px] flex">
                    <div className="container">
                        <label htmlFor="" className="text-gray-900 text-sm font-[400] leading-[50px]" >First Name</label><br />
                        <input className="border border-[rgba(0,0,0,0.1)] w-full lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none text-[14px]" placeholder="e.g Kelvin Egodobu" type="text" name="" id="" />
                    </div>
                    <div className="container">
                        <label htmlFor="" className="text-gray-900 text-sm font-[400] leading-[50px]">Voucher Account ID</label><br />
                        <input className="border border-[rgba(0,0,0,0.1)] w-full  lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none text-[14px]" placeholder="e.g 123456789" type="text" name="" id="" />
                    </div>
                </div>
                <div className="container lg:px-[20px] px-[10px] mx-auto lg:mt-[20px] mt-[10px]">
                <div className="container w-full">
                    <label htmlFor="" className="text-gray-900 text-sm font-[400] leading-[50px]">Email Address</label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full  lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none text-[14px]" placeholder="e.g KelvinEgodobu@gmail.com" type="email" name="" id="" />
                </div>
            </div>
            </div>

            <div className="container mt-[30px] lg:p-[48px] p-[28px] border border-[rgba(0,0,0,0.1)] rounded-[20px]">
                <p className="lg:text-[20px] text-[15px] lg:px-[20px] px-[10px] font-[600] text-[rgba(0,0,0,1)] leading-[25px]">Payment Information</p>
                <div className="container lg:px-[20px] px-[10px] lg:mt-[20px] mt-[10px] lg:space-x-[20px] space-x-[10px] flex">
                    <div className="container">
                        <label htmlFor="" className="text-gray-900 text-sm font-[400] leading-[50px]" >Account Number<span className="text-[red]">*</span></label><br />
                        <input className="border border-[rgba(0,0,0,0.1)] w-full lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none text-[14px]" placeholder="e.g 1234567891" type="text" name="" id="" />
                    </div>
                    <div className="container">
                        <label htmlFor="" className="text-gray-900 text-sm font-[400] leading-[50px]">Account Name</label><br />
                        <input className="border border-[rgba(0,0,0,0.1)] w-full  lg:py-[10px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none text-[14px]" placeholder="e.g Kelvin Egodobu" type="text" name="" id="" />
                    </div>
                </div>
                <div className="container lg:px-[20px] px-[10px] mx-auto lg:mt-[20px] mt-[10px]">
                <div className="container w-full">
                    <label htmlFor="" className="text-gray-900 text-sm font-[400] leading-[50px]">Bank Name<span className="text-[red]">*</span></label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full  lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none text-[14px]" placeholder="WEMA Bank" type="text" name="" id="" />
                </div>
                <div className="container w-full px-[10px] py-[40px] flex items-end justify-end">
                        <button className="border border-[rgba(0,0,0,0.5)] rounded-[10px] lg:py-[13px] py-[5px] lg:px-[25px] px-[15px]">Edit</button>
                    </div>
            </div>
            </div>
        </div>
    )
}