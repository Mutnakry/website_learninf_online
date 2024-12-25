const pool = require('../db/db.js');

// Get all users
const getDetailCategory = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM detail_category ');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    getDetailCategory,
};
