const express = require('express');
const router = express.Router();

const courseControllers = require('../app/controllers/CourseController');

// newControllers.index();

router.get('/:details', courseControllers.show);



module.exports = router;
