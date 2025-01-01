import { Link } from "react-router-dom";
import useGetProducts from "../../Hooks/getProducts";


const FeaturedProducts = () => {

    const { products: p = [] } = useGetProducts()
    const products = p?.slice(0, 5)
    console.log(products);

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
                    Featured Products
                </h2>
                <div className="flex flex-col gap-8 lg:flex-row lg:flex-wrap justify-center">
                    {products.map((product) => (
                        <div
                            key={product._id}
                            className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-1/2 lg:w-1/4 transition hover:shadow-lg"
                        >
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4 flex flex-col items-center">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {product.name}
                                </h3>
                                <p className="text-blue-500 font-bold text-xl">{product.price}</p>
                                <Link to={`/product-details/${product._id}`} className="mt-4 w-full text-center px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
