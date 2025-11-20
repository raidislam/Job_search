const express = require('express');
const { getAllJobs, getJobDetails } = require('../controllers/jobs.controller');
const router = express.Router();

router.get('/',getAllJobs);
router.get('/:id',getJobDetails);


module.exports = router;