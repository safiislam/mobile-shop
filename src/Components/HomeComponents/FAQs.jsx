import { useState } from 'react';

const FAQs = () => {
    const faqs = [
        {
            id: 1,
            question: "What payment methods do you accept?",
            answer: "We accept credit cards, debit cards, PayPal, and cash on delivery for certain locations.",
        },
        {
            id: 2,
            question: "Do you offer international shipping?",
            answer: "Yes, we offer worldwide shipping, but the shipping costs may vary depending on your location.",
        },
        {
            id: 3,
            question: "Can I return my product?",
            answer: "Yes, you can return your product within 30 days if it’s unused and in its original packaging.",
        },
        {
            id: 4,
            question: "How long does delivery take?",
            answer: "Delivery typically takes 3-7 business days depending on your location. You will receive a tracking number once shipped.",
        },
    ];

    const [openFAQ, setOpenFAQ] = useState(null);

    const toggleFAQ = (id) => {
        setOpenFAQ(openFAQ === id ? null : id);
    };

    return (
        <section className="bg-[#111827] py-12">
            <div className="container mx-auto px-6 lg:px-12">
                <h2 className="text-4xl font-bold text-gray-200 text-center mb-8">
                    Frequently Asked Questions
                </h2>
                <div className="space-y-4">
                    {faqs.map((faq) => (
                        <div
                            key={faq.id}
                            className="bg-[#1f2937] p-6 rounded-lg shadow-md"
                        >
                            <button
                                className="w-full text-left text-gray-200 font-semibold text-lg"
                                onClick={() => toggleFAQ(faq.id)}
                            >
                                {faq.question}
                            </button>
                            {openFAQ === faq.id && (
                                <p className="text-gray-300 mt-4">{faq.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FAQs;
