// // // // // import React from 'react';

// // // // // function TestText() {
// // // // //     const courses = [
// // // // //         {
// // // // //             id: 1,
// // // // //             names: "ReactJS",
// // // // //             modales: [
// // // // //                 {
// // // // //                     id: 1, modaleNames: "Basics",
// // // // //                     sub_modales: [
// // // // //                         {
// // // // //                             submodaleID: 1, SubMode_Name: 'Baccis 1',
// // // // //                             lessone: [
// // // // //                                 { lessioneID: 1, lesNames: "Introduction to SQL", description: "Flutter គឺជា dart" },
// // // // //                                 { lessioneID: 5, lesNames: "Introduction to postgres", description: "Flutter " },
// // // // //                             ]
// // // // //                         },
// // // // //                         {
// // // // //                             submodaleID: 2, SubMode_Name: 'Baccis 2',
// // // // //                             lessone: [
// // // // //                                 { lessioneID: 7, lesNames: "Introduction to SQL", description: "Flutter គឺជា dart" }
// // // // //                             ]
// // // // //                         },
// // // // //                         {
// // // // //                             submodaleID: 3, SubMode_Name: 'Baccis 3',
// // // // //                             lessone: [
// // // // //                                 { lessioneID: 8, lesNames: "Introduction to SQL", description: "Introduction គឺជា dart" },
// // // // //                                 { lessioneID: 9, lesNames: "Introduction to SQL", description: "Introduction គឺជា dart" }
// // // // //                             ]
// // // // //                         }
// // // // //                     ]
// // // // //                 },
// // // // //                 {
// // // // //                     id: 2, modaleNames: "Basics",
// // // // //                     sub_modales: [
// // // // //                         {
// // // // //                             submodaleID: 4, SubMode_Name: 'Baccis 1',
// // // // //                             lessone: [
// // // // //                                 { lessioneID: 10, lesNames: "Introduction to SQL", description: "Flutter គឺជា dart" },
// // // // //                                 { lessioneID: 11, lesNames: "Introduction to postgres", description: "Flutter " },
// // // // //                             ]
// // // // //                         },
// // // // //                         {
// // // // //                             submodaleID: 5, SubMode_Name: 'Baccis 2',
// // // // //                             lessone: [
// // // // //                                 { lessioneID: 13, lesNames: "Introduction to SQL", description: "Flutter គឺជា dart" }
// // // // //                             ]
// // // // //                         },
// // // // //                         {
// // // // //                             submodaleID: 6, SubMode_Name: 'Baccis 3',
// // // // //                             lessone: [
// // // // //                                 { lessioneID: 15, lesNames: "Introduction to SQL", description: "Introduction គឺជា dart" },
// // // // //                                 { lessioneID: 16, lesNames: "Introduction to SQL", description: "Introduction គឺជា dart" }
// // // // //                             ]
// // // // //                         }
// // // // //                     ]
// // // // //                 }
// // // // //             ]
// // // // //         }
// // // // //     ];

// // // // //     return (
// // // // //         <div>
// // // // //             {courses.map(course => (
// // // // //                 <div key={course.id}>
// // // // //                     <h2>{course.names}</h2>
// // // // //                     {course.modales.map(modale => (
// // // // //                         <div key={modale.id}>
// // // // //                             <h3>{modale.modaleNames}</h3>
// // // // //                             {modale.sub_modales.map(subModale => (
// // // // //                                 <div key={subModale.submodaleID}>
// // // // //                                     <h4>{subModale.SubMode_Name}</h4>
// // // // //                                     <ul>
// // // // //                                         {subModale.lessone.map(lesson => (
// // // // //                                             <li key={lesson.lessioneID}>
// // // // //                                                 <strong>{lesson.lesNames}:</strong> {lesson.description}
// // // // //                                             </li>
// // // // //                                         ))}
// // // // //                                     </ul>
// // // // //                                 </div>
// // // // //                             ))}
// // // // //                         </div>
// // // // //                     ))}
// // // // //                 </div>
// // // // //             ))}

// // // // //         </div>
// // // // //     );
// // // // // }

// // // // // export default TestText;





// // // // import React, { useState } from 'react';

// // // // function TestText() {
// // // //     const courses = [
       
