/* eslint-disable react/prop-types */
import axios from "axios";
import { FaStar } from "react-icons/fa";
import { Link } from "react-router-dom";
import useGetMe from "../Hooks/useGetMe";
import getAuth from "../Hooks/getAuth";

const ProductCard = ({ product }) => {
    const { getMe } = useGetMe()
    const { user } = getAuth()
    const {
        _id,
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
        <div className="max-w-sm w-full bg-white shadow-lg rounded-lg overflow-hidden border border-gray-200 hover:shadow-xl transition-shadow duration-300">
            {/* Product Image */}
            <div className="relative">
                <img
                    src={image}
                    alt={name}
                    className="h-64 w-full object-cover"
                />
                <span className="absolute top-2 right-2 bg-gray-800 text-white text-xs px-2 py-1 rounded">
                    {category}
                </span>
            </div>

            {/* Product Info */}
            <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
                <p className="text-sm text-gray-600 mt-1">{shortDescription}</p>

                <div className="flex items-center justify-between mt-4">
                    <p className="text-lg font-bold text-gray-800">${price}</p>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Brand: </span>
                        {brand}
                    </p>
                </div>

                <div className="flex items-center justify-between mt-2">
                    <div className="flex items-center">
                        {Array.from({ length: 5 }, (_, i) => (
                            <FaStar
                                key={i}
                                className={`h-5 w-5 ${i < rating ? "text-yellow-400" : "text-gray-300"
                                    }`}
                            />
                        ))}
                    </div>
                    <p className="text-sm text-gray-600">
                        <span className="font-semibold">Stock: </span>
                        {quantity}
                    </p>
                </div>
            </div>

            {/* Actions */}
            <div className="px-4 pb-4 flex items-center justify-between">
                <button onClick={() => handWishList(_id)} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition">
                    Add to Wishlist
                </button>
                <Link to={`/product-details/${_id}`}>
                    <button disabled={!user} className="px-4 py-2 bg-gray-800 text-white rounded-md hover:bg-gray-900 transition">
                        View Details
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ProductCard;
