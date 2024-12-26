import { useState } from "react";
import getAuth from "../Hooks/getAuth";
import { useNavigate } from "react-router-dom";
import useGetMe from "../Hooks/useGetMe";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";

const Dropdown = () => {
    const [open, setOpen] = useState(false);
    const { user, logOut } = getAuth()
    console.log(user);
    const navigate = useNavigate()
    const { getMe } = useGetMe()
    const role = getMe?.role

    const handelNavigate = () => {
        if (role == "Admin") {
            navigate('/dashboard/manage-users')
        }
        else if (role == 'Seller') {
            navigate('/dashboard/add-product')
        }
        else {
            navigate('/dashboard/wishlist')
        }

    }

    return (
        <div className="bg-gray-200 flex justify-center items-center dark:bg-gray-500">
            <div className="bg-white dark:bg-gray-800 w-64 shadow flex justify-center items-center relative">
                <div
                    onClick={() => setOpen(!open)}
                    className={`relative border-b-4 border-transparent py-3 cursor-pointer ${open ? "border-indigo-700 transform transition duration-300" : ""
                        }`}
                >
                    {/* User Info */}
                    <div className="flex justify-center items-center space-x-3">
                        <div className="w-10 h-10 rounded-full overflow-hidden border-2 dark:border-white border-gray-900">
                            {
                                user.photoURL ? <img
                                    src={user.photoURL}
                                    alt="User"
                                    className="w-full h-full object-cover"
                                />
                                    :
                                    <span className="flex justify-center items-center"><FaUserCircle size={34} /></span>
                            }

                        </div>
                        <div className="font-semibold dark:text-white text-gray-900 text-lg">
                            <div>{user.displayName}</div>
                        </div>
                    </div>

                    {/* Dropdown Menu */}
                    {open && (
                        <div
                            className="absolute w-60 px-5 py-3 dark:bg-gray-800 bg-white rounded-lg shadow border dark:border-transparent mt-5 z-10"
                            onClick={(e) => e.stopPropagation()} // Prevents dropdown from closing when clicking inside
                        >
                            <ul className="space-y-3 dark:text-white">
                                <li className="font-medium">
                                    <p className="py-3">Email: {user.email}</p>
                                    <span
                                        onClick={handelNavigate}
                                        className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-indigo-700"
                                    >
                                        <div className="mr-3">
                                            <MdOutlineDashboardCustomize />
                                        </div>
                                        Dashboard
                                    </span>
                                </li>

                                <hr className="dark:border-gray-700" />
                                <li className="font-medium">
                                    <a
                                        onClick={() => {
                                            logOut()
                                        }}
                                        href="#"
                                        className="flex items-center transform transition-colors duration-200 border-r-4 border-transparent hover:border-red-600"
                                    >
                                        <div className="mr-3 text-red-600">
                                            <svg
                                                className="w-6 h-6"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth="2"
                                                    d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                                                ></path>
                                            </svg>
                                        </div>
                                        Logout
                                    </a>
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Dropdown;
