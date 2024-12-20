const jwt = require('jsonwebtoken');

// Middleware to check if the user is authenticated
const authenticateToken = (req, res, next) => {
    const token = req.header('Authorization')?.split(' ')[1];  // Bearer <token>

    if (!token) {
        return res.status(401).json({ message: 'Access denied, no token provided' });
    }

    try {
        const decoded = jwt.verify(token, 'your-secret-key');
        req.user = decoded;
        next();  // Proceed to the next middleware or route handler
    } catch (err) {
        res.status(400).json({ message: 'Invalid token' });
    }
};

module.exports = authenticateToken;
