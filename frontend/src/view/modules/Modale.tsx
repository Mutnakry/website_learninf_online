// // import { useEffect, useState } from 'react';
// // import Navbar from '../../component/Navbar';
// // import { FaLock } from "react-icons/fa";
// // import { Link } from 'react-router-dom';
// // import axios from 'axios';

// // // Define the types correctly
// // interface ModaleID {
// //     mod_id: number; // Instead of 'id'
// //     mod_name: string;
// //     courses_id: number;
// //     quiz_id: number;
// //     mod_status?: string;
// //     create_at?: string | null;
// //     update_at?: string | null;
// //     delete_at?: string | null;
// //     user_id?: number;
// //     user_at?: string;
// //     user_update?: string;
// // }

// // interface LessonesID {
// //     les_id: number; // Instead of 'id'
// //     les_name: string;
// //     modale_id: number;
// //     courses_id: number;
// //     title: string;
// //     code:string;
// // }

// // function CourseModale() {
// //     // State to track which dropdown is open
// //     const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
// //     const [modaleID, setModaleID] = useState<ModaleID[]>([]);
// //     const [lessonesID, setLessonesID] = useState<LessonesID[]>([]);

// //     // Toggle dropdown logic
// //     const toggleDropdown = (id: number) => {
// //         setDropdownOpen((prev) => (prev === id ? null : id));
// //     };

// //     useEffect(() => {
// //         fetchModaleID();
// //         fetchLessonesID();
// //     }, []);

// //     const fetchModaleID = async () => {
// //         try {
// //             const response = await axios.get<ModaleID[]>('http://localhost:5000/api/modale');
// //             setModaleID(response.data);
// //             console.log(response.data);
// //         } catch (err) {
// //             console.error('Error fetching modales:', err);
// //         }
// //     };

// //     const fetchLessonesID = async () => {
// //         try {
// //             const response = await axios.get<LessonesID[]>('http://localhost:5000/api/lessone');
// //             setLessonesID(response.data);
// //             console.log(response.data);
// //         } catch (err) {
// //             console.error('Error fetching lessons:', err);
// //         }
// //     };

// //     // Filter lessons based on the selected modale ID
// //     const filteredLessons = (modaleId: number) => {
// //         return lessonesID.filter((lesson) => lesson.modale_id === modaleId);
// //     };

// //     return (
// //         <div className='pt-24'>
// //             <Navbar />
// //             <div className='max-w-screen-2xl mx-auto px-4'>
// //                 <div>
// //                     {modaleID.slice(0, 1).map((course) => (
// //                         <div key={course.mod_id}>
// //                             <div className='text-blue-600 text-3xl font-NotoSansKhmer py-4'>
// //                                 <p>{course.mod_name}</p>
// //                             </div>
// //                             <div className='px-4 py-7 bg-blue-100 text-gray-500 font-NotoSansKhmer line-clamp-3 rounded-xl'>
// //                                 <p>{course.mod_status}</p>
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //                 <div className='flex py-4'>
// //                     <Link to={'/'} className='py-2 px-6 text-xs text-white bg-orange-500 rounded'>
// //                         បន្ដការរៀន
// //                     </Link>
// //                 </div>
// //                 <div className="space-y-4 p-4 bg-white shadow rounded-lg border-2 border-blue-500/50">
// //                     <h2 className='text-blue-600 text-3xl font-NotoSansKhmer'>Course</h2>
// //                     {modaleID.map((course, index) => (
// //                         <div key={course.mod_id}>
// //                             <button
// //                                 onClick={() => toggleDropdown(course.mod_id)}
// //                                 className="flex w-full items-center text-left px-4 py-4 bg-blue-100 rounded"
// //                             >
// //                                 <p className="h-8 w-8 text-center text-white bg-blue-600 rounded-full flex items-center justify-center mr-4">
// //                                     {index + 1}
// //                                 </p>
// //                                 <div>
// //                                     <p className="w-full items-center text-left bg-blue-100 rounded">
// //                                         {course.mod_name}
// //                                     </p>
// //                                 </div>
// //                             </button>
// //                             <div>
// //                                 {dropdownOpen === course.mod_id && (
// //                                     <div className='border-x border-b border-blue-200 py-2 px-8'>
// //                                         <div>
// //                                             {filteredLessons(course.mod_id).map((lesson) => (
// //                                                 <Link
// //                                                     key={lesson.les_id}
// //                                                     to={`/course/${course.mod_id}/modales/${lesson.les_id}/lessons/${lesson.les_id}`}
// //                                                 >
// //                                                     <div className="px-4 py-2 mt-2 bg-slate-100 rounded hover:scale-105 duration-700 border-2 hover:border-blue-400 delay-300">
// //                                                         <p className="font-semibold">{lesson.les_name}</p>
// //                                                         <p className='flex space-x-2 text-sm text-gray-500 font-light'>
// //                                                             <FaLock /> <span>lock</span>
// //                                                         </p>
// //                                                     </div>
// //                                                 </Link>
// //                                             ))}
// //                                         </div>
// //                                     </div>
// //                                 )}
// //                             </div>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default CourseModale;




