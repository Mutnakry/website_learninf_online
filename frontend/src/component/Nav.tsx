import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface Category {
  cat_id: number;
  cat_names: string;
}

interface Course {
  cous_id: number;
  cous_name: string;
  category_id: number; // Reference to Category
  detail_category_id: number; // Reference to DetailCategory
}

interface DetailCategory {
  de_id: number;
  de_name: string;
  category_id: number; // Reference to Category
  cat_names: string;
}

function Navbar() {
  const [categories, setCategories] = useState<Category[]>([]);
  const [dropdownOpenCategory, setDropdownOpenCategory] = useState(false);
  const [openCategoryId, setOpenCategoryId] = useState<number | null>(null); // Track which category is open
  const [openDetailCategoryId, setOpenDetailCategoryId] = useState<number | null>(null); // Track which detail category is open
  const [openCourseId, setOpenCourseId] = useState<number | null>(null);
  const [detailCategories, setDetailCategories] = useState<DetailCategory[]>([]);
  const [courses, setCourses] = useState<Course[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const responseCategory = await axios.get<Category[]>("http://localhost:5000/api/category");
        const responseDetailCategory = await axios.get<DetailCategory[]>("http://localhost:5000/api/detailcategory");
        const responseCourses = await axios.get<Course[]>("http://localhost:5000/api/couses");

        setCategories(responseCategory.data);
        setDetailCategories(responseDetailCategory.data);
        setCourses(responseCourses.data);
      } catch (err) {
        console.error("Error fetching data:", err);
      }
    };

    fetchData();
  }, []);

  const handleMouseEnterCategory = (cat_id: number) => {
    setDropdownOpenCategory(true);
    setOpenCategoryId(cat_id);  // Set the category whose detail categories should be displayed
  };

  const handleMouseLeaveCategory = () => {
    // Only hide category if the mouse leaves the entire category area, not just the category button
    setDropdownOpenCategory(false);
    setOpenCategoryId(null);
    setOpenDetailCategoryId(null);
    setOpenCourseId(null);
  };

  const handleMouseEnterDetailCategory = (de_id: number) => {
    setOpenDetailCategoryId(de_id); // Set the detail category whose courses should be displayed
  };

  const handleMouseLeaveDetailCategory = () => {
    setOpenDetailCategoryId(null);
    setOpenCourseId(null);
  };

  const handleMouseEnterCourse = (cous_id: number) => {
    setOpenCourseId(cous_id);
  };

  const handleMouseLeaveCourse = () => {
    setOpenCourseId(null);
  };

  return (
    <div>
      <div className="hidden md:flex items-start flex-1 px-4 space-x-8">
        <div
          className="relative "
          onMouseEnter={() => handleMouseEnterCategory(-1)} // Trigger category dropdown
          onMouseLeave={handleMouseLeaveCategory}
        >
          <button className="text-white w-full p-2 hover:text-gray-400 transition-colors duration-300">
            ជំនាញ
          </button>
          {dropdownOpenCategory && (
            <ul className="absolute mt-2 left-0 bg-gray-50  border shadow-lg w-[350px] -translate-x-20">
              {categories.map((category) => (
                <div key={category.cat_id}>
                  <li
                    className="group relative px-4 py-2 w-full hover:bg-blue-300 -translate-y-2"
                    onMouseEnter={() => handleMouseEnterCategory(category.cat_id)}
                    onMouseLeave={handleMouseLeaveCategory}
                  >
                    <div className="font-semibold">{category.cat_names}</div>

                    {/* Show detail categories under this category */}
                    {openCategoryId === category.cat_id && (
                      <ul className="absolute left-full top-0 bg-gray-50 border shadow-lg w-[350px]">
                        {detailCategories
                          .filter((detail) => detail.category_id === category.cat_id) // Filter by category_id
                          .map((detail) => (
                            <Link
                              key={detail.de_id}
                              to={`/${detail.de_name}/${detail.category_id}/${category.cat_names}/${detail.de_id}`}
                              className="relative group px-4 py-2 hover:bg-blue-300 flex"
                              onMouseEnter={() => handleMouseEnterDetailCategory(detail.de_id)}
                              onMouseLeave={handleMouseLeaveDetailCategory}
                            >
                              {detail.de_name}
                              {openDetailCategoryId === detail.de_id && (
                                <ul className="absolute left-full top-0 bg-gray-100 border shadow-lg w-[250px]">

                                  {courses
                                    .filter((course) => course.detail_category_id === detail.de_id)
                                    .map((course) => (
                                      <Link
                                        to={`/modales/${course.cous_id}/course`}
                                        key={course.cous_id}
                                        className="px-4 py-2 hover:bg-blue-300 flex"
                                        onMouseEnter={() => handleMouseEnterCourse(course.cous_id)}
                                        onMouseLeave={handleMouseLeaveCourse}
                                      >
                                        {course.cous_name}
                                      </Link>
                                    ))}

                                </ul>
                              )}
                            </Link>
                          ))}
                      </ul>
                    )}
                  </li>
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>

    </div>
  );
}

export default Navbar;












