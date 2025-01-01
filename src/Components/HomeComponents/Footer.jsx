const Footer = () => {
    return (
        <footer className="bg-gray-800 text-gray-200">
            <div className="container mx-auto px-4 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* About Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">About Us</h3>
                    <p className="text-sm">
                        We are a leading provider of modern web solutions, offering cutting-edge
                        designs and functionalities tailored to your needs.
                    </p>
                </div>

                {/* Links Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className="hover:underline">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Services
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                About
                            </a>
                        </li>
                        <li>
                            <a href="#" className="hover:underline">
                                Contact
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Contact Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Contact Us</h3>
                    <ul className="space-y-2">
                        <li>
                            <span>Email: </span>
                            <a href="mailto:info@example.com" className="hover:underline">
                                info@example.com
                            </a>
                        </li>
                        <li>
                            <span>Phone: </span>
                            <a href="tel:+1234567890" className="hover:underline">
                                +123-456-7890
                            </a>
                        </li>
                        <li>Address: 123 Street, City, Country</li>
                    </ul>
                </div>

                {/* Social Media Section */}
                <div>
                    <h3 className="text-lg font-semibold mb-3">Follow Us</h3>
                    <div className="flex space-x-4">
                        <a
                            href="#"
                            className="hover:text-blue-400 transition-colors duration-300"
                            aria-label="Facebook"
                        >
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a
                            href="#"
                            className="hover:text-blue-500 transition-colors duration-300"
                            aria-label="Twitter"
                        >
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a
                            href="#"
                            className="hover:text-pink-500 transition-colors duration-300"
                            aria-label="Instagram"
                        >
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a
                            href="#"
                            className="hover:text-blue-600 transition-colors duration-300"
                            aria-label="LinkedIn"
                        >
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright Section */}
            <div className="bg-gray-900 text-gray-400 py-4 text-center">
                © {new Date().getFullYear()} Your Company. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;
