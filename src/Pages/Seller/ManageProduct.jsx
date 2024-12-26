import { useState } from "react";
import axios from "axios";
import useGetProducts from "../../Hooks/getProducts";
import EditProductModal from "./EditProductModal"; // Import the modal component

const ManageProduct = () => {
    const { products = [], refetch } = useGetProducts();

    // State for modal visibility and product data
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleEdit = (product) => {
        setSelectedProduct(product); // Set the selected product
        setIsModalOpen(true); // Open the modal
    };

    const handleDelete = async (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            try {
                const res = await axios.delete(
                    `${import.meta.env.VITE_SERVER_URL}/product/${id}`,
                    {
                        headers: { Authorization: localStorage.getItem("accessToken") },
                    }
                );
                if (res.data) {
                    refetch(); // Refresh the product list
                }
            } catch (error) {
                console.error("Error deleting product:", error);
            }
        }
    };

    return (
        <div className="max-w-6xl mx-auto p-6 bg-gray-800 text-white rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Manage Products</h2>
            <table className="w-full text-left bg-gray-900 rounded-md">
                <thead>
                    <tr className="text-indigo-400 border-b border-gray-700">
                        <th className="p-3">#</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Price</th>
                        <th className="p-3">Quantity</th>
                        <th className="p-3">Rating</th>
                        <th className="p-3">Image</th>
                        <th className="p-3">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product, index) => (
                        <tr
                            key={product._id}
                            className="border-b border-gray-700 hover:bg-gray-800"
                        >
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">{product.name}</td>
                            <td className="p-3">${product.price}</td>
                            <td className="p-3">{product.quantity}</td>
                            <td className="p-3">{product.rating}</td>
                            <td className="p-3">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-16 h-16 object-cover rounded-md"
                                />
                            </td>
                            <td className="p-3">
                                <button
                                    onClick={() => handleEdit(product)}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-700"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(product._id)}
                                    className="bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Edit Product Modal */}
            {isModalOpen && (
                <EditProductModal
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    product={selectedProduct}
                    refetch={refetch}
                />
            )}
        </div>
    );
};

export default ManageProduct;
