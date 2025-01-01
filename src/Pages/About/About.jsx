import useDocumentTitle from "../../Hooks/useDocumentTitle";


const About = () => {
    useDocumentTitle("About|Shop")
    return (
        <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
            {/* Header */}
            <header className="p-6 text-center">
                <h1 className="text-4xl font-bold mb-2">About Us</h1>
                <p className="text-gray-300 text-lg">
                    Empowering your mobile shopping experience.
                </p>
            </header>

            {/* Main Content */}
            <main className="px-6 py-8">
                {/* Introduction */}
                <section className="bg-gray-700 p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-2xl font-semibold mb-3">Who We Are</h2>
                    <p className="text-gray-300">
                        We are a passionate team dedicated to providing a platform where
                        mobile enthusiasts can explore, compare, and purchase the latest
                        mobile devices effortlessly.
                    </p>
                </section>

                {/* Features */}
                <section className="bg-gray-700 p-6 rounded-lg shadow-md mb-6">
                    <h2 className="text-2xl font-semibold mb-3">What We Offer</h2>
                    <ul className="list-disc list-inside space-y-2 text-gray-300">
                        <li>Access to the latest smartphones at competitive prices.</li>
                        <li>A seamless shopping experience with secure transactions.</li>
                        <li>Detailed specifications and honest customer reviews.</li>
                        <li>Customer support to assist you every step of the way.</li>
                    </ul>
                </section>

                {/* Values */}
                <section className="bg-gray-700 p-6 rounded-lg shadow-md">
                    <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
                    <p className="text-gray-300">
                        Our mission is to simplify mobile shopping, ensuring users find
                        their perfect device with ease. We strive to deliver trust,
                        innovation, and unparalleled service.
                    </p>
                </section>
            </main>

            {/* Call to Action */}
            <footer className="text-center py-8">
                <h3 className="text-xl font-medium mb-2">
                    Ready to upgrade your mobile experience?
                </h3>
                <p className="text-gray-400 mb-4">
                    Join thousands of satisfied users today.
                </p>
                <button className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-lg shadow-lg">
                    Shop Now
                </button>
            </footer>
        </div>
    );
};

export default About;
