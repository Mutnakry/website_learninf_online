// // // // import { useEffect, useState } from 'react';
// // // // import Navbar from '../../component/Navbar';
// // // // import { FaLock } from "react-icons/fa";
// // // // import { Link } from 'react-router-dom';
// // // // import axios from 'axios';

// // // // // Define the interface for the lessons
// // // // interface LessonesID {
// // // //     les_id: number;
// // // //     les_name: string;
// // // //     modale_id: number;
// // // //     courses_id: number;
// // // //     title: string;
// // // //     code: string;
// // // //     video: string;
// // // //     image: string;
// // // // }

// // // // function CourseModale() {
// // // //     const [lessonesID, setLessonesID] = useState<LessonesID[]>([]);
// // // //     const [loading, setLoading] = useState<boolean>(true);
// // // //     const [error, setError] = useState<string | null>(null);

// // // //     useEffect(() => {
// // // //         fetchLessonesID();
// // // //     }, []);

// // // //     const fetchLessonesID = async () => {
// // // //         try {
// // // //             const response = await axios.get<LessonesID[]>('http://localhost:5000/api/lessone');
// // // //             setLessonesID(response.data);
// // // //         } catch (err) {
// // // //             console.error('Error fetching lessons:', err);
// // // //             setError('Failed to fetch lessons.');
// // // //         } finally {
// // // //             setLoading(false);
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div className='pt-24'>
// // // //             <Navbar />
// // // //             <div className='max-w-screen-2xl mx-auto px-4'>
// // // //                 {loading ? (
// // // //                     <div className='text-center py-8'>
// // // //                         <p>Loading lessons...</p>
// // // //                     </div>
// // // //                 ) : error ? (
// // // //                     <div className='text-center text-red-500 py-8'>
// // // //                         <p>{error}</p>
// // // //                     </div>
// // // //                 ) : (
// // // //                     <div>
// // // //                         {lessonesID.map((lesson) => (
// // // //                             <div key={lesson.les_id} className='mb-8'>
// // // //                                 {/* Lesson Code Block */}
// // // //                                 <div className='px-4 py-7 bg-blue-100 text-gray-700 font-NotoSansKhmer rounded-xl mb-4'>
// // // //                                     <pre className='whitespace-pre-wrap'>{lesson.code || 'No code available'}</pre>
// // // //                                 </div>

// // // //                                 {/* Video Section */}
// // // //                                 {lesson.video ? (
// // // //                                     <div className='mb-4'>
// // // //                                         <video
// // // //                                             controls
// // // //                                             className='w-full max-w-lg rounded-md shadow-md'
// // // //                                         >
// // // //                                             <source src={lesson.video} type="video/mp4" />
// // // //                                             Your browser does not support the video tag.
// // // //                                         </video>
// // // //                                     </div>
// // // //                                 ) : (
// // // //                                     <p className='text-gray-500 mb-4'>No video available</p>
// // // //                                 )}

// // // //                                 {/* Image Section */}
// // // //                                 {lesson.image ? (
// // // //                                     <div className='mb-4'>
// // // //                                         <img
// // // //                                             src={lesson.image}
// // // //                                             alt={`Lesson ${lesson.les_name}`}
// // // //                                             className='w-full max-w-lg rounded-md shadow-md'
// // // //                                         />
// // // //                                     </div>
// // // //                                 ) : (
// // // //                                     <p className='text-gray-500'>No image available</p>
// // // //                                 )}
// // // //                             </div>
// // // //                         ))}
// // // //                     </div>
// // // //                 )}
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // }

// // // // export default CourseModale;











// // // import { useEffect, useState } from 'react';
// // // import Navbar from '../../component/Navbar';
// // // import axios from 'axios';

// // // // Define the interface for the lessons
// // // interface LessonesID {
// // //     les_id: number;
// // //     les_name: string;
// // //     modale_id: number;
// // //     courses_id: number;
// // //     title: string;
// // //     code: string;
// // //     video: string;
// // //     image: string;
// // // }

// // // function CourseModale() {
// // //     const [lessonesID, setLessonesID] = useState<LessonesID[]>([]);
// // //     const [loading, setLoading] = useState<boolean>(true);
// // //     const [error, setError] = useState<string | null>(null);

// // //     useEffect(() => {
// // //         fetchLessonesID();
// // //     }, []);