// import { useEffect, useState } from 'react';
// import Navbar from '../../component/Navbar';
// import { FaLock } from "react-icons/fa";
// import { Link } from 'react-router-dom';
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
//     les_id: number;
//     les_name: string;
//     modale_id: number;
//     courses_id: number;
//     title: string;
//     code: string;
// }

// function CourseModale() {
//     // State to track which dropdown is open
//     const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
//     const [modaleID, setModaleID] = useState<ModaleID[]>([]);
//     const [lessonesID, setLessonesID] = useState<LessonesID[]>([]);
//     const [loading, setLoading] = useState<boolean>(true); // Loading state

//     // Toggle dropdown logic
//     const toggleDropdown = (id: number) => {
//         setDropdownOpen((prev) => (prev === id ? null : id));
//     };

//     useEffect(() => {
//         fetchModaleID();
//         fetchLessonesID();
//     }, []);

//     // Fetch modale data
//     const fetchModaleID = async () => {
//         try {
//             const response = await axios.get<ModaleID[]>('http://localhost:5000/api/modale');
//             setModaleID(response.data);

//             // Simulate loading time with setTimeout
//             setTimeout(() => {
//                 setLoading(false); // Set loading to false after 3 seconds
//             }, 1000);

//         } catch (err) {
//             console.error('Error fetching modales:', err);
//             setLoading(false); // If error, stop loading
//         }
//     };

//     // Fetch lessons data
//     const fetchLessonesID = async () => {
//         try {
//             const response = await axios.get<LessonesID[]>('http://localhost:5000/api/lessone');
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
//                                                         <Link
//                                                             key={lesson.les_id}
//                                                             to={`/course/${course.mod_id}/modales/${lesson.les_id}/lessons/${lesson.les_id}`}
//                                                         >
//                                                             <div className="px-4 py-2 mt-2 bg-slate-100 rounded hover:scale-105 duration-700 border-2 hover:border-blue-400 delay-300">
//                                                                 <p className="font-semibold">{lesson.les_name}</p>
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








import { useEffect, useState } from 'react';
import Navbar from '../../component/Navbar';
import { FaLock } from "react-icons/fa";
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';

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
    user_id?: number;
    user_at?: string;
    user_update?: string;
}

interface LessonesID {
    les_id: number;
    les_name: string;
    modale_id: number;
    courses_id: number;
    title: string;
    code: string;
}

function CourseModale() {
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);
    const [modaleID, setModaleID] = useState<ModaleID[]>([]);
    const [lessonesID, setLessonesID] = useState<LessonesID[]>([]);
    const [loading, setLoading] = useState<boolean>(true); // Loading state
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


    // Fetch lessons data
    const fetchLessonesID = async () => {
        try {
            const response = await axios.get<LessonesID[]>('http://localhost:5000/api/lessone');
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
                                <div className='px-4 py-7 bg-blue-100 text-gray-500 font-NotoSansKhmer line-clamp-3 rounded-xl'>
                                    <p>{course.mod_status}</p>
                                </div>
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
                                            <div className='border-x border-b border-blue-200 py-2 px-8'>
                                                <div>
                                                    {filteredLessons(course.mod_id).map((lesson) => (
                                                        // <Link
                                                        //     key={lesson.les_id}
                                                        //     // to={`/course/${course.mod_id}/modales/${lesson.les_id}}`}
                                                        //     to={`/course/${course.mod_id}/modales/${lesson.les_id}/lessons/${lesson.les_id}`}
                                                        // >
                                                        //     <div className="px-4 py-2 mt-2 bg-slate-100 rounded hover:scale-105 duration-700 border-2 hover:border-blue-400 delay-300">
                                                        //         <p className="font-semibold">{lesson.les_name}</p>
                                                        //         <p className='flex space-x-2 text-sm text-gray-500 font-light'>
                                                        //             <FaLock /> <span>lock</span>
                                                        //         </p>
                                                        //     </div>
                                                        // </Link>

                                                        <Link
                                                        key={lesson.les_id}
                                                        // to={`/course/${course.mod_id}/modales/${lesson.les_id}}`}
                                                        to={`/course/${course.courses_id}/modales/${lesson.modale_id}`}
                                                    >
                                                        <div className="px-4 py-2 mt-2 bg-slate-100 rounded hover:scale-105 duration-700 border-2 hover:border-blue-400 delay-300">
                                                            <p className="font-semibold">{lesson.les_name}</p>
                                                            <p className='flex space-x-2 text-sm text-gray-500 font-light'>
                                                                <FaLock /> <span>lock</span>
                                                            </p>
                                                        </div>
                                                    </Link>

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
            </div>
        </div>
    );
}

export default CourseModale;
