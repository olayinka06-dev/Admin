"use client";
import { dataset } from "@/vendor/dataset";
import DataTables from "datatables.net";
import React from "react";
import DataTable from "../Table/DataTable";
export default function TransactionHome() {
  const data = dataset;



  let columns = [
    { title: "Transaction ID" },
    { title: "Source Acct" },
    { title: "Destination Acct" },
    { title: "Amount" },
  
    {
      title: "",
      render: (data, type, row) => {
        return `
           
        <a href="#0"
        data-id="${row[8]}"
         class=""
         data-bs-toggle="offcanvas"
         data-bs-target="#"
         aria-controls="">
        Details
     </a>
       
        `;
      },
    },
  ];
    return (
        <div className="container-fluid bg-[#FFFFFF] py-[20px] px-[30px] rounded-2xl">
           
            <div className="container lg:mt-[50px] mt-[20px] lg:overflow-hidden w-full overflow-x-scroll">
            <DataTable data={data} 

            columns={columns} />
            </div>
       
        </div>
    )
}