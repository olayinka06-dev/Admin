import React from 'react';
import DataTable from '../Table/DataTable';
import { payoutDataSet } from './payoutDataSet';
import { BiChevronDown, BiPlus } from 'react-icons/bi';

const Payout = () => {
  const data = payoutDataSet;

  let columns = [
    { title: "Business name" },
    { title: "Account no." },
    { title: "Bank name" },
    { title: "Description" },
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
      <div className="py-12 px-5 mb-4 rounded-2xl">
        <div className="text-black text-2xl mb-4 font-semibold capitalize">
        my payout
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          <div className="flex items-center justify-center h-24 rounded-2xl bg-white shadow-sm border border-gray-800">
            <div className="w-full h-full flex flex-col justify-start items-center gap-2.5 py-5 ">
              <div className="text-black text-opacity-50 text-sm font-normal capitalize">
              total balance
              </div>
              <div className="text-black text-2xl font-semibold capitalize">
              N 5,400,000
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center h-24 rounded-2xl bg-white shadow-sm border border-gray-800">
            <div className="w-full h-full flex flex-col justify-start items-center gap-2.5  py-5">
              <div className="text-black text-opacity-50 text-sm font-normal capitalize">
              pending payout
              </div>
              <div className="text-black text-2xl font-semibold capitalize">
              N 1,980,000
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center h-24 rounded-2xl bg-white shadow-sm border border-gray-800">
            <div className="w-full h-full flex flex-col justify-start items-center gap-2.5  py-5">
              <div className="text-black text-opacity-50 text-sm font-normal capitalize">
              total payout
              </div>
              <div className="text-black text-2xl font-semibold capitalize">
              N 80,090,000
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-[#FFFFFF] py-[48px] rounded-[20px]">
        <div className="w-full flex justify-between">
          <div className="w-full">
            <p className="lg:text-[20px] text-[15px] font-[600] mb-[20px]">Transaction History</p>
          </div>
          <div className="w-[10%] md:w-auto h-12 px-4 py-3 bg-white rounded-2xl border border-black border-opacity-10 flex flex-col justify-start items-start gap-2.5">
            <div className="flex items-center gap-1">
              <span className="w-6 h-6">
                <BiPlus />
              </span>
              <div className="text-black text-[11px] font-normal capitalize">
              request payout
              </div>
            </div>
          </div>
        </div>

        <div className="lg:overflow-hidden w-full overflow-x-scroll">
          <DataTable data={data} columns={columns} />
        </div>

      </div>
    </div>
  )
}

export default Payout