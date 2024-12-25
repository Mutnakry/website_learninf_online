// import { useEffect, useState } from 'react';
// import Navbar from '../../component/Navbar';
// import { FaLock } from "react-icons/fa";
// import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';

// // Define the types correctly
// interface ModaleID {
//     mod_id: number;
//     mod_name: string;
//     courses_id: number;
//     quiz_id: number;
//     mod_status?: string;
//     create_at?: string | null;
//     update_at?: string | null;
//     delete_at?: string | null;
//     user_id?: number;
//     user_at?: string;
//     user_update?: string;
// }

// interface LessonesID {
//     sub_id: number;
//     sub_name: string;
//     modale_id: number;
//     courses_id: number;
//     title: string;
//     code: string;
// }

// function CourseModale() {
//     const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
//     const [modaleID, setModaleID] = useState<ModaleID[]>([]);
//     const [lessonesID, setLessonesID] = useState<LessonesID[]>([]);
//     const [loading, setLoading] = useState<boolean>(true); // Loading state
//     const { id } = useParams();

//     // Toggle dropdown logic
//     const toggleDropdown = (id: number) => {
//         setDropdownOpen((prev) => (prev === id ? null : id));
//     };

//     useEffect(() => {
//         if (id) {
//             fetchModaleID(Number(id));
//         }
//         fetchLessonesID();
//     }, [id]);

//     const fetchModaleID = async (id: number) => {
//         try {
//             const response = await axios.get<ModaleID[]>(`http://localhost:5000/api/modale/${id}`);
//             setModaleID(response.data);
//             setTimeout(() => {
//                 setLoading(false);
//             }, 1000);

//         } catch (err) {
//             console.error('Error fetching modale by ID:', err);
//             setLoading(false);
//         }
//     };


//     // Fetch lessons data
//     const fetchLessonesID = async () => {
//         try {
//             const response = await axios.get<LessonesID[]>('http://localhost:5000/api/submodale');
//             setLessonesID(response.data);
//         } catch (err) {
//             console.error('Error fetching lessons:', err);
//         }
//     };

//     const SkeletonLoader = () => (
//         <div className="space-y-4 p-4 bg-white shadow rounded-lg border-2 border-blue-500/50">
//             <div className="skeleton-loader h-8 bg-gray-300 w-1/3"></div>
//             <div className="skeleton-loader h-16 bg-gray-300 rounded-md"></div>
//             <div className="skeleton-loader h-8 bg-gray-300 w-1/4"></div>
//             <br />
//             <div className="skeleton-loader h-8 bg-gray-300 w-1/3"></div>
//             <div className="skeleton-loader h-16 bg-gray-300 rounded-md"></div>
//             <div className="skeleton-loader h-8 bg-gray-300 w-1/4"></div>
//             <br />
//             <div className="skeleton-loader h-8 bg-gray-300 w-1/3"></div>
//             <div className="skeleton-loader h-16 bg-gray-300 rounded-md"></div>
//             <div className="skeleton-loader h-8 bg-gray-300 w-1/4"></div>
//             <br />
//             <div className="skeleton-loader h-8 bg-gray-300 w-1/3"></div>
//             <div className="skeleton-loader h-16 bg-gray-300 rounded-md"></div>
//             <div className="skeleton-loader h-8 bg-gray-300 w-1/4"></div>
//         </div>

//     );


//     // Filter lessons based on the selected modale ID
//     const filteredLessons = (modaleId: number) => {
//         return lessonesID.filter((lesson) => lesson.modale_id === modaleId);
//     };

//     return (
//         <div className='pt-24'>
//             <Navbar />
//             <div className='max-w-screen-2xl mx-auto px-4'>
//                 {/* Show Skeleton Loader until data is loaded */}
//                 {loading ? (
//                     <>
//                         <SkeletonLoader />
//                     </>
//                 ) : (
//                     // Data Loaded
//                     <div>
//                         {modaleID.slice(0, 1).map((course) => (
//                             <div key={course.mod_id}>
//                                 <div className='text-blue-600 text-3xl font-NotoSansKhmer py-4'>
//                                     <p>{course.mod_name}</p>
//                                 </div>
//                                 <div className='px-4 py-7 bg-blue-100 text-gray-500 font-NotoSansKhmer line-clamp-3 rounded-xl'>
//                                     <p>{course.mod_status}</p>
//                                 </div>
//                             </div>
//                         ))}

