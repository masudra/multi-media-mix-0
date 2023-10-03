import { BsFillPeopleFill } from 'react-icons/bs';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { HiOutlineLockClosed } from 'react-icons/hi2';
import { BiMessageDetail } from 'react-icons/bi';

const Footer = () => {
    return (
        <div className="fixed bottom-4  w-full">
            <div className=" flex bg-black text-white h-[70px]">
                <div className="flex gap-5 mx-auto  ">
                    <h1 className="mt-3">hello</h1>
                    <h1 className="mt-3">hello</h1>
                    <h1 className="mt-3">hello</h1>
                    <h1 className="mt-3">hello</h1>
                </div>
                <div className="flex justify-end gap-7 mt-4 mr-7">
                    <h1><AiOutlineInfoCircle className='w-[25px] h-[25px]'></AiOutlineInfoCircle></h1>
                    <h1><BsFillPeopleFill className='w-[25px] h-[25px]'></BsFillPeopleFill></h1>
                    <h1><BiMessageDetail className='w-[25px] h-[25px]'></BiMessageDetail></h1>
                    <h1><HiOutlineLockClosed className='w-[25px] h-[25px]'></HiOutlineLockClosed></h1>
                </div>
            </div>

        </div>
    );
};

export default Footer;