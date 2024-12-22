const express = require('express');
const { getCouses, createSubModaleCourse,getCourseById } = require('../controller/submodaleCousesController.js');
const router = express.Router();

router.get('/', getCouses);
router.get('/:id', getCourseById);
router.post('/', createSubModaleCourse);

module.exports = router;
