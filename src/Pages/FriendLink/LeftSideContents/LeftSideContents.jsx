import { Link } from "react-router-dom";
import { BiSolidVideos } from "react-icons/bi";
import { SiShortcut } from "react-icons/si";
import { AiOutlineShoppingCart } from "react-icons/ai";


const LeftSideContents = () => {
    return (
        <div className="ml-5 mt-5">
            <Link className="flex gap-2 " to='/videos'><BiSolidVideos className="my-auto"></BiSolidVideos>Videos</Link> 
            <Link to='/shorts' className="flex gap-2 "><SiShortcut className="my-auto"></SiShortcut>Shorts</Link>
            <Link to='' className="flex gap-2 "><AiOutlineShoppingCart className="my-auto"></AiOutlineShoppingCart>Shopping</Link>
            
        </div>
    );
};

export default LeftSideContents;