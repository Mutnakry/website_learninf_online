// import { useState } from 'react';
// import Navbar from '../../component/Navbar';
// import { FaLock } from 'react-icons/fa';
// import { Link } from 'react-router-dom';

// interface CourseItem {
//     id: number;
//     name: string;
//     description: string;
//     code: string;
// }

// interface Course {
//     id: number;
//     name: string;
//     courses_id: CourseItem[];
//     des: string;
// }

// const lession: Course[] = [
//     {
//         id: 1,
//         name: 'Introduction to Flutter',
//         courses_id: [
//             {
//                 id: 1,
//                 name: 'ABC',
//                 description: 'Flutter គឺជា open-source UI software development kit (SDK) ដែលត្រូវបានបង្កើតដោយ Google។ វាអាចប្រើប្រាស់បានទាំង iOS និង Android។',
//                 code: `
// import 'package:flutter/material.dart';

// void main() {
//   runApp(MyApp());
// }

// class MyApp extends StatelessWidget {
//   @override
//   Widget build(BuildContext context) {
//     return MaterialApp(
//       home: Scaffold(
//         appBar: AppBar(
//           title: Text('Hello Flutter!'),
//         ),
//         body: Center(
//           child: Text('Welcome to Flutter!'),
//         ),
//       ),
//     );
//   }
// }
//                 `,
//             },
//             {
//                 id: 2,
//                 name: 'Gasber',
//                 description: 'Flutter គឺជា open-source ដែលត្រូវបានបង្កើតដោយ Google។',
//                 code: `
// import 'package:flutter/material.dart';

// void main() {
//   runApp(MyApp());
// }
//                 `,
//             },
//             {
//                 id: 3,
//                 name: 'Cambodia',
//                 description: 'Flutter គឺជា open-source UI software development kit (SDK) ដែលត្រូវបានបង្កើតដោយ Google។',
//                 code: `
// void main() {
//   runApp(MyApp());
// }
//                 `,
//             },
//         ],
//         des: 'Flutter គឺជា framework ដែលបង្កើតឡើងដោយ Google សម្រាប់ការបង្កើតកម្មវិធីដែលអាចដំណើរការបានទាំងលើ iOS និង Android។',
//     },
// ];




// function CourseModale() {
//     return (
//         <div className="pt-24">
//             <Navbar />
//             <div className="max-w-screen-2xl mx-auto px-4">
//                 {lession.map((course) => (
//                     <div key={course.id} className="mb-12">
//                         <div className="text-blue-600 text-3xl font-NotoSansKhmer py-4">
//                             <p>{course.name}</p>
//                         </div>
//                         <div className="px-4 py-7 bg-blue-100 text-gray-500 font-NotoSansKhmer rounded-xl mb-6">
//                             <p>{course.des}</p>
//                         </div>
//                         {course.courses_id.map((item) => (
//                             <div key={item.id} className="mb-8">
//                                 <h3 className="text-xl font-bold text-blue-700 mb-2">{item.name}</h3>
//                                 <p className="text-gray-600 mb-4">{item.description}</p>
//                                 <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
//                                     <code>{item.code}</code>
//                                 </pre>
//                             </div>
//                         ))}
//                     </div>
//                 ))}
//             </div>

//         </div>
//     );
// }

// export default CourseModale;





import { useState } from 'react';
import Navbar from '../../component/Navbar';
import { FaLock } from 'react-icons/fa';
import { Link } from 'react-router-dom';

interface Lesson {
  id: number;
  name: string;
}

interface CourseItem {
  id: number;
  name: string;
  description: string;
  code: string;
  lessons_id?: Lesson[];
}

interface Course {
  id: number;
  name: string;
  courses_id: CourseItem[];
  des: string;
}

const lession: Course[] = [
  {
    id: 1,
    name: 'Introduction to Flutter',
    courses_id: [
      {
        id: 1,
        name: 'ABC',
        description: 'Flutter គឺជា open-source UI software development kit (SDK) ដែលត្រូវបានបង្កើតដោយ Google។ វាអាចប្រើប្រាស់បានទាំង iOS និង Android។',
        code: `
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Hello Flutter!'),
        ),
        body: Center(
          child: Text('Welcome to Flutter!'),
        ),
      ),
    );
  }
}
                `,
      },
      {
        id: 2,
        name: 'Gasber',
        description: 'Flutter គឺជា open-source ដែលត្រូវបានបង្កើតដោយ Google។',
        code: `
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}
                `,
      },
      {
        id: 3,
        name: 'Cambodia',
        description: 'Flutter គឺជា open-source UI software development kit (SDK) ដែលត្រូវបានបង្កើតដោយ Google។',
        code: `
void main() {
  runApp(MyApp());
}
                `,
      },
    ],
    des: 'Flutter គឺជា framework ដែលបង្កើតឡើងដោយ Google សម្រាប់ការបង្កើតកម្មវិធីដែលអាចដំណើរការបានទាំងលើ iOS និង Android។',
  },

  {
    id: 3231,
    name: 'Introduction to Flutter',
    courses_id: [
      {
        id: 1,
        name: 'ABC',
        description: 'Flutter គឺជា open-source UI software development kit (SDK) ដែលត្រូវបានបង្កើតដោយ Google។ វាអាចប្រើប្រាស់បានទាំង iOS និង Android។',
        code: `
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}

class MyApp extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: Scaffold(
        appBar: AppBar(
          title: Text('Hello Flutter!'),
        ),
        body: Center(
          child: Text('Welcome to Flutter!'),
        ),
      ),
    );
  }
}
                `,
      },
      {
        id: 2,
        name: 'Gasber',
        description: 'Flutter គឺជា open-source ដែលត្រូវបានបង្កើតដោយ Google។',
        code: `
import 'package:flutter/material.dart';

void main() {
  runApp(MyApp());
}
                `,
      },
      {
        id: 3,
        name: 'Cambodia',
        description: 'Flutter គឺជា open-source UI software development kit (SDK) ដែលត្រូវបានបង្កើតដោយ Google។',
        code: `
void main() {
  runApp(MyApp());
}
                `,
      },
    ],
    des: 'Flutter គឺជា framework ដែលបង្កើតឡើងដោយ Google សម្រាប់ការបង្កើតកម្មវិធីដែលអាចដំណើរការបានទាំងលើ iOS និង Android។',
  },
];

function CourseModale() {
  const [currentCourseIndex, setCurrentCourseIndex] = useState(0);
  const currentCourse = lession[0]; // Assuming only one course for now

  const handleNext = () => {
    setCurrentCourseIndex((prevIndex) =>
      prevIndex + 1 < currentCourse.courses_id.length ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="pt-24">
      <Navbar />
      <div className="max-w-screen-2xl mx-auto px-4">
        <div className="mb-12">
          <div className="text-blue-600 text-3xl font-NotoSansKhmer py-4">
            <p>{currentCourse.name}</p>
          </div>
          <div className="px-4 py-7 bg-blue-100 text-gray-500 font-NotoSansKhmer rounded-xl mb-6">
            <p>{currentCourse.des}</p>
          </div>
          <div className="mb-8">
            <h3 className="text-xl font-bold text-blue-700 mb-2">
              {currentCourse.courses_id[currentCourseIndex].name}
            </h3>
            <p className="text-gray-600 mb-4">
              {currentCourse.courses_id[currentCourseIndex].description}
            </p>
            <pre className="bg-gray-900 text-white p-4 rounded-md overflow-x-auto">
              <code>{currentCourse.courses_id[currentCourseIndex].code}</code>
            </pre>
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
    </div>
  );
}

export default CourseModale;
