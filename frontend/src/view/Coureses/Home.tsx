// import React, { useEffect, useState } from 'react';
// import Navbar from '../../component/Navbar';
// import { FaBookReader, FaBusinessTime, FaArchive, FaFile } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// import Footer from '../../component/Footer';
// import axios from 'axios';

// interface Course {
//   cous_id: number;
//   cous_name: string;
//   description: string;
//   lesson: string;
//   chapter: string;
//   status: 'off' | 'no';
//   document: string;
//   exam: string;
//   course_type: 'free' | 'premium';
// }

// function Home() {
//   const [searchTerm, setSearchTerm] = useState<string>('');
//   const [filter, setFilter] = useState<string>('');
//   const [courses, setCourses] = useState<Course[]>([]);
//   const [error, setError] = useState<string | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);

//   useEffect(() => {
//     const fetchCourses = async () => {
//       try {
//         const response = await axios.get<Course[]>('http://localhost:5000/api/couses');
//         setCourses(response.data);
//         console.log(response.data);
//       } catch (err) {
//         console.error('Error fetching courses:', err);
//         setError('Failed to fetch courses. Please try again later.');
//       } finally {
//         setTimeout(() => {
//           setLoading(false); // After 3 seconds, stop loading
//         }, 3000);
//       }
//     };

//     fetchCourses();
//   }, []);

//   const filteredCourses = courses.filter(course => {
//     const matchesSearch = course.cous_name && course.cous_name.toLowerCase().includes(searchTerm.toLowerCase());
//     const matchesFilter = filter ? course.course_type === filter : true;
//     return matchesSearch && matchesFilter;
//   });

//   return (
//     <div className='pt-24'>
//       <Navbar />

//       <div className='max-w-screen-2xl mx-auto px-4'>
//         <div className='mb-6 flex gap-4'>
//           <input
//             type='text'
//             placeholder='ស្វែងរកវគ្គសិក្សា ...'
//             className='border p-2 rounded w-full'
//             value={searchTerm}
//             onChange={e => setSearchTerm(e.target.value)}
//           />
//           <select
//             className="border p-2 rounded w-[170px]"
//             value={filter}
//             onChange={e => setFilter(e.target.value)}
//           >
//             <option value="">ទាំងអស់</option>
//             <option value="free">ឥតគិតថ្លៃ</option>
//             <option value="premium">គិតថ្លៃ</option>
//           </select>
//         </div>

//         {error && <p className='text-red-500'>{error}</p>}

