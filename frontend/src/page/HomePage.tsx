import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import Navbar from '../component/Navbar';

const HomePage: React.FC = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // Handle changes for email and password fields
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (name === 'email') setEmail(value);
    else if (name === 'password') setPassword(value);
  };

  // Handle form submission
  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!email || !password) {
      setError('សូមបញ្ចូលអ៊ីមែល និង លេខសម្ថាត់');
    } else {
      setError(null);
      // Your login logic here
    }
  };

  const product = [
    {
      id: 1,
      names: `<form onSubmit={handleSubmit}>
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
     <div className="mb-4 space-y-2 relative">
       <label htmlFor="password" className="block text-sm font-medium text-gray-700">
         លេខសម្ថាត់
       </label>
     </div>
     {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
     <div className="flex justify-end">
       <button
         type="submit"
         className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
       >
         ចូលគណនី
       </button>
     </div>
   </form>
      `
    }
  ];

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div>
      <Navbar />
      <div className="flex mt-16 h-screen items-center justify-center bg-gradient-to-r from-gray-700 via-blue-200 to-gray-100 bg-opacity-50">
        <div className="grid lg:grid-cols-2 grid-cols-1 relative">
          <div className='relative'>
            <div className="relative text-sm bg-gray-100 opacity-10 overflow-auto overflow-x-auto scrollbar-hidden">
              <SyntaxHighlighter language="dart">
                {product[0].names}
              </SyntaxHighlighter>
            </div>

          </div>

          <div className="absolute lg:static mt-36 lg:mt-2 flex items-center p-2 justify-center sm:top-0 sm:left-0 lg:flex">
            <div className="bg-white p-6 w-[390px] mg:bg-opacity-60">
              <div className="flex justify-center items-center mb-8">
                <h2 className="text-2xl font-bold">ចូលគណនី</h2>
              </div>

              <form onSubmit={handleSubmit}>
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
                <div className="mb-4 space-y-2 relative">
                  <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                    លេខសម្ថាត់
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? 'text' : 'password'}
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

                {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    ចូលគណនី
                  </button>
                </div>
                <div className='flex space-x-3'>
                  <p>មិនទាន់មានគណ?</p>
                  <a href="/register" className='text-blue-500'>ចុះឈ្មោះ</a>
                </div>
              </form>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default HomePage;
