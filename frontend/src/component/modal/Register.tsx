import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from 'axios';

interface RegisterProps {
    onClose: () => void;
}

const Register: React.FC<RegisterProps> = ({ onClose }) => {
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        age: "",
        gender: "Male", // Default to "ប្រុស"
        email: "",
        password: "",
        confirmPassword: "",
    });

    const [error, setError] = useState("");

    // Toggle Password Visibility
    const togglePasswordVisibility = () => {
        setShowPassword((prev) => !prev);
    };

    // Handle Input Changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        setError(""); 
    };




    // Inside your Register component
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            return;
        }

        // Prepare the data to be sent
        const data = {
            first_name: formData.firstName,
            last_name: formData.lastName,
            user_age: formData.age,
            gender: formData.gender,
            user_email: formData.email,
            user_password: formData.password
        };

        try {
            const response = await axios.post('http://localhost:5000/api/users/register', data);
            console.log('Registration successful', response.data);
            onClose();
        } catch (err) {
            console.error('Error registering user:', err);
            setError('Failed to register. Please try again.');
        }
    };


    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-2xl font-bold">ចុះឈ្មោះ</h2>
                    <IoCloseCircle className="text-2xl text-red-500 cursor-pointer" onClick={onClose} />
                </div>

                <form onSubmit={handleSubmit}>
                    {/* First Name */}
                    <div className="mb-4 space-y-2">
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                            នាមខ្លួន
                        </label>
                        <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            className="p-2 w-full border-2 outline-none bg-gray-50/20 focus:border-blue-500"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Last Name */}
                    <div className="mb-4 space-y-2">
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                            នាមត្រកូល
                        </label>
                        <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            className="p-2 w-full border-2 outline-none bg-gray-50/20 focus:border-blue-500"
                            value={formData.lastName}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Age */}
                    <div className="mb-4 space-y-2">
                        <label htmlFor="age" className="block text-sm font-medium text-gray-700">
                            អាយុ
                        </label>
                        <input
                            type="text"
                            id="age"
                            name="age"
                            className="p-2 w-full border-2 outline-none bg-gray-50/20 focus:border-blue-500"
                            value={formData.age}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Gender */}
                    <div className="mb-4 space-y-2">
                        <label htmlFor="gender" className="block text-sm font-medium text-gray-700">
                            ភេទ
                        </label>
                        <select
                            id="gender"
                            name="gender"
                            className="p-2 w-full border-2 outline-none bg-gray-50/20 focus:border-blue-500"
                            value={formData.gender}
                            onChange={handleChange}
                        >
                            <option value="Male">ប្រុស</option>
                            <option value="Female">ស្រី</option>
                            <option value="Other">ផ្សេងទៀត</option>
                        </select>
                    </div>

                    {/* Email */}
                    <div className="mb-4 space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            អ៊ីមែល
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="p-2 w-full border-2 outline-none bg-gray-50/20 focus:border-blue-500"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />
                    </div>

                    {/* Password */}
                    <div className="mb-4 space-y-2 relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            លេខសម្ថាត់
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                name="password"
                                className="p-2 w-full border-2 outline-none bg-gray-50/20 focus:border-blue-500"
                                value={formData.password}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    {/* Confirm Password */}
                    <div className="mb-4 space-y-2 relative">
                        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
                            បញ្ជាក់លេខសម្ថាត់
                        </label>
                        <div className="relative">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="confirmPassword"
                                name="confirmPassword"
                                className="p-2 w-full border-2 outline-none bg-gray-50/20 focus:border-blue-500"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                required
                            />
                            <button
                                type="button"
                                className="absolute inset-y-0 right-2 flex items-center text-gray-500"
                                onClick={togglePasswordVisibility}
                            >
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>

                    {/* Error Message */}
                    {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                    {/* Submit Button */}
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                            ចុះឈ្មោះ
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Register;
