import useGetUsers from "../../Hooks/useGetUsers";
import axios from "axios";

const ManageUsers = () => {
    const { users, refetch } = useGetUsers()


    const roles = ["User", "Admin", "Seller"]; // List of roles

    const handleRoleChange = async (id, newRole) => {

        const data = { role: newRole }
        const res = await axios.patch(`${import.meta.env.VITE_SERVER_URL}/role-change/${id}`, data,
            {
                headers: { Authorization: localStorage.getItem("accessToken") },
            }
        )
        if (res) {
            refetch()
        }
    };

    const handleDeleteUser = async (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            const res = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/user/${id}`,
                {
                    headers: { Authorization: localStorage.getItem("accessToken") },
                }
            )
            if (res) {
                refetch()
            }
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-gray-800 text-white rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Manage Users</h2>
            <table className="w-full text-left bg-gray-900 rounded-md">
                <thead>
                    <tr className="text-indigo-400 border-b border-gray-700">
                        <th className="p-3">#</th>
                        <th className="p-3">Email</th>
                        <th className="p-3">Role</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {users?.map((user, index) => (
                        <tr
                            key={user._id}
                            className="border-b border-gray-700 hover:bg-gray-800"
                        >
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">{user.email}</td>
                            <td className="p-3">
                                {user.role}
                            </td>
                            <td className="p-3 space-x-6">
                                <select
                                    defaultValue={user.role}
                                    onChange={(e) => handleRoleChange(user._id, e.target.value)}
                                    className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-indigo-500"
                                >
                                    {roles.map((role) => (
                                        <option key={role} value={role}>
                                            {role}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    onClick={() => handleDeleteUser(user._id)}
                                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ManageUsers;