// // //     const fetchLessonesID = async () => {
// // //         try {
// // //             const response = await axios.get<LessonesID[]>('http://localhost:5000/api/lessone');
// // //             setLessonesID(response.data);
// // //         } catch (err) {
// // //             console.error('Error fetching lessons:', err);
// // //             setError('Failed to fetch lessons.');
// // //         } finally {
// // //             setLoading(false);
// // //         }
// // //     };



// // //     // Function to extract YouTube video ID from a URL
// // //     const extractYouTubeID = (url: string): string | null => {
// // //         const regExp = /^.*(youtu\.be\/|v\/|embed\/|watch\?v=|watch\?.+&v=)([^#\&\?]*).*/;
// // //         const match = url.match(regExp);
// // //         return match && match[2].length === 11 ? match[2] : null;
// // //     };

// // //     return (
// // //         <div className='pt-24'>
// // //             <Navbar />

// // //             <div className='max-w-screen-2xl mx-auto px-4'>
// // //                 {loading ? (
// // //                     <div className='text-center py-8'>
// // //                         <p>Loading lessons...</p>
// // //                     </div>
// // //                 ) : error ? (
// // //                     <div className='text-center text-red-500 py-8'>
// // //                         <p>{error}</p>
// // //                     </div>
// // //                 ) : (
// // //                     <div>
// // //                         {lessonesID.map((lesson) => (
// // //                             <div key={lesson.les_id} className='mb-8'>
// // //                                 {/* Lesson Code Block */}
// // //                                 <pre className='px-4 py-7 bg-gray-800 text-gray-300 font-NotoSansKhmer rounded-xl mb-4'>
// // //                                     <pre className='whitespace-pre-wrap'>{lesson.code || 'No code available'}</pre>
// // //                                 </pre>

// // //                                 {/* Video Section */}
// // //                                 {lesson.video ? (
// // //                                     <div className='mb-4'>
// // //                                         {extractYouTubeID(lesson.video) ? (
// // //                                             <iframe
// // //                                                 width="560"
// // //                                                 height="315"
// // //                                                 src={`https://www.youtube.com/embed/${extractYouTubeID(lesson.video)}`}
// // //                                                 title="YouTube video player"
// // //                                                 frameBorder="0"
// // //                                                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// // //                                                 allowFullScreen
// // //                                                 className='w-full max-w-lg rounded-md shadow-md'
// // //                                             ></iframe>
// // //                                         ) : (
// // //                                             <p className='text-red-500'>Invalid YouTube link</p>
// // //                                         )}
// // //                                     </div>
// // //                                 ) : (
// // //                                     <p className='text-gray-500 mb-4'>No video available</p>
// // //                                 )}

// // //                                 {/* Image Section */}
// // //                                 {lesson.image ? (
// // //                                     <div className='mb-4'>
// // //                                         <img
// // //                                             src={lesson.image}
// // //                                             alt={`Lesson ${lesson.les_name}`}
// // //                                             className='w-full max-w-lg rounded-md shadow-md'
// // //                                         />
// // //                                     </div>
// // //                                 ) : (
// // //                                     <p className='text-gray-500'>No image available</p>
// // //                                 )}
// // //                             </div>
// // //                         ))}
// // //                     </div>
// // //                 )}
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default CourseModale;




// // import { useEffect, useState, useRef } from 'react';
// // import Navbar from '../../component/Navbar';
// // import axios from 'axios';
// // import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// // import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// // import html2canvas from 'html2canvas';
// // import { FaRegCopy, FaFileDownload } from "react-icons/fa";

// // // Define the interface for the lessons
// // interface LessonesID {
// //     les_id: number;
// //     les_name: string;
// //     modale_id: number;
// //     courses_id: number;
// //     title: string;
// //     code: string;
// //     video: string;
// //     image: string;
// //     description: string;
// // }

// // function CourseModale() {
// //     const [lessonesID, setLessonesID] = useState<LessonesID[]>([]);
// //     const [loading, setLoading] = useState<boolean>(true);
// //     const [error, setError] = useState<string | null>(null);
// //     const [copySuccess, setCopySuccess] = useState<string | null>(null);
// //     const codeBlockRef = useRef<HTMLDivElement>(null);

// //     useEffect(() => {
// //         fetchLessonesID();
// //     }, []);

// //     const fetchLessonesID = async () => {
// //         try {
// //             const response = await axios.get<LessonesID[]>('http://localhost:5000/api/lessone');
// //             setLessonesID(response.data);
// //         } catch (err) {
// //             console.error('Error fetching lessons:', err);
// //             setError('Failed to fetch lessons.');
// //         } finally {
// //             setLoading(false);
// //         }
// //     };

