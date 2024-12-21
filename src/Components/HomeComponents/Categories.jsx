

const Categories = () => {
    const categories = [
        {
            id: 1,
            name: "Smartphones",
            image: "https://via.placeholder.com/300x300",
        },
        {
            id: 2,
            name: "Accessories",
            image: "https://via.placeholder.com/300x300",
        },
        {
            id: 3,
            name: "Tablets",
            image: "https://via.placeholder.com/300x300",
        },
        {
            id: 4,
            name: "Smartwatches",
            image: "https://via.placeholder.com/300x300",
        },
    ];

    return (
        <section className="bg-[#111827] py-12">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-4xl font-bold text-gray-200 text-center mb-8">
                    Browse Categories
                </h2>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
                    {categories.map((category) => (
                        <div
                            key={category.id}
                            className="flex flex-col items-center bg-[#1f2937] p-4 rounded-lg shadow-lg hover:shadow-xl transition"
                        >
                            <img
                                src={category.image}
                                alt={category.name}
                                className="w-20 h-20 sm:w-24 sm:h-24 mb-4 rounded-full border-4 border-[#374151]"
                            />
                            <h3 className="text-gray-200 font-semibold text-center">
                                {category.name}
                            </h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Categories;
