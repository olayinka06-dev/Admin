"use client";
import { helpdataset } from "../helpdesk/HelpDataSet";
import DataTables from "datatables.net";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import DataTable from "../Table/DataTable";
import { payoutdataset } from "./PayoutDataSet";
export default function PayoutTable() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpen1, setIsDropdownOpen1] = useState(false);
    const [isDropdownOpen2, setIsDropdownOpen2] = useState(false);
    const [isDropdownOpen3, setIsDropdownOpen3] = useState(false);
    const [isDropdownOpen4, setIsDropdownOpen4] = useState(false);
    const [isDropdownOpen5, setIsDropdownOpen5] = useState(false);
    const [isDropdownOpen6, setIsDropdownOpen6] = useState(false);
    const [isDropdownOpen7, setIsDropdownOpen7] = useState(false);
    const [isDropdownOpen8, setIsDropdownOpen8] = useState(false);
    const [isDropdownDelete, setIsDropdownDelete] = useState(false);
    const [isGoback, setIsGoback] = useState(false);

    const goBack = () =>{
        setIsGoback (!isGoback)
        setIsDropdownDelete (false)
    }
  const Dropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsGoback (false)
    setIsDropdownOpen1(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
  };
  const Dropdown1 = () => {
    setIsDropdownOpen1(!isDropdownOpen1);
    setIsDropdownOpen(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
  };
  const Dropdown2 = () => {
    setIsDropdownOpen2(!isDropdownOpen2);
    setIsDropdownOpen1(false);
    setIsDropdownOpen(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
  };
  const Dropdown3 = () => {
    setIsDropdownOpen3(!isDropdownOpen3);
    setIsDropdownOpen1(false);
    setIsDropdownOpen(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
  };
  const Dropdown4 = () => {
    setIsDropdownOpen4(!isDropdownOpen4);
    setIsDropdownOpen1(false);
    setIsDropdownOpen(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
  };
  const Dropdown5 = () => {
    setIsDropdownOpen5(!isDropdownOpen5);
    setIsDropdownOpen1(false);
    setIsDropdownOpen(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
  };
  const Dropdown6 = () => {
    setIsDropdownOpen6(!isDropdownOpen6);
    setIsDropdownOpen1(false);
    setIsDropdownOpen(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen8(false);
  };
  const Dropdown7 = () => {
    setIsDropdownOpen7(!isDropdownOpen7);
    setIsDropdownOpen1(false);
    setIsDropdownOpen(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen2(false);
    setIsDropdownOpen8(false);
  };
  const Dropdown8 = () => {
    setIsDropdownOpen8(!isDropdownOpen8);
    setIsDropdownOpen1(false);
    setIsDropdownOpen(false);
    setIsDropdownOpen3(false);
    setIsDropdownOpen4(false);
    setIsDropdownOpen5(false);
    setIsDropdownOpen6(false);
    setIsDropdownOpen7(false);
    setIsDropdownOpen2(false);
  };
  const DropDelete = () => {
    setIsDropdownDelete(!isDropdownDelete);
  };


  const data = payoutdataset;

 

 /*  if (Resp.length > 0) {
    Resp.forEach((val) => {
      const res = [
        (sn += 1),
        `${val.organizationName}`,
        `${val.email}`,
        `${val.phoneNum1}`,
        `${val.officeAddress}`,
        `${val.execAName}`,
        `${val.execBName}`, 
        `${val.execCName}`,
        `${val.verify_code1}`,
      ];
      data.push(res);
    });
  } */

  let columns = [
    { title: "Bank Name" },
    { title: "Account No." },
    { title: "Bank Name" },
    { title: "Amount" },
  
    {
      title: "",
      render: (data, type, row) => {
        return `
           
        <a href="/payouts/ptxndetails"
        data-id="${row[8]}"
         class=""
         data-bs-toggle="offcanvas"
         data-bs-target="#"
         aria-controls="">
        ...
     </a>
       
        `;
      },
    },
  ];
    return (
        <div className="container-fluid bg-[#FFFFFF] py-[20px] px-[30px] rounded-2xl">
            <div className="container lg:mt-[50px] mt-[20px] lg:overflow-hidden w-full overflow-x-scroll">
            <div className="container flex justify-between">
              <div className="container">
            <p className="text-[20px] font-[600] mb-[20px]">Manage Contact</p>
              </div>
              <div className="container w-full flex items-end justify-end">
                <Link href={"/payouts/reqpout"} className="text-sm border border-[rgba(0,0,0,0.4)] py-[10px] px-[20px] rounded-[10px] cursor-pointer font-[600] mb-[20px]">+ Request Payout</Link>
              </div>
            </div>
            <DataTable data={data} columns={columns} />
            </div>
       
        </div>
    )
}