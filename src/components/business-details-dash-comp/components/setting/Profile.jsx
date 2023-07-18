import React from "react";
// import Link from "next/link";
import { LiaTimesSolid } from "react-icons/lia";
import { useState } from "react";
const Profile = () => {
    const [isChangePassword, setChangePassword] = useState(false);
    const [isInviteTeam, setInviteTeam] = useState(false);
    const [isGoback, setIsGoback] = useState(false);

    const ChangePassword = () => {
        setChangePassword(!isChangePassword);
        setInviteTeam(false)
    };
    const goBack = () => {
        setIsGoback(!isGoback)
        setChangePassword(false)
    };
    return (
        <div className="">
            <div className="container lg:mt-[20px] mt-[10px] lg:space-x-[20px] space-x-[10px] flex">
                <div className="container">
                    <label htmlFor="" className="lg:text-sm text-sm font-[400] leading-[50px]" >First Name</label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px]  outline-none" placeholder="e.g Jays" type="text" name="" id="" />
                </div>
                <div className="container">
                    <label htmlFor="" className="lg:text-sm text-sm font-[400] leading-[50px]">Last Name</label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full  lg:py-[13px] py-[5px] lg:px-[20px] px-[10px]  rounded-[10px] outline-none" placeholder="e.g Alimi" type="text" name="" id="" />
                </div>
            </div>
            <div className="container mx-auto lg:mt-[20px] mt-[10px]">
                <div className="container w-full">
                    <label htmlFor="" className="lg:text-sm text-sm font-[400] leading-[50px]">Email Address</label><br />
                    <input className="border border-[rgba(0,0,0,0.1)] w-full  py-[13px] px-[20px] rounded-[10px] outline-none" placeholder="e.g jaysalimi.msme@gmail.com" type="email" name="" id="" />
                </div>
            </div>
            <div className="container mx-auto lg:mt-[20px] mt-[10px]">
                <div className="container w-full">
                    <label htmlFor="" className="lg:text-sm text-sm font-[400] leading-[50px]">Phone Number</label><br />
                    <div className="flex space-x-[10px] border border-[rgba(0,0,0,0.1)] w-full py-[13px] px-[20px] rounded-[10px] outline-none">
                        <select className="outline-none border-r-2 text-sm" name="" id="">
                            <option value="">+234</option>
                            <option value="">+1</option>
                        </select>
                        <input className="outline-none" placeholder="e.g 09034999999" type="" name="" id="" />
                    </div>
                </div>
            </div>
            <div className="container mx-auto lg:mt-[20px] mt-[10px]">
                <label htmlFor="" className="lg:text-sm text-sm font-[400] leading-[50px]" >Your Role</label><br />
                <div className="container w-full lg:space-x-[20px] space-x-[10px] flex">
                    <input className="border border-[rgba(0,0,0,0.1)] w-full  py-[5px] px-[20px] rounded-[10px] outline-none" placeholder="e.g Owner" type="email" name="" id="" />
                    <button htmlFor="" className="lg:text-[12px] border border-[rgba(0,0,0,0.1)] rounded-[10px] lg:w-[20%] w-full text-sm font-[500] leading-[50px]">+ Invite Team Member</button>
                </div>
            </div>
            <div className="container rounded-[10px] w-full lg:py-[25px] py-[10px] lg:px-[20px] px-[10px] border border-[rgba(0,0,0,0.1)] lg:mt-[50px] mt-[20px]">

                <div className=" justify-between flex">
                    <label htmlFor="" className=" lg:pt-[12px] text-[12px] font-[400]" >Password</label>
                    <button className=" relative cursor-pointer text-[10px] border-none" onClick={ChangePassword}>
                        <p className="lg:py-[10px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] border border-[rgba(0,0,0,0.1)] text-[rgba(0,0,0,1)] text-[12px] font-[400] cursor-pointer">Change Password</p>
                    </button>
                    {isChangePassword && (
                        <div className=" bg-[#FFFFFF] lg:w-[500px] w-[250px] shadow py-[10px] px-[20px] rounded-[10px] z-20 absolute lg:top-[45%] top-[29%] lg:right-[25%] right-[55px]">
                            <div className="container flex  items-end justify-end">
                                <button onClick={goBack}><LiaTimesSolid /></button>
                            </div>
                            <div className="border-b-2">
                                <p className="lg:text-[16px] lg:pb-[12px] lg:pt-[12px] text-sm font-[400]">Change Password</p>
                            </div>
                            <div className="container mx-auto lg:mt-[20px] mt-[10px]">
                                <div className="container w-full">
                                    <label htmlFor="" className="text-sm font-[400] leading-[50px]">Old Password<span className="text-[red]">*</span></label><br />
                                    <input className="border border-[rgba(0,0,0,0.1)] w-full  py-[13px] px-[20px] rounded-[10px] outline-none" placeholder="*******************" type="text" name="" id="" />
                                </div>
                            </div>
                            <div className="container mx-auto lg:mt-[20px] mt-[10px]">
                                <div className="container w-full">
                                    <label htmlFor="" className="text-sm font-[400] leading-[50px]">New Password<span className="text-[red]">*</span></label><br />
                                    <input className="border border-[rgba(0,0,0,0.1)] w-full  lg:py-[13px] py-[5px] lg:px-[20px] px-[10px] rounded-[10px] outline-none" placeholder="*******************" type="text" name="" id="" />
                                </div>
                            </div>
                            <div className="container w-full mx-auto items-end justify-end text-right lg:mt-[20px] mt-[10px]">
                                <button className="bg-[#0CF] lg:py-[10px] py-[5px] lg:px-[20px] px-[10px] rounded-[13px] text-white text-sm border-none items-end justify-end">Save Change</button>
                            </div>

                        </div>
                    )}
                </div>
            </div>
            <div className="container rounded-[10px] w-full lg:py-[29px] py-[10px] lg:px-[20px] px-[10px] border border-[rgba(0,0,0,0.1)] lg:mt-[50px] mt-[20px]">

                <div className=" justify-between flex">
                    <label htmlFor="" className="text-[12px] font-[400]" >Two-factor Authentication</label>
                    <input
                        className="h-3.5 w-8 items-end appearance-none rounded-[0.4375rem] bg-neutral-300 before:pointer-events-none before:absolute before:h-3.5 before:w-3.5 before:rounded-full before:bg-transparent before:content-[''] after:absolute after:z-[2] after:-mt-[0.1875rem] after:h-5 after:w-5 after:rounded-full after:border-none after:bg-neutral-100 after:shadow-[0_0px_3px_0_rgb(0_0_0_/_7%),_0_2px_2px_0_rgb(0_0_0_/_4%)] after:transition-[background-color_0.2s,transform_0.2s] after:content-[''] checked:bg-primary checked:after:absolute checked:after:z-[2] checked:after:-mt-[3px] checked:after:ml-[1.0625rem] checked:after:h-5 checked:after:w-5 checked:after:rounded-full checked:after:border-none checked:after:bg-primary checked:after:shadow-[0_3px_1px_-2px_rgba(0,0,0,0.2),_0_2px_2px_0_rgba(0,0,0,0.14),_0_1px_5px_0_rgba(0,0,0,0.12)] checked:after:transition-[background-color_0.2s,transform_0.2s] checked:after:content-[''] hover:cursor-pointer focus:outline-none focus:ring-0 focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[3px_-1px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-5 focus:after:w-5 focus:after:rounded-full focus:after:content-[''] checked:focus:border-primary checked:focus:bg-primary checked:focus:before:ml-[1.0625rem] checked:focus:before:scale-100 checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] dark:bg-neutral-600 dark:after:bg-neutral-400 dark:checked:bg-primary dark:checked:after:bg-primary dark:focus:before:shadow-[3px_-1px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[3px_-1px_0px_13px_#3b71ca]"
                        type="checkbox"
                        role="switch"
                        id="flexSwitchCheckDefault" />

                </div>
            </div>
            <div className="container w-full mx-auto items-end justify-end text-right lg:mt-[20px] mt-[10px]">
                <button className="bg-[#0CF] lg:py-[10px] py-[5px] lg:px-[20px] px-[10px] rounded-[13px] text-white text-[12px] border-none items-end justify-end">Save Change</button>
            </div>
        </div>
    )
};
export default Profile;