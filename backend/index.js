const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json()); 
app.use(bodyParser.json());

// userRoutes
const userRoutes = require('./routes/userRoutes.js');
app.use('/api/users', userRoutes);
// cousesRouter
const cousesRouter = require('./routes/cousesRouter.js');
app.use('/api/couses', cousesRouter);
// modaleCousesRouter
const modaleCousesRouter = require('./routes/modaleCousesRouter.js');
app.use('/api/modale', modaleCousesRouter);

const submodaleCousesRouter = require('./routes/submodaleCousesRouter.js');
app.use('/api/submodale', submodaleCousesRouter);
// lessonesRouter
const lessonesRouter = require('./routes/lessonesRouter.js');
app.use('/api/lessone', lessonesRouter);

// categoryRouter
const categoryRouter = require('./routes/categoryRouter.js');
app.use('/api/category', categoryRouter);
// lessonesRouter
const detailCategoryRouter = require('./routes/detailCategoryRouter.js');
app.use('/api/detailcategory', detailCategoryRouter);

// Serve static files from the 'uploads' directory
app.use('/uploads', express.static(path.join(__dirname, './uploads')));

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