//                         {/* Button to continue learning */}
//                         <div className='flex py-4'>
//                             <Link to={'/'} className='py-2 px-6 text-xs text-white bg-orange-500 rounded'>
//                                 បន្ដការរៀន
//                             </Link>
//                         </div>

//                         {/* Course List */}
//                         <div className="space-y-4 p-4 bg-white shadow rounded-lg border-2 border-blue-500/50">
//                             <h2 className='text-blue-600 text-3xl font-NotoSansKhmer'>Course</h2>
//                             {modaleID.map((course, index) => (
//                                 <div key={course.mod_id}>
//                                     <button
//                                         onClick={() => toggleDropdown(course.mod_id)}
//                                         className="flex w-full items-center text-left px-4 py-4 bg-blue-100 rounded"
//                                     >
//                                         <p className="h-8 w-8 text-center text-white bg-blue-600 rounded-full flex items-center justify-center mr-4">
//                                             {index + 1}
//                                         </p>
//                                         <div>
//                                             <p className="w-full items-center text-left bg-blue-100 rounded">
//                                                 {course.mod_name}
//                                             </p>
//                                         </div>
//                                     </button>
//                                     <div>
//                                         {dropdownOpen === course.mod_id && (
//                                             <div className='border-x border-b border-blue-200 py-2 px-8'>
//                                                 <div>
//                                                     {filteredLessons(course.mod_id).map((lesson) => (
//                                                         // <Link
//                                                         //     key={lesson.sub_id}
//                                                         //     // to={`/course/${course.mod_id}/modales/${lesson.les_id}}`}
//                                                         //     to={`/course/${course.courses_id}/modales/${lesson.modale_id}/lessone/${lesson.sub_id}`}
//                                                         // >
//                                                         //     <div className="px-4 py-2 mt-2 bg-slate-100 rounded hover:scale-105 duration-700 border-2 hover:border-blue-400 delay-300">
//                                                         //         <p className="font-semibold">{lesson.sub_name}</p>
//                                                         //         <p className='flex space-x-2 text-sm text-gray-500 font-light'>
//                                                         //             <FaLock /> <span>lock</span>
//                                                         //         </p>
//                                                         //     </div>
//                                                         // </Link>

//                                                         <Link key={lesson.sub_id} to={`/course/${course.courses_id}/modales/${lesson.modale_id}/lessone/${lesson.sub_id}`}>
//                                                             <div className="px-4 py-2 mt-2 bg-slate-100 rounded hover:scale-105 duration-700 border-2 hover:border-blue-400 delay-300">
//                                                                 <p className="font-semibold">{lesson.sub_name}</p>
//                                                                 <p className='flex space-x-2 text-sm text-gray-500 font-light'>
//                                                                     <FaLock /> <span>lock</span>
//                                                                 </p>
//                                                             </div>
//                                                         </Link>

//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default CourseModale;





// //////////// check courses premium=================


// import { useEffect, useState } from 'react';
// import Navbar from '../../component/Navbar';
// import { FaLock } from "react-icons/fa";
// import { Link, useParams } from 'react-router-dom';
// import axios from 'axios';
// import Video from '../../assets/1734583716986WIN_20231125_12_38_52_Pro.mp4'


// // Define the types correctly
// interface ModaleID {
//     mod_id: number;
//     mod_name: string;
//     courses_id: number;
//     quiz_id: number;
//     mod_status?: string;
//     create_at?: string | null;
//     update_at?: string | null;
//     delete_at?: string | null;
//     user_id?: number;
//     user_at?: string;
//     user_update?: string;
// }

// interface LessonesID {
//     sub_id: number;
//     sub_name: string;
//     modale_id: number;
//     courses_id: number;
//     title: string;
//     code: string;
//     course_type: 'free' | 'premium';
// }

// function CourseModale() {
//     const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
//     const [modaleID, setModaleID] = useState<ModaleID[]>([]);
//     const [lessonesID, setLessonesID] = useState<LessonesID[]>([]);
//     const [loading, setLoading] = useState<boolean>(true); // Loading state
//     const [showModal, setShowModal] = useState<boolean>(false);

//     const { id } = useParams();

