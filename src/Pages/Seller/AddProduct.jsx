/* eslint-disable react-refresh/only-export-components */

import { useForm } from "react-hook-form";
import { cloudinaryUpload } from "../../utils/uploadImageToCloudinary";
import axios from "axios";
import { useState } from "react";



export const categories = ["Electronics", "Fashion", "Home Appliances", "Books", "Toys"];
export const brands = ["Samsung", "Apple", "Sony", "LG", "Nike"];
const AddProduct = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();
    const [loading, setLoading] = useState(false)



    const onSubmit = async (data) => {
        try {
            console.log("Submitted Data:", data);
            setLoading(true)
            // Upload image to Cloudinary
            const imageUploadResult = await cloudinaryUpload(data.image[0]);
            if (imageUploadResult?.secure_url) {
                data.image = imageUploadResult.secure_url;
            } else {
                throw new Error("Image upload failed.");
            }

            // Send product data to the server
            const res = await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/product`,
                data,
                {
                    headers: { Authorization: localStorage.getItem("accessToken") },
                }
            );

            if (res.data) {
                console.log("Product added successfully:", res.data);
                reset(); // Reset the form on success
                setLoading(false)
            } else {
                setLoading(false)
                throw new Error("Failed to add the product.");
            }
        } catch (error) {
            console.error("Error submitting the product:", error.message);
            alert("There was an error adding the product. Please try again.");
        }
    };


    return (
        <div className="max-w-3xl mx-auto p-6 bg-gray-800 text-white rounded-md shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-center">Add Product</h2>
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
                    {errors.name && (
                        <span className="text-red-500 text-sm">{errors.name.message}</span>
                    )}
                </div>

                {/* Category Dropdown */}
                <div>
                    <label className="block mb-2 font-semibold">Category</label>
                    <select
                        {...register("category", { required: "Category is required" })}
                        className="w-full p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring focus:ring-indigo-500"
                    >
                        <option value="">Select a category</option>
                        {categories.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                        ))}
                    </select>
                    {errors.category && (
                        <span className="text-red-500 text-sm">{errors.category.message}</span>
                    )}
                </div>

                {/* Brand Dropdown */}
                <div>
                    <label className="block mb-2 font-semibold">Brand</label>
                    <select
                        {...register("brand", { required: "Brand is required" })}
                        className="w-full p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring focus:ring-indigo-500"
                    >
                        <option value="">Select a brand</option>
                        {brands.map((brand, index) => (
                            <option key={index} value={brand}>
                                {brand}
                            </option>
                        ))}
                    </select>
                    {errors.brand && (
                        <span className="text-red-500 text-sm">{errors.brand.message}</span>
                    )}
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
                        placeholder="Enter product price"
                        className="w-full p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring focus:ring-indigo-500"
                    />
                    {errors.price && (
                        <span className="text-red-500 text-sm">{errors.price.message}</span>
                    )}
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
                        placeholder="Enter product quantity"
                        className="w-full p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring focus:ring-indigo-500"
                    />
                    {errors.quantity && (
                        <span className="text-red-500 text-sm">{errors.quantity.message}</span>
                    )}
                </div>

                {/* Image File */}
                <div>
                    <label className="block mb-2 font-semibold">Product Image</label>
                    <input
                        {...register("image", { required: "Image file is required" })}
                        type="file"
                        className="w-full p-3 rounded-md bg-gray-900 text-white focus:outline-none focus:ring focus:ring-indigo-500"
                    />
                    {errors.image && (
                        <span className="text-red-500 text-sm">{errors.image.message}</span>
                    )}
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
                    {errors.rating && (
                        <span className="text-red-500 text-sm">{errors.rating.message}</span>
                    )}
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
                        <span className="text-red-500 text-sm">
                            {errors.shortDescription.message}
                        </span>
                    )}
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    disabled={loading}
                    className="w-full p-3 rounded-md bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition"
                >
                    Add Product
                </button>
            </form>
        </div>
    );
};

export default AddProduct;
