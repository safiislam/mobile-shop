import { FaTrash } from "react-icons/fa"; // Import a delete icon
import useGetWishlist from "../../Hooks/useGetWishlist";
import axios from "axios";

const UserWishlist = () => {
    const { wishlist, refetch } = useGetWishlist(); // Assuming wishlist is an array of objects

    const handleDelete = async (id) => {
        console.log(`Delete item with ID: ${id}`);
        const { data } = await axios.patch(
            `${import.meta.env.VITE_SERVER_URL}/delete-wishlist`, { id },
            {
                headers: { Authorization: localStorage.getItem("accessToken") },
            }
        );
        if (data) {
            refetch()
        }
    };

    return (
        <div className="p-6 bg-[#111827] min-h-screen">
            <h2 className="text-3xl font-bold text-white mb-6">User Wishlist</h2>
            {wishlist && wishlist.length > 0 ? (
                <table className="table-auto w-full border-collapse border border-gray-700 text-gray-300">
                    <thead>
                        <tr className="bg-gray-800 text-left">
                            <th className="border border-gray-700 px-4 py-3">Image</th>
                            <th className="border border-gray-700 px-4 py-3">Name</th>
                            <th className="border border-gray-700 px-4 py-3">Brand</th>
                            <th className="border border-gray-700 px-4 py-3">Category</th>
                            <th className="border border-gray-700 px-4 py-3">Price</th>
                            <th className="border border-gray-700 px-4 py-3">Quantity</th>
                            <th className="border border-gray-700 px-4 py-3">Rating</th>
                            <th className="border border-gray-700 px-4 py-3">Description</th>
                            <th className="border border-gray-700 px-4 py-3">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {wishlist.map((item) => (
                            <tr key={item._id} className="hover:bg-gray-700">
                                <td className="border border-gray-700 px-4 py-2">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        className="w-16 h-16 object-cover rounded"
                                    />
                                </td>
                                <td className="border border-gray-700 px-4 py-2">{item.name}</td>
                                <td className="border border-gray-700 px-4 py-2">{item.brand}</td>
                                <td className="border border-gray-700 px-4 py-2">{item.category}</td>
                                <td className="border border-gray-700 px-4 py-2">${item.price}</td>
                                <td className="border border-gray-700 px-4 py-2">{item.quantity}</td>
                                <td className="border border-gray-700 px-4 py-2">{item.rating}</td>
                                <td className="border border-gray-700 px-4 py-2">{item.shortDescription}</td>
                                <td className="border border-gray-700 px-4 py-2 text-center">
                                    <button
                                        onClick={() => handleDelete(item._id)}
                                        className="text-red-500 hover:text-red-300"
                                    >
                                        <FaTrash size={16} />
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p className="text-gray-500 text-center">No items in your wishlist.</p>
            )}
        </div>
    );
};

export default UserWishlist;