//         {/* Loading state */}
//         {loading ? (
//           <div className="flex justify-center py-8">
//             <div role="status" className="max-w-sm animate-pulse">
//               <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-700 w-48 mb-4"></div>
//               <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px] mb-2.5"></div>
//               <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 mb-2.5"></div>
//               <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[330px] mb-2.5"></div>
//               <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[300px] mb-2.5"></div>
//               <div className="h-2 bg-gray-200 rounded-full dark:bg-gray-700 max-w-[360px]"></div>
//               <span className="sr-only">Loading...</span>
//             </div>
//           </div>
//         ) : (
//           <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
//             {filteredCourses.map(course => (
//               <div key={course.cous_id} className={`relative`}>
//                 {course.status === "off" ? (
//                   <div className="pointer-events-none cursor-none opacity-50 shadow-lg rounded-lg border hover:border-b-orange-500 hover:border-x-orange-500">
//                     <Link
//                       to={`/modales/${course.cous_id}/course`}
//                       className=''
//                     >
//                       <div className='bg-gray-500/50 text-sm justify-between flex px-2 py-1 rounded-t-lg'>
//                         <h2 className='px-3 py-1 text-white'>
//                           {course.course_type} <span>Course</span>
//                         </h2>
//                         {course.course_type === 'premium' ? (
//                           <p className='px-3 py-1 rounded opacity-70 text-white bg-gray-500 uppercase'>
//                             {course.course_type}
//                           </p>
//                         ) : (
//                           <p className='px-3 py-1 rounded opacity-70 text-white bg-green-500 uppercase'>
//                             {course.course_type}
//                           </p>
//                         )}
//                       </div>
//                       <div className='px-4 py-6'>
//                         <h2 className='text-orange-500 text-xl pb-2'>{course.cous_name}</h2>
//                         <p className='text-gray-500 line-clamp-4'>{course.description}</p>
//                         <div className='grid grid-cols-2 py-4 gap-4'>
//                           <div className='text-gray-500 text-sm space-y-2'>
//                             <p className='flex space-x-2'>
//                               <strong>
//                                 <FaBookReader />
//                               </strong>
//                               <span>{course.lesson} មេរៀន</span>
//                             </p>
//                             <p className='flex space-x-2'>
//                               <strong>
//                                 <FaBusinessTime />
//                               </strong>
//                               <span>{course.chapter} ជុំពូក</span>
//                             </p>
//                           </div>
//                           <div className='text-gray-500 text-sm space-y-2'>
//                             <p className='flex space-x-2'>
//                               <strong>
//                                 <FaArchive />
//                               </strong>
//                               <span>{course.exam} ចំនួន</span>
//                             </p>
//                             <p className='flex space-x-2'>
//                               <strong>
//                                 <FaFile />
//                               </strong>
//                               <span>{course.document} ឯកសារ</span>
//                             </p>
//                           </div>
//                         </div>
//                         <div className='w-full bg-orange-500/80 hover:bg-orange-500 text-center py-2 rounded text-white cursor-not-allowed'>
//                           <p>រៀនបន្ដរ</p>
//                         </div>
//                       </div>
//                     </Link>
//                   </div>
//                 ) : (
//                   <div className="shadow-lg rounded-lg border hover:border-b-orange-500 hover:border-x-orange-500">
//                     <Link
//                       to={`/modales/${course.cous_id}/course`}
//                       className=''
//                     >
//                       <div className='bg-gray-500/50 text-sm justify-between flex px-2 py-1 rounded-t-lg'>
//                         <h2 className='px-3 py-1 text-white'>
//                           {course.course_type} <span>Course</span>
//                         </h2>
//                         {course.course_type === 'premium' ? (
//                           <p className='px-3 py-1 rounded opacity-70 text-white bg-gray-500 uppercase'>
//                             {course.course_type}
//                           </p>
//                         ) : (
//                           <p className='px-3 py-1 rounded opacity-70 text-white bg-green-500 uppercase'>
//                             {course.course_type}
//                           </p>
//                         )}
//                       </div>
//                       <div className='px-4 py-6'>
//                         <h2 className='text-orange-500 text-xl pb-2'>{course.cous_name}</h2>
//                         <p className='text-gray-500 line-clamp-4'>{course.description}</p>
//                         <div className='grid grid-cols-2 py-4 gap-4'>
//                           <div className='text-gray-500 text-sm space-y-2'>
//                             <p className='flex space-x-2'>
//                               <strong>
//                                 <FaBookReader />
//                               </strong>
//                               <span>{course.lesson} មេរៀន</span>
//                             </p>
//                             <p className='flex space-x-2'>
//                               <strong>
//                                 <FaBusinessTime />
//                               </strong>
//                               <span>{course.chapter} ជុំពូក</span>
//                             </p>
//                           </div>
//                           <div className='text-gray-500 text-sm space-y-2'>
//                             <p className='flex space-x-2'>
//                               <strong>
//                                 <FaArchive />
//                               </strong>
//                               <span>{course.exam} ចំនួន</span>
//                             </p>
//                             <p className='flex space-x-2'>
//                               <strong>
//                                 <FaFile />
//                               </strong>
//                               <span>{course.document} ឯកសារ</span>
//                             </p>
//                           </div>
//                         </div>
//                         <div className='w-full bg-orange-500/80 hover:bg-orange-500 text-center py-2 rounded text-white'>
//                           <p>រៀនបន្ដរ</p>
//                         </div>
//                       </div>
//                     </Link>
//                   </div>
//                 )}
//               </div>
//             ))}
//           </div>
//         )}
//       </div>
//       <Footer />
//     </div>
//   );
// }