//     // Toggle dropdown logic
//     const toggleDropdown = (id: number) => {
//         setDropdownOpen((prev) => (prev === id ? null : id));
//     };

//     useEffect(() => {
//         if (id) {
//             fetchModaleID(Number(id));
//         }
//         fetchLessonesID();
//     }, [id]);

//     const fetchModaleID = async (id: number) => {
//         try {
//             const response = await axios.get<ModaleID[]>(`http://localhost:5000/api/modale/${id}`);
//             setModaleID(response.data);
//             setTimeout(() => {
//                 setLoading(false);
//             }, 1000);

//         } catch (err) {
//             console.error('Error fetching modale by ID:', err);
//             setLoading(false);
//         }
//     };


//     const closeModal = () => {
//         setShowModal(false); // Close modal
//     };

//     const handlePremiumClick = () => {
//         setShowModal(true); // Show modal when a premium lesson is clicked
//     };

//     // Fetch lessons data
//     const fetchLessonesID = async () => {
//         try {
//             const response = await axios.get<LessonesID[]>('http://localhost:5000/api/submodale');
//             setLessonesID(response.data);
//         } catch (err) {
//             console.error('Error fetching lessons:', err);
//         }
//     };

//     const SkeletonLoader = () => (
//         <div className="space-y-4 p-4 bg-white shadow rounded-lg border-2 border-blue-500/50">
//             <div className="skeleton-loader h-8 bg-gray-300 w-1/3"></div>
//             <div className="skeleton-loader h-16 bg-gray-300 rounded-md"></div>
//             <div className="skeleton-loader h-8 bg-gray-300 w-1/4"></div>
//             <br />
//             <div className="skeleton-loader h-8 bg-gray-300 w-1/3"></div>
//             <div className="skeleton-loader h-16 bg-gray-300 rounded-md"></div>
//             <div className="skeleton-loader h-8 bg-gray-300 w-1/4"></div>
//             <br />
//             <div className="skeleton-loader h-8 bg-gray-300 w-1/3"></div>
//             <div className="skeleton-loader h-16 bg-gray-300 rounded-md"></div>
//             <div className="skeleton-loader h-8 bg-gray-300 w-1/4"></div>
//             <br />
//             <div className="skeleton-loader h-8 bg-gray-300 w-1/3"></div>
//             <div className="skeleton-loader h-16 bg-gray-300 rounded-md"></div>
//             <div className="skeleton-loader h-8 bg-gray-300 w-1/4"></div>
//         </div>

//     );


//     // Filter lessons based on the selected modale ID
//     const filteredLessons = (modaleId: number) => {
//         return lessonesID.filter((lesson) => lesson.modale_id === modaleId);
//     };

//     return (
//         <div className='pt-24'>
//             <Navbar />
//             <div className='max-w-screen-2xl mx-auto px-4'>
//                 {/* Show Skeleton Loader until data is loaded */}
//                 {loading ? (
//                     <>
//                         <SkeletonLoader />
//                     </>
//                 ) : (
//                     // Data Loaded
//                     <div>
//                         {modaleID.slice(0, 1).map((course) => (
//                             <div key={course.mod_id}>
//                                 <div className='text-blue-600 text-3xl font-NotoSansKhmer py-4'>
//                                     <p>{course.mod_name}</p>
//                                 </div>
//                                 <div className='px-4 py-7 bg-blue-100 text-gray-500 font-NotoSansKhmer line-clamp-3 rounded-xl'>
//                                     <p>{course.mod_status}</p>
//                                 </div>
//                             </div>
//                         ))}

//                         {/* Button to continue learning */}
//                         <div className='flex py-4'>
//                             <Link to={'/'} className='py-2 px-6 text-xs text-white bg-orange-500 rounded'>
//                                 បន្ដការរៀន
//                             </Link>
//                         </div>

