const express = require('express');
const router = express.Router();

const newControllers = require('../app/controllers/NewsControllers');

// newControllers.index();

router.use('/:details', newControllers.show);
router.use('/', newControllers.index);

module.exports = router;
