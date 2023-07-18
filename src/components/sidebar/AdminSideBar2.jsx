"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BiChevronLeft, BiUser } from "react-icons/bi";
import {TiWarningOutline} from 'react-icons/ti'
import { TbHelpHexagon } from "react-icons/tb";


const AdminSideBar2 = () => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const menuData = [
        {
            title: "dispute",
            icons: (<TiWarningOutline/>),
            link: ""
        },
        {
            title: "helpdesk",
            icons: (<TbHelpHexagon/>),
            link: ""
        },
        {
            title: "message",
            icons: (<BiUser/>),
            link: ""
        },
    ]

    return (
        <>
            <aside
                id="cta-button-sidebar"
                className={`hidden lg:block 
                duration-300 h-[64] rounded-2xl relative  `}
                aria-label="Sidebar"
            >
                <div className={` w-60 h-[auto] bg-white rounded-2xl mb-4`}>
                    <div className="px-3">
                        <ul className="space-y-2 font-medium ">
                            <li
                                className={` item-center gap-x-4 cursor-pointer p-2  rounded-md  
                      `}
                            >
                                <Link
                                    href="/"
                                    className="flex items-center p-2 py-2 text-[16px]  rounded-lg  "
                                >
                                    <BiChevronLeft className="text-cyan-400 text-[16px]" />
                                    <span
                                        className={` text-cyan-400
                        text-[16px] ml-3 origin-left duration-200`}
                                    >
                                        Back to Page
                                    </span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className={`w-60 h-[auto] bg-white rounded-2xl`}>
                    <div className="py-10">
                        <ul
                            className="bullet-line-list relative gap-0 flex flex-col items-center space-y-2 capitalize"
                        >
                            <div className="text-center">
                                <div className="w-10 h-10 bg-[#0CF] rounded-full flex items-center justify-center">
                                    <div className="text-white text-[14px] font-semibold capitalize">
                                        KE
                                    </div>
                                </div>
                            </div>
                            <h4 className="text-[14px] p-0 m-0 font-[600]">Mike johnson</h4>
                            <span className="rounded-[3px] m-0 p-0 text-[12px] font-[400] bg-[#F1F9FF]">starte business</span>
                        </ul>
                    </div>
                </div>
                <div className={`w-60 h-[auto] mt-5 bg-white rounded-2xl`}>
                    <div className="py-10">
                        <ul
                            className="bullet-line-list relative gap-0 flex flex-col items-center space-y-2 capitalize"
                        >
                            {
                                menuData.map((md, i)=>(
                                    <Link href={md.link} className="flex flex-row items-center gap-4">
                                        <span className="text-[rgba(0,0,0,0.5)] text-[20px] font-[400]">{md.icons}</span>
                                        <span className="text-[rgba(0,0,0,0.5)] text-[16px] font-[400]">{md.title}</span>
                                    </Link>
                                ))
                            }
                        </ul>
                    </div>
                </div>
                <div className={`w-60 h-[auto] mt-5 rounded-2xl`}>
                    <div className="">
                        <ul
                            className="bullet-line-list relative gap-0 flex flex-col items-center space-y-3 capitalize"
                        >
                            <button className="px-4 py-3 w-full rounded-2xl border border-solid border-[#FE5621] text-[#FE5621] capitalize">suspend account</button>
                            <button className="px-4 py-3 w-full rounded-2xl border-none bg-[#FE5621] text-white capitalize">terminate account</button>
                            <button className="px-4 py-3 w-full rounded-2xl border-none text-white bg-[#0CF] capitalize">activate account</button>
                        </ul>
                    </div>
                </div>
            </aside>
        </>
    );
}

export default AdminSideBar2