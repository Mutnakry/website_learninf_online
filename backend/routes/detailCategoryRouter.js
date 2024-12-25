const express = require('express');
const { getDetailCategory } = require('../controller/detailCategoryController.js');
const router = express.Router();

router.get('/', getDetailCategory);

module.exports = router;
