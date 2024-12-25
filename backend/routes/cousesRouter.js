const express = require('express');
const { getCouses, createCourse ,getCoursesById} = require('../controller/couses.Controller.js');
const router = express.Router();

router.get('/', getCouses);
router.post('/', createCourse);
router.get('/:categoryId/:detailcategoryId', getCoursesById);


module.exports = router;
