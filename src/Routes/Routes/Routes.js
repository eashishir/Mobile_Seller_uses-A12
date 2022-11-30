import { createBrowserRouter } from "react-router-dom";
import DashboaredLayout from "../../Layout/DashboaredLayout";
import Main from "../../Layout/Main/Main";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import Blogs from "../../Pages/Blogs/Blogs";
import AddProducts from "../../Pages/Dashboared/AddProducts/AddProducts";
import AllUser from "../../Pages/Dashboared/AllUser/AllUser";
import ManageProducts from "../../Pages/Dashboared/ManageProducts/ManageProducts";

import MyOrders from "../../Pages/Dashboared/MyOrders/MyOrders";
import Payment from "../../Pages/Dashboared/Payment/Payment";
import Home from "../../Pages/Home/Home/Home";
import Login from "../../Pages/Login/Login";
import PageError from "../../Pages/PageError/PageError";

import SignUp from "../../Pages/Signup/SignUp";
import AdminRoute from "../AdminRoute/AdminRoute";

import PrivateRoute from "../PrivateRoute/PrivateRoute";
import SellerRoute from "../SellerRoute/SellerRoute";

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
                loader: ({ params }) => fetch(`https://my-assignment12-server.vercel.app/products/${ params.id }`),
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
        },
        {
            path:'/dashboard/allusers',
            element:<AdminRoute><AllUser></AllUser></AdminRoute>
        },
        {
            path:'/dashboard/addproducts',
            element:<SellerRoute><AddProducts></AddProducts></SellerRoute>
        },
        {
            path:'/dashboard/manageproducts',
            element:<SellerRoute><ManageProducts></ManageProducts></SellerRoute>
        },
        {
            path:'/dashboard/payment/:id',
            element:<AdminRoute><Payment></Payment></AdminRoute>,
            loader:({params}) => fetch(`https://my-assignment12-server.vercel.app/bookings/${params.id}`)
        },
       ]
    },
    { path: '*', element: <PageError></PageError>},

])

export default router;