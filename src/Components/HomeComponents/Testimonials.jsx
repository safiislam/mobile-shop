

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: "John Doe",
            feedback:
                "I recently purchased a phone from this website, and the experience was seamless. The product quality is top-notch, and the customer service is exceptional!",
            image: "https://img.freepik.com/free-photo/handsome-confident-male-with-trendy-hairstyle-wearing-spectacles-casual-t-shirt_176532-7477.jpg?t=st=1735582060~exp=1735585660~hmac=c24b5b78e0bd74205c138855f212cd472c5ca0af2d4b53d93496fe69f3aafe26&w=740",
            designation: "Tech Enthusiast",
        },
        {
            id: 2,
            name: "Jane Smith",
            feedback:
                "The prices here are unbeatable, and the delivery was super fast. I’ll definitely shop here again!",
            image: "https://img.freepik.com/free-vector/young-prince-royal-attire_1308-176144.jpg?t=st=1735582108~exp=1735585708~hmac=fee16ee2454e36d15e5805b7c785bfaffde6b2ca21ec2a8d8dfdfe36e82f583c&w=740",
            designation: "Blogger",
        },
        {
            id: 3,
            name: "Michael Brown",
            feedback:
                "Highly recommend this website for buying phones. Great selection, competitive prices, and outstanding service!",
            image: "https://img.freepik.com/free-photo/photo-handsome-unshaven-guy-looks-with-pleasant-expression-directly-camera_176532-8164.jpg?t=st=1735582146~exp=1735585746~hmac=2fad1a1f7044e81e67825d462620a1435b29b7956ded67d099ae227731fca08e&w=740",
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
