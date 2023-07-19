"use client";
import React from 'react';
import { BiChevronDown, BiChevronRight } from "react-icons/bi";
import { dashboarddataset } from './Dashboarddataset';
import DataTable from '../Table/DataTable';
import Link from "next/link";
import PieChartComponent from '../Charts/PieChart';
import LineChartComponent from '../Charts/LineChart';

const Dashboard = () => {

    const pieChartData = {
        labels: ["Red", "Blue", "Yellow"],
        datasets: [
            {
                data: [12, 19, 3],
                backgroundColor: [
                    "rgba(255, 99, 132, 0.2)",
                    "rgba(54, 162, 235, 0.2)",
                    "rgba(255, 206, 86, 0.2)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };
    const data = dashboarddataset;

    let columns = [
        { title: "Transaction ID" },
        { title: "Source Acct" },
        { title: "Destination Acct" },
        { title: "Amount" },

        {
            title: "",
            render: (data, type, row) => {
                return `
               
                <a href="/"
                data-id="${row[8]}"
                 class="bg-[rgba(0,204,255,1)] py-[5px] px-[10px] text-[white] text-[14px] rounded-[10px]"
                 data-bs-toggle="offcanvas"
                 data-bs-target="#"
                 aria-controls="">
                Preview
             </a>
           
            `;
            },
        },
    ];
    return (
        <>
            <div className="">
                <div className="py-12 px-5 mb-4 rounded-2xl">
                    <div className="text-black text-2xl mb-4 font-semibold capitalize">
                        user summary
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center justify-center h-24 rounded-2xl bg-white shadow-sm border border-gray-800">
                            <div className="w-full h-full flex flex-col justify-start items-center gap-2.5 py-5 ">
                                <div className="text-black text-opacity-50 text-sm font-normal capitalize">
                                    Total balance
                                </div>
                                <div className="text-black text-2xl font-semibold capitalize">
                                    n 200,000
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded-2xl bg-white shadow-sm border border-gray-800">
                            <div className="w-full h-full flex flex-col justify-start items-center gap-2.5  py-5">
                                <div className="text-black text-opacity-50 text-sm font-normal capitalize">
                                    active users
                                </div>
                                <div className="text-black text-2xl font-semibold capitalize">
                                    20.2k
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded-2xl bg-white shadow-sm border border-gray-800">
                            <div className="w-full h-full flex flex-col justify-start items-center gap-2.5  py-5">
                                <div className="text-black text-opacity-50 text-sm font-normal capitalize">
                                    daily transaction
                                </div>
                                <div className="text-black text-2xl font-semibold capitalize">
                                    10.9k
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-12 px-5 h-auto mb-4 rounded-2xl">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <h2 className="text-black text-2xl font-semibold capitalize">
                            Current Statistics
                        </h2>
                        <div className="w-2/3 md:w-auto h-12 px-4 py-3 bg-white rounded-2xl border border-black border-opacity-10 flex flex-col justify-start items-start gap-2.5">
                            <div className="flex items-center gap-2.5">
                                <div className="text-black text-sm font-normal capitalize">
                                    monthly
                                </div>
                                <span className="w-6 h-6">
                                    <BiChevronDown />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="grid grid-rows-3 md:grid-rows-1 grid-flow-col gap-4">
                        <div className="row-span-1 md:row-span-3   shadow-cyan-100">
                            <PieChartComponent data={pieChartData} />
                        </div>
                        <div className="row-span-1 md:col-span-2  shadow-cyan-100">
                            <div className="flex  align-items">
                                <div className=" h-[105px] flex-col justify-start items-start gap-[15px] inline-flex">
                                    <div className="justify-start items-center gap-[13px] inline-flex">
                                        <div className="w-[25px] h-[25px] bg-amber-500 rounded-full" />
                                        <div className="text-black text-[18px] font-normal capitalize">
                                            cash withdrawal
                                        </div>
                                    </div>
                                    <div className="justify-start items-center gap-[13px] inline-flex">
                                        <div className="w-[25px] h-[25px] bg-orange-600 rounded-full" />
                                        <div className="text-black text-[18px] font-normal capitalize">
                                            send
                                        </div>
                                    </div>
                                    <div className="justify-start items-center gap-[13px] inline-flex">
                                        <div className="w-[25px] h-[25px] bg-teal-300 rounded-full" />
                                        <div className="text-black text-[18px] font-normal capitalize">
                                            receive{" "}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row-span-1 md:col-span-2   shadow-cyan-100">
                            <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex    ">
                                <li className="w-full    ">
                                    <div className="flex items-center pl-3">
                                        <input
                                            type="checkbox"
                                            defaultValue
                                            className="w-6 h-6 text-cyan-500 bg-gray-100  rounded focus:ring-cyan-500   focus:ring-2  "
                                        />
                                        <label
                                            htmlFor="cash-checkbox-list"
                                            className="w-full py-3 ml-2 text-[14px] font-medium text-gray-900  "
                                        >
                                            Cash withdrawal
                                        </label>
                                    </div>
                                </li>
                                <li className="w-full   ">
                                    <div className="flex items-center pl-3">
                                        <input
                                            type="checkbox"
                                            defaultValue
                                            className="w-6 h-6 text-cyan-500 bg-gray-100  rounded focus:ring-cyan-500   focus:ring-2  "
                                        />
                                        <label
                                            htmlFor="send-checkbox-list"
                                            className="w-full py-3 ml-2 text-[14px] font-medium text-gray-900  "
                                        >
                                            Send
                                        </label>
                                    </div>
                                </li>
                                <li className="w-full">
                                    <div className="flex items-center pl-3">
                                        <input
                                            type="checkbox"
                                            defaultValue
                                            className="w-6 h-6 text-cyan-500 bg-gray-100  rounded focus:ring-cyan-500 focus:ring-2"
                                        />
                                        <label
                                            htmlFor="Receive-checkbox-list"
                                            className="w-full py-3 ml-2 text-[14px] font-medium text-gray-900  "
                                        >
                                            Receive
                                        </label>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="p-12 h-auto mb-4 rounded-2xl bg-white shadow">
                    <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                        <h2 className="text-black text-2xl font-semibold capitalize">
                            Transaction Summary
                        </h2>

                        <div className="w-2/3 md:w-auto h-12 px-4 py-3 bg-white rounded-2xl border border-black border-opacity-10 flex flex-col justify-start items-start gap-2.5">
                            <div className="flex items-center gap-2.5">
                                <div className="text-black text-sm font-normal capitalize">
                                    monthly
                                </div>
                                <span className="w-6 h-6">
                                    <BiChevronDown />
                                </span>
                            </div>
                        </div>
                    </div>
                    <div className="">
                        <div className="shadow-cyan-100">
                            {<LineChartComponent />}
                        </div>
                    </div>
                </div>
                <div className="py-12 px-5 mb-4 rounded-2xl">
                    <div className="text-black text-2xl mb-4 font-semibold capitalize">
                        user summary
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div className="flex items-center justify-center h-24 rounded-2xl bg-white shadow-sm border border-gray-800">
                            <div className="w-full h-full flex flex-col justify-start items-center gap-2.5 py-5 ">
                                <div className="text-black text-opacity-50 text-sm font-normal capitalize">
                                    today
                                </div>
                                <div className="text-black text-2xl font-semibold capitalize">
                                    n 10,000
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded-2xl bg-white shadow-sm border border-gray-800">
                            <div className="w-full h-full flex flex-col justify-start items-center gap-2.5  py-5">
                                <div className="text-black text-opacity-50 text-sm font-normal capitalize">
                                    This Week
                                </div>
                                <div className="text-black text-2xl font-semibold capitalize">
                                    n 25,000
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center justify-center h-24 rounded-2xl bg-white shadow-sm border border-gray-800">
                            <div className="w-full h-full flex flex-col justify-start items-center gap-2.5  py-5">
                                <div className="text-black text-opacity-50 text-sm font-normal capitalize">
                                    This Month
                                </div>
                                <div className="text-black text-2xl font-semibold capitalize">
                                    n 89,000
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="container-fluid bg-[#FFFFFF] py-[48px] rounded-[20px]">
                            <div className="w-full flex justify-between">
                                <div className="w-full">
                                    <p className="lg:text-[20px] text-[15px] font-[600] mb-[20px]">Recent Transaction</p>
                                </div>
                                <div className="w-full flex justify-end ">
                                    <Link href={""} className='py-2 text-[12px] px-10 border border-[rgba(0,0,0,0.5)] border-solid flex items-center gap-2 rounded-2xl'><span>View All</span> <span><BiChevronRight/></span></Link>
                                </div>
                            </div>
                            <div className="lg:overflow-hidden w-full overflow-x-scroll">
                                <DataTable data={data} columns={columns} />
                            </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default Dashboard;