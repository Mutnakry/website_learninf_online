import { useState, useRef, useEffect } from "react";
import { FaCamera, FaSearch, FaBars, FaTimes } from "react-icons/fa";

interface Category {
  id: number;
  name: string;
  description: string;
}

interface Product {
  id: number;
  name: string;
}

function Navbar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setDropdownOpen((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // Close dropdown on outside click
  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleOutsideClick);
    return () => document.removeEventListener("mousedown", handleOutsideClick);
  }, []);

  const category: Category[] = [
    { id: 1, name: "Electronics", description: "Gadgets and devices" },
    { id: 2, name: "Groceries", description: "Food and daily essentials" },
    { id: 3, name: "Clothing", description: "Apparel and accessories" },
  ];

  const product: Product[] = [
    { id: 1, name: "ABC" },
    { id: 2, name: "Gasber" },
    { id: 3, name: "Cambodia" },
  ];

  const filteredProducts = product.filter((item) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <div className="bg-white dark:bg-gray-900 w-full shadow fixed top-0 z-20">
        <nav className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3">
            <img src="https://www.khmer24.com/icon/khmer24.png" className="h-10" alt="Khmer24 Logo" />
            <img className="h-6" src="https://www.khmer24.com/icon/km-40x40.png" alt="Khmer Icon" />
          </a>

          {/* Search Bar and User Options */}
          <div className="hidden lg:flex items-center flex-1 space-x-4">
            <div className="relative flex-1">
              <input
                type="text"
                className="border px-4 py-2 w-full outline-none bg-gray-50 focus:border-blue-500"
                placeholder="តើអ្នកកំពុងស្វែរកផលិតផលអ្វី?"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <FaSearch className="absolute right-3 top-3 text-gray-500" />
              {searchTerm && (
                <div className="absolute z-10 mt-2 w-full bg-white border rounded-lg shadow-lg max-h-60 overflow-y-auto">
                  {filteredProducts.length > 0 ? (
                    <ul className="py-2 text-sm text-gray-700">
                      {filteredProducts.map((item) => (
                        <li key={item.id} className="hover:bg-gray-100 px-4 py-2 cursor-pointer">
                          {item.name}
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <div className="py-2 px-4 text-gray-500 text-sm">មិនមានផលិតផលទេ!</div>
                  )}
                </div>
              )}
            </div>

            <div className="flex items-center space-x-4">
              <a href="/login" className="text-blue-800">
                ចូលគណនី
              </a>
              <span className="text-gray-400">ឬ</span>
              <a href="/register" className="text-blue-800">
                ចុះឈ្មោះ
              </a>
              <button className="flex px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg items-center space-x-2">
                <FaCamera />
                <span>ដាក់លក់</span>
              </button>
            </div>
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button className="lg:hidden text-2xl" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="lg:hidden bg-white shadow-md">
            <ul className="space-y-2 p-4">
              <li>
                <button onClick={toggleDropdown} className="w-full text-left px-4 py-2 bg-gray-100 rounded">
                  ផលិតផលទាំងអស់
                </button>
                {dropdownOpen && (
                  <ul className="mt-2 bg-gray-50 border rounded">
                    {category.map((item) => (
                      <li key={item.id} className="px-4 py-2 hover:bg-gray-100">
                        <div className="font-semibold">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.description}</div>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
              <li>
                <a href="/login" className="block px-4 py-2 text-blue-800">
                  ចូលគណនី
                </a>
              </li>
              <li>
                <a href="/register" className="block px-4 py-2 text-blue-800">
                  ចុះឈ្មោះ
                </a>
              </li>
              <li>
                <button className="flex w-full px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg items-center space-x-2">
                  <FaCamera />
                  <span>ដាក់លក់</span>
                </button>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
