/* eslint-disable no-unused-vars */
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";
import getAuth from "../../Hooks/getAuth";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser } = getAuth()

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate()

    const onSubmit = (data) => {
        createUser(data.email, data.password).then(res => {
            console.log(res);
            navigate('/')
        })
    };

    const passwordValue = watch("password", "");

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center">
            <div className="w-full max-w-lg bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold text-center mb-6">Welcome Back!</h1>
                <p className="text-center text-gray-500 mb-8">
                    Please sign in to your account.
                </p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Email Field */}
                    <div className="mb-6">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600">
                            Email
                        </label>
                        <input
                            id="email"
                            {...register("email", {
                                required: "Email is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                                    message: "Invalid email format",
                                },
                            })}
                            type="email"
                            className={`w-full mt-1 px-4 py-2 border rounded-lg ${errors.email ? "border-red-500" : "border-gray-300"
                                } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                            placeholder="Enter your email"
                        />
                        {errors.email && (
                            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                    </div>

                    {/* Password Field */}
                    <div className="mb-6 relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600">
                            Password
                        </label>
                        <input
                            id="password"
                            {...register("password", {
                                required: "Password is required",
                                minLength: {
                                    value: 8,
                                    message: "Password must be at least 8 characters",
                                },
                                validate: {
                                    hasUpperCase: (value) =>
                                        /[A-Z]/.test(value) || "Must include an uppercase letter",
                                    hasNumber: (value) =>
                                        /[0-9]/.test(value) || "Must include a number",
                                    hasSpecialChar: (value) =>
                                        /[@!#$%^&*]/.test(value) || "Must include a special character",
                                },
                            })}
                            type={showPassword ? "text" : "password"}
                            className={`w-full mt-1 px-4 py-2 border rounded-lg ${errors.password ? "border-red-500" : "border-gray-300"
                                } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                            placeholder="Enter your password"
                        />
                        <button
                            type="button"
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? <AiFillEyeInvisible size={20} /> : <AiFillEye size={20} />}
                        </button>
                        {errors.password && (
                            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
                        )}
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition"
                    >
                        Sign In
                    </button>
                </form>

                <div className="mt-6 flex justify-between items-center text-sm">
                    <a href="#" className="text-indigo-500 hover:underline">
                        Forgot Password?
                    </a>
                    <Link to={'/login'} className="text-indigo-500 hover:underline">
                        Already Have  Account
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Register;