// //     const downloadAsImage = async () => {
// //         if (codeBlockRef.current) {
// //             const canvas = await html2canvas(codeBlockRef.current);
// //             const image = canvas.toDataURL('image/png');
// //             const link = document.createElement('a');
// //             link.href = image;
// //             link.download = 'handwritten-code.png';
// //             link.click();
// //         }
// //     };

// //     const copyToClipboard = (code: string) => {
// //         navigator.clipboard.writeText(code)
// //             .then(() => {
// //                 setCopySuccess('បានចម្លង');
// //                 setTimeout(() => setCopySuccess(null), 2000);
// //             })
// //             .catch(err => {
// //                 console.error('Failed to copy code:', err);
// //             });
// //     };

// //     return (
// //         <div className='pt-24'>
// //             <Navbar />

// //             <div className='max-w-screen-2xl mx-auto px-4'>
// //                 {loading ? (
// //                     <div className='text-center py-8'>
// //                         <p>Loading lessons...</p>
// //                     </div>
// //                 ) : error ? (
// //                     <div className='text-center text-red-500 py-8'>
// //                         <p>{error}</p>
// //                     </div>
// //                 ) : (
// //                     <div>
// //                         {lessonesID.map((lesson) => (
// //                             <div key={lesson.les_id} className='mb-8'>
// //                                 <h2 className='text-2xl font-bold mb-4'>{lesson.title}</h2>
// //                                 <div className='relative'>
// //                                     <div ref={codeBlockRef} className='relative bg-gray-100 rounded-lg shadow-lg' style={{ fontFamily: 'Caveat, cursive', fontSize: '1.2rem' }}>
// //                                         <SyntaxHighlighter language="dart" style={atomDark}>
// //                                             {lesson.code}
// //                                         </SyntaxHighlighter>
// //                                     </div>
// //                                     <div className=' flex absolute space-x-3 right-2 top-2'>

// //                                         <div className="relative group">
// //                                             <button
// //                                                 onClick={() => copyToClipboard(lesson.code)}
// //                                                 className="bg-slate-600 text-white px-2 py-2 rounded hover:bg-slate-800 opacity-50"
// //                                             >
// //                                                 <FaRegCopy />
// //                                             </button>
// //                                             {/* Tooltip for copy */}
// //                                             <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
// //                                                 ចម្លង
// //                                             </span>
// //                                             {/* Success indicator */}
// //                                             {copySuccess && (
// //                                                 <span className="absolute bottom-full mb-2 hidden group-hover:block bg-green-500 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
// //                                                     ✔ ចម្លងជោគជ័យ
// //                                                 </span>
// //                                             )}
// //                                         </div>

// //                                         <div className="relative group">
// //                                             <button
// //                                                 onClick={downloadAsImage}
// //                                                 className='bg-slate-600 text-white px-2 py-2 rounded hover:bg-slate-800 opacity-50'
// //                                             >
// //                                                 <FaFileDownload />
// //                                             </button>
// //                                             <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
// //                                                 រក្សាទុករូបភាព
// //                                             </span>
// //                                         </div>

// //                                     </div>
// //                                 </div>

// //                             </div>
// //                         ))}
// //                     </div>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }

// // export default CourseModale;




// import { useEffect, useState, useRef } from 'react';
// import Navbar from '../../component/Navbar';
// import axios from 'axios';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
// import { MdMenuBook, MdQuestionAnswer } from "react-icons/md";
// import { SiAnswer } from "react-icons/si";

// import html2canvas from 'html2canvas';
// import { FaRegCopy, FaFileDownload } from "react-icons/fa";

// // Define the interface for the lessons
// interface LessonesID {
//     les_id: number;
//     les_name: string;
//     modale_id: number;
//     courses_id: number;
//     title: string;
//     code: string;
//     video_url: string;  // URL for video
//     image_url: string;  // URL for image
//     description: string;
// }

// function CourseModale() {
//     const [lessonesID, setLessonesID] = useState<LessonesID[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);
//     const [copySuccess, setCopySuccess] = useState<string | null>(null);
//     const codeBlockRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         fetchLessonesID();
//     }, []);

//     const fetchLessonesID = async () => {
//         try {
//             const response = await axios.get<LessonesID[]>('http://localhost:5000/api/lessone');
//             setLessonesID(response.data);
//         } catch (err) {
//             console.error('Error fetching lessons:', err);
//             setError('Failed to fetch lessons.');
//         } finally {
//             setLoading(false);
//         }
//     };

