import React from 'react'

const Card = ({label, head}) => {
  return(
    <div className="flex flex-col gap-2">
      <span className="block mb-2 text-sm font-medium text-[rgba(0,0,0,0.5)]">{label}</span>
      <h3 className="block mb-2 text-sm font-[600] text-black">{head}</h3>
    </div>
  )
}

const PaymentInfo = () => {
  return (
    <>
      <div className="">
        <div className="py-12 px-5 mb-4 rounded-2xl">
          <div className="flex flex-col gap-10">
            <h3 className='text-[18px] font-semibold'>Wallet Information</h3>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <Card label={"Full Name"} head={"Kelvin Egodubu"}/>
              <Card label={"Voucher Account Id"} head={"123456789"}/>
              <Card label={"Email Address"} head={"kelvinegodu@gmail.com"}/>
            </div>
          </div>
          <div className="flex mt-9 flex-col gap-10">
            <h3 className='text-[18px] font-semibold'>Payment Information</h3>
            <div className="grid gap-6 mb-6 md:grid-cols-2">
              <Card label={"Account Number"} head={"1234567891"}/>
              <Card label={"Account Name"} head={"Kelvin Egodubu"}/>
              <Card label={"Bank Name"} head={"WEMA Bank"}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PaymentInfo