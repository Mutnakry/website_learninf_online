const db = require('../db/db.js');

// Get all users
const getCouses = async (req, res) => {
    try {
        const result = await db.query('SELECT * FROM modales');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


const getCourseById = async (req, res) => {
    const { id } = req.params;  // Extract the ID from the request parameters

    try {
        const result = await db.query(
            'SELECT m.*,c.* FROM modales as m INNER JOiN courses as c ON c.cous_id = m.courses_id where m.courses_id =$1',
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


const createModaleCourse = async (req, res) => {
    const { mod_name, courses_id, user_id, quiz_id, user_at, user_update, mod_status, create_at, update_at } = req.body;

    try {
        // Insert data into the modales table
        const result = await db.query(
            'INSERT INTO modales (mod_name, courses_id, user_id, quiz_id, user_at, user_update, mod_status, create_at, update_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING mod_id',
            [mod_name, courses_id, user_id, quiz_id, user_at, user_update, mod_status, create_at, update_at]
        );

        // Respond with success
        res.status(201).json({ success: true, mod_id: result.rows[0].mod_id, message: 'Module created successfully' });
    } catch (err) {
        console.error('Error creating module:', err);  // Log error details
        res.status(500).json({ error: 'Server error: ' + err.message });
    }
};



module.exports = {
    getCouses,
    createModaleCourse,
    getCourseById
};
