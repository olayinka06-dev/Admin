import React from 'react';
import { userDataSet } from './userDataSet';
import DataTable from '../Table/DataTable';

const Users = () => {
  const data = userDataSet;

  let columns = [
    { title: "User Name" },
    { title: "Email Address" },
    { title: "Phone no." },
    

    {
      title: "Amount",
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
    <div className="">
      <div className="container-fluid bg-[#FFFFFF] py-[48px] rounded-[20px]">
        <div className="w-full flex justify-between">
          <div className="w-full">
            <p className="lg:text-[20px] text-[15px] font-[600] mb-[20px]">Transaction History</p>
          </div>
        </div>
        <div className="lg:overflow-hidden w-full overflow-x-scroll">
          <DataTable data={data} columns={columns} />
        </div>

      </div>
    </div>
  );
}

export default Users