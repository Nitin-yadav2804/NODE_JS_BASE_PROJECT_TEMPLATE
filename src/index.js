const express = require('express');

const { PORT } = require('./config/server_config.js');

const app = express();





app.listen(PORT, () => {
    console.log(`Server running on Port : ${PORT}`);
})