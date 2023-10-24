import { AiOutlineHome } from "react-icons/ai";
import { IoPeopleOutline } from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import AddStory from "./AddStory/AddStory";

const MainContents = () => {
    return (
        <div>
            <div className="flex  justify-around">
                <h1 ><AiOutlineHome className="w-[30px] h-[30px]"></AiOutlineHome></h1>
                <h1><IoPeopleOutline className="w-[30px] h-[30px]"></IoPeopleOutline></h1>
                <h1><GrGroup className="w-[30px] h-[30px]"></GrGroup></h1>
            </div>
            <AddStory></AddStory>
        </div>
    );
};

export default MainContents;