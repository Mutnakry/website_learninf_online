const db = require('../db/db.js');

// Get all users
// const getCouses = async (req, res) => {
//     try {
//         const result = await db.query('SELECT * FROM sub_modale');
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

const getCouses = async (req, res) => {
    try {
        const result = await db.query('SELECT m.*, c.course_type FROM sub_modale as m INNER JOiN courses as c ON c.cous_id = m.courses_id');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};






const getCourseById = async (req, res) => {
    const { id } = req.params;  // Extract the ID from the request parameters

    try {
        const result = await db.query(
            'SELECT m.*,c.* FROM sub_modale as m INNER JOiN courses as c ON c.cous_id = m.courses_id where m.courses_id =$1',
            [id]
        );

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Course not found' });
        }

        res.json(result.rows);
    } catch (err) {
        console.error('Error fetching course by ID:', err);
        res.status(500).json({ error: 'Server error: ' + err.message });
    }
};


const createSubModaleCourse = async (req, res) => {
    const { sub_name, modale_id, courses_id, user_at } = req.body;

    // Basic input validation
    if (!sub_name || !modale_id || !courses_id || !user_at) {
        return res.status(400).json({ error: 'All fields are required: sub_name, modale_id, courses_id, user_at' });
    }

    try {
        const result = await db.query(
            'INSERT INTO sub_modale (sub_name, modale_id, courses_id, user_at) VALUES ($1, $2, $3, $4) RETURNING sub_id',
            [sub_name, modale_id, courses_id, user_at]
        );

        // Respond with success
        res.status(201).json({ 
            success: true, 
            sub_id: result.rows[0].sub_id, 
            message: 'Module created successfully' 
        });
    } catch (err) {
        console.error('Error creating module:', err);

        // Handle specific database errors (example for PostgreSQL)
        if (err.code === '23503') {
            res.status(400).json({ error: 'Invalid foreign key reference' });
        } else {
            res.status(500).json({ error: 'Server error: ' + err.message });
        }
    }
};




module.exports = {
    getCouses,
    createSubModaleCourse,
    getCourseById
};
