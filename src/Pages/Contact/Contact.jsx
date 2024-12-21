
import { useForm } from "react-hook-form";

const Contact = () => {
    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log("Form Submitted:", data);
        alert("Thank you for reaching out! We will get back to you soon.");
        reset();
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
            <div className="w-full max-w-4xl p-8 bg-gray-800 rounded-lg shadow-xl">
                <h2 className="text-4xl font-extrabold mb-8 text-center">
                    Get in Touch
                </h2>
                <p className="text-center mb-8 text-gray-400">
                    We’d love to hear from you. Fill out the form below and we’ll get back
                    to you as soon as possible.
                </p>
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <div>
                        <label className="block mb-2 text-lg font-semibold">Name</label>
                        <input
                            {...register("name", { required: "Name is required" })}
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.name && (
                            <span className="text-red-500 text-sm">{errors.name.message}</span>
                        )}
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-2 text-lg font-semibold">Email</label>
                        <input
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                    message: "Enter a valid email address",
                                },
                            })}
                            type="email"
                            placeholder="Your Email"
                            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.email && (
                            <span className="text-red-500 text-sm">{errors.email.message}</span>
                        )}
                    </div>

                    {/* Phone (Optional) */}
                    <div>
                        <label className="block mb-2 text-lg font-semibold">Phone</label>
                        <input
                            {...register("phone", {
                                pattern: {
                                    value: /^[0-9]{10,15}$/,
                                    message: "Enter a valid phone number",
                                },
                            })}
                            type="text"
                            placeholder="Your Phone (Optional)"
                            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                        {errors.phone && (
                            <span className="text-red-500 text-sm">{errors.phone.message}</span>
                        )}
                    </div>

                    {/* Message */}
                    <div>
                        <label className="block mb-2 text-lg font-semibold">Message</label>
                        <textarea
                            {...register("message", { required: "Message is required" })}
                            placeholder="Write your message here..."
                            rows="6"
                            className="w-full p-3 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        ></textarea>
                        {errors.message && (
                            <span className="text-red-500 text-sm">{errors.message.message}</span>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 font-bold text-white transition-all"
                    >
                        Send Message
                    </button>
                </form>
                <div className="mt-8 text-center text-gray-400">
                    <p>Or reach us directly at:</p>
                    <p className="font-semibold text-indigo-500">
                        support@example.com | +1 (555) 123-4567
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contact;
