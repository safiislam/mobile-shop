/* eslint-disable react/prop-types */
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

export const categories = ["Electronics", "Fashion", "Home Appliances", "Books", "Toys"];
export const brands = ["Samsung", "Apple", "Sony", "LG", "Nike"];

const EditProductModal = ({ product, isOpen, onClose, refetch }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({ defaultValues: product });

    const [loading, setLoading] = useState(false);

    const onSubmit = async (data) => {
        delete data._id;
        setLoading(true);
        try {
            const res = await axios.patch(
                `${import.meta.env.VITE_SERVER_URL}/product/${product._id}`,
                data,
                {
                    headers: { Authorization: localStorage.getItem("accessToken") },
                }
            );

            if (res.data) {
                refetch();
                onClose();
            }
        } catch (error) {
            console.error("Error updating product:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleClose = () => {
        reset();
        onClose();
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
            <div className="bg-gray-800 text-white p-6 rounded-md w-full max-w-lg max-h-screen overflow-auto">
                <h2 className="text-2xl font-bold mb-4">Edit Product</h2>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
                    {/* Product Name */}
                    <div>
                        <label className="block mb-2 font-semibold">Product Name</label>
                        <input
                            {...register("name", { required: "Product name is required" })}
                            type="text"
                            placeholder="Enter product name"
                            className="w-full p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring focus:ring-indigo-500"
                        />
                        {errors.name && <span className="text-red-500 text-sm">{errors.name.message}</span>}
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block mb-2 font-semibold">Category</label>
                        <select
                            {...register("category", { required: "Category is required" })}
                            className="w-full p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring focus:ring-indigo-500"
                        >
                            <option value="" disabled>Select category</option>
                            {categories.map((category, index) => (
                                <option key={index} value={category}>
                                    {category}
                                </option>
                            ))}
                        </select>
                        {errors.category && <span className="text-red-500 text-sm">{errors.category.message}</span>}
                    </div>

                    {/* Brand */}
                    <div>
                        <label className="block mb-2 font-semibold">Brand</label>
                        <select
                            {...register("brand", { required: "Brand is required" })}
                            className="w-full p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring focus:ring-indigo-500"
                        >
                            <option value="" disabled>Select brand</option>
                            {brands.map((brand, index) => (
                                <option key={index} value={brand}>
                                    {brand}
                                </option>
                            ))}
                        </select>
                        {errors.brand && <span className="text-red-500 text-sm">{errors.brand.message}</span>}
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block mb-2 font-semibold">Price</label>
                        <input
                            {...register("price", {
                                required: "Price is required",
                                valueAsNumber: true,
                            })}
                            type="number"
                            placeholder="Enter price"
                            className="w-full p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring focus:ring-indigo-500"
                        />
                        {errors.price && <span className="text-red-500 text-sm">{errors.price.message}</span>}
                    </div>

                    {/* Quantity */}
                    <div>
                        <label className="block mb-2 font-semibold">Quantity</label>
                        <input
                            {...register("quantity", {
                                required: "Quantity is required",
                                valueAsNumber: true,
                            })}
                            type="number"
                            placeholder="Enter quantity"
                            className="w-full p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring focus:ring-indigo-500"
                        />
                        {errors.quantity && <span className="text-red-500 text-sm">{errors.quantity.message}</span>}
                    </div>

                    {/* Rating */}
                    <div>
                        <label className="block mb-2 font-semibold">Rating</label>
                        <input
                            {...register("rating", {
                                required: "Rating is required",
                                valueAsNumber: true,
                                min: { value: 0, message: "Rating must be at least 0" },
                                max: { value: 5, message: "Rating cannot exceed 5" },
                            })}
                            type="number"
                            step="0.1"
                            placeholder="Enter rating (0-5)"
                            className="w-full p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring focus:ring-indigo-500"
                        />
                        {errors.rating && <span className="text-red-500 text-sm">{errors.rating.message}</span>}
                    </div>

                    {/* Short Description */}
                    <div>
                        <label className="block mb-2 font-semibold">Short Description</label>
                        <textarea
                            {...register("shortDescription", { required: "Description is required" })}
                            placeholder="Enter a short description"
                            className="w-full p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring focus:ring-indigo-500"
                        ></textarea>
                        {errors.shortDescription && (
                            <span className="text-red-500 text-sm">{errors.shortDescription.message}</span>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end space-x-3">
                        <button
                            type="button"
                            onClick={handleClose}
                            className="px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-md text-white"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-4 py-2 bg-indigo-600 hover:bg-indigo-700 rounded-md text-white font-bold"
                        >
                            {loading ? "Updating..." : "Update Product"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProductModal;
