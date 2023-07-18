"use client";
import React from "react";
export default function PaymentInfo() {
    return (
        <div className="">
            <div className="container  lg:pb-[80px] pb-[40px] bg-[white] rounded-[20px]">
                <p className="lg:text-[20px] text-[15px] lg:py-[48px] lg:px-[20px] px-[10px] font-[600] text-[rgba(0,0,0,1)] leading-[25px]">Wallet Information</p>
                <div className="container lg:px-[20px] px-[10px] lg:space-x-[20px] space-x-[10px] flex">
                    <div className="container">
                        <label htmlFor="" className="lg:text-sm text-[12px] font-[400] leading-[50px]" >First Name</label><br />
                        <input className="border border-[rgba(0,0,0,0.1)] w-full lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none" placeholder="Kelvin Egodobu" type="text" name="" id="" />
                    </div>
                    <div className="container">
                        <label htmlFor="" className="lg:text-sm text-[12px] font-[400] leading-[50px]">Voucher Account ID</label><br />
                        <input className="border border-[rgba(0,0,0,0.1)] w-full  lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none" placeholder="123456789" type="text" name="" id="" />
                    </div>
                </div>
                <div className="container lg:px-[20px] px-[10px] mx-auto lg:mt-[20px] mt-[10px]">
                <div className="container w-full">
                    <label htmlFor="" className="lg:text-sm text-[12px] font-[400] leading-[50px]">Email Address</label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full  py-[13px] px-[20px] rounded-[10px] outline-none" placeholder="KelvinEgodobu@gmail.com" type="email" name="" id="" />
                </div>
            </div>
            </div>

            <div className="container mt-[30px] lg:pt-[55px] pt-[20px] lg:pb-[30px] pb-[15px] bg-[white] rounded-[20px]">
                <p className="lg:text-[20px] text-[15px] lg:pb-[30px] lg:px-[20px] px-[10px] font-[600] text-[rgba(0,0,0,1)] leading-[25px]">Payment Information</p>
                <div className="container lg:px-[20px] px-[10px] lg:mt-[20px] mt-[10px] lg:space-x-[20px] space-x-[10px] flex">
                    <div className="container">
                        <label htmlFor="" className="lg:text-sm text-[12px] font-[400] leading-[50px]" >Account Number<span className="text-[red]">*</span></label><br />
                        <input className="border border-[rgba(0,0,0,0.1)] w-full lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none" placeholder="1234567891" type="text" name="" id="" />
                    </div>
                    <div className="container">
                        <label htmlFor="" className="lg:text-sm text-[12px] font-[400] leading-[50px]">Account Name</label><br />
                        <input className="border border-[rgba(0,0,0,0.1)] w-full  lg:py-[10px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none" placeholder="Kelvin Egodobu" type="text" name="" id="" />
                    </div>
                </div>
                <div className="container lg:px-[20px] px-[10px] mx-auto lg:mt-[20px] mt-[10px]">
                <div className="container w-full">
                    <label htmlFor="" className="lg:text-sm text-[12px] font-[400] leading-[50px]">Bank Name<span className="text-[red]">*</span></label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full  py-[13px] px-[20px] rounded-[10px] outline-none" placeholder="WEMA Bank" type="text" name="" id="" />
                </div>
            </div>
            </div>
        </div>
    )
}