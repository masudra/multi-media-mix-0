
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

const MeetUpHome = () => {
    return (
        <div>
            <div className="mt-10 text-center">
                <h1 className="text-blue-700 text-4xl">Unlimited video Meetings with unlimited people. </h1>
                <h1 className="text-blue-700 text-4xl">There is no subscription and no ads. Totally free.</h1>
            </div>
            <div className="ml-80 mt-10">
                <div>
                    <button className="btn btn-primary " onClick={() => document.getElementById('my_modal_2').showModal()}>New MeetUp</button>
                    <dialog id="my_modal_2" className="modal">
                        <div className="modal-box">
                            {/* @@@@@@*******@@@@@@@ */}
                            <button className="font-bold text-lg" onClick={() => document.getElementById('my_modal_3').showModal()}>Start at the instant Meeting</button>
                            <dialog id="my_modal_3" className="modal">
                                <div className="modal-box">
                                    <form method="dialog">
                                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    </form>
                                    {/*  */}
                                    <form>
                                        <input type="text" placeholder="MeetUp Id" className="input input-bordered input-primary w-full max-w-xs" /><br />
                                        <input type="text" placeholder="MeetUp Password" className="input input-bordered input-primary w-full max-w-xs mt-5" /><br />
                                        <input className="btn btn-primary mt-3" type="submit" value='Join' />
                                    </form>
                                </div>
                            </dialog>

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
                <div className=" mt-5">
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