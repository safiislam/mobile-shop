/* eslint-disable react/prop-types */
import { FaStar, FaShoppingCart } from "react-icons/fa";
import useGetSingleProduct from "../../Hooks/useGetSingleProduct";
import { useParams } from "react-router-dom";
import axios from "axios";
import getAuth from "../../Hooks/getAuth";
import useGetMe from "../../Hooks/useGetMe";

const ProductDetails = () => {
    const { id } = useParams();
    const { product = {} } = useGetSingleProduct(id && id);
    const { user } = getAuth()
    const { getMe } = useGetMe()
    const {
        image,
        name,
        price,
        quantity,
        rating,
        shortDescription,
        brand,
        category,
    } = product;

    const handWishList = async (id) => {
        // || getMe.role == 'Admin' || getMe.role == 'Semin'
        if (!id || !user) {
            return window.alert('User is Required')
        }
        if (getMe?.role == 'Admin') {
            return window.alert('Admin Doest add')
        }
        if (getMe?.role == 'Seller') {
            return window.alert('Seller Doest add')
        }
        try {
            const res = await axios.post(
                `${import.meta.env.VITE_SERVER_URL}/add-wishlist`,
                { id },
                {
                    headers: { Authorization: localStorage.getItem("accessToken") },
                }
            );

            // Display success message
            if (res.data) {
                window.alert('Added to Wish List');
                console.log(res.data.message);
            }
        } catch (error) {
            // Handle errors
            console.error('Error adding to wishlist:', error);
            window.alert(error.response.data.message);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 py-8 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Product Image */}
                    <div className="relative">
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-full object-cover rounded-l-lg"
                        />
                        <span className="absolute top-2 right-2 bg-indigo-600 text-white text-sm px-3 py-1 rounded-md">
                            {category}
                        </span>
                    </div>

                    {/* Product Information */}
                    <div className="p-6 flex flex-col justify-between">
                        <div>
                            <h1 className="text-3xl font-bold text-indigo-800">{name}</h1>
                            <p className="text-sm text-gray-600 mt-2">
                                <span className="font-semibold">Brand:</span> {brand}
                            </p>
                            <p className="text-gray-700 text-base mt-4">
                                {shortDescription}
                            </p>
                            <p className="text-3xl font-extrabold text-indigo-600 mt-6">${price}</p>
                            <p className="text-sm text-gray-600 mt-2">
                                <span className="font-semibold">Stock:</span> {quantity}
                            </p>
                        </div>

                        {/* Ratings */}
                        <div className="mt-4">
                            <p className="font-semibold text-gray-700">Rating:</p>
                            <div className="flex items-center mt-1">
                                {Array.from({ length: 5 }, (_, i) => (
                                    <FaStar
                                        key={i}
                                        className={`h-5 w-5 ${i < rating ? "text-yellow-500" : "text-gray-300"
                                            }`}
                                    />
                                ))}
                                <span className="ml-2 text-sm text-gray-500">
                                    {rating} out of 5
                                </span>
                            </div>
                        </div>

                        {/* Actions */}
                        <div className="mt-6">
                            <button onClick={handWishList} className="w-full py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 flex items-center justify-center gap-2 transition duration-300 shadow-lg">
                                <FaShoppingCart />
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