// // // //         {
// // // //             id: 2,
// // // //             names: "Next",
// // // //             modales: [
// // // //                 {
// // // //                     id: 4, modaleNames: "Basics Next",
// // // //                     sub_modales: [
// // // //                         {
// // // //                             submodaleID: 12, SubMode_Name: 'sub modale 1',
// // // //                             lessone: [
// // // //                                 { lessioneID: 21, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone" },
// // // //                                 { lessioneID: 21, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone1" },
// // // //                                 { lessioneID: 21, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone2" },
// // // //                                 { lessioneID: 22, lesNames: "Introduction to postgres", description: "lessone 2/2" },
// // // //                             ]
// // // //                         },
// // // //                         {
// // // //                             submodaleID: 1, SubMode_Name: 'sub modale 2',
// // // //                             lessone: [
// // // //                                 { lessioneID: 24, lesNames: "Introduction to SQL", description: " lessone 3" }
// // // //                             ]
// // // //                         },
// // // //                         {
// // // //                             submodaleID: 0, SubMode_Name: 'sub modale 3',
// // // //                             lessone: [
// // // //                                 { lessioneID: 25, lesNames: "Introduction to SQL", description: "lessone 4" },
// // // //                                 { lessioneID: 255, lesNames: "Introduction to SQL", description: "lessone 5" }
// // // //                             ]
// // // //                         }
// // // //                     ]
// // // //                 },
// // // //                 {
// // // //                     id:  5, modaleNames: "anvand Next",
// // // //                     sub_modales: [
// // // //                         {
// // // //                             submodaleID: 1121, SubMode_Name: 'Baccis 1',
// // // //                             lessone: [
// // // //                                 { lessioneID: 30, lesNames: "Introduction to SQL", description: "lessone6" },
// // // //                                 { lessioneID: 32, lesNames: "Introduction to postgres", description: "lessone7" },
// // // //                             ]
// // // //                         },
// // // //                         {
// // // //                             submodaleID: 10985, SubMode_Name: 'Baccis 2',
// // // //                             lessone: [
// // // //                                 { lessioneID: 33, lesNames: "Introduction to SQL", description: "lessone 8" }
// // // //                             ]
// // // //                         },
// // // //                         {
// // // //                             submodaleID: 98756716, SubMode_Name: 'Baccis 3',
// // // //                             lessone: [
// // // //                                 { lessioneID: 77, lesNames: "Introduction to SQL", description: "lessone 10" },
// // // //                                 { lessioneID: 18, lesNames: "Introduction to SQL", description: "lessone 11" }
// // // //                             ]
// // // //                         }
// // // //                     ]
// // // //                 }
// // // //             ]
// // // //         },
// // // //         {
// // // //             id: 1,
// // // //             names: "ReactJS",
// // // //             modales: [
// // // //                 {
// // // //                     id: 1, modaleNames: "Basics",
// // // //                     sub_modales: [
// // // //                         {
// // // //                             submodaleID: 1121212, SubMode_Name: 'Baccis 1',
// // // //                             lessone: [
// // // //                                 { lessioneID: 5, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone1" },
// // // //                                 { lessioneID: 1, lesNames: "Introduction to postgres", description: "lessone2 " },
// // // //                             ]
// // // //                         },
// // // //                         {
// // // //                             submodaleID: 2234222, SubMode_Name: 'Baccis 2',
// // // //                             lessone: [
// // // //                                 { lessioneID: 7, lesNames: "Introduction to SQL", description: " lessone 3" }
// // // //                             ]
// // // //                         },
// // // //                         {
// // // //                             submodaleID: 33424253, SubMode_Name: 'Baccis 3',
// // // //                             lessone: [
// // // //                                 { lessioneID: 8, lesNames: "Introduction to SQL", description: "lessone 4" },
// // // //                                 { lessioneID: 9, lesNames: "Introduction to SQL", description: "lessone 5" }
// // // //                             ]
// // // //                         }
// // // //                     ]
// // // //                 },
// // // //                 {
// // // //                     id: 2, modaleNames: "anvand",
// // // //                     sub_modales: [
// // // //                         {
// // // //                             submodaleID: 423442344, SubMode_Name: 'Baccis 1',
// // // //                             lessone: [
// // // //                                 { lessioneID: 10, lesNames: "Introduction to SQL", description: "lessone6" },
// // // //                                 { lessioneID: 11, lesNames: "Introduction to postgres", description: "lessone7" },
// // // //                             ]
// // // //                         },
// // // //                         {
// // // //                             submodaleID: 5543, SubMode_Name: 'Baccis 2',
// // // //                             lessone: [
// // // //                                 { lessioneID: 13, lesNames: "Introduction to SQL", description: "lessone 8" }
// // // //                             ]
// // // //                         },
// // // //                         {
// // // //                             submodaleID: 665, SubMode_Name: 'Baccis 3',
// // // //                             lessone: [
// // // //                                 { lessioneID: 15, lesNames: "Introduction to SQL", description: "lessone 10" },
// // // //                                 { lessioneID: 16, lesNames: "Introduction to SQL", description: "lessone 11" }
// // // //                             ]
// // // //                         }
// // // //                     ]
// // // //                 }
// // // //             ]
// // // //         },
// // // //     ];

// // // //     const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
// // // //     const [currentModaleIndex, setCurrentModaleIndex] = useState(0);
// // // //     const [currentSubModaleIndex, setCurrentSubModaleIndex] = useState(0);
// // // //     const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

// // // //     const handleNext = () => {
// // // //         const currentCourse = courses[currentCourseIndex];
// // // //         const currentModale = currentCourse.modales[currentModaleIndex];
// // // //         const currentSubModale = currentModale.sub_modales[currentSubModaleIndex];

// // // //         if (currentLessonIndex < currentSubModale.lessone.length - 1) {
// // // //             setCurrentLessonIndex(currentLessonIndex + 1);
// // // //         } else if (currentSubModaleIndex < currentModale.sub_modales.length - 1) {
// // // //             setCurrentSubModaleIndex(currentSubModaleIndex + 1);
// // // //             setCurrentLessonIndex(0);
// // // //         } else if (currentModaleIndex < currentCourse.modales.length - 1) {
// // // //             setCurrentModaleIndex(currentModaleIndex + 1);
// // // //             setCurrentSubModaleIndex(0);
// // // //             setCurrentLessonIndex(0);
// // // //         } else if (currentCourseIndex < courses.length - 1) {
// // // //             setCurrentCourseIndex(currentCourseIndex + 1);
// // // //             setCurrentModaleIndex(0);
// // // //             setCurrentSubModaleIndex(0);
// // // //             setCurrentLessonIndex(0);
// // // //         }
// // // //     };

// // // //     const currentCourse = courses[currentCourseIndex];
// // // //     const currentModale = currentCourse.modales[currentModaleIndex];
// // // //     const currentSubModale = currentModale.sub_modales[currentSubModaleIndex];
// // // //     const currentLesson = currentSubModale.lessone[currentLessonIndex];
// // // //     const routeString = `courses/${currentCourse.id}/modales/${currentModale.id}/lessone/${currentSubModale.submodaleID}`;


// // // //     return (
// // // //         <div>
// // // //             <h2>{currentCourse.names}</h2>
// // // //             <h3>{currentModale.modaleNames}</h3>
// // // //             <h4>{currentSubModale.SubMode_Name}</h4>
// // // //             <div>
// // // //                 <strong>{currentLesson.lesNames}:</strong> {currentLesson.description}
// // // //             </div>
// // // //             <p>{routeString}</p>
// // // //             <div className="my-4 flex justify-end">
// // // //                 <button
// // // //                     onClick={handleNext}
// // // //                     className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
// // // //                 >
// // // //                     Next
// // // //                 </button>
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // }

