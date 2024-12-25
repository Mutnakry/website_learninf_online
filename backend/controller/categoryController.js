const pool = require('../db/db.js');

// Get all users
const getCategory = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM category ');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    getCategory,
};
