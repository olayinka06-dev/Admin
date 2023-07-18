import { BsArrowLeft } from "react-icons/bs";
import { RxBox } from "react-icons/rx";
import DisputeTable from "./DisputeTable";

export default function DisputeHome() {
    return (
        <div className="container flex space-x-[50px]">
            <div className="containter w-[25%]">
                <div className="container flex py-[20px] rounded-[10px] px-[30px] bg-[#fff] space-x-[10px] cursor-pointer" onClick={() => router.back()}>
                    <BsArrowLeft className="mt-[3px] text-[#00CCFF]" />
                    <p className="text-[#00CCFF] text-sm font-[600]">Back To Page</p>
                </div>
                <div className="container p-[40px] h-[50vh] rounded-[10px] bg-[#fff] mt-[10px]">
                    <div className="container mt-[20px] text-[rgba(0,0,0,0.5)] cursor-pointer space-x-[10px] flex">
                    <RxBox />
                    <p className="text-sm">Bank Statement</p>
                    </div>
                    <div className="container mt-[15px] text-[rgba(0,0,0,0.5)] cursor-pointer space-x-[10px] flex">
                    <RxBox />
                    <p className="text-sm">Transaction Failed</p>
                    </div>
                    <div className="container mt-[15px] text-[rgba(0,0,0,0.5)] cursor-pointer space-x-[10px] flex">
                    <RxBox />
                    <p className="text-sm">Hidden Fee</p>
                    </div>
                    <div className="container mt-[15px] text-[rgba(0,0,0,0.5)] cursor-pointer space-x-[10px] flex">
                    <RxBox />
                    <p className="text-sm">Undebited Cash</p>
                    </div>
                    <div className="container mt-[15px] text-[rgba(0,0,0,0.5)] cursor-pointer space-x-[10px] flex">
                    <RxBox />
                    <p className="text-sm">Uncredited Cash</p>
                    </div>
                    
                </div>
            </div>
            <div className="container w-[75%] rounded-[10px] h-[60vh] bg-[#fff]">
                <DisputeTable />
            </div>
        </div>
    )
}