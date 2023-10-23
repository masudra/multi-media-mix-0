import { BsFillPeopleFill } from 'react-icons/bs';
import { AiOutlineInfoCircle, AiOutlineSend } from 'react-icons/ai';
import { HiOutlineHandRaised, HiOutlineLockClosed } from 'react-icons/hi2';
import { BiMessageDetail } from 'react-icons/bi';
import { MdCallEnd, MdOutlineScreenShare } from 'react-icons/md';
import { CiMenuKebab } from 'react-icons/ci';
import { BsEmojiFrown } from 'react-icons/bs';


const Footer = () => {

    return (
        <div className="fixed bottom-1  w-full">
            <div className=" flex bg-zinc-700 text-white h-[70px]">
                <div className="flex gap-5 mx-auto my-auto  ">
                    <h1><BsEmojiFrown className='w-[30px] h-[30px]'></BsEmojiFrown></h1>
                    <h1><MdOutlineScreenShare className='w-[30px] h-[30px]'></MdOutlineScreenShare></h1>
                    <h1><HiOutlineHandRaised className='w-[30px] h-[30px]'></HiOutlineHandRaised></h1>
                    <h1><CiMenuKebab className='w-[30px] h-[30px]'></CiMenuKebab></h1>
                    <h1><MdCallEnd className='w-[30px] h-[30px]'></MdCallEnd></h1>
                </div>

                <div className="flex justify-end gap-3 my-auto mr-7">
                    {/*Information  */}

                    <label htmlFor="my-drawer-1" className="hover:bg-zinc-800 hover:rounded-full"><AiOutlineInfoCircle title=' Meetup details' className='w-[25px] h-[25px] '></AiOutlineInfoCircle></label>
                    <div className="drawer drawer-end">
                        <input id="my-drawer-1" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-side ">
                            <label htmlFor="my-drawer-1" aria-label="close sidebar" className="drawer-overlay"></label>
                            <div className="menu p-4 lg:w-[370px] w-72 h-[480px] rounded-xl  mt-5 mb-5  bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <h1 className='mt-5 ml-5 text-xl'>Meeting details</h1>
                            </div>
                        </div>
                    </div>

                    {/* Peoples */}
                    <label htmlFor="my-drawer-2" className="hover:bg-zinc-800 hover:rounded-full"><BsFillPeopleFill title='Show everyone' className='w-[25px] h-[25px]'></BsFillPeopleFill></label>
                    <div className="drawer drawer-end">
                        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-side ">
                            <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label>
                            <div className="menu p-4 lg:w-[370px] w-72 h-[480px] rounded-xl  mt-5 mb-5  bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <button className='btn bg-blue-300 text-blue-700 w-[150px] mt-5'>Add People</button>
                                <div className='mt-4'>
                                    <form>
                                        <input type="text" placeholder="search people" className="input input-bordered w-full max-w-xs" />                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Messages */}
                    <label htmlFor="my-drawer-3" className="hover:bg-zinc-800 hover:rounded-full"><BiMessageDetail title=' Message with everyone' className='w-[25px] h-[25px]'></BiMessageDetail></label>
                    <div className="drawer drawer-end">
                        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-side ">
                            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                            <div className="menu p-4 lg:w-[370px] w-72 h-[480px] rounded-xl  mt-5 mb-5  bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <div className='mt-4 '>
                                    <h1>in call Message</h1>
                                    <div className='fixed bottom-1  w-full'>
                                        <form className='flex p-2 '>
                                            <input type="text" placeholder="search people" className="input input-bordered w-full max-w-xs" />
                                            <AiOutlineSend className='fixed right-7  w-full w-[30px] h-[30px] mt-2 '></AiOutlineSend>

                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Host Control*/}
                    <label htmlFor="my-drawer-4" className="hover:bg-zinc-800  hover:rounded-full"><HiOutlineLockClosed title='Host control' className='w-[25px] h-[25px]'></HiOutlineLockClosed></label>
                    <div className="drawer drawer-end">
                        <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
                        <div className="drawer-side ">
                           <label htmlFor="my-drawer-4" aria-label="close sidebar" className="drawer-overlay"></label>
                            <div className="menu p-4 lg:w-[370px] w-72 h-[480px] rounded-xl  mt-5 mb-5  bg-base-200 text-base-content">
                                {/* Sidebar content here */}
                                <h1>hello id 4</h1>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Footer;