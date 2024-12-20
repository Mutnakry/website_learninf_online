import { useState } from 'react';
import Navbar from '../../component/Navbar';
import { FaLock } from "react-icons/fa";
import { Link } from 'react-router-dom';

interface CourseItem {
    id: number;
    name: string;
}

interface Course {
    id: number;
    name: string;
    courses_id: CourseItem[];
    quiz_id: CourseItem[];  // Ensure this is typed properly as CourseItem[]
    des: string;
}

const modale: Course[] = [
    {
        id: 1,
        name: 'Introduction to Flutter',
        courses_id: [
            { id: 1, name: "ABC" },
            { id: 2, name: "Gasber" },
            { id: 3, name: "Cambodia" },
        ],
        quiz_id: [
            { id: 1, name: "សំណួរ" },
        ],
        des: 'Flutter គឺជា framework ដែលបង្កើតឡើងដោយ Google សម្រាប់ការបង្កើតកម្មវិធីដែលអាចដំណើរការបានទាំងលើ iOS និង Android ដោយសរសេរកូដតែម្តង។ វាមានលខ្ខណៈល្បឿនលឿន មានភាពបត់បែន និងអាចបង្កើតការរចនាទាក់ទាញ។ ក្រុមហ៊ុនធំៗដូចជា Google, Alibaba និង eBay ប្រើវាសម្រាប់កម្មវិធីទំនើបរបស់ពួកគេ។ នៅកម្ពុជា Flutter កំពុងមានប្រជាប្រិយភាពខ្លាំង ដោយជាជម្រើសល្អសម្រាប់ការបង្កើតកម្មវិធី។ វគ្គសិក្សានេះជារបៀបរៀនពីមូលដ្ឋានដល់ជំនាញខ្ពស់ ការប្រើ SQLite សម្រាប់ទិន្នន័យក្នុងម៉ាស៊ីន និង Firebase សម្រាប់ទិន្នន័យពេលវេលាពិត។ Flutter គឺប្រើភាសា Dart ហើយបើអត់ចេះ អាចរៀនលើ CodeForCambodia បាន។ វាមានគ្រប់ចំណុចដែលអ្នកត្រូវការដើម្បីបង្កើតកម្មវិធីទំនើប!‍',
    },
    {
        id: 1564,
        name: 'Flutter Widgets and UI Basics',
        courses_id: [
            { id: 1, name: "Angor" },
            { id: 2, name: "Thiger" },
            { id: 3, name: "AC" },
        ],
        quiz_id: [
            { id: 1, name: "សំណួរ" }, // Corrected quiz name
        ],
        des: 'Flutter គឺជា framework ដែលបង្កើតឡើងដោយ Google សម្រាប់ការបង្កើតកម្មវិធីដែលអាចដំណើរការបានទាំងលើ iOS និង Android ដោយសរសេរកូដតែម្តង。',
    },
];

function CourseModale() {
    // State to track which dropdown is open
    const [dropdownOpen, setDropdownOpen] = useState<number | null>(null);

    const toggleDropdown = (id: number) => {
        setDropdownOpen((prev) => (prev === id ? null : id));
    };

    return (
        <div className='pt-24'>
            <Navbar />
            <div className='max-w-screen-2xl mx-auto px-4'>
                <div>
                    {modale.slice(0, 1).map((course) => (
                        <div key={course.id}>
                            <div className='text-blue-600 text-3xl font-NotoSansKhmer py-4'>
                                <p>{course.name}</p>
                            </div>
                            <div className='px-4 py-7 bg-blue-100 text-gray-500 font-NotoSansKhmer line-clamp-3 rounded-xl'>
                                <p>{course.des}</p>
                            </div>
                        </div>
                    ))}

                </div>
                <div className='flex py-4'>
                    <Link to={'/'} className='py-2 px-6 text-xs text-white bg-orange-500 rounded'>បន្ដការរៀន</Link>
                </div>
                <div className="space-y-4 p-4 bg-white shadow rounded-lg border-2 border-blue-500/50 ">
                    <h2 className='text-blue-600 text-3xl font-NotoSansKhmer'>Course</h2>
                    {modale.map((course, index) => (
                        <div key={course.id}>
                            <button
                                onClick={() => toggleDropdown(course.id)}
                                className="flex w-full items-centertext-left px-4 py-4 bg-blue-100 rounded">
                                <p className="h-8 w-8 text-center text-white bg-blue-600 rounded-full flex items-center justify-center mr-4">
                                    {index + 1}
                                </p>
                                <div>
                                    <p
                                        className=" w-full items-centertext-left  bg-blue-100 rounded"
                                    >
                                        {course.name}
                                    </p>
                                </div>
                            </button>
                            {/* to={`/course/${course.id}/modales/${course.courses_id}`}  */}
                            <div>
                                {dropdownOpen === course.id && (
                                    <div className='border-x border-b border-blue-200 py-2 px-8'>
                                        <div>
                                            {course.courses_id.map((item) => (
                                                <Link
                                                    to={`/course/${course.id}/modales/${item.id}/lessons/${item.id}`}
                                                >
                                                    <div className="px-4 py-2 mt-2 bg-slate-100 rounded hover:scale-105 duration-700 border-2 hover:border-blue-400 delay-300">
                                                        <p key={item.id} >
                                                            <div className="font-semibold">{item.name}</div>
                                                        </p>
                                                        <p className='flex space-x-2 text-sm text-gray-500 font-light'> <FaLock /> <span>lock</span></p>
                                                    </div>
                                                </Link>
                                            ))}

                                        </div>
                                        <div className="space-y-2">
                                            {course.quiz_id.map((item) => (
                                                <Link
                                                    to={`/course/${course.id}/modales/${item.id}/lessons/${item.id}`}
                                                >
                                                    <div className="px-4 mt-2 py-2 bg-slate-100 space-y-2 rounded hover:scale-105 duration-700 border-2 hover:border-blue-400 delay-300">
                                                        <p key={item.id}>
                                                            <div className="font-semibold">{item.name}</div>
                                                        </p>
                                                        <p className='flex space-x-2 text-sm text-gray-500 font-light'> <FaLock /> <span>lock</span></p>

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
        </div>
    );
}

export default CourseModale;
