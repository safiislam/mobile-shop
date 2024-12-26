import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { FaBars, FaTimes, FaBox, FaUsers, FaClipboardList, FaHome } from "react-icons/fa";
import useGetMe from "../Hooks/useGetMe";
import Loading from "../Components/Loading";
import { AiOutlineProduct } from "react-icons/ai";

const DashboardLayout = () => {
    const { getMe, isLoading } = useGetMe()
    const role = getMe?.role
    console.log(getMe);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const bgColor = "bg-gray-800";
    const modalColor = "bg-gray-900";
    const adminSidebar = [
        {
            title: "Manage Users",
            url: "/dashboard/manage-users",
            icon: <FaUsers />,
        }
    ]
    const userSidebar = [
        {
            title: "WishList",
            url: "/dashboard/wishlist",
            icon: <AiOutlineProduct />,
        }
    ]

    const sellerSidebar = [
        {
            title: "Add Product",
            url: "/dashboard/add-product",
            icon: <FaBox />,
        },
        {
            title: "Manage Product",
            url: "/dashboard/manage-product",
            icon: <FaClipboardList />,
        },

    ];

    const sidebar =
        role === 'Admin' ? adminSidebar :
            role === 'Seller' ? sellerSidebar :
                userSidebar;

    if (isLoading) {
        return <Loading />
    }
    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } lg:translate-x-0 transition-transform duration-300 ease-in-out w-64 ${bgColor} text-white z-50`}
            >
                <div className="flex flex-col h-full overflow-hidden">
                    {/* Fixed Top Bar within Sidebar */}
                    <div className="flex items-center justify-between p-4 top-0 absolute w-full border-b border-gray-700 bg-gray-800">
                        <h2 className="text-xl font-bold">Dashboard</h2>
                        <button
                            className="lg:hidden p-2 rounded-md hover:bg-gray-700"
                            onClick={() => setIsSidebarOpen(false)}
                        >
                            <FaTimes className="h-6 w-6" />
                        </button>
                    </div>

                    {/* Menu */}
                    <nav className="flex-1 p-4 mt-16 space-y-4 overflow-y-auto">
                        {sidebar.map((item) => (
                            <Link
                                key={item.url}
                                to={item.url}
                                className="flex items-center px-4 py-2 space-x-2 rounded-md hover:bg-gray-700 transition"
                            >
                                {item.icon}
                                <span>{item.title}</span>
                            </Link>
                        ))}
                        <div className="mt-96">
                            <Link
                                to="/"
                                className="flex items-center px-4 py-2 space-x-2 rounded-md hover:bg-gray-700 transition"
                            >
                                <FaHome />
                                <span>Home</span>
                            </Link>
                        </div>
                    </nav>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col lg:ml-64">
                {/* Top Bar */}
                <div
                    className={`flex items-center justify-between p-4 border-b ${modalColor} text-white`}
                >
                    <button
                        className="lg:hidden p-2 rounded-md hover:bg-gray-700"
                        onClick={() => setIsSidebarOpen(true)}
                    >
                        <FaBars className="h-6 w-6" />
                    </button>
                    <h1 className="text-lg font-semibold">Dashboard</h1>
                </div>

                {/* Content */}
                <div className={`flex-1 p-6 ${modalColor} text-white`}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
