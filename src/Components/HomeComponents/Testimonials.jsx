

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            feedback:
                "I recently purchased a phone from this website, and the experience was seamless. The product quality is top-notch, and the customer service is exceptional!",
            image: "https://via.placeholder.com/100x100",
            designation: "Tech Enthusiast",
        },
        {
            id: 2,
            name: "Jane Smith",
            feedback:
                "The prices here are unbeatable, and the delivery was super fast. I’ll definitely shop here again!",
            image: "https://via.placeholder.com/100x100",
            designation: "Blogger",
        },
        {
            id: 3,
            name: "Michael Brown",
            feedback:
                "Highly recommend this website for buying phones. Great selection, competitive prices, and outstanding service!",
            image: "https://via.placeholder.com/100x100",
            designation: "Business Professional",
        },
    ];

    return (
        <section className="bg-[#111827] py-16">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-4xl font-bold text-gray-200 text-center mb-10">
                    What Our Customers Say
                </h2>
                <div className="flex flex-col gap-8 lg:flex-row lg:justify-center">
                    {testimonials.map((testimonial) => (
                        <div
                            key={testimonial.id}
                            className="bg-[#1f2937] shadow-lg rounded-lg p-6 flex flex-col items-center text-center hover:shadow-xl transition"
                        >
                            <img
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="w-20 h-20 rounded-full mb-4 border-4 border-[#374151]"
                            />
                            <h3 className="text-lg font-semibold text-gray-200">
                                {testimonial.name}
                            </h3>
                            <p className="text-sm text-gray-400 italic mb-4">
                                {testimonial.designation}
                            </p>
                            <p className="text-gray-300">{testimonial.feedback}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
