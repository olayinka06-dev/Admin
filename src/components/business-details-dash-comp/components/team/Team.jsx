import { BsArrowLeft } from "react-icons/bs";
import { RxBox } from "react-icons/rx";
import TeamTable from "./TeamTable";

export default function TeamHome() {
    return (
        <div className="container">
            
            <div className="container mt-[0px] w-full rounded-[10px] h-[60vh] bg-[#fff]">
                <TeamTable />
            </div>
        </div>
    )
}