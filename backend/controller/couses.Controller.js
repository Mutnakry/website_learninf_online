const pool = require('../db/db.js');

// Get all users
const getCouses = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM courses ');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

const createCourse = async (req, res) => {
    const { cous_name, category_id, user_id, price, status, course_type, chapter, lesson, exam, document, exercise, description } = req.body;

    try {
        // Insert data into the courses table
        const result = await pool.query(
            'INSERT INTO courses (cous_name, category_id, user_id, price, status, course_type, chapter, lesson, exam, document, exercise, description) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12) RETURNING cous_id',
            [cous_name, category_id, user_id, price, status, course_type, chapter, lesson, exam, document, exercise, description]
        );
        
        // Respond with success
        res.status(201).json({ success: true, cous_id: result.rows[0].cous_id, message: 'Course created successfully' });
    } catch (err) {
        console.error('Error creating course:', err);  // Log error details
        res.status(500).json({ error: 'Server error: ' + err.message });
    }
};




module.exports = {
    getCouses,
    createCourse,
};
