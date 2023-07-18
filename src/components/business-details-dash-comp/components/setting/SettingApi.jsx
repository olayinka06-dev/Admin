"use client";
import React from "react";
import { AiOutlineEye } from "react-icons/ai";
import { IoCopyOutline } from "react-icons/io5";



export default function SettingApi() {
    return (
        <div className="">
            <div className="container mt-[30px] lg:ps-[50px] ps-[0px] lg:pe-[200px] lg:pt-[25px] pt-[10px] lg:pb-[80px] pb-[40px] border border-[rgba(0,0,0,0.1)] rounded-[20px]">
                <p className="lg:text-sm lg:pb-[30px] pb-[15px] lg:px-[20px] px-[10px] font-[400] text-[rgba(0,0,0,0.5)] leading-[25px]">API Key & Webhook</p>
                <p className="lg:text-[20px] text-[15px] lg:pb-[20px] pb-[10px] lg:px-[20px] px-[10px] font-[600] text-[rgba(0,0,0,1)] leading-[25px]">Alert Key</p>
                <div className="container lg:py-[10px] py-[5px] lg:px-[20px] px-[10px]">
                    <div className="py-[10px] px-[20px] lg:px-[20px] w-full border border-[rgba(0,0,0,0.1)] rounded-[10px] space-x-[10px] flex">
                        <input className="outline-none  w-full" type="text" name="" id="" placeholder="456628ufcndnvsdhjajafjfj" />
                        <div className="text-[20px] cursor-pointer">
                            <AiOutlineEye />
                        </div>
                        <div className="container cursor-pointer lg:w-[15%] w-[35%] space-x-[10px] items-end justify-end flex border-l-2">
                            <div className="lg:ps-[50px] lg:pe-[5px] text-[20px]">
                                <IoCopyOutline />
                            </div>
                            Copy
                        </div>
                    </div>
                <div className="container w-full items-end justify-end flex">
                    <button className="text-[#0CF] text-sm pt-[10px]">+ Generate New key</button>
                </div>
                </div>
                <p className="lg:text-[20px] text-[15px] lg:pb-[20px] lg:px-[20px] px-[10px] font-[600] text-[rgba(0,0,0,1)] leading-[25px]">Public Key</p>
                <div className="container lg:py-[10px] py-[5px] lg:px-[20px] px-[10px]">
                    <div className="py-[10px] px-[10px] lg:px-[20px] w-full border border-[rgba(0,0,0,0.1)] rounded-[10px] space-x-[10px] flex">
                        <input className="outline-none w-full " type="text" name="" id="" placeholder="456628ufcndnvsdhjajafjfj" />
                        <div className="container cursor-pointer lg:w-[15%] w-[30%] space-x-[10px] items-end justify-end flex border-l-2">
                            <div className="ps-[50px] pe-[5px] text-[20px]">
                                <IoCopyOutline />
                            </div>
                            Copy
                        </div>
                    </div>
                </div>
                <div className="container lg:px-[20px] px-[10px] mx-auto lg:mt-[20px] mt-[10px]">
                    <div className="container w-full">
                        <label htmlFor="" className="lg:text-[20px] font-[600] text-[rgba(0,0,0,1)] leading-[50px]">Webhook URL</label><br />
                        <input className="border border-[rgba(0,0,0,0.1)] w-full  py-[10px] px-[20px] rounded-[10px] outline-none" placeholder="https://examples.com" type="email" name="" id="" />
                    </div>
                </div>
            </div>
        </div>
    )
}