// export default Home;



import React, { useEffect, useState } from 'react';
import Navbar from '../../component/Navbar';
import { FaBookReader, FaBusinessTime, FaArchive, FaFile } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Footer from '../../component/Footer';
import axios from 'axios';

interface Course {
  cous_id: number;
  cous_name: string;
  description: string;
  lesson: string;
  chapter: string;
  status: 'off' | 'no';
  document: string;
  exam: string;
  course_type: 'free' | 'premium';
}

function Home() {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [filter, setFilter] = useState<string>('');
  const [courses, setCourses] = useState<Course[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get<Course[]>('http://localhost:5000/api/couses');
        setCourses(response.data);
        console.log(response.data);
      } catch (err) {
        console.error('Error fetching courses:', err);
        setError('Failed to fetch courses. Please try again later.');
      } finally {
        setTimeout(() => {
          setLoading(false); // After 3 seconds, stop loading
        }, 1000);
      }
    };

    fetchCourses();
  }, []);

  const filteredCourses = courses.filter(course => {
    const matchesSearch = course.cous_name && course.cous_name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter ? course.course_type === filter : true;
    return matchesSearch && matchesFilter;
  });

  // Define a helper function for the skeleton loader
  const renderSkeletonLoader = () => {
    const skeletonItems = Array.from({ length: 6 }); // Adjust the length based on how many skeletons you want
    return skeletonItems.map((_, index) => (
      <div key={index} className="relative animate-pulse">
        <div className="h-40 bg-gray-200 rounded-lg mb-4"></div>
        <div className="h-6 bg-gray-200 rounded-full w-3/4 mb-2"></div>
        <div className="h-4 bg-gray-200 rounded-full w-1/2"></div>
        <div className="mt-4 h-6 bg-gray-200 rounded-full w-1/3"></div>
      </div>
    ));
  };

  return (
    <div className='pt-24'>
      <Navbar />

      <div className='max-w-screen-2xl mx-auto px-4'>
        {loading ? (
          <div className='flex gap-4 py-2'>
            {/* Skeleton for Search Bar */}
            <div className='w-full h-10 bg-gray-300 rounded animate-pulse'></div>
            <div className='w-[170px] h-10 bg-gray-300 rounded animate-pulse'></div>
          </div>
        ) : (
          <div className='mb-6 flex gap-4'>
            <input
              type='text'
              placeholder='ស្វែងរកវគ្គសិក្សា ...'
              className='border p-2 rounded w-full'
              value={searchTerm}
              onChange={e => setSearchTerm(e.target.value)}
            />
            <select
              className="border p-2 rounded w-[170px]"
              value={filter}
              onChange={e => setFilter(e.target.value)}
            >
              <option value="">ទាំងអស់</option>
              <option value="free">ឥតគិតថ្លៃ</option>
              <option value="premium">គិតថ្លៃ</option>
            </select>
          </div>

        )}

        {error && <p className='text-red-500'>{error}</p>}

        {/* Loading state */}
        {loading ? (
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            {renderSkeletonLoader()}
          </div>
        ) : (
          <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4'>
            {filteredCourses.map(course => (
              <div key={course.cous_id} className={`relative`}>
                {course.status === "off" ? (
                  <div className="pointer-events-none cursor-none opacity-50 shadow-lg rounded-lg border hover:border-b-orange-500 hover:border-x-orange-500">
                    <Link
                      to={`/modales/${course.cous_id}/course`}
                      className=''
                    >
                      <div className='bg-blue-800/50 text-sm justify-between flex px-2 py-1 rounded-t-lg'>
                        <h2 className='px-3 py-1 text-white'>
                          {course.course_type} <span>Course</span>
                        </h2>
                        {course.course_type === 'premium' ? (
                          <p className='px-3 py-1 rounded opacity-70 text-white bg-purple-700 uppercase'>
                            {course.course_type}
                          </p>
                        ) : (
                          <p className='px-3 py-1 rounded opacity-70 text-white bg-green-500 uppercase'>
                            {course.course_type}
                          </p>
                        )}
                      </div>
                      <div className='px-4 py-6'>
                        <h2 className='text-blue-500 text-xl pb-2'>{course.cous_name}</h2>
                        <p className='text-gray-500 line-clamp-4'>{course.description}</p>
                        <div className='grid grid-cols-2 py-4 gap-4'>
                          <div className='text-gray-500 text-sm space-y-2'>
                            <p className='flex space-x-2'>
                              <strong>
                                <FaBookReader />
                              </strong>
                              <span>{course.lesson} មេរៀន</span>
                            </p>
                            <p className='flex space-x-2'>
                              <strong>
                                <FaBusinessTime />
                              </strong>
                              <span>{course.chapter} ជុំពូក</span>
                            </p>
                          </div>
                          <div className='text-gray-500 text-sm space-y-2'>
                            <p className='flex space-x-2'>
                              <strong>
                                <FaArchive />
                              </strong>
                              <span>{course.exam} ចំនួន</span>
                            </p>
                            <p className='flex space-x-2'>
                              <strong>
                                <FaFile />
                              </strong>
                              <span>{course.document} ឯកសារ</span>
                            </p>
                          </div>
                        </div>
                        <div className='w-full bg-blue-500/80 hover:bg-blue-500 text-center py-2 rounded text-white cursor-not-allowed'>
                          <p>រៀនបន្ដរ</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                ) : (
                  <div className="shadow-lg rounded-lg border hover:border-b-blue-500 hover:border-x-blue-500">
                    <Link
                      to={`/modales/${course.cous_id}/course`}
                      className=''
                    >
                      <div className='bg-blue-800/90 text-sm justify-between flex px-2 py-1 rounded-t-lg'>
                        <h2 className='px-3 py-1 text-white'>
                          {course.course_type} <span>Course</span>
                        </h2>
                        {course.course_type === 'premium' ? (
                          <p className='px-3 py-1 rounded opacity-70 text-white bg-purple-700 uppercase'>
                            {course.course_type}
                          </p>
                        ) : (
                          <p className='px-3 py-1 rounded text-white bg-green-600 uppercase'>
                            {course.course_type}
                          </p>
                        )}
                      </div>
                      <div className='px-4 py-6'>
                        <h2 className='text-blue-500 text-xl pb-2'>{course.cous_name}</h2>
                        <p className='text-gray-500 line-clamp-4'>{course.description}</p>
                        <div className='grid grid-cols-2 py-4 gap-4'>
                          <div className='text-gray-500 text-sm space-y-2'>
                            <p className='flex space-x-2'>
                              <strong>
                                <FaBookReader />
                              </strong>
                              <span>{course.lesson} មេរៀន</span>
                            </p>
                            <p className='flex space-x-2'>
                              <strong>
                                <FaBusinessTime />
                              </strong>
                              <span>{course.chapter} ជុំពូក</span>
                            </p>
                          </div>
                          <div className='text-gray-500 text-sm space-y-2'>
                            <p className='flex space-x-2'>
                              <strong>
                                <FaArchive />
                              </strong>
                              <span>{course.exam} ចំនួន</span>
                            </p>
                            <p className='flex space-x-2'>
                              <strong>
                                <FaFile />
                              </strong>
                              <span>{course.document} ឯកសារ</span>
                            </p>
                          </div>
                        </div>
                        <div className='w-full bg-blue-500/80 hover:bg-blue-500 text-center py-2 rounded text-white'>
                          <p>រៀនបន្ដរ</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
