import {
    createBrowserRouter
  } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../LayOut/Main";
import MeetUpHome from "../Pages/MeetUp/MeetUpHome/MeetUpHome";



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
       
        
      ]
    },

  ]);