//                         {/* Course List */}
//                         <div className="space-y-4 p-4 bg-white shadow rounded-lg border-2 border-blue-500/50">
//                             <h2 className='text-blue-600 text-3xl font-NotoSansKhmer'>Course</h2>
//                             {modaleID.map((course, index) => (
//                                 <div key={course.mod_id}>
//                                     <button
//                                         onClick={() => toggleDropdown(course.mod_id)}
//                                         className="flex w-full items-center text-left px-4 py-4 bg-blue-100 rounded"
//                                     >
//                                         <p className="h-8 w-8 text-center text-white bg-blue-600 rounded-full flex items-center justify-center mr-4">
//                                             {index + 1}
//                                         </p>
//                                         <div>
//                                             <p className="w-full items-center text-left bg-blue-100 rounded">
//                                                 {course.mod_name}
//                                             </p>
//                                         </div>
//                                     </button>
//                                     <div>
//                                         {dropdownOpen === course.mod_id && (
//                                             <div className='border-x border-b border-blue-200 py-2 px-8'>
//                                                 <div>
//                                                     {filteredLessons(course.mod_id).map((lesson) => (
//                                                         <div key={lesson.sub_id}>
//                                                             {lesson.course_type === 'premium' ? (

//                                                                 <div onClick={handlePremiumClick} className="px-4 py-2 mt-2 bg-slate-100 rounded hover:scale-105 duration-700 border-2 hover:border-blue-400 delay-300">
//                                                                     <p className="font-semibold">{lesson.sub_name}</p>
//                                                                     <p className='flex space-x-2 text-sm text-gray-500 font-light'>
//                                                                         <FaLock /> <span>lock</span>
//                                                                     </p>
//                                                                 </div>

//                                                             ) : (
//                                                                 <Link key={lesson.sub_id} to={`/course/${course.courses_id}/modales/${lesson.modale_id}/lessone/${lesson.sub_id}`}>
//                                                                     <div className="px-4 py-2 mt-2 bg-slate-100 rounded hover:scale-105 duration-700 border-2 hover:border-blue-400 delay-300">
//                                                                         <p className="font-semibold">{lesson.sub_name}</p>
//                                                                         <p className='flex space-x-2 text-sm text-gray-500 font-light'>
//                                                                             <FaLock /> <span>lock</span>
//                                                                         </p>
//                                                                     </div>
//                                                                 </Link>
//                                                             )}
//                                                         </div>

//                                                     ))}
//                                                 </div>
//                                             </div>
//                                         )}
//                                     </div>
//                                 </div>
//                             ))}
//                         </div>
//                     </div>
//                 )}

//                 {showModal && (
//                     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//                         <div className="bg-white rounded-lg p-8 w-full max-w-3xl shadow-lg relative">
//                             <h2 className="text-xl font-bold mb-4 text-center">Premium Lesson</h2>
//                             <div className="flex items-center justify-center">
//                                 <video
//                                     className="w-full max-w-2xl lg:h-96 md:h-72 h-56 object-contain rounded-lg"
//                                     controls
//                                     autoPlay // Added this attribute for autoplay
//                                 >
//                                     <source
//                                         src={Video} // Ensure Video is properly imported and accessible
//                                         type="video/mp4"
//                                     />
//                                     Your browser does not support the video tag.
//                                 </video>
//                             </div>


//                             {/* Close Button */}
//                             <button
//                                 onClick={closeModal}
//                                 className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-lg font-bold"
//                             >
//                                 ✕
//                             </button>
//                         </div>
//                     </div>

//                 )}

//             </div>
//         </div>
//     );
// }

// export default CourseModale;








/////////// check courses premiun and uszer login is admin and superadmin


import { useEffect, useState } from 'react';
import Navbar from '../../component/Navbar';
import { FaLock } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';
import Video from '../../assets/1734583716986WIN_20231125_12_38_52_Pro.mp4'
import Footer from '../../component/Footer';


// Define the types correctly
interface ModaleID {
    mod_id: number;
    mod_name: string;
    courses_id: number;
    quiz_id: number;
    mod_status?: string;
    create_at?: string | null;
    update_at?: string | null;
    delete_at?: string | null;
    description?: string | null;
    user_id?: number;
    user_at?: string;
    user_update?: string;
}

interface LessonesID {
    sub_id: number;
    sub_name: string;
    modale_id: number;
    courses_id: number;
    title: string;
    code: string;
    course_type: 'free' | 'premium';
}