//     const downloadAsImage = async () => {
//         if (codeBlockRef.current) {
//             const canvas = await html2canvas(codeBlockRef.current);
//             const image = canvas.toDataURL('image/png');
//             const link = document.createElement('a');
//             link.href = image;
//             link.download = 'handwritten-code.png';
//             link.click();
//         }
//     };

//     const copyToClipboard = (code: string) => {
//         navigator.clipboard.writeText(code)
//             .then(() => {
//                 setCopySuccess('Copied');
//                 setTimeout(() => setCopySuccess(null), 2000);
//             })
//             .catch(err => {
//                 console.error('Failed to copy code:', err);
//             });
//     };

//     return (
//         <div className='pt-24'>
//             <Navbar />

//             <div className='max-w-screen-2xl mx-auto px-4'>
//                 {loading ? (
//                     <div className='text-center py-8'>
//                         <p>Loading lessons...</p>
//                     </div>
//                 ) : error ? (
//                     <div className='text-center text-red-500 py-8'>
//                         <p>{error}</p>
//                     </div>
//                 ) : (
//                     <div>
//                         {lessonesID.map((lesson) => (
//                             <div key={lesson.les_id} className='mb-8'>
//                                 <h2 className='text-2xl font-bold mb-4 flex space-x-4 text-blue-600'><span> <MdMenuBook className='text-4xl' /> </span><span>{lesson.les_name}</span></h2>
//                                 <h2 className='text-xl font-bold mb-4 flex space-x-4 px-8 text-purple-600'><span><MdQuestionAnswer className='text-xl' /></span><span>{lesson.title}</span></h2>
//                                 <h2 className='text-xl font-bold mb-4 flex space-x-4 px-8 text-gray-700'><span><SiAnswer className='text-xl' /></span><span>{lesson.description}</span></h2>


//                                 <div className="flex justify-center items-center py-12">
//                                     <img
//                                         src={`http://localhost:5000${lesson.image_url}`}
//                                         alt="Lesson Image"
//                                         className="w-full lg:h-96 md:h-72 h-56 object-contain"  // Tailwind for responsiveness
//                                     />
//                                 </div>

//                                 <div className="flex justify-center items-center py-12">
//                                 <video   className="w-full lg:h-96 md:h-72 h-56 object-contain" controls>
//                                     <source
//                                         src={`http://localhost:5000${lesson.video_url}`}
                                         
//                                     />
//                                 </video>
//                                 </div>

//                                 <div className='relative'>
//                                     <div ref={codeBlockRef} className='relative bg-gray-100 rounded-lg shadow-lg text-sm'>
//                                         <SyntaxHighlighter language="dart" style={atomDark}>
//                                             {lesson.code}
//                                         </SyntaxHighlighter>
//                                     </div>

//                                     <div className='flex absolute space-x-3 right-2 top-2'>
//                                         <div className="relative group">
//                                             <button
//                                                 onClick={() => copyToClipboard(lesson.code)}
//                                                 className="bg-slate-600 text-white px-2 py-2 rounded hover:bg-slate-800 opacity-50"
//                                             >
//                                                 <FaRegCopy />
//                                             </button>
//                                             <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
//                                                 Copy
//                                             </span>
//                                             {copySuccess && (
//                                                 <span className="absolute bottom-full mb-2 hidden group-hover:block bg-green-500 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
//                                                     ✔ Copied
//                                                 </span>
//                                             )}
//                                         </div>

//                                         <div className="relative group">
//                                             <button
//                                                 onClick={downloadAsImage}
//                                                 className='bg-slate-600 text-white px-2 py-2 rounded hover:bg-slate-800 opacity-50'
//                                             >
//                                                 <FaFileDownload />
//                                             </button>
//                                             <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
//                                                 Save Image
//                                             </span>
//                                         </div>

//                                     </div>
//                                 </div>

//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>

//         </div>
//     );
// }

// export default CourseModale;



























import { useEffect, useState, useRef } from 'react';
import Navbar from '../../component/Navbar';
import axios from 'axios';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { MdMenuBook, MdQuestionAnswer } from "react-icons/md";
import { SiAnswer } from "react-icons/si";
import { useParams } from 'react-router-dom';

import html2canvas from 'html2canvas';
import { FaRegCopy, FaFileDownload } from "react-icons/fa";

// Define the interface for the lessons
interface LessonesID {
    les_id: number;
    les_name: string;
    modale_id: number;
    courses_id: number;
    title: string;
    code: string;
    video_url: string;  // URL for video
    image_url: string;  // URL for image
    description: string;
}

