import { useEffect, useState } from 'react';
import Navbar from '../../component/Navbar';
import { FaLock } from 'react-icons/fa';
import { Link, useNavigate, useParams } from 'react-router-dom';
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
    const [modaleID, setModaleID] = useState<ModaleID[]>([]);
    const [lessonesID, setLessonesID] = useState<LessonesID[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const [UserLoginType, setUserLoginType] = useState<string | null>("");

    useEffect(() => {
        const storedRol = localStorage.getItem("user_role");

        if (storedRol) {
            setUserLoginType(storedRol);
        }
    }, []);

    const { id } = useParams();



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
            const response = await axios.get<LessonesID[]>('http://localhost:5000/api/submodale');
            setLessonesID(response.data);
        } catch (err) {
            console.error('Error fetching lessons:', err);
        }
    };

    

    const [currentCourseIndex, setCurrentCourseIndex] = useState(0);

    const navigate = useNavigate();

    const handleNext = () => {
        // Increment the current course index
        const nextIndex = currentCourseIndex + 1;
        if (nextIndex < lessonesID.length) {
            setCurrentCourseIndex(nextIndex);
        } else {
            setCurrentCourseIndex(0);
        }
        const nextLesson = lessonesID[currentCourseIndex + 1];

        if (nextLesson) {
            // Check if the next lesson has a different modale_id than the current lesson
            if (nextLesson.modale_id !== lessonesID[currentCourseIndex].modale_id) {
                // If modale_id is different, navigate to that new modale_id
                navigate(`/course/${lessonesID[0].courses_id}/modales/${nextLesson.modale_id}/lessone/${nextLesson.sub_id}`);
            } else {
                // Otherwise, just navigate to the next lesson with the same modale_id
                navigate(`/course/${lessonesID[0].courses_id}/modales/${nextLesson.modale_id}/lessone/${nextLesson.sub_id}`);
            }
        }
    };


    return (
        <div className="pt-24">
            <Navbar />
            <div className="max-w-screen-2xl mx-auto px-4">


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

export default CourseModale;

