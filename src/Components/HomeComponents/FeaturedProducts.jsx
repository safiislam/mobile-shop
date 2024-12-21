

const FeaturedProducts = () => {
    const products = [
        {
            id: 1,
            title: "iPhone 14 Pro Max",
            price: "$1199",
            image: "https://via.placeholder.com/300x300",
        },
        {
            id: 2,
            title: "Samsung Galaxy S23 Ultra",
            price: "$999",
            image: "https://via.placeholder.com/300x300",
        },
        {
            id: 3,
            title: "Google Pixel 8 Pro",
            price: "$899",
            image: "https://via.placeholder.com/300x300",
        },
        {
            id: 4,
            title: "OnePlus 12",
            price: "$799",
            image: "https://via.placeholder.com/300x300",
        },
    ];

    return (
        <section className="bg-gray-50 py-16">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-4xl font-bold text-gray-800 text-center mb-10">
                    Featured Products
                </h2>
                <div className="flex flex-col gap-8 lg:flex-row lg:flex-wrap justify-center">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white rounded-lg shadow-md overflow-hidden w-full sm:w-1/2 lg:w-1/4 transition hover:shadow-lg"
                        >
                            <img
                                src={product.image}
                                alt={product.title}
                                className="w-full h-64 object-cover"
                            />
                            <div className="p-4 flex flex-col items-center">
                                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                                    {product.title}
                                </h3>
                                <p className="text-blue-500 font-bold text-xl">{product.price}</p>
                                <button className="mt-4 w-full px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-400 transition">
                                    View Details
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FeaturedProducts;
