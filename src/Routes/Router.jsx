import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../LayOut/Main";
import MeetUpHome from "../Pages/MeetUp/MeetUpHome/MeetUpHome";
import SingelMeetUp from "../Pages/MeetUp/SingelMeetUp/SingelMeetUp";
import FriendLinkHome from "../Pages/FriendLink/FriendLinkHome/FriendLinkHome";



   export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children:[
        {
            path: '/',
            element: <Home></Home>,
        },
        {
            path: '/meetup',
            element: <MeetUpHome></MeetUpHome>,
        },
        {
            path: '/meetup/:id',
            element: <SingelMeetUp></SingelMeetUp>,
        },
        {
          path: '/friend-link-home',
          element: <FriendLinkHome></FriendLinkHome>,
      }
       
        
      ]
    },

  ]);