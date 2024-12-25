// const express = require('express');
// const { getCouses, createLessones } = require('../controller/lessonesController');
// const router = express.Router();

// router.get('/', getCouses);
// router.post('/', createLessones);

// module.exports = router;



const express = require('express');
const multer = require('multer');
const { getCouses, createLessones,getLessoneById } = require('../controller/lessonesController');
const router = express.Router();

// Setup multer storage configuration
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './uploads/');  // Save to the "uploads" folder
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);  // Create a unique filename
  }
});

const upload = multer({ storage: storage });

router.get('/', getCouses);
router.get('/:courseId/:modaleId/:submodaleId', getLessoneById);

router.post('/', upload.fields([{ name: 'image' }, { name: 'video' }]), createLessones);  // Handle file upload for both image and video

module.exports = router;