function CourseModale() {
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
    const [modaleID, setModaleID] = useState<ModaleID[]>([]);
    const [lessonesID, setLessonesID] = useState<LessonesID[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Loading state
    const [showModal, setShowModal] = useState<boolean>(false);
    const [showFullDescription, setShowFullDescription] = useState<boolean>(false);

    const [UserLoginType, setUserLoginType] = useState<string | null>("");

    useEffect(() => {
        const storedRol = localStorage.getItem("user_role");

        if (storedRol) {
            setUserLoginType(storedRol);
        }
    }, []);

    const { id } = useParams();

    // Toggle dropdown logic
    const toggleDropdown = (id: number) => {
        setDropdownOpen((prev) => (prev === id ? null : id));
    };


    useEffect(() => {
        if (id) {
            fetchModaleID(Number(id));
        }
        fetchLessonesID();
    }, [id]);

    const fetchModaleID = async (id: number) => {
        try {
            const response = await axios.get<ModaleID[]>(`http://localhost:5000/api/modale/${id}`);
            setModaleID(response.data);
            setTimeout(() => {
                setLoading(false);
            }, 1000);

        } catch (err) {
            console.error('Error fetching modale by ID:', err);
            setLoading(false);
        }
    };


    const closeModal = () => {
        setShowModal(false); // Close modal
    };

    const handlePremiumClick = () => {
        setShowModal(true); // Show modal when a premium lesson is clicked
    };

    // Fetch lessons data
    const fetchLessonesID = async () => {
        try {
            const response = await axios.get<LessonesID[]>('http://localhost:5000/api/submodale');
            setLessonesID(response.data);
        } catch (err) {
            console.error('Error fetching lessons:', err);
        }
    };

    const SkeletonLoader = () => (
        <div className="space-y-4 p-4 bg-white shadow rounded-lg border-2 border-blue-500/50">
            <div className="skeleton-loader h-8 bg-gray-300 w-1/3"></div>
            <div className="skeleton-loader h-16 bg-gray-300 rounded-md"></div>
            <div className="skeleton-loader h-8 bg-gray-300 w-1/4"></div>
            <br />
            <div className="skeleton-loader h-8 bg-gray-300 w-1/3"></div>
            <div className="skeleton-loader h-16 bg-gray-300 rounded-md"></div>
            <div className="skeleton-loader h-8 bg-gray-300 w-1/4"></div>
            <br />
            <div className="skeleton-loader h-8 bg-gray-300 w-1/3"></div>
            <div className="skeleton-loader h-16 bg-gray-300 rounded-md"></div>
            <div className="skeleton-loader h-8 bg-gray-300 w-1/4"></div>
            <br />
            <div className="skeleton-loader h-8 bg-gray-300 w-1/3"></div>
            <div className="skeleton-loader h-16 bg-gray-300 rounded-md"></div>
            <div className="skeleton-loader h-8 bg-gray-300 w-1/4"></div>
        </div>

    );


    const handleToggleDescription = () => {
        setShowFullDescription(!showFullDescription);
    };

    // Filter lessons based on the selected modale ID
    const filteredLessons = (modaleId: number) => {
        return lessonesID.filter((lesson) => lesson.modale_id === modaleId);
    };



    return (
        <div className='pt-24'>
            <Navbar />
            <div className='max-w-screen-2xl mx-auto px-4'>
                {/* Show Skeleton Loader until data is loaded */}
                {loading ? (
                    <>
                        <SkeletonLoader />
                    </>
                ) : (
                    // Data Loaded
                    <div>
                        {modaleID.slice(0, 1).map((course) => (
                            <div key={course.mod_id}>
                                <div className='text-blue-600 text-3xl font-NotoSansKhmer py-4'>
                                    <p>{course.mod_name}</p>
                                </div>
                                {/* <div className='px-4 py-7 bg-blue-100 text-gray-500 font-NotoSansKhmer line-clamp-3 rounded-xl'> */}
                                <div className="relative">
                                    <p
                                        className={`text-md text-gray-700 space-x-4 px-2 ${showFullDescription ? 'block' : 'line-clamp-4'}`}
                                    >
                                        <span>{course.description}</span>
                                    </p>
                                    <button
                                        onClick={handleToggleDescription}
                                        className="mt-3 px-8 text-blue-600 hover:underline focus:outline-none"
                                    >
                                        {showFullDescription ? "បន្ថយ" : "មើលបន្ថែម"}
                                    </button>
                                </div>
                                {/* </div> */}
                            </div>
                        ))}

                        {/* Button to continue learning */}
                        <div className='flex py-4'>
                            <Link to={'/'} className='py-2 px-6 text-xs text-white bg-orange-500 rounded'>
                                បន្ដការរៀន
                            </Link>
                        </div>

                        {/* Course List */}
                        <div className="space-y-4 p-4 bg-white shadow rounded-lg border-2 border-blue-500/50">
                            <h2 className='text-blue-600 text-3xl font-NotoSansKhmer'>Course</h2>
                            {modaleID.map((course, index) => (
                                <div key={course.mod_id}>
                                    <button
                                        onClick={() => toggleDropdown(course.mod_id)}
                                        className="flex w-full items-center text-left px-4 py-4 bg-blue-100 rounded"
                                    >
                                        <p className="h-8 w-8 text-center text-white bg-blue-600 rounded-full flex items-center justify-center mr-4">
                                            {index + 1}
                                        </p>
                                        <div>
                                            <p className="w-full items-center text-left bg-blue-100 rounded">
                                                {course.mod_name}
                                            </p>
                                        </div>
                                    </button>
                                    <div>
                                        {dropdownOpen === course.mod_id && (
                                            <div className="border-x border-b border-blue-200 py-2 px-8">
                                                <div>
                                                    {filteredLessons(course.mod_id).map((lesson) => (
                                                        <div key={lesson.sub_id}>
                                                            {UserLoginType === "admin" || UserLoginType === "super_admin" ? (
                                                                <Link
                                                                    key={lesson.sub_id}
                                                                    to={`/course/${course.courses_id}/modales/${lesson.modale_id}/lessone/${lesson.sub_id}`}
                                                                >
                                                                    <div className="px-4 py-2 mt-2 bg-slate-100 rounded hover:scale-105 duration-700 border-2 hover:border-blue-400 delay-300">
                                                                        <p className="font-semibold">{lesson.sub_name}</p>
                                                                        <p className="flex space-x-2 text-sm text-gray-500 font-light">
                                                                            <FaLock /> <span>lock</span>
                                                                        </p>
                                                                    </div>
                                                                </Link>
                                                            ) : lesson.course_type === "premium" ? (
                                                                <div
                                                                    onClick={handlePremiumClick}
                                                                    className="px-4 py-2 mt-2 bg-slate-100 rounded hover:scale-105 duration-700 border-2 hover:border-blue-400 delay-300 cursor-pointer"
                                                                >
                                                                    <p className="font-semibold">{lesson.sub_name}</p>
                                                                    <p className="flex space-x-2 text-sm text-gray-500 font-light">
                                                                        <FaLock /> <span>lock</span>
                                                                    </p>
                                                                </div>
                                                            ) : (
                                                                <Link
                                                                    key={lesson.sub_id}
                                                                    to={`/course/${course.courses_id}/modales/${lesson.modale_id}/lessone/${lesson.sub_id}`}
                                                                >
                                                                    <div className="px-4 py-2 mt-2 bg-slate-100 rounded hover:scale-105 duration-700 border-2 hover:border-blue-400 delay-300">
                                                                        <p className="font-semibold">{lesson.sub_name}</p>
                                                                        <p className="flex space-x-2 text-sm text-gray-500 font-light">
                                                                            <FaLock /> <span>lock</span>
                                                                        </p>
                                                                    </div>
                                                                </Link>
                                                            )}
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {showModal && (
                    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                        <div className="bg-white rounded-lg p-8 w-full max-w-3xl shadow-lg relative">
                            <h2 className="text-xl font-bold mb-4 text-center">Premium Lesson</h2>
                            <div className="flex items-center justify-center">
                                <video
                                    className="w-full max-w-2xl lg:h-96 md:h-72 h-56 object-contain rounded-lg"
                                    controls
                                    autoPlay // Added this attribute for autoplay
                                >
                                    <source
                                        src={Video} // Ensure Video is properly imported and accessible
                                        type="video/mp4"
                                    />
                                    Your browser does not support the video tag.
                                </video>
                            </div>


                            {/* Close Button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 text-gray-500 hover:text-gray-800 text-lg font-bold"
                            >
                                ✕
                            </button>
                        </div>
                    </div>

                )}

            </div>
            <Footer />
        </div>
    );
}

export default CourseModale;