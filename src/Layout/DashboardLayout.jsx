import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

const DashboardLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const bgColor = "bg-gray-800";
    const modalColor = "bg-gray-900";
    const sellerSidebar = [
        {
            title: 'Add Product',
            url: "/dashboard/add-product"
        },
        {
            title: 'Manage Product',
            url: "/dashboard/manage-product"
        },
        {
            title: 'Manage Users',
            url: "/dashboard/manage-users"
        },
    ]

    const sidebar = sellerSidebar

    return (
        <div className="flex h-screen">
            {/* Sidebar */}
            <div
                className={`fixed lg:static inset-y-0 left-0 transform ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                    } transition-transform duration-300 ease-in-out lg:translate-x-0 w-64 ${bgColor} text-white`}
            >
                <div className="flex flex-col h-full">
                    {/* Logo */}
                    <div className="p-4 border-b border-gray-700 text-xl font-bold">
                        Dashboard
                    </div>
                    {/* Menu */}
                    <nav className="flex-1 p-4 space-y-4">

                        {
                            sidebar.map(item => <Link
                                key={item.url}
                                to={item.url}
                                className="block px-4 py-2 rounded-md hover:bg-gray-700 transition"
                            >
                                {item.title}
                            </Link>)
                        }
                        <a
                            href="#"
                            className="block px-4 py-2 rounded-md hover:bg-gray-700 transition"
                        >
                            Logout
                        </a>
                    </nav>

                </div>
            </div>

            {/* Main Content */}
            <div className="flex-1 flex flex-col">
                {/* Top Bar */}
                <div
                    className={`flex items-center justify-between p-4 border-b ${modalColor} text-white`}
                >
                    <button
                        className="lg:hidden p-2 rounded-md hover:bg-gray-700"
                        onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4 6h16M4 12h16M4 18h16"
                            />
                        </svg>
                    </button>
                    <h1 className="text-lg font-semibold">Dashboard</h1>
                </div>

                {/* Content */}
                <div className={`flex-1 p-6 ${modalColor} text-white`}>
                    {/* <h2 className="text-2xl font-bold mb-4">Welcome to the Dashboard</h2>
                    <p>
                        This is your main content area. Customize it as per your requirements.
                        </p> */}
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;
