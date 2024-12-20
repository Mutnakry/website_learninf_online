// import { useEffect, useState, useRef } from 'react';
// import Navbar from '../../component/Navbar';
// import axios from 'axios';
// import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
// import { atomDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
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
//     video: string;
//     image: string;
//     description: string;
// }

// function CourseModale() {
//     const [lessonesID, setLessonesID] = useState<LessonesID[]>([]);
//     const [loading, setLoading] = useState<boolean>(true);
//     const [error, setError] = useState<string | null>(null);
//     const [copySuccess, setCopySuccess] = useState<string | null>(null);
//     const [output, setOutput] = useState<string | null>(null);
//     const [htmlOutput, setHtmlOutput] = useState<string | null>(null); // State to store HTML output
//     const [editedCode, setEditedCode] = useState<string | null>(null); // New state to manage editable code
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
//                 setCopySuccess('បានចម្លង');
//                 setTimeout(() => setCopySuccess(null), 2000);
//             })
//             .catch(err => {
//                 console.error('Failed to copy code:', err);
//             });
//     };

//     const runHTMLCode = (code: string) => {
//         try {
//             // Inject HTML code into a container element
//             setHtmlOutput(code); // You can directly set the HTML code to be rendered
//         } catch (err) {
//             setHtmlOutput('Error: ' + err.message);
//         }
//     };

//     // Update the edited code when user types in the textarea
//     const handleCodeChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
//         setEditedCode(e.target.value);
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
//                                 <h2 className='text-2xl font-bold mb-4'>{lesson.title}</h2>
//                                 <div className='relative'>
//                                     {/* Editable textarea for code */}
//                                     <div ref={codeBlockRef} className='relative bg-gray-100 rounded-lg shadow-lg' style={{ fontFamily: 'Caveat, cursive', fontSize: '1.2rem' }}>
//                                         <textarea
//                                             value={editedCode ?? lesson.code} // Use edited code or the original code
//                                             onChange={handleCodeChange}
//                                             rows={10}
//                                             className='w-full p-4 text-gray-700 bg-white rounded border'
//                                             style={{ fontFamily: 'monospace', fontSize: '1rem', minHeight: '200px' }}
//                                         />
//                                     </div>

//                                     <div className='flex absolute space-x-3 right-2 top-2'>
//                                         <div className="relative group">
//                                             <button
//                                                 onClick={() => copyToClipboard(editedCode ?? lesson.code)}
//                                                 className="bg-slate-600 text-white px-2 py-2 rounded hover:bg-slate-800 opacity-50"
//                                             >
//                                                 <FaRegCopy />
//                                             </button>
//                                             <span className="absolute bottom-full mb-2 hidden group-hover:block bg-gray-700 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
//                                                 ចម្លង
//                                             </span>
//                                             {copySuccess && (
//                                                 <span className="absolute bottom-full mb-2 hidden group-hover:block bg-green-500 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
//                                                     ✔ ចម្លងជោគជ័យ
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
//                                                 រក្សាទុករូបភាព
//                                             </span>
//                                         </div>

//                                         <div className="relative group">
//                                             <button
//                                                 onClick={() => runHTMLCode(editedCode ?? lesson.code)}
//                                                 className="bg-green-600 text-white px-2 py-2 rounded hover:bg-green-800 opacity-50"
//                                             >
//                                                 Run Code
//                                             </button>
//                                         </div>
//                                     </div>
//                                 </div>

//                                 {htmlOutput && (
//                                     <div className="mt-4 p-4 bg-gray-200 rounded">
//                                         <h3 className="font-bold text-lg">Output:</h3>
//                                         <div className="text-sm whitespace-pre-wrap" dangerouslySetInnerHTML={{ __html: htmlOutput }} />
//                                     </div>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default CourseModale;

import React, { useState } from 'react';
import axios from 'axios';

const languageResources = {
  Java: {
    description: 'Java is a popular object-oriented programming language.',
    tutorial: 'https://www.java.com/en/download/help/',
  },
  'React.js': {
    description: 'React is a JavaScript library for building user interfaces.',
    tutorial: 'https://reactjs.org/docs/getting-started.html',
  },
  JavaScript: {
    description: 'JavaScript is a high-level programming language used for web development.',
    tutorial: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide',
  },
  PHP: {
    description: 'PHP is a general-purpose scripting language used for web development.',
    tutorial: 'https://www.php.net/manual/en/tutorial.php',
  },
  Python: {
    description: 'Python is an interpreted, high-level programming language.',
    tutorial: 'https://docs.python.org/3/tutorial/',
  },
};

function SupportProgram() {
  const [selectedLanguage, setSelectedLanguage] = useState('Java');
  const [codeExample, setCodeExample] = useState('');
  const [editedCode, setEditedCode] = useState('');
  const [output, setOutput] = useState('');

  const languages = ['Java', 'React.js', 'JavaScript', 'PHP', 'Python'];

  const languageExamples = {
    Java: `public class HelloWorld { \n  public static void main(String[] args) { \n    System.out.println("Hello World"); \n  } \n}`,
    'React.js': `import React from 'react'; \nconst App = () => { \n  return <h1>Hello from React!</h1>; \n}; \nexport default App;`,
    JavaScript: `console.log("Hello World in JavaScript!");`,
    PHP: `<?php \n  echo "Hello World in PHP!"; \n?>`,
    Python: `print("Hello World in Python!")`,
  };

  React.useEffect(() => {
    setCodeExample(languageExamples[selectedLanguage]);
    setEditedCode(languageExamples[selectedLanguage]);
  }, [selectedLanguage]);

  const handleLanguageChange = (e) => {
    const language = e.target.value;
    setSelectedLanguage(language);
    setCodeExample(languageExamples[language]);
    setEditedCode(languageExamples[language]);
  };

  const handleCodeChange = (e) => {
    setEditedCode(e.target.value);
  };

  const runCode = async () => {
    if (selectedLanguage === 'JavaScript') {
      try {
        // Execute JavaScript code using eval (ensure the code is safe)
        const result = eval(editedCode);
        setOutput(result);
      } catch (error) {
        setOutput(`Error: ${error.message}`);
      }
    } else if (selectedLanguage === 'React.js') {
      // React code requires bundling and cannot be executed directly
      setOutput("React.js code needs to be compiled and run in a React environment.");
    } else if (selectedLanguage === 'PHP') {
      try {
        // Send PHP code to the backend for execution
        const response = await axios.post('http://localhost:5000/run-php', {
          code: editedCode
        });
        setOutput(response.data.output);
      } catch (error) {
        setOutput('Error: Could not execute PHP code.');
      }
    } else {
      setOutput(`Code execution is not supported for ${selectedLanguage}`);
    }
  };

  return (
    <div>
      <h1>Programming Language Support</h1>
      <div>
        <label>Select a Language: </label>
        <select value={selectedLanguage} onChange={handleLanguageChange}>
          {languages.map((language) => (
            <option key={language} value={language}>
              {language}
            </option>
          ))}
        </select>
      </div>

      <h2>Code Example for {selectedLanguage}:</h2>
      <textarea
        value={editedCode}
        onChange={handleCodeChange}
        rows={10}
        className="w-full p-4 text-gray-700 bg-white rounded border"
        style={{ fontFamily: 'monospace', fontSize: '1rem', minHeight: '200px' }}
      />

      <div>
        <button onClick={runCode} className="mt-4 p-2 bg-blue-500 text-white rounded">
          Run Code
        </button>
      </div>

      {output && (
        <div className="mt-4">
          <h3>Output:</h3>
          <pre>{output}</pre>
        </div>
      )}
    </div>
  );
}

export default SupportProgram;
