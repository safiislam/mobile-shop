import useGetProducts from "../../Hooks/getProducts";


const ManageProduct = () => {
    const { products: product = [] } = useGetProducts()
    console.log(product);
    // Sample product data
    const products = [
        {
            id: 1,
            name: "Product 1",
            price: 100,
            quantity: 50,
            imageUrl: "https://via.placeholder.com/150",
            rating: 4.5,
            shortDescription: "This is Product 1",
        },
        {
            id: 2,
            name: "Product 2",
            price: 200,
            quantity: 30,
            imageUrl: "https://via.placeholder.com/150",
            rating: 4.2,
            shortDescription: "This is Product 2",
        },
    ];

    const handleEdit = (id) => {
        console.log(`Edit product with ID: ${id}`);
        // Add logic to edit product
    };

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            console.log(`Delete product with ID: ${id}`);
            // Add logic to delete product
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
                            key={product.id}
                            className="border-b border-gray-700 hover:bg-gray-800"
                        >
                            <td className="p-3">{index + 1}</td>
                            <td className="p-3">{product.name}</td>
                            <td className="p-3">${product.price}</td>
                            <td className="p-3">{product.quantity}</td>
                            <td className="p-3">{product.rating}</td>
                            <td className="p-3">
                                <img
                                    src={product.imageUrl}
                                    alt={product.name}
                                    className="w-16 h-16 object-cover rounded-md"
                                />
                            </td>
                            <td className="p-3">
                                <button
                                    onClick={() => handleEdit(product.id)}
                                    className="bg-blue-600 text-white px-4 py-2 rounded-md mr-2 hover:bg-blue-700"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(product.id)}
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

export default ManageProduct;
