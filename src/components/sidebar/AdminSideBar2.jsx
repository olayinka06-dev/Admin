"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BiChevronLeft, BiUser } from "react-icons/bi";
import { TiWarningOutline } from 'react-icons/ti'
import { TbHelpHexagon } from "react-icons/tb";
import Image from "next/image";

const PopUp = ({ bg, handleDismiss, text, no, yes }) => {
    return (
        <div style={{width: "100% !important", margin: "0 !important"}} className="flex ms-0  w-full z-[1000] h-[100vh] bg-[rgba(0,0,0,0.25)] fixed top-0 justify-center items-center px-5">
            <div className="w-full text-center shadow-md lg:w-1/3 bg-white py-14 px-10 rounded-2xl md:w-1/2">
                <Image className="mx-auto" height={50} width={50} src={"/assets/notification.svg"} />
                <h3>{text}</h3>
                <div className="mx-auto flex flex-row gap-3 items-center">
                    <button onClick={handleDismiss} className="py-4 font-[600] rounded-2xl px-5 border border-[rgba(0,0,0,0.5)] border-solid text-sm">{no}</button>
                    <button className={`py-4 font-[600] bg-${bg} rounded-2xl px-5 text-white text-sm`}>{yes}</button>
                </div>
            </div>
        </div>
    );
}


const AdminSideBar2 = ({ handleSwitchTab, currentTabSwitch, switchTab }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isPopupVisible, setPopupVisible] = useState(false);
    const [isPopupVisibleTwo, setPopupVisibleTwo] = useState(false);
    const [isPopupVisibleThree, setPopupVisibleThree] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    const handleDismiss = () => {
        setPopupVisible(false);
        setPopupVisibleThree(false)
        setPopupVisibleTwo(false)
    };

    const handlePopOne = () => {
        setPopupVisible(true)
//         setPopupVisibleTwo(true)
// setPopupVisibleThree(true)
    }
    const handlePopTwo = () => {
        setPopupVisibleTwo(true)
    }
    const handlePopthree = () => {
        setPopupVisibleThree(true)
    }


    const menuData = [
        {
            title: "dispute",
            icons: (<TiWarningOutline />),
        },
        {
            title: "helpdesk",
            icons: (<TbHelpHexagon />),
        },
        {
            title: "message",
            icons: (<BiUser />),
        },
    ];

    // const cancelData = [
    //     "suspend account",
    //     "terminate account",
    //     "activate account"
    // ];

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
                                menuData.map((md, i) => (
                                    <span onClick={() => handleSwitchTab(i)} key={i} className={`flex flex-row cursor-pointer text-[rgba(0,0,0,0.5)] items-center gap-4`}>
                                        <span className={`${switchTab && (currentTabSwitch === i ? "text-[#0CF!important]" : "text-[rgba(0,0,0,0.5)]")} text-[20px] font-[400]`}>{md.icons}</span>
                                        <span className={`${switchTab && (currentTabSwitch === i ? "text-[#0CF!important]" : "text-[rgba(0,0,0,0.5)]")}  text-[16px] font-[400]`}>{md.title}</span>
                                    </span>
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
                            <button onClick={handlePopOne} className="px-4 py-3 w-full rounded-2xl border border-solid border-[#FE5621] text-[#FE5621] capitalize">suspend account</button>
                            <button onClick={handlePopTwo} className="px-4 py-3 w-full rounded-2xl border-none bg-[#FE5621] text-white capitalize">terminate account</button>
                            <button onClick={handlePopthree} className="px-4 py-3 w-full rounded-2xl border-none text-white bg-[#0CF] capitalize">activate account</button>
                        </ul>

                    </div>
                </div>
            </aside>
            {
                            isPopupVisible && (
                                <PopUp 
                                text={"are you sure you want to suspend this account?"}
                                no={"no, go back"}
                                yes={"yes, suspend it"}
                                handleDismiss={handleDismiss}
                                bg={"[#FE5621]"}
                                />
                            )
                        }
                        {
                            isPopupVisibleTwo && (
                                <PopUp
                                text={"are you sure you want to terminate this account?"}
                                no={"no, go back"}
                                yes={"yes, terminate it"}
                                handleDismiss={handleDismiss}
                                bg={"[#FE5621]"}
                                />
                            )
                        }
                        {
                            isPopupVisibleThree && (
                                <PopUp
                                text={"are you sure you want to activate this account?"}
                                no={"no, go back"}
                                yes={"yes, activate it"}
                                handleDismiss={handleDismiss}
                                bg={"[#0CF]"}
                                />
                            )
                        }

        </>
    );
}

export default AdminSideBar2;