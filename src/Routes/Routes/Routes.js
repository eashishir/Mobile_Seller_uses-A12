import { createBrowserRouter } from "react-router-dom";
import DashboaredLayout from "../../Layout/DashboaredLayout";
import Main from "../../Layout/Main/Main";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import Blogs from "../../Pages/Blogs/Blogs";

import MyOrders from "../../Pages/Dashboared/MyOrders/MyOrders";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import SignUp from "../../Pages/Signup/SignUp";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

 const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <SignUp></SignUp>,
            },
            {
                path: '/products/:id',
                loader: ({ params }) => fetch(`http://localhost:5000/products/${ params.id }`),
                element:<PrivateRoute><AllProducts></AllProducts></PrivateRoute> ,
            }
        ]
    },
    {
       path: '/dashboard',
       element: <PrivateRoute><DashboaredLayout></DashboaredLayout></PrivateRoute> ,
       children:[
        {
            path:'/dashboard',
            element:<MyOrders></MyOrders>
        }
       ]
    }
])

export default router;