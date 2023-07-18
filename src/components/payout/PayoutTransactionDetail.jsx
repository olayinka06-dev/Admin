"use client";
import { useRouter } from "next/navigation";
import { TbUser, TbFileDescription, TbCash, TbDeviceAnalytics } from "react-icons/tb";
import { BsArrowLeft } from "react-icons/bs";
import { LiaIdCard } from "react-icons/lia";
import { BiTrash } from "react-icons/bi";
import React from "react";
export default function PayoutTransactionDetail() {
    const router = useRouter()
    return (
        <div className="container-fluid bg-[#FFFFFF] lg:p-[48px] p-[28px] rounded-[20px]">
            <div className="container flex pb-[25px] space-x-[10px] cursor-pointer" onClick={() => router.back() }>
            <BsArrowLeft  className="mt-[3px] text-[#00CCFF]"/>
                <p className="text-[#00CCFF] lg:text-[14px] text-[12px]">Back To Page</p>
            </div>
            <div className="container pb-[25px]">
                <p className="lg:text-[20px] text-[16px] font-[600] text-[#000000]">Payout Transaction Details</p>
            </div>
            <div className="container flex">
                <div className="container text-[rgba(0,0,0,0.5)] lg:space-x-[35px] space-x-[10px] flex">
                    <LiaIdCard />
                    <p className="lg:text-[14px] text-[12px] text-[rgba(0,0,0,0.5)] font-[600]">Bank Name</p>
                </div>
                <div className="container flex mx-auto items-end justify-end">
                    <p className="lg:text-[14px] text-[12px] text-[rgba(0,0,0,0.5)] font-[600]">WEMA Bank</p>
                </div>
            </div>
            <div className="container flex mt-[35px] ">
                <div className="container text-[rgba(0,0,0,0.5)] lg:space-x-[35px] space-x-[10px] flex">
                    <TbUser />
                    <p className="lg:text-[14px] text-[12px] text-[rgba(0,0,0,0.5)] font-[600]">Account Number</p>
                </div>
                <div className="container flex mx-auto items-end justify-end">
                    <p className="lg:text-[14px] text-[12px] text-[rgba(0,0,0,0.5)] font-[600]">1234567891</p>
                </div>
            </div>
            <div className="container flex mt-[35px] ">
                <div className="container text-[rgba(0,0,0,0.5)] lg:space-x-[35px] space-x-[10px] flex">
                    <TbFileDescription />
                    <p className="lg:text-[14px] text-[12px] text-[rgba(0,0,0,0.5)] font-[600]">Description</p>
                </div>
                <div className="container flex mx-auto items-end justify-end">
                    <p className="lg:text-[14px] text-[12px] text-[rgba(0,0,0,0.5)] font-[600]">Withdraw</p>
                </div>
            </div>
            <div className="container flex mt-[35px] ">
                <div className="container text-[rgba(0,0,0,0.5)] lg:space-x-[35px] space-x-[10px] flex">
                    <TbCash />
                    <p className="lg:text-[14px] text-[12px] text-[rgba(0,0,0,0.5)] font-[600]">Amount</p>
                </div>
                <div className="container flex mx-auto items-end justify-end">
                    <p className="lg:text-[14px] text-[12px] text-[rgba(0,204,255,1)] font-[600]">+N 20,000</p>
                </div>
            </div>
            <div className="container flex mt-[35px] ">
                <div className="container text-[rgba(0,0,0,0.5)] lg:space-x-[35px] space-x-[10px] flex">
                    <TbDeviceAnalytics />
                    <p className="lg:text-[14px] text-[12px] text-[rgba(0,0,0,0.5)] font-[600]">Status</p>
                </div>
                <div className="container flex mx-auto items-end justify-end">
                    <p className="lg:text-[14px] text-[12px] text-[rgba(0,204,255,1)] font-[600]">Success</p>
                </div>
            </div>
            <div className="container mt-[35px] py-[17px] rounded-[10px] px-[20px] items-center justify-center border border-[rgba(0,0,0,0.1)] space-x-[15px] flex">
                <BiTrash className="text-[rgba(254,86,33,1)]"/>
                <button>
                <p className="text-[rgba(254,86,33,1)] lg:text-[14px] text-[12px]">Delete Transaction</p>
                </button>
            </div>
        </div>
    )
}