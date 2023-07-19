import React from 'react';
import { teamDataSet } from './teamDataSet';
import DataTable from '../Table/DataTable';
import { BiPlus } from 'react-icons/bi';

const Team = () => {
  const data = teamDataSet;

  let columns = [
    { title: "Members Name" },
    { title: "Email Address" },
    { title: "Roles" },
    { title: "Activity" },
  ];
  return (
    <div className="">
      <div className="container-fluid bg-[#FFFFFF] py-[48px] rounded-[20px]">
        <div className="w-full flex justify-between">
          <div className="">
            <p className="lg:text-[20px] text-[15px] font-[600] mb-[20px]">Team Members</p>
          </div>
          <div className="">
            <button className='flex px-3 py-2 text-sm cursor-pointer items-center flex-row gap-2 border border-[rgba(0,0,0,.5)] border-solid rounded-2xl'>
              <span><BiPlus /></span>
              invite team members
            </button>
          </div>
        </div>
        <div className="lg:overflow-hidden w-full overflow-x-scroll">
          <DataTable data={data} columns={columns} />
        </div>

      </div>
    </div>
  );
}

export default Team