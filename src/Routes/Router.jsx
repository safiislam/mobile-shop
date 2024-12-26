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
import ProductDetails from "../Pages/Product/ProductDetails";
import PrivetRoutes from './PrivetRoutes';
import SellerRoutes from "./SellerRoutes";
import AdminRoutes from "./AdminRoutes";
import UserWishlist from "../Pages/UserWishlist/UserWishlist";


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
                path: '/product-details/:id',
                element: <ProductDetails />
            },
            {
                path: '/about',
                element: <About />
            }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivetRoutes><DashboardLayout /></PrivetRoutes>,
        children: [
            {
                path: 'wishlist',
                element: <UserWishlist />
            },
            {
                path: 'add-product',
                element: <SellerRoutes ><AddProduct /></SellerRoutes>
            },
            {
                path: 'manage-product',
                element: <SellerRoutes><ManageProduct /></SellerRoutes>
            },
            {
                path: 'manage-users',
                element: <AdminRoutes><ManageUsers /></AdminRoutes>
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


