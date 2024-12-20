// const db = require('../db/db.js');

// // Get all users
// const getCouses = async (req, res) => {
//     try {
//         const result = await db.query('SELECT * FROM lessones ');
//         res.json(result.rows);
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };


// const createLessones = async (req, res) => {
//     const { les_name, modale_id, courses_id, title, video, image, lessones_type, code, description, user_at, user_update } = req.body;
//     try {
//         const result = await db.query(
//             'INSERT INTO lessones (les_name, modale_id, courses_id, title, video, image, lessones_type, code, description, user_at, user_update) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING les_id',
//             [les_name, modale_id, courses_id, title, video, image, lessones_type, code, description, user_at, user_update]
//         );
        
//         // Respond with success
//         res.status(201).json({ success: true, les_id: result.rows[0].les_id, message: 'Lesson created successfully' });
//     } catch (err) {
//         console.error('Error creating lesson:', err);  // Log error details
//         res.status(500).json({ error: 'Server error: ' + err.message });
//     }
// };

// module.exports = {
//     getCouses,
//     createLessones,
// };




const db = require('../db/db.js');

// Get all users
const getCouses = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM lessones ');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};



const getLessoneById = async (req, res) => {
    const { modaleId, courseId } = req.params; 

    try {
        const result = await db.query(
            'SELECT * FROM lessones as l inner join modales as m ON m.mod_id = l.modale_id inner join courses as c On c.cous_id = l.courses_id where l.modale_id=$1 and l.courses_id= $2',
            [modaleId, courseId]
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


const createLessones = async (req, res) => {
    const { les_name, modale_id, courses_id, title, lessones_type, code, description, user_at, user_update } = req.body;
    const video_url = req.files?.video ? `/uploads/${req.files.video[0].filename}` : null; // Path to video file
    const image_url = req.files?.image ? `/uploads/${req.files.image[0].filename}` : null; // Path to image file

    try {
        const result = await db.query(
            'INSERT INTO lessones (les_name, modale_id, courses_id, title, video_url, image_url, lessones_type, code, description, user_at, user_update) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11) RETURNING les_id',
            [les_name, modale_id, courses_id, title, video_url, image_url, lessones_type, code, description, user_at, user_update]
        );

        res.status(201).json({ success: true, les_id: result.rows[0].les_id, message: 'Lesson created successfully' });
    } catch (err) {
        console.error('Error creating lesson:', err);
        res.status(500).json({ error: 'Server error: ' + err.message });
    }
};

module.exports = {
    getCouses,
    createLessones,
    getLessoneById,
};
