"use client";
import React, { useState } from 'react';
import Profile from './settingsData/Profile';
import SettingContact from './settingsData/Contact';
import SettingCompliance from './settingsData/SettingCompliance';
import SettingPaymentInfo from './settingsData/PaymentInfo';
import SettingPreference from './settingsData/Preference';
import SettingApi from './settingsData/SettingApi';

const Settings = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const tabOptionData = [
    "profile",
    "contact",
    "compliance",
    "payment info.",
    "preferences",
    "aPI Key & webhook",
  ];

  const settingTabData = [
    {
      content: (<Profile/>)
    },
    {
      content: (<SettingContact/>)
    },
    {
      content: (<SettingCompliance/>)
    },
    {
      content: (<SettingPaymentInfo/>)
    },
    {
      content: (<SettingPreference/>)
    },
    {
      content: (<SettingApi/>)
    },
  ]

  const handleClickOption = (i) => {
    setCurrentTab(i)
  }


  return (
    <>
      <div className="">
        <div className="py-12 px-5 mb-4 rounded-2xl">
          <h3 className='text-[18px] font-semibold'>Wallet Information</h3>
          <div className="w-full grid lg:grid-cols-6 md:grid-cols-5 gap-x-2 mt-10 grid-cols-3">
            {
              tabOptionData.map((tod, i) => (
                <button className={`text-[11px] rounded-2xl px-0 py-3 ${currentTab === i ? "border border-[#0CF] bg-[#0CF] text-white" : "border border-[rgba(0,0,0,0.5)]"} text-[rgba(0,0,0,0.5)]`} key={i} onClick={() => handleClickOption(i)}>{tod}</button>
              ))
            }
          </div>
          <div className="">
            {
              settingTabData[currentTab].content
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Settings