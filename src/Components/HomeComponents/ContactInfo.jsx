import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const ContactInfo = () => {
    return (
        <section className="bg-[#111827] py-12">
            <div className="container mx-auto px-6 lg:px-12 text-center">
                <h2 className="text-4xl font-bold text-gray-200 mb-8">
                    Contact Us
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <div className="bg-[#1f2937] p-6 rounded-lg shadow-lg text-gray-200">
                        <div className="flex items-center mb-4">
                            <FaPhoneAlt className="text-gray-400 text-3xl mr-4" />
                            <p className="text-lg">+1 800 123 4567</p>
                        </div>
                        <p className="text-gray-400">Call us for any inquiries or support.</p>
                    </div>

                    <div className="bg-[#1f2937] p-6 rounded-lg shadow-lg text-gray-200">
                        <div className="flex items-center mb-4">
                            <FaEnvelope className="text-gray-400 text-3xl mr-4" />
                            <p className="text-lg">support@mobilestore.com</p>
                        </div>
                        <p className="text-gray-400">Send us an email for more details or queries.</p>
                    </div>

                    <div className="bg-[#1f2937] p-6 rounded-lg shadow-lg text-gray-200">
                        <div className="flex items-center mb-4">
                            <FaMapMarkerAlt className="text-gray-400 text-3xl mr-4" />
                            <p className="text-lg">123 Mobile St., City, Country</p>
                        </div>
                        <p className="text-gray-400">Visit our store or office for in-person assistance.</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactInfo;