function CourseModale() {
    const [lessonesID, setLessonesID] = useState<LessonesID[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);
    const [copySuccess, setCopySuccess] = useState<string | null>(null);
    const codeBlockRef = useRef<HTMLDivElement>(null);
    // const { modaleId, courseId } = useParams<{ modaleId: string; courseId: string }>();
    const { courseId, modaleId } = useParams<{ courseId: string; modaleId: string }>();


    useEffect(() => {
        fetchLessonesID();
    }, [modaleId, courseId]);

    const fetchLessonesID = async () => {
        try {
            const response = await axios.get<LessonesID[]>(`http://localhost:5000/api/lessone/${modaleId}/${courseId}`);
            setLessonesID(response.data);
            console.log(response.data);
        } catch (err) {
            console.error('Error fetching lessons:', err);
            setError('Failed to fetch lessons.');
        } finally {
            setLoading(false);
        }
    };

    const downloadAsImage = async () => {
        if (codeBlockRef.current) {
            const canvas = await html2canvas(codeBlockRef.current);
            const image = canvas.toDataURL('image/png');
            const link = document.createElement('a');
            link.href = image;
            link.download = 'handwritten-code.png';
            link.click();
        }
    };

    const copyToClipboard = (code: string) => {
        navigator.clipboard.writeText(code)
            .then(() => {
                setCopySuccess('Copied');
                setTimeout(() => setCopySuccess(null), 2000);
            })
            .catch(err => {
                console.error('Failed to copy code:', err);
            });
    };

    return (
        <div className='pt-24'>
            <Navbar />

            <div className='max-w-screen-2xl mx-auto px-4'>
                {loading ? (
                    <div className='text-center py-8'>
                        <p>Loading lessons...</p>
                    </div>
                ) : error ? (
                    <div className='text-center text-red-500 py-8'>
                        <p>{error}</p>
                    </div>
                ) : (
                    <div>
                        {lessonesID.map((lesson) => (
                            <div key={lesson.les_id} className='mb-8'>
                                <h2 className='text-2xl font-bold mb-4 flex space-x-4 text-blue-600'><span> <MdMenuBook className='text-4xl' /> </span><span>{lesson.les_name}</span></h2>
                                <h2 className='text-xl font-bold mb-4 flex space-x-4 px-8 text-purple-600'><span><MdQuestionAnswer className='text-xl' /></span><span>{lesson.title}</span></h2>
                                <h2 className='text-xl font-bold mb-4 flex space-x-4 px-8 text-gray-700'><span><SiAnswer className='text-xl' /></span><span>{lesson.description}</span></h2>


                                <div className="flex justify-center items-center py-12">
                                    <img
                                        src={`http://localhost:5000${lesson.image_url}`}
                                        alt="Lesson Image"
                                        className="w-full lg:h-96 md:h-72 h-56 object-contain"  // Tailwind for responsiveness
                                    />
                                </div>

                                <div className="flex justify-center items-center py-12">
                                <video   className="w-full lg:h-96 md:h-72 h-56 object-contain" controls>
                                    <source
                                        src={`http://localhost:5000${lesson.video_url}`}
                                         
                                    />
                                </video>
                                </div>

                                <div className='relative'>
                                    <div ref={codeBlockRef} className='relative bg-gray-100 rounded-lg shadow-lg text-sm'>
                                        <SyntaxHighlighter language="dart" style={atomDark}>
                                            {lesson.code}
                                        </SyntaxHighlighter>
                                    </div>

                                    <div className='flex absolute space-x-3 right-2 top-2'>
                                        <div className="relative group">
                                            <button
                                                onClick={() => copyToClipboard(lesson.code)}
                                                className="bg-slate-600 text-white px-2 py-2 rounded hover:bg-slate-800 opacity-50"
                                            >
                                                <FaRegCopy />
                                            </button>
                                            <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                                                Copy
                                            </span>
                                            {copySuccess && (
                                                <span className="absolute bottom-full mb-2 hidden group-hover:block bg-green-500 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                                                    ✔ Copied
                                                </span>
                                            )}
                                        </div>

                                        <div className="relative group">
                                            <button
                                                onClick={downloadAsImage}
                                                className='bg-slate-600 text-white px-2 py-2 rounded hover:bg-slate-800 opacity-50'
                                            >
                                                <FaFileDownload />
                                            </button>
                                            <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                                                Save Image
                                            </span>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
}

export default CourseModale;
