const pool = require('../db/db.js');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

// Get all users
const getUsers = async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM users');
        res.json(result.rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Create a new user
// const createUser = async (req, res) => {
//     const { first_name, last_name, user_email, user_password } = req.body;

//     try {
//         const hashedPassword = await bcrypt.hash(user_password, 10);
//         await pool.query(
//             'INSERT INTO users (first_name, last_name, user_email, user_password) VALUES ($1, $2, $3, $4)',
//             [first_name, last_name, user_email, hashedPassword]
//         );
//         res.status(201).json({ message: 'User created successfully' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };

const createUser = async (req, res) => {
    const { first_name, last_name, user_age, gender, user_email, user_password } = req.body;

    try {
        // Validate input (additional validation logic can be added here)
        if (!first_name || !last_name || !user_email || !user_password) {
            return res.status(400).json({ error: 'All fields are required' });
        }
    
        const hashedPassword = await bcrypt.hash(user_password, 10);
    
        await pool.query(
            'INSERT INTO users (first_name, last_name, user_age, gender, user_email, user_password) VALUES ($1, $2, $3, $4, $5, $6)',
            [first_name, last_name, user_age, gender, user_email, hashedPassword]
        );
    
        res.status(201).json({ success: true, message: 'User created successfully' });
    } catch (err) {
        console.error('Error creating user:', err);  // Log error details
        if (err.code === '23505') {
            res.status(400).json({ error: 'Email already exists' });
        } else {
            res.status(500).json({ error: 'Server error: ' + err.message });
        }
    }
    
};


// Create a new user
// const createUser = async (req, res) => {
//     const { first_name, last_name, user_email, user_password } = req.body;

//     // Check if the logged-in user is an admin (this part assumes your JWT contains the user's role)
//     if (req.user && req.user.role !== 'admin') {
//         return res.status(403).json({ message: 'You do not have permission to create a user' });
//     }

//     try {
//         const hashedPassword = await bcrypt.hash(user_password, 10);
//         await pool.query(
//             'INSERT INTO users (first_name, last_name, user_email, user_password) VALUES ($1, $2, $3, $4)',
//             [first_name, last_name, user_email, hashedPassword]
//         );
//         res.status(201).json({ message: 'User created successfully' });
//     } catch (err) {
//         res.status(500).json({ error: err.message });
//     }
// };



// Update an existing user
const updateUser = async (req, res) => {
    const { user_id } = req.params;  // Get user_id from the URL parameter
    const { first_name, last_name, user_email, user_password } = req.body;

    try {
        // If password is provided, hash it; otherwise, leave it unchanged
        let hashedPassword = user_password ? await bcrypt.hash(user_password, 10) : undefined;

        const updateQuery = `
            UPDATE users
            SET first_name = COALESCE($1, first_name),
                last_name = COALESCE($2, last_name),
                user_email = COALESCE($3, user_email),
                user_password = COALESCE($4, user_password)
            WHERE user_id = $5
            RETURNING *;
        `;

        const values = [
            first_name || null,
            last_name || null,
            user_email || null,
            hashedPassword || null,
            user_id
        ];

        const result = await pool.query(updateQuery, values);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        res.status(200).json({ message: 'User updated successfully', data: result.rows[0] });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


const loginUser = async (req, res) => {
    const { user_email, user_password } = req.body;

    try {
        // Find the user by email
        const result = await pool.query('SELECT * FROM users WHERE user_email = $1', [user_email]);

        if (result.rowCount === 0) {
            return res.status(404).json({ message: 'User not found' });
        }

        const user = result.rows[0];

        // Compare the entered password with the hashed password
        const isPasswordValid = await bcrypt.compare(user_password, user.user_password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: 'Invalid password' });
        }

        // Generate a JWT token (set a secret key and expiration time)
        const token = jwt.sign({ user_id: user.user_id, user_email: user.user_email }, 'your-secret-key', { expiresIn: '1h' });

        // Send the response with the token
        res.status(200).json({
            message: 'Login successful',
            token: token,
            user_id:user.user_id,
            user_email: user.user_email,
            user_role: user.user_role,
            last_name:user.last_name,
            first_name:user.first_name,
            user_age:user.user_age,
            gender:user.gender,
        });
        

    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};


module.exports = {
    getUsers,
    createUser,
    updateUser,
    loginUser
};
