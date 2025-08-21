const express = require('express');

const infoRoutes = require('./info_routes');

const router = express.Router();

router.use('/info', infoRoutes);

module.exports = router;