// // // // export default TestText;







// // ////////////////   next all course and have button chang courses

// // // import React, { useState } from 'react';

// // // function TestText() {
// // //     const courses = [
       
// // //         {
// // //             coursesid: 2,
// // //             names: "Next",
// // //             modales: [
// // //                 {
// // //                     modalesid: 4, modaleNames: "Basics Next",
// // //                     sub_modales: [
// // //                         {
// // //                             submodaleID: 12, SubMode_Name: 'sub modale 1',
// // //                             lessone: [
// // //                                 { lessioneID: 21, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone" },
// // //                                 { lessioneID: 21, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone1" },
// // //                                 { lessioneID: 21, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone2" },
// // //                                 { lessioneID: 22, lesNames: "Introduction to postgres", description: "lessone 2/2" },
// // //                             ]
// // //                         },
// // //                         {
// // //                             submodaleID: 1, SubMode_Name: 'sub modale 2',
// // //                             lessone: [
// // //                                 { lessioneID: 24, lesNames: "Introduction to SQL", description: " lessone 3" }
// // //                             ]
// // //                         },
// // //                         {
// // //                             submodaleID: 0, SubMode_Name: 'sub modale 3',
// // //                             lessone: [
// // //                                 { lessioneID: 25, lesNames: "Introduction to SQL", description: "lessone 4" },
// // //                                 { lessioneID: 255, lesNames: "Introduction to SQL", description: "lessone 5" }
// // //                             ]
// // //                         }
// // //                     ]
// // //                 },
// // //                 {
// // //                     modalesid:  5, modaleNames: "anvand Next",
// // //                     sub_modales: [
// // //                         {
// // //                             submodaleID: 1121, SubMode_Name: 'Baccis 1',
// // //                             lessone: [
// // //                                 { lessioneID: 30, lesNames: "Introduction to SQL", description: "lessone6" },
// // //                                 { lessioneID: 32, lesNames: "Introduction to postgres", description: "lessone7" },
// // //                             ]
// // //                         },
// // //                         {
// // //                             submodaleID: 10985, SubMode_Name: 'Baccis 2',
// // //                             lessone: [
// // //                                 { lessioneID: 33, lesNames: "Introduction to SQL", description: "lessone 8" }
// // //                             ]
// // //                         },
// // //                         {
// // //                             submodaleID: 98756716, SubMode_Name: 'Baccis 3',
// // //                             lessone: [
// // //                                 { lessioneID: 77, lesNames: "Introduction to SQL", description: "lessone 10" },
// // //                                 { lessioneID: 18, lesNames: "Introduction to SQL", description: "lessone 11" }
// // //                             ]
// // //                         }
// // //                     ]
// // //                 }
// // //             ]
// // //         },
// // //         {
// // //             courses: 1,
// // //             names: "ReactJS",
// // //             modales: [
// // //                 {
// // //                     modalesid: 1, modaleNames: "Basics",
// // //                     sub_modales: [
// // //                         {
// // //                             submodaleID: 1121212, SubMode_Name: 'Baccis 1',
// // //                             lessone: [
// // //                                 { lessioneID: 5, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone1" },
// // //                                 { lessioneID: 1, lesNames: "Introduction to postgres", description: "lessone2 " },
// // //                             ]
// // //                         },
// // //                         {
// // //                             submodaleID: 2234222, SubMode_Name: 'Baccis 2',
// // //                             lessone: [
// // //                                 { lessioneID: 7, lesNames: "Introduction to SQL", description: " lessone 3" }
// // //                             ]
// // //                         },
// // //                         {
// // //                             submodaleID: 33424253, SubMode_Name: 'Baccis 3',
// // //                             lessone: [
// // //                                 { lessioneID: 8, lesNames: "Introduction to SQL", description: "lessone 4" },
// // //                                 { lessioneID: 9, lesNames: "Introduction to SQL", description: "lessone 5" }
// // //                             ]
// // //                         }
// // //                     ]
// // //                 },
// // //                 {
// // //                     modalesid: 2, modaleNames: "anvand",
// // //                     sub_modales: [
// // //                         {
// // //                             submodaleID: 423442344, SubMode_Name: 'Baccis 1',
// // //                             lessone: [
// // //                                 { lessioneID: 10, lesNames: "Introduction to SQL", description: "lessone6" },
// // //                                 { lessioneID: 11, lesNames: "Introduction to postgres", description: "lessone7" },
// // //                             ]
// // //                         },
// // //                         {
// // //                             submodaleID: 5543, SubMode_Name: 'Baccis 2',
// // //                             lessone: [
// // //                                 { lessioneID: 13, lesNames: "Introduction to SQL", description: "lessone 8" }
// // //                             ]
// // //                         },
// // //                         {
// // //                             submodaleID: 665, SubMode_Name: 'Baccis 3',
// // //                             lessone: [
// // //                                 { lessioneID: 15, lesNames: "Introduction to SQL", description: "lessone 10" },
// // //                                 { lessioneID: 16, lesNames: "Introduction to SQL", description: "lessone 11" }
// // //                             ]
// // //                         }
// // //                     ]
// // //                 }
// // //             ]
// // //         },
// // //     ];

// // //     const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
// // //     const [currentModaleIndex, setCurrentModaleIndex] = useState(0);
// // //     const [currentSubModaleIndex, setCurrentSubModaleIndex] = useState(0);
// // //     const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

// // //     const handleNext = () => {
// // //         const currentCourse = courses[currentCourseIndex];
// // //         const currentModale = currentCourse.modales[currentModaleIndex];
// // //         const currentSubModale = currentModale.sub_modales[currentSubModaleIndex];

