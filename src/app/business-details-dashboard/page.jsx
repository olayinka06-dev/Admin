"use client";
import React, { useState } from 'react';
import Dashboard from '@/components/business-details-dash-comp/Dashboard';
import PaymentInfo from '@/components/business-details-dash-comp/PaymentInfo';
import Payout from '@/components/business-details-dash-comp/Payout';
import Settings from '@/components/business-details-dash-comp/Settings';
import Team from '@/components/business-details-dash-comp/Team';
import Transaction from '@/components/business-details-dash-comp/Transaction';
import AdminSideBar2 from '@/components/sidebar/AdminSideBar2';
import Users from '@/components/business-details-dash-comp/Users';

const page = () => {

    const [currentTab, setCurrentTab] = useState(0);

    const tabOptionData = [
        "Dashboard",
        "transaction",
        "users",
        "payout",
        "payment info.",
        "team",
        "settings",
    ];

    const tabContentData = [
        {
            content: (<Dashboard/>)
        },
        {
            content:(<Transaction/>)
        },
        {
            content:(<Users/>)
        },
        {
            content:(<Payout/>)
        },
        {
            content:(<PaymentInfo/>)
        },
        {
            content:(<Team/>)
        },
        {
            content:(<Settings/>)
        },
    ];

    const handleClickOption = (i) => {
        setCurrentTab(i)
    }

    return (
        <>
            <div className="lg:flex relative">
                <AdminSideBar2 />
                <div className="flex-1 mx-2 lg:ms-5">
                    <div className="animation py-12 px-9 h-auto flex flex-col gap-4 mb-4 rounded-2xl bg-white shadow capitalize">
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[20px] font-[600]">business details</h3>
                        </div>
                        <div className="grid lg:grid-cols-7 mt-5 md:grid-cols-5 gap-x-2 grid-cols-3">
                            {
                                tabOptionData.map((tod, i)=>(
                                    <button className={`text-[13px] hover:bg-[#0CF] transition duration-150 ease-out hover:text-white hover:border-[#0CF] capitalize rounded-2xl px-1 py-2 ${currentTab === i ? "border border-[#0CF] bg-[#0CF] text-white" : "border border-[rgba(0,0,0,0.5)]"} text-[rgba(0,0,0,0.5)]`} key={i} onClick={()=> handleClickOption(i)}>{tod}</button>
                                ))
                            }
                        </div>
                        <div className="">
                            {
                                tabContentData[currentTab].content
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default page