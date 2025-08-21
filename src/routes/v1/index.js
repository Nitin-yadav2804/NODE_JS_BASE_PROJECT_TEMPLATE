const express = require('express');
const { info } = require('../../controllers/info_controller');

const router = express.Router();

router.get('/info', info)

module.exports = router;
