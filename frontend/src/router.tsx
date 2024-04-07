import SidebarLayout from "./layouts/SidebarLayout";
import { RouteObject } from 'react-router';
// import Settings from "./pages/Settings";
// import AllProduct from "./pages/AllProduct";
// import AddProduct from "./pages/AddProduct";
// import OrderList from "./pages/OrderList";
// import OrderDetails from "./pages/OrderDetails";
// import MyOrderList from "./pages/MyOrderList";
// import MyOrderDetails from "./pages/MyOrderDetails";
import Home from "./pages/Home";
import Signup from "./pages/SignUp";
import BaseLayout from "./layouts/BaseLayout";
import Login from "./pages/Login";
import { useSelector } from "react-redux";
import { RootState} from './app/store';
import {Navigate } from 'react-router-dom'
import * as React from "react";
// import Dashboard from "./pages/Dashboard";

interface ProtectedProps  { 
    children: React.ReactNode
 }

const Protected = (props : ProtectedProps) => {
    // console.log("protected")
    // const user = useSelector((state: RootState)=> state?.user?.user);
    const token = localStorage.getItem('token');
    return token? <>{props.children}</> :  <Navigate to="/signup" />;
};
const Private = (props : ProtectedProps) => {
    const token = localStorage.getItem('token');
    const user = useSelector((state: RootState)=> state?.user?.user);
    return token && user?.role !== 'ADMIN' ? <Navigate to="/" /> : <>{props.children}</>;
};
const Public = (props : ProtectedProps) => {
    const user = useSelector((state: RootState)=> state?.user?.user);
    return Object.keys(user).length === 0 && user?.role !== 'USER' ? <Navigate to="/" /> : <>{props.children}</>;
};
const LoggedIn = (props : ProtectedProps) => {
    // const user = useSelector((state: RootState)=> state?.user?.user);
    const token = localStorage.getItem('token');
    return token ? <Navigate to="/" /> : <>{props.children}</>;
};

const routes: RouteObject[] = [
    {
        path: '/',
        element: <BaseLayout />,
        children: [
            {
                path: 'signup',
                element: <LoggedIn><Signup /></LoggedIn>
            },
            {
                path: 'login',
                element: <LoggedIn><Login /></LoggedIn>
            },
            {

            path: '',
            element: <Protected><SidebarLayout /></Protected>,
            children: [
                {
                    path: '',
                    element: <Home />
                },
                // {
                //     path: 'dashboard',
                //     element: <Dashboard />
                // },
                // {
                //     path: 'setting',
                //     element: <Settings />
                // },
                
                // {
                //     path: 'logout',
                //     element: <Settings />
                // },
                // {
                //     path: 'all_products',
                //     children: [
                //         {
                //             path: '',
                //             element: <Private><AllProduct /></ Private>
                //         },
                //         {
                //             path: 'add_product',
                //             element: <Private><AddProduct /></ Private>
                //         }
                //     ]
                // },
                // {
                //     path: 'order_list',
                //     children: [
                //         {
                //             path: '',
                //             element: <Private><OrderList /></Private>
                //         },
                //         {
                //             path: 'order_details',
                //             element: <Private><OrderDetails /></Private>
                //         }
                //     ]
                // },
                // {
                //     path: 'my_order',
                //     children: [
                //         {
                //             path: '',
                //             element: <Public><MyOrderList /></Public>
                //         },
                //         {
                //             path: 'my_order_details',
                //             element: <Public><MyOrderDetails /></Public>
                //         }
                //     ]
                // }
            ]
        }]
    }

];

export default routes;