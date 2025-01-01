import { Link } from "react-router-dom";

const HeroSection = () => {
    return (
        <section className="relative bg-gray-900 text-white md:h-screen -z-10 py-8">
            <div className="container mx-auto px-6 lg:px-12 h-full flex flex-col-reverse lg:flex-row items-center gap-12">
                {/* Left Content */}
                <div className="lg:w-1/2">
                    <h1 className="text-4xl md:text-5xl font-extrabold leading-snug">
                        Your Gateway to <span className="text-blue-400">Smart Tech</span>
                    </h1>
                    <p className="text-lg mt-4 text-gray-300">
                        Discover the latest mobile phones and accessories designed to elevate your digital lifestyle.
                        Exclusive discounts and fast delivery await you!
                    </p>
                    <div className="mt-6 flex gap-4">
                        <Link
                            to="/product"
                            className="px-6 py-3 bg-blue-500 hover:bg-blue-400 font-semibold rounded-lg transition z-20"
                        >
                            Explore Phones
                        </Link>
                        <a
                            href="#learn-more"
                            className="px-6 py-3 bg-transparent border border-blue-500 hover:bg-blue-500 hover:text-white font-semibold rounded-lg transition"
                        >
                            Learn More
                        </a>
                    </div>
                </div>

                {/* Right Image */}
                <div className="lg:w-1/2 flex justify-center">
                    <div className="relative">
                        <img
                            src="https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            alt="Latest Mobile"
                            className="rounded-lg shadow-lg"
                        />
                        <div className="absolute bottom-0 right-0 transform translate-x-4 translate-y-4 bg-blue-500 p-4 rounded-full">
                            <span className="text-xl font-bold">New Arrival</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Decorative Shapes */}
            <div className="absolute top-0 left-0 w-32 h-32 bg-blue-500 opacity-30 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 right-0 w-48 h-48 bg-purple-600 opacity-30 rounded-full blur-3xl"></div>
        </section>
    );
};

export default HeroSection;
