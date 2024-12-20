const express = require('express');
const { getCouses, createCourse } = require('../controller/couses.Controller.js');
const router = express.Router();

router.get('/', getCouses);
router.post('/', createCourse);

module.exports = router;
