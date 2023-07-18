"use client";
import React from "react";
export default function PaymentInfo() {
    return (
        <div className="container">
            <div className="container  lg:p-[48px] p-[43px] bg-[white] rounded-[20px]">
                <p className="lg:text-[20px] text-[15px] lg:px-[20px] px-[10px] font-[600] text-[rgba(0,0,0,1)] leading-[25px]">Wallet Information</p>
                <div className="container lg:px-[20px] lg:mt-[20px] mt-[10px] px-[10px] lg:space-x-[20px] space-x-[10px] flex">
                    <div className="container">
                        <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]" >First Name</label><br />
                        <p className="border border-[rgba(0,0,0,0.1)] w-full lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none text-[14px]">Kelvin Egodobu</p>
                    </div>
                    <div className="container">
                        <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]">Voucher Account ID</label><br />
                        <p className="border border-[rgba(0,0,0,0.1)] w-full  lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none text-[14px]">123456789</p>
                    </div>
                </div>
                <div className="container lg:px-[20px] px-[10px] mx-auto lg:mt-[20px] mt-[10px]">
                <div className="container w-full">
                    <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]">Email Address</label><br />
                    <p className="border border-[rgba(0,0,0,0.1)] w-full  lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none text-[14px]">KelvinEgodobu@gmail.com</p>
                </div>
            </div>
            </div>

            <div className="container mt-[30px] lg:p-[48px] p-[43px] bg-[white] rounded-[20px]">
                <p className="lg:text-[20px] text-[15px] lg:px-[20px] px-[10px] font-[600] text-[rgba(0,0,0,1)] leading-[25px]">Payment Information</p>
                <div className="container lg:px-[20px] px-[10px] lg:mt-[20px] mt-[10px] lg:space-x-[20px] space-x-[10px] flex">
                    <div className="container">
                        <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]" >Account Number<span className="text-[red]">*</span></label><br />
                        <p className="border border-[rgba(0,0,0,0.1)] w-full lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none text-[14px]">1234567891</p>
                    </div>
                    <div className="container">
                        <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]">Account Name</label><br />
                        <p className="border border-[rgba(0,0,0,0.1)] w-full  lg:py-[10px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none text-[14px]">Kelvin Egodobu</p>
                    </div>
                </div>
                <div className="container lg:px-[20px] px-[10px] mx-auto lg:mt-[20px] mt-[10px]">
                <div className="container w-full lg-mb-[0px] mb-[70px]">
                    <label htmlFor="" className="lg:text-[16px] text-[12px] font-[400] leading-[50px]">Bank Name<span className="text-[red]">*</span></label><br />
                    <p className="border border-[rgba(0,0,0,0.1)] w-full  lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none text-[14px]">WEMA Bank</p>
                </div>
            </div>
            </div>
        </div>
    )
}