// // //         if (currentLessonIndex < currentSubModale.lessone.length - 1) {
// // //             setCurrentLessonIndex(currentLessonIndex + 1);
// // //         } else if (currentSubModaleIndex < currentModale.sub_modales.length - 1) {
// // //             setCurrentSubModaleIndex(currentSubModaleIndex + 1);
// // //             setCurrentLessonIndex(0);
// // //         } else if (currentModaleIndex < currentCourse.modales.length - 1) {
// // //             setCurrentModaleIndex(currentModaleIndex + 1);
// // //             setCurrentSubModaleIndex(0);
// // //             setCurrentLessonIndex(0);
// // //         } else if (currentCourseIndex < courses.length - 1) {
// // //             setCurrentCourseIndex(currentCourseIndex + 1);
// // //             setCurrentModaleIndex(0);
// // //             setCurrentSubModaleIndex(0);
// // //             setCurrentLessonIndex(0);
// // //         }
// // //     };

// // //     const handleCourseSelect = (courseIndex) => {
// // //         setCurrentCourseIndex(courseIndex);
// // //         setCurrentModaleIndex(0);
// // //         setCurrentSubModaleIndex(0);
// // //         setCurrentLessonIndex(0);
// // //     };

// // //     const currentCourse = courses[currentCourseIndex];
// // //     const currentModale = currentCourse.modales[currentModaleIndex];
// // //     const currentSubModale = currentModale.sub_modales[currentSubModaleIndex];
// // //     const currentLesson = currentSubModale.lessone[currentLessonIndex];
// // //     const routeString = `courses/${courses[0].coursesid}/modales/${currentModale.modalesid}/lessone/${currentSubModale.submodaleID}`;

// // //     return (
// // //         <div>
// // //             <div className='space-x-4'>
// // //                 <h1>Select a Course</h1>
// // //                 {courses.map((course, index) => (
// // //                     <button key={course.coursesid} onClick={() => handleCourseSelect(index)} className='text-blue-600 bg-gray-600 p-3 '>
// // //                         {course.names}
// // //                     </button>
// // //                 ))}
// // //             </div>
// // //             <div>
// // //                 <h2>{currentCourse.names}</h2>
// // //                 <h3>{currentModale.modaleNames}</h3>
// // //                 <h4>{currentSubModale.SubMode_Name}</h4>
// // //                 <div>
// // //                     <strong>{currentLesson.lesNames}:</strong> {currentLesson.description}
// // //                 </div>
// // //                 <p>{routeString}</p>
// // //                 <div className="my-4 flex justify-end">
// // //                     <button
// // //                         onClick={handleNext}
// // //                         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
// // //                         disabled={currentCourseIndex === courses.length - 1 && currentModaleIndex === currentCourse.modales.length - 1 && currentSubModaleIndex === currentModale.sub_modales.length - 1 && currentLessonIndex === currentSubModale.lessone.length - 1}
// // //                     >
// // //                         Next
// // //                     </button>
// // //                 </div>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default TestText;













// // ////////////////   next in courses if new courses not to move have button chang courses

// // import React, { useState } from 'react';

// // function TestText() {
// //     const courses = [
       
// //         {
// //             coursesid: 2,
// //             names: "Next",
// //             modales: [
// //                 {
// //                     modalesid: 4, modaleNames: "Basics Next",
// //                     sub_modales: [
// //                         {
// //                             submodaleID: 12, SubMode_Name: 'sub modale 1',
// //                             lessone: [
// //                                 { lessioneID: 21, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone" },
// //                                 { lessioneID: 21, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone1" },
// //                                 { lessioneID: 21, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone2" },
// //                                 { lessioneID: 22, lesNames: "Introduction to postgres", description: "lessone 2/2" },
// //                             ]
// //                         },
// //                         {
// //                             submodaleID: 1, SubMode_Name: 'sub modale 2',
// //                             lessone: [
// //                                 { lessioneID: 24, lesNames: "Introduction to SQL", description: " lessone 3" }
// //                             ]
// //                         },
// //                         {
// //                             submodaleID: 0, SubMode_Name: 'sub modale 3',
// //                             lessone: [
// //                                 { lessioneID: 25, lesNames: "Introduction to SQL", description: "lessone 4" },
// //                                 { lessioneID: 255, lesNames: "Introduction to SQL", description: "lessone 5" }
// //                             ]
// //                         }
// //                     ]
// //                 },
// //                 {
// //                     modalesid:  5, modaleNames: "anvand Next",
// //                     sub_modales: [
// //                         {
// //                             submodaleID: 1121, SubMode_Name: 'Baccis 1',
// //                             lessone: [
// //                                 { lessioneID: 30, lesNames: "Introduction to SQL", description: "lessone6" },
// //                                 { lessioneID: 32, lesNames: "Introduction to postgres", description: "lessone7" },
// //                             ]
// //                         },
// //                         {
// //                             submodaleID: 10985, SubMode_Name: 'Baccis 2',
// //                             lessone: [
// //                                 { lessioneID: 33, lesNames: "Introduction to SQL", description: "lessone 8" }
// //                             ]
// //                         },
// //                         {
// //                             submodaleID: 98756716, SubMode_Name: 'Baccis 3',
// //                             lessone: [
// //                                 { lessioneID: 77, lesNames: "Introduction to SQL", description: "lessone 10" },
// //                                 { lessioneID: 18, lesNames: "Introduction to SQL", description: "lessone 11" }
// //                             ]
// //                         }
// //                     ]
// //                 }
// //             ]
// //         },
// //         {
// //             courses: 1,
// //             names: "ReactJS",
// //             modales: [
// //                 {
// //                     modalesid: 1, modaleNames: "Basics",
// //                     sub_modales: [
// //                         {
// //                             submodaleID: 1121212, SubMode_Name: 'Baccis 1',
// //                             lessone: [
// //                                 { lessioneID: 5, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone1" },
// //                                 { lessioneID: 1, lesNames: "Introduction to postgres", description: "lessone2 " },
// //                             ]
// //                         },
// //                         {
// //                             submodaleID: 2234222, SubMode_Name: 'Baccis 2',
// //                             lessone: [
// //                                 { lessioneID: 7, lesNames: "Introduction to SQL", description: " lessone 3" }
// //                             ]
// //                         },
// //                         {
// //                             submodaleID: 33424253, SubMode_Name: 'Baccis 3',
// //                             lessone: [
// //                                 { lessioneID: 8, lesNames: "Introduction to SQL", description: "lessone 4" },
// //                                 { lessioneID: 9, lesNames: "Introduction to SQL", description: "lessone 5" }
// //                             ]
// //                         }
// //                     ]
// //                 },
// //                 {
// //                     modalesid: 2, modaleNames: "anvand",
// //                     sub_modales: [
// //                         {
// //                             submodaleID: 423442344, SubMode_Name: 'Baccis 1',
// //                             lessone: [
// //                                 { lessioneID: 10, lesNames: "Introduction to SQL", description: "lessone6" },
// //                                 { lessioneID: 11, lesNames: "Introduction to postgres", description: "lessone7" },
// //                             ]
// //                         },
// //                         {
// //                             submodaleID: 5543, SubMode_Name: 'Baccis 2',
// //                             lessone: [
// //                                 { lessioneID: 13, lesNames: "Introduction to SQL", description: "lessone 8" }
// //                             ]
// //                         },
// //                         {
// //                             submodaleID: 665, SubMode_Name: 'Baccis 3',
// //                             lessone: [
// //                                 { lessioneID: 15, lesNames: "Introduction to SQL", description: "lessone 10" },
// //                                 { lessioneID: 16, lesNames: "Introduction to SQL", description: "lessone 11" }
// //                             ]
// //                         }
// //                     ]
// //                 }
// //             ]
// //         },
// //     ];

   
// //     const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
// //     const [currentModaleIndex, setCurrentModaleIndex] = useState(0);
// //     const [currentSubModaleIndex, setCurrentSubModaleIndex] = useState(0);
// //     const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

