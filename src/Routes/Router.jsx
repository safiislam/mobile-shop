import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layout/DashboardLayout";
import AddProduct from "../Pages/Seller/AddProduct";
import ManageProduct from "../Pages/Seller/ManageProduct";
import ManageUsers from "../Pages/Admin/ManageUsers";
import Contact from "../Pages/Contact/Contact";
import About from "../Pages/About/About";
import Product from "../Pages/Product/Product";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/product',
                element: <Product />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <DashboardLayout />,
        children: [
            {
                path: 'add-product',
                element: <AddProduct />
            },
            {
                path: 'manage-product',
                element: <ManageProduct />
            },
            {
                path: 'manage-users',
                element: <ManageUsers />
            }
        ]
    },
    {
        path: '/login',
        element: <Login />
    },
    {
        path: '/register',
        element: <Register />
    },

])


