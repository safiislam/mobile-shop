

const Categories = () => {
    const categories = [
        {
            id: 1,
            name: "Smartphones",
            image: "https://img.freepik.com/free-vector/modern-portable-gadgets-template-with-realistic-smartphones-colorful-blank-screens-white-isolated_1284-49114.jpg?t=st=1735582208~exp=1735585808~hmac=a79e5b326c6237edccd217046580076a47281e4c0dd051ef790765377053d040&w=540",
        },
        {
            id: 2,
            name: "Accessories",
            image: "https://img.freepik.com/free-photo/still-life-casual-man-modern-male-accessories-laptop-white_155003-1719.jpg?t=st=1735582470~exp=1735586070~hmac=85e0a6eccfd044bf76881aa94340fd6064a2c4046664bfb9f71c58d0144af1d9&w=740",
        },
        {
            id: 3,
            name: "Tablets",
            image: "https://img.freepik.com/free-photo/shopping-cart-with-pill-blister-medicines-glass-white-background_23-2147883704.jpg?t=st=1735582522~exp=1735586122~hmac=cbd889b1ba152f7de807bb9d8f81258ddbe52419b98165ef23a15c714e21e0c0&w=360",
        },
        {
            id: 4,
            name: "Smartwatches",
            image: "https://img.freepik.com/free-photo/man-using-smartwatch_1301-1411.jpg?t=st=1735582611~exp=1735586211~hmac=70c4ffc767ce0fae69a09aa78e159b7a2b223db22a43308a1425504923efe207&w=740",
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
