import { useState } from "react";

const ManageUsers = () => {
    // Sample user data
    const [users, setUsers] = useState([
        { id: 1, email: "user1@example.com", role: "User" },
        { id: 2, email: "admin@example.com", role: "Admin" },
        { id: 3, email: "user2@example.com", role: "User" },
    ]);

    const roles = ["User", "Admin", "Moderator"]; // List of roles

    const handleRoleChange = (id, newRole) => {
        const updatedUsers = users.map((user) =>
            user.id === id ? { ...user, role: newRole } : user
        );
        setUsers(updatedUsers);
        console.log(`Role updated for User ID: ${id} to ${newRole}`);
        // Implement backend role update logic here
    };

    const handleDeleteUser = (id) => {
        if (window.confirm("Are you sure you want to delete this user?")) {
            const updatedUsers = users.filter((user) => user.id !== id);
            setUsers(updatedUsers);
            console.log(`User with ID: ${id} deleted`);
            // Implement backend delete logic here
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
                    {users.map((user, index) => (
                        <tr
                            key={user.id}
                            className="border-b border-gray-700 hover:bg-gray-800"
                        >
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">{user.email}</td>
                            <td className="p-3">
                                {user.role}
                            </td>
                            <td className="p-3">
                                <select
                                    value={user.role}
                                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                                    className="p-2 rounded-md bg-gray-700 text-white focus:outline-none focus:ring focus:ring-indigo-500"
                                >
                                    {roles.map((role) => (
                                        <option key={role} value={role}>
                                            {role}
                                        </option>
                                    ))}
                                </select>
                                <button
                                    onClick={() => handleDeleteUser(user.id)}
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
