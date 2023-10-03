import {useState } from 'react';
import { Link } from 'react-router-dom';

const MeetUpHome = () => {
    const handelCreatForm = (event) => {
        event.preventDefault()
        const form = event.target
        const meetId = form.meetId.value
        const password = form.password.value
        const date = form.date.value
        const time = form.time.value
        const today = new Date().toLocaleDateString()
        const data = { meetId, password, date, time, today }
        console.log(data);
    }
    
    const [result1,setResult1]= useState('');
    const res = Math.random().toString(26).substring(10)
    const res1 = Math.random().toString(26).substring(10)
    const res2 = Math.random().toString(26).substring(10)
    const result  = (res+"-"+res1+"-"+res2) 
    console.log(result);
    
    const handelMordalOpen =()=>{
       setResult1(result)
        document.getElementById('my_modal_2').showModal()
    
    }

    
    return (
        <div>
            <div className="mt-10 text-center">
                <h1 className="text-blue-700 text-4xl">Unlimited video Meetings with unlimited people. </h1>
                <h1 className="text-blue-700 text-4xl">There is no subscription and no ads. Totally free.</h1>
            </div>
            <div className='ml-60 mt-10'>
                <div>
                    <button className="btn btn-primary ml-20" onClick={() => handelMordalOpen()}>New MeetUp</button>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            <h3 className="font-bold text-lg pt-4"><Link to={`/meetup/${result1}`} >start instant meeting</Link></h3>

                            {/* Modal 1 for Create a new MeetUp for later  */}
                            <button className="font-bold text-lg" onClick={() => document.getElementById('my_modal_3').showModal()}>Create a new MeetUp for later</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    {/*  */}
                                    <form onSubmit={handelCreatForm} className="text-center">
                                        <input type="text" placeholder="MeetUp Id" name="meetId" className="input input-bordered input-primary w-full max-w-xs" />
                                        {/* <h1 className="btn btn-primary">Genaret</h1> */}
                                        <br />
                                        <input type="text" placeholder="Set MeetUp Password" name="password" className="input input-bordered input-primary w-full max-w-xs mt-5" /><br />
                                        <input type="date" name="date" className="input input-bordered input-primary w-full max-w-xs mt-5" /><br />
                                        <input type="time" name="time" className="input input-bordered input-primary w-full max-w-xs mt-5" /><br />
                                        <input className="btn btn-primary mt-3 justify-center" type="submit" value='Create' />
                                    </form>

                                </div>

                            </dialog>
                        </div>
                        <form method="dialog" className="modal-backdrop">
                            <button>close</button>
                        </form>
                    </dialog>

                </div>
                <div className="ml-20 mt-5">
                    <form>
                        <input type="text" placeholder="MeetUp Id" className="input input-bordered input-primary w-full max-w-xs" /><br />
                        <input type="text" placeholder="MeetUp Password" className="input input-bordered input-primary w-full max-w-xs mt-5" /><br />
                        <input className="btn btn-primary mt-3" type="submit" value='Join' />
                    </form>
                </div>
            </div>

        </div>
    );
};

export default MeetUpHome;