// //     const handleNext = () => {
// //         const currentCourse = courses[currentCourseIndex];
// //         const currentModale = currentCourse.modales[currentModaleIndex];
// //         const currentSubModale = currentModale.sub_modales[currentSubModaleIndex];

// //         // Check if we are at the last lesson of the last submodale of the last modale of the current course
// //         if (currentLessonIndex < currentSubModale.lessone.length - 1) {
// //             setCurrentLessonIndex(currentLessonIndex + 1); // Move to next lesson
// //         } else if (currentSubModaleIndex < currentModale.sub_modales.length - 1) {
// //             setCurrentSubModaleIndex(currentSubModaleIndex + 1); // Move to next submodale
// //             setCurrentLessonIndex(0); // Reset lesson index to the first lesson
// //         } else if (currentModaleIndex < currentCourse.modales.length - 1) {
// //             setCurrentModaleIndex(currentModaleIndex + 1); // Move to next modale
// //             setCurrentSubModaleIndex(0); // Reset submodale index
// //             setCurrentLessonIndex(0); // Reset lesson index
// //         } else {
// //             // If we're at the last lesson of the last modale of the last submodale
// //             // Do nothing, or you can show a message to indicate the end of the course
// //             console.log("You have reached the end of the course!");
// //         }
// //     };

// //     const handleCourseSelect = (courseIndex) => {
// //         setCurrentCourseIndex(courseIndex);
// //         setCurrentModaleIndex(0);
// //         setCurrentSubModaleIndex(0);
// //         setCurrentLessonIndex(0);
// //     };

// //     const currentCourse = courses[currentCourseIndex];
// //     const currentModale = currentCourse.modales[currentModaleIndex];
// //     const currentSubModale = currentModale.sub_modales[currentSubModaleIndex];
// //     const currentLesson = currentSubModale.lessone[currentLessonIndex];
// //     const routeString = `courses/${currentCourse.coursesid}/modales/${currentModale.modalesid}/lessone/${currentSubModale.submodaleID}`;

// //     return (
// //         <div>
// //             <div className='space-x-4 py-5'>
// //                 <h1>Select a Course</h1>
// //                 {courses.map((course, index) => (
// //                     <button key={course.coursesid} onClick={() => handleCourseSelect(index)} className='bg-green-400 p-2'>
// //                         {course.names}
// //                     </button>
// //                 ))}
// //             </div>
// //             <div>
// //                 <h2>{currentCourse.names}</h2>
// //                 <h3>{currentModale.modaleNames}</h3>
// //                 <h4>{currentSubModale.SubMode_Name}</h4>
// //                 <div>
// //                     <strong>{currentLesson.lesNames}:</strong> {currentLesson.description}
// //                 </div>
// //                 <p>{routeString}</p>
// //                 <div className="my-4 flex justify-end">
// //                     <button
// //                         onClick={handleNext}
// //                         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
// //                     >
// //                         Next
// //                     </button>
// //                 </div>
// //             </div>
// //         </div>
// //     );
// // }

// // export default TestText;






// // ////////////////   next Previous and chang courses

// import React, { useState } from 'react';

// function TestText() {
//     const courses = [
//         {
//             coursesid: 2,
//             names: "Next",
//             modales: [
//                 {
//                     modalesid: 4, modaleNames: "Basics Next",
//                     sub_modales: [
//                         {
//                             submodaleID: 12, SubMode_Name: 'sub modale 1',
//                             lessone: [
//                                 { lessioneID: 21, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone" },
//                                 // { lessioneID: 21, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone1" },
//                                 // { lessioneID: 21, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone2" },
//                                 // { lessioneID: 22, lesNames: "Introduction to postgres", description: "lessone 2/2" },
//                             ]
//                         },
//                         {
//                             submodaleID: 1, SubMode_Name: 'sub modale 2',
//                             lessone: [
//                                 { lessioneID: 24, lesNames: "Introduction to SQL", description: " lessone 3" }
//                             ]
//                         },
//                         {
//                             submodaleID: 0, SubMode_Name: 'sub modale 3',
//                             lessone: [
//                                 { lessioneID: 25, lesNames: "Introduction to SQL", description: "lessone 4" },
//                                 // { lessioneID: 255, lesNames: "Introduction to SQL", description: "lessone 5" }
//                             ]
//                         }
//                     ]
//                 },
//                 {
//                     modalesid: 5, modaleNames: "anvand Next",
//                     sub_modales: [
//                         {
//                             submodaleID: 1121, SubMode_Name: 'Baccis 1',
//                             lessone: [
//                                 { lessioneID: 30, lesNames: "Introduction to SQL", description: "lessone6" },
//                                 // { lessioneID: 32, lesNames: "Introduction to postgres", description: "lessone7" },
//                             ]
//                         },
//                         {
//                             submodaleID: 10985, SubMode_Name: 'Baccis 2',
//                             lessone: [
//                                 { lessioneID: 33, lesNames: "Introduction to SQL", description: "lessone 8" }
//                             ]
//                         },
//                         {
//                             submodaleID: 98756716, SubMode_Name: 'Baccis 3',
//                             lessone: [
//                                 { lessioneID: 77, lesNames: "Introduction to SQL", description: "lessone 10" },
//                                 // { lessioneID: 18, lesNames: "Introduction to SQL", description: "lessone 11" }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         },
//         {
//             courses: 1,
//             names: "ReactJS",
//             modales: [
//                 {
//                     modalesid: 1, modaleNames: "Basics",
//                     sub_modales: [
//                         {
//                             submodaleID: 1121212, SubMode_Name: 'Baccis 1',
//                             lessone: [
//                                 { lessioneID: 5, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone1" },
//                                 { lessioneID: 1, lesNames: "Introduction to postgres", description: "lessone2 " },
//                             ]
//                         },
//                         {
//                             submodaleID: 2234222, SubMode_Name: 'Baccis 2',
//                             lessone: [
//                                 { lessioneID: 7, lesNames: "Introduction to SQL", description: " lessone 3" }
//                             ]
//                         },
//                         {
//                             submodaleID: 33424253, SubMode_Name: 'Baccis 3',
//                             lessone: [
//                                 { lessioneID: 8, lesNames: "Introduction to SQL", description: "lessone 4" },
//                                 { lessioneID: 9, lesNames: "Introduction to SQL", description: "lessone 5" }
//                             ]
//                         }
//                     ]
//                 },
//                 {
//                     modalesid: 2, modaleNames: "anvand",
//                     sub_modales: [
//                         {
//                             submodaleID: 423442344, SubMode_Name: 'Baccis 1',
//                             lessone: [
//                                 { lessioneID: 10, lesNames: "Introduction to SQL", description: "lessone6" },
//                                 { lessioneID: 11, lesNames: "Introduction to postgres", description: "lessone7" },
//                             ]
//                         },
//                         {
//                             submodaleID: 5543, SubMode_Name: 'Baccis 2',
//                             lessone: [
//                                 { lessioneID: 13, lesNames: "Introduction to SQL", description: "lessone 8" }
//                             ]
//                         },
//                         {
//                             submodaleID: 665, SubMode_Name: 'Baccis 3',
//                             lessone: [
//                                 { lessioneID: 15, lesNames: "Introduction to SQL", description: "lessone 10" },
//                                 { lessioneID: 16, lesNames: "Introduction to SQL", description: "lessone 11" }
//                             ]
//                         }
//                     ]
//                 }
//             ]
//         },
//     ];

//     const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
//     const [currentModaleIndex, setCurrentModaleIndex] = useState(0);
//     const [currentSubModaleIndex, setCurrentSubModaleIndex] = useState(0);
//     const [currentLessonIndex, setCurrentLessonIndex] = useState(0);

//     const handleNext = () => {
//         const currentCourse = courses[currentCourseIndex];
//         const currentModale = currentCourse.modales[currentModaleIndex];
//         const currentSubModale = currentModale.sub_modales[currentSubModaleIndex];

//         if (currentLessonIndex < currentSubModale.lessone.length - 1) {
//             setCurrentLessonIndex(currentLessonIndex + 1); // Move to next lesson
//         } else if (currentSubModaleIndex < currentModale.sub_modales.length - 1) {
//             setCurrentSubModaleIndex(currentSubModaleIndex + 1); // Move to next submodale
//             setCurrentLessonIndex(0); // Reset lesson index to the first lesson
//         } else if (currentModaleIndex < currentCourse.modales.length - 1) {
//             setCurrentModaleIndex(currentModaleIndex + 1); // Move to next modale
//             setCurrentSubModaleIndex(0); // Reset submodale index
//             setCurrentLessonIndex(0); // Reset lesson index
//         } else {
//             console.log("You have reached the end of the course!");
//         }
//     };

//     const handlePrevious = () => {
//         const currentCourse = courses[currentCourseIndex];
//         const currentModale = currentCourse.modales[currentModaleIndex];
//         const currentSubModale = currentModale.sub_modales[currentSubModaleIndex];

