import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className=" ml-20 mt-20">

            <Link className=" text-blue-800 text-7xl" to='/meetup'>MeetUp</Link>
            
        </div>
    );
};

export default Home;