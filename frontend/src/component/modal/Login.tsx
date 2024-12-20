
import React, { useState } from "react";
import { IoCloseCircle } from "react-icons/io5";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import axios from "axios"; // You need to import axios

interface LoginProps {
  onClose: () => void;
}

const Login: React.FC<LoginProps> = ({ onClose }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === "email") setEmail(value);
    if (name === "password") setPassword(value);
    setError(""); // Reset error message
  };


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    try {
      const response = await axios.post("http://localhost:5000/api/users/login", {
        user_email: email,
        user_password: password,
      });
      console.log("Login successful", response.data);
  
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user_id", response.data.user_id);
      localStorage.setItem("user_role", response.data.user_role);
      localStorage.setItem("user_email", response.data.user_email);
      localStorage.setItem("last_name", response.data.last_name);
      localStorage.setItem("first_name", response.data.first_name);
      localStorage.setItem("user_age", response.data.user_age);
      localStorage.setItem("gender", response.data.gender);
  
  
      window.location.href = "/";
      onClose();
    } catch (err) {
      console.error("Error logging in:", err);
      setError("Invalid email or password");
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">ចូលគណនី</h2>
          <IoCloseCircle className="text-2xl text-red-500 cursor-pointer" onClick={onClose} />
        </div>
        <form onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="mb-4 space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              អ៊ីមែល
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="p-2 placeholder:font-NotoSansKhmer w-full border-2 outline-none bg-gray-50/20 focus:border-blue-500"
              value={email}
              onChange={handleChange}
              required
            />
          </div>

          {/* Password Field */}
          <div className="mb-4 space-y-2 relative">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              លេខសម្ថាត់
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                className="p-2 placeholder:font-NotoSansKhmer w-full border-2 outline-none bg-gray-50/20 focus:border-blue-500"
                value={password}
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
              ចូលគណនី
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