//         if (currentLessonIndex > 0) {
//             setCurrentLessonIndex(currentLessonIndex - 1); // Go to the previous lesson
//         } else if (currentSubModaleIndex > 0) {
//             setCurrentSubModaleIndex(currentSubModaleIndex - 1); // Go to the previous submodale
//             setCurrentLessonIndex(currentSubModale.lessone.length - 1); // Set the last lesson of the previous submodale
//         } else if (currentModaleIndex > 0) {
//             setCurrentModaleIndex(currentModaleIndex - 1); // Go to the previous modale
//             setCurrentSubModaleIndex(currentCourse.modales[currentModaleIndex - 1].sub_modales.length - 1); // Go to the last submodale of the previous modale
//             setCurrentLessonIndex(currentCourse.modales[currentModaleIndex - 1].sub_modales[currentCourse.modales[currentModaleIndex - 1].sub_modales.length - 1].lessone.length - 1); // Set the last lesson of the previous submodale
//         } else if (currentCourseIndex > 0) {
//             setCurrentCourseIndex(currentCourseIndex - 1); // Go to the previous course
//             setCurrentModaleIndex(courses[currentCourseIndex - 1].modales.length - 1); // Go to the last modale of the previous course
//             setCurrentSubModaleIndex(courses[currentCourseIndex - 1].modales[courses[currentCourseIndex - 1].modales.length - 1].sub_modales.length - 1); // Go to the last submodale of the previous modale
//             setCurrentLessonIndex(courses[currentCourseIndex - 1].modales[courses[currentCourseIndex - 1].modales.length - 1].sub_modales[courses[currentCourseIndex - 1].modales[courses[currentCourseIndex - 1].modales.length - 1].sub_modales.length - 1].lessone.length - 1); // Set the last lesson of the previous submodale
//         }
//     };

//     const handleCourseSelect = (courseIndex) => {
//         setCurrentCourseIndex(courseIndex);
//         setCurrentModaleIndex(0);
//         setCurrentSubModaleIndex(0);
//         setCurrentLessonIndex(0);
//     };

//     const currentCourse = courses[currentCourseIndex];
//     const currentModale = currentCourse.modales[currentModaleIndex];
//     const currentSubModale = currentModale.sub_modales[currentSubModaleIndex];
//     const currentLesson = currentSubModale.lessone[currentLessonIndex];
//     const routeString = `courses/${currentCourse.coursesid}/modales/${currentModale.modalesid}/lessone/${currentSubModale.submodaleID}`;

//     return (
//         <div>
//             <div>
//                 <h1>Select a Course</h1>
//                 {courses.map((course, index) => (
//                     <button key={course.coursesid} onClick={() => handleCourseSelect(index)}>
//                         {course.names}
//                     </button>
//                 ))}
//             </div>
//             <div>
//                 <h2>{currentCourse.names}</h2>
//                 <h3>{currentModale.modaleNames}</h3>
//                 <h4>{currentSubModale.SubMode_Name}</h4>
//                 <div>
//                     <strong>{currentLesson.lesNames}:</strong> {currentLesson.description}
//                 </div>
//                 <p>{routeString}</p>
//                 <div className="my-4 flex justify-end">
//                     <button
//                         onClick={handlePrevious}
//                         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//                     >
//                         Previous
//                     </button>
//                 </div>
//                 <div className="my-4 flex justify-end">
//                     <button
//                         onClick={handleNext}
//                         className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
//                     >
//                         Next
//                     </button>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default TestText;

////////////==================================================

import React, { useState } from 'react';

// Define types for each object in the structure
type Lesson = {
  lessioneID: number;
  lesNames: string;
  description: string;
};

type SubModale = {
  submodaleID: number;
  SubMode_Name: string;
  lessone: Lesson[];
};

type Modale = {
  modalesid: number;
  modaleNames: string;
  sub_modales: SubModale[];
};

type Course = {
  coursesid: number;
  names: string;
  modales: Modale[];
};

