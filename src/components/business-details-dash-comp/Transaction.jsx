import React from 'react';
import DataTable from '../Table/DataTable';
import { transactionDataSet } from './TransactionDataSet';
import { BiChevronDown } from 'react-icons/bi';

const Transaction = () => {
  const data = transactionDataSet;

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
    {
      title: "",
      render: (data, type, row) => {
        return `
             
              <a href="/"
              data-id="${row[8]}"
               class="bg-[#FE5621] py-[5px] px-[10px] text-[white] text-[14px] rounded-[10px]"
               data-bs-toggle="offcanvas"
               data-bs-target="#"
               aria-controls="">
              Delete
           </a>
         
          `;
      },
    },
  ];
  return (
    <div className="">
      <div className="container-fluid bg-[#FFFFFF] py-[48px] rounded-[20px]">
        <div className="w-full flex justify-between">
          <div className="w-full">
            <p className="lg:text-[20px] text-[15px] font-[600] mb-[20px]">Transaction History</p>
          </div>
          <div className="flex items-center gap-2.5">
            <div className="text-black text-sm font-normal capitalize">
              monthly
            </div>
            <span className="w-6 h-6">
              <BiChevronDown />
            </span>
          </div>
        </div>
        <div className="lg:overflow-hidden w-full overflow-x-scroll">
          <DataTable data={data} columns={columns} />
        </div>

      </div>
    </div>
  )
}

export default Transaction