"use client";
import React, { useState } from "react";
import Link from "next/link";
import { BiChevronLeft } from "react-icons/bi";

function Sidebar({ MenuData, handleTabClick, activeTab }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };


  return (
    <>
      <aside
        id="cta-button-sidebar"
        className={`block 
            duration-300 h-[64] rounded-2xl relative  `}
        aria-label="Sidebar"
      >
        <div className={` w-72 h-[auto] bg-white rounded-2xl mb-4`}>
          <div className="  px-3">
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
        <div className={`lg:w-72 w-full  h-[auto] bg-white rounded-2xl`}>
          <div className="lg:px-10 flex flex-col justify-center lg:items-start items-center lg:justify-start px-4 py-14 ">
            <ul
              className="bullet-line-list flex lg:flex-col lg:gap-0 gap-4 flex-row border-t-[2px] lg:border-t-[0px] lg:border-s-[2px] border-dotted border-[black] relative lg:pl-8 lg:space-y-4 capitalize"
            >
              {MenuData.map((menu, index) => (
                <li className="relative mt-4 lg:mt-0 flex items-start" key={index}>
                  <div
                    className={`w-4 absolute h-4 border-2 bottom-[200px] lg:top-0 lg:left-[-40px] ${
                      activeTab === index
                        ? "border-[#0CF] bg-[#0CF]"
                        : " border-[rgba(0,0,0,0.30)]"
                    } rounded-full bg-white
                    ${
                      index === 1 || index === 2 || index ==3 ||index === 4 ? 'lg:top-[4px] top-[-24px]' : 'lg:top-0 top-[-24px]'
                    }
                    `}
                  ></div>
                  <span
                    onClick={() => handleTabClick(index)}
                    className={`ml-0 lg:ml-1 text-[11px] lg:text-[15.56px] cursor-pointer ${
                      activeTab === index
                        ? "text-[#0CF]"
                        : "text-[rgba(0,0,0,0.50)]"
                    }`}
                  >
                    {menu}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;