function TestText() {
  // Type the courses array as an array of Course
  const courses: Course[] = [
    {
      coursesid: 2,
      names: "Next",
      modales: [
        {
          modalesid: 4,
          modaleNames: "Basics Next",
          sub_modales: [
            {
              submodaleID: 12,
              SubMode_Name: 'sub modale 1',
              lessone: [
                { lessioneID: 21, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone1" },
                { lessioneID: 21765434, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone2" },
                { lessioneID: 23231, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone2" },
              ]
            },
            {
              submodaleID: 1,
              SubMode_Name: 'sub modale 2',
              lessone: [
                { lessioneID: 24, lesNames: "Introduction to SQL", description: " lessone 3" }
              ]
            },
            {
              submodaleID: 0,
              SubMode_Name: 'sub modale 3',
              lessone: [
                { lessioneID: 25, lesNames: "Introduction to SQL", description: "lessone 4" },
              ]
            }
          ]
        },
        {
          modalesid: 5,
          modaleNames: "anvand Next",
          sub_modales: [
            {
              submodaleID: 1121,
              SubMode_Name: 'Baccis 1',
              lessone: [
                { lessioneID: 30, lesNames: "Introduction to SQL", description: "lessone6" },
              ]
            },
            {
              submodaleID: 10985,
              SubMode_Name: 'Baccis 2',
              lessone: [
                { lessioneID: 33, lesNames: "Introduction to SQL", description: "lessone 8" }
              ]
            },
            {
              submodaleID: 98756716,
              SubMode_Name: 'Baccis 3',
              lessone: [
                { lessioneID: 77, lesNames: "Introduction to SQL", description: "lessone 10" },
              ]
            }
          ]
        }
      ]
    },
    {
      coursesid: 1,
      names: "ReactJS",
      modales: [
        {
          modalesid: 1,
          modaleNames: "Basics",
          sub_modales: [
            {
              submodaleID: 1121212,
              SubMode_Name: 'Baccis 1',
              lessone: [
                { lessioneID: 5, lesNames: "Introduction to SQL", description: "Flutter គឺជា lessone1" },
                { lessioneID: 1, lesNames: "Introduction to postgres", description: "lessone2 " },
              ]
            },
            {
              submodaleID: 2234222,
              SubMode_Name: 'Baccis 2',
              lessone: [
                { lessioneID: 7, lesNames: "Introduction to SQL", description: " lessone 3" }
              ]
            },
            {
              submodaleID: 33424253,
              SubMode_Name: 'Baccis 3',
              lessone: [
                { lessioneID: 8, lesNames: "Introduction to SQL", description: "lessone 4" },
                { lessioneID: 9, lesNames: "Introduction to SQL", description: "lessone 5" }
              ]
            }
          ]
        },
        {
          modalesid: 2,
          modaleNames: "anvand",
          sub_modales: [
            {
              submodaleID: 423442344,
              SubMode_Name: 'Baccis 1',
              lessone: [
                { lessioneID: 10, lesNames: "Introduction to SQL", description: "lessone6" },
                { lessioneID: 11, lesNames: "Introduction to postgres", description: "lessone7" },
              ]
            },
            {
              submodaleID: 5543,
              SubMode_Name: 'Baccis 2',
              lessone: [
                { lessioneID: 13, lesNames: "Introduction to SQL", description: "lessone 8" }
              ]
            },
            {
              submodaleID: 665,
              SubMode_Name: 'Baccis 3',
              lessone: [
                { lessioneID: 15, lesNames: "Introduction to SQL", description: "lessone 10" },
                { lessioneID: 16, lesNames: "Introduction to SQL", description: "lessone 11" }
              ]
            }
          ]
        }
      ]
    },
  ];

  const [currentCourseIndex, setCurrentCourseIndex] = useState<number>(0);
  const [currentModaleIndex, setCurrentModaleIndex] = useState<number>(0);
  const [currentSubModaleIndex, setCurrentSubModaleIndex] = useState<number>(0);
  const [currentLessonIndex, setCurrentLessonIndex] = useState<number>(0);

  const handleNext = () => {
    const currentCourse = courses[currentCourseIndex];
    const currentModale = currentCourse.modales[currentModaleIndex];
    const currentSubModale = currentModale.sub_modales[currentSubModaleIndex];

    if (currentLessonIndex < currentSubModale.lessone.length - 1) {
      setCurrentLessonIndex(currentLessonIndex + 1); // Move to next lesson
    } else if (currentSubModaleIndex < currentModale.sub_modales.length - 1) {
      setCurrentSubModaleIndex(currentSubModaleIndex + 1); // Move to next submodale
      setCurrentLessonIndex(0); // Reset lesson index to the first lesson
    } else if (currentModaleIndex < currentCourse.modales.length - 1) {
      setCurrentModaleIndex(currentModaleIndex + 1); // Move to next modale
      setCurrentSubModaleIndex(0); // Reset submodale index
      setCurrentLessonIndex(0); // Reset lesson index
    } else {
      console.log("You have reached the end of the course!");
    }
  };

  const handlePrevious = () => {
    const currentCourse = courses[currentCourseIndex];
    const currentModale = currentCourse.modales[currentModaleIndex];
    const currentSubModale = currentModale.sub_modales[currentSubModaleIndex];

    if (currentLessonIndex > 0) {
      setCurrentLessonIndex(currentLessonIndex - 1); // Go to the previous lesson
    } else if (currentSubModaleIndex > 0) {
      setCurrentSubModaleIndex(currentSubModaleIndex - 1); // Go to the previous submodale
      setCurrentLessonIndex(currentSubModale.lessone.length - 1); // Set the last lesson of the previous submodale
    } else if (currentModaleIndex > 0) {
      setCurrentModaleIndex(currentModaleIndex - 1); // Go to the previous modale
      setCurrentSubModaleIndex(currentCourse.modales[currentModaleIndex - 1].sub_modales.length - 1); // Go to the last submodale of the previous modale
      setCurrentLessonIndex(currentCourse.modales[currentModaleIndex - 1].sub_modales[currentCourse.modales[currentModaleIndex - 1].sub_modales.length - 1].lessone.length - 1); // Set the last lesson of the previous submodale
    } else if (currentCourseIndex > 0) {
      setCurrentCourseIndex(currentCourseIndex - 1); // Go to the previous course
      setCurrentModaleIndex(courses[currentCourseIndex - 1].modales.length - 1); // Go to the last modale of the previous course
      setCurrentSubModaleIndex(courses[currentCourseIndex - 1].modales[courses[currentCourseIndex - 1].modales.length - 1].sub_modales.length - 1); // Go to the last submodale of the previous modale
      setCurrentLessonIndex(courses[currentCourseIndex - 1].modales[courses[currentCourseIndex - 1].modales.length - 1].sub_modales[courses[currentCourseIndex - 1].modales[courses[currentCourseIndex - 1].modales.length - 1].sub_modales.length - 1].lessone.length - 1); // Set the last lesson of the previous submodale
    }
  };

  const handleCourseSelect = (courseIndex: number) => {
    setCurrentCourseIndex(courseIndex);
    setCurrentModaleIndex(0);
    setCurrentSubModaleIndex(0);
    setCurrentLessonIndex(0);
  };

  const currentCourse = courses[currentCourseIndex];
  const currentModale = currentCourse.modales[currentModaleIndex];
  const currentSubModale = currentModale.sub_modales[currentSubModaleIndex];
  const currentLesson = currentSubModale.lessone[currentLessonIndex];
  const routeString = `courses/${currentCourse.coursesid}/modales/${currentModale.modalesid}/lessone/${currentSubModale.submodaleID}`;

  return (
    <div>
      <div>
        <h1>Select a Course</h1>
        {courses.map((course, index) => (
          <button key={course.coursesid} onClick={() => handleCourseSelect(index)}>
            {course.names}
          </button>
        ))}
      </div>
      <div>
        <h2>{currentCourse.names}</h2>
        <h3>{currentModale.modaleNames}</h3>
        <h4>{currentSubModale.SubMode_Name}</h4>
        <div>
          <strong>{currentLesson.lesNames}:</strong> {currentLesson.description}
        </div>
        <p>{routeString}</p>
        <div className="my-4 flex justify-end">
          <button
            onClick={handlePrevious}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Previous
          </button>
        </div>
        <div className="my-4 flex justify-end">
          <button
            onClick={handleNext}
            className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default TestText;
