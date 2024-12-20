const express = require('express');
const { getCouses, createModaleCourse,getCourseById } = require('../controller/modaleCousesController.js');
const router = express.Router();

router.get('/', getCouses);
router.get('/:id', getCourseById);
router.post('/', createModaleCourse);

module.exports = router;
