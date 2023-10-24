import LeftSideContents from "../LeftSideContents/LeftSideContents";
import MainContents from "../MainContents/MainContents";
import RightSideContents from "../RightSideContents/RightSideContents";


const FriendLinkHome = () => {
    return (
        <div>
            <div className="grid grid-cols-3">
                <LeftSideContents></LeftSideContents>
                <MainContents></MainContents>
                <RightSideContents></RightSideContents>
            </div>
            
        </div>
    );
};

export default FriendLinkHome;