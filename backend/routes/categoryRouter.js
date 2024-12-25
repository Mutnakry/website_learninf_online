const express = require('express');
const { getCategory } = require('../controller/categoryController.js');
const router = express.Router();

router.get('/', getCategory);

module.exports